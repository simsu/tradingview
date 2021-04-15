<template>
  <v-container class="full-height d-flex align-center justify-center">
    <div class="text-center">
      <div>
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <div>
        <span>작업 노드 생성중...{{ parseInt((count / total) * 100) }}%</span>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  computed: {
    total() {
      return this.$store.state.workers;
    },
    count() {
      return this.$store.state.count;
    },
  },
  watch: {
    count(val) {
      if (val === this.total) {
        setTimeout(() => {
          window.resizeTo(800, 600);
          this.$router.push("/home");
        }, 1500);
      }
    },
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
.loading-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
