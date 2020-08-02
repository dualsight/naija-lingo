import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes
});

if (import.meta.hot) {
  let removeRoutes: any[] = [];

  for (const route of routes) {
    removeRoutes.push(router.addRoute(route));
  }

  import.meta.hot!.acceptDeps('./routes.ts', ({ routes }) => {
    for (const removeRoute of removeRoutes) removeRoute();

    removeRoutes = [];
    for (const route of routes) {
      removeRoutes.push(router.addRoute(route));
    }
    router.replace('');
  });
}