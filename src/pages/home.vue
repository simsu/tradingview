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
            v-model.number="conversion_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="conversion_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="conversion_unit"
          ></v-text-field>
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
            v-model.number="base_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="base_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="base_unit"
          ></v-text-field>
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
            v-model.number="leadgin_b_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="leadgin_b_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="leadgin_b_unit"
          ></v-text-field>
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
            v-model.number="lagging_offset_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="lagging_offset_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="lagging_offset_unit"
          ></v-text-field>
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
            v-model.number="leadgin_offset_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="leadgin_offset_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="leadgin_offset_unit"
          ></v-text-field>
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
            v-model.number="base_bar_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="base_bar_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="base_bar_unit"
          ></v-text-field>
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
            v-model.number="longfactor_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="longfactor_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="longfactor_unit"
          ></v-text-field>
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
            v-model.number="shortfactor_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="shortfactor_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="shortfactor_unit"
          ></v-text-field>
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
            v-model.number="base_bar2_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="base_bar2_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="base_bar2_unit"
          ></v-text-field>
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
            v-model.number="longfactor2_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="longfactor2_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="longfactor2_unit"
          ></v-text-field>
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
            v-model.number="shortfactor2_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="shortfactor2_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="shortfactor2_unit"
          ></v-text-field>
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
            v-model.number="base_bar3_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="base_bar3_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="base_bar3_unit"
          ></v-text-field>
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
            v-model.number="longfactor3_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="longfactor3_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="longfactor3_unit"
          ></v-text-field>
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
            v-model.number="shortfactor3_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="shortfactor3_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="shortfactor3_unit"
          ></v-text-field>
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
            v-model.number="base_bar4_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="base_bar4_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="base_bar4_unit"
          ></v-text-field>
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
            v-model.number="longfactor4_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="longfactor4_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="longfactor4_unit"
          ></v-text-field>
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
            v-model.number="shortfactor4_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="shortfactor4_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="shortfactor4_unit"
          ></v-text-field>
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
            v-model.number="base_bar5_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="base_bar5_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="base_bar5_unit"
          ></v-text-field>
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
            v-model.number="longfactor5_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="longfactor5_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="longfactor5_unit"
          ></v-text-field>
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
            v-model.number="shortfactor5_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="shortfactor5_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="shortfactor5_unit"
          ></v-text-field>
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
            v-model.number="rsi_period_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="rsi_period_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="rsi_period_unit"
          ></v-text-field>
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
            v-model.number="pivot_right_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="pivot_right_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="pivot_right_unit"
          ></v-text-field>
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
            v-model.number="pivot_left_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="pivot_left_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="pivot_left_unit"
          ></v-text-field>
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
            v-model.number="max_range_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="max_range_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="max_range_unit"
          ></v-text-field>
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
            v-model.number="min_range_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="min_range_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="min_range_unit"
          ></v-text-field>
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
            v-model.number="left_bars_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="left_bars_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="left_bars_unit"
          ></v-text-field>
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
            v-model.number="right_bars_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="right_bars_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="right_bars_unit"
          ></v-text-field>
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
            v-model.number="divergence_start"
          ></v-text-field>
          <v-text-field
            label="종료"
            type="number"
            v-model.number="divergence_end"
          ></v-text-field>
          <v-text-field
            label="단위"
            type="number"
            v-model.number="divergence_unit"
          ></v-text-field>
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
// TODO: 랜덤 range 체크박스 추가
export default {
  data() {
    return {
      disabled: false,
      btnText: "확인",
      start: "2019-01-01",
      end: "2020-12-31",
      leverage: 2,
      conversion_start: 8,
      conversion_end: 8,
      conversion_unit: 1,
      base_start: 4,
      base_end: 4,
      base_unit: 1,
      leadgin_b_start: 14,
      leadgin_b_end: 14,
      leadgin_b_unit: 1,
      lagging_offset_start: 9,
      lagging_offset_end: 9,
      lagging_offset_unit: 1,
      leadgin_offset_start: 28,
      leadgin_offset_end: 28,
      leadgin_offset_unit: 1,
      base_bar_start: 3,
      base_bar_end: 3,
      base_bar_unit: 1,
      longfactor_start: 1.95,
      longfactor_end: 1.95,
      longfactor_unit: 1,
      shortfactor_start: 1.95,
      shortfactor_end: 1.95,
      shortfactor_unit: 1,
      base_bar2_start: 10,
      base_bar2_end: 10,
      base_bar2_unit: 1,
      longfactor2_start: 1.65,
      longfactor2_end: 1.65,
      longfactor2_unit: 1,
      shortfactor2_start: 1.75,
      shortfactor2_end: 1.75,
      shortfactor2_unit: 1,
      base_bar3_start: 10,
      base_bar3_end: 10,
      base_bar3_unit: 1,
      longfactor3_start: 2,
      longfactor3_end: 2,
      longfactor3_unit: 1,
      shortfactor3_start: 2,
      shortfactor3_end: 2,
      shortfactor3_unit: 1,
      base_bar4_start: 15,
      base_bar4_end: 15,
      base_bar4_unit: 1,
      longfactor4_start: 2,
      longfactor4_end: 2,
      longfactor4_unit: 1,
      shortfactor4_start: 2.2,
      shortfactor4_end: 2.2,
      shortfactor4_unit: 1,
      base_bar5_start: 26,
      base_bar5_end: 26,
      base_bar5_unit: 1,
      longfactor5_start: 2,
      longfactor5_end: 2,
      longfactor5_unit: 1,
      shortfactor5_start: 2,
      shortfactor5_end: 2,
      shortfactor5_unit: 1,
      rsi_period_start: 3,
      rsi_period_end: 3,
      rsi_period_unit: 1,
      pivot_right_start: 4,
      pivot_right_end: 4,
      pivot_right_unit: 1,
      pivot_left_start: 3,
      pivot_left_end: 3,
      pivot_left_unit: 1,
      max_range_start: 60,
      max_range_end: 60,
      max_range_unit: 1,
      min_range_start: 3,
      min_range_end: 3,
      min_range_unit: 1,
      left_bars_start: 7,
      left_bars_end: 7,
      left_bars_unit: 1,
      right_bars_start: 6,
      right_bars_end: 6,
      right_bars_unit: 1,
      divergence_start: 4,
      divergence_end: 4,
      divergence_unit: 1,
      active: {
        bott: false,
        "button-32dd": true,
      },
    };
  },
  methods: {
    submit() {
      this.disabled = true;
      this.btnText = "작업 시작중...";
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
