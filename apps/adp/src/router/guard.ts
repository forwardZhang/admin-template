// import type { Router } from 'vue-router';
//
// function setupCommonGuard(router: Router) {
//   // 记录已经加载的页面
//   const loadedPaths = new Set<string>();
//
//   router.beforeEach((to) => {
//     to.meta.loaded = loadedPaths.has(to.path);
//
//     // 页面加载进度条
//     if (!to.meta.loaded && preferences.transition.progress) {
//       startProgress();
//     }
//     return true;
//   });
//
//   router.afterEach((to) => {
//     // 记录页面是否加载,如果已经加载，后续的页面切换动画等效果不在重复执行
//
//     loadedPaths.add(to.path);
//
//     // 关闭页面加载进度条
//     if (preferences.transition.progress) {
//       stopProgress();
//     }
//   });
// }
//
// function setupAccessGuard(router: Router) {
//
// }
//
// function createRouterGuard(router: Router) {
//   /* 通用 */
//   setupCommonGuard(router);
//   /* 权限 */
//   setupAccessGuard(router);
// }
//
// export {
//   createRouterGuard,
// };
