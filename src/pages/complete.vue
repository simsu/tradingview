<template>
  <div class="op-4f2z">
    <div class="opc-4f2g">
      <div class="pause-g9h3">
        <div class="mb-5">완료되었습니다.</div>
        <div>
          <v-btn text color="light-blue" @click="go_home">
            돌아가기
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    go_home() {
      this.$router.push("/home");
    },
  },
};
</script>
<style>
.op-4f2z {
  display: flex !important;
  flex-direction: column;
  height: 100%;
  opacity: 0.9;
}
.opc-4f2g {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.width-3v2l {
  width: 400px !important;
}
.color-g5k6 {
  color: #fff;
}
.pause-g9h3 {
  font-weight: 300;
  text-align: center;
}
</style>
