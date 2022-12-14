import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";
import ContactPage from "../views/ContactView.vue";
import BlenderSamples from "../views/BlenderSamples.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/blender",
    name: "blender",
    component: BlenderSamples,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
