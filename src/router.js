import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./pages/index.vue";
import Loading from "./pages/loading.vue";
import Home from "./pages/home.vue";
import Processing from "./pages/processing.vue";
import Complete from "./pages/complete.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", component: Index },
    { path: "/loading", component: Loading },
    { path: "/home", component: Processing },
    { path: "/processing", component: Home },
    { path: "/complete", component: Complete },
  ],
});
