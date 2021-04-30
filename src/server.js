/* global __static */
import fs from "fs";
import ws from "ws";
import path from "path";
import { Mutex } from "async-mutex";
import { v4 as uuid } from "uuid";
import { execFile } from "child_process";

export class Server {
  constructor(opts) {
    this.count = 0;
    this.current = 0;
    this.results = [];
    this.path = opts.path;
    this.size = opts.size;
    this.criteria = opts.criteria;
    this.workers = opts.workers;
    this.id = opts.id;
    this.token = opts.token;
    this.onOpen = opts.onOpen;
    this.onCountChange = opts.onCountChange;
    this.onResultChange = opts.onResultChange;
    this.socket = null;
    this.server = null;
    this.process = null;
    this.mutex = new Mutex();
    this.fn = [
      {
        std: (a, b) =>
          a.maxStrategyDrawDownPercent < b.maxStrategyDrawDownPercent,
        inverse: (a, b) =>
          a.maxStrategyDrawDownPercent > b.maxStrategyDrawDownPercent,
      },
      {
        std: (a, b) => a.all.netProfit > b.all.netProfit,
        inverse: (a, b) => a.all.netProfit < b.all.netProfit,
      },
      {
        std: (a, b) => a.all.percentProfitable > b.all.percentProfitable,
        inverse: (a, b) => a.all.percentProfitable < b.all.percentProfitable,
      },
      {
        std: (a, b) => a.all.profitFactor > b.all.profitFactor,
        inverse: (a, b) => a.all.profitFactor < b.all.profitFactor,
      },
    ];
    this.orders = [0, 1, 2, 3];
  }
  init() {
    this.count = 0;
    this.current = 0;
    this.results = [];
    if (this.onCountChange) this.onCountChange(0);
    if (this.onResultChange) this.onResultChange([]);
  }
  listen(port) {
    this.server = new ws.Server({ port });
    this.server.on("connection", (socket) => {
      this.socket = socket;
      this.socket.on("message", async (data) => {
        await this.mutex.runExclusive(() => {
          if (data.includes("study_error")) {
            this.current += 1;
            if (this.onResultChange) this.onResultChange(this.results);
            return;
          }
          const p = JSON.parse(data);
          if ("count" in p) {
            this.count = p.count;
            if (this.onCountChange) this.onCountChange(this.count);
          } else if (data.includes("netProfit")) {
            console.log(p.maxStrategyDrawDownPercent);
            this.append(p);
          }
        });
      });
    });
    this.server.on("close", () => {
      this.socket = null;
    });
  }
  round(item) {
    item.all.netProfit = item.all.netProfit.toFixed(2);
    item.all.netProfitPercent = (item.all.netProfitPercent * 100).toFixed(2);
    item.all.percentProfitable = (item.all.percentProfitable * 100).toFixed(2);
    item.all.profitFactor = item.all.profitFactor.toFixed(2);
    item.all.avgTrade = item.all.avgTrade.toFixed(2);
    item.all.avgTradePercent = (item.all.avgTradePercent * 100).toFixed(2);
    item.all.avgBarsInTrade = Math.round(item.all.avgBarsInTrade);
    item.maxStrategyDrawDown = item.maxStrategyDrawDown.toFixed(2);
    item.maxStrategyDrawDownPercent = (
      item.maxStrategyDrawDownPercent * 100
    ).toFixed(2);
    return item;
  }
  append(p) {
    const item = this.round(p);
    this.current += 1;
    console.log(item);
    if (item.maxStrategyDrawDownPercent <= this.criteria) {
      item.id = uuid();
      this.results.push(item);
      this.results.sort((a, b) => {
        for (const idx of this.orders) {
          const fn = this.fn[idx];
          if (fn.std(a, b)) return -1;
          if (fn.inverse(a, b)) return 1;
        }
        return 0;
      });
      if (this.results.length > this.size) this.results.pop();
    }
    if (this.onResultChange) this.onResultChange(this.results);
  }
  setOnCountChange(fn) {
    this.onCountChange = fn;
  }
  setOnResultChange(fn) {
    this.onResultChange = fn;
  }
  execute() {
    let f = false;
    if (f) {
      this.process = execFile(
        path.join(
          __static,
          process.platform === "win32" ? "crawler.exe" : "crawler"
        ),
        [this.id, this.token, this.workers]
      );
    }
  }
  send(data) {
    if (this.socket) {
      this.socket.send(data);
    }
  }
  save() {
    if (this.process != null) {
      this.process.kill();
      this.process = null;
    }
    const now = new Date();
    const writer = fs.createWriteStream(
      path.join(this.path, now.toISOString().replace(/:/g, "_") + "_" + this.criteria + ".csv")
    );
    writer.write(
      `\ufeff순익($),순익(%),트레이드,승률(%),수익팩터,"최대 손실폭($)","최대 손실폭(%)",` +
        `평균거래($),평균거래(%),평균봉수,레버리지,시작날짜,종료날짜,"전환선 Bars","기준선 Bars",` +
        `"선행스팬 B Bars","후행스팬 Offset","선행스팬 Offset","기준봉 수",LongFactor1,ShortFactor1,` +
        `"2번 조건: 기준봉 수",LongFactor2,ShortFactor2,"3번 조건: 기준봉 수",LongFactor3,ShortFactor3,` +
        `"4번 조건: 기준봉 수",LongFactor4,ShortFactor4,"5번 조건: 기준봉 수",LongFactor5,ShortFactor5,` +
        `"RSI Period","Pivot Lookback Right","Pivot Lookback Left","Max Of Lookback Range","Min Of Lookback Range",` +
        `"Left Bars","Right Bars","Minimum Number Of Divergence"\n`
    );
    this.results.forEach((v) => {
      writer.write(
        `${v.all.netProfit},${v.all.netProfitPercent},${v.all.totalTrades},${v.all.percentProfitable},` +
          `${v.all.profitFactor},${v.maxStrategyDrawDown},${v.maxStrategyDrawDownPercent},` +
          `${v.all.avgTrade},${v.all.avgTradePercent},${v.all.avgBarsInTrade},` +
          `${v.item[0]},${v.item[1]}-${v.item[3]}-${v.item[5]},${v.item[2]}-${v.item[4]}-${v.item[6]},` +
          v.item.slice(7).join(",") +
          "\n"
      );
    });
    writer.end();
    this.init();
  }
}
