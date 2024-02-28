import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { beforeEach } from "./routerGuard";

const router = createRouter({
  history: createWebHashHistory("/book-hotel/"),
  routes: routes,
});

// 設定導航守衛
router.beforeEach(beforeEach);
router.onError((error, to) => {
  if (error.message.includes("Failed to fetch dynamically imported modules")) {
    window.location.href = to.fullPath;
  }
});

export default router;
