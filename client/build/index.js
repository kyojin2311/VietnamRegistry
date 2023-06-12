var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { version: "9a4f778c", entry: { module: "/build/entry.client-KXM3BNQY.js", imports: ["/build/_shared/chunk-QE77VWK2.js", "/build/_shared/chunk-ZIEWKVBB.js", "/build/_shared/chunk-RBEN53O4.js", "/build/_shared/chunk-532K2VPY.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZZ3KRETX.js", imports: ["/build/_shared/chunk-PUJZWP2U.js", "/build/_shared/chunk-YRLBT3MG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_home": { id: "routes/_home", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_home-AV2G6VUO.js", imports: ["/build/_shared/chunk-KPKQHPMA.js", "/build/_shared/chunk-2IC54PV3.js", "/build/_shared/chunk-PDCAP7X3.js", "/build/_shared/chunk-MEXKDBJ7.js", "/build/_shared/chunk-4CBZHLJK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.Inspections.$id": { id: "routes/_home.Inspections.$id", parentId: "routes/_home", path: "Inspections/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.Inspections.$id-VATMP34T.js", imports: ["/build/_shared/chunk-O7R2KCUK.js", "/build/_shared/chunk-YRLBT3MG.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.Inspections._index": { id: "routes/_home.Inspections._index", parentId: "routes/_home", path: "Inspections", index: !0, caseSensitive: void 0, module: "/build/routes/_home.Inspections._index-HA4E34GU.js", imports: ["/build/_shared/chunk-YRLBT3MG.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home._main": { id: "routes/_home._main", parentId: "routes/_home", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_home._main-X5OBHKWK.js", imports: ["/build/_shared/chunk-OFQHC6HE.js", "/build/_shared/chunk-PUJZWP2U.js", "/build/_shared/chunk-YRLBT3MG.js", "/build/_shared/chunk-4KF4RRT6.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home._main._index": { id: "routes/_home._main._index", parentId: "routes/_home._main", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_home._main._index-RBNPIMHO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home._main.expired": { id: "routes/_home._main.expired", parentId: "routes/_home._main", path: "expired", index: void 0, caseSensitive: void 0, module: "/build/routes/_home._main.expired-JOTX6GSI.js", imports: ["/build/_shared/chunk-4CBZHLJK.js", "/build/_shared/chunk-OKC3RWCP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home._main.expiredsoon": { id: "routes/_home._main.expiredsoon", parentId: "routes/_home._main", path: "expiredsoon", index: void 0, caseSensitive: void 0, module: "/build/routes/_home._main.expiredsoon-UL4DVMHX.js", imports: ["/build/_shared/chunk-4CBZHLJK.js", "/build/_shared/chunk-OKC3RWCP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.analystics.$codename": { id: "routes/_home.analystics.$codename", parentId: "routes/_home", path: "analystics/:codename", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.analystics.$codename-GXZDYFTU.js", imports: ["/build/_shared/chunk-OFQHC6HE.js", "/build/_shared/chunk-JPMRNOFY.js", "/build/_shared/chunk-PUJZWP2U.js", "/build/_shared/chunk-YRLBT3MG.js", "/build/_shared/chunk-4KF4RRT6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.analystics.$codename._index": { id: "routes/_home.analystics.$codename._index", parentId: "routes/_home.analystics.$codename", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_home.analystics.$codename._index-AM23EO7P.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.analystics.$codename.expired": { id: "routes/_home.analystics.$codename.expired", parentId: "routes/_home.analystics.$codename", path: "expired", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.analystics.$codename.expired-QAZOIKRK.js", imports: ["/build/_shared/chunk-4CBZHLJK.js", "/build/_shared/chunk-OKC3RWCP.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.analystics.$codename.expiredsoon": { id: "routes/_home.analystics.$codename.expiredsoon", parentId: "routes/_home.analystics.$codename", path: "expiredsoon", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.analystics.$codename.expiredsoon-4QZJJOAI.js", imports: ["/build/_shared/chunk-4CBZHLJK.js", "/build/_shared/chunk-OKC3RWCP.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.analystics._index": { id: "routes/_home.analystics._index", parentId: "routes/_home", path: "analystics", index: !0, caseSensitive: void 0, module: "/build/routes/_home.analystics._index-L3CEEX2K.js", imports: ["/build/_shared/chunk-JPMRNOFY.js", "/build/_shared/chunk-OKC3RWCP.js", "/build/_shared/chunk-YRLBT3MG.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.car.$numberPlate._index": { id: "routes/_home.car.$numberPlate._index", parentId: "routes/_home", path: "car/:numberPlate", index: !0, caseSensitive: void 0, module: "/build/routes/_home.car.$numberPlate._index-VA2TLVMN.js", imports: ["/build/_shared/chunk-4KF4RRT6.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.car.$numberPlate.addinspection": { id: "routes/_home.car.$numberPlate.addinspection", parentId: "routes/_home", path: "car/:numberPlate/addinspection", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.car.$numberPlate.addinspection-PAFEX7OJ.js", imports: ["/build/_shared/chunk-4KF4RRT6.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.car._index": { id: "routes/_home.car._index", parentId: "routes/_home", path: "car", index: !0, caseSensitive: void 0, module: "/build/routes/_home.car._index-X4Q6J36P.js", imports: ["/build/_shared/chunk-PUJZWP2U.js", "/build/_shared/chunk-YRLBT3MG.js", "/build/_shared/chunk-4KF4RRT6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.info._index": { id: "routes/_home.info._index", parentId: "routes/_home", path: "info", index: !0, caseSensitive: void 0, module: "/build/routes/_home.info._index-GSRB6UJ2.js", imports: ["/build/_shared/chunk-QGRJQUMK.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.info.edit": { id: "routes/_home.info.edit", parentId: "routes/_home", path: "info/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.info.edit-OR35R3XT.js", imports: ["/build/_shared/chunk-RI7KFSFX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office": { id: "routes/_home.office", parentId: "routes/_home", path: "office", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office-VICDH5CF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office._index": { id: "routes/_home.office._index", parentId: "routes/_home.office", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_home.office._index-EXID3AT3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office.add": { id: "routes/_home.office.add", parentId: "routes/_home.office", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office.add-HDE7HMZO.js", imports: ["/build/_shared/chunk-PDCAP7X3.js", "/build/_shared/chunk-JPMRNOFY.js", "/build/_shared/chunk-OKC3RWCP.js", "/build/_shared/chunk-YRLBT3MG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office_.$id": { id: "routes/_home.office_.$id", parentId: "routes/_home", path: "office/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office_.$id-DWH32SX5.js", imports: ["/build/_shared/chunk-O7R2KCUK.js", "/build/_shared/chunk-OFQHC6HE.js", "/build/_shared/chunk-PUJZWP2U.js", "/build/_shared/chunk-YRLBT3MG.js", "/build/_shared/chunk-4KF4RRT6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office_.$id._index": { id: "routes/_home.office_.$id._index", parentId: "routes/_home.office_.$id", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_home.office_.$id._index-DM6PWPS2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office_.$id.addStaff": { id: "routes/_home.office_.$id.addStaff", parentId: "routes/_home.office_.$id", path: "addStaff", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office_.$id.addStaff-SABQCVG3.js", imports: ["/build/_shared/chunk-PDCAP7X3.js", "/build/_shared/chunk-OKC3RWCP.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office_.$id.expired": { id: "routes/_home.office_.$id.expired", parentId: "routes/_home.office_.$id", path: "expired", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office_.$id.expired-NLYZ2Q3I.js", imports: ["/build/_shared/chunk-4CBZHLJK.js", "/build/_shared/chunk-OKC3RWCP.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office_.$id.expiredsoon": { id: "routes/_home.office_.$id.expiredsoon", parentId: "routes/_home.office_.$id", path: "expiredsoon", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office_.$id.expiredsoon-A6TXIBMR.js", imports: ["/build/_shared/chunk-4CBZHLJK.js", "/build/_shared/chunk-OKC3RWCP.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office_.$id_.$userID": { id: "routes/_home.office_.$id_.$userID", parentId: "routes/_home", path: "office/:id/:userID", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office_.$id_.$userID-NE5UDTOH.js", imports: ["/build/_shared/chunk-QGRJQUMK.js", "/build/_shared/chunk-RI7KFSFX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.search": { id: "routes/_home.search", parentId: "routes/_home", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.search-TA6AGPKO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/changepass": { id: "routes/changepass", parentId: "root", path: "changepass", index: void 0, caseSensitive: void 0, module: "/build/routes/changepass-YVD26BJF.js", imports: ["/build/_shared/chunk-4KF4RRT6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgot-pass": { id: "routes/forgot-pass", parentId: "root", path: "forgot-pass", index: void 0, caseSensitive: void 0, module: "/build/routes/forgot-pass-BZDC4ZY3.js", imports: ["/build/_shared/chunk-KPKQHPMA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgotpassword": { id: "routes/forgotpassword", parentId: "root", path: "forgotpassword", index: void 0, caseSensitive: void 0, module: "/build/routes/forgotpassword-QLV6EJ7S.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-WK2GTSYK.js", imports: ["/build/_shared/chunk-KPKQHPMA.js", "/build/_shared/chunk-2IC54PV3.js", "/build/_shared/chunk-PDCAP7X3.js", "/build/_shared/chunk-MEXKDBJ7.js", "/build/_shared/chunk-4KF4RRT6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-5KEBAQVD.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-9A4F778C.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// empty-module:../../util/Chart.client
var require_Chart = __commonJS({
  "empty-module:../../util/Chart.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:../components/Inspections/searchInspectionsModal.client
var require_searchInspectionsModal = __commonJS({
  "empty-module:../components/Inspections/searchInspectionsModal.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:../components/CarPage/searchCarModal.client
var require_searchCarModal = __commonJS({
  "empty-module:../components/CarPage/searchCarModal.client"(exports, module2) {
    module2.exports = {};
  }
});

// app/routes/forgotpassword.js
var require_forgotpassword = __commonJS({
  "app/routes/forgotpassword.js"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request2.headers.get("user-agent")) ? handleBotRequest(
    request2,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request2,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request2.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request2.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_css_bundle = __toESM(require_server());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-4J4X2WPP.css";

// app/root.jsx
var import_remix_utils = require("remix-utils");

// app/images/404.svg
var __default = "/build/_assets/404-AOA5YYHF.svg";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("@remix-run/react");

// app/util/Loading.jsx
var import_flowbite_react = require("flowbite-react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Spinner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_flowbite_react.Modal, { show: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 bg-transparent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200" }, void 0, !1, {
      fileName: "app/util/Loading.jsx",
      lineNumber: 8,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-green-500 border-t-transparent shadow-md" }, void 0, !1, {
      fileName: "app/util/Loading.jsx",
      lineNumber: 9,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/util/Loading.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/util/Loading.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/util/Loading.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/root.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function links() {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    }
  ];
}
function meta() {
  return [{ title: "Vietnam Registry" }];
}
function App() {
  let states = (0, import_remix_utils.useGlobalTransitionStates)(), spinner = "";
  return (states.includes("submitting") || states.includes("loading")) && (spinner = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Spinner, { className: "absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2" }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", style: { overflow: "auto" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "meta",
        {
          "http-equiv": "Cache-Control",
          content: "max-age: 31536000, no-cache, no-store, must-revalidate"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "dark", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Outlet, { scrollBehavior: "smooth" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      spinner
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react3.useRouteError)(), backHandler = () => (0, import_react2.useNavigate)()("..");
  return (0, import_react3.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.data }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 68,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", style: { overflow: "auto" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block md:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: __default, alt: "astronaut image" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 88,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 87,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center xl:max-w-4xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white", children: "Page not found" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 91,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400", children: error.message }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 94,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react2.Link,
          {
            to: "/",
            className: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "svg",
                {
                  className: "mr-2 -ml-1 w-5 h-5",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                      clipRule: "evenodd"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.jsx",
                      lineNumber: 107,
                      columnNumber: 21
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 101,
                  columnNumber: 19
                },
                this
              ),
              "Go back home"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/root.jsx",
            lineNumber: 97,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 90,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 86,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 85,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 77,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 122,
    columnNumber: 12
  }, this);
}

// app/routes/_home.analystics.$codename.expiredsoon.jsx
var home_analystics_codename_expiredsoon_exports = {};
__export(home_analystics_codename_expiredsoon_exports, {
  default: () => ProvinceExpiredSoon,
  loader: () => loader
});

// app/components/Analystics/ExpiredSoonProvince.jsx
var import_flowbite_react3 = require("flowbite-react");

// app/util/formatDate.js
function formatDate(Needdate) {
  var date = new Date(Needdate);
  let year = date.getFullYear(), month = ("0" + (date.getMonth() + 1)).slice(-2);
  return `${("0" + date.getDate()).slice(-2)}-${month}-${year}`;
}
function reFormatDate(date) {
  var datearray = date.split("-"), newdate = datearray[1] + "-" + datearray[0] + "-" + datearray[2];
  return newdate;
}

// app/components/Analystics/ExpiredSoonProvince.jsx
var import_react5 = require("@remix-run/react");

// app/util/PageModal.jsx
var import_react4 = require("@remix-run/react"), import_flowbite_react2 = require("flowbite-react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function PageModal({ children, title }) {
  let navigate = (0, import_react4.useNavigate)(), clickHandler = () => {
    navigate("..");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Modal, { show: !0, size: "6xl", dismissible: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Modal.Header, { onClick: clickHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: title }, void 0, !1, {
      fileName: "app/util/PageModal.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/util/PageModal.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Modal.Body, { children }, void 0, !1, {
      fileName: "app/util/PageModal.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/util/PageModal.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/Analystics/ExpiredSoonProvince.jsx
var import_react6 = require("react"), import_remix_utils2 = require("remix-utils"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ExpiredSoonProvinceTable() {
  let inspection = (0, import_react5.useLoaderData)().data.sort(function(a, b) {
    return new Date(a.registDate) - new Date(b.registDate);
  }), [filterList, setFilterList] = (0, import_react6.useState)(inspection), [searchInput, setSearchInput] = (0, import_react6.useState)(""), searchHandler = (e) => {
    e.key === "Enter" && setSearchInput(e.target.value);
  };
  return (0, import_react6.useEffect)(() => {
    var filteredList = inspection.filter(
      (dt) => dt.numberPlate.search(searchInput) === 0
    );
    setFilterList(filteredList);
  }, [searchInput]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PageModal, { title: "This is the list of car have already expired", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pb-4 bg-white dark:bg-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { for: "table-search", className: "sr-only", children: "Search" }, void 0, !1, {
        fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "svg",
          {
            class: "w-5 h-5 text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
                lineNumber: 43,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            onKeyDown: searchHandler,
            type: "text",
            id: "table-search",
            className: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Search for NumberPlate"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
            lineNumber: 50,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_remix_utils2.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
      lineNumber: 59,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table, { hoverable: !0, className: "overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.HeadCell, { children: "NumberPlate" }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.HeadCell, { children: "RegistDate" }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.HeadCell, { children: "ExpiredDate" }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.HeadCell, { children: "City" }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "View" }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
          lineNumber: 68,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
          lineNumber: 67,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.Body, { className: "divide-y", children: filterList.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_flowbite_react3.Table.Row,
        {
          className: "bg-white dark:border-gray-700 dark:bg-gray-800",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: dt.numberPlate }, void 0, !1, {
              fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
              lineNumber: 77,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.Cell, { children: formatDate(dt.registDate) }, void 0, !1, {
              fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.Cell, { children: formatDate(dt.expiredDate) }, void 0, !1, {
              fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.Cell, { children: dt.city }, void 0, !1, {
              fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
              lineNumber: 82,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_flowbite_react3.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react5.Link,
              {
                className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500",
                to: `/car/${dt.numberPlate}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "View" }, void 0, !1, {
                  fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
                  lineNumber: 88,
                  columnNumber: 23
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
                lineNumber: 84,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
              lineNumber: 83,
              columnNumber: 19
            }, this)
          ]
        },
        dt.numberPlate,
        !0,
        {
          fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
          lineNumber: 73,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Analystics/ExpiredSoonProvince.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/services/auth.server.js
var import_node2 = require("@remix-run/node"), SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "session",
    path: "/",
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "strict",
    maxAge: 30 * 24 * 60,
    httpOnly: !0
  }
});
async function createUserSession(sessionToken, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("sessionToken", sessionToken), (0, import_node2.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request2) {
  let data = request2.headers.get("cookie"), token = (await sessionStorage.getSession(data)).get("sessionToken");
  return token || null;
}
async function destroyUserSession(request2) {
  let session = await sessionStorage.getSession(
    request2.headers.get("cookie")
  );
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function requireUserSession(request2) {
  let token = await getUserFromSession(request2);
  if (!token)
    throw (0, import_node2.redirect)("/login");
  return token;
}

// app/util/province.json
var province_default = [
  {
    name: "Th\xE0nh ph\u1ED1 H\xE0 N\u1ED9i",
    code: 1,
    division_type: "th\xE0nh ph\u1ED1 trung \u01B0\u01A1ng",
    codename: "thanh_pho_ha_noi",
    phone_code: 24,
    districts: []
  },
  {
    name: "T\u1EC9nh H\xE0 Giang",
    code: 2,
    division_type: "t\u1EC9nh",
    codename: "tinh_ha_giang",
    phone_code: 219,
    districts: []
  },
  {
    name: "T\u1EC9nh Cao B\u1EB1ng",
    code: 4,
    division_type: "t\u1EC9nh",
    codename: "tinh_cao_bang",
    phone_code: 206,
    districts: []
  },
  {
    name: "T\u1EC9nh B\u1EAFc K\u1EA1n",
    code: 6,
    division_type: "t\u1EC9nh",
    codename: "tinh_bac_kan",
    phone_code: 209,
    districts: []
  },
  {
    name: "T\u1EC9nh Tuy\xEAn Quang",
    code: 8,
    division_type: "t\u1EC9nh",
    codename: "tinh_tuyen_quang",
    phone_code: 207,
    districts: []
  },
  {
    name: "T\u1EC9nh L\xE0o Cai",
    code: 10,
    division_type: "t\u1EC9nh",
    codename: "tinh_lao_cai",
    phone_code: 214,
    districts: []
  },
  {
    name: "T\u1EC9nh \u0110i\u1EC7n Bi\xEAn",
    code: 11,
    division_type: "t\u1EC9nh",
    codename: "tinh_dien_bien",
    phone_code: 215,
    districts: []
  },
  {
    name: "T\u1EC9nh Lai Ch\xE2u",
    code: 12,
    division_type: "t\u1EC9nh",
    codename: "tinh_lai_chau",
    phone_code: 213,
    districts: []
  },
  {
    name: "T\u1EC9nh S\u01A1n La",
    code: 14,
    division_type: "t\u1EC9nh",
    codename: "tinh_son_la",
    phone_code: 212,
    districts: []
  },
  {
    name: "T\u1EC9nh Y\xEAn B\xE1i",
    code: 15,
    division_type: "t\u1EC9nh",
    codename: "tinh_yen_bai",
    phone_code: 216,
    districts: []
  },
  {
    name: "T\u1EC9nh Ho\xE0 B\xECnh",
    code: 17,
    division_type: "t\u1EC9nh",
    codename: "tinh_hoa_binh",
    phone_code: 218,
    districts: []
  },
  {
    name: "T\u1EC9nh Th\xE1i Nguy\xEAn",
    code: 19,
    division_type: "t\u1EC9nh",
    codename: "tinh_thai_nguyen",
    phone_code: 208,
    districts: []
  },
  {
    name: "T\u1EC9nh L\u1EA1ng S\u01A1n",
    code: 20,
    division_type: "t\u1EC9nh",
    codename: "tinh_lang_son",
    phone_code: 205,
    districts: []
  },
  {
    name: "T\u1EC9nh Qu\u1EA3ng Ninh",
    code: 22,
    division_type: "t\u1EC9nh",
    codename: "tinh_quang_ninh",
    phone_code: 203,
    districts: []
  },
  {
    name: "T\u1EC9nh B\u1EAFc Giang",
    code: 24,
    division_type: "t\u1EC9nh",
    codename: "tinh_bac_giang",
    phone_code: 204,
    districts: []
  },
  {
    name: "T\u1EC9nh Ph\xFA Th\u1ECD",
    code: 25,
    division_type: "t\u1EC9nh",
    codename: "tinh_phu_tho",
    phone_code: 210,
    districts: []
  },
  {
    name: "T\u1EC9nh V\u0129nh Ph\xFAc",
    code: 26,
    division_type: "t\u1EC9nh",
    codename: "tinh_vinh_phuc",
    phone_code: 211,
    districts: []
  },
  {
    name: "T\u1EC9nh B\u1EAFc Ninh",
    code: 27,
    division_type: "t\u1EC9nh",
    codename: "tinh_bac_ninh",
    phone_code: 222,
    districts: []
  },
  {
    name: "T\u1EC9nh H\u1EA3i D\u01B0\u01A1ng",
    code: 30,
    division_type: "t\u1EC9nh",
    codename: "tinh_hai_duong",
    phone_code: 220,
    districts: []
  },
  {
    name: "Th\xE0nh ph\u1ED1 H\u1EA3i Ph\xF2ng",
    code: 31,
    division_type: "th\xE0nh ph\u1ED1 trung \u01B0\u01A1ng",
    codename: "thanh_pho_hai_phong",
    phone_code: 225,
    districts: []
  },
  {
    name: "T\u1EC9nh H\u01B0ng Y\xEAn",
    code: 33,
    division_type: "t\u1EC9nh",
    codename: "tinh_hung_yen",
    phone_code: 221,
    districts: []
  },
  {
    name: "T\u1EC9nh Th\xE1i B\xECnh",
    code: 34,
    division_type: "t\u1EC9nh",
    codename: "tinh_thai_binh",
    phone_code: 227,
    districts: []
  },
  {
    name: "T\u1EC9nh H\xE0 Nam",
    code: 35,
    division_type: "t\u1EC9nh",
    codename: "tinh_ha_nam",
    phone_code: 226,
    districts: []
  },
  {
    name: "T\u1EC9nh Nam \u0110\u1ECBnh",
    code: 36,
    division_type: "t\u1EC9nh",
    codename: "tinh_nam_dinh",
    phone_code: 228,
    districts: []
  },
  {
    name: "T\u1EC9nh Ninh B\xECnh",
    code: 37,
    division_type: "t\u1EC9nh",
    codename: "tinh_ninh_binh",
    phone_code: 229,
    districts: []
  },
  {
    name: "T\u1EC9nh Thanh H\xF3a",
    code: 38,
    division_type: "t\u1EC9nh",
    codename: "tinh_thanh_hoa",
    phone_code: 237,
    districts: []
  },
  {
    name: "T\u1EC9nh Ngh\u1EC7 An",
    code: 40,
    division_type: "t\u1EC9nh",
    codename: "tinh_nghe_an",
    phone_code: 238,
    districts: []
  },
  {
    name: "T\u1EC9nh H\xE0 T\u0129nh",
    code: 42,
    division_type: "t\u1EC9nh",
    codename: "tinh_ha_tinh",
    phone_code: 239,
    districts: []
  },
  {
    name: "T\u1EC9nh Qu\u1EA3ng B\xECnh",
    code: 44,
    division_type: "t\u1EC9nh",
    codename: "tinh_quang_binh",
    phone_code: 232,
    districts: []
  },
  {
    name: "T\u1EC9nh Qu\u1EA3ng Tr\u1ECB",
    code: 45,
    division_type: "t\u1EC9nh",
    codename: "tinh_quang_tri",
    phone_code: 233,
    districts: []
  },
  {
    name: "T\u1EC9nh Th\u1EEBa Thi\xEAn Hu\u1EBF",
    code: 46,
    division_type: "t\u1EC9nh",
    codename: "tinh_thua_thien_hue",
    phone_code: 234,
    districts: []
  },
  {
    name: "Th\xE0nh ph\u1ED1 \u0110\xE0 N\u1EB5ng",
    code: 48,
    division_type: "th\xE0nh ph\u1ED1 trung \u01B0\u01A1ng",
    codename: "thanh_pho_da_nang",
    phone_code: 236,
    districts: []
  },
  {
    name: "T\u1EC9nh Qu\u1EA3ng Nam",
    code: 49,
    division_type: "t\u1EC9nh",
    codename: "tinh_quang_nam",
    phone_code: 235,
    districts: []
  },
  {
    name: "T\u1EC9nh Qu\u1EA3ng Ng\xE3i",
    code: 51,
    division_type: "t\u1EC9nh",
    codename: "tinh_quang_ngai",
    phone_code: 255,
    districts: []
  },
  {
    name: "T\u1EC9nh B\xECnh \u0110\u1ECBnh",
    code: 52,
    division_type: "t\u1EC9nh",
    codename: "tinh_binh_dinh",
    phone_code: 256,
    districts: []
  },
  {
    name: "T\u1EC9nh Ph\xFA Y\xEAn",
    code: 54,
    division_type: "t\u1EC9nh",
    codename: "tinh_phu_yen",
    phone_code: 257,
    districts: []
  },
  {
    name: "T\u1EC9nh Kh\xE1nh H\xF2a",
    code: 56,
    division_type: "t\u1EC9nh",
    codename: "tinh_khanh_hoa",
    phone_code: 258,
    districts: []
  },
  {
    name: "T\u1EC9nh Ninh Thu\u1EADn",
    code: 58,
    division_type: "t\u1EC9nh",
    codename: "tinh_ninh_thuan",
    phone_code: 259,
    districts: []
  },
  {
    name: "T\u1EC9nh B\xECnh Thu\u1EADn",
    code: 60,
    division_type: "t\u1EC9nh",
    codename: "tinh_binh_thuan",
    phone_code: 252,
    districts: []
  },
  {
    name: "T\u1EC9nh Kon Tum",
    code: 62,
    division_type: "t\u1EC9nh",
    codename: "tinh_kon_tum",
    phone_code: 260,
    districts: []
  },
  {
    name: "T\u1EC9nh Gia Lai",
    code: 64,
    division_type: "t\u1EC9nh",
    codename: "tinh_gia_lai",
    phone_code: 269,
    districts: []
  },
  {
    name: "T\u1EC9nh \u0110\u1EAFk L\u1EAFk",
    code: 66,
    division_type: "t\u1EC9nh",
    codename: "tinh_dak_lak",
    phone_code: 262,
    districts: []
  },
  {
    name: "T\u1EC9nh \u0110\u1EAFk N\xF4ng",
    code: 67,
    division_type: "t\u1EC9nh",
    codename: "tinh_dak_nong",
    phone_code: 261,
    districts: []
  },
  {
    name: "T\u1EC9nh L\xE2m \u0110\u1ED3ng",
    code: 68,
    division_type: "t\u1EC9nh",
    codename: "tinh_lam_dong",
    phone_code: 263,
    districts: []
  },
  {
    name: "T\u1EC9nh B\xECnh Ph\u01B0\u1EDBc",
    code: 70,
    division_type: "t\u1EC9nh",
    codename: "tinh_binh_phuoc",
    phone_code: 271,
    districts: []
  },
  {
    name: "T\u1EC9nh T\xE2y Ninh",
    code: 72,
    division_type: "t\u1EC9nh",
    codename: "tinh_tay_ninh",
    phone_code: 276,
    districts: []
  },
  {
    name: "T\u1EC9nh B\xECnh D\u01B0\u01A1ng",
    code: 74,
    division_type: "t\u1EC9nh",
    codename: "tinh_binh_duong",
    phone_code: 274,
    districts: []
  },
  {
    name: "T\u1EC9nh \u0110\u1ED3ng Nai",
    code: 75,
    division_type: "t\u1EC9nh",
    codename: "tinh_dong_nai",
    phone_code: 251,
    districts: []
  },
  {
    name: "T\u1EC9nh B\xE0 R\u1ECBa - V\u0169ng T\xE0u",
    code: 77,
    division_type: "t\u1EC9nh",
    codename: "tinh_ba_ria_vung_tau",
    phone_code: 254,
    districts: []
  },
  {
    name: "Th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh",
    code: 79,
    division_type: "th\xE0nh ph\u1ED1 trung \u01B0\u01A1ng",
    codename: "thanh_pho_ho_chi_minh",
    phone_code: 28,
    districts: []
  },
  {
    name: "T\u1EC9nh Long An",
    code: 80,
    division_type: "t\u1EC9nh",
    codename: "tinh_long_an",
    phone_code: 272,
    districts: []
  },
  {
    name: "T\u1EC9nh Ti\u1EC1n Giang",
    code: 82,
    division_type: "t\u1EC9nh",
    codename: "tinh_tien_giang",
    phone_code: 273,
    districts: []
  },
  {
    name: "T\u1EC9nh B\u1EBFn Tre",
    code: 83,
    division_type: "t\u1EC9nh",
    codename: "tinh_ben_tre",
    phone_code: 275,
    districts: []
  },
  {
    name: "T\u1EC9nh Tr\xE0 Vinh",
    code: 84,
    division_type: "t\u1EC9nh",
    codename: "tinh_tra_vinh",
    phone_code: 294,
    districts: []
  },
  {
    name: "T\u1EC9nh V\u0129nh Long",
    code: 86,
    division_type: "t\u1EC9nh",
    codename: "tinh_vinh_long",
    phone_code: 270,
    districts: []
  },
  {
    name: "T\u1EC9nh \u0110\u1ED3ng Th\xE1p",
    code: 87,
    division_type: "t\u1EC9nh",
    codename: "tinh_dong_thap",
    phone_code: 277,
    districts: []
  },
  {
    name: "T\u1EC9nh An Giang",
    code: 89,
    division_type: "t\u1EC9nh",
    codename: "tinh_an_giang",
    phone_code: 296,
    districts: []
  },
  {
    name: "T\u1EC9nh Ki\xEAn Giang",
    code: 91,
    division_type: "t\u1EC9nh",
    codename: "tinh_kien_giang",
    phone_code: 297,
    districts: []
  },
  {
    name: "Th\xE0nh ph\u1ED1 C\u1EA7n Th\u01A1",
    code: 92,
    division_type: "th\xE0nh ph\u1ED1 trung \u01B0\u01A1ng",
    codename: "thanh_pho_can_tho",
    phone_code: 292,
    districts: []
  },
  {
    name: "T\u1EC9nh H\u1EADu Giang",
    code: 93,
    division_type: "t\u1EC9nh",
    codename: "tinh_hau_giang",
    phone_code: 293,
    districts: []
  },
  {
    name: "T\u1EC9nh S\xF3c Tr\u0103ng",
    code: 94,
    division_type: "t\u1EC9nh",
    codename: "tinh_soc_trang",
    phone_code: 299,
    districts: []
  },
  {
    name: "T\u1EC9nh B\u1EA1c Li\xEAu",
    code: 95,
    division_type: "t\u1EC9nh",
    codename: "tinh_bac_lieu",
    phone_code: 291,
    districts: []
  },
  {
    name: "T\u1EC9nh C\xE0 Mau",
    code: 96,
    division_type: "t\u1EC9nh",
    codename: "tinh_ca_mau",
    phone_code: 290,
    districts: []
  }
];

// app/routes/_home.analystics.$codename.expiredsoon.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ProvinceExpiredSoon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExpiredSoonProvinceTable, {}, void 0, !1, {
    fileName: "app/routes/_home.analystics.$codename.expiredsoon.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function loader({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return redirect("/login");
  let codename = params.codename, province = province_default.filter((a) => a.codename === codename)[0].name, url = "https://registrytotal.herokuapp.com/api/office/own/outdatecar", dataPass_1 = {
    status: "soon",
    city: province,
    info: "1"
  };
  return await (await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass_1)
  })).json();
}

// app/routes/_home.car.$numberPlate.addinspection.jsx
var home_car_numberPlate_addinspection_exports = {};
__export(home_car_numberPlate_addinspection_exports, {
  action: () => action,
  default: () => inspectionAdd,
  loader: () => loader2
});
var import_react9 = require("@remix-run/react");

// app/components/Inspections/InspectionAdd.jsx
var import_react7 = require("@remix-run/react");
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function InspectionsAddForm(props) {
  let { owner } = props.data, vehicle = props.data, actionData = (0, import_react8.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Form, { method: "post", children: [
    actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "dark:text-red-500 dark:font-bold dark:text-xl", children: actionData.message }, void 0, !1, {
      fileName: "app/components/Inspections/InspectionAdd.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "1" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        "CH\u1EE6 S\u1EDE H\u1EEEU",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(OWNER)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "OwnerName",
              id: "OwnerName",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              defaultValue: owner.data.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 28,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "OwnerName",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "H\u1ECD v\xE0 t\xEAn (Name):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 37,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "DOB",
              id: "DOB",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              defaultValue: formatDate(owner.data.dateOfBirth)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 45,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "DOB",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Ng\xE0y Sinh (dd-mm-yyyy):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 54,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "SSN",
              id: "SSN",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              defaultValue: owner.data.SSN
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 64,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "SSN",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "C\u0103n c\u01B0\u1EDBc c\xF4ng d\xE2n (Social Security Number):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 73,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "email",
              name: "Email",
              id: "Email",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              defaultValue: owner.email
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 81,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "Email",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Email:"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 90,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "Phone",
              id: "Phone",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              defaultValue: owner.data.phone
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 98,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "Phone",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "\u0110i\u1EC7n tho\u1EA1i c\xE1 nh\xE2n (Phone) :"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 107,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inspections/InspectionAdd.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "2" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        "PH\u01AF\u01A0NG TI\u1EC6N",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(VEHICLE)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 123,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 118,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "carNumberPlate",
              id: "carNumberPlate",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              readOnly: !0,
              defaultValue: vehicle.numberPlate
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 128,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "carNumberPlate",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Bi\u1EC3n \u0111\u0103ng k\xFD (Registration Number):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 138,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "Type",
              id: "Type",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              readOnly: !0,
              defaultValue: vehicle.type
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 146,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "Type",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Lo\u1EA1i ph\u01B0\u01A1ng ti\u1EC7n (Type):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 156,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "Mark",
              id: "Mark",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              readOnly: !0,
              defaultValue: vehicle.mark
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 164,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "Mark",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Nh\xE3n hi\u1EC7u (Mark):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 174,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 163,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "CertDate",
              id: "CertDate",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              readOnly: !0,
              defaultValue: formatDate(vehicle.certificate.certDate)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 184,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "certDate",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Ng\xE0y \u0111\u0103ng k\xFD:"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 194,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 183,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "CertNum",
              id: "CertNum",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              defaultValue: vehicle.certificate.certNum
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 202,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "CertNum",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "M\xE3 s\u1ED1 \u0111\u0103ng k\xFD xe:"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 211,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 201,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "ModelCode",
              id: "ModelCode",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              readOnly: !0,
              defaultValue: vehicle.modelCode
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 221,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "ModelCode",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "S\u1ED1 Lo\u1EA1i (Model Code):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 231,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 220,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "EngineNumber",
              id: "EngineNumber",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              readOnly: !0,
              defaultValue: vehicle.engineNumber
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 239,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "EngineNumber",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "S\u1ED1 m\xE1y (Engine Number):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 249,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 238,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "ChassisNumber",
              id: "ChassisNumber",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              readOnly: !0,
              defaultValue: vehicle.chassisNumber
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 259,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "ChassisNumber",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "S\u1ED1 khung (Chassis Number):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 269,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 258,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "input",
              {
                type: "text",
                name: "ManufacturedYear",
                id: "ManufacturedYear",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: vehicle.manufacturedYear
              },
              void 0,
              !1,
              {
                fileName: "app/components/Inspections/InspectionAdd.jsx",
                lineNumber: 278,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "label",
              {
                htmlFor: "ManufacturedYear",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "N\u0103m s\u1EA3n xu\u1EA5t:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Inspections/InspectionAdd.jsx",
                lineNumber: 288,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 277,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "input",
              {
                type: "text",
                name: "ManufacturedCountry",
                id: "ManufacturedCountry",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: vehicle.manufacturedCountry
              },
              void 0,
              !1,
              {
                fileName: "app/components/Inspections/InspectionAdd.jsx",
                lineNumber: 296,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "label",
              {
                htmlFor: "ManufacturedCountry",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "N\u01A1i s\u1EA3n xu\u1EA5t:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Inspections/InspectionAdd.jsx",
                lineNumber: 306,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 295,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 276,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 257,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "BoughtPlace",
              id: "BoughtPlace",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              readOnly: !0,
              defaultValue: vehicle.boughtPlace
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 317,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "BoughtPlace",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Mua t\u1EA1i (Bought Place):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 327,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 316,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "Purpose",
              id: "Purpose",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0,
              defaultValue: vehicle.purpose
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 335,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "Purpose",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "M\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng (Purpose):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 344,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 334,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 315,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inspections/InspectionAdd.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-primary-700 bg-white border border-green-400 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "span",
          {
            className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400 ",
            children: "3"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 356,
            columnNumber: 13
          },
          this
        ),
        "TH\xD4NG S\u1ED0 K\u1EF8 THU\u1EACT",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(SPECIFICATIONS)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 362,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 355,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 354,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6 mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "WheelFormula",
              id: "WheelFormula",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 370,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "WheelFormula",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "C\xF4ng th\u1EE9c b\xE1nh xe (Wheel Formular):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 378,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 369,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "WheelTread",
              id: "WheelTread",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 386,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "WheelTread",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "V\u1EBFt b\xE1nh xe (Wheel Tread):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 394,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 385,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 368,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            name: "OverallDimension",
            id: "OverallDimension",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 403,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "label",
          {
            htmlFor: "OverallDimension",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "K\xEDch th\u01B0\u1EDBc bao (Overall Dimension):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 411,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 402,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            name: "LuggageContainer",
            id: "LuggageContainer",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 419,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "label",
          {
            htmlFor: "LuggageContainer",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "KT Khoang h\xE0nh l\xFD l\u1EDBn nh\u1EA5t (Largest luggage container dimension):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 427,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 418,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6 mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "WheelBase",
              id: "WheelBase",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 437,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "WheelBase",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Chi\u1EC1u d\xE0i c\u01A1 s\u1EDF (Wheel Base):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 445,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 436,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "KerbMass",
              id: "KerbMass",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 453,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "KerbMass",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Kh\u1ED1i l\u01B0\u1EE3ng b\u1EA3n th\xE2n (Kerbmass):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 461,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 452,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 435,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            name: "AuthorizedPayload",
            id: "AuthorizedPayload",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 470,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "label",
          {
            htmlFor: "AuthorizedPayload",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Kh\u1ED1i l\u01B0\u1EE3ng h\xE0ng CC theo TK/CP TGGT (Authorized pay load):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 478,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 469,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            name: "AuthorizedTotalMass",
            id: "AuthorizedTotalMass",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 486,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "label",
          {
            htmlFor: "AuthorizedTotalMass",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Kh\u1ED1i l\u01B0\u1EE3ng to\xE0n b\u1ED9 theo TK/CP TGGT (Authorized total mass):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 494,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 485,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            name: "AuthorizedTowedMass",
            id: "AuthorizedTowedMass",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 502,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "label",
          {
            htmlFor: "AuthorizedTowedlMass",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Kh\u1ED1i l\u01B0\u1EE3ng k\xE9o theo theo TK/CP TGGT (Authorized towed mass):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 510,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 501,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6 mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "number",
              name: "CarriedNo",
              id: "CarriedNo",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 519,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "CarriedNo",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "S\u1ED1 ng\u01B0\u1EDDi cho ph\xE9p ch\u1EDF (No.of Pers Carried)"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 527,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 518,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              name: "FuelType",
              id: "FuelType",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 535,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "label",
            {
              htmlFor: "FuelType",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Lo\u1EA1i nhi\xEAn li\u1EC7u (Type of Fuel Used):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Inspections/InspectionAdd.jsx",
              lineNumber: 543,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 534,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 517,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            name: "EngineDisplacement",
            id: "EngineDisplacement",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 552,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "label",
          {
            htmlFor: "EngineDisplacement",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Th\u1EC3 t\xEDch l\xE0m vi\u1EC7c c\u1EE7a \u0111\u1ED9ng c\u01A1 (Engine Displacement):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 560,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 551,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            name: "maxOutputToRpmRatio",
            id: "maxOutputToRpmRatio",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 568,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "label",
          {
            htmlFor: "maxOutputToRpmRatio",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "C\xF4ng su\u1EA5t l\u1EDBn nh\u1EA5t/ T\u1ED1c \u0111\u1ED9 quay (Max. Output/rpm):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 576,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 567,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            name: "numberOfTiresAndTireSize",
            id: "numberOfTiresAndTireSize",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 584,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "label",
          {
            htmlFor: "numberOfTiresAndTireSize",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "S\u1ED1 l\u01B0\u1EE3ng l\u1ED1p ,c\u1EE1 l\u1ED1p/tr\u1EE5c: (Number of Tires And Tire size):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionAdd.jsx",
            lineNumber: 592,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionAdd.jsx",
        lineNumber: 583,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inspections/InspectionAdd.jsx",
      lineNumber: 353,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-7", children: "Create" }, void 0, !1, {
      fileName: "app/components/Inspections/InspectionAdd.jsx",
      lineNumber: 600,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Inspections/InspectionAdd.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/_home.car.$numberPlate.addinspection.jsx
var import_node3 = require("@remix-run/node");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function inspectionAdd() {
  let data = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(InspectionsAddForm, { data }, void 0, !1, {
    fileName: "app/routes/_home.car.$numberPlate.addinspection.jsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
async function loader2({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node3.redirect)("/login");
  let fetchData = {
    plate: params.numberPlate
  }, resData = await (await fetch(
    "https://registrytotal.herokuapp.com/api/inspection/car/plate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(fetchData)
    }
  )).json();
  return console.log(resData), resData;
}
async function action({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node3.redirect)("/login");
  let formData = await request2.formData(), data = {
    ownername: formData.get("OwnerName"),
    owneremail: formData.get("Email"),
    ownerphone: formData.get("Phone"),
    ownerssn: formData.get("SSN"),
    ownerdob: reFormatDate(formData.get("DOB")),
    carNumberPlate: formData.get("carNumberPlate"),
    Type: formData.get("Type"),
    Mark: formData.get("Mark"),
    certDate: formData.get("CertDate"),
    certNum: formData.get("CertNum"),
    ModelCode: formData.get("ModelCode"),
    EngineNumber: formData.get("EngineNumber"),
    ChassisNumber: formData.get("ChassisNumber"),
    purpose: formData.get("Purpose"),
    bought: formData.get("BoughtPlace"),
    ManufacturedYear: formData.get("ManufacturedYear"),
    ManufacturedCountry: formData.get("ManufacturedCountry"),
    WheelFormula: formData.get("WheelFormula"),
    WheelTread: formData.get("WheelTread"),
    OverallDimension: formData.get("OverallDimension"),
    LuggageContainer: formData.get("LuggageContainer"),
    WheelBase: formData.get("WheelBase"),
    KerbMass: formData.get("KerbMass"),
    AuthorizedPayload: formData.get("AuthorizedPayload"),
    AuthorizedTotalMass: formData.get("AuthorizedTotalMass"),
    AuthorizedTowedMass: formData.get("AuthorizedTowedMass"),
    CarriedNo: formData.get("CarriedNo"),
    FuelType: formData.get("FuelType"),
    engineDisplacement: formData.get("EngineDisplacement"),
    maxOutputToRpmRatio: formData.get("maxOutputToRpmRatio"),
    numberOfTiresAndTireSize: formData.get("numberOfTiresAndTireSize")
  }, resData = await (await fetch(
    "https://registrytotal.herokuapp.com/api/inspection/add",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  )).json();
  return console.log(resData), resData.status === "SUCCEEDED" ? (0, import_node3.redirect)(`/Inspections/${resData.regisNum}`) : (0, import_node3.json)({ message: resData });
}

// app/routes/_home.analystics.$codename.expired.jsx
var home_analystics_codename_expired_exports = {};
__export(home_analystics_codename_expired_exports, {
  default: () => ProvinceExpired,
  loader: () => loader3
});

// app/components/Analystics/ExpiredProvince.jsx
var import_flowbite_react4 = require("flowbite-react");
var import_react10 = require("@remix-run/react");
var import_react11 = require("react"), import_remix_utils3 = require("remix-utils"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ExpiredProvinceTable() {
  let inspection = (0, import_react10.useLoaderData)().data.sort(function(a, b) {
    return new Date(a.registDate) - new Date(b.registDate);
  }), [filterList, setFilterList] = (0, import_react11.useState)(inspection), [searchInput, setSearchInput] = (0, import_react11.useState)(""), searchHandler = (e) => {
    e.key === "Enter" && setSearchInput(e.target.value);
  };
  return (0, import_react11.useEffect)(() => {
    var filteredList = inspection.filter(
      (dt) => dt.numberPlate.search(searchInput) === 0
    );
    setFilterList(filteredList);
  }, [searchInput]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(PageModal, { title: "This is the list of car have already expired", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pb-4 bg-white dark:bg-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { for: "table-search", className: "sr-only", children: "Search" }, void 0, !1, {
        fileName: "app/components/Analystics/ExpiredProvince.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "svg",
          {
            class: "w-5 h-5 text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Analystics/ExpiredProvince.jsx",
                lineNumber: 43,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Analystics/ExpiredProvince.jsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredProvince.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            onKeyDown: searchHandler,
            type: "text",
            id: "table-search",
            className: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Search for NumberPlate"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Analystics/ExpiredProvince.jsx",
            lineNumber: 50,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/ExpiredProvince.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Analystics/ExpiredProvince.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_remix_utils3.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/components/Analystics/ExpiredProvince.jsx",
      lineNumber: 59,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table, { hoverable: !0, className: "overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.HeadCell, { children: "NumberPlate" }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredProvince.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.HeadCell, { children: "RegistDate" }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredProvince.jsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.HeadCell, { children: "ExpiredDate" }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredProvince.jsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.HeadCell, { children: "City" }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredProvince.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "sr-only", children: "View" }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredProvince.jsx",
          lineNumber: 68,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Analystics/ExpiredProvince.jsx",
          lineNumber: 67,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/ExpiredProvince.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.Body, { className: "divide-y", children: filterList.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_flowbite_react4.Table.Row,
        {
          className: "bg-white dark:border-gray-700 dark:bg-gray-800",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: dt.numberPlate }, void 0, !1, {
              fileName: "app/components/Analystics/ExpiredProvince.jsx",
              lineNumber: 77,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.Cell, { children: formatDate(dt.registDate) }, void 0, !1, {
              fileName: "app/components/Analystics/ExpiredProvince.jsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.Cell, { children: formatDate(dt.expiredDate) }, void 0, !1, {
              fileName: "app/components/Analystics/ExpiredProvince.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.Cell, { children: dt.city }, void 0, !1, {
              fileName: "app/components/Analystics/ExpiredProvince.jsx",
              lineNumber: 82,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_flowbite_react4.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_react10.Link,
              {
                className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500",
                to: `/car/${dt.numberPlate}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "View" }, void 0, !1, {
                  fileName: "app/components/Analystics/ExpiredProvince.jsx",
                  lineNumber: 88,
                  columnNumber: 23
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Analystics/ExpiredProvince.jsx",
                lineNumber: 84,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Analystics/ExpiredProvince.jsx",
              lineNumber: 83,
              columnNumber: 19
            }, this)
          ]
        },
        dt.numberPlate,
        !0,
        {
          fileName: "app/components/Analystics/ExpiredProvince.jsx",
          lineNumber: 73,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/Analystics/ExpiredProvince.jsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Analystics/ExpiredProvince.jsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Analystics/ExpiredProvince.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Analystics/ExpiredProvince.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/_home.analystics.$codename.expired.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ProvinceExpired() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ExpiredProvinceTable, {}, void 0, !1, {
    fileName: "app/routes/_home.analystics.$codename.expired.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function loader3({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return redirect("/login");
  let codename = params.codename, province = province_default.filter((a) => a.codename === codename)[0].name, url = "https://registrytotal.herokuapp.com/api/office/own/outdatecar", dataPass_1 = {
    status: "expired",
    city: province,
    info: "1"
  };
  return await (await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass_1)
  })).json();
}

// app/routes/_home.analystics.$codename._index.jsx
var home_analystics_codename_index_exports = {};
__export(home_analystics_codename_index_exports, {
  default: () => ProvinceMain
});
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function ProvinceMain() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, {}, void 0, !1, {
    fileName: "app/routes/_home.analystics.$codename._index.jsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/_home.car.$numberPlate._index.jsx
var home_car_numberPlate_index_exports = {};
__export(home_car_numberPlate_index_exports, {
  default: () => CarInfoPage,
  loader: () => loader4
});

// app/components/CarPage/CarPage.jsx
var import_react12 = require("@remix-run/react");
var import_react13 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function CarPage() {
  let data = (0, import_react13.useLoaderData)(), owner = data.owner.data, dob = formatDate(owner.dateOfBirth), inspection = data.registry.sort(function(a, b) {
    return new Date(b.regisDate) - new Date(a.regisDate);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react12.Form, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "1" }, void 0, !1, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 17,
            columnNumber: 15
          }, this),
          "CH\u1EE6 S\u1EDE H\u1EEEU",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(OWNER)" }, void 0, !1, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 21,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 16,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "OwnerName",
                id: "OwnerName",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                defaultValue: owner.name,
                readOnly: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 26,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "OwnerName",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 tranform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "H\u1ECD v\xE0 t\xEAn (Name):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 36,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 25,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "DOB",
                id: "DOB",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                defaultValue: dob,
                readOnly: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 44,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "DOB",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "Ng\xE0y Sinh (mm-dd-yyyy):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 54,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 43,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "number",
                name: "SSN",
                id: "SSN",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: owner.SSN
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 64,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "carNumberPlate",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "C\u0103n c\u01B0\u1EDBc c\xF4ng d\xE2n (Social Security Number):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 74,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "email",
                name: "Email",
                id: "Email",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: data.owner.email
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 82,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "Email",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "Email:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 92,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 81,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "number",
                name: "Phone",
                id: "Phone",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: owner.phone
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 100,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "Phone",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "\u0110i\u1EC7n tho\u1EA1i c\xE1 nh\xE2n (Phone) :"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 110,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 99,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPage.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "2" }, void 0, !1, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          "PH\u01AF\u01A0NG TI\u1EC6N",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(VEHICLE)" }, void 0, !1, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 126,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 120,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "carNumberplate",
                id: "carNumberPlate",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: data.numberPlate
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 131,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "carNumberPlate",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "Bi\u1EC3n \u0111\u0103ng k\xFD (Registration Number):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 141,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 130,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "Type",
                id: "Type",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: data.type
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 149,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "Type",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "Lo\u1EA1i ph\u01B0\u01A1ng ti\u1EC7n (Type):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 159,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 148,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "Mark",
                id: "Mark",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: data.mark
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 167,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "Mark",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "Nh\xE3n hi\u1EC7u (Mark):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 177,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 166,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "ModelCode",
                id: "ModelCode",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: data.modelCode
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 187,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "ModelCode",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "S\u1ED1 Lo\u1EA1i (Model Code):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 197,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 186,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "EngineNumber",
                id: "EngineNumber",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: data.engineNumber
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 205,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "EngineNumber",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "S\u1ED1 m\xE1y (Engine Number):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 215,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 204,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 185,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "ChassisNumber",
                id: "ChassisNumber",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: data.chassisNumber
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 225,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "ChassisNumber",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "S\u1ED1 khung (Chassis Number):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 235,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 224,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "input",
                {
                  type: "text",
                  name: "ManufacturedYear",
                  id: "ManufacturedYear",
                  className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                  placeholder: " ",
                  required: !0,
                  readOnly: !0,
                  defaultValue: data.manufacturedYear
                },
                void 0,
                !1,
                {
                  fileName: "app/components/CarPage/CarPage.jsx",
                  lineNumber: 244,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "label",
                {
                  htmlFor: "ManufacturedYear",
                  className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                  children: "N\u0103m s\u1EA3n xu\u1EA5t:"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/CarPage/CarPage.jsx",
                  lineNumber: 254,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/CarPage/CarPage.jsx",
              lineNumber: 243,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "input",
                {
                  type: "text",
                  name: "ManufacturedCountry",
                  id: "ManufacturedCountry",
                  className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                  placeholder: " ",
                  required: !0,
                  readOnly: !0,
                  defaultValue: data.manufacturedCountry
                },
                void 0,
                !1,
                {
                  fileName: "app/components/CarPage/CarPage.jsx",
                  lineNumber: 262,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "label",
                {
                  htmlFor: "ManufacturedCountry",
                  className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                  children: "N\u01A1i s\u1EA3n xu\u1EA5t:"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/CarPage/CarPage.jsx",
                  lineNumber: 272,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/CarPage/CarPage.jsx",
              lineNumber: 261,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 242,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 223,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "BoughtPlace",
                id: "BoughtPlace",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: data.boughtPlace
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 283,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "BoughtPlace",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "Mua t\u1EA1i (Bought Place):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 293,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 282,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "ManufacturedCountry",
                id: "ManufacturedCountry",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0,
                readOnly: !0,
                defaultValue: data.purpose
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 301,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "label",
              {
                htmlFor: "ManufacturedCountry",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "M\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng (Purpose):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPage.jsx",
                lineNumber: 311,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 300,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 281,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPage.jsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CarPage/CarPage.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "3" }, void 0, !1, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 324,
            columnNumber: 13
          }, this),
          "DANH S\xC1CH \u0110\u0102NG KI\u1EC2M",
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(LIST OF INSPECTIONS)" }, void 0, !1, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 328,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 323,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react12.Link, { to: "addinspection", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "button",
            {
              "data-tooltip-target": "tooltip-dark",
              type: "button",
              className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              children: inspection.length === 0 ? "Create New Inspections" : "Renewal Inspections"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPage.jsx",
              lineNumber: 334,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "div",
            {
              id: "tooltip-dark",
              role: "tooltip",
              className: "absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700",
              children: [
                "Clink here to create inspections",
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "tooltip-arrow", "data-popper-arrow": !0 }, void 0, !1, {
                  fileName: "app/components/CarPage/CarPage.jsx",
                  lineNumber: 350,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/CarPage/CarPage.jsx",
              lineNumber: 344,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 333,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 332,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPage.jsx",
        lineNumber: 322,
        columnNumber: 9
      }, this),
      inspection.map((inspec) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { className: "mb-10 ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react12.Link, { to: `/Inspections/${inspec.regisNum}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-500 dark:bg-gray-700" }, void 0, !1, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 359,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("time", { className: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-300", children: formatDate(inspec.regisDate) }, void 0, !1, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 360,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: [
          "M\xE3 s\u1ED1 \u0110\u0103ng ki\u1EC3m: ",
          inspec.regisNum
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 363,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "T\u1EA1i: ",
          inspec.regisPlace.name
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 366,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPage.jsx",
        lineNumber: 358,
        columnNumber: 13
      }, this) }, inspec._id, !1, {
        fileName: "app/components/CarPage/CarPage.jsx",
        lineNumber: 357,
        columnNumber: 11
      }, this))
    ] }, void 0, !0, {
      fileName: "app/components/CarPage/CarPage.jsx",
      lineNumber: 321,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CarPage/CarPage.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_home.car.$numberPlate._index.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function CarInfoPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CarPage, {}, void 0, !1, {
    fileName: "app/routes/_home.car.$numberPlate._index.jsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
async function loader4({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return redirect("/login");
  let fetchData = {
    plate: params.numberPlate
  };
  return await (await fetch(
    "https://registrytotal.herokuapp.com/api/inspection/car/plate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(fetchData)
    }
  )).json();
}

// app/routes/_home.office_.$id.expiredsoon.jsx
var home_office_id_expiredsoon_exports = {};
__export(home_office_id_expiredsoon_exports, {
  default: () => OfficeExpiredSoonPage,
  loader: () => loader5
});

// app/components/Office/ExpiredSoonOffice.jsx
var import_flowbite_react5 = require("flowbite-react");
var import_react14 = require("@remix-run/react");
var import_react15 = require("react"), import_remix_utils4 = require("remix-utils"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function ExpiredSoonOfficeTable() {
  let inspection = (0, import_react14.useLoaderData)().data.sort(function(a, b) {
    return new Date(a.registDate) - new Date(b.registDate);
  }), [filterList, setFilterList] = (0, import_react15.useState)(inspection), [searchInput, setSearchInput] = (0, import_react15.useState)(""), searchHandler = (e) => {
    e.key === "Enter" && setSearchInput(e.target.value);
  };
  return (0, import_react15.useEffect)(() => {
    var filteredList = inspection.filter(
      (dt) => dt.numberPlate.search(searchInput) === 0
    );
    setFilterList(filteredList);
  }, [searchInput]), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(PageModal, { title: "This is the list of car have already expired", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "pb-4 bg-white dark:bg-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { for: "table-search", className: "sr-only", children: "Search" }, void 0, !1, {
        fileName: "app/components/Office/ExpiredSoonOffice.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "svg",
          {
            class: "w-5 h-5 text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Office/ExpiredSoonOffice.jsx",
                lineNumber: 42,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Office/ExpiredSoonOffice.jsx",
            lineNumber: 35,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Office/ExpiredSoonOffice.jsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "input",
          {
            onKeyDown: searchHandler,
            type: "text",
            id: "table-search",
            className: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Search for NumberPlate"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Office/ExpiredSoonOffice.jsx",
            lineNumber: 49,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Office/ExpiredSoonOffice.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/ExpiredSoonOffice.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_remix_utils4.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/components/Office/ExpiredSoonOffice.jsx",
      lineNumber: 58,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table, { hoverable: !0, className: "overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.HeadCell, { children: "NumberPlate" }, void 0, !1, {
          fileName: "app/components/Office/ExpiredSoonOffice.jsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.HeadCell, { children: "RegistDate" }, void 0, !1, {
          fileName: "app/components/Office/ExpiredSoonOffice.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.HeadCell, { children: "ExpiredDate" }, void 0, !1, {
          fileName: "app/components/Office/ExpiredSoonOffice.jsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.HeadCell, { children: "City" }, void 0, !1, {
          fileName: "app/components/Office/ExpiredSoonOffice.jsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "sr-only", children: "View" }, void 0, !1, {
          fileName: "app/components/Office/ExpiredSoonOffice.jsx",
          lineNumber: 67,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Office/ExpiredSoonOffice.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/ExpiredSoonOffice.jsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.Body, { className: "divide-y", children: filterList.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_flowbite_react5.Table.Row,
        {
          className: "bg-white dark:border-gray-700 dark:bg-gray-800",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: dt.numberPlate }, void 0, !1, {
              fileName: "app/components/Office/ExpiredSoonOffice.jsx",
              lineNumber: 76,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.Cell, { children: formatDate(dt.registDate) }, void 0, !1, {
              fileName: "app/components/Office/ExpiredSoonOffice.jsx",
              lineNumber: 79,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.Cell, { children: formatDate(dt.expiredDate) }, void 0, !1, {
              fileName: "app/components/Office/ExpiredSoonOffice.jsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.Cell, { children: dt.city }, void 0, !1, {
              fileName: "app/components/Office/ExpiredSoonOffice.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_flowbite_react5.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_react14.Link,
              {
                className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500",
                to: `/car/${dt.numberPlate}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "View" }, void 0, !1, {
                  fileName: "app/components/Office/ExpiredSoonOffice.jsx",
                  lineNumber: 87,
                  columnNumber: 23
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Office/ExpiredSoonOffice.jsx",
                lineNumber: 83,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Office/ExpiredSoonOffice.jsx",
              lineNumber: 82,
              columnNumber: 19
            }, this)
          ]
        },
        dt.numberPlate,
        !0,
        {
          fileName: "app/components/Office/ExpiredSoonOffice.jsx",
          lineNumber: 72,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/Office/ExpiredSoonOffice.jsx",
        lineNumber: 70,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/ExpiredSoonOffice.jsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Office/ExpiredSoonOffice.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Office/ExpiredSoonOffice.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office_.$id.expiredsoon.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function OfficeExpiredSoonPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ExpiredSoonOfficeTable, {}, void 0, !1, {
    fileName: "app/routes/_home.office_.$id.expiredsoon.jsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
async function loader5({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return redirect("/login");
  let url = "https://registrytotal.herokuapp.com/api/office/" + params.id + "/outdatecar", dataPass_1 = {
    status: "soon",
    city: "",
    info: "1"
  };
  return await (await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass_1)
  })).json();
}

// app/routes/_home.analystics.$codename.jsx
var home_analystics_codename_exports = {};
__export(home_analystics_codename_exports, {
  default: () => ProvinceAna,
  loader: () => loader6
});
var import_node4 = require("@remix-run/node");

// app/components/Analystics/OfficeListbyProvince.jsx
var import_react16 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function OfficeByProvince() {
  let office = (0, import_react16.useLoaderData)().office;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "text-gray-400 bg-gray-800 body-font rounded-lg shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "container px-5 py-10 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col text-left w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "text-2xl font-medium title-font mb-10 text-white tracking-widest", children: "Office In Province" }, void 0, !1, {
      fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
      lineNumber: 9,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-wrap -m-4", children: office.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react16.Link, { className: "p-4 lg:w-1/2", to: `/office/${a._id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-grow sm:pl-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "title-font font-medium text-lg text-white", children: a.name }, void 0, !1, {
        fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
        lineNumber: 18,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { className: "text-gray-500 mb-3", children: a.address }, void 0, !1, {
        fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
        lineNumber: 21,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mb-4", children: [
        "Hotmail: ",
        a.hotMail
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
        lineNumber: 22,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mb-4", children: [
        "Hotline: ",
        a.hotline
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
        lineNumber: 23,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
      lineNumber: 17,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
      lineNumber: 16,
      columnNumber: 15
    }, this) }, a._id, !1, {
      fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Analystics/OfficeListbyProvince.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/Analystics/ProvinceChart.jsx
var import_react17 = require("@remix-run/react"), import_remix_utils5 = require("remix-utils"), import_flowbite_react6 = require("flowbite-react"), import_react18 = require("react");
var import_Chart = __toESM(require_Chart()), import_react19 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function ProvinceChart() {
  let province = (0, import_react17.useLoaderData)().province, { Data2021, Data2022, Data2023 } = (0, import_react17.useLoaderData)(), [year, setYear] = (0, import_react18.useState)(2023), [chartdata, setChartData] = (0, import_react18.useState)(Data2023);
  (0, import_react18.useEffect)(() => {
    year === 2022 && setChartData(Data2022), year === 2021 && setChartData(Data2021), year === 2023 && setChartData(Data2023);
  }, [year]);
  let handleClick2023 = () => {
    setYear(2023);
  }, handleClick2022 = () => {
    setYear(2022);
  }, handleClick2021 = () => {
    setYear(2021);
  }, chartData = {
    options: {
      chart: {
        id: `Analysis For Registrations in ${year}`,
        animations: {
          enabled: !0,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: !0,
            delay: 150
          },
          dynamicAnimation: {
            enabled: !0,
            speed: 350
          }
        },
        toolbar: {
          show: !1
        }
      },
      xaxis: {
        categories: chartdata.data.map((ld) => ld.month),
        labels: {
          align: "center",
          style: {
            fontSize: "12px",
            colors: ["#FFFFFF"]
          }
        }
      },
      yaxis: {
        min: 0,
        forceNiceScale: !0,
        labels: {
          align: "center",
          style: {
            fontSize: "12px",
            colors: ["#FFFFFF"]
          }
        }
      },
      stroke: {
        curve: "smooth"
      },
      theme: {
        mode: "light",
        palette: "palette1",
        monochrome: {
          enabled: !0,
          color: "#255aee",
          shadeTo: "dark",
          shadeIntensity: 0.65
        }
      }
    },
    series: [
      {
        name: "New Registration",
        data: chartdata.data.map((ld) => ld.count)
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "items-center justify-between pb-4 border-b border-gray-200 sm:flex dark:border-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-full mb-4 sm:mb-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Total Registrations at:" }, void 0, !1, {
          fileName: "app/components/Analystics/ProvinceChart.jsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white", children: province }, void 0, !1, {
          fileName: "app/components/Analystics/ProvinceChart.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "flex items-center text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "In: ",
          year
        ] }, void 0, !0, {
          fileName: "app/components/Analystics/ProvinceChart.jsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/ProvinceChart.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-full max-w-lg text-right dark:text-green-400 font-lg", children: [
        "T\u1ED5ng: ",
        chartdata.total
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/ProvinceChart.jsx",
        lineNumber: 112,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Analystics/ProvinceChart.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_remix_utils5.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/components/Analystics/ProvinceChart.jsx",
      lineNumber: 117,
      columnNumber: 31
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_Chart.default, { data: chartData }, void 0, !1, {
      fileName: "app/components/Analystics/ProvinceChart.jsx",
      lineNumber: 118,
      columnNumber: 18
    }, this) }, void 0, !1, {
      fileName: "app/components/Analystics/ProvinceChart.jsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Analystics/ProvinceChart.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_flowbite_react6.Dropdown, { inline: !0, label: `${year}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_flowbite_react6.Dropdown.Item, { onClick: handleClick2023, children: "N\u0103m 2023" }, void 0, !1, {
          fileName: "app/components/Analystics/ProvinceChart.jsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_flowbite_react6.Dropdown.Item, { onClick: handleClick2022, children: "N\u0103m 2022" }, void 0, !1, {
          fileName: "app/components/Analystics/ProvinceChart.jsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_flowbite_react6.Dropdown.Item, { onClick: handleClick2021, children: "N\u0103m 2021" }, void 0, !1, {
          fileName: "app/components/Analystics/ProvinceChart.jsx",
          lineNumber: 126,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/ProvinceChart.jsx",
        lineNumber: 123,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Analystics/ProvinceChart.jsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      year === 2023 && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex-shrink-0 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react19.Link, { className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700", children: [
        "Full Report",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "svg",
          {
            className: "w-4 h-4 ml-1",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "https://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M9 5l7 7-7 7"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Analystics/ProvinceChart.jsx",
                lineNumber: 140,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Analystics/ProvinceChart.jsx",
            lineNumber: 133,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/ProvinceChart.jsx",
        lineNumber: 131,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Analystics/ProvinceChart.jsx",
        lineNumber: 130,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Analystics/ProvinceChart.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Analystics/ProvinceChart.jsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/components/Analystics/ProvinceExpired.jsx
var import_react20 = require("@remix-run/react"), import_flowbite_react7 = require("flowbite-react"), import_react21 = require("@remix-run/react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function ProvinceExpired2() {
  let expired = (0, import_react20.useLoaderData)().expired;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          import_flowbite_react7.Tooltip,
          {
            style: "light",
            placement: "right",
            animation: "duration-500",
            content: "Number of cars will be expired in less than 30 days",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Expired soon Registration:" }, void 0, !1, {
              fileName: "app/components/Analystics/ProvinceExpired.jsx",
              lineNumber: 16,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Analystics/ProvinceExpired.jsx",
            lineNumber: 10,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-green-500", children: expired.data.soon }, void 0, !1, {
          fileName: "app/components/Analystics/ProvinceExpired.jsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/ProvinceExpired.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-full dark:text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        import_react21.Link,
        {
          prefetch: "render",
          to: "expiredsoon",
          className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
          children: [
            "View Full List Of Cars",
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Analystics/ProvinceExpired.jsx",
                    lineNumber: 38,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Analystics/ProvinceExpired.jsx",
                lineNumber: 31,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Analystics/ProvinceExpired.jsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Analystics/ProvinceExpired.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Analystics/ProvinceExpired.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          import_flowbite_react7.Tooltip,
          {
            style: "light",
            placement: "right",
            animation: "duration-500",
            content: "Number of cars will be expired in less than 30 days",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Expired Registration:" }, void 0, !1, {
              fileName: "app/components/Analystics/ProvinceExpired.jsx",
              lineNumber: 56,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Analystics/ProvinceExpired.jsx",
            lineNumber: 50,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-green-500", children: expired.data.expired }, void 0, !1, {
          fileName: "app/components/Analystics/ProvinceExpired.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Analystics/ProvinceExpired.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-full dark:text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        import_react21.Link,
        {
          prefetch: "render",
          to: "expired",
          className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
          children: [
            "View Full List Of Cars",
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Analystics/ProvinceExpired.jsx",
                    lineNumber: 78,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Analystics/ProvinceExpired.jsx",
                lineNumber: 71,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Analystics/ProvinceExpired.jsx",
          lineNumber: 65,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Analystics/ProvinceExpired.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Analystics/ProvinceExpired.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Analystics/ProvinceExpired.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_home.analystics.$codename.jsx
var import_react22 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function ProvinceAna() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 max-h-3/5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ProvinceChart, {}, void 0, !1, {
      fileName: "app/routes/_home.analystics.$codename.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.analystics.$codename.jsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.analystics.$codename.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.analystics.$codename.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-4 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ProvinceExpired2, {}, void 0, !1, {
      fileName: "app/routes/_home.analystics.$codename.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.analystics.$codename.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "px-4 pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(OfficeByProvince, {}, void 0, !1, {
      fileName: "app/routes/_home.analystics.$codename.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.analystics.$codename.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react22.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_home.analystics.$codename.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.analystics.$codename.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
async function loader6({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node4.redirect)("/login");
  let codename = params.codename, province = province_default.filter((a) => a.codename === codename)[0].name, fetch1 = {
    time: "2023",
    city: province
  }, fetch2 = {
    time: "2022",
    city: province
  }, fetch3 = {
    time: "2021",
    city: province
  }, fetch4 = {
    province
  }, fetch5 = {
    status: "soon",
    city: province,
    info: "0"
  }, url = "https://registrytotal.herokuapp.com/api/office/own/car", url_2 = "https://registrytotal.herokuapp.com/api/office/own/outdatecar", response2023 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(fetch1)
  }), response2022 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(fetch2)
  }), response2021 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(fetch3)
  }), responseOffice = await fetch(
    "https://registrytotal.herokuapp.com/api/office/province",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(fetch4)
    }
  ), expiredResponse = await fetch(url_2, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(fetch5)
  }), Data2023 = await response2023.json(), Data2022 = await response2022.json(), Data2021 = await response2021.json(), office = await responseOffice.json(), expired = await expiredResponse.json();
  return console.log(expired), (0, import_node4.json)({
    office,
    Data2021,
    Data2022,
    Data2023,
    province,
    expired
  });
}

// app/routes/_home.office_.$id.addStaff.jsx
var home_office_id_addStaff_exports = {};
__export(home_office_id_addStaff_exports, {
  action: () => action2,
  default: () => addStaffPage,
  meta: () => meta2
});
var import_react24 = require("@remix-run/react");

// app/components/AddStaffForm.jsx
var import_react23 = require("@remix-run/react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function AddForm(props) {
  let error = (0, import_react23.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h3", { className: "text-red-500 text-md bold text-center mb-5", children: [
      error.message,
      ", please try again"
    ] }, void 0, !0, {
      fileName: "app/components/AddStaffForm.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react23.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "grid gap-6 mb-6 md:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "label",
            {
              htmlFor: "name",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Name"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 14,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              type: "text",
              name: "name",
              id: "name",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "Name",
              required: !0,
              defaultValue: ""
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 20,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "label",
            {
              htmlFor: "SSN",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Social Security Number"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 31,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              type: "text",
              name: "SSN",
              id: "SSN",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "Social Security Number",
              required: !0,
              defaultValue: ""
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 37,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "label",
            {
              htmlFor: "dob",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Date Of Birth"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 48,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              type: "text",
              name: "dob",
              id: "dob",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "dd-mm-yyyy",
              required: !0,
              defaultValue: ""
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 54,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "label",
            {
              htmlFor: "workFor",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Works"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 65,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              type: "text",
              id: "workFor",
              name: "workFor",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: !0,
              defaultValue: props.data
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 71,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "label",
            {
              htmlFor: "phone",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Phone"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 81,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              type: "text",
              id: "phone",
              name: "phone",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "10 numbers",
              required: !0,
              defaultValue: ""
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 87,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Email"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 98,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "example@gmail.com",
              defaultValue: "",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 104,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "ADD" }, void 0, !1, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AddStaffForm.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AddStaffForm.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/services/APIAction.server.js
var import_node5 = require("@remix-run/node");
async function login(email, password) {
  let response = await fetch(
    "https://registrytotal.herokuapp.com/api/staff/login",
    {
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password })
    }
  );
  if (response.ok === !1)
    throw new Error("Invalid Credentials, please try again");
  {
    let user = await response.json();
    return createUserSession(user.session, "/");
  }
}
async function getAllOffice(request2) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node5.redirect)("/login");
  let resData = await (await fetch("https://registrytotal.herokuapp.com/api/office", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json"
    }
  })).json();
  if (resData === "NOT FOUND")
    throw new Error("You must be admin to access this page");
  return resData;
}
async function addStaff(request2, data) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node5.redirect)("/login");
  let resData = await (await fetch(
    "https://registrytotal.herokuapp.com/api/staff/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  )).json();
  return resData !== "SUCCEEDED" ? (0, import_node5.json)({ message: resData }) : (0, import_node5.redirect)("/office");
}
async function getInspections(params, request2) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node5.redirect)("/login");
  let url = "https://registrytotal.herokuapp.com/api/inspection/" + params.id;
  return await (await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })).json();
}
async function findInspectionsById(request2, id) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node5.redirect)("/login");
  let url = "https://registrytotal.herokuapp.com/api/inspection/" + id, resData = await (await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })).json();
  if (console.log(resData), resData === null)
    throw new Error("Cannot find this Registration Number");
  return (0, import_node5.redirect)(`/Inspections/${id}`);
}
async function getOwnInfo(request2) {
  let response = await requireUserSession(request2);
  return response ? await (await fetch(
    "https://registrytotal.herokuapp.com/api/staff/own",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${response}`,
        "content-type": "application/json"
      }
    }
  )).json() : (0, import_node5.redirect)("/login");
}
async function EditInfo(request2, data) {
  let token = await requireUserSession(request2);
  return token ? await (await fetch(
    "https://registrytotal.herokuapp.com/api/staff/change",
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  )).json() : (0, import_node5.redirect)("/login");
}
async function getStaffbyId(request2, staffID) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node5.redirect)("/login");
  let resData = await (await fetch(
    "https://registrytotal.herokuapp.com/api/staff/" + staffID,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  )).json();
  if (resData === "NOT FOUND")
    throw new Error("You must be admin to access this page");
  return resData;
}
async function addOffice(request2, data) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node5.redirect)("/login");
  let resData = await (await fetch(
    "https://registrytotal.herokuapp.com/api/office/add",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  )).json();
  if (resData === "UNAUTHORIZED")
    throw new Error("You must be admin to access this");
  return resData === "SUCCEEDED" ? (0, import_node5.redirect)("/office") : (0, import_node5.json)({ message: resData });
}
async function adminCheck(request2) {
  if ((await getOwnInfo(request2)).isAdmin === 0)
    throw new Error("You must be ad administrator to access this");
  return null;
}
async function findCarbyNumberPlate(request2, numberPlate) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node5.redirect)("/login");
  let fetchData = {
    plate: numberPlate
  }, resData = await (await fetch(
    "https://registrytotal.herokuapp.com/api/inspection/car/plate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(fetchData)
    }
  )).json();
  if (console.log(resData), resData === null)
    throw new Error("Cannot find this Numberplate");
  return (0, import_node5.redirect)(`/car/${numberPlate}`);
}

// app/routes/_home.office_.$id.addStaff.jsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function meta2() {
  return [{ title: "Add Staff" }];
}
function addStaffPage() {
  let context = (0, import_react24.useOutletContext)();
  return console.log(context), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(PageModal, { title: "Provide credentials information to add users", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(AddForm, { data: context.staff.name }, void 0, !1, {
    fileName: "app/routes/_home.office_.$id.addStaff.jsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_home.office_.$id.addStaff.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
async function action2({ request: request2 }) {
  let formData = await request2.formData(), data = {
    email: formData.get("email"),
    name: formData.get("name"),
    workFor: formData.get("workFor"),
    dob: reFormatDate(formData.get("dob")),
    ssn: formData.get("SSN"),
    phone: formData.get("phone"),
    password: "12345678",
    isAdmin: 0
  };
  return await addStaff(request2, data);
}

// app/routes/_home.office_.$id_.$userID.jsx
var home_office_id_userID_exports = {};
__export(home_office_id_userID_exports, {
  default: () => StaffInfoPage,
  loader: () => loader7
});

// app/components/Office/StaffInfo.jsx
var import_react25 = require("@remix-run/react");

// app/images/ava.png
var ava_default = "/build/_assets/ava-RLJVMXTQ.png";

// app/components/Office/StaffInfo.jsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function StaffInfo() {
  let info = (0, import_react25.useLoaderData)(), { name, SSN, dateOfBirth, phone } = info.data, formattedDate = formatDate(dateOfBirth), inspection = info.registed;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: " m-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("section", { className: "mx-0 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "max-w-7xl lg:pt-5 items-stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mx-5 max-w-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between md:space-x-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            "img",
            {
              className: "h-16 w-16 lg:h-24 lg:w-24 rounded-full border border-white/10",
              src: ava_default,
              alt: "image"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 21,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            "span",
            {
              className: "absolute inset-0 rounded-full shadow-inner",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 26,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 20,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 19,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "pt-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "text-xl font-semibold", children: name }, void 0, !1, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 33,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "text-lg font-light text-black-500", children: [
            "Nh\xE2n vi\xEAn t\u1EA1i: ",
            info.workFor.name
          ] }, void 0, !0, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 34,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 32,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/StaffInfo.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/Office/StaffInfo.jsx",
        lineNumber: 17,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-24 text-md font-light dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react25.Link, { to: "#", className: "flex flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "mb-5 text-lg font-bold ", children: "Th\xF4ng tin c\xE1 nh\xE2n" }, void 0, !1, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 42,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "ms-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPencil }, void 0, !1, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 46,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 45,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 41,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dl", { className: "max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Email address" }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 51,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dd", { className: "text-lg font-semibold", children: info.email }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 54,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 50,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Social Security Number" }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 58,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dd", { className: "text-lg font-semibold", children: SSN }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 61,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 57,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Date of Birth" }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 64,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dd", { className: "text-lg font-semibold", children: formattedDate }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 67,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 63,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col pt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Phone number" }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 70,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dd", { className: "text-lg font-semibold", children: phone }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 73,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 69,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/StaffInfo.jsx",
        lineNumber: 40,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/StaffInfo.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Office/StaffInfo.jsx",
      lineNumber: 15,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Office/StaffInfo.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Office/StaffInfo.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("section", { className: "ms-5 mt-10 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-lg font-semibold dark:text-green-300", children: "Inspections" }, void 0, !1, {
        fileName: "app/components/Office/StaffInfo.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ol", { className: "relative border-l border-gray-200 dark:border-gray-700", children: inspection.map((inspec) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { className: "mb-10 ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react25.Link, { to: `/Inspections/${inspec.regisNum}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" }, void 0, !1, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("time", { className: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500", children: formatDate(inspec.regisDate) }, void 0, !1, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 90,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: [
          "M\xE3 s\u1ED1 \u0110\u0103ng ki\u1EC3m: ",
          inspec.regisNum
        ] }, void 0, !0, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 93,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "Bi\u1EC3n s\u1ED1 xe: ",
          inspec.car.numberPlate
        ] }, void 0, !0, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "T\u1EA1i: ",
          info.workFor.name
        ] }, void 0, !0, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 99,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/StaffInfo.jsx",
        lineNumber: 88,
        columnNumber: 15
      }, this) }, inspec._id, !1, {
        fileName: "app/components/Office/StaffInfo.jsx",
        lineNumber: 87,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/Office/StaffInfo.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/StaffInfo.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Office/StaffInfo.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office_.$id_.$userID.jsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function StaffInfoPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(StaffInfo, {}, void 0, !1, {
    fileName: "app/routes/_home.office_.$id_.$userID.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function loader7({ request: request2, params }) {
  try {
    return await getStaffbyId(request2, params.userID);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

// app/routes/_home.office_.$id.expired.jsx
var home_office_id_expired_exports = {};
__export(home_office_id_expired_exports, {
  default: () => OfficeExpiredPage,
  loader: () => loader8
});

// app/components/Office/ExpiredOffice.jsx
var import_flowbite_react8 = require("flowbite-react");
var import_react26 = require("@remix-run/react");
var import_react27 = require("react"), import_remix_utils6 = require("remix-utils"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function ExpiredOfficeTable() {
  let inspection = (0, import_react26.useLoaderData)().data.sort(function(a, b) {
    return new Date(a.registDate) - new Date(b.registDate);
  }), [filterList, setFilterList] = (0, import_react27.useState)(inspection), [searchInput, setSearchInput] = (0, import_react27.useState)(""), searchHandler = (e) => {
    e.key === "Enter" && setSearchInput(e.target.value);
  };
  return (0, import_react27.useEffect)(() => {
    var filteredList = inspection.filter(
      (dt) => dt.numberPlate.search(searchInput) === 0
    );
    setFilterList(filteredList);
  }, [searchInput]), /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(PageModal, { title: "This is the list of car have already expired", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pb-4 bg-white dark:bg-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { for: "table-search", className: "sr-only", children: "Search" }, void 0, !1, {
        fileName: "app/components/Office/ExpiredOffice.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "relative mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "svg",
          {
            class: "w-5 h-5 text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Office/ExpiredOffice.jsx",
                lineNumber: 43,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Office/ExpiredOffice.jsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Office/ExpiredOffice.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "input",
          {
            onKeyDown: searchHandler,
            type: "text",
            id: "table-search",
            className: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Search for NumberPlate"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Office/ExpiredOffice.jsx",
            lineNumber: 50,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Office/ExpiredOffice.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/ExpiredOffice.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_remix_utils6.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/components/Office/ExpiredOffice.jsx",
      lineNumber: 59,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table, { hoverable: !0, className: "overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.HeadCell, { children: "NumberPlate" }, void 0, !1, {
          fileName: "app/components/Office/ExpiredOffice.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.HeadCell, { children: "RegistDate" }, void 0, !1, {
          fileName: "app/components/Office/ExpiredOffice.jsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.HeadCell, { children: "ExpiredDate" }, void 0, !1, {
          fileName: "app/components/Office/ExpiredOffice.jsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.HeadCell, { children: "City" }, void 0, !1, {
          fileName: "app/components/Office/ExpiredOffice.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "sr-only", children: "View" }, void 0, !1, {
          fileName: "app/components/Office/ExpiredOffice.jsx",
          lineNumber: 68,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Office/ExpiredOffice.jsx",
          lineNumber: 67,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/ExpiredOffice.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.Body, { className: "divide-y", children: filterList.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        import_flowbite_react8.Table.Row,
        {
          className: "bg-white dark:border-gray-700 dark:bg-gray-800",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: dt.numberPlate }, void 0, !1, {
              fileName: "app/components/Office/ExpiredOffice.jsx",
              lineNumber: 77,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.Cell, { children: formatDate(dt.registDate) }, void 0, !1, {
              fileName: "app/components/Office/ExpiredOffice.jsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.Cell, { children: formatDate(dt.expiredDate) }, void 0, !1, {
              fileName: "app/components/Office/ExpiredOffice.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.Cell, { children: dt.city }, void 0, !1, {
              fileName: "app/components/Office/ExpiredOffice.jsx",
              lineNumber: 82,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_flowbite_react8.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
              import_react26.Link,
              {
                className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500",
                to: `/car/${dt.numberPlate}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: "View" }, void 0, !1, {
                  fileName: "app/components/Office/ExpiredOffice.jsx",
                  lineNumber: 88,
                  columnNumber: 23
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Office/ExpiredOffice.jsx",
                lineNumber: 84,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Office/ExpiredOffice.jsx",
              lineNumber: 83,
              columnNumber: 19
            }, this)
          ]
        },
        dt.numberPlate,
        !0,
        {
          fileName: "app/components/Office/ExpiredOffice.jsx",
          lineNumber: 73,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/Office/ExpiredOffice.jsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/ExpiredOffice.jsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Office/ExpiredOffice.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Office/ExpiredOffice.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office_.$id.expired.jsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function OfficeExpiredPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ExpiredOfficeTable, {}, void 0, !1, {
    fileName: "app/routes/_home.office_.$id.expired.jsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
async function loader8({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return redirect("/login");
  let url = "https://registrytotal.herokuapp.com/api/office/" + params.id + "/outdatecar", dataPass_1 = {
    status: "expired",
    city: "",
    info: "1"
  };
  return await (await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass_1)
  })).json();
}

// app/routes/_home.Inspections._index.jsx
var home_Inspections_index_exports = {};
__export(home_Inspections_index_exports, {
  action: () => action3,
  default: () => InspectionSearchPage
});
var import_searchInspectionsModal = __toESM(require_searchInspectionsModal());
var import_node6 = require("@remix-run/node"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function InspectionSearchPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_searchInspectionsModal.default, {}, void 0, !1, {
    fileName: "app/routes/_home.Inspections._index.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function action3({ request: request2 }) {
  let id = (await request2.formData()).get("InspectId");
  try {
    return await findInspectionsById(request2, id);
  } catch (error) {
    return (0, import_node6.json)({ message: error.message });
  }
}

// app/routes/_home.office_.$id._index.jsx
var home_office_id_index_exports = {};
__export(home_office_id_index_exports, {
  default: () => OfficeIDMain
});
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function OfficeIDMain() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, {}, void 0, !1, {
    fileName: "app/routes/_home.office_.$id._index.jsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/_home._main.expiredsoon.jsx
var home_main_expiredsoon_exports = {};
__export(home_main_expiredsoon_exports, {
  default: () => ExpiredSoon,
  loader: () => loader9
});

// app/components/Dashboard/ExpiredSoon.jsx
var import_flowbite_react9 = require("flowbite-react");
var import_react28 = require("@remix-run/react");
var import_react29 = require("react");
var import_remix_utils7 = require("remix-utils"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function ExpiredSoonTable() {
  let inspection = (0, import_react28.useLoaderData)().data.sort(function(a, b) {
    return new Date(a.registDate) - new Date(b.registDate);
  }), [filterList, setFilterList] = (0, import_react29.useState)(inspection), [searchInput, setSearchInput] = (0, import_react29.useState)(""), searchHandler = (e) => {
    e.key === "Enter" && setSearchInput(e.target.value);
  };
  return (0, import_react29.useEffect)(() => {
    var filteredList = inspection.filter(
      (dt) => dt.numberPlate.search(searchInput) === 0
    );
    setFilterList(filteredList);
  }, [searchInput]), /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(PageModal, { title: "This is the list of car will be expired soon", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "pb-4 bg-white dark:bg-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("label", { for: "table-search", className: "sr-only", children: "Search" }, void 0, !1, {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "relative mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          "svg",
          {
            class: "w-5 h-5 text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Dashboard/ExpiredSoon.jsx",
                lineNumber: 42,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard/ExpiredSoon.jsx",
            lineNumber: 35,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Dashboard/ExpiredSoon.jsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          "input",
          {
            onKeyDown: searchHandler,
            type: "text",
            id: "table-search",
            className: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Search for NumberPlate"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard/ExpiredSoon.jsx",
            lineNumber: 49,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/ExpiredSoon.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_remix_utils7.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/components/Dashboard/ExpiredSoon.jsx",
      lineNumber: 58,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table, { hoverable: !0, className: "overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.HeadCell, { children: "NumberPlate" }, void 0, !1, {
          fileName: "app/components/Dashboard/ExpiredSoon.jsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.HeadCell, { children: "RegistDate" }, void 0, !1, {
          fileName: "app/components/Dashboard/ExpiredSoon.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.HeadCell, { children: "ExpiredDate" }, void 0, !1, {
          fileName: "app/components/Dashboard/ExpiredSoon.jsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.HeadCell, { children: "City" }, void 0, !1, {
          fileName: "app/components/Dashboard/ExpiredSoon.jsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "sr-only", children: "View" }, void 0, !1, {
          fileName: "app/components/Dashboard/ExpiredSoon.jsx",
          lineNumber: 67,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Dashboard/ExpiredSoon.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.Body, { className: "divide-y", children: filterList.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        import_flowbite_react9.Table.Row,
        {
          className: "bg-white dark:border-gray-700 dark:bg-gray-800",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: dt.numberPlate }, void 0, !1, {
              fileName: "app/components/Dashboard/ExpiredSoon.jsx",
              lineNumber: 76,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.Cell, { children: formatDate(dt.registDate) }, void 0, !1, {
              fileName: "app/components/Dashboard/ExpiredSoon.jsx",
              lineNumber: 79,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.Cell, { children: formatDate(dt.expiredDate) }, void 0, !1, {
              fileName: "app/components/Dashboard/ExpiredSoon.jsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.Cell, { children: dt.city }, void 0, !1, {
              fileName: "app/components/Dashboard/ExpiredSoon.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_flowbite_react9.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              import_react28.Link,
              {
                className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500",
                to: `/car/${dt.numberPlate}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { children: "View" }, void 0, !1, {
                  fileName: "app/components/Dashboard/ExpiredSoon.jsx",
                  lineNumber: 87,
                  columnNumber: 23
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Dashboard/ExpiredSoon.jsx",
                lineNumber: 83,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Dashboard/ExpiredSoon.jsx",
              lineNumber: 82,
              columnNumber: 19
            }, this)
          ]
        },
        dt.numberPlate,
        !0,
        {
          fileName: "app/components/Dashboard/ExpiredSoon.jsx",
          lineNumber: 72,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 70,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/ExpiredSoon.jsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Dashboard/ExpiredSoon.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/ExpiredSoon.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/_home._main.expiredsoon.jsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function ExpiredSoon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(ExpiredSoonTable, {}, void 0, !1, {
    fileName: "app/routes/_home._main.expiredsoon.jsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
async function loader9({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return redirect("/login");
  let url = "https://registrytotal.herokuapp.com/api/office/own/outdatecar", dataPass_1 = {
    status: "soon",
    city: "",
    info: "1"
  };
  return await (await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass_1)
  })).json();
}

// app/routes/_home.analystics._index.jsx
var home_analystics_index_exports = {};
__export(home_analystics_index_exports, {
  action: () => action4,
  default: () => AnalysticsPage
});
var import_node7 = require("@remix-run/node");

// app/components/Analystics/ProvinceBoxModal.jsx
var import_TextField = __toESM(require("@mui/material/TextField")), import_Autocomplete = __toESM(require("@mui/material/Autocomplete"));
var import_react30 = require("@remix-run/react"), import_flowbite_react10 = require("flowbite-react"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function ProvinceBox() {
  let name = province_default.map((a) => a.name), action11 = (0, import_react30.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(PageModal, { title: "Choose a Province", children: [
    action11 ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_flowbite_react10.Alert, { color: "failure", className: "mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "font-medium mb-5" }, void 0, !1, {
        fileName: "app/components/Analystics/ProvinceBoxModal.jsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      " ",
      action11.message
    ] }, void 0, !0, {
      fileName: "app/components/Analystics/ProvinceBoxModal.jsx",
      lineNumber: 15,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Analystics/ProvinceBoxModal.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) : "",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react30.Form, { method: "post", className: "bg-transparent dark:text-white mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      import_Autocomplete.default,
      {
        disablePortal: !0,
        options: name,
        renderInput: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_TextField.default, { ...params, label: "Province", name: "province" }, void 0, !1, {
          fileName: "app/components/Analystics/ProvinceBoxModal.jsx",
          lineNumber: 27,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Analystics/ProvinceBoxModal.jsx",
        lineNumber: 23,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Analystics/ProvinceBoxModal.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Analystics/ProvinceBoxModal.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_home.analystics._index.jsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function AnalysticsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ProvinceBox, {}, void 0, !1, {
    fileName: "app/routes/_home.analystics._index.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_home.analystics._index.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
async function action4({ request: request2 }) {
  let p = (await request2.formData()).get("province"), data = province_default.filter((a) => a.name === p)[0];
  return data === void 0 ? (0, import_node7.json)({ message: "Can't find province" }) : (0, import_node7.redirect)(`/analystics/${data.codename}`);
}

// app/routes/_home.Inspections.$id.jsx
var home_Inspections_id_exports = {};
__export(home_Inspections_id_exports, {
  default: () => InpectionsPage,
  loader: () => loader10
});
var import_flowbite_react11 = require("flowbite-react");

// app/components/Inspections/InspectionsForm.jsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function InspectionsForm({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("section", { className: "text-gray-600 body-font dark:text-white m-auto dark:bg-slate-800 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "container px-5 py-24 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex flex-wrap -mx-4 -mb-10 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "lg:w-1/2 mb-10 px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("section", { className: "m-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h2", { className: "sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900 dark:text-red-500 text-center", children: "1. PH\u01AF\u01A0NG TI\u1EC6N \u2002 (VEHICLE)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 11,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left flex w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-1", children: [
            " ",
            "Bi\u1EC3n \u0111\u0103ng k\xFD: ",
            data.car.numberPlate
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 15,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-1", children: [
            "S\u1ED1 qu\u1EA3n l\xFD: ",
            data.car.certificate.certNum
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 19,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 14,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left flex w-full  italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-1", children: "(Registration Number)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 24,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-1", children: "(Vehicle Inspection No.)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 25,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 23,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Lo\u1EA1i Ph\u01B0\u01A1ng ti\u1EC7n: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Type)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 28,
            columnNumber: 35
          }, this),
          data.car.type
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 27,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Nh\xE3n Hi\u1EC7u: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Mark)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 32,
            columnNumber: 28
          }, this),
          " ",
          data.car.mark
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "S\u1ED1 Lo\u1EA1i: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Model Code)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 36,
            columnNumber: 26
          }, this),
          " ",
          data.car.modelCode
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "S\u1ED1 M\xE1y: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Engine Number)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 40,
            columnNumber: 25
          }, this),
          " ",
          data.car.engineNumber
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 39,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "S\u1ED1 Khung:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Chasis Number)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 44,
            columnNumber: 26
          }, this),
          " ",
          data.car.chassisNumber
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 43,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left flex w-full  mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-initial w-3/4", children: [
            "N\u0103m, N\u01B0\u1EDBc s\u1EA3n xu\u1EA5t: ",
            data.car.manufacturedYear,
            ",",
            " ",
            data.car.manufacturedCountry
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 48,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-initial w-32", children: "Ni\xEAn H\u1EA1n SD:" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 53,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left flex w-full  italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-initial w-3/4", children: "(Manufactured Year and Country)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 56,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-initial w-32", children: "(Lifetime limit to)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 59,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 55,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left flex w-full  mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-initial w-3/5", children: [
            "Kinh doanh v\u1EADn t\u1EA3i",
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: [
              "(Commercial Use)",
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  readOnly: !0,
                  checked: data.car.purpose === "Kinh doanh",
                  className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Inspections/InspectionsForm.jsx",
                  lineNumber: 66,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/Inspections/InspectionsForm.jsx",
              lineNumber: 64,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 62,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-initial ms-3", children: [
            "C\u1EA3i t\u1EA1o",
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: [
              "(Modification)",
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  readOnly: !0,
                  className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Inspections/InspectionsForm.jsx",
                  lineNumber: 78,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/Inspections/InspectionsForm.jsx",
              lineNumber: 76,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 74,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 61,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("section", { className: "m-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h2", { className: "sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900 text-center dark:text-red-500", children: "2. TH\xD4NG S\u1ED0 K\u1EF8 THU\u1EACT\u2002(SPECIFICATIONS)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left flex w-full  mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-1", children: [
            "C\xF4ng th\u1EE9c b\xE1nh xe: ",
            data.car.specification.wheelFormula
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 92,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-1", children: [
            "V\u1EBFt b\xE1nh xe:",
            data.car.specification.wheelTread
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 95,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left flex w-full  italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-1", children: "(Wheel Formula)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-1", children: "(Wheel Tread)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 101,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 99,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "K\xEDch th\u01B0\u1EDBc bao:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Overall Dimension)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 105,
            columnNumber: 17
          }, this),
          " ",
          data.car.specification.overallDimension
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 103,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "block w-full", children: [
            "KT khoang h\xE0nh l\xFD l\u1EDBn nh\u1EA5t:",
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Largest luggage container Dimension)" }, void 0, !1, {
              fileName: "app/components/Inspections/InspectionsForm.jsx",
              lineNumber: 111,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "block w-full", children: data.car.specification.luggageContainer }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 116,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Chi\u1EC1u d\xE0i c\u01A1 s\u1EDF:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(WheelBase)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          " ",
          data.car.specification.wheelBase
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Kh\u1ED1i l\u01B0\u1EE3ng b\u1EA3n th\xE2n:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(KerbMass)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 127,
            columnNumber: 17
          }, this),
          data.car.specification.kerbMass
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 125,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 87,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inspections/InspectionsForm.jsx",
      lineNumber: 9,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "lg:w-1/2 mb-10 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("section", { className: "m-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "block w-full", children: [
          "Kh\u1ED1i l\u01B0\u1EE3ng h\xE0ng CC theo TK/CP TGGT:",
          " ",
          data.car.specification.authorizedPayload
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 137,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize Payload)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 141,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 136,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "block w-full", children: [
          "Kh\u1ED1i l\u01B0\u1EE3ng to\xE0n b\u1ED9 theo TK/CP TGGT:",
          " ",
          data.car.specification.authorizedTotalMass
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 146,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize total mass)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 150,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 145,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "block w-full", children: [
          "Kh\u1ED1i l\u01B0\u1EE3ng k\xE9o theo theo TK/CP TGGT:",
          " ",
          data.car.specification.authorizedTowedMass
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 155,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize towed mass)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 159,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 154,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "block w-full", children: [
          "S\u1ED1 ng\u01B0\u1EDDi cho ph\xE9p ch\u1EDF: ",
          data.car.specification.carriedNo
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 164,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Permission No. of Pers Carried: seat, stood place, laying place)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 167,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 163,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "Lo\u1EA1i nhi\xEAn li\u1EC7u:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Type of Fuel Used)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 174,
          columnNumber: 17
        }, this),
        data.car.specification.fuel
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 172,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "Th\u1EC3 t\xEDch l\xE0m vi\u1EC7c c\u1EE7a \u0111\u1ED9ng c\u01A1:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Engine displacement)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 179,
          columnNumber: 17
        }, this),
        data.car.specification.engineDisplacement
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 177,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "C\xF4ng su\u1EA5t l\u1EDBn nh\u1EA5t/t\u1ED1c \u0111\u1ED9 quay:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Max. output/rpm)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 184,
          columnNumber: 17
        }, this),
        data.car.specification.maxOutputToRpmRatio
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 182,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
          "S\u1ED1 l\u01B0\u1EE3ng l\u1ED1p, c\u1EE1 l\u1ED1p/tr\u1EE5c:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "italic text-sm", children: "(Number of Tires; Tire size/axle)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 190,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 188,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: data.car.specification.numberOfTiresAndTireSize }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 195,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: data.car.specification.numberOfTiresAndTireSize }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 196,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 194,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 187,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "container flex flex-wrap mx-auto items-center pt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-initial w-1/3 pt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: "S\u1ED1 phi\u1EBFu ki\u1EC3m \u0111\u1ECBnh:" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 201,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "italic text-sm ", children: "(Inspection Report No)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 204,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: " text-left", children: data.regisNum }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 205,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-left  w-full mt-1", children: "C\xF3 hi\u1EC7u l\u1EF1c \u0111\u1EBFn h\u1EBFt ng\xE0y:" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 206,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "italic text-sm ", children: [
            "(Valid Until)",
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: " text-md text-left", children: formatDate(data.expiredDate) }, void 0, !1, {
              fileName: "app/components/Inspections/InspectionsForm.jsx",
              lineNumber: 211,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 209,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 200,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex-initial w-2/3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-center  w-full mt-1", children: [
            data.regisPlace.city,
            ", ",
            formatDate(data.regisDate)
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 217,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "italic text-sm  text-center", children: "(Issue on Date/Month/Year)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 220,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h3", { className: "font-medium title-font text-center ", children: "\u0110\u01A0N V\u1ECA KI\u1EC2M \u0110\u1ECANH" }, void 0, !1, {
              fileName: "app/components/Inspections/InspectionsForm.jsx",
              lineNumber: 224,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt-3 dark:text-red-700 text-center font-medium block", children: data.regisPlace.name }, void 0, !1, {
              fileName: "app/components/Inspections/InspectionsForm.jsx",
              lineNumber: 227,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 223,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 216,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 199,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inspections/InspectionsForm.jsx",
      lineNumber: 135,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Inspections/InspectionsForm.jsx",
      lineNumber: 134,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Inspections/InspectionsForm.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Inspections/InspectionsForm.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Inspections/InspectionsForm.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/_home.Inspections.$id.jsx
var import_react31 = require("@remix-run/react"), import_react32 = require("react"), import_react_to_print = require("react-to-print"), import_react_fontawesome2 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons");

// app/components/Inspections/registedStaff.jsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function Staff(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "1" }, void 0, !1, {
        fileName: "app/components/Inspections/registedStaff.jsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      "NG\u01AF\u1EDCI \u0110\u0102NG K\xDD",
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(STAFF)" }, void 0, !1, {
        fileName: "app/components/Inspections/registedStaff.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inspections/registedStaff.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Inspections/registedStaff.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "input",
          {
            type: "text",
            name: "OwnerName",
            id: "OwnerName",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0,
            defaultValue: props.data.data.name,
            readOnly: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/registedStaff.jsx",
            lineNumber: 17,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "label",
          {
            htmlFor: "OwnerName",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 tranform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "H\u1ECD v\xE0 t\xEAn (Name):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/registedStaff.jsx",
            lineNumber: 27,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/registedStaff.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "input",
          {
            type: "datetime",
            name: "DOB",
            id: "DOB",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0,
            defaultValue: formatDate(props.data.data.dateOfBirth),
            readOnly: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/registedStaff.jsx",
            lineNumber: 35,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "label",
          {
            htmlFor: "DOB",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Ng\xE0y Sinh (dd-mm-yyyy):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/registedStaff.jsx",
            lineNumber: 45,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/registedStaff.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inspections/registedStaff.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "input",
          {
            type: "text",
            name: "workFor",
            id: "workFor",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0,
            readOnly: !0,
            defaultValue: props.office
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/registedStaff.jsx",
            lineNumber: 55,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "label",
          {
            htmlFor: "workFor",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "C\xF4ng t\xE1c t\u1EA1i: (Work for)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/registedStaff.jsx",
            lineNumber: 65,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/registedStaff.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "input",
          {
            type: "email",
            name: "Email",
            id: "Email",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0,
            readOnly: !0,
            defaultValue: props.data.email
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/registedStaff.jsx",
            lineNumber: 73,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "label",
          {
            htmlFor: "Email",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Email:"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/registedStaff.jsx",
            lineNumber: 83,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/registedStaff.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "input",
          {
            type: "text",
            name: "Phone",
            id: "Phone",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0,
            readOnly: !0,
            defaultValue: props.data.data.phone
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/registedStaff.jsx",
            lineNumber: 91,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "label",
          {
            htmlFor: "Phone",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "\u0110i\u1EC7n tho\u1EA1i c\xE1 nh\xE2n (Phone) :"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/registedStaff.jsx",
            lineNumber: 101,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/registedStaff.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inspections/registedStaff.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Inspections/registedStaff.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_home.Inspections.$id.jsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function InpectionsPage() {
  let data = (0, import_react31.useLoaderData)();
  console.log(data);
  let componentsRef = (0, import_react32.useRef)(), handlePrint = (0, import_react_to_print.useReactToPrint)({
    content: () => componentsRef.current
  }), pageStyle = `"
  @page {
    size: A4 landscape;
  }
"`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Staff, { data: data.regisStaff, office: data.regisPlace.name }, void 0, !1, {
      fileName: "app/routes/_home.Inspections.$id.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("style", { children: pageStyle }, void 0, !1, {
        fileName: "app/routes/_home.Inspections.$id.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "2" }, void 0, !1, {
            fileName: "app/routes/_home.Inspections.$id.jsx",
            lineNumber: 30,
            columnNumber: 13
          }, this),
          "GI\u1EA4Y CH\u1EE8NG NH\u1EACN KI\u1EC2M \u0110\u1ECANH",
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(CARS REGISTRATIONS)" }, void 0, !1, {
            fileName: "app/routes/_home.Inspections.$id.jsx",
            lineNumber: 34,
            columnNumber: 13
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "text-right sm:ml-10 hover:cursor-pointer", onClick: handlePrint, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faPrint }, void 0, !1, {
            fileName: "app/routes/_home.Inspections.$id.jsx",
            lineNumber: 38,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_home.Inspections.$id.jsx",
            lineNumber: 37,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_home.Inspections.$id.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/_home.Inspections.$id.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { ref: componentsRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(InspectionsForm, { data }, void 0, !1, {
        fileName: "app/routes/_home.Inspections.$id.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_home.Inspections.$id.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_home.Inspections.$id.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.Inspections.$id.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
async function loader10({ request: request2, params }) {
  return await getInspections(params, request2);
}

// app/routes/_home._main.expired.jsx
var home_main_expired_exports = {};
__export(home_main_expired_exports, {
  default: () => ExpiredSoon2,
  loader: () => loader11
});

// app/components/Dashboard/Expired.jsx
var import_flowbite_react12 = require("flowbite-react");
var import_react33 = require("@remix-run/react");
var import_react34 = require("react"), import_remix_utils8 = require("remix-utils"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function ExpiredTable() {
  let inspection = (0, import_react33.useLoaderData)().data.sort(function(a, b) {
    return new Date(a.registDate) - new Date(b.registDate);
  }), [filterList, setFilterList] = (0, import_react34.useState)(inspection), [searchInput, setSearchInput] = (0, import_react34.useState)(""), searchHandler = (e) => {
    e.key === "Enter" && setSearchInput(e.target.value);
  };
  return (0, import_react34.useEffect)(() => {
    var filteredList = inspection.filter(
      (dt) => dt.numberPlate.search(searchInput) === 0
    );
    setFilterList(filteredList);
  }, [searchInput]), /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(PageModal, { title: "This is the list of car have already expired", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pb-4 bg-white dark:bg-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("label", { for: "table-search", className: "sr-only", children: "Search" }, void 0, !1, {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "relative mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "svg",
          {
            class: "w-5 h-5 text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Dashboard/Expired.jsx",
                lineNumber: 43,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard/Expired.jsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Dashboard/Expired.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "input",
          {
            onKeyDown: searchHandler,
            type: "text",
            id: "table-search",
            className: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Search for NumberPlate"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard/Expired.jsx",
            lineNumber: 50,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/Expired.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_remix_utils8.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/components/Dashboard/Expired.jsx",
      lineNumber: 59,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table, { hoverable: !0, className: "overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.HeadCell, { children: "NumberPlate" }, void 0, !1, {
          fileName: "app/components/Dashboard/Expired.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.HeadCell, { children: "RegistDate" }, void 0, !1, {
          fileName: "app/components/Dashboard/Expired.jsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.HeadCell, { children: "ExpiredDate" }, void 0, !1, {
          fileName: "app/components/Dashboard/Expired.jsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.HeadCell, { children: "City" }, void 0, !1, {
          fileName: "app/components/Dashboard/Expired.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("span", { className: "sr-only", children: "View" }, void 0, !1, {
          fileName: "app/components/Dashboard/Expired.jsx",
          lineNumber: 68,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Dashboard/Expired.jsx",
          lineNumber: 67,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.Body, { className: "divide-y", children: filterList.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        import_flowbite_react12.Table.Row,
        {
          className: "bg-white dark:border-gray-700 dark:bg-gray-800",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: dt.numberPlate }, void 0, !1, {
              fileName: "app/components/Dashboard/Expired.jsx",
              lineNumber: 77,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.Cell, { children: formatDate(dt.registDate) }, void 0, !1, {
              fileName: "app/components/Dashboard/Expired.jsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.Cell, { children: formatDate(dt.expiredDate) }, void 0, !1, {
              fileName: "app/components/Dashboard/Expired.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.Cell, { children: dt.city }, void 0, !1, {
              fileName: "app/components/Dashboard/Expired.jsx",
              lineNumber: 82,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react12.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
              import_react33.Link,
              {
                className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500",
                to: `/car/${dt.numberPlate}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { children: "View" }, void 0, !1, {
                  fileName: "app/components/Dashboard/Expired.jsx",
                  lineNumber: 88,
                  columnNumber: 23
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Dashboard/Expired.jsx",
                lineNumber: 84,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Dashboard/Expired.jsx",
              lineNumber: 83,
              columnNumber: 19
            }, this)
          ]
        },
        dt.numberPlate,
        !0,
        {
          fileName: "app/components/Dashboard/Expired.jsx",
          lineNumber: 73,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/Expired.jsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Dashboard/Expired.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/Expired.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/_home._main.expired.jsx
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function ExpiredSoon2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(ExpiredTable, {}, void 0, !1, {
    fileName: "app/routes/_home._main.expired.jsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
async function loader11({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return redirect("/login");
  let url = "https://registrytotal.herokuapp.com/api/office/own/outdatecar", dataPass_1 = {
    status: "expired",
    city: "",
    info: "1"
  };
  return await (await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass_1)
  })).json();
}

// app/routes/_home.office._index.jsx
var home_office_index_exports = {};
__export(home_office_index_exports, {
  default: () => officeMain
});
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function officeMain() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, {}, void 0, !1, {
    fileName: "app/routes/_home.office._index.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/_home._main._index.jsx
var home_main_index_exports = {};
__export(home_main_index_exports, {
  default: () => Mainn
});
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function Mainn() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/routes/_home._main._index.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/_home.info._index.jsx
var home_info_index_exports = {};
__export(home_info_index_exports, {
  default: () => Infopage,
  meta: () => meta3
});

// app/components/About/OwnInfo.jsx
var import_react35 = require("@remix-run/react");
var import_react_fontawesome3 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons3 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function OwnInfo() {
  let info = (0, import_react35.useMatches)().find((match) => match.id === "routes/_home"), { name, SSN, dateOfBirth, phone } = info.data.data, formattedDate = formatDate(dateOfBirth), inspection = info.data.registed.sort(function(a, b) {
    return new Date(b.regisDate) - new Date(a.regisDate);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: " m-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("section", { className: "mx-0 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "max-w-7xl lg:pt-5 items-stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mx-5 max-w-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between md:space-x-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex items-center space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
            "img",
            {
              className: "h-16 w-16 lg:h-24 lg:w-24 rounded-full border border-white/10",
              src: ava_default,
              alt: "image"
            },
            void 0,
            !1,
            {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 24,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
            "span",
            {
              className: "absolute inset-0 rounded-full shadow-inner",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 29,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 23,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 22,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "pt-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h1", { className: "text-xl font-semibold", children: name }, void 0, !1, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 36,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "text-lg font-light text-black-500", children: [
            "Nh\xE2n vi\xEAn t\u1EA1i: ",
            info.data.workFor.name
          ] }, void 0, !0, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 37,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 35,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/About/OwnInfo.jsx",
        lineNumber: 21,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/About/OwnInfo.jsx",
        lineNumber: 20,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mt-24 text-md font-light dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react35.Link, { to: "edit", className: "flex flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { className: "mb-5 text-lg font-bold ", children: "Th\xF4ng tin c\xE1 nh\xE2n" }, void 0, !1, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 45,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { className: "ms-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faPencil }, void 0, !1, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 49,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 48,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 44,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("dl", { className: "max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Email address" }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 54,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("dd", { className: "text-lg font-semibold", children: info.data.email }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 57,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 53,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex flex-col py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Social Security Number" }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 61,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("dd", { className: "text-lg font-semibold", children: SSN }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 64,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 60,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Date of Birth" }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 67,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("dd", { className: "text-lg font-semibold", children: formattedDate }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 70,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 66,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex flex-col pt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Phone number" }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 73,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("dd", { className: "text-lg font-semibold", children: phone }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 76,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 72,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/About/OwnInfo.jsx",
        lineNumber: 43,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/About/OwnInfo.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/About/OwnInfo.jsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/About/OwnInfo.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/About/OwnInfo.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("section", { className: "ms-5 mt-10 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h3", { className: "text-lg font-semibold dark:text-green-300", children: "Inspections" }, void 0, !1, {
        fileName: "app/components/About/OwnInfo.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("ol", { className: "relative border-l border-gray-200 dark:border-gray-700", children: inspection.map((inspec) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("li", { className: "mb-10 ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react35.Link, { to: `/Inspections/${inspec.regisNum}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" }, void 0, !1, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 93,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("time", { className: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500", children: formatDate(inspec.regisDate) }, void 0, !1, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 94,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: [
          "M\xE3 s\u1ED1 \u0110\u0103ng ki\u1EC3m: ",
          inspec.regisNum
        ] }, void 0, !0, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 97,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "Bi\u1EC3n s\u1ED1 xe: ",
          inspec.car.numberPlate
        ] }, void 0, !0, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 100,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "T\u1EA1i: ",
          info.data.workFor.name
        ] }, void 0, !0, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 103,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/About/OwnInfo.jsx",
        lineNumber: 92,
        columnNumber: 15
      }, this) }, inspec._id, !1, {
        fileName: "app/components/About/OwnInfo.jsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/About/OwnInfo.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/About/OwnInfo.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/About/OwnInfo.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/_home.info._index.jsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function Infopage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(OwnInfo, {}, void 0, !1, {
    fileName: "app/routes/_home.info._index.jsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
function meta3({ matches }) {
  return [{ title: `${matches[1].data.data.name}` }];
}

// app/routes/_home.office_.$id.jsx
var home_office_id_exports = {};
__export(home_office_id_exports, {
  default: () => OfficeDetailPage,
  loader: () => loader12
});
var import_node8 = require("@remix-run/node");
var import_react43 = require("@remix-run/react");

// app/components/Office/UserTable.jsx
var import_react36 = require("@remix-run/react"), import_react37 = require("react"), import_react_to_print2 = require("react-to-print"), import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function ListOfStaff() {
  let list = (0, import_react36.useLoaderData)().staff.staff.sort((a, b) => a.email > b.email), TableRef = (0, import_react37.useRef)(), [filterList, setFilterList] = (0, import_react37.useState)(list), [searchInput, setSearchInput] = (0, import_react37.useState)(""), searchHandler = (e) => {
    e.key === "Enter" && setSearchInput(e.target.value);
  };
  (0, import_react37.useEffect)(() => {
    var filteredList = list.filter(
      (dt) => dt.data.name.indexOf(searchInput) !== -1
    );
    setFilterList(filteredList);
  }, [searchInput]);
  let handlePrint = (0, import_react_to_print2.useReactToPrint)({
    content: () => TableRef.current
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "items-center justify-between lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h2", { className: "mb-2 text-xl font-bold text-gray-900 dark:text-white", children: "All staff" }, void 0, !1, {
        fileName: "app/components/Office/UserTable.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "sm:flex mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "lg:pr-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("label", { htmlFor: "users-search", className: "sr-only", children: "Search" }, void 0, !1, {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 40,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "relative mt-1 lg:w-64 xl:w-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
            "input",
            {
              type: "text",
              name: "email",
              id: "users-search",
              className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
              placeholder: "Search for users",
              onKeyDown: searchHandler
            },
            void 0,
            !1,
            {
              fileName: "app/components/Office/UserTable.jsx",
              lineNumber: 44,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 43,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Office/UserTable.jsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Office/UserTable.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex items-center ml-auto space-x-2 sm:space-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
            import_react36.Link,
            {
              to: "addStaff",
              className: "inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
                  "svg",
                  {
                    className: "w-5 h-5 mr-2 -ml-1",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                        clipRule: "evenodd"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/Office/UserTable.jsx",
                        lineNumber: 66,
                        columnNumber: 17
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Office/UserTable.jsx",
                    lineNumber: 60,
                    columnNumber: 15
                  },
                  this
                ),
                "Add user"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Office/UserTable.jsx",
              lineNumber: 56,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
            "button",
            {
              onClick: handlePrint,
              className: "inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
                  "svg",
                  {
                    className: "w-5 h-5 mr-2 -ml-1",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",
                        clipRule: "evenodd"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/Office/UserTable.jsx",
                        lineNumber: 84,
                        columnNumber: 17
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Office/UserTable.jsx",
                    lineNumber: 78,
                    columnNumber: 15
                  },
                  this
                ),
                "Export"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Office/UserTable.jsx",
              lineNumber: 74,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Office/UserTable.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/UserTable.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/UserTable.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      "div",
      {
        className: "relative overflow-x-auto shadow-md sm:rounded-lg",
        ref: TableRef,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("style", { children: `"
  @page {
    size: A4 landscape;
  }
"` }, void 0, !1, {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 99,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Staff name" }, void 0, !1, {
                fileName: "app/components/Office/UserTable.jsx",
                lineNumber: 103,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Email" }, void 0, !1, {
                fileName: "app/components/Office/UserTable.jsx",
                lineNumber: 106,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "SSN" }, void 0, !1, {
                fileName: "app/components/Office/UserTable.jsx",
                lineNumber: 109,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Phone" }, void 0, !1, {
                fileName: "app/components/Office/UserTable.jsx",
                lineNumber: 112,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Action" }, void 0, !1, {
                fileName: "app/components/Office/UserTable.jsx",
                lineNumber: 115,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Office/UserTable.jsx",
              lineNumber: 102,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/Office/UserTable.jsx",
              lineNumber: 101,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("tbody", { children: filterList.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
              "tr",
              {
                className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
                    "th",
                    {
                      scope: "row",
                      className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                      children: dt.data.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Office/UserTable.jsx",
                      lineNumber: 126,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("td", { className: "px-6 py-4", children: dt.email }, void 0, !1, {
                    fileName: "app/components/Office/UserTable.jsx",
                    lineNumber: 132,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("td", { className: "px-6 py-4", children: dt.data.SSN }, void 0, !1, {
                    fileName: "app/components/Office/UserTable.jsx",
                    lineNumber: 133,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("td", { className: "px-6 py-4", children: dt.data.phone }, void 0, !1, {
                    fileName: "app/components/Office/UserTable.jsx",
                    lineNumber: 134,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("td", { className: "px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
                    import_react36.Link,
                    {
                      to: dt._id,
                      className: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
                      children: "View"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Office/UserTable.jsx",
                      lineNumber: 136,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/Office/UserTable.jsx",
                    lineNumber: 135,
                    columnNumber: 17
                  }, this)
                ]
              },
              dt._id,
              !0,
              {
                fileName: "app/components/Office/UserTable.jsx",
                lineNumber: 122,
                columnNumber: 15
              },
              this
            )) }, void 0, !1, {
              fileName: "app/components/Office/UserTable.jsx",
              lineNumber: 120,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 100,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Office/UserTable.jsx",
        lineNumber: 95,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Office/UserTable.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/components/Office/OfficeChart.jsx
var import_react38 = require("@remix-run/react"), import_remix_utils9 = require("remix-utils"), import_flowbite_react13 = require("flowbite-react"), import_react39 = require("react");
var import_Chart2 = __toESM(require_Chart()), import_react40 = require("@remix-run/react"), import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function OfficeChart(props) {
  let { Data2021, Data2022, Data2023 } = (0, import_react38.useLoaderData)(), [year, setYear] = (0, import_react39.useState)(2023), [chartdata, setChartData] = (0, import_react39.useState)(Data2023);
  (0, import_react39.useEffect)(() => {
    year === 2022 && setChartData(Data2022), year === 2021 && setChartData(Data2021), year === 2023 && setChartData(Data2023);
  }, [year]);
  let handleClick2023 = () => {
    setYear(2023);
  }, handleClick2022 = () => {
    setYear(2022);
  }, handleClick2021 = () => {
    setYear(2021);
  }, chartData = {
    options: {
      chart: {
        id: `Analysis For Registrations in ${year}`,
        animations: {
          enabled: !0,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: !0,
            delay: 150
          },
          dynamicAnimation: {
            enabled: !0,
            speed: 350
          }
        },
        toolbar: {
          show: !1
        }
      },
      xaxis: {
        categories: chartdata.data.map((ld) => ld.month),
        labels: {
          align: "center",
          style: {
            fontSize: "12px",
            colors: ["#FFFFFF"]
          }
        }
      },
      yaxis: {
        min: 0,
        forceNiceScale: !0,
        labels: {
          align: "center",
          style: {
            fontSize: "12px",
            colors: ["#FFFFFF"]
          }
        }
      },
      stroke: {
        curve: "smooth"
      },
      theme: {
        mode: "light",
        palette: "palette1",
        monochrome: {
          enabled: !0,
          color: "#255aee",
          shadeTo: "dark",
          shadeIntensity: 0.65
        }
      }
    },
    series: [
      {
        name: "New Registration",
        data: chartdata.data.map((ld) => ld.count)
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "items-center justify-between pb-4 border-b border-gray-200 sm:flex dark:border-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "w-full mb-4 sm:mb-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Total Registrations at:" }, void 0, !1, {
          fileName: "app/components/Office/OfficeChart.jsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white", children: props.office }, void 0, !1, {
          fileName: "app/components/Office/OfficeChart.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("p", { className: "flex items-center text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "In: ",
          year
        ] }, void 0, !0, {
          fileName: "app/components/Office/OfficeChart.jsx",
          lineNumber: 106,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/OfficeChart.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "w-full max-w-lg text-right dark:text-green-400 font-lg", children: [
        "T\u1ED5ng: ",
        chartdata.total
      ] }, void 0, !0, {
        fileName: "app/components/Office/OfficeChart.jsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/OfficeChart.jsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_remix_utils9.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/components/Office/OfficeChart.jsx",
      lineNumber: 115,
      columnNumber: 31
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_Chart2.default, { data: chartData }, void 0, !1, {
      fileName: "app/components/Office/OfficeChart.jsx",
      lineNumber: 116,
      columnNumber: 18
    }, this) }, void 0, !1, {
      fileName: "app/components/Office/OfficeChart.jsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Office/OfficeChart.jsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_flowbite_react13.Dropdown, { inline: !0, label: `${year}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_flowbite_react13.Dropdown.Item, { onClick: handleClick2023, children: "N\u0103m 2023" }, void 0, !1, {
          fileName: "app/components/Office/OfficeChart.jsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_flowbite_react13.Dropdown.Item, { onClick: handleClick2022, children: "N\u0103m 2022" }, void 0, !1, {
          fileName: "app/components/Office/OfficeChart.jsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_flowbite_react13.Dropdown.Item, { onClick: handleClick2021, children: "N\u0103m 2021" }, void 0, !1, {
          fileName: "app/components/Office/OfficeChart.jsx",
          lineNumber: 124,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/OfficeChart.jsx",
        lineNumber: 121,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Office/OfficeChart.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      year === 2023 && /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "flex-shrink-0 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react40.Link, { className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700", children: [
        "Full Report",
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          "svg",
          {
            className: "w-4 h-4 ml-1",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "https://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M9 5l7 7-7 7"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Office/OfficeChart.jsx",
                lineNumber: 138,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Office/OfficeChart.jsx",
            lineNumber: 131,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Office/OfficeChart.jsx",
        lineNumber: 129,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Office/OfficeChart.jsx",
        lineNumber: 128,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/OfficeChart.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Office/OfficeChart.jsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}

// app/components/Office/OfficeExpired.jsx
var import_react41 = require("@remix-run/react"), import_flowbite_react14 = require("flowbite-react"), import_react42 = require("@remix-run/react"), import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function OfficeExpired() {
  let expired = (0, import_react41.useLoaderData)().expired;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_jsx_dev_runtime43.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
          import_flowbite_react14.Tooltip,
          {
            style: "light",
            placement: "right",
            animation: "duration-500",
            content: "Number of cars will be expired in less than 30 days",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Expired soon Registration:" }, void 0, !1, {
              fileName: "app/components/Office/OfficeExpired.jsx",
              lineNumber: 16,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Office/OfficeExpired.jsx",
            lineNumber: 10,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-green-500", children: expired.data.soon }, void 0, !1, {
          fileName: "app/components/Office/OfficeExpired.jsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/OfficeExpired.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full dark:text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
        import_react42.Link,
        {
          prefetch: "render",
          to: "expiredsoon",
          className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
          children: [
            "View Full List Of Cars",
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Office/OfficeExpired.jsx",
                    lineNumber: 38,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Office/OfficeExpired.jsx",
                lineNumber: 31,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Office/OfficeExpired.jsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Office/OfficeExpired.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/OfficeExpired.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
          import_flowbite_react14.Tooltip,
          {
            style: "light",
            placement: "right",
            animation: "duration-500",
            content: "Number of cars will be expired in less than 30 days",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Expired Registration:" }, void 0, !1, {
              fileName: "app/components/Office/OfficeExpired.jsx",
              lineNumber: 56,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Office/OfficeExpired.jsx",
            lineNumber: 50,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-green-500", children: expired.data.expired }, void 0, !1, {
          fileName: "app/components/Office/OfficeExpired.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/OfficeExpired.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full dark:text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
        import_react42.Link,
        {
          prefetch: "render",
          to: "expired",
          className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
          children: [
            "View Full List Of Cars",
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Office/OfficeExpired.jsx",
                    lineNumber: 78,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Office/OfficeExpired.jsx",
                lineNumber: 71,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Office/OfficeExpired.jsx",
          lineNumber: 65,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Office/OfficeExpired.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/OfficeExpired.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Office/OfficeExpired.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office_.$id.jsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function OfficeDetailPage() {
  let data = (0, import_react43.useLoaderData)(), officeName = (0, import_react43.useLoaderData)().staff.name;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_jsx_dev_runtime44.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 max-h-3/5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(OfficeChart, { office: officeName }, void 0, !1, {
      fileName: "app/routes/_home.office_.$id.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.office_.$id.jsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.office_.$id.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.office_.$id.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-4 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(OfficeExpired, {}, void 0, !1, {
      fileName: "app/routes/_home.office_.$id.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.office_.$id.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "px-4 pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(ListOfStaff, {}, void 0, !1, {
      fileName: "app/routes/_home.office_.$id.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.office_.$id.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react43.Outlet, { context: data }, void 0, !1, {
      fileName: "app/routes/_home.office_.$id.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.office_.$id.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
async function loader12({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node8.redirect)("/login");
  let url = "https://registrytotal.herokuapp.com/api/office/" + params.id + "/car", data2023 = {
    time: "2023",
    city: ""
  }, data2022 = {
    time: "2022",
    city: ""
  }, data2021 = {
    time: "2021",
    city: ""
  }, expired = {
    status: "soon",
    city: "",
    info: "0"
  }, responseStaff = await fetch(
    "https://registrytotal.herokuapp.com/api/office/" + params.id,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ), response2023 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data2023)
  }), response2022 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data2022)
  }), response2021 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data2021)
  }), resExpired = await fetch(
    "https://registrytotal.herokuapp.com/api/office/" + params.id + "/outdatecar",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(expired)
    }
  ), staff = await responseStaff.json();
  console.log(staff);
  let resdata2023 = await response2023.json(), resdata2022 = await response2022.json(), resdata2021 = await response2021.json(), expiredRes = await resExpired.json();
  return console.log(expiredRes), (0, import_node8.json)({
    staff: staff[0],
    Data2023: resdata2023,
    Data2022: resdata2022,
    Data2021: resdata2021,
    expired: expiredRes
  });
}

// app/routes/_home.car._index.jsx
var home_car_index_exports = {};
__export(home_car_index_exports, {
  action: () => action5,
  default: () => CarIndex,
  loader: () => loader13
});
var import_node9 = require("@remix-run/node"), import_searchCarModal = __toESM(require_searchCarModal());

// app/components/CarPage/CarPageDefault.jsx
var import_react44 = require("@remix-run/react"), import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function CarPageDefault() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react44.Form, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "1" }, void 0, !1, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 9,
          columnNumber: 13
        }, this),
        "CH\u1EE6 S\u1EDE H\u1EEEU",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(OWNER)" }, void 0, !1, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 13,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPageDefault.jsx",
        lineNumber: 8,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/CarPage/CarPageDefault.jsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "text",
              name: "OwnerName",
              id: "OwnerName",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 18,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "OwnerName",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 tranform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Hoj v\xE0 t\xEAn (Name):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 26,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "datetime",
              name: "DOB",
              id: "DOB",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 34,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "DOB",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Ng\xE0y Sinh (mm-dd-yyyy):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 42,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPageDefault.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "number",
              name: "SSN",
              id: "SSN",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 52,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "carNumberPlate",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "C\u0103n c\u01B0\u1EDBc c\xF4ng d\xE2n (Social Security Number):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 60,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "email",
              name: "Email",
              id: "Email",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 68,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "Email",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Email:"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 76,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "number",
              name: "Phone",
              id: "Phone",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 84,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "Phone",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "\u0110i\u1EC7n tho\u1EA1i c\xE1 nh\xE2n (Phone) :"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 92,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPageDefault.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CarPage/CarPageDefault.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "2" }, void 0, !1, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        "PH\u01AF\u01A0NG TI\u1EC6N",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(VEHICLE)" }, void 0, !1, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPageDefault.jsx",
        lineNumber: 103,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/CarPage/CarPageDefault.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "text",
              name: "carNumberplate",
              id: "carNumberPlate",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 113,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "carNumberPlate",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Bi\u1EC3n \u0111\u0103ng k\xFD (Registration Number):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 121,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "text",
              name: "Type",
              id: "Type",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 129,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "Type",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Lo\u1EA1i ph\u01B0\u01A1ng ti\u1EC7n (Type):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 137,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "text",
              name: "Mark",
              id: "Mark",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 145,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "Mark",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Nh\xE3n hi\u1EC7u (Mark):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 153,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 144,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPageDefault.jsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "text",
              name: "ModelCode",
              id: "ModelCode",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 163,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "ModelCode",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "S\u1ED1 Lo\u1EA1i (Model Code):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 171,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "text",
              name: "EngineNumber",
              id: "EngineNumber",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 179,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "EngineNumber",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "S\u1ED1 m\xE1y (Engine Number):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 187,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 178,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPageDefault.jsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "input",
            {
              type: "text",
              name: "ChassisNumber",
              id: "ChassisNumber",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 197,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "label",
            {
              htmlFor: "ChassisNumber",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "S\u1ED1 khung (Chassis Number):"
            },
            void 0,
            !1,
            {
              fileName: "app/components/CarPage/CarPageDefault.jsx",
              lineNumber: 205,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 196,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "input",
              {
                type: "text",
                name: "ManufacturedYear",
                id: "ManufacturedYear",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPageDefault.jsx",
                lineNumber: 214,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "label",
              {
                htmlFor: "ManufacturedYear",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "N\u0103m s\u1EA3n xu\u1EA5t:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPageDefault.jsx",
                lineNumber: 222,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPageDefault.jsx",
            lineNumber: 213,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "input",
              {
                type: "text",
                name: "ManufacturedCountry",
                id: "ManufacturedCountry",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPageDefault.jsx",
                lineNumber: 230,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "label",
              {
                htmlFor: "ManufacturedCountry",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "N\u01A1i s\u1EA3n xu\u1EA5t:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPageDefault.jsx",
                lineNumber: 238,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPageDefault.jsx",
            lineNumber: 229,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 212,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "input",
              {
                type: "text",
                name: "BoughtPlace",
                id: "BoughtPlace",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPageDefault.jsx",
                lineNumber: 248,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "label",
              {
                htmlFor: "BoughtPlace",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "Mua t\u1EA1i (Bought Place):"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPageDefault.jsx",
                lineNumber: 256,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPageDefault.jsx",
            lineNumber: 247,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "input",
              {
                type: "text",
                name: "ManufacturedCountry",
                id: "ManufacturedCountry",
                className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                placeholder: " ",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPageDefault.jsx",
                lineNumber: 264,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "label",
              {
                htmlFor: "ManufacturedCountry",
                className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                children: "N\u01A1i s\u1EA3n xu\u1EA5t:"
              },
              void 0,
              !1,
              {
                fileName: "app/components/CarPage/CarPageDefault.jsx",
                lineNumber: 272,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/CarPage/CarPageDefault.jsx",
            lineNumber: 263,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 246,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CarPage/CarPageDefault.jsx",
        lineNumber: 195,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CarPage/CarPageDefault.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CarPage/CarPageDefault.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_home.car._index.jsx
var import_remix_utils10 = require("remix-utils");
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function CarIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_jsx_dev_runtime46.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_remix_utils10.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/routes/_home.car._index.jsx",
      lineNumber: 11,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_searchCarModal.default, {}, void 0, !1, {
      fileName: "app/routes/_home.car._index.jsx",
      lineNumber: 11,
      columnNumber: 49
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.car._index.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(CarPageDefault, {}, void 0, !1, {
      fileName: "app/routes/_home.car._index.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.car._index.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
async function loader13({ request: request2 }) {
  return requireUserSession(request2) ? null : (0, import_node9.redirect)("/login");
}
async function action5({ request: request2 }) {
  let numberPlate = (await request2.formData()).get("NumberPlate");
  try {
    return await findCarbyNumberPlate(request2, numberPlate);
  } catch (error) {
    return (0, import_node9.json)({ message: error.message });
  }
}

// app/routes/_home.office.add.jsx
var home_office_add_exports = {};
__export(home_office_add_exports, {
  action: () => action6,
  default: () => AddOfficePage,
  loader: () => loader14
});

// app/components/AddOfficeForm.jsx
var import_react45 = require("@remix-run/react");
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function AddOfficeForm() {
  let option = province_default.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: a.name, children: a.name }, a.codename, !1, {
    fileName: "app/components/AddOfficeForm.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this)), error = (0, import_react45.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: [
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("h3", { className: "text-red-500 text-md bold text-center mb-5", children: [
      error.message,
      ", please try again"
    ] }, void 0, !0, {
      fileName: "app/components/AddOfficeForm.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react45.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          "input",
          {
            type: "text",
            name: "OfficeName",
            id: "OfficeName",
            className: "block py-2.5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text- dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/AddOfficeForm.jsx",
            lineNumber: 20,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          "label",
          {
            htmlFor: "OfficeName",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: [
              "Office Name:",
              " "
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/AddOfficeForm.jsx",
            lineNumber: 28,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddOfficeForm.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          "label",
          {
            htmlFor: "city",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Province:"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AddOfficeForm.jsx",
            lineNumber: 36,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          "select",
          {
            name: "city",
            id: "city",
            className: "block py-2.5 px-0 w-3/4 text-sm text-gray-900 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
            children: option
          },
          void 0,
          !1,
          {
            fileName: "app/components/AddOfficeForm.jsx",
            lineNumber: 42,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddOfficeForm.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          "input",
          {
            type: "text",
            name: "Address",
            id: "Address",
            className: "block py-2.5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/AddOfficeForm.jsx",
            lineNumber: 51,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          "label",
          {
            htmlFor: "Address",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: [
              "Address:",
              " "
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/AddOfficeForm.jsx",
            lineNumber: 59,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddOfficeForm.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          "input",
          {
            type: "text",
            name: "Hotline",
            id: "Hotline",
            className: "block py-2.5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/AddOfficeForm.jsx",
            lineNumber: 67,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          "label",
          {
            htmlFor: "Hotline",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: [
              "Hotline:",
              " "
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/AddOfficeForm.jsx",
            lineNumber: 75,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddOfficeForm.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          "input",
          {
            type: "email",
            name: "Hotmail",
            id: "Hotmail",
            className: "block py-2.5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/AddOfficeForm.jsx",
            lineNumber: 83,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          "label",
          {
            htmlFor: "Hotmail",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "HotMail:"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AddOfficeForm.jsx",
            lineNumber: 91,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddOfficeForm.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("button", { className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-3/4 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "Submit" }, void 0, !1, {
        fileName: "app/components/AddOfficeForm.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AddOfficeForm.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AddOfficeForm.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office.add.jsx
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function AddOfficePage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(PageModal, { title: "Enter new office information", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(AddOfficeForm, {}, void 0, !1, {
    fileName: "app/routes/_home.office.add.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_home.office.add.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
async function loader14({ request: request2 }) {
  try {
    return await adminCheck(request2);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
async function action6({ request: request2 }) {
  let formData = await request2.formData(), fetchData = {
    name: formData.get("OfficeName"),
    address: formData.get("Address"),
    hotline: formData.get("Hotline"),
    hotmail: formData.get("Hotmail"),
    city: formData.get("city")
  };
  try {
    return await addOffice(request2, fetchData);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

// app/routes/_home.info.edit.jsx
var home_info_edit_exports = {};
__export(home_info_edit_exports, {
  action: () => action7,
  default: () => InfoEditpage
});
var import_react46 = require("@remix-run/react");
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function InfoEditpage() {
  let info = (0, import_react46.useMatches)().find((match) => match.id === "routes/_home").data, { name, SSN, dateOfBirth, phone } = info.data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react46.Form, { className: "dark", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "grid gap-6 mb-6 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "label",
          {
            htmlFor: "name",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Name"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 18,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "input",
          {
            type: "text",
            name: "name",
            id: "name",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Name",
            required: !0,
            defaultValue: name
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 24,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "label",
          {
            htmlFor: "SSN",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Social Security Number"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 35,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "input",
          {
            type: "text",
            name: "SSN",
            id: "SSN",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Doe",
            required: !0,
            defaultValue: SSN,
            readOnly: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 41,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "label",
          {
            htmlFor: "dob",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Date Of Birth(dd-mm-yyyy)"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 53,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "input",
          {
            type: "text",
            name: "dob",
            id: "dob",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "dd/mm/yyyy",
            required: !0,
            defaultValue: formatDate(dateOfBirth)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 59,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "label",
          {
            htmlFor: "work",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Works"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 70,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "input",
          {
            type: "text",
            id: "work",
            name: "work",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "",
            defaultValue: info.workFor.name,
            required: !0,
            readOnly: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 76,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "label",
          {
            htmlFor: "phone",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Phone"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 88,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "input",
          {
            type: "text",
            id: "phone",
            name: "phone",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            required: !0,
            defaultValue: phone
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 94,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "label",
          {
            htmlFor: "email",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Email"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 104,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "example@gmail.com",
            defaultValue: info.email,
            readOnly: !0,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 110,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_home.info.edit.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
      "button",
      {
        formMethod: "put",
        className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2",
        children: "Save"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 122,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_home.info.edit.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
async function action7({ request: request2 }) {
  let formData = await request2.formData(), data = {
    email: formData.get("email"),
    name: formData.get("name"),
    dob: reFormatDate(formData.get("dob")),
    ssn: formData.get("SSN"),
    phone: formData.get("phone")
  };
  return await EditInfo(request2, data);
}

// server-entry-module:@remix-run/dev/server-build
var route24 = __toESM(require_forgotpassword());

// app/routes/_home.office.jsx
var home_office_exports = {};
__export(home_office_exports, {
  default: () => OfficePage,
  loader: () => loader15
});
var import_react49 = require("@remix-run/react");

// app/components/Office/OfficeList.jsx
var import_react47 = require("@remix-run/react"), import_react48 = require("react"), import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function OfficeList() {
  let office = (0, import_react47.useLoaderData)().data.sort(function(a, b) {
    return b.name - a.name;
  }), [filterList, setFilterList] = (0, import_react48.useState)(office), [searchInput, setSearchInput] = (0, import_react48.useState)(""), searchHandler = (e) => {
    e.key === "Enter" && setSearchInput(e.target.value);
  };
  (0, import_react48.useEffect)(() => {
    var filteredList = office.filter(
      (dt) => dt.name.indexOf(searchInput) !== -1
    );
    setFilterList(filteredList);
  }, [searchInput]);
  let content = filterList.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
    "tr",
    {
      className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
        "th",
        {
          scope: "row",
          className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_react47.Link, { to: dt._id, children: [
            dt.name,
            " "
          ] }, void 0, !0, {
            fileName: "app/components/Office/OfficeList.jsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Office/OfficeList.jsx",
          lineNumber: 27,
          columnNumber: 7
        },
        this
      )
    },
    dt._id,
    !1,
    {
      fileName: "app/components/Office/OfficeList.jsx",
      lineNumber: 23,
      columnNumber: 5
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_jsx_dev_runtime50.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h2", { className: "dark:text-white mt-5 text-xl font-semibold", children: "All Office" }, void 0, !1, {
      fileName: "app/components/Office/OfficeList.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "sm:flex mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "lg:pr-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("label", { htmlFor: "users-search", className: "sr-only", children: "Search" }, void 0, !1, {
          fileName: "app/components/Office/OfficeList.jsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "relative mt-1 lg:w-64 xl:w-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          "input",
          {
            type: "text",
            name: "email",
            id: "users-search",
            className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
            placeholder: "Search for office",
            onKeyDown: searchHandler
          },
          void 0,
          !1,
          {
            fileName: "app/components/Office/OfficeList.jsx",
            lineNumber: 45,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Office/OfficeList.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/OfficeList.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Office/OfficeList.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "flex items-center ml-auto space-x-2 sm:space-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
        import_react47.Link,
        {
          to: "/office/add",
          className: "inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
              "svg",
              {
                className: "w-5 h-5 mr-2 -ml-1",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                    clipRule: "evenodd"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Office/OfficeList.jsx",
                    lineNumber: 67,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Office/OfficeList.jsx",
                lineNumber: 61,
                columnNumber: 13
              },
              this
            ),
            "Add Office"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Office/OfficeList.jsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Office/OfficeList.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/OfficeList.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Office Name" }, void 0, !1, {
        fileName: "app/components/Office/OfficeList.jsx",
        lineNumber: 81,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Office/OfficeList.jsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Office/OfficeList.jsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("tbody", { children: content }, void 0, !1, {
        fileName: "app/components/Office/OfficeList.jsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/OfficeList.jsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Office/OfficeList.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Office/OfficeList.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office.jsx
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function OfficePage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_jsx_dev_runtime51.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(OfficeList, {}, void 0, !1, {
      fileName: "app/routes/_home.office.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react49.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_home.office.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.office.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
async function loader15({ request: request2 }) {
  try {
    let data = await adminCheck(request2);
    return await getAllOffice(request2);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

// app/routes/_home.search.jsx
var home_search_exports = {};
__export(home_search_exports, {
  default: () => SearchPage
});
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
function SearchPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { children: "This is for searching" }, void 0, !1, {
    fileName: "app/routes/_home.search.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/_home._main.jsx
var home_main_exports = {};
__export(home_main_exports, {
  default: () => MainPage,
  loader: () => loader16,
  meta: () => meta4
});
var import_node10 = require("@remix-run/node");

// app/components/Dashboard/ChartSection.jsx
var import_remix_utils11 = require("remix-utils");
var import_Chart3 = __toESM(require_Chart()), import_react50 = require("@remix-run/react"), import_flowbite_react15 = require("flowbite-react"), import_react51 = require("react"), import_jsx_dev_runtime53 = require("react/jsx-dev-runtime");
function ChartPanel() {
  let { Datain2023, Datain2022, Datain2021 } = (0, import_react50.useLoaderData)(), [year, setYear] = (0, import_react51.useState)(2023), [chartdata, setChartData] = (0, import_react51.useState)(Datain2023);
  (0, import_react51.useEffect)(() => {
    year === 2022 && setChartData(Datain2022), year === 2021 && setChartData(Datain2021), year === 2023 && setChartData(Datain2023);
  }, [year]), console.log(Datain2022);
  let handleClick2023 = () => {
    setYear(2023);
  }, handleClick2022 = () => {
    setYear(2022);
  }, handleClick2021 = () => {
    setYear(2021);
  }, data = {
    options: {
      chart: {
        id: `Analysis For Registrations in ${year}`,
        animations: {
          enabled: !0,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: !0,
            delay: 150
          },
          dynamicAnimation: {
            enabled: !0,
            speed: 350
          }
        },
        toolbar: {
          show: !1
        }
      },
      xaxis: {
        categories: chartdata.data.map((ld) => ld.month),
        labels: {
          align: "center",
          style: {
            fontSize: "12px",
            colors: ["#FFFFFF"]
          }
        }
      },
      yaxis: {
        min: 0,
        forceNiceScale: !0,
        labels: {
          align: "center",
          style: {
            fontSize: "12px",
            colors: ["#FFFFFF"]
          }
        }
      },
      stroke: {
        curve: "smooth"
      },
      theme: {
        mode: "light",
        palette: "palette1",
        monochrome: {
          enabled: !0,
          color: "#255aee",
          shadeTo: "dark",
          shadeIntensity: 0.65
        }
      }
    },
    series: [
      {
        name: "New Registration",
        data: chartdata.data.map((ld) => ld.count)
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "p-4 bg-white border dark:bg-gray-800 sm:p-6 dark:border-gray-700 shadow-sm rounded-lg border-gray-200 mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex-shrink-0 dark:text-white text-xl font-bold leading-none", children: [
        "T\u1ED5ng s\u1ED1 \u0111\u0103ng ki\u1EC3m n\u0103m : ",
        year
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/ChartSection.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400", children: [
        "T\u1ED5ng: ",
        chartdata.total
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/ChartSection.jsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/ChartSection.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "main-chart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_remix_utils11.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/components/Dashboard/ChartSection.jsx",
      lineNumber: 110,
      columnNumber: 31
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_Chart3.default, { data }, void 0, !1, {
      fileName: "app/components/Dashboard/ChartSection.jsx",
      lineNumber: 111,
      columnNumber: 18
    }, this) }, void 0, !1, {
      fileName: "app/components/Dashboard/ChartSection.jsx",
      lineNumber: 110,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Dashboard/ChartSection.jsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex items-center justify-between pt-3 mt-2 border-t border-gray-200 dark:border-gray-700 sm:pt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_flowbite_react15.Dropdown, { inline: !0, label: `${year}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_flowbite_react15.Dropdown.Item, { onClick: handleClick2023, children: "N\u0103m 2023" }, void 0, !1, {
          fileName: "app/components/Dashboard/ChartSection.jsx",
          lineNumber: 117,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_flowbite_react15.Dropdown.Item, { onClick: handleClick2022, children: "N\u0103m 2022" }, void 0, !1, {
          fileName: "app/components/Dashboard/ChartSection.jsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_flowbite_react15.Dropdown.Item, { onClick: handleClick2021, children: "N\u0103m 2021" }, void 0, !1, {
          fileName: "app/components/Dashboard/ChartSection.jsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/ChartSection.jsx",
        lineNumber: 116,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Dashboard/ChartSection.jsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      year === 2023 && /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex-shrink-0 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_react50.Link, { className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700", children: [
        "Full Report",
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
          "svg",
          {
            className: "w-4 h-4 ml-1",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "https://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M9 5l7 7-7 7"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Dashboard/ChartSection.jsx",
                lineNumber: 133,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard/ChartSection.jsx",
            lineNumber: 126,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/ChartSection.jsx",
        lineNumber: 124,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Dashboard/ChartSection.jsx",
        lineNumber: 123,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/ChartSection.jsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/ChartSection.jsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/components/Dashboard/RecentRegisPanel.jsx
var import_react52 = require("@remix-run/react");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime");
function RecentRegistrations() {
  let lists = (0, import_react52.useLoaderData)().recentList;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
    "div",
    {
      className: "p-4 bg-white border dark:bg-gray-800 xl:p-6 dark:border-gray-700  shadow-sm rounded-lg border-gray-200 overflow-y-auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("h3", { className: "flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white", children: "Recent Registrations" }, void 0, !1, {
          fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
          lineNumber: 9,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
          "ul",
          {
            className: "text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-blue-400",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("li", { className: "w-full inline-block p-5 rounded-tl-lg bg-gray-50 hover:bg-gray-100 dark:border-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600", children: "Registrations" }, void 0, !1, {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 16,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("li", { className: "w-full inline-block p-5 rounded-tr-lg bg-gray-50 hover:bg-gray-100 dark:border-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600", children: "Date" }, void 0, !1, {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 19,
                columnNumber: 9
              }, this)
            ]
          },
          "list_tr",
          !0,
          {
            fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
            lineNumber: 12,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
          "ul",
          {
            className: "divine-y divide-gray-200 dark:divide-gray-700 ",
            children: lists.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("li", { className: "py-3 sm:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react52.Link, { to: `/Inspections/${item.regisNum}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "ml-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "font-medium text-grey-900 truncate dark: text-white", children: item.car.numberPlate }, void 0, !1, {
                  fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                  lineNumber: 34,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center justify-end flex-1 text-sm text-green-500 dark: text-green-400", children: item.regisNum }, void 0, !1, {
                  fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                  lineNumber: 37,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 33,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 32,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: formatDate(item.regisDate) }, void 0, !1, {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 42,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
              lineNumber: 31,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
              lineNumber: 30,
              columnNumber: 15
            }, this) }, item._id, !1, {
              fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
              lineNumber: 29,
              columnNumber: 13
            }, this))
          },
          "list",
          !1,
          {
            fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
            lineNumber: 24,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
          lineNumber: 23,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center justify-between pt-3 mt-2 border-t border-gray-200 dark:border-gray-700 sm:pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "inline-flex p-2" }, void 0, !1, {
            fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex-shrink-0 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react52.Link, { className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700", children: [
            "Full Report",
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                    lineNumber: 63,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 56,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
            lineNumber: 54,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
            lineNumber: 53,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
          lineNumber: 51,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
      lineNumber: 6,
      columnNumber: 5
    },
    this
  );
}

// app/components/Dashboard/DashBoardFooter.jsx
var import_react53 = require("@remix-run/react"), import_flowbite_react16 = require("flowbite-react"), import_jsx_dev_runtime55 = require("react/jsx-dev-runtime");
function DashBoardFooter() {
  let expired = (0, import_react53.useLoaderData)().ExpiredData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_jsx_dev_runtime55.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
          import_flowbite_react16.Tooltip,
          {
            style: "light",
            placement: "right",
            animation: "duration-500",
            content: "Number of cars will be expired in less than 30 days",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Expired soon Registration:" }, void 0, !1, {
              fileName: "app/components/Dashboard/DashBoardFooter.jsx",
              lineNumber: 15,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard/DashBoardFooter.jsx",
            lineNumber: 9,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-green-500", children: expired.data.soon }, void 0, !1, {
          fileName: "app/components/Dashboard/DashBoardFooter.jsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/DashBoardFooter.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "w-full dark:text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
        import_react53.Link,
        {
          prefetch: "render",
          to: "expiredsoon",
          className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
          children: [
            "View Full List Of Cars",
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dashboard/DashBoardFooter.jsx",
                    lineNumber: 38,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Dashboard/DashBoardFooter.jsx",
                lineNumber: 31,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Dashboard/DashBoardFooter.jsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Dashboard/DashBoardFooter.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/DashBoardFooter.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
          import_flowbite_react16.Tooltip,
          {
            style: "light",
            placement: "right",
            animation: "duration-500",
            content: "Number of cars have already expired and need to regis again",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Expired Registration:" }, void 0, !1, {
              fileName: "app/components/Dashboard/DashBoardFooter.jsx",
              lineNumber: 56,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard/DashBoardFooter.jsx",
            lineNumber: 50,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-green-500", children: expired.data.expired }, void 0, !1, {
          fileName: "app/components/Dashboard/DashBoardFooter.jsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/DashBoardFooter.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "w-full dark:text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
        import_react53.Link,
        {
          prefetch: "render",
          to: "expired",
          className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
          children: [
            "View Full List Of Cars",
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Dashboard/DashBoardFooter.jsx",
                    lineNumber: 79,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Dashboard/DashBoardFooter.jsx",
                lineNumber: 72,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Dashboard/DashBoardFooter.jsx",
          lineNumber: 66,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Dashboard/DashBoardFooter.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/DashBoardFooter.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/DashBoardFooter.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/_home._main.jsx
var import_react54 = require("@remix-run/react"), import_jsx_dev_runtime56 = require("react/jsx-dev-runtime"), meta4 = () => [{ title: "VietNam Registry" }];
function MainPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "px-4 pt-6 overflow-y-auto mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "grid grid-cols-2 xl:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(ChartPanel, {}, void 0, !1, {
          fileName: "app/routes/_home._main.jsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(DashBoardFooter, {}, void 0, !1, {
          fileName: "app/routes/_home._main.jsx",
          lineNumber: 17,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_home._main.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "w-full col-span-2 xl:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(RecentRegistrations, {}, void 0, !1, {
        fileName: "app/routes/_home._main.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_home._main.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_home._main.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react54.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_home._main.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home._main.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
async function loader16({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node10.redirect)("/login");
  let url = "https://registrytotal.herokuapp.com/api/office/own/car", dataPass = {
    time: "2023",
    city: ""
  }, data2022 = {
    time: "2022",
    city: ""
  }, data2021 = {
    time: "2021",
    city: ""
  }, url_2 = "https://registrytotal.herokuapp.com/api/office/own/outdatecar", dataPass_1 = {
    status: "soon",
    city: "",
    info: "0"
  }, response2023 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass)
  }), response2022 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data2022)
  }), response2021 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data2021)
  }), response_2 = await fetch(
    "https://registrytotal.herokuapp.com/api/office/recentregis",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  ), response_3 = await fetch(url_2, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass_1)
  }), resData = await response2023.json(), resData2022 = await response2022.json(), resData2021 = await response2021.json(), resData2 = await response_2.json(), resData3 = await response_3.json();
  return (0, import_node10.json)({
    Datain2023: resData,
    Datain2022: resData2022,
    Datain2021: resData2021,
    recentList: resData2,
    ExpiredData: resData3
  });
}

// app/routes/forgot-pass.jsx
var forgot_pass_exports = {};
__export(forgot_pass_exports, {
  default: () => forgotPassWordPage
});

// app/components/UI/ForgotPassword.jsx
var import_react55 = require("@remix-run/react");

// app/images/logo.png
var logo_default = "/build/_assets/logo-D52X7V2X.png";

// app/components/UI/ForgotPassword.jsx
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime");
function ForgotPass() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
      import_react55.Link,
      {
        to: "/login",
        className: "flex items-center text-2xl font-semibold text-gray-900 dark:text-white justify-center mb-6",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("img", { className: "w-1/3", src: logo_default, alt: "logo" }, void 0, !1, {
          fileName: "app/components/UI/ForgotPassword.jsx",
          lineNumber: 11,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/ForgotPassword.jsx",
        lineNumber: 7,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "w-full p-6 sm:p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("h2", { className: "mb-3 text-2xl font-bold text-gray-900 dark:text-white", children: "Forgot your password?" }, void 0, !1, {
        fileName: "app/components/UI/ForgotPassword.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("p", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Don't afraid! Just type in your email and we will send you a code to reset your password!" }, void 0, !1, {
        fileName: "app/components/UI/ForgotPassword.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_react55.Form, { className: "mt-8 space-y-6", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Your email"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/ForgotPassword.jsx",
              lineNumber: 24,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
            "input",
            {
              type: "email",
              name: "email",
              id: "email",
              className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
              placeholder: "name@gmail.com",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/ForgotPassword.jsx",
              lineNumber: 30,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/ForgotPassword.jsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("button", { className: "w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Reset password" }, void 0, !1, {
          fileName: "app/components/UI/ForgotPassword.jsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/ForgotPassword.jsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/ForgotPassword.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/ForgotPassword.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/ForgotPassword.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/forgot-pass.jsx
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime");
function forgotPassWordPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(ForgotPass, {}, void 0, !1, {
    fileName: "app/routes/forgot-pass.jsx",
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

// app/routes/changepass.jsx
var changepass_exports = {};
__export(changepass_exports, {
  action: () => action8,
  default: () => changepassword,
  loader: () => loader17,
  meta: () => meta5
});
var import_react56 = require("@remix-run/react"), import_node11 = require("@remix-run/node");
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime");
function meta5() {
  return [{ title: "Change Password" }];
}
function changepassword() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("section", { class: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { class: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { class: "w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("h2", { class: "mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Change Password" }, void 0, !1, {
      fileName: "app/routes/changepass.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_react56.Form, { class: "mt-1 space-y-4 lg:mt-5 md:space-y-5", method: "patch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("label", { for: "old-password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Old Password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 17,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("input", { type: "password", name: "old-password", id: "email", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "name@company.com", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 18,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 16,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("label", { for: "password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "New Password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 21,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("input", { type: "password", name: "password", id: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 22,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 20,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("label", { for: "confirm-password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Confirm password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 25,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("input", { type: "confirm-password", name: "confirm-password", id: "confirm-password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 26,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("button", { class: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Reset passwod" }, void 0, !1, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 28,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/changepass.jsx",
      lineNumber: 15,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/changepass.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/changepass.jsx",
    lineNumber: 10,
    columnNumber: 3
  }, this) }, void 0, !1, {
    fileName: "app/routes/changepass.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
async function loader17({ request: request2 }) {
  let token = await requireUserSession(request2);
  return token || (0, import_node11.redirect)("/login");
}
async function action8({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node11.redirect)("/login");
  let formData = await request2.formData(), data = {
    passwordCurrent: formData.get("old-password"),
    password: formData.get("password"),
    passwordConfirm: formData.get("confirm-password")
  };
  console.log(data);
  try {
    let resData = await (await fetch(
      "https://sleepy-coast-93816.herokuapp.com/api/v1/users/updatePassword",
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      }
    )).json();
    return console.log(resData), resData.status !== "success" ? (console.log("deo thanh cong"), new Error("Invalid change")) : (0, import_node11.redirect)("/main");
  } catch (error) {
    if (error.status === 401)
      return error;
  }
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action9,
  loader: () => loader18
});
var import_node12 = require("@remix-run/node");
async function action9({ request: request2 }) {
  if (request2.method !== "POST")
    throw (0, import_node12.json)({ message: "Invalid request method" }, { status: 400 });
  return await destroyUserSession(request2);
}
function loader18() {
  return redirect("/login");
}

// app/routes/_home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeLayout,
  loader: () => loader19
});
var import_react59 = require("@remix-run/react");

// app/components/UI/MainNavigation.jsx
var import_react57 = require("@remix-run/react"), import_react58 = require("react"), import_react_fontawesome4 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons4 = require("@fortawesome/free-solid-svg-icons");
var import_remix_utils12 = require("remix-utils");
var import_jsx_dev_runtime60 = require("react/jsx-dev-runtime");
function MainNavigation() {
  let data = (0, import_react57.useLoaderData)(), { isAdmin } = data, [hide, setHide] = (0, import_react58.useState)(!1), hideMedia = () => {
    setHide(!hide);
  }, clickOut = () => {
    setHide(!hide);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_remix_utils12.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(Spinner, {}, void 0, !1, {
    fileName: "app/components/UI/MainNavigation.jsx",
    lineNumber: 27,
    columnNumber: 27
  }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_jsx_dev_runtime60.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
      "button",
      {
        onClick: hideMedia,
        "aria-controls": "sidebar",
        className: "fixed top-5 left-5 text-gray-600 dark:bg-gray-800 rounded cursor-pointer xl:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
          "svg",
          {
            id: "toggleSidebarMobileHamburger",
            className: "w-8 h-8",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 42,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/MainNavigation.jsx",
            lineNumber: 35,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/MainNavigation.jsx",
        lineNumber: 30,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
      "aside",
      {
        id: "default-sidebar",
        className: `fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 xl:translate-x-0  ${hide ? "" : "-translate-x-64"}`,
        "aria-label": "Sidebar",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
            import_react57.Link,
            {
              prefetch: "intent",
              to: "/",
              className: "flex items-center pl-2.5 mb-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("img", { src: logo_default, alt: "Flowbite Logo" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 62,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("span", { className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 63,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 57,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("ul", { className: "space-y-2 font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              import_react57.Link,
              {
                prefetch: "render",
                to: "/",
                className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-700",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faGauge, size: "lg" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 73,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("span", { className: "ml-3", children: "Dashboard" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 82,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 68,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 67,
              columnNumber: 17
            }, this),
            isAdmin === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              import_react57.Link,
              {
                to: "/analystics",
                className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faChartLine, size: "lg" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 91,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Analytics" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 92,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 87,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              import_react57.Link,
              {
                to: "/car",
                className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faCar, size: "lg" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 103,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Cars" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 104,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 99,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            isAdmin === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              import_react57.Link,
              {
                to: "/office",
                prefetch: "render",
                className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faBuilding, size: "lg" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 114,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Centre" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 115,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 109,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 108,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              import_react57.Link,
              {
                to: "/Inspections",
                className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faCertificate, size: "lg" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 126,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Inspections" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 127,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 122,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 121,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              import_react57.Link,
              {
                prefetch: "render",
                to: "/info",
                className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-700",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faAddressCard, size: "lg" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 138,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("span", { className: "ml-3", children: "About" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 139,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 133,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 132,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react57.Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 self-end",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faRightFromBracket, size: "lg" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 148,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Sign Out" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 149,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 144,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 143,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 142,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/UI/MainNavigation.jsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/MainNavigation.jsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/MainNavigation.jsx",
        lineNumber: 49,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
      "div",
      {
        className: `fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90 ${hide ? "" : "hidden"}`,
        onClick: clickOut,
        id: "sidebarBackdrop"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/MainNavigation.jsx",
        lineNumber: 158,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/MainNavigation.jsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/UI/MainNavigation.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/_home.jsx
var import_react60 = require("@remix-run/react"), import_jsx_dev_runtime61 = require("react/jsx-dev-runtime");
function HomeLayout() {
  let userData = (0, import_react60.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("div", { className: "page", style: { overflow: "auto" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(MainNavigation, {}, void 0, !1, {
      fileName: "app/routes/_home.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("section", { className: "p-4 xl:ml-64 min-h-screen dark:bg-gray-900 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_react59.Outlet, { context: userData }, void 0, !1, {
      fileName: "app/routes/_home.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
async function loader19({ request: request2 }) {
  return await getOwnInfo(request2);
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action10,
  default: () => LoginPage,
  loader: () => loader20
});

// app/components/UI/Login.jsx
var import_react61 = require("@remix-run/react");
var import_react_fontawesome5 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons5 = require("@fortawesome/free-solid-svg-icons"), import_flowbite_react17 = require("flowbite-react"), import_jsx_dev_runtime62 = require("react/jsx-dev-runtime");
function Login() {
  let data = (0, import_react61.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("section", { className: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
      import_react61.Link,
      {
        to: "#",
        className: "flex items-center text-2xl font-semibold text-gray-900 dark:text-white justify-center mb-6",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("img", { className: "w-1/3", src: logo_default, alt: "logo" }, void 0, !1, {
          fileName: "app/components/UI/Login.jsx",
          lineNumber: 15,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h1", { className: "text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Welcome to VietNam Registry" }, void 0, !1, {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h6", { className: "italic text-center text-md mt-1 dark:text-white", children: "Enter your credentials to access your account" }, void 0, !1, {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 22,
        columnNumber: 13
      }, this),
      data ? /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(import_flowbite_react17.Alert, { color: "failure", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("span", { className: "font-medium", children: data.message }, void 0, !1, {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 28,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 27,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 26,
        columnNumber: 15
      }, this) : "",
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(import_react61.Form, { className: "space-y-4 md:space-y-6", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Your email"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/Login.jsx",
              lineNumber: 36,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
            "input",
            {
              type: "email",
              name: "email",
              id: "email",
              className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/Login.jsx",
              lineNumber: 42,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/Login.jsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
            "label",
            {
              htmlFor: "password",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/Login.jsx",
              lineNumber: 51,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
            "input",
            {
              type: "password",
              name: "password",
              id: "password",
              className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/Login.jsx",
              lineNumber: 57,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/Login.jsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("button", { className: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Sign in" }, void 0, !1, {
          fileName: "app/components/UI/Login.jsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("p", { className: "text-sm font-light text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
          import_react61.Link,
          {
            to: "/forgot-pass",
            className: "font-medium text-primary-600 hover:underline dark:text-primary-500",
            children: "Forgot Password"
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/Login.jsx",
            lineNumber: 69,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/Login.jsx",
          lineNumber: 68,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/Login.jsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/Login.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/Login.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/UI/Login.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/login.jsx
var import_node13 = require("@remix-run/node"), import_jsx_dev_runtime63 = require("react/jsx-dev-runtime");
function LoginPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(Login, {}, void 0, !1, {
    fileName: "app/routes/login.jsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
async function loader20({ request: request2 }) {
  return await getUserFromSession(request2) ? (0, import_node13.redirect)("/") : null;
}
async function action10({ request: request2 }) {
  let formData = await request2.formData(), data = {
    email: formData.get("email"),
    password: formData.get("password")
  };
  try {
    return await login(data.email, data.password);
  } catch (error) {
    return (0, import_node13.json)({ message: error.message });
  }
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_home.analystics.$codename.expiredsoon": {
    id: "routes/_home.analystics.$codename.expiredsoon",
    parentId: "routes/_home.analystics.$codename",
    path: "expiredsoon",
    index: void 0,
    caseSensitive: void 0,
    module: home_analystics_codename_expiredsoon_exports
  },
  "routes/_home.car.$numberPlate.addinspection": {
    id: "routes/_home.car.$numberPlate.addinspection",
    parentId: "routes/_home",
    path: "car/:numberPlate/addinspection",
    index: void 0,
    caseSensitive: void 0,
    module: home_car_numberPlate_addinspection_exports
  },
  "routes/_home.analystics.$codename.expired": {
    id: "routes/_home.analystics.$codename.expired",
    parentId: "routes/_home.analystics.$codename",
    path: "expired",
    index: void 0,
    caseSensitive: void 0,
    module: home_analystics_codename_expired_exports
  },
  "routes/_home.analystics.$codename._index": {
    id: "routes/_home.analystics.$codename._index",
    parentId: "routes/_home.analystics.$codename",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: home_analystics_codename_index_exports
  },
  "routes/_home.car.$numberPlate._index": {
    id: "routes/_home.car.$numberPlate._index",
    parentId: "routes/_home",
    path: "car/:numberPlate",
    index: !0,
    caseSensitive: void 0,
    module: home_car_numberPlate_index_exports
  },
  "routes/_home.office_.$id.expiredsoon": {
    id: "routes/_home.office_.$id.expiredsoon",
    parentId: "routes/_home.office_.$id",
    path: "expiredsoon",
    index: void 0,
    caseSensitive: void 0,
    module: home_office_id_expiredsoon_exports
  },
  "routes/_home.analystics.$codename": {
    id: "routes/_home.analystics.$codename",
    parentId: "routes/_home",
    path: "analystics/:codename",
    index: void 0,
    caseSensitive: void 0,
    module: home_analystics_codename_exports
  },
  "routes/_home.office_.$id.addStaff": {
    id: "routes/_home.office_.$id.addStaff",
    parentId: "routes/_home.office_.$id",
    path: "addStaff",
    index: void 0,
    caseSensitive: void 0,
    module: home_office_id_addStaff_exports
  },
  "routes/_home.office_.$id_.$userID": {
    id: "routes/_home.office_.$id_.$userID",
    parentId: "routes/_home",
    path: "office/:id/:userID",
    index: void 0,
    caseSensitive: void 0,
    module: home_office_id_userID_exports
  },
  "routes/_home.office_.$id.expired": {
    id: "routes/_home.office_.$id.expired",
    parentId: "routes/_home.office_.$id",
    path: "expired",
    index: void 0,
    caseSensitive: void 0,
    module: home_office_id_expired_exports
  },
  "routes/_home.Inspections._index": {
    id: "routes/_home.Inspections._index",
    parentId: "routes/_home",
    path: "Inspections",
    index: !0,
    caseSensitive: void 0,
    module: home_Inspections_index_exports
  },
  "routes/_home.office_.$id._index": {
    id: "routes/_home.office_.$id._index",
    parentId: "routes/_home.office_.$id",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: home_office_id_index_exports
  },
  "routes/_home._main.expiredsoon": {
    id: "routes/_home._main.expiredsoon",
    parentId: "routes/_home._main",
    path: "expiredsoon",
    index: void 0,
    caseSensitive: void 0,
    module: home_main_expiredsoon_exports
  },
  "routes/_home.analystics._index": {
    id: "routes/_home.analystics._index",
    parentId: "routes/_home",
    path: "analystics",
    index: !0,
    caseSensitive: void 0,
    module: home_analystics_index_exports
  },
  "routes/_home.Inspections.$id": {
    id: "routes/_home.Inspections.$id",
    parentId: "routes/_home",
    path: "Inspections/:id",
    index: void 0,
    caseSensitive: void 0,
    module: home_Inspections_id_exports
  },
  "routes/_home._main.expired": {
    id: "routes/_home._main.expired",
    parentId: "routes/_home._main",
    path: "expired",
    index: void 0,
    caseSensitive: void 0,
    module: home_main_expired_exports
  },
  "routes/_home.office._index": {
    id: "routes/_home.office._index",
    parentId: "routes/_home.office",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: home_office_index_exports
  },
  "routes/_home._main._index": {
    id: "routes/_home._main._index",
    parentId: "routes/_home._main",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: home_main_index_exports
  },
  "routes/_home.info._index": {
    id: "routes/_home.info._index",
    parentId: "routes/_home",
    path: "info",
    index: !0,
    caseSensitive: void 0,
    module: home_info_index_exports
  },
  "routes/_home.office_.$id": {
    id: "routes/_home.office_.$id",
    parentId: "routes/_home",
    path: "office/:id",
    index: void 0,
    caseSensitive: void 0,
    module: home_office_id_exports
  },
  "routes/_home.car._index": {
    id: "routes/_home.car._index",
    parentId: "routes/_home",
    path: "car",
    index: !0,
    caseSensitive: void 0,
    module: home_car_index_exports
  },
  "routes/_home.office.add": {
    id: "routes/_home.office.add",
    parentId: "routes/_home.office",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: home_office_add_exports
  },
  "routes/_home.info.edit": {
    id: "routes/_home.info.edit",
    parentId: "routes/_home",
    path: "info/edit",
    index: void 0,
    caseSensitive: void 0,
    module: home_info_edit_exports
  },
  "routes/forgotpassword": {
    id: "routes/forgotpassword",
    parentId: "root",
    path: "forgotpassword",
    index: void 0,
    caseSensitive: void 0,
    module: route24
  },
  "routes/_home.office": {
    id: "routes/_home.office",
    parentId: "routes/_home",
    path: "office",
    index: void 0,
    caseSensitive: void 0,
    module: home_office_exports
  },
  "routes/_home.search": {
    id: "routes/_home.search",
    parentId: "routes/_home",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: home_search_exports
  },
  "routes/_home._main": {
    id: "routes/_home._main",
    parentId: "routes/_home",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: home_main_exports
  },
  "routes/forgot-pass": {
    id: "routes/forgot-pass",
    parentId: "root",
    path: "forgot-pass",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_pass_exports
  },
  "routes/changepass": {
    id: "routes/changepass",
    parentId: "root",
    path: "changepass",
    index: void 0,
    caseSensitive: void 0,
    module: changepass_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_home": {
    id: "routes/_home",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
