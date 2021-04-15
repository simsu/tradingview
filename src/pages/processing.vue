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
        <span>
          데이터를 불러오는 중...{{ parseInt((count / total) * 100) }}%
        </span>
      </div>
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
