import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamView from "../views/TeamView.vue";
import ToolsView from "../views/ToolsView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: "/team", name: "team", component: TeamView },
  { path: "/tools", name: "tools", component: ToolsView },
  { path: "/contact", name: "contact", component: ContactView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Restore previous scroll position
    } else {
      return {
        top: 0,
        behavior: "instant",
      };
    }
  },
});

export default router;
