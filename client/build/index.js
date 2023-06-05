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
    assets_manifest_default = { version: "dfaf2d7a", entry: { module: "/build/entry.client-G2IT6O4Z.js", imports: ["/build/_shared/chunk-52JS6F46.js", "/build/_shared/chunk-VBO3XXCF.js", "/build/_shared/chunk-RQ7GWW3B.js", "/build/_shared/chunk-DG4HR4CT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7OQ6F6F6.js", imports: ["/build/_shared/chunk-5YPH7XAC.js", "/build/_shared/chunk-NML7UF65.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_home": { id: "routes/_home", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_home-SUSQNH6F.js", imports: ["/build/_shared/chunk-FPBTDSYD.js", "/build/_shared/chunk-NHPJXLCO.js", "/build/_shared/chunk-AF3DCVCM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.Inspections.$id": { id: "routes/_home.Inspections.$id", parentId: "routes/_home", path: "Inspections/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.Inspections.$id-VJLFLLPP.js", imports: ["/build/_shared/chunk-GD4LFJXJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.Inspections._index": { id: "routes/_home.Inspections._index", parentId: "routes/_home", path: "Inspections", index: !0, caseSensitive: void 0, module: "/build/routes/_home.Inspections._index-KFNTO3LR.js", imports: ["/build/_shared/chunk-NML7UF65.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home._main": { id: "routes/_home._main", parentId: "routes/_home", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_home._main-HQ6LTRAR.js", imports: ["/build/_shared/chunk-L2PACDDD.js", "/build/_shared/chunk-5YPH7XAC.js", "/build/_shared/chunk-NML7UF65.js", "/build/_shared/chunk-GD4LFJXJ.js", "/build/_shared/chunk-2L3TLXHT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home._main._index": { id: "routes/_home._main._index", parentId: "routes/_home._main", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_home._main._index-CFZFAQKC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home._main.expired": { id: "routes/_home._main.expired", parentId: "routes/_home._main", path: "expired", index: void 0, caseSensitive: void 0, module: "/build/routes/_home._main.expired-7JUEOHZQ.js", imports: ["/build/_shared/chunk-AWYGVVX5.js", "/build/_shared/chunk-AF3DCVCM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home._main.expiredsoon": { id: "routes/_home._main.expiredsoon", parentId: "routes/_home._main", path: "expiredsoon", index: void 0, caseSensitive: void 0, module: "/build/routes/_home._main.expiredsoon-SYYFI67A.js", imports: ["/build/_shared/chunk-AWYGVVX5.js", "/build/_shared/chunk-AF3DCVCM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.addStaff": { id: "routes/_home.addStaff", parentId: "routes/_home", path: "addStaff", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.addStaff-ZWEI3XGQ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.car.$numberPlate._index": { id: "routes/_home.car.$numberPlate._index", parentId: "routes/_home", path: "car/:numberPlate", index: !0, caseSensitive: void 0, module: "/build/routes/_home.car.$numberPlate._index-GMTRM67J.js", imports: ["/build/_shared/chunk-GD4LFJXJ.js", "/build/_shared/chunk-2L3TLXHT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.car.$numberPlate.addinspection": { id: "routes/_home.car.$numberPlate.addinspection", parentId: "routes/_home", path: "car/:numberPlate/addinspection", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.car.$numberPlate.addinspection-FEGQXT4L.js", imports: ["/build/_shared/chunk-GD4LFJXJ.js", "/build/_shared/chunk-2L3TLXHT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.car._index": { id: "routes/_home.car._index", parentId: "routes/_home", path: "car", index: !0, caseSensitive: void 0, module: "/build/routes/_home.car._index-KIAVKG77.js", imports: ["/build/_shared/chunk-L2PACDDD.js", "/build/_shared/chunk-5YPH7XAC.js", "/build/_shared/chunk-NML7UF65.js", "/build/_shared/chunk-2L3TLXHT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.info._index": { id: "routes/_home.info._index", parentId: "routes/_home", path: "info", index: !0, caseSensitive: void 0, module: "/build/routes/_home.info._index-LD5L36P6.js", imports: ["/build/_shared/chunk-QGRJQUMK.js", "/build/_shared/chunk-GD4LFJXJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.info.edit": { id: "routes/_home.info.edit", parentId: "routes/_home", path: "info/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.info.edit-HQ5KT2YE.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office.$id.$userID": { id: "routes/_home.office.$id.$userID", parentId: "routes/_home", path: "office/:id/:userID", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office.$id.$userID-TXC7HO56.js", imports: ["/build/_shared/chunk-QGRJQUMK.js", "/build/_shared/chunk-GD4LFJXJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office.$id._index": { id: "routes/_home.office.$id._index", parentId: "routes/_home", path: "office/:id", index: !0, caseSensitive: void 0, module: "/build/routes/_home.office.$id._index-7EO3HI25.js", imports: ["/build/_shared/chunk-2L3TLXHT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office._index": { id: "routes/_home.office._index", parentId: "routes/_home", path: "office", index: !0, caseSensitive: void 0, module: "/build/routes/_home.office._index-5IZTUH53.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office.add": { id: "routes/_home.office.add", parentId: "routes/_home", path: "office/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office.add-YTGGOKG6.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.search": { id: "routes/_home.search", parentId: "routes/_home", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.search-5XEW27VJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/changepass": { id: "routes/changepass", parentId: "root", path: "changepass", index: void 0, caseSensitive: void 0, module: "/build/routes/changepass-MHMCBOPW.js", imports: ["/build/_shared/chunk-2L3TLXHT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgotpassword": { id: "routes/forgotpassword", parentId: "root", path: "forgotpassword", index: void 0, caseSensitive: void 0, module: "/build/routes/forgotpassword-N6CMP3FP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-4CLDAIFT.js", imports: ["/build/_shared/chunk-FPBTDSYD.js", "/build/_shared/chunk-NHPJXLCO.js", "/build/_shared/chunk-AF3DCVCM.js", "/build/_shared/chunk-2L3TLXHT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-YO44EPFE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-DFAF2D7A.js" };
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

// empty-module:./Chart.client
var require_Chart = __commonJS({
  "empty-module:./Chart.client"(exports, module2) {
    module2.exports = {};
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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_remix_utils = require("remix-utils"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
          lineNumber: 46,
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
          lineNumber: 90,
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
var tailwind_default = "/build/_assets/tailwind-H4SRLEPN.css";

// app/root.jsx
var import_remix_utils2 = require("remix-utils"), import_react2 = require("@remix-run/react"), import_react3 = require("@remix-run/react");

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
  let states = (0, import_remix_utils2.useGlobalTransitionStates)(), spinner = "";
  return (states.includes("submitting") || states.includes("loading")) && (spinner = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Spinner, { className: "absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2" }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", style: { overflow: "auto" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "dark", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Outlet, { scrollBehavior: "smooth" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      spinner
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 36,
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
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.data }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dark m-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "font-bold dark:text-red-600", children: "Error" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { onClick: backHandler, children: "Please back to the previous page" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 77,
    columnNumber: 12
  }, this);
}

// app/routes/_home.car.$numberPlate.addinspection.jsx
var home_car_numberPlate_addinspection_exports = {};
__export(home_car_numberPlate_addinspection_exports, {
  action: () => action,
  default: () => inspectionAdd,
  loader: () => loader
});
var import_react6 = require("@remix-run/react");

// app/components/Inspections/InspectionAdd.jsx
var import_react4 = require("@remix-run/react");

// app/util/formatDate.js
function formatDate(Needdate) {
  var date = new Date(Needdate);
  let year = date.getFullYear(), month = ("0" + (date.getMonth() + 1)).slice(-2);
  return `${("0" + date.getDate()).slice(-2)}-${month}-${year}`;
}

// app/components/Inspections/InspectionAdd.jsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function InspectionsAddForm(props) {
  let { owner } = props.data, vehicle = props.data, actionData = (0, import_react5.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, { method: "post", children: [
    actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dark:text-red-500 dark:font-bold dark:text-xl", children: actionData.message }, void 0, !1, {
      fileName: "app/components/Inspections/InspectionAdd.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "1" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        "CH\u1EE6 S\u1EDE H\u1EEEU",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(OWNER)" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              type: "datetime",
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "label",
            {
              htmlFor: "DOB",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Ng\xE0y Sinh (mm-dd-yyyy):"
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "2" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionAdd.jsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        "PH\u01AF\u01A0NG TI\u1EC6N",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(VEHICLE)" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-primary-700 bg-white border border-green-400 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(SPECIFICATIONS)" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6 mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6 mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6 mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-7", children: "Create" }, void 0, !1, {
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

// app/services/auth.server.js
var import_node2 = require("@remix-run/node"), import_node3 = require("@remix-run/node"), SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = (0, import_node2.createCookieSessionStorage)({
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

// app/routes/_home.car.$numberPlate.addinspection.jsx
var import_node4 = require("@remix-run/node"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function inspectionAdd() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InspectionsAddForm, { data }, void 0, !1, {
    fileName: "app/routes/_home.car.$numberPlate.addinspection.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
async function loader({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node4.redirect)("/login");
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
    return (0, import_node4.redirect)("/login");
  let formData = await request2.formData(), data = {
    ownername: formData.get("OwnerName"),
    owneremail: formData.get("Email"),
    ownerphone: formData.get("Phone"),
    ownerssn: formData.get("SSN"),
    ownerdob: formData.get("DOB"),
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
  };
  console.log(data);
  let resData = await (await fetch(
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
  return console.log(resData), resData.status === "SUCCEEDED" ? (0, import_node4.redirect)(`/Inspections/${resData.regisNum}`) : (0, import_node4.json)({ message: resData });
}

// app/routes/_home.car.$numberPlate._index.jsx
var home_car_numberPlate_index_exports = {};
__export(home_car_numberPlate_index_exports, {
  default: () => CarInfoPage,
  loader: () => loader2
});

// app/components/CarPage/CarPage.jsx
var import_react7 = require("@remix-run/react");
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function CarPage() {
  let data = (0, import_react8.useLoaderData)(), owner = data.owner.data, dob = formatDate(owner.dateOfBirth), inspection = data.registry.sort(function(a, b) {
    return new Date(b.regisDate) - new Date(a.regisDate);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Form, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "1" }, void 0, !1, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 17,
            columnNumber: 15
          }, this),
          "CH\u1EE6 S\u1EDE H\u1EEEU",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(OWNER)" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "input",
              {
                type: "datetime",
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "2" }, void 0, !1, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          "PH\u01AF\u01A0NG TI\u1EC6N",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(VEHICLE)" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "3" }, void 0, !1, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 324,
            columnNumber: 13
          }, this),
          "DANH S\xC1CH \u0110\u0102NG KI\u1EC2M",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(LIST OF INSPECTIONS)" }, void 0, !1, {
            fileName: "app/components/CarPage/CarPage.jsx",
            lineNumber: 328,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 323,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "addinspection", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "div",
            {
              id: "tooltip-dark",
              role: "tooltip",
              className: "absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700",
              children: [
                "Clink here to create inspections",
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "tooltip-arrow", "data-popper-arrow": !0 }, void 0, !1, {
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
      inspection.map((inspec) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "mb-10 ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: `/Inspections/${inspec.regisNum}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-500 dark:bg-gray-700" }, void 0, !1, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 359,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("time", { className: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-300", children: formatDate(inspec.regisDate) }, void 0, !1, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 360,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: [
          "M\xE3 s\u1ED1 \u0110\u0103ng ki\u1EC3m: ",
          inspec.regisNum
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 363,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "T\u1EA1i: ",
          inspec.regisPlace.name
        ] }, void 0, !0, {
          fileName: "app/components/CarPage/CarPage.jsx",
          lineNumber: 369,
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
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function CarInfoPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CarPage, {}, void 0, !1, {
    fileName: "app/routes/_home.car.$numberPlate._index.jsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
async function loader2({ request: request2, params }) {
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

// app/routes/_home.Inspections._index.jsx
var home_Inspections_index_exports = {};
__export(home_Inspections_index_exports, {
  default: () => InspectionSearchPage
});
var import_searchInspectionsModal = __toESM(require_searchInspectionsModal()), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function InspectionSearchPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_searchInspectionsModal.default, {}, void 0, !1, {
    fileName: "app/routes/_home.Inspections._index.jsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/_home.office.$id.$userID.jsx
var home_office_id_userID_exports = {};
__export(home_office_id_userID_exports, {
  default: () => StaffInfoPage,
  loader: () => loader3
});

// app/components/Office/StaffInfo.jsx
var import_react9 = require("@remix-run/react");

// app/images/ava.png
var ava_default = "/build/_assets/ava-RLJVMXTQ.png";

// app/components/Office/StaffInfo.jsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function StaffInfo() {
  let info = (0, import_react9.useLoaderData)(), { name, SSN, dateOfBirth, phone } = info.data, formattedDate = formatDate(dateOfBirth), inspection = info.registed;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: " m-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "mx-0 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "max-w-7xl lg:pt-5 items-stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-5 max-w-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between md:space-x-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-xl font-semibold", children: name }, void 0, !1, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 33,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-lg font-light text-black-500", children: [
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-24 text-md font-light dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: "#", className: "flex flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "mb-5 text-lg font-bold ", children: "Th\xF4ng tin c\xE1 nh\xE2n" }, void 0, !1, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 42,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "ms-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPencil }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dl", { className: "max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Email address" }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 51,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dd", { className: "text-lg font-semibold", children: info.email }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 54,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 50,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Social Security Number" }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 58,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dd", { className: "text-lg font-semibold", children: SSN }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 61,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 57,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Date of Birth" }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 64,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dd", { className: "text-lg font-semibold", children: formattedDate }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 67,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Office/StaffInfo.jsx",
            lineNumber: 63,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col pt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Phone number" }, void 0, !1, {
              fileName: "app/components/Office/StaffInfo.jsx",
              lineNumber: 70,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dd", { className: "text-lg font-semibold", children: phone }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "ms-5 mt-10 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "text-lg font-semibold dark:text-green-300", children: "Inspections" }, void 0, !1, {
        fileName: "app/components/Office/StaffInfo.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ol", { className: "relative border-l border-gray-200 dark:border-gray-700", children: inspection.map((inspec) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { className: "mb-10 ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: `/Inspections/${inspec.regisNum}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" }, void 0, !1, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("time", { className: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500", children: formatDate(inspec.regisDate) }, void 0, !1, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 90,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: [
          "M\xE3 s\u1ED1 \u0110\u0103ng ki\u1EC3m: ",
          inspec.regisNum
        ] }, void 0, !0, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 93,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "Bi\u1EC3n s\u1ED1 xe: ",
          inspec.car.numberPlate
        ] }, void 0, !0, {
          fileName: "app/components/Office/StaffInfo.jsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400", children: [
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
    "https://registrytotal.herokuapp.com/api/staff/addStaff",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  )).json();
  return resData !== "SUCCEEDED" ? (0, import_node5.json)({ message: resData }) : (0, import_node5.redirect)("/main");
}
async function getInspections(params, request2) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node5.redirect)("/login");
  let url = "https://registrytotal.herokuapp.com/api/inspection/" + params.id, resData = await (await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })).json();
  return console.log(resData), resData;
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
  if (resData === "NOT FOUND")
    throw new Error("You must be admin to access this");
  if (resData === "SERVER UNAVAILABLE")
    throw new Error("Something went wrong with the server, please try again");
  return (0, import_node5.redirect)("/office");
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

// app/routes/_home.office.$id.$userID.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function StaffInfoPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(StaffInfo, {}, void 0, !1, {
    fileName: "app/routes/_home.office.$id.$userID.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function loader3({ request: request2, params }) {
  try {
    return await getStaffbyId(request2, params.userID);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

// app/routes/_home._main.expiredsoon.jsx
var home_main_expiredsoon_exports = {};
__export(home_main_expiredsoon_exports, {
  default: () => ExpiredSoon,
  loader: () => loader4
});

// app/components/Dashboard/ExpiredSoon.jsx
var import_flowbite_react3 = require("flowbite-react");
var import_react11 = require("@remix-run/react");

// app/util/PageModal.jsx
var import_react10 = require("@remix-run/react"), import_flowbite_react2 = require("flowbite-react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function PageModal({ children, title }) {
  let navigate = (0, import_react10.useNavigate)(), clickHandler = () => {
    navigate("..");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_flowbite_react2.Modal, { show: !0, size: "6xl", dismissible: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_flowbite_react2.Modal.Header, { onClick: clickHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: title }, void 0, !1, {
      fileName: "app/util/PageModal.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/util/PageModal.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_flowbite_react2.Modal.Body, { children }, void 0, !1, {
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

// app/components/Dashboard/ExpiredSoon.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ExpiredSoonTable() {
  let data = (0, import_react11.useLoaderData)().data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PageModal, { title: "This is the list of car will be expired soon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table, { hoverable: !0, className: "overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.Head, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.HeadCell, { children: "NumberPlate" }, void 0, !1, {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.HeadCell, { children: "RegistDate" }, void 0, !1, {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.HeadCell, { children: "ExpiredDate" }, void 0, !1, {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.HeadCell, { children: "City" }, void 0, !1, {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "sr-only", children: "View" }, void 0, !1, {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/ExpiredSoon.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.Body, { className: "divide-y", children: data.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_flowbite_react3.Table.Row,
      {
        className: "bg-white dark:border-gray-700 dark:bg-gray-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: dt.numberPlate }, void 0, !1, {
            fileName: "app/components/Dashboard/ExpiredSoon.jsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.Cell, { children: formatDate(dt.registDate) }, void 0, !1, {
            fileName: "app/components/Dashboard/ExpiredSoon.jsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.Cell, { children: formatDate(dt.expiredDate) }, void 0, !1, {
            fileName: "app/components/Dashboard/ExpiredSoon.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.Cell, { children: dt.city }, void 0, !1, {
            fileName: "app/components/Dashboard/ExpiredSoon.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_flowbite_react3.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react11.Link,
            {
              className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500",
              to: `/car/${dt.numberPlate}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "View" }, void 0, !1, {
                fileName: "app/components/Dashboard/ExpiredSoon.jsx",
                lineNumber: 37,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Dashboard/ExpiredSoon.jsx",
              lineNumber: 33,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Dashboard/ExpiredSoon.jsx",
            lineNumber: 32,
            columnNumber: 15
          }, this)
        ]
      },
      dt.numberPlate,
      !0,
      {
        fileName: "app/components/Dashboard/ExpiredSoon.jsx",
        lineNumber: 22,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Dashboard/ExpiredSoon.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/ExpiredSoon.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Dashboard/ExpiredSoon.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/_home._main.expiredsoon.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function ExpiredSoon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ExpiredSoonTable, {}, void 0, !1, {
    fileName: "app/routes/_home._main.expiredsoon.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function loader4({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return redirect("/login");
  let url = "https://registrytotal.herokuapp.com/api/office/" + (await getOwnInfo(request2)).workFor._id + "/outdatecar", dataPass_1 = {
    status: "soon",
    city: "",
    info: "0"
  }, resData = await (await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass_1)
  })).json();
  return console.log(resData), resData;
}

// app/routes/_home.office.$id._index.jsx
var home_office_id_index_exports = {};
__export(home_office_id_index_exports, {
  default: () => OfficeDetailPage,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node");
var import_react13 = require("@remix-run/react");

// app/components/Office/UserTable.jsx
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function ListOfStaff() {
  let data = (0, import_react12.useLoaderData)().staff;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "dark:text-white mt-5 text-xl font-semibold", children: "All staff" }, void 0, !1, {
      fileName: "app/components/Office/UserTable.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative overflow-x-auto shadow-md sm:rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "pb-4 bg-white dark:bg-gray-900", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "table-search", className: "sr-only", children: "Search" }, void 0, !1, {
          fileName: "app/components/Office/UserTable.jsx",
          lineNumber: 10,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "svg",
            {
              className: "w-5 h-5 text-gray-500 dark:text-gray-400",
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
                  fileName: "app/components/Office/UserTable.jsx",
                  lineNumber: 22,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Office/UserTable.jsx",
              lineNumber: 15,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 14,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "input",
            {
              type: "text",
              id: "table-search",
              className: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "Search for staff name"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Office/UserTable.jsx",
              lineNumber: 29,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Office/UserTable.jsx",
          lineNumber: 13,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/UserTable.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Staff name" }, void 0, !1, {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 40,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Email" }, void 0, !1, {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 43,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "SSN" }, void 0, !1, {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Phone" }, void 0, !1, {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 49,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Action" }, void 0, !1, {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 52,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tbody", { children: data.staff.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "tr",
          {
            className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
                  lineNumber: 63,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "px-6 py-4", children: dt.email }, void 0, !1, {
                fileName: "app/components/Office/UserTable.jsx",
                lineNumber: 69,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "px-6 py-4", children: dt.data.SSN }, void 0, !1, {
                fileName: "app/components/Office/UserTable.jsx",
                lineNumber: 70,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "px-6 py-4", children: dt.data.phone }, void 0, !1, {
                fileName: "app/components/Office/UserTable.jsx",
                lineNumber: 71,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                import_react12.Link,
                {
                  to: dt._id,
                  className: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
                  children: "View"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Office/UserTable.jsx",
                  lineNumber: 73,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/Office/UserTable.jsx",
                lineNumber: 72,
                columnNumber: 17
              }, this)
            ]
          },
          dt._id,
          !0,
          {
            fileName: "app/components/Office/UserTable.jsx",
            lineNumber: 59,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/Office/UserTable.jsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Office/UserTable.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Office/UserTable.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Office/UserTable.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office.$id._index.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function OfficeDetailPage() {
  let data = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ListOfStaff, {}, void 0, !1, {
    fileName: "app/routes/_home.office.$id._index.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_home.office.$id._index.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
async function loader5({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node6.redirect)("/login");
  let response = await fetch(
    "https://registrytotal.herokuapp.com/api/office/" + params.id,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ), url = "https://registrytotal.herokuapp.com/api/office/" + params.id + "/car", dataPass = {
    time: "2023",
    city: ""
  }, response_2 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass)
  }), data = await response.json(), data2 = await response_2.json();
  return console.log(data2), (0, import_node6.json)({ staff: data[0] }, { car: data2 });
}

// app/routes/_home.Inspections.$id.jsx
var home_Inspections_id_exports = {};
__export(home_Inspections_id_exports, {
  default: () => InpectionsPage,
  loader: () => loader6
});

// app/components/Inspections/InspectionsForm.jsx
var import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function InspectionsForm({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "text-gray-600 body-font dark:text-white m-auto dark:bg-slate-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "container flex flex-wrap px-3 py-24 mx-auto items-center dark:text-white text-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "m-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900 dark:text-red-500 text-center", children: "1. PH\u01AF\u01A0NG TI\u1EC6N \u2002 (VEHICLE)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 9,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left flex w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1", children: [
            " ",
            "Bi\u1EC3n \u0111\u0103ng k\xFD: ",
            data.car.numberPlate
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 13,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1", children: [
            "S\u1ED1 qu\u1EA3n l\xFD: ",
            data.regisNum
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 17,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 12,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left flex w-full  italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1", children: "(Registration Number)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 20,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1", children: "(Vehicle Inspection No.)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 21,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Lo\u1EA1i Ph\u01B0\u01A1ng ti\u1EC7n: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Type)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 24,
            columnNumber: 33
          }, this),
          data.car.type
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Nh\xE3n Hi\u1EC7u: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Mark)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 28,
            columnNumber: 26
          }, this),
          " ",
          data.car.brand
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "S\u1ED1 Lo\u1EA1i: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Model Code)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 32,
            columnNumber: 24
          }, this),
          " ",
          data.car.modelCode
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "S\u1ED1 M\xE1y: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Engine Number)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 36,
            columnNumber: 23
          }, this),
          " ",
          data.car.engineNumber
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "S\u1ED1 Khung:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Chasis Number)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 40,
            columnNumber: 24
          }, this),
          " ",
          data.car.chassisNumber
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left flex w-full  mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-initial w-3/4", children: [
            "N\u0103m, N\u01B0\u1EDBc s\u1EA3n xu\u1EA5t: ",
            data.car.manufacturedYear,
            ",",
            " ",
            data.car.manufacturedCountry
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-initial w-32", children: "Ni\xEAn H\u1EA1n SD:" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left flex w-full  italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-initial w-3/4", children: "(Manufactured Year and Country)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 52,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-initial w-32", children: "(Lifetime limit to)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 55,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left flex w-full  mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-initial w-3/5", children: [
            "Kinh doanh v\u1EADn t\u1EA3i",
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: [
              "(Commercial Use)",
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  checked: data.car.purpose === "Kinh doanh",
                  className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Inspections/InspectionsForm.jsx",
                  lineNumber: 62,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/Inspections/InspectionsForm.jsx",
              lineNumber: 60,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 58,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-initial ms-3", children: [
            "C\u1EA3i t\u1EA1o",
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: [
              "(Modification)",
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Inspections/InspectionsForm.jsx",
                  lineNumber: 73,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/Inspections/InspectionsForm.jsx",
              lineNumber: 71,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 69,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "m-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900 text-center dark:text-red-500", children: "2. TH\xD4NG S\u1ED0 K\u1EF8 THU\u1EACT\u2002(SPECIFICATIONS)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left flex w-full  mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1", children: [
            "C\xF4ng th\u1EE9c b\xE1nh xe: ",
            data.car.specification.wheelFormula
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1", children: [
            "V\u1EBFt b\xE1nh xe:",
            data.car.specification.wheelTread
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left flex w-full  italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1", children: "(Wheel Formula)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 94,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1", children: "(Wheel Tread)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 95,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "K\xEDch th\u01B0\u1EDBc bao:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Overall Dimension)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 99,
            columnNumber: 15
          }, this),
          " ",
          data.car.specification.overallDimension
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 97,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full", children: [
            "KT khoang h\xE0nh l\xFD l\u1EDBn nh\u1EA5t:",
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Largest luggage container Dimension)" }, void 0, !1, {
              fileName: "app/components/Inspections/InspectionsForm.jsx",
              lineNumber: 105,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 103,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full", children: data.car.specification.containerDimension }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 110,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Chi\u1EC1u d\xE0i c\u01A1 s\u1EDF:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(WheelBase)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          " ",
          data.car.specification.lengthBase
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Kh\u1ED1i l\u01B0\u1EE3ng b\u1EA3n th\xE2n:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(KerbMass)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          data.car.specification.kerbMass
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full", children: [
            "Kh\u1ED1i l\u01B0\u1EE3ng h\xE0ng CC theo TK/CP TGGT:",
            " ",
            data.car.specification.authorizedPayload
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize Payload)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 129,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full", children: [
            "Kh\u1ED1i l\u01B0\u1EE3ng to\xE0n b\u1ED9 theo TK/CP TGGT:",
            " ",
            data.car.specification.authorizedTotalMass
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 134,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize total mass)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 138,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 133,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inspections/InspectionsForm.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col md:w-1/2 md:pl-12 items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full", children: [
          "Kh\u1ED1i l\u01B0\u1EE3ng k\xE9o theo theo TK/CP TGGT:",
          " ",
          data.car.specification.authorizedTowedMass
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 147,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize towed mass)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 151,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 146,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full", children: [
          "S\u1ED1 ng\u01B0\u1EDDi cho ph\xE9p ch\u1EDF: ",
          data.car.specification.carriedNo
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Permission No. of Pers Carried: seat, stood place, laying place)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 159,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 155,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "Lo\u1EA1i nhi\xEAn li\u1EC7u:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Type of Fuel Used)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 165,
          columnNumber: 13
        }, this),
        data.car.specification.fuel
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 163,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "Th\u1EC3 t\xEDch l\xE0m vi\u1EC7c c\u1EE7a \u0111\u1ED9ng c\u01A1:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Engine displacement)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        data.car.specification.engineDisplacement
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 168,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "C\xF4ng su\u1EA5t l\u1EDBn nh\u1EA5t/t\u1ED1c \u0111\u1ED9 quay:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Max. output/rpm)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 175,
          columnNumber: 13
        }, this),
        data.car.specification.maxOutputToRpmRatio
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 173,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
          "S\u1ED1 l\u01B0\u1EE3ng l\u1ED1p, c\u1EE1 l\u1ED1p/tr\u1EE5c:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Number of Tires; Tire size/axle)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 181,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 179,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: data.car.specification.numberOfTiresAndTireSize }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 186,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: data.car.specification.numberOfTiresAndTireSize }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 187,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 185,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 178,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "C\xF3 l\u1EAFp thi\u1EBFt b\u1ECB gi\xE1m s\xE1t h\xE0nh tr\xECnh:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Equipped with Tachography)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 192,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "ms-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "input",
          {
            type: "checkbox",
            className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 194,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 193,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 190,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "Kh\xF4ng c\u1EA5p tem ki\u1EC3m \u0111\u1ECBnh",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "italic text-sm", children: "(Inspection Stamp was not issued)" }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 202,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "ms-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "input",
          {
            type: "checkbox",
            className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 206,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 205,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 200,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "container flex flex-wrap mx-auto items-center pt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-initial w-1/3 pt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: "S\u1ED1 phi\u1EBFu ki\u1EC3m \u0111\u1ECBnh:" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 215,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "italic text-sm ", children: "(Inspection Report No)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 216,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: " text-left", children: data.regisNum }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 217,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-left  w-full mt-1", children: "C\xF3 hi\u1EC7u l\u1EF1c \u0111\u1EBFn h\u1EBFt ng\xE0y:" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 218,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "italic text-sm ", children: [
            "(Valid Until)",
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: " text-md text-left", children: formatDate(data.expiredDate) }, void 0, !1, {
              fileName: "app/components/Inspections/InspectionsForm.jsx",
              lineNumber: 223,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 221,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 214,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-initial w-2/3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-center  w-full mt-1", children: "H\xE0 N\u1ED9i, ng\xE0y ... th\xE1ng ... n\u0103m" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 229,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "italic text-sm  text-center", children: "(Issue on Date/Month/Year)" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 232,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { className: "font-medium title-font text-center ", children: "\u0110\u01A0N V\u1ECA KI\u1EC2M \u0110\u1ECANH" }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 236,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Inspections/InspectionsForm.jsx",
            lineNumber: 235,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Inspections/InspectionsForm.jsx",
          lineNumber: 228,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inspections/InspectionsForm.jsx",
        lineNumber: 213,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inspections/InspectionsForm.jsx",
      lineNumber: 145,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Inspections/InspectionsForm.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Inspections/InspectionsForm.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_home.Inspections.$id.jsx
var import_react15 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function InpectionsPage() {
  let data = (0, import_react15.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(InspectionsForm, { data }, void 0, !1, {
    fileName: "app/routes/_home.Inspections.$id.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
async function loader6({ request: request2, params }) {
  return await getInspections(params, request2);
}

// app/routes/_home._main.expired.jsx
var home_main_expired_exports = {};
__export(home_main_expired_exports, {
  default: () => ExpiredSoon2,
  loader: () => loader7
});

// app/components/Dashboard/Expired.jsx
var import_flowbite_react4 = require("flowbite-react");
var import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function ExpiredTable() {
  let data = (0, import_react16.useLoaderData)().data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PageModal, { title: "This is the list of car have already expired", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table, { hoverable: !0, className: "overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.Head, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.HeadCell, { children: "NumberPlate" }, void 0, !1, {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.HeadCell, { children: "RegistDate" }, void 0, !1, {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.HeadCell, { children: "ExpiredDate" }, void 0, !1, {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.HeadCell, { children: "City" }, void 0, !1, {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "sr-only", children: "View" }, void 0, !1, {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/Expired.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.Body, { className: "divide-y", children: data.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      import_flowbite_react4.Table.Row,
      {
        className: "bg-white dark:border-gray-700 dark:bg-gray-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: dt.numberPlate }, void 0, !1, {
            fileName: "app/components/Dashboard/Expired.jsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.Cell, { children: formatDate(dt.registDate) }, void 0, !1, {
            fileName: "app/components/Dashboard/Expired.jsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.Cell, { children: formatDate(dt.expiredDate) }, void 0, !1, {
            fileName: "app/components/Dashboard/Expired.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.Cell, { children: dt.city }, void 0, !1, {
            fileName: "app/components/Dashboard/Expired.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_flowbite_react4.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            import_react16.Link,
            {
              className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500",
              to: `/car/${dt.numberPlate}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "View" }, void 0, !1, {
                fileName: "app/components/Dashboard/Expired.jsx",
                lineNumber: 37,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Dashboard/Expired.jsx",
              lineNumber: 33,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Dashboard/Expired.jsx",
            lineNumber: 32,
            columnNumber: 15
          }, this)
        ]
      },
      dt.numberPlate,
      !0,
      {
        fileName: "app/components/Dashboard/Expired.jsx",
        lineNumber: 22,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Dashboard/Expired.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/Expired.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Dashboard/Expired.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/_home._main.expired.jsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function ExpiredSoon2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ExpiredTable, {}, void 0, !1, {
    fileName: "app/routes/_home._main.expired.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function loader7({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return redirect("/login");
  let url = "https://registrytotal.herokuapp.com/api/office/" + (await getOwnInfo(request2)).workFor._id + "/outdatecar", dataPass_1 = {
    status: "expired",
    city: "",
    info: "0"
  }, resData = await (await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass_1)
  })).json();
  return console.log(resData), resData;
}

// app/routes/_home.office._index.jsx
var home_office_index_exports = {};
__export(home_office_index_exports, {
  default: () => OfficePage,
  loader: () => loader8
});

// app/components/Office/OfficeList.jsx
var import_react17 = require("@remix-run/react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function OfficeList() {
  let content = (0, import_react17.useLoaderData)().data.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    "tr",
    {
      className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "th",
        {
          scope: "row",
          className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react17.Link, { to: dt._id, children: [
            dt.name,
            " "
          ] }, void 0, !0, {
            fileName: "app/components/Office/OfficeList.jsx",
            lineNumber: 15,
            columnNumber: 9
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Office/OfficeList.jsx",
          lineNumber: 11,
          columnNumber: 7
        },
        this
      )
    },
    dt._id,
    !1,
    {
      fileName: "app/components/Office/OfficeList.jsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Office Name" }, void 0, !1, {
      fileName: "app/components/Office/OfficeList.jsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Office/OfficeList.jsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Office/OfficeList.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tbody", { children: content }, void 0, !1, {
      fileName: "app/components/Office/OfficeList.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Office/OfficeList.jsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Office/OfficeList.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office._index.jsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function OfficePage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(OfficeList, {}, void 0, !1, {
      fileName: "app/routes/_home.office._index.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, !0, {
    fileName: "app/routes/_home.office._index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
async function loader8({ request: request2 }) {
  try {
    let data = await adminCheck(request2);
    return await getAllOffice(request2);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

// app/routes/_home._main._index.jsx
var home_main_index_exports = {};
__export(home_main_index_exports, {
  default: () => Mainn
});
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Mainn() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/routes/_home._main._index.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/_home.info._index.jsx
var home_info_index_exports = {};
__export(home_info_index_exports, {
  default: () => Infopage,
  meta: () => meta2
});
var import_react19 = require("@remix-run/react");

// app/components/About/OwnInfo.jsx
var import_react18 = require("@remix-run/react");
var import_react_fontawesome2 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function OwnInfo() {
  let info = (0, import_react18.useMatches)().find((match) => match.id === "routes/_home"), { name, SSN, dateOfBirth, phone } = info.data.data, formattedDate = formatDate(dateOfBirth), inspection = info.data.registed.sort(function(a, b) {
    return new Date(b.regisDate) - new Date(a.regisDate);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: " m-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("section", { className: "mx-0 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "max-w-7xl lg:pt-5 items-stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mx-5 max-w-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between md:space-x-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex items-center space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "pt-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { className: "text-xl font-semibold", children: name }, void 0, !1, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 36,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-lg font-light text-black-500", children: [
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mt-24 text-md font-light dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react18.Link, { to: "edit", className: "flex flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "mb-5 text-lg font-bold ", children: "Th\xF4ng tin c\xE1 nh\xE2n" }, void 0, !1, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 45,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "ms-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faPencil }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dl", { className: "max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Email address" }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 54,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dd", { className: "text-lg font-semibold", children: info.data.email }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 57,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 53,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Social Security Number" }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 61,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dd", { className: "text-lg font-semibold", children: SSN }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 64,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 60,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Date of Birth" }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 67,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dd", { className: "text-lg font-semibold", children: formattedDate }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 70,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/About/OwnInfo.jsx",
            lineNumber: 66,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col pt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Phone number" }, void 0, !1, {
              fileName: "app/components/About/OwnInfo.jsx",
              lineNumber: 73,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dd", { className: "text-lg font-semibold", children: phone }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("section", { className: "ms-5 mt-10 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { className: "text-lg font-semibold dark:text-green-300", children: "Inspections" }, void 0, !1, {
        fileName: "app/components/About/OwnInfo.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("ol", { className: "relative border-l border-gray-200 dark:border-gray-700", children: inspection.map((inspec) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("li", { className: "mb-10 ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react18.Link, { to: `/Inspections/${inspec.regisNum}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" }, void 0, !1, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 93,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("time", { className: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500", children: formatDate(inspec.regisDate) }, void 0, !1, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 94,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: [
          "M\xE3 s\u1ED1 \u0110\u0103ng ki\u1EC3m: ",
          inspec.regisNum
        ] }, void 0, !0, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 97,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "Bi\u1EC3n s\u1ED1 xe: ",
          inspec.car.numberPlate
        ] }, void 0, !0, {
          fileName: "app/components/About/OwnInfo.jsx",
          lineNumber: 100,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400", children: [
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
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function Infopage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(OwnInfo, {}, void 0, !1, {
    fileName: "app/routes/_home.info._index.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
function meta2({ matches }) {
  return [{ title: `${matches[1].data.data.name}` }];
}

// app/routes/_home.car._index.jsx
var home_car_index_exports = {};
__export(home_car_index_exports, {
  action: () => action2,
  default: () => CarIndex,
  loader: () => loader9
});
var import_node7 = require("@remix-run/node"), import_searchCarModal = __toESM(require_searchCarModal());

// app/components/CarPage/CarPageDefault.jsx
var import_react20 = require("@remix-run/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function CarPageDefault() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react20.Form, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "1" }, void 0, !1, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 9,
          columnNumber: 13
        }, this),
        "CH\u1EE6 S\u1EDE H\u1EEEU",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(OWNER)" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "2" }, void 0, !1, {
          fileName: "app/components/CarPage/CarPageDefault.jsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        "PH\u01AF\u01A0NG TI\u1EC6N",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(VEHICLE)" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
var import_remix_utils3 = require("remix-utils");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function CarIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_remix_utils3.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/routes/_home.car._index.jsx",
      lineNumber: 11,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_searchCarModal.default, {}, void 0, !1, {
      fileName: "app/routes/_home.car._index.jsx",
      lineNumber: 11,
      columnNumber: 49
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.car._index.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(CarPageDefault, {}, void 0, !1, {
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
async function loader9({ request: request2 }) {
  return requireUserSession(request2) ? null : (0, import_node7.redirect)("/login");
}
async function action2({ request: request2 }) {
  let numberPlate = (await request2.formData()).get("NumberPlate");
  try {
    return await findCarbyNumberPlate(request2, numberPlate);
  } catch (error) {
    return (0, import_node7.json)({ message: error.message });
  }
}

// app/routes/_home.office.add.jsx
var home_office_add_exports = {};
__export(home_office_add_exports, {
  action: () => action3,
  default: () => AddOfficePage,
  loader: () => loader10
});

// app/components/AddOfficeForm.jsx
var import_react21 = require("@remix-run/react"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function AddOfficeForm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react21.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "input",
        {
          type: "text",
          name: "OfficeName",
          id: "OfficeName",
          className: "block py-2.5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
          placeholder: " ",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/AddOfficeForm.jsx",
          lineNumber: 7,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
          lineNumber: 15,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/AddOfficeForm.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
          lineNumber: 23,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/AddOfficeForm.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
          lineNumber: 39,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
          lineNumber: 47,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/AddOfficeForm.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
          lineNumber: 55,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
          lineNumber: 63,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/AddOfficeForm.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("button", { className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-3/4 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "Submit" }, void 0, !1, {
      fileName: "app/components/AddOfficeForm.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AddOfficeForm.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office.add.jsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function AddOfficePage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(AddOfficeForm, {}, void 0, !1, {
    fileName: "app/routes/_home.office.add.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function loader10({ request: request2 }) {
  try {
    return await adminCheck(request2);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
async function action3({ request: request2 }) {
  let formData = await request2.formData(), fetchData = {
    name: formData.get("OfficeName"),
    address: formData.get("Address"),
    hotline: formData.get("Hotline"),
    hotmail: formData.get("Hotmail")
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
  action: () => action4,
  default: () => InfoEditpage
});
var import_react22 = require("@remix-run/react");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function InfoEditpage() {
  let info = (0, import_react22.useMatches)().find((match) => match.id === "routes/_home").data, { name, SSN, dateOfBirth, phone } = info.data;
  var date = new Date(dateOfBirth);
  let year = date.getFullYear(), month = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2), formattedDate = `${year}-${month}-${day}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react22.Form, { className: "dark", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "grid gap-6 mb-6 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            lineNumber: 21,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            lineNumber: 27,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            lineNumber: 38,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            lineNumber: 44,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          "label",
          {
            htmlFor: "dob",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Date Of Birth(mm/dd/yyyy)"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 56,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          "input",
          {
            type: "date",
            name: "dob",
            id: "dob",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "dd/mm/yyyy",
            required: !0,
            defaultValue: formattedDate
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.edit.jsx",
            lineNumber: 62,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            lineNumber: 73,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            lineNumber: 79,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            lineNumber: 91,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            lineNumber: 97,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            lineNumber: 107,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            lineNumber: 113,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_home.info.edit.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("button", { formMethod: "put", className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2", children: "Save" }, void 0, !1, {
      fileName: "app/routes/_home.info.edit.jsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react22.Link, { to: "/changepass", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("button", { className: "text-white bg-pink-400 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "Change Password" }, void 0, !1, {
      fileName: "app/routes/_home.info.edit.jsx",
      lineNumber: 129,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.info.edit.jsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.info.edit.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
async function action4({ request: request2 }) {
  let formData = await request2.formData(), data = {
    email: formData.get("email"),
    name: formData.get("name"),
    workFor: formData.get("workFor"),
    dob: reformatDate(formData.get("dob")),
    ssn: formData.get("SSN"),
    phone: formData.get("phone"),
    password: "12345678",
    isAdmin: 0
  };
  return await EditInfo(request2, data);
}

// app/routes/_home.addStaff.jsx
var home_addStaff_exports = {};
__export(home_addStaff_exports, {
  action: () => action5,
  default: () => addStaffPage,
  loader: () => loader11,
  meta: () => meta3
});
var import_react24 = require("@remix-run/react");

// app/components/AddStaffForm.jsx
var import_react23 = require("@remix-run/react"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function AddForm(props) {
  let option = props.data.data.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { children: dt.name }, dt._id, !1, {
    fileName: "app/components/AddStaffForm.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this)), error = (0, import_react23.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_jsx_dev_runtime30.Fragment, { children: [
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h3", { className: "text-red-500 text-md bold text-center mb-5", children: [
      error.message,
      ", please try again"
    ] }, void 0, !0, {
      fileName: "app/components/AddStaffForm.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react23.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "grid gap-6 mb-6 md:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
              lineNumber: 17,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
              lineNumber: 23,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
              lineNumber: 34,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
              lineNumber: 40,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
              lineNumber: 51,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "input",
            {
              type: "date",
              name: "dob",
              id: "dob",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "dd/mm/yyyy",
              required: !0,
              defaultValue: ""
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 57,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
              lineNumber: 85,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "select",
            {
              name: "workFor",
              id: "workFor",
              className: "block py-2.5 px-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border  border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 peer",
              placeholder: "Trung t\xE2m \u0111\u0103ng ki\u1EC3m",
              children: option
            },
            void 0,
            !1,
            {
              fileName: "app/components/AddStaffForm.jsx",
              lineNumber: 91,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
              lineNumber: 106,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
              lineNumber: 112,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
              lineNumber: 123,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
              lineNumber: 129,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("button", { className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "ADD" }, void 0, !1, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AddStaffForm.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AddStaffForm.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/_home.addStaff.jsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function reformatDate2(dateStr) {
  var dArr = dateStr.split("-");
  return dArr[1] + "/" + dArr[2] + "/" + dArr[0];
}
function meta3() {
  return [{ title: "Add Staff" }];
}
function addStaffPage() {
  let data = (0, import_react24.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(AddForm, { data }, void 0, !1, {
    fileName: "app/routes/_home.addStaff.jsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}
async function loader11({ request: request2 }) {
  try {
    return await getAllOffice(request2);
  } catch (error) {
    throw console.log(error), new Error(`${error.message}`);
  }
}
async function action5({ request: request2 }) {
  let formData = await request2.formData(), data = {
    email: formData.get("email"),
    name: formData.get("name"),
    workFor: formData.get("workFor"),
    dob: reformatDate2(formData.get("dob")),
    ssn: formData.get("SSN"),
    phone: formData.get("phone"),
    password: "12345678",
    isAdmin: 0
  };
  return await addStaff(request2, data);
}

// server-entry-module:@remix-run/dev/server-build
var route16 = __toESM(require_forgotpassword());

// app/routes/_home.search.jsx
var home_search_exports = {};
__export(home_search_exports, {
  default: () => SearchPage
});
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function SearchPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "This is for searching" }, void 0, !1, {
    fileName: "app/routes/_home.search.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/_home._main.jsx
var home_main_exports = {};
__export(home_main_exports, {
  default: () => MainPage,
  loader: () => loader12,
  meta: () => meta4
});
var import_node8 = require("@remix-run/node");

// app/components/Dashboard/ChartSection.jsx
var import_remix_utils4 = require("remix-utils");
var import_Chart = __toESM(require_Chart()), import_react25 = require("@remix-run/react"), import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function ChartPanel() {
  let loaderdata = (0, import_react25.useLoaderData)().NewData, data = {
    options: {
      chart: {
        id: "Analysis For Registrations in 2023",
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
        height: "400px"
      },
      xaxis: {
        categories: loaderdata.data.map((ld) => ld.month),
        labels: {
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
        data: loaderdata.data.map((ld) => ld.count)
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
    "div",
    {
      className: "p-4 bg-white border dark:bg-gray-800 sm:p-6 dark:border-gray-700 2xl:col-span-2 shadow-sm rounded-lg border-gray-200",
      style: { height: "850px" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex-shrink-0 dark:text-white text-xl font-bold leading-none", children: [
            "T\u1ED5ng s\u1ED1 \u0111\u0103ng ki\u1EC3m n\u0103m : ",
            loaderdata.year
          ] }, void 0, !0, {
            fileName: "app/components/Dashboard/ChartSection.jsx",
            lineNumber: 76,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400", children: [
            "T\u1ED5ng: ",
            loaderdata.total
          ] }, void 0, !0, {
            fileName: "app/components/Dashboard/ChartSection.jsx",
            lineNumber: 79,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Dashboard/ChartSection.jsx",
          lineNumber: 75,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "main-chart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_remix_utils4.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Spinner, {}, void 0, !1, {
          fileName: "app/components/Dashboard/ChartSection.jsx",
          lineNumber: 85,
          columnNumber: 31
        }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Chart.default, { data }, void 0, !1, {
          fileName: "app/components/Dashboard/ChartSection.jsx",
          lineNumber: 86,
          columnNumber: 18
        }, this) }, void 0, !1, {
          fileName: "app/components/Dashboard/ChartSection.jsx",
          lineNumber: 85,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Dashboard/ChartSection.jsx",
          lineNumber: 84,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center justify-between pt-3 mt-2 border-t border-gray-200 dark:border-gray-700 sm:pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "inline-flex p-2" }, void 0, !1, {
            fileName: "app/components/Dashboard/ChartSection.jsx",
            lineNumber: 90,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex-shrink-0 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react25.Link, { className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700", children: [
            "Full Report",
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
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
                    lineNumber: 101,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Dashboard/ChartSection.jsx",
                lineNumber: 94,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Dashboard/ChartSection.jsx",
            lineNumber: 92,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Dashboard/ChartSection.jsx",
            lineNumber: 91,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Dashboard/ChartSection.jsx",
          lineNumber: 89,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Dashboard/ChartSection.jsx",
      lineNumber: 71,
      columnNumber: 5
    },
    this
  );
}

// app/components/Dashboard/RecentRegisPanel.jsx
var import_react26 = require("@remix-run/react");
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function RecentRegistrations() {
  let lists = (0, import_react26.useLoaderData)().recentList;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    "div",
    {
      className: "p-4 bg-white border dark:bg-gray-800 sm:p-6 dark:border-gray-700  shadow-sm rounded-lg border-gray-200 overflow-y-auto",
      style: { height: "850px" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h3", { className: "flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white", children: "Recent Registrations" }, void 0, !1, {
          fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "ul",
          {
            className: "text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-blue-400",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { className: "w-full inline-block p-5 rounded-tl-lg bg-gray-50 hover:bg-gray-100 dark:border-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600", children: "Registrations" }, void 0, !1, {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 17,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { className: "w-full inline-block p-5 rounded-tr-lg bg-gray-50 hover:bg-gray-100 dark:border-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600", children: "Date" }, void 0, !1, {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 20,
                columnNumber: 9
              }, this)
            ]
          },
          "list_tr",
          !0,
          {
            fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
            lineNumber: 13,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "ul",
          {
            className: "divine-y divide-gray-200 dark:divide-gray-700 ",
            children: lists.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { className: "py-3 sm:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react26.Link, { to: `/Inspections/${item.regisNum}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex items-center min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "ml-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "font-medium text-grey-900 truncate dark: text-white", children: item.car.numberPlate }, void 0, !1, {
                  fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                  lineNumber: 35,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex items-center justify-end flex-1 text-sm text-green-500 dark: text-green-400", children: item.regisNum }, void 0, !1, {
                  fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                  lineNumber: 38,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 34,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 33,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: formatDate(item.regisDate) }, void 0, !1, {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 43,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
              lineNumber: 32,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
              lineNumber: 31,
              columnNumber: 15
            }, this) }, item._id, !1, {
              fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
              lineNumber: 30,
              columnNumber: 13
            }, this))
          },
          "list",
          !1,
          {
            fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
            lineNumber: 25,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
          lineNumber: 24,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex items-center justify-between pt-3 mt-2 border-t border-gray-200 dark:border-gray-700 sm:pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "inline-flex p-2" }, void 0, !1, {
            fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex-shrink-0 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react26.Link, { className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700", children: [
            "Full Report",
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
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
                    lineNumber: 64,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
                lineNumber: 57,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
            lineNumber: 55,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
            lineNumber: 54,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Dashboard/RecentRegisPanel.jsx",
          lineNumber: 52,
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
var import_react27 = require("@remix-run/react"), import_flowbite_react5 = require("flowbite-react"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function DashBoardFooter() {
  let expired = (0, import_react27.useLoaderData)().ExpiredData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          import_flowbite_react5.Tooltip,
          {
            style: "light",
            placement: "right",
            animation: "duration-500",
            content: "Number of cars will be expired in less than 30 days",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Expired soon Registration:" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-green-500", children: expired.data.soon }, void 0, !1, {
          fileName: "app/components/Dashboard/DashBoardFooter.jsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/DashBoardFooter.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full dark:text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        import_react27.Link,
        {
          prefetch: "render",
          to: "expiredsoon",
          className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
          children: [
            "View Full List Of Cars",
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          import_flowbite_react5.Tooltip,
          {
            style: "light",
            placement: "right",
            animation: "duration-500",
            content: "Number of cars have already expired and need to regis again",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Expired Registration:" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-green-500", children: expired.data.expired }, void 0, !1, {
          fileName: "app/components/Dashboard/DashBoardFooter.jsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/DashBoardFooter.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        import_react27.Link,
        {
          prefetch: "render",
          to: "expired",
          className: "inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
          children: [
            "View Full List Of Cars",
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
              "svg",
              {
                className: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "https://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
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
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h3", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: "Expired Registration:" }, void 0, !1, {
          fileName: "app/components/Dashboard/DashBoardFooter.jsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("span", { className: "text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-white", children: expired.data.expired }, void 0, !1, {
          fileName: "app/components/Dashboard/DashBoardFooter.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard/DashBoardFooter.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full", style: { minHeight: "155px" } }, void 0, !1, {
        fileName: "app/components/Dashboard/DashBoardFooter.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/DashBoardFooter.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/DashBoardFooter.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/_home._main.jsx
var import_react28 = require("@remix-run/react"), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), meta4 = () => [{ title: "VietNam Registry" }];
function MainPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "px-4 pt-6 overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "grid gap-4 xl:grid-cols-2 2xl:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(ChartPanel, {}, void 0, !1, {
        fileName: "app/routes/_home._main.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(RecentRegistrations, {}, void 0, !1, {
        fileName: "app/routes/_home._main.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_home._main.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(DashBoardFooter, {}, void 0, !1, {
      fileName: "app/routes/_home._main.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home._main.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react28.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_home._main.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home._main.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
async function loader12({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node8.redirect)("/login");
  let info = await getOwnInfo(request2), url = "https://registrytotal.herokuapp.com/api/office/" + info.workFor._id + "/car", dataPass = {
    time: "2023",
    city: ""
  }, url_2 = "https://registrytotal.herokuapp.com/api/office/" + info.workFor._id + "/outdatecar", dataPass_1 = {
    status: "soon",
    city: "",
    info: "1"
  }, response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass)
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
  }), resData = await response.json();
  console.log(resData);
  let resData2 = await response_2.json(), resData3 = await response_3.json();
  return (0, import_node8.json)({
    NewData: resData,
    recentList: resData2,
    ExpiredData: resData3
  });
}

// app/routes/changepass.jsx
var changepass_exports = {};
__export(changepass_exports, {
  action: () => action6,
  default: () => changepassword,
  loader: () => loader13,
  meta: () => meta5
});
var import_react29 = require("@remix-run/react"), import_node9 = require("@remix-run/node");
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function meta5() {
  return [{ title: "Change Password" }];
}
function changepassword() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("section", { class: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { class: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { class: "w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h2", { class: "mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Change Password" }, void 0, !1, {
      fileName: "app/routes/changepass.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react29.Form, { class: "mt-1 space-y-4 lg:mt-5 md:space-y-5", method: "patch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("label", { for: "old-password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Old Password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 17,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("input", { type: "password", name: "old-password", id: "email", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "name@company.com", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 18,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 16,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("label", { for: "password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "New Password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 21,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("input", { type: "password", name: "password", id: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 22,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 20,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("label", { for: "confirm-password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Confirm password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 25,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("input", { type: "confirm-password", name: "confirm-password", id: "confirm-password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 26,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("button", { class: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Reset passwod" }, void 0, !1, {
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
async function loader13({ request: request2 }) {
  let token = await requireUserSession(request2);
  return token || (0, import_node9.redirect)("/login");
}
async function action6({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node9.redirect)("/login");
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
    return console.log(resData), resData.status !== "success" ? (console.log("deo thanh cong"), new Error("Invalid change")) : (0, import_node9.redirect)("/main");
  } catch (error) {
    if (error.status === 401)
      return error;
  }
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader14
});
var import_node10 = require("@remix-run/node");
async function loader14({ request: request2 }) {
  return console.log(request2), await destroyUserSession(request2);
}

// app/routes/_home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeLayout,
  loader: () => loader15
});
var import_react32 = require("@remix-run/react");

// app/components/UI/MainNavigation.jsx
var import_react30 = require("@remix-run/react"), import_react31 = require("react"), import_react_fontawesome3 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons3 = require("@fortawesome/free-solid-svg-icons"), import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function MainNavigation() {
  let data = (0, import_react30.useLoaderData)(), { isAdmin } = data, [toggle, setIsToggle] = (0, import_react31.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
    "aside",
    {
      id: "default-sidebar",
      className: "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0",
      "aria-label": "Sidebar",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
          import_react30.Link,
          {
            prefetch: "intent",
            to: "/",
            className: "flex items-center pl-2.5 mb-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                "img",
                {
                  src: "https://flowbite.com/docs/images/logo.svg",
                  className: "h-6 mr-3 sm:h-7",
                  alt: "Flowbite Logo"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 36,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white", children: "Flowbite" }, void 0, !1, {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 41,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/UI/MainNavigation.jsx",
            lineNumber: 31,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("ul", { className: "space-y-2 font-medium", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            import_react30.Link,
            {
              prefetch: "render",
              to: "/",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faGauge, size: "lg" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 53,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "ml-3", children: "Dashboard" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 54,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 48,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/MainNavigation.jsx",
            lineNumber: 47,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            import_react30.Link,
            {
              to: "/car",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faCar, size: "lg" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 76,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Cars" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 77,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 72,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/MainNavigation.jsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "button",
              {
                type: "button",
                className: "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                "aria-controls": "dropdown-example",
                "data-collapse-toggle": "dropdown-example",
                onClick: () => {
                  setIsToggle(!toggle);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faMagnifyingGlass, size: "lg" }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 88,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                    "span",
                    {
                      className: "flex-1 ml-3 text-left whitespace-nowrap",
                      "sidebar-toggle-item": "true",
                      children: "Search"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/UI/MainNavigation.jsx",
                      lineNumber: 89,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                    "svg",
                    {
                      "sidebar-toggle-item": "true",
                      className: "w-6 h-6",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          clipRule: "evenodd"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/UI/MainNavigation.jsx",
                          lineNumber: 102,
                          columnNumber: 19
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/UI/MainNavigation.jsx",
                      lineNumber: 95,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 81,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "ul",
              {
                id: "dropdown-example",
                className: `py-2 space-y-2 ${toggle ? "" : "hidden"}`,
                children: [
                  isAdmin === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                    import_react30.Link,
                    {
                      to: "/office",
                      className: "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faBuilding, size: "lg" }, void 0, !1, {
                          fileName: "app/components/UI/MainNavigation.jsx",
                          lineNumber: 119,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Centre" }, void 0, !1, {
                          fileName: "app/components/UI/MainNavigation.jsx",
                          lineNumber: 120,
                          columnNumber: 23
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/UI/MainNavigation.jsx",
                      lineNumber: 115,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 114,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                    import_react30.Link,
                    {
                      to: "/Inspections",
                      className: "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faCertificate, size: "lg" }, void 0, !1, {
                          fileName: "app/components/UI/MainNavigation.jsx",
                          lineNumber: 131,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Inspections" }, void 0, !1, {
                          fileName: "app/components/UI/MainNavigation.jsx",
                          lineNumber: 132,
                          columnNumber: 21
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/UI/MainNavigation.jsx",
                      lineNumber: 127,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/UI/MainNavigation.jsx",
                    lineNumber: 126,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/MainNavigation.jsx",
                lineNumber: 109,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/UI/MainNavigation.jsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          isAdmin === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            import_react30.Link,
            {
              to: "/addStaff",
              className: "flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faUserPlus, size: "lg" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 145,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Add Staff" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 146,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 141,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/MainNavigation.jsx",
            lineNumber: 140,
            columnNumber: 15
          }, this),
          isAdmin === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            import_react30.Link,
            {
              to: "/office/add",
              className: "flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faBuilding, size: "lg" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 158,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Add Centre" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 159,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 154,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/MainNavigation.jsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            import_react30.Link,
            {
              prefetch: "render",
              to: "/info",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faAddressCard, size: "lg" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 171,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "ml-3", children: "About" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 172,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 166,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/MainNavigation.jsx",
            lineNumber: 165,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            import_react30.Link,
            {
              to: "/logout",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 self-end",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faRightFromBracket, size: "lg" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 180,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Sign Out" }, void 0, !1, {
                  fileName: "app/components/UI/MainNavigation.jsx",
                  lineNumber: 181,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/MainNavigation.jsx",
              lineNumber: 176,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/MainNavigation.jsx",
            lineNumber: 175,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/MainNavigation.jsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/MainNavigation.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/MainNavigation.jsx",
      lineNumber: 25,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/UI/MainNavigation.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/_home.jsx
var import_react33 = require("@remix-run/react"), import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function HomeLayout() {
  let userData = (0, import_react33.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "page", style: { overflow: "auto" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(MainNavigation, {}, void 0, !1, {
      fileName: "app/routes/_home.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("section", { className: "p-4 sm:ml-64 min-h-screen dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react32.Outlet, { context: userData }, void 0, !1, {
      fileName: "app/routes/_home.jsx",
      lineNumber: 12,
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
async function loader15({ request: request2 }) {
  return await getOwnInfo(request2);
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action7,
  default: () => LoginPage,
  loader: () => loader16
});

// app/components/UI/Login.jsx
var import_react34 = require("@remix-run/react"), import_react_fontawesome4 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons4 = require("@fortawesome/free-solid-svg-icons"), import_flowbite_react6 = require("flowbite-react"), import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function Login() {
  let data = (0, import_react34.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("section", { className: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      "a",
      {
        href: "#",
        className: "flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            "img",
            {
              className: "w-8 h-8 mr-2",
              src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg",
              alt: "logo"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/Login.jsx",
              lineNumber: 14,
              columnNumber: 11
            },
            this
          ),
          "Flowbite"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h1", { className: "text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Welcome to VietNam Registry" }, void 0, !1, {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h6", { className: "italic text-center text-md mt-1 dark:text-white", children: "Enter your credentials to access your account" }, void 0, !1, {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      data ? /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_flowbite_react6.Alert, { color: "failure", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
          import_react_fontawesome4.FontAwesomeIcon,
          {
            icon: import_free_solid_svg_icons4.faCircleInfo,
            style: {
              "--fa-primary-color": "#ff2600",
              "--fa-secondary-color": "#ff2600"
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/Login.jsx",
            lineNumber: 31,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "font-medium", children: data.message }, void 0, !1, {
          fileName: "app/components/UI/Login.jsx",
          lineNumber: 39,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/Login.jsx",
          lineNumber: 38,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 30,
        columnNumber: 15
      }, this) : "",
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react34.Form, { className: "space-y-4 md:space-y-6", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
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
              lineNumber: 47,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
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
              lineNumber: 53,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/Login.jsx",
          lineNumber: 46,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
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
              lineNumber: 62,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
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
              lineNumber: 68,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/Login.jsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("button", { className: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Sign in" }, void 0, !1, {
          fileName: "app/components/UI/Login.jsx",
          lineNumber: 76,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/Login.jsx",
        lineNumber: 45,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/Login.jsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/Login.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/Login.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/UI/Login.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/login.jsx
var import_node11 = require("@remix-run/node"), import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function LoginPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Login, {}, void 0, !1, {
    fileName: "app/routes/login.jsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
async function loader16({ request: request2 }) {
  return await getUserFromSession(request2) ? (0, import_node11.redirect)("/") : null;
}
async function action7({ request: request2 }) {
  let formData = await request2.formData(), data = {
    email: formData.get("email"),
    password: formData.get("password")
  };
  try {
    return await login(data.email, data.password);
  } catch (error) {
    return (0, import_node11.json)({ message: error.message });
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
  "routes/_home.car.$numberPlate.addinspection": {
    id: "routes/_home.car.$numberPlate.addinspection",
    parentId: "routes/_home",
    path: "car/:numberPlate/addinspection",
    index: void 0,
    caseSensitive: void 0,
    module: home_car_numberPlate_addinspection_exports
  },
  "routes/_home.car.$numberPlate._index": {
    id: "routes/_home.car.$numberPlate._index",
    parentId: "routes/_home",
    path: "car/:numberPlate",
    index: !0,
    caseSensitive: void 0,
    module: home_car_numberPlate_index_exports
  },
  "routes/_home.Inspections._index": {
    id: "routes/_home.Inspections._index",
    parentId: "routes/_home",
    path: "Inspections",
    index: !0,
    caseSensitive: void 0,
    module: home_Inspections_index_exports
  },
  "routes/_home.office.$id.$userID": {
    id: "routes/_home.office.$id.$userID",
    parentId: "routes/_home",
    path: "office/:id/:userID",
    index: void 0,
    caseSensitive: void 0,
    module: home_office_id_userID_exports
  },
  "routes/_home._main.expiredsoon": {
    id: "routes/_home._main.expiredsoon",
    parentId: "routes/_home._main",
    path: "expiredsoon",
    index: void 0,
    caseSensitive: void 0,
    module: home_main_expiredsoon_exports
  },
  "routes/_home.office.$id._index": {
    id: "routes/_home.office.$id._index",
    parentId: "routes/_home",
    path: "office/:id",
    index: !0,
    caseSensitive: void 0,
    module: home_office_id_index_exports
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
    parentId: "routes/_home",
    path: "office",
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
    parentId: "routes/_home",
    path: "office/add",
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
  "routes/_home.addStaff": {
    id: "routes/_home.addStaff",
    parentId: "routes/_home",
    path: "addStaff",
    index: void 0,
    caseSensitive: void 0,
    module: home_addStaff_exports
  },
  "routes/forgotpassword": {
    id: "routes/forgotpassword",
    parentId: "root",
    path: "forgotpassword",
    index: void 0,
    caseSensitive: void 0,
    module: route16
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
