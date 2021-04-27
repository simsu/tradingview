/* global __static */
import fs from "fs";
import ws from "ws";
import path from "path";
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
    this.fn = [
      (a, b) => a.maxStrategyDrawDownPercent < b.maxStrategyDrawDownPercent,
      (a, b) => a.all.netProfit > b.all.netProfit,
      (a, b) => a.all.percentProfitable > b.all.percentProfitable,
      (a, b) => a.all.profitFactor > b.all.profitFactor,
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
      this.socket.on("message", (data) => {
        const p = JSON.parse(data);
        if ("count" in p) {
          this.count = p.count;
          if (this.onCountChange) this.onCountChange(this.count);
        } else {
          this.append(p);
        }
      });
    });
    this.server.on("close", () => {
      this.socket = null;
    });
  }
  round(item) {
    item.all.netProfit = item.all.netProfit.toFixed(2);
    item.all.netProfitPercent = (item.all.netProfitPercent * 100).toFixed(2);
    item.all.profitFactor = item.all.profitFactor.toFixed(2);
    item.all.avgTrade = item.all.avgTrade.toFixed(2);
    item.all.avgTradePercent = (item.all.avgTradePercent * 100).toFixed(2);
    item.all.avgBarsInTrade = item.all.avgBarsInTrade.toFixed(2);
    item.maxStrategyDrawDown = item.maxStrategyDrawDown.toFixed(2);
    item.maxStrategyDrawDownPercent = (
      item.maxStrategyDrawDownPercent * 100
    ).toFixed(2);
    return item;
  }
  append(p) {
    const item = this.round(p);
    if (item.maxStrategyDrawDownPercent > this.criteria) return;
    item.id = uuid();
    this.results.push(item);
    this.results.sort((a, b) => this.compare(a, b));
    if (this.results.length > this.size) this.results.pop();
    if (this.onResultChange) this.onResultChange(this.results);
    this.current += 1;
  }
  compare(a, b) {
    for (const index of this.orders) {
      if (this.fn[index](a, b)) return -1;
    }
    return 1;
  }
  setOnCountChange(fn) {
    this.onCountChange = fn;
  }
  setOnResultChange(fn) {
    this.onResultChange = fn;
  }
  execute() {
    this.process = execFile(
      path.join(
        __static,
        process.platform === "win32" ? "crawler.exe" : "crawler"
      ),
      [this.id, this.token, this.workers]
    );
  }
  send(data) {
    if (this.socket) {
      this.socket.send(data);
    }
  }
  save() {
    if (this.process != null) {
      this.process.close();
      this.process = null;
    }
    const writer = fs.createWriteStream(
      path.join(this.path, Date.now() + "_" + this.criteria + ".csv")
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
          v.item.join(",") +
          "\n"
      );
    });
    writer.end();
    this.init();
  }
}
