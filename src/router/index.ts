import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/send-file",
    name: "SendFile",
    component: () => import("../views/SendFile.vue"),
  },
  {
    path: "/order-created/:orderId",
    name: "OrderCreated",
    component: () => import("../views/OrderCreated.vue"),
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
