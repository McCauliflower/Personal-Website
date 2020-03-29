import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    component: () => import(/* webpackChunkName: "about" */ "../views/Art.vue")
  },
  {
    path: "/code",
    name: "Code",
    component: () => import(/* webpackChunkName: "about" */ "../views/Code.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
