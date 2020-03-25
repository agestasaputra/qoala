import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/app/pages/landing";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Landing
    }
  ]
});
