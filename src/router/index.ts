import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

let isMobile = false;
function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];
  return toMatch.some(toMatchItem => {
    return navigator.userAgent.match(toMatchItem);
  });
}
if (detectMob() || screen.width < 900) isMobile = true;

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
    props: { isMobile }
  },
  {
    path: "/code",
    name: "Code",
    component: () => import(/* webpackChunkName: "code" */ "../views/Code.vue"),
    props: { isMobile }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
