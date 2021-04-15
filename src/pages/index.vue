<template>
  <v-container>
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
    <v-row>
      <v-col cols="12">
        <v-btn @click="start" color="primary" block>시작하기</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      path: "",
      size: 30,
      criteria: 30,
      workers: 100,
    };
  },
  methods: {
    async dialog() {
      const path = await window.electron.openDialog();
      this.path = path[0];
    },
    start() {
      if (this.path.length === 0) {
        this.$store.dispatch("setMessage", "올바른 저장경로를 선택하세요");
        return;
      }
      this.$store.dispatch("setWorkers", this.workers);
      const ws = new WebSocket("ws://localhost:1323");
      ws.onopen = () => {
        const message = JSON.stringify(["start", JSON.stringify(this.$data)]);
        ws.send(message);
        console.log("OPENED");
      };
      ws.onclose = () => {
        console.log("CLOSED");
      };
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data[0] === "count") {
          this.$store.dispatch("setCount", data[1]);
        } else if (data[0] === "result") {
          this.$store.dispatch("setResult", data[1]);
        } else if (data[0] === "save" && data[1] === "success") {
          this.$store.dispatch("setSaved", true);
        } else if (data[0] === "save") {
          this.$store.dispatch("setSaved", false);
        } else if (data[0] === "total") {
          this.$store.dispatch("setTotal", data[1]);
          this.$router.push("/processing");
        } else if (data[0] === "error") {
          window.alert(
            "잘못된 값으로 인해 에러가 발생했습니다. 프로그램을 종료합니다."
          );
          setTimeout(() => window.electron.exit(), 3000);
        }
      };
      window.socket = ws;
      this.$router.push("/loading");
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
