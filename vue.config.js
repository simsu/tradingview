module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      builderOptions: {
        appId: "com.ppyu.tradingView",
        win: {
          target: "portable",
          icon: "icon.ico",
        },
      },
    },
  },
};
