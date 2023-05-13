/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  tailwind: true,
  serverModuleFormat: "cjs",
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
// const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");

// /** @type {import('@remix-run/dev').AppConfig} */
// module.exports = {
//   future: {
//     // makes the warning go away in v1.15
//     v2_routeConvention: true,
//     // v2_meta: true,
//   },

//   routes(defineRoutes) {
//     // uses the v1 convention, works in v1.15+ and v2
//     return createRoutesFromFolders(defineRoutes);
//   },
// };
