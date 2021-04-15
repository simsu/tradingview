<template>
  <v-app>
    <div class="title-e2z0">
      <span @click="openBrowser">Trading View SSF_Strategy</span>
    </div>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="closeSnackbar">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  computed: {
    snackbar: {
      get() {
        return this.$store.state.snackbar;
      },
      set(value) {
        this.$store.dispatch("setSnackbar", value);
      },
    },
    text() {
      return this.$store.state.text;
    },
  },
  data() {
    return {
      timeout: 4000,
    };
  },
  methods: {
    openBrowser() {
      window.electron.openURL("https://kr.tradingview.com/chart/ys4lPZUt/");
    },
    closeSnackbar() {
      this.$store.dispatch("delMessage");
    },
  },
};
</script>
<style lang="scss" scoped>
.title-e2z0 {
  font-size: 18px;
  color: #2196f3;
  font-weight: 600;
  padding: 5px 10px;
  span {
    cursor: pointer;
  }
}
</style>
