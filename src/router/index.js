import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pedagogicalPrinciples",
    name: "PedagogicalPrinciples",
    component: () =>
      import(
        /* webpackChunkName: "pedagogicalPrinciples" */ "../views/PedagogicalPrinciples.vue"
      ),
  },
  {
    path: "/practicalImplementation",
    name: "PracticalImplementation",
    component: () =>
      import(
        /* webpackChunkName: "practicalImplementation" */ "../views/PracticalImplementation.vue"
      ),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import(/* webpackChunkName: "team" */ "../views/Team.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () =>
      import(/* webpackChunkName: "history" */ "../views/History.vue"),
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "SignUp" */ "../views/SignUp.vue"),
  },
  {
    path: "/directions",
    name: "Directions",
    component: () =>
      import(/* webpackChunkName: "Directions" */ "../views/Directions.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
