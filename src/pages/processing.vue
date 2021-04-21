<template>
  <v-container class="full-height">
    <div class="full d-flex align-center justify-center absolute op-03">
      <div class="text-center">
        <div>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
        <div>
          <span>
            데이터를 불러오는 중...{{ parseInt((count / total) * 100) }}%
          </span>
        </div>
      </div>
    </div>
    <div>
      <table class="text-center table">
        <thead>
          <th>순익($)</th>
          <th>순익(%)</th>
          <th>트레이드</th>
          <th>승률(%)</th>
          <th>수익팩터</th>
          <th>최대 손실폭($)</th>
          <th>최대 손실폭(%)</th>
          <th>평균거래($)</th>
          <th>평균거래(%)</th>
          <th>평균봉수</th>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{item.netProfit}}</td>
            <td>{{item.netProfitPercent}}</td>
            <td>{{item.totalTrades}}</td>
            <td>{{item.percentProfitable}}</td>
            <td>{{item.profitFactor}}</td>
            <td>{{item.maxStrategyDrawnDown}}</td>
            <td>{{item.maxStrategyDrawDownPercent}}</td>
            <td>{{item.avgTrade}}</td>
            <td>{{item.avgTradePercent}}</td>
            <td>{{item.avgBarsInTrade}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-container>
</template>
<script>
export default {
  computed: {
    total() {
      return this.$store.state.total;
    },
    count() {
      return this.$store.state.result;
    },
  },
  watch: {
    count(val) {
      if (val === this.total) {
        setTimeout(() => {
          this.$router.push("/complete");
        }, 1500);
      }
    },
  },
  data() {
    return {
      items: [
        {
          id: 1,
          netProfit: 44,
          netProfitPercent: 12,
          totalTrades: 3,
          percentProfitable: 25,
          profitFactor: 42,
          maxStrategyDrawnDown: 14,
          maxStrategyDrawDownPercent: 42,
          avgTrade: 12,
          avgTradePercent: 6,
          avgBarsInTrade: 9.32,
        },
        {
          id: 2,
          netProfit: 1,
          netProfitPercent: 12,
          totalTrades: 3,
          percentProfitable: 25,
          profitFactor: 42,
          maxStrategyDrawnDown: 14,
          maxStrategyDrawDownPercent: 42,
          avgTrade: 12,
          avgTradePercent: 6,
          avgBarsInTrade: 9.32,
        },
        {
          id: 3,
          netProfit: 24,
          netProfitPercent: 12,
          totalTrades: 3,
          percentProfitable: 25,
          profitFactor: 42,
          maxStrategyDrawnDown: 14,
          maxStrategyDrawDownPercent: 42,
          avgTrade: 12,
          avgTradePercent: 6,
          avgBarsInTrade: 9.32,
        },
        {
          id: 4,
          netProfit: 44,
          netProfitPercent: 12,
          totalTrades: 3,
          percentProfitable: 25,
          profitFactor: 42,
          maxStrategyDrawnDown: 14,
          maxStrategyDrawDownPercent: 42,
          avgTrade: 12,
          avgTradePercent: 6,
          avgBarsInTrade: 9.32,
        },
        {
          id: 5,
          netProfit: 24.2,
          netProfitPercent: 18,
          totalTrades: 94.7,
          percentProfitable: 14,
          profitFactor: 42,
          maxStrategyDrawnDown: 1.4,
          maxStrategyDrawDownPercent: 4.2,
          avgTrade: 12,
          avgTradePercent: 65,
          avgBarsInTrade: 9.32,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.full-height {
  height: 100%;
}
.full-width {
  width: 100%;
}
.full {
  width: 100%;
  height: 100%;
}
.op-03 {
  opacity: 0.3;
}
.loading-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.absolute {
  position: absolute;
}
.table {
  width: 100%;
  font-size: 0.9rem;
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ccc;
  padding: 3px;
  font-weight: 300;
}
tr:nth-child(2n) {
  background-color: #e0ecf7;
}
</style>
