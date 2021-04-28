<template>
  <v-container>
    <v-row class="row-1672">
      <v-col cols="3">차트 ID</v-col>
      <v-col cols="8">
        <v-text-field v-model="id" hide-details outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row class="row-1672">
      <v-col cols="3">인증 토큰</v-col>
      <v-col cols="8">
        <v-text-field v-model="token" hide-details outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row class="row-1672">
      <v-col cols="3">저장 위치</v-col>
      <v-col cols="8">
        <v-text-field
          @click="dialog"
          v-model="path"
          append-icon="mdi-file-download"
          hide-details
          outlined
          readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="row-1672">
      <v-col cols="3">저장 개수</v-col>
      <v-col cols="8">
        <v-text-field
          type="number"
          v-model.number="size"
          hide-details
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="row-1672">
      <v-col cols="3">최대 손실폭</v-col>
      <v-col cols="8">
        <v-text-field
          type="number"
          v-model.number="criteria"
          hide-details
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="row-1672">
      <v-col cols="3">워커 수</v-col>
      <v-col cols="8">
        <v-text-field
          type="number"
          v-model.number="workers"
          hide-details
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="row-1672">
      <v-col cols="3">우선 순위</v-col>
      <v-col cols="2">
        <v-select v-model="select1" :items="items1"></v-select>
      </v-col>
      <v-col cols="2">
        <v-select v-model="select2" :items="items2"></v-select>
      </v-col>
      <v-col cols="2">
        <v-select v-model="select3" :items="items3"></v-select>
      </v-col>
      <v-col cols="2">
        <v-select v-model="select4" :items="items4"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn @click="start" color="primary" block>시작하기</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// TODO: 저장 우선순위 추가
export default {
  data() {
    return {
      id: "",
      token: "",
      path: "",
      size: 30,
      criteria: 30,
      workers: 100,
      items1: ["최대 손실폭", "순익", "승률", "수익 팩터"],
      select1: "최대 손실폭",
      items2: ["최대 손실폭", "순익", "승률", "수익 팩터"],
      select2: "순익",
      items3: ["최대 손실폭", "순익", "승률", "수익 팩터"],
      select3: "승률",
      items4: ["최대 손실폭", "순익", "승률", "수익 팩터"],
      select4: "수익 팩터",
    };
  },
  methods: {
    async dialog() {
      const path = await window.electron.openDialog();
      this.path = path[0];
    },
    start() {
      if (!this.id) {
        this.$store.dispatch("setMessage", "올바른 차트ID를 입력하세요");
        return;
      }
      if (!this.token) {
        this.$store.dispatch("setMessage", "올바른 계정 토큰을 입력하세요");
        return;
      }
      if (!this.path) {
        this.$store.dispatch("setMessage", "올바른 저장경로를 선택하세요");
        return;
      }
      window.electron.listen(3333, {
        ...this.$data,
        onCountChange: (count) => this.$store.dispatch("setCount", count),
        onResultChange: (results) => {
          this.$store.dispatch("setResults", results);
          if (window.electron.current() === this.$store.state.total) {
            window.electron.stop();
            this.$router.push("/complete");
          }
        },
      });
      window.electron.setOrder([
        this.items1.indexOf(this.select1),
        this.items2.indexOf(this.select2),
        this.items3.indexOf(this.select3),
        this.items4.indexOf(this.select4),
      ]);
      window.electron.execute();
      this.$router.push("/home");
    },
  },
};
</script>
<style lang="scss" scoped>
.row-1672 {
  align-items: center;
  text-align: center;
}
</style>
