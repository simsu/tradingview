import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./pages/index.vue";
import Home from "./pages/home.vue";
import Processing from "./pages/processing.vue";
import Complete from "./pages/complete.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", component: Index },
    { path: "/home", component: Home },
    { path: "/processing", component: Processing },
    { path: "/complete", component: Complete },
  ],
});
