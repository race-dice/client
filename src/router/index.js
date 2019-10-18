import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/room",
    name: "room",
    component: () => import(/* webpackChunkName: "home" */ "../views/Room.vue")
  },
  {
    path: "/play",
    name: "play",
    component: () => import(/* webpackChunkName: "home" */ "../views/Play.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
