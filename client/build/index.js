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
    assets_manifest_default = { version: "d7d86780", entry: { module: "/build/entry.client-SZPHO35B.js", imports: ["/build/_shared/chunk-EYKN6LYK.js", "/build/_shared/chunk-RQ7GWW3B.js", "/build/_shared/chunk-DG4HR4CT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VDVGBY7J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home": { id: "routes/_home", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_home-MS3IOX2L.js", imports: ["/build/_shared/chunk-4JHE5YBV.js", "/build/_shared/chunk-2L3TLXHT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.Inspections": { id: "routes/_home.Inspections", parentId: "routes/_home", path: "Inspections", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.Inspections-VYDMY45U.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.addStaff": { id: "routes/_home.addStaff", parentId: "routes/_home", path: "addStaff", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.addStaff-E6LVZI6F.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.info": { id: "routes/_home.info", parentId: "routes/_home", path: "info", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.info-X7TSR5NA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.main": { id: "routes/_home.main", parentId: "routes/_home", path: "main", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.main-ZEQVBPVT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.search": { id: "routes/_home.search", parentId: "routes/_home", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.search-5XEW27VJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DBKWAOE7.js", imports: ["/build/_shared/chunk-2L3TLXHT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/changepass": { id: "routes/changepass", parentId: "root", path: "changepass", index: void 0, caseSensitive: void 0, module: "/build/routes/changepass-WNZHZ63P.js", imports: ["/build/_shared/chunk-2L3TLXHT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgotpassword": { id: "routes/forgotpassword", parentId: "root", path: "forgotpassword", index: void 0, caseSensitive: void 0, module: "/build/routes/forgotpassword-N6CMP3FP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-DF7WXL56.js", imports: ["/build/_shared/chunk-4JHE5YBV.js", "/build/_shared/chunk-2L3TLXHT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-YO44EPFE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-D7D86780.js" };
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
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_server());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-DJESBEI4.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function links() {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
    }
  ];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/_home.Inspections.jsx
var home_Inspections_exports = {};
__export(home_Inspections_exports, {
  default: () => addInpectionsPage
});

// app/components/InspectionsForm.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function InspectionsForm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { class: "text-gray-600 body-font", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { class: "container flex flex-wrap px-3 py-24 mx-auto items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { class: "md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "m-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { class: "sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900 text-center", children: "1. PH\u01AF\u01A0NG TI\u1EC6N \u2002 (VEHICLE)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 7,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left flex w-full text-black mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1", children: " Bi\u1EC3n \u0111\u0103ng k\xFD:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 11,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1", children: "S\u1ED1 qu\u1EA3n l\xFD: " }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 12,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 10,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left flex w-full text-black italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1", children: "(Registration Number)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 15,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1", children: "(Vehicle Inspection No.)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 16,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          "Lo\u1EA1i Ph\u01B0\u01A1ng ti\u1EC7n: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Type)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 19,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          "Nh\xE3n Hi\u1EC7u: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Mark)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 22,
            columnNumber: 26
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          "S\u1ED1 Lo\u1EA1i: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Model Code)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 25,
            columnNumber: 24
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          "S\u1ED1 M\xE1y: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Engine Number)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 28,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          "S\u1ED1 Khung:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Chasis Number)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 31,
            columnNumber: 24
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left flex w-full text-black mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-initial w-3/4", children: "N\u0103m, N\u01B0\u1EDBc s\u1EA3n xu\u1EA5t:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 34,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-initial w-32", children: "Ni\xEAn H\u1EA1n SD:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 35,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left flex w-full text-black italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-initial w-3/4", children: "(Manufactured Year and Country)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 38,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-initial w-32", children: "(Lifetime limit to)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 41,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left flex w-full text-black mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-initial w-3/5", children: [
            "Kinh doanh v\u1EADn t\u1EA3i",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: [
              "(Commercial Use)",
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/InspectionsForm.jsx",
                  lineNumber: 48,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/InspectionsForm.jsx",
              lineNumber: 46,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-initial ms-3", children: [
            "C\u1EA3i t\u1EA1o",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: [
              "(Modification)",
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/InspectionsForm.jsx",
                  lineNumber: 58,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/InspectionsForm.jsx",
              lineNumber: 56,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 54,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 6,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "m-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900 text-center", children: "2. TH\xD4NG S\u1ED0 K\u1EF8 THU\u1EACT\u2002(SPECIFICATIONS)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left flex w-full text-black mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1", children: "C\xF4ng th\u1EE9c b\xE1nh xe:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1", children: "V\u1EBFt b\xE1nh xe:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 72,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left flex w-full text-black italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1", children: "(Wheel Formula)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1", children: "(Wheel Tread)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          "K\xEDch th\u01B0\u1EDBc bao:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Overall Dimension)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 80,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block w-full", children: [
            "KT khoang h\xE0nh l\xFD l\u1EDBn nh\u1EA5t:",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Largest luggage container Dimension)" }, void 0, !1, {
              fileName: "app/components/InspectionsForm.jsx",
              lineNumber: 85,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block w-full", children: "data" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 90,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          "Chi\u1EC1u d\xE0i c\u01A1 s\u1EDF:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(WheelBase)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 94,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          "Kh\u1ED1i l\u01B0\u1EE3ng b\u1EA3n th\xE2n:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(KerbMass)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 98,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block w-full", children: "Kh\u1ED1i l\u01B0\u1EE3ng h\xE0ng CC theo TK/CP TGGT:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize Payload)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 104,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block w-full", children: "Kh\u1ED1i l\u01B0\u1EE3ng to\xE0n b\u1ED9 theo TK/CP TGGT:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 109,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize total mass)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 112,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionsForm.jsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { class: "flex flex-col md:w-1/2 md:pl-12 items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block w-full", children: "Kh\u1ED1i l\u01B0\u1EE3ng k\xE9o theo theo TK/CP TGGT:" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize towed mass)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 124,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block w-full", children: "S\u1ED1 ng\u01B0\u1EDDi cho ph\xE9p ch\u1EDF:" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Permission No. of Pers Carried: seat, stood place, laying place)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 130,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 128,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
        "Lo\u1EA1i nhi\xEAn li\u1EC7u:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Type of Fuel Used)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 136,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 134,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
        "Th\u1EC3 t\xEDch l\xE0m vi\u1EC7c c\u1EE7a \u0111\u1ED9ng c\u01A1:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Engine displacement)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 140,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
        "C\xF4ng su\u1EA5t l\u1EDBn nh\u1EA5t/t\u1ED1c \u0111\u1ED9 quay:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Max. output/rpm)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 144,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 142,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          "S\u1ED1 l\u01B0\u1EE3ng l\u1ED1p, c\u1EE1 l\u1ED1p/tr\u1EE5c:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Number of Tires; Tire size/axle)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 149,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 147,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "d\xE2t1" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 154,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "d\xE2t2" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 155,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 153,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 146,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
        "C\xF3 l\u1EAFp thi\u1EBFt b\u1ECB gi\xE1m s\xE1t h\xE0nh tr\xECnh:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Equipped with Tachography)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ms-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            type: "checkbox",
            className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 162,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 158,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: [
        "Kh\xF4ng c\u1EA5p tem ki\u1EC3m \u0111\u1ECBnh",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "italic text-sm", children: "(Inspection Stamp was not issued)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ms-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            type: "checkbox",
            className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 172,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 171,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 168,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container flex flex-wrap mx-auto items-center pt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-initial w-1/3 pt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: "S\u1ED1 phi\u1EBFu ki\u1EC3m \u0111\u1ECBnh:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 181,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "italic text-sm text-black", children: "(Inspection Report No)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-black text-left", children: " data" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-left text-black w-full mt-1", children: "C\xF3 hi\u1EC7u l\u1EF1c \u0111\u1EBFn h\u1EBFt ng\xE0y:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 188,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "italic text-sm text-black", children: [
            "(Valid Until)",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-black text-left", children: " data" }, void 0, !1, {
              fileName: "app/components/InspectionsForm.jsx",
              lineNumber: 193,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 191,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-initial w-2/3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center text-black w-full mt-1", children: "H\xE0 N\u1ED9i, ng\xE0y ... th\xE1ng ... n\u0103m" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "italic text-sm text-black text-center", children: "(Issue on Date/Month/Year)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 200,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "font-medium title-font text-center text-black", children: "\u0110\u01A0N V\u1ECA KI\u1EC2M \u0110\u1ECANH" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 204,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 203,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 196,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 179,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionsForm.jsx",
      lineNumber: 119,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/InspectionsForm.jsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/InspectionsForm.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/_home.Inspections.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function addInpectionsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InspectionsForm, {}, void 0, !1, {
    fileName: "app/routes/_home.Inspections.jsx",
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

// app/routes/_home.addStaff.jsx
var home_addStaff_exports = {};
__export(home_addStaff_exports, {
  action: () => action,
  default: () => addStaffPage,
  loader: () => loader,
  meta: () => meta
});

// app/components/AddStaffForm.jsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function AddForm() {
  let data = (0, import_react3.useLoaderData)();
  console.log(data);
  let option = data.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { children: dt.name }, dt._id, !1, {
    fileName: "app/components/AddStaffForm.jsx",
    lineNumber: 6,
    columnNumber: 37
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 mb-6 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
            lineNumber: 11,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
            lineNumber: 17,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
            lineNumber: 28,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            type: "number",
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
            lineNumber: 34,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
            lineNumber: 45,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
            lineNumber: 51,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
            lineNumber: 79,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
            lineNumber: 85,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
            lineNumber: 100,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            type: "number",
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
            lineNumber: 106,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
            lineNumber: 117,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
            lineNumber: 123,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AddStaffForm.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "ADD" }, void 0, !1, {
      fileName: "app/components/AddStaffForm.jsx",
      lineNumber: 144,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AddStaffForm.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/services/auth.server.js
var import_node2 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "session",
    path: "/",
    secure: !1,
    secrets: ["S3SR$T"],
    sameSite: !0,
    maxAge: 30 * 24 * 60 * 60,
    // 30 days
    httpOnly: !0
  }
});
async function createUserSession(sessionToken, redirectPath) {
  let session = await sessionStorage.getSession();
  return console.log(sessionToken), session.set("sessionToken", sessionToken), (0, import_node2.redirect)(redirectPath, {
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
async function login(email, password) {
  let session = await sessionStorage.getSession(), user = await (await fetch("https://registrytotal.herokuapp.com/login", {
    method: "POST",
    credentials: "include",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  })).json();
  return user ? createUserSession(user.session, "/main") : (session.flash("error", "Invalid login"), (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }));
}

// app/routes/_home.addStaff.jsx
var import_node3 = require("@remix-run/node"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function meta() {
  return [{ title: "Add Staff" }];
}
function addStaffPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AddForm, {}, void 0, !1, {
    fileName: "app/routes/_home.addStaff.jsx",
    lineNumber: 9,
    columnNumber: 12
  }, this);
}
async function loader({ request: request2 }) {
  let response = await requireUserSession(request2);
  return response ? await (await fetch("https://registrytotal.herokuapp.com/api/office", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${response}`,
      "content-type": "application/json"
    }
  })).json() : (0, import_node3.redirect)("/login");
}
async function action({ request: request2 }) {
  let formData = await request2.formData(), data = {
    email: formData.get("email"),
    name: formData.get("name"),
    workFor: formData.get("workFor")
  };
  return console.log(data), null;
}

// server-entry-module:@remix-run/dev/server-build
var route3 = __toESM(require_forgotpassword());

// app/routes/_home.search.jsx
var home_search_exports = {};
__export(home_search_exports, {
  default: () => SearchPage
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SearchPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "This is for searching" }, void 0, !1, {
    fileName: "app/routes/_home.search.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/_home.info.jsx
var home_info_exports = {};
__export(home_info_exports, {
  default: () => Infopage
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Infopage() {
  let info = (0, import_react4.useMatches)().find((match) => match.id === "routes/_home").data, { name, SSN, dateOfBirth, phone } = info.data;
  var date = new Date(dateOfBirth), options = { month: "numeric", day: "numeric", year: "numeric" }, formattedDate = date.toLocaleDateString("en-GB", options);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react4.Form, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid gap-6 mb-6 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "label",
          {
            htmlFor: "name",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Name"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 21,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 27,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "label",
          {
            htmlFor: "SSN",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Social Security Number"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 38,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 44,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "label",
          {
            htmlFor: "dob",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Date Of Birth"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 56,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "input",
          {
            type: "date",
            name: "dob",
            id: "dob",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "dd/mm/yyyy",
            required: !0,
            defaultValue: dateOfBirth
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 62,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "label",
          {
            htmlFor: "work",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Works"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 73,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 79,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "label",
          {
            htmlFor: "phone",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Phone"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 91,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "input",
          {
            type: "number",
            id: "phone",
            name: "phone",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "flowbite.com",
            required: !0,
            defaultValue: phone
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 97,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "label",
          {
            htmlFor: "email",
            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            children: "Email"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 108,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
            fileName: "app/routes/_home.info.jsx",
            lineNumber: 114,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_home.info.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2", children: "Save" }, void 0, !1, {
      fileName: "app/routes/_home.info.jsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react4.Link, { to: "/changepass", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "text-white bg-pink-400 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "Change Password" }, void 0, !1, {
      fileName: "app/routes/_home.info.jsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.info.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.info.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/_home.main.jsx
var home_main_exports = {};
__export(home_main_exports, {
  default: () => MainPage,
  meta: () => meta2
});
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta2 = () => [{ title: "VietNam Registry" }];
function MainPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "This after login" }, void 0, !1, {
    fileName: "app/routes/_home.main.jsx",
    lineNumber: 7,
    columnNumber: 12
  }, this);
}

// app/routes/changepass.jsx
var changepass_exports = {};
__export(changepass_exports, {
  action: () => action2,
  default: () => changepassword,
  loader: () => loader2,
  meta: () => meta3
});
var import_react5 = require("@remix-run/react"), import_node4 = require("@remix-run/node");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function meta3() {
  return [{ title: "Change Password" }];
}
function changepassword() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { class: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { class: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { class: "w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { class: "mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Change Password" }, void 0, !1, {
      fileName: "app/routes/changepass.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react5.Form, { class: "mt-1 space-y-4 lg:mt-5 md:space-y-5", method: "patch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { for: "old-password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Old Password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 17,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "password", name: "old-password", id: "email", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "name@company.com", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 18,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 16,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { for: "password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "New Password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 21,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "password", name: "password", id: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 22,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 20,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { for: "confirm-password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Confirm password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 25,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "confirm-password", name: "confirm-password", id: "confirm-password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 26,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { class: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Reset passwod" }, void 0, !1, {
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
async function loader2({ request: request2 }) {
  let token = await requireUserSession(request2);
  return token || (0, import_node4.redirect)("/login");
}
async function action2({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node4.redirect)("/login");
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
    return console.log(resData), resData.status !== "success" ? (console.log("deo thanh cong"), new Error("Invalid change")) : (0, import_node4.redirect)("/main");
  } catch (error) {
    if (error.status === 401)
      return error;
  }
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta4
});
var import_react6 = require("@remix-run/react");
var import_node5 = require("@remix-run/node"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), meta4 = () => [{ title: "VietNam Registry" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Link, { to: "login", children: "login pls" }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
async function loader3({ request: request2 }) {
  return await requireUserSession(request2) ? (0, import_node5.redirect)("/main") : (0, import_node5.redirect)("/login");
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader4
});
var import_node6 = require("@remix-run/node");
async function loader4({ request: request2 }) {
  return console.log(request2), await destroyUserSession(request2);
}

// app/routes/_home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeLayout,
  loader: () => loader5
});
var import_react10 = require("@remix-run/react");

// app/components/MainNavigation.jsx
var import_react7 = require("@remix-run/react"), import_react8 = require("@remix-run/react"), import_react9 = require("react"), import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function MainNavigation() {
  let data = (0, import_react7.useLoaderData)(), { isAdmin } = data, [toggle, setIsToggle] = (0, import_react9.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "aside",
    {
      id: "default-sidebar",
      className: "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0",
      "aria-label": "Sidebar",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react7.Link, { to: "/info", className: "flex items-center pl-2.5 mb-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "img",
            {
              src: "https://flowbite.com/docs/images/logo.svg",
              className: "h-6 mr-3 sm:h-7",
              alt: "Flowbite Logo"
            },
            void 0,
            !1,
            {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 32,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white", children: "Flowbite" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 37,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { className: "space-y-2 font-medium", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react7.Link,
            {
              to: "/main",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faGauge, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 48,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "ml-3", children: "Dashboard" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 49,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 44,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react7.Link,
            {
              to: "/login",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faChartLine, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 57,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Analytics" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 58,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 53,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faMagnifyingGlass, size: "lg" }, void 0, !1, {
                    fileName: "app/components/MainNavigation.jsx",
                    lineNumber: 69,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    "span",
                    {
                      className: "flex-1 ml-3 text-left whitespace-nowrap",
                      "sidebar-toggle-item": "true",
                      children: "Search"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/MainNavigation.jsx",
                      lineNumber: 70,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    "svg",
                    {
                      "sidebar-toggle-item": "true",
                      className: "w-6 h-6",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          clipRule: "evenodd"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/MainNavigation.jsx",
                          lineNumber: 83,
                          columnNumber: 19
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/MainNavigation.jsx",
                      lineNumber: 76,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/MainNavigation.jsx",
                lineNumber: 62,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { id: "dropdown-example", className: `py-2 space-y-2 ${toggle ? "" : "hidden"}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "a",
                {
                  href: "#",
                  className: "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faUser, size: "lg" }, void 0, !1, {
                      fileName: "app/components/MainNavigation.jsx",
                      lineNumber: 96,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Staff" }, void 0, !1, {
                      fileName: "app/components/MainNavigation.jsx",
                      lineNumber: 97,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 92,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/MainNavigation.jsx",
                lineNumber: 91,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "a",
                {
                  href: "#",
                  className: "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faBuilding, size: "lg" }, void 0, !1, {
                      fileName: "app/components/MainNavigation.jsx",
                      lineNumber: 107,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Centre" }, void 0, !1, {
                      fileName: "app/components/MainNavigation.jsx",
                      lineNumber: 108,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 103,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/MainNavigation.jsx",
                lineNumber: 102,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                import_react7.Link,
                {
                  to: "/Inspections",
                  className: "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faCar, size: "lg" }, void 0, !1, {
                      fileName: "app/components/MainNavigation.jsx",
                      lineNumber: 118,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Inspections" }, void 0, !1, {
                      fileName: "app/components/MainNavigation.jsx",
                      lineNumber: 119,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 114,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/MainNavigation.jsx",
                lineNumber: 113,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 90,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          isAdmin === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react7.Link,
            {
              to: "/addStaff",
              className: "flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faUserPlus, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 132,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Add Staff" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 133,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 128,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          isAdmin === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react7.Link,
            {
              to: "/addStaff",
              className: "flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faBuilding, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 145,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Add Centre" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 146,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 141,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 140,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react7.Link, { to: "/addInspections", className: "flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faFileLines, size: "lg" }, void 0, !1, {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 154,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: " Create Inspections" }, void 0, !1, {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 155,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 153,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 152,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_react7.Link,
            {
              to: "/logout",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 self-end",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faRightFromBracket, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 163,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Sign Out" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 164,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 159,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 158,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 25,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/_home.jsx
var import_node7 = require("@remix-run/node"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function HomeLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(MainNavigation, {}, void 0, !1, {
      fileName: "app/routes/_home.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "p-4 sm:ml-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_home.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
async function loader5({ request: request2 }) {
  let response = await requireUserSession(request2);
  return response ? await (await fetch("https://registrytotal.herokuapp.com/api/owninfo", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${response}`,
      "content-type": "application/json"
    }
  })).json() : (0, import_node7.redirect)("/login");
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => LoginPage,
  links: () => links2,
  loader: () => loader6
});

// app/components/Login.jsx
var import_react11 = require("@remix-run/react"), import_react_fontawesome2 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Login() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { className: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "#", className: "flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { className: "w-8 h-8 mr-2", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg", alt: "logo" }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      "Flowbite"
    ] }, void 0, !0, {
      fileName: "app/components/Login.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Sign in to your account" }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 30,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react11.Form, { className: "space-y-4 md:space-y-6", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "email", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Your email" }, void 0, !1, {
            fileName: "app/components/Login.jsx",
            lineNumber: 35,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "email", name: "email", id: "email", className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "name@company.com", required: !0 }, void 0, !1, {
            fileName: "app/components/Login.jsx",
            lineNumber: 36,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Login.jsx",
          lineNumber: 34,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Password" }, void 0, !1, {
            fileName: "app/components/Login.jsx",
            lineNumber: 39,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "password", name: "password", id: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: !0 }, void 0, !1, {
            fileName: "app/components/Login.jsx",
            lineNumber: 40,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Login.jsx",
          lineNumber: 38,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Sign in" }, void 0, !1, {
          fileName: "app/components/Login.jsx",
          lineNumber: 53,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-sm font-light text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "#", className: "font-medium text-primary-600 hover:underline dark:text-primary-500", children: "Forgot Password" }, void 0, !1, {
          fileName: "app/components/Login.jsx",
          lineNumber: 55,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/Login.jsx",
          lineNumber: 54,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Login.jsx",
        lineNumber: 33,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Login.jsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Login.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Login.jsx",
    lineNumber: 23,
    columnNumber: 3
  }, this) }, void 0, !1, {
    fileName: "app/components/Login.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/styles/LoginBox.css
var LoginBox_default = "/build/_assets/LoginBox-PCWKDLI7.css";

// app/routes/login.jsx
var import_node8 = require("@remix-run/node"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function LoginPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Login, {}, void 0, !1, {
    fileName: "app/routes/login.jsx",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}
async function loader6({ request: request2 }) {
  return await getUserFromSession(request2) ? (0, import_node8.redirect)("/main") : null;
}
async function action3({ request: request2 }) {
  let formData = await request2.formData(), data = {
    email: formData.get("email"),
    password: formData.get("password")
  };
  try {
    return await login(data.email, data.password);
  } catch (error) {
    if (error.status === 401)
      return error;
  }
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: LoginBox_default
    }
  ];
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
  "routes/_home.Inspections": {
    id: "routes/_home.Inspections",
    parentId: "routes/_home",
    path: "Inspections",
    index: void 0,
    caseSensitive: void 0,
    module: home_Inspections_exports
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
    module: route3
  },
  "routes/_home.search": {
    id: "routes/_home.search",
    parentId: "routes/_home",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: home_search_exports
  },
  "routes/_home.info": {
    id: "routes/_home.info",
    parentId: "routes/_home",
    path: "info",
    index: void 0,
    caseSensitive: void 0,
    module: home_info_exports
  },
  "routes/_home.main": {
    id: "routes/_home.main",
    parentId: "routes/_home",
    path: "main",
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
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
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
