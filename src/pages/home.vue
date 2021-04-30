<template>
  <div class="container-dk3v">
    <div class="left-1kdk">
      <v-row>
        <v-col>
          <v-text-field label="시작날짜" type="date" v-model="start">
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field label="종료날짜" type="date" v-model="end">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>레버리지</span>
        </v-col>
        <v-col>
          <v-text-field type="number" v-model.number="leverage"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>전환선 Bars</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[0].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[0].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[0].u"
          ></v-text-field>
          <v-checkbox v-model="config[0].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>기준선 Bars</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[1].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[1].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[1].u"
          ></v-text-field>
          <v-checkbox v-model="config[1].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>선행스팬 B Bars</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[2].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[2].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[2].u"
          ></v-text-field>
          <v-checkbox v-model="config[2].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>후행스팬 Offset</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[3].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[3].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[3].u"
          ></v-text-field>
          <v-checkbox v-model="config[3].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>선행스팬 Offset</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[4].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[4].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[4].u"
          ></v-text-field>
          <v-checkbox v-model="config[4].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>기준봉 수</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[5].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[5].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[5].u"
          ></v-text-field>
          <v-checkbox v-model="config[5].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>LongFactor</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[6].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[6].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[6].u"
          ></v-text-field>
          <v-checkbox v-model="config[6].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Short Factor</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[7].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[7].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[7].u"
          ></v-text-field>
          <v-checkbox v-model="config[7].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>2번 조건: 기준봉 수</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[8].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[8].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[8].u"
          ></v-text-field>
          <v-checkbox v-model="config[8].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>LongFactor 2</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[9].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[9].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[9].u"
          ></v-text-field>
          <v-checkbox v-model="config[9].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Short Factor 2</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[10].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[10].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[10].u"
          ></v-text-field>
          <v-checkbox v-model="config[10].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>3번 조건: 기준봉 수</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[11].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[11].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[11].u"
          ></v-text-field>
          <v-checkbox v-model="config[11].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>LongFactor 3</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[12].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[12].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[12].u"
          ></v-text-field>
          <v-checkbox v-model="config[12].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Short Factor 3</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[13].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[13].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[13].u"
          ></v-text-field>
          <v-checkbox v-model="config[13].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>4번 조건: 기준봉 수</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[14].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[14].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[14].u"
          ></v-text-field>
          <v-checkbox v-model="config[14].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>LongFactor 4</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[15].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[15].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[15].u"
          ></v-text-field>
          <v-checkbox v-model="config[15].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Short Factor 4</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[16].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[16].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[16].u"
          ></v-text-field>
          <v-checkbox v-model="config[16].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>5번 조건: 기준봉 수</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[17].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[17].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[17].u"
          ></v-text-field>
          <v-checkbox v-model="config[17].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>LongFactor 5</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[18].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[18].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[18].u"
          ></v-text-field>
          <v-checkbox v-model="config[18].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Short Factor 5</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[19].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[19].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[19].u"
          ></v-text-field>
          <v-checkbox v-model="config[19].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>RSI Period</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[20].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[20].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[20].u"
          ></v-text-field>
          <v-checkbox v-model="config[20].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Pivot Lookback Right</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[21].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[21].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[21].u"
          ></v-text-field>
          <v-checkbox v-model="config[21].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Pivot Lookback Left</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[22].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[22].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[22].u"
          ></v-text-field>
          <v-checkbox v-model="config[22].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Max Of Lookback Range</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[23].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[23].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[23].u"
          ></v-text-field>
          <v-checkbox v-model="config[23].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Min Of Lookback Range</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[24].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[24].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[24].u"
          ></v-text-field>
          <v-checkbox v-model="config[24].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Left Bars</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[25].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[25].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[25].u"
          ></v-text-field>
          <v-checkbox v-model="config[25].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Right Bars</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[26].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[26].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[26].u"
          ></v-text-field>
          <v-checkbox v-model="config[26].r"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="label-3d1f">
          <span>Minimum Number Of Divergence</span>
        </v-col>
        <v-col class="field-4hu7">
          <v-text-field
            label="시작"
            type="number"
            v-model.number="config[27].s"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="config[27].e"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="config[27].u"
          ></v-text-field>
          <v-checkbox v-model="config[27].r"></v-checkbox>
        </v-col>
      </v-row>
      <div :class="active">
        <v-btn
          elevation="2"
          large
          block
          class="txt-bold"
          :disabled="disabled"
          @click="submit"
        >
          {{ btnText }}
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
      btnText: "확인",
      start: "2019-01-01",
      end: "2020-12-31",
      leverage: 2,
      config: [
        { s: 8, e: 8, u: 1, r: false },
        { s: 4, e: 4, u: 1, r: false },
        { s: 14, e: 14, u: 1, r: false },
        { s: 9, e: 9, u: 1, r: false },
        { s: 28, e: 28, u: 1, r: false },
        { s: 3, e: 3, u: 1, r: false },
        { s: 1.95, e: 1.95, u: 1, r: false },
        { s: 1.95, e: 1.95, u: 1, r: false },
        { s: 10, e: 10, u: 1, r: false },
        { s: 1.65, e: 1.65, u: 1, r: false },
        { s: 1.75, e: 1.75, u: 1, r: false },
        { s: 10, e: 10, u: 1, r: false },
        { s: 2, e: 2, u: 1, r: false },
        { s: 2, e: 2, u: 1, r: false },
        { s: 15, e: 15, u: 1, r: false },
        { s: 2, e: 2, u: 1, r: false },
        { s: 2.2, e: 2.2, u: 1, r: false },
        { s: 26, e: 26, u: 1, r: false },
        { s: 2, e: 2, u: 1, r: false },
        { s: 2, e: 2, u: 1, r: false },
        { s: 3, e: 3, u: 1, r: false },
        { s: 4, e: 4, u: 1, r: false },
        { s: 3, e: 3, u: 1, r: false },
        { s: 60, e: 60, u: 1, r: false },
        { s: 3, e: 3, u: 1, r: false },
        { s: 7, e: 7, u: 1, r: false },
        { s: 6, e: 6, u: 1, r: false },
        { s: 4, e: 4, u: 1, r: false },
      ],
      active: {
        bott: false,
        "button-32dd": true,
      },
    };
  },
  methods: {
    shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const idx = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
      }
      return arr;
    },
    range(start, end, unit, shuffle) {
      const size = parseInt((end - start) / unit) + 1;
      const result = [...Array(size).keys()].map((x) => {
        const ret = x * unit + start;
        if (Number.isInteger(ret)) return ret;
        else return +ret.toFixed(2);
      });
      return shuffle ? this.shuffle(result) : result;
    },
    submit() {
      this.disabled = true;
      this.btnText = "작업 시작중...";
      const set = this.config.map((item) =>
        this.range(item.s, item.e, item.u, item.r)
      );
      this.$store.dispatch(
        "setTotal",
        set.reduce((p, c) => p * c.length, 1)
      );
      const start = this.start.split("-");
      const end = this.end.split("-");
      window.electron.send(
        JSON.stringify({
          leverage: this.leverage,
          sy: +start[0],
          sm: +start[1],
          sd: +start[2],
          ey: +end[0],
          em: +end[1],
          ed: +end[2],
          data: set,
        })
      );
      this.disabled = false;
      this.btnText = "확인";
      this.$router.push("/processing");
    },
    onScroll() {
      if (
        window.innerHeight + window.scrollY + 200 >=
        document.body.scrollHeight
      ) {
        this.active = {
          bott: true,
        };
      } else {
        this.active = {
          bott: false,
          "button-32dd": true,
        };
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>
<style lang="scss" scoped>
.container-dk3v {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
.left-1kdk {
  padding: 10px;
  display: inline-flex;
  flex-direction: column;
}
.label-3d1f {
  display: flex;
  align-items: center;
  font-weight: bold;
}
.field-4hu7 {
  display: flex;
  flex-shrink: 1;
}
.button-32dd {
  width: 90%;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 10px;
}
.txt-bold {
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #2196f3 !important;
  opacity: 0.5;
  color: #fff !important;
}
.txt-bold:hover {
  opacity: 1;
}
.bott {
  width: 90%;
  margin: 0 auto;
  .txt-bold {
    opacity: 1;
  }
}
</style>
