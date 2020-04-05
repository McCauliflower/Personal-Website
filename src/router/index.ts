import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { detectMobile } from "@/utils/helpers";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/art",
    name: "Art",
    component: () => import(/* webpackChunkName: "art" */ "../views/Art.vue"),
    props: { isMobile: detectMobile() }
  },
  {
    path: "/code",
    name: "Code",
    component: () => import(/* webpackChunkName: "code" */ "../views/Code.vue"),
    props: { isMobile: detectMobile() }
  },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
