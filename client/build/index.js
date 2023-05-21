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
    assets_manifest_default = { version: "f0da6a84", entry: { module: "/build/entry.client-5IFTPVKU.js", imports: ["/build/_shared/chunk-ION4225G.js", "/build/_shared/chunk-LVPVSEIS.js", "/build/_shared/chunk-7HUBQURA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZURHWEY5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_home": { id: "routes/_home", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_home-VSWUZORR.js", imports: ["/build/_shared/chunk-FJYDJ5MU.js", "/build/_shared/chunk-72SKTM3J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.Inspections.$id": { id: "routes/_home.Inspections.$id", parentId: "routes/_home", path: "Inspections/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.Inspections.$id-KW3RYO5Q.js", imports: ["/build/_shared/chunk-TQWPVPFR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.Inspections._index": { id: "routes/_home.Inspections._index", parentId: "routes/_home", path: "Inspections", index: !0, caseSensitive: void 0, module: "/build/routes/_home.Inspections._index-4VYPZHUV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.Inspections.add": { id: "routes/_home.Inspections.add", parentId: "routes/_home", path: "Inspections/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.Inspections.add-GMFNH37M.js", imports: ["/build/_shared/chunk-OYPMSNFW.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.addStaff": { id: "routes/_home.addStaff", parentId: "routes/_home", path: "addStaff", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.addStaff-UUCS2C2I.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.info._index": { id: "routes/_home.info._index", parentId: "routes/_home", path: "info", index: !0, caseSensitive: void 0, module: "/build/routes/_home.info._index-7UT2LLD7.js", imports: ["/build/_shared/chunk-QGRJQUMK.js", "/build/_shared/chunk-TQWPVPFR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.info.edit": { id: "routes/_home.info.edit", parentId: "routes/_home", path: "info/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.info.edit-V7J2KOUU.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.main": { id: "routes/_home.main", parentId: "routes/_home", path: "main", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.main-RVUQ6ZSU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office.$id.$userID": { id: "routes/_home.office.$id.$userID", parentId: "routes/_home", path: "office/:id/:userID", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office.$id.$userID-RZUEFGXG.js", imports: ["/build/_shared/chunk-QGRJQUMK.js", "/build/_shared/chunk-TQWPVPFR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office.$id._index": { id: "routes/_home.office.$id._index", parentId: "routes/_home", path: "office/:id", index: !0, caseSensitive: void 0, module: "/build/routes/_home.office.$id._index-IMQNF35J.js", imports: ["/build/_shared/chunk-OYPMSNFW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office._index": { id: "routes/_home.office._index", parentId: "routes/_home", path: "office", index: !0, caseSensitive: void 0, module: "/build/routes/_home.office._index-6I2GKWJS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.office.add": { id: "routes/_home.office.add", parentId: "routes/_home", path: "office/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.office.add-NNF7LJKF.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.search": { id: "routes/_home.search", parentId: "routes/_home", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.search-VDEN4T6E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WIB5B6TS.js", imports: ["/build/_shared/chunk-OYPMSNFW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/changepass": { id: "routes/changepass", parentId: "root", path: "changepass", index: void 0, caseSensitive: void 0, module: "/build/routes/changepass-VBSXBJ23.js", imports: ["/build/_shared/chunk-OYPMSNFW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgotpassword": { id: "routes/forgotpassword", parentId: "root", path: "forgotpassword", index: void 0, caseSensitive: void 0, module: "/build/routes/forgotpassword-HZRGZ7WH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-LX3EUTNF.js", imports: ["/build/_shared/chunk-FJYDJ5MU.js", "/build/_shared/chunk-OYPMSNFW.js", "/build/_shared/chunk-72SKTM3J.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-Q4KFFCZD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-F0DA6A84.js" };
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
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_css_bundle = __toESM(require_server());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-6PY5XJNR.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
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
function meta() {
  return [{ title: "Vietnam Registry" }];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "link",
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css",
          rel: "stylesheet"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "dark", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react3.useRouteError)(), backHandler = () => (0, import_react2.useNavigate)()("..");
  return (0, import_react3.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.data }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 66,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dark m-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-bold dark:text-red-600", children: "Error" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { onClick: backHandler, children: "Please back to the previous page" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 78,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 82,
    columnNumber: 12
  }, this);
}

// app/routes/_home.Inspections._index.jsx
var home_Inspections_index_exports = {};
__export(home_Inspections_index_exports, {
  default: () => InspectionSearchPage
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function InspectionSearchPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: " this is f\u1ECF searchhing \xEDnepctions" }, void 0, !1, {
    fileName: "app/routes/_home.Inspections._index.jsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/_home.office.$id.$userID.jsx
var home_office_id_userID_exports = {};
__export(home_office_id_userID_exports, {
  default: () => StaffInfoPage,
  loader: () => loader
});

// app/components/StaffInfo.jsx
var import_react4 = require("@remix-run/react");

// app/images/ava.png
var ava_default = "/build/_assets/ava-RLJVMXTQ.png";

// app/components/StaffInfo.jsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");

// app/util/formatDate.js
function formatDate(Needdate) {
  var date = new Date(Needdate);
  let year = date.getFullYear(), month = ("0" + (date.getMonth() + 1)).slice(-2);
  return `${("0" + date.getDate()).slice(-2)}-${month}-${year}`;
}

// app/components/StaffInfo.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function StaffInfo() {
  let info = (0, import_react4.useLoaderData)(), { name, SSN, dateOfBirth, phone } = info.data, formattedDate = formatDate(dateOfBirth), inspection = info.registed;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " m-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "mx-0 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-7xl lg:pt-5 items-stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-5 max-w-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between md:space-x-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "img",
            {
              className: "h-16 w-16 lg:h-24 lg:w-24 rounded-full border border-white/10",
              src: ava_default,
              alt: "image"
            },
            void 0,
            !1,
            {
              fileName: "app/components/StaffInfo.jsx",
              lineNumber: 21,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "span",
            {
              className: "absolute inset-0 rounded-full shadow-inner",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/components/StaffInfo.jsx",
              lineNumber: 26,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/StaffInfo.jsx",
          lineNumber: 20,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/StaffInfo.jsx",
          lineNumber: 19,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pt-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-xl font-semibold", children: name }, void 0, !1, {
            fileName: "app/components/StaffInfo.jsx",
            lineNumber: 33,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-lg font-light text-black-500", children: "Nh\xE2n vi\xEAn t\u1EA1i: \u0110\xE2u \u0111\xF3" }, void 0, !1, {
            fileName: "app/components/StaffInfo.jsx",
            lineNumber: 34,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/StaffInfo.jsx",
          lineNumber: 32,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/StaffInfo.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/StaffInfo.jsx",
        lineNumber: 17,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-24 text-md font-light dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "edit", className: "flex flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "mb-5 text-lg font-bold ", children: "Th\xF4ng tin c\xE1 nh\xE2n" }, void 0, !1, {
            fileName: "app/components/StaffInfo.jsx",
            lineNumber: 43,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "ms-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPencil }, void 0, !1, {
            fileName: "app/components/StaffInfo.jsx",
            lineNumber: 47,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/StaffInfo.jsx",
            lineNumber: 46,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/StaffInfo.jsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dl", { className: "max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Email address" }, void 0, !1, {
              fileName: "app/components/StaffInfo.jsx",
              lineNumber: 52,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { className: "text-lg font-semibold", children: info.email }, void 0, !1, {
              fileName: "app/components/StaffInfo.jsx",
              lineNumber: 55,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/StaffInfo.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Social Security Number" }, void 0, !1, {
              fileName: "app/components/StaffInfo.jsx",
              lineNumber: 59,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { className: "text-lg font-semibold", children: SSN }, void 0, !1, {
              fileName: "app/components/StaffInfo.jsx",
              lineNumber: 62,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/StaffInfo.jsx",
            lineNumber: 58,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Date of Birth" }, void 0, !1, {
              fileName: "app/components/StaffInfo.jsx",
              lineNumber: 65,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { className: "text-lg font-semibold", children: formattedDate }, void 0, !1, {
              fileName: "app/components/StaffInfo.jsx",
              lineNumber: 68,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/StaffInfo.jsx",
            lineNumber: 64,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col pt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Phone number" }, void 0, !1, {
              fileName: "app/components/StaffInfo.jsx",
              lineNumber: 71,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { className: "text-lg font-semibold", children: phone }, void 0, !1, {
              fileName: "app/components/StaffInfo.jsx",
              lineNumber: 74,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/StaffInfo.jsx",
            lineNumber: 70,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/StaffInfo.jsx",
          lineNumber: 50,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/StaffInfo.jsx",
        lineNumber: 41,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/StaffInfo.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/StaffInfo.jsx",
      lineNumber: 15,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/StaffInfo.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/StaffInfo.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "ms-5 mt-10 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg font-semibold dark:text-green-300", children: "Inspections" }, void 0, !1, {
      fileName: "app/components/StaffInfo.jsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/StaffInfo.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/StaffInfo.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/services/auth.server.js
var import_node2 = require("@remix-run/node"), import_node3 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
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

// app/services/APIAction.server.js
var import_node4 = require("@remix-run/node");
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
    return createUserSession(user.session, "/main");
  }
}
async function getAllOffice(request2) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node4.redirect)("/login");
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
    return (0, import_node4.redirect)("/login");
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
  return resData !== "SUCCEEDED" ? (0, import_node4.json)({ message: resData }) : (0, import_node4.redirect)("/main");
}
async function getInspections(params, request2) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node4.redirect)("/login");
  let url = "https://registrytotal.herokuapp.com/api/inspection/" + params.id;
  return await (await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).json();
}
async function getOwnInfo(request2) {
  let response = await requireUserSession(request2);
  if (!response)
    return (0, import_node4.redirect)("/login");
  let resData = await (await fetch(
    "https://registrytotal.herokuapp.com/api/staff/own",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${response}`,
        "content-type": "application/json"
      }
    }
  )).json();
  return console.log(resData), resData;
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
  )).json() : (0, import_node4.redirect)("/login");
}
async function getStaffbyId(request2, staffID) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node4.redirect)("/login");
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
    return (0, import_node4.redirect)("/login");
  let resData = await (await fetch("https://registrytotal.herokuapp.com/api/office/add", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })).json();
  if (resData === "NOT FOUND")
    throw new Error("You must be admin to access this");
  if (resData === "SERVER UNAVAILABLE")
    throw new Error("Something went wrong with the server, please try again");
  return (0, import_node4.redirect)("/office");
}

// app/routes/_home.office.$id.$userID.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function StaffInfoPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StaffInfo, {}, void 0, !1, {
    fileName: "app/routes/_home.office.$id.$userID.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function loader({ request: request2, params }) {
  try {
    return await getStaffbyId(request2, params.userID);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

// app/routes/_home.office.$id._index.jsx
var home_office_id_index_exports = {};
__export(home_office_id_index_exports, {
  default: () => OfficeDetailPage,
  loader: () => loader2,
  options: () => options
});
var import_node5 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");

// app/components/UserTable.jsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ListOfStaff() {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "dark:text-white mt-5 text-xl font-semibold", children: "All staff" }, void 0, !1, {
      fileName: "app/components/UserTable.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative overflow-x-auto shadow-md sm:rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pb-4 bg-white dark:bg-gray-900", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "table-search", className: "sr-only", children: "Search" }, void 0, !1, {
          fileName: "app/components/UserTable.jsx",
          lineNumber: 11,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "svg",
            {
              className: "w-5 h-5 text-gray-500 dark:text-gray-400",
              "aria-hidden": "true",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                  clipRule: "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UserTable.jsx",
                  lineNumber: 23,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/UserTable.jsx",
              lineNumber: 16,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UserTable.jsx",
            lineNumber: 15,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
              fileName: "app/components/UserTable.jsx",
              lineNumber: 30,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UserTable.jsx",
          lineNumber: 14,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UserTable.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Staff name" }, void 0, !1, {
            fileName: "app/components/UserTable.jsx",
            lineNumber: 41,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Email" }, void 0, !1, {
            fileName: "app/components/UserTable.jsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "SSN" }, void 0, !1, {
            fileName: "app/components/UserTable.jsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Phone" }, void 0, !1, {
            fileName: "app/components/UserTable.jsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Action" }, void 0, !1, {
            fileName: "app/components/UserTable.jsx",
            lineNumber: 53,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UserTable.jsx",
          lineNumber: 40,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/UserTable.jsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tbody", { children: data.staff.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "tr",
          {
            className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "th",
                {
                  scope: "row",
                  className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                  children: dt.data.name
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UserTable.jsx",
                  lineNumber: 64,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4", children: dt.email }, void 0, !1, {
                fileName: "app/components/UserTable.jsx",
                lineNumber: 70,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4", children: dt.data.SSN }, void 0, !1, {
                fileName: "app/components/UserTable.jsx",
                lineNumber: 71,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4", children: dt.data.phone }, void 0, !1, {
                fileName: "app/components/UserTable.jsx",
                lineNumber: 72,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_react5.Link,
                {
                  to: dt._id,
                  className: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
                  children: "Edit"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UserTable.jsx",
                  lineNumber: 74,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/UserTable.jsx",
                lineNumber: 73,
                columnNumber: 17
              }, this)
            ]
          },
          dt._id,
          !0,
          {
            fileName: "app/components/UserTable.jsx",
            lineNumber: 60,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/UserTable.jsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UserTable.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UserTable.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UserTable.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office.$id._index.jsx
var import_react_chartjs_2 = require("react-chartjs-2"), import_chart = require("chart.js"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
import_chart.Chart.register(
  import_chart.CategoryScale,
  import_chart.LinearScale,
  import_chart.PointElement,
  import_chart.LineElement,
  import_chart.Title,
  import_chart.Tooltip,
  import_chart.Legend
);
var options = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: !0,
      text: "Chart.js Line Chart"
    }
  }
};
function OfficeDetailPage() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ListOfStaff, {}, void 0, !1, {
      fileName: "app/routes/_home.office.$id._index.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    " "
  ] }, void 0, !0, {
    fileName: "app/routes/_home.office.$id._index.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
async function loader2({ request: request2, params }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node5.redirect)("/login");
  let response = await fetch(
    "https://registrytotal.herokuapp.com/api/office/" + params.id,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ), dataPass = {
    time: "month",
    unit: "1"
  }, url = "https://registrytotal.herokuapp.com/api/office/" + params.id + "/car", data = await response.json();
  console.log(data);
  let response_2 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dataPass)
  });
  return data[0];
}

// app/routes/_home.Inspections.$id.jsx
var home_Inspections_id_exports = {};
__export(home_Inspections_id_exports, {
  default: () => InpectionsPage,
  loader: () => loader3
});

// app/components/InspectionsForm.jsx
var import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function InspectionsForm() {
  let data = (0, import_react7.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "text-gray-600 body-font dark:text-white m-auto dark:bg-slate-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container flex flex-wrap px-3 py-24 mx-auto items-center dark:text-white text-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "m-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900 dark:text-red-500 text-center", children: "1. PH\u01AF\u01A0NG TI\u1EC6N \u2002 (VEHICLE)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 11,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left flex w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-1", children: [
            " ",
            "Bi\u1EC3n \u0111\u0103ng k\xFD: ",
            data.car.numberPlate
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 15,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-1", children: "S\u1ED1 qu\u1EA3n l\xFD: " }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 19,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left flex w-full  italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-1", children: "(Registration Number)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 22,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-1", children: "(Vehicle Inspection No.)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 23,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Lo\u1EA1i Ph\u01B0\u01A1ng ti\u1EC7n: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Type)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 26,
            columnNumber: 33
          }, this),
          data.car.type
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Nh\xE3n Hi\u1EC7u: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Mark)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 30,
            columnNumber: 26
          }, this),
          " ",
          data.car.brand
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "S\u1ED1 Lo\u1EA1i: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Model Code)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 34,
            columnNumber: 24
          }, this),
          " ",
          data.car.modelCode
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "S\u1ED1 M\xE1y: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Engine Number)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 38,
            columnNumber: 23
          }, this),
          " ",
          data.car.engineNumber
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "S\u1ED1 Khung:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Chasis Number)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 42,
            columnNumber: 24
          }, this),
          " ",
          data.car.chassisNumber
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left flex w-full  mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-initial w-3/4", children: [
            "N\u0103m, N\u01B0\u1EDBc s\u1EA3n xu\u1EA5t: ",
            data.car.manufacturedYear,
            ",",
            " ",
            data.car.manufacturedCountry
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-initial w-32", children: "Ni\xEAn H\u1EA1n SD:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 51,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left flex w-full  italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-initial w-3/4", children: "(Manufactured Year and Country)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-initial w-32", children: "(Lifetime limit to)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left flex w-full  mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-initial w-3/5", children: [
            "Kinh doanh v\u1EADn t\u1EA3i",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: [
              "(Commercial Use)",
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  checked: data.car.purpose === "Kinh doanh",
                  className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/InspectionsForm.jsx",
                  lineNumber: 64,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/InspectionsForm.jsx",
              lineNumber: 62,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-initial ms-3", children: [
            "C\u1EA3i t\u1EA1o",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: [
              "(Modification)",
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/InspectionsForm.jsx",
                  lineNumber: 75,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/InspectionsForm.jsx",
              lineNumber: 73,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 71,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "m-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900 text-center dark:text-red-500", children: "2. TH\xD4NG S\u1ED0 K\u1EF8 THU\u1EACT\u2002(SPECIFICATIONS)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left flex w-full  mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-1", children: [
            "C\xF4ng th\u1EE9c b\xE1nh xe: ",
            data.car.specification.wheelFormula
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-1", children: [
            "V\u1EBFt b\xE1nh xe:",
            data.car.specification.wheelTread
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 91,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left flex w-full  italic text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-1", children: "(Wheel Formula)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-1", children: "(Wheel Tread)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 97,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 95,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "K\xEDch th\u01B0\u1EDBc bao:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Overall Dimension)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          " ",
          data.car.specification.overallDimension
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full", children: [
            "KT khoang h\xE0nh l\xFD l\u1EDBn nh\u1EA5t:",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Largest luggage container Dimension)" }, void 0, !1, {
              fileName: "app/components/InspectionsForm.jsx",
              lineNumber: 107,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full", children: data.car.specification.containerDimension }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 112,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Chi\u1EC1u d\xE0i c\u01A1 s\u1EDF:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(WheelBase)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 118,
            columnNumber: 15
          }, this),
          " ",
          data.car.specification.lengthBase
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          "Kh\u1ED1i l\u01B0\u1EE3ng b\u1EA3n th\xE2n:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(KerbMass)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          data.car.specification.kerbMass
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full", children: [
            "Kh\u1ED1i l\u01B0\u1EE3ng h\xE0ng CC theo TK/CP TGGT:",
            " ",
            data.car.specification.authorizedPayload
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize Payload)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 131,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full", children: [
            "Kh\u1ED1i l\u01B0\u1EE3ng to\xE0n b\u1ED9 theo TK/CP TGGT:",
            " ",
            data.car.specification.authorizedTotalMass
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize total mass)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionsForm.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col md:w-1/2 md:pl-12 items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full", children: [
          "Kh\u1ED1i l\u01B0\u1EE3ng k\xE9o theo theo TK/CP TGGT:",
          " ",
          data.car.specification.authorizedTowedMass
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Design/Authorize towed mass)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 153,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 148,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full", children: [
          "S\u1ED1 ng\u01B0\u1EDDi cho ph\xE9p ch\u1EDF: ",
          data.car.specification.permissibleCarry
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 158,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full italic text-sm", children: "(Permission No. of Pers Carried: seat, stood place, laying place)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 157,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "Lo\u1EA1i nhi\xEAn li\u1EC7u:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Type of Fuel Used)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 167,
          columnNumber: 13
        }, this),
        data.car.specification.fuel
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 165,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "Th\u1EC3 t\xEDch l\xE0m vi\u1EC7c c\u1EE7a \u0111\u1ED9ng c\u01A1:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Engine displacement)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 172,
          columnNumber: 13
        }, this),
        data.car.specification.engineDisplacement
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 170,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "C\xF4ng su\u1EA5t l\u1EDBn nh\u1EA5t/t\u1ED1c \u0111\u1ED9 quay:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Max. output/rpm)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 177,
          columnNumber: 13
        }, this),
        data.car.specification.maxOutputToRpmRatio
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 175,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          "S\u1ED1 l\u01B0\u1EE3ng l\u1ED1p, c\u1EE1 l\u1ED1p/tr\u1EE5c:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Number of Tires; Tire size/axle)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 183,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 181,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: data.car.specification.numberOfTiresAndTireSize }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 188,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: data.car.specification.numberOfTiresAndTireSize }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 189,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 187,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 180,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "C\xF3 l\u1EAFp thi\u1EBFt b\u1ECB gi\xE1m s\xE1t h\xE0nh tr\xECnh:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Equipped with Tachography)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 194,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "ms-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "input",
          {
            type: "checkbox",
            className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 196,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 195,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 192,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: [
        "Kh\xF4ng c\u1EA5p tem ki\u1EC3m \u0111\u1ECBnh",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "italic text-sm", children: "(Inspection Stamp was not issued)" }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 204,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "ms-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "input",
          {
            type: "checkbox",
            className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 208,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 207,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 202,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container flex flex-wrap mx-auto items-center pt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-initial w-1/3 pt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: "S\u1ED1 phi\u1EBFu ki\u1EC3m \u0111\u1ECBnh:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 217,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "italic text-sm ", children: "(Inspection Report No)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 220,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: " text-left", children: data._id }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 223,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left  w-full mt-1", children: "C\xF3 hi\u1EC7u l\u1EF1c \u0111\u1EBFn h\u1EBFt ng\xE0y:" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 224,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "italic text-sm ", children: [
            "(Valid Until)",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: " text-md text-left", children: formatDate(data.expiredDate) }, void 0, !1, {
              fileName: "app/components/InspectionsForm.jsx",
              lineNumber: 229,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 227,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 216,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-initial w-2/3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-center  w-full mt-1", children: "H\xE0 N\u1ED9i, ng\xE0y ... th\xE1ng ... n\u0103m" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 235,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "italic text-sm  text-center", children: "(Issue on Date/Month/Year)" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 238,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "font-medium title-font text-center ", children: "\u0110\u01A0N V\u1ECA KI\u1EC2M \u0110\u1ECANH" }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 242,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/InspectionsForm.jsx",
            lineNumber: 241,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/InspectionsForm.jsx",
          lineNumber: 234,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionsForm.jsx",
        lineNumber: 215,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionsForm.jsx",
      lineNumber: 147,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/InspectionsForm.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/InspectionsForm.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_home.Inspections.$id.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function InpectionsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(InspectionsForm, {}, void 0, !1, {
    fileName: "app/routes/_home.Inspections.$id.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function loader3({ request: request2, params }) {
  return await getInspections(params, request2);
}

// app/routes/_home.Inspections.add.jsx
var home_Inspections_add_exports = {};
__export(home_Inspections_add_exports, {
  action: () => action,
  default: () => inspectionAdd
});

// app/components/InspectionAdd.jsx
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function InspectionsAddForm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react8.Form, { method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex items-center text-primary-700 dark:text-green-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400", children: "1" }, void 0, !1, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      "PH\u01AF\u01A0NG TI\u1EC6N",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(VEHICLE)" }, void 0, !1, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid md:grid-cols-3 md:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 17,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "carNumberPlate",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Bi\u1EC3n \u0111\u0103ng k\xFD (Registration Number):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 25,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 33,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "Type",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Lo\u1EA1i ph\u01B0\u01A1ng ti\u1EC7n (Type):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 41,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 49,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "Mark",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Nh\xE3n hi\u1EC7u (Mark):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 57,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 67,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "ModelCode",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "S\u1ED1 Lo\u1EA1i (Model Code):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 75,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 83,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "EngineNumber",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "S\u1ED1 m\xE1y (Engine Number):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 91,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 101,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "ChassisNumber",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "S\u1ED1 khung (Chassis Number):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 109,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
              fileName: "app/components/InspectionAdd.jsx",
              lineNumber: 118,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "label",
            {
              for: "ManufacturedYear",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "N\u0103m s\u1EA3n xu\u1EA5t:"
            },
            void 0,
            !1,
            {
              fileName: "app/components/InspectionAdd.jsx",
              lineNumber: 126,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
              fileName: "app/components/InspectionAdd.jsx",
              lineNumber: 134,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "label",
            {
              for: "ManufacturedCountry",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "N\u01A1i s\u1EA3n xu\u1EA5t:"
            },
            void 0,
            !1,
            {
              fileName: "app/components/InspectionAdd.jsx",
              lineNumber: 142,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 133,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ol", { className: "flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-primary-700 bg-white border border-green-400 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "span",
        {
          className: "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400 ",
          children: "2"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 153,
          columnNumber: 11
        },
        this
      ),
      "TH\xD4NG S\u1ED0 K\u1EF8 THU\u1EACT",
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "hidden sm:inline-flex sm:ml-2", children: "(SPECIFICATIONS)" }, void 0, !1, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 159,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 152,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6 mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 167,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "WheelFormula",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "C\xF4ng th\u1EE9c b\xE1nh xe (Wheel Formular):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 175,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 183,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "WheelTread",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "V\u1EBFt b\xE1nh xe (Wheel Tread):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 191,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 200,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "label",
        {
          for: "OverallDimension",
          className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
          children: "K\xEDch th\u01B0\u1EDBc bao (Overall Dimension):"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 208,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 216,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "label",
        {
          for: "LuggageContainer",
          className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
          children: "KT Khoang h\xE0nh l\xFD l\u1EDBn nh\u1EA5t (Largest luggage container dimension):"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 224,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 215,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6 mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 234,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "WheelBase",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Chi\u1EC1u d\xE0i c\u01A1 s\u1EDF (Wheel Base):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 242,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 250,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "KerbMass",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Kh\u1ED1i l\u01B0\u1EE3ng b\u1EA3n th\xE2n (Kerbmass):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 258,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 249,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 232,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 267,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "label",
        {
          for: "AuthorizedPayload",
          className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
          children: "Kh\u1ED1i l\u01B0\u1EE3ng h\xE0ng CC theo TK/CP TGGT (Authorized pay load):"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 275,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 283,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "label",
        {
          for: "AuthorizedTotalMass",
          className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
          children: "Kh\u1ED1i l\u01B0\u1EE3ng to\xE0n b\u1ED9 theo TK/CP TGGT (Authorized total mass):"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 291,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 282,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 299,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "label",
        {
          for: "AuthorizedTowedlMass",
          className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
          children: "Kh\u1ED1i l\u01B0\u1EE3ng k\xE9o theo theo TK/CP TGGT (Authorized towed mass):"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 307,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 298,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid md:grid-cols-2 md:gap-6 mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "input",
          {
            type: "text",
            name: "CarriedNo",
            id: "CarriedNo",
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 316,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "CarriedNo",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "S\u1ED1 ng\u01B0\u1EDDi cho ph\xE9p ch\u1EDF (No.of Pers Carried)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 324,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 315,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 332,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            for: "FuelType",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Lo\u1EA1i nhi\xEAn li\u1EC7u (Type of Fuel Used):"
          },
          void 0,
          !1,
          {
            fileName: "app/components/InspectionAdd.jsx",
            lineNumber: 340,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/InspectionAdd.jsx",
        lineNumber: 331,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 314,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 349,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "label",
        {
          for: "EngineDisplacement",
          className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
          children: "Th\u1EC3 t\xEDch l\xE0m vi\u1EC7c c\u1EE7a \u0111\u1ED9ng c\u01A1 (Engine Displacement):"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 357,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 348,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 365,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "label",
        {
          for: "maxOutputToRpmRatio",
          className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
          children: "C\xF4ng su\u1EA5t l\u1EDBn nh\u1EA5t/ T\u1ED1c \u0111\u1ED9 quay (Max. Output/rpm):"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 373,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 364,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative z-0 w-full mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 381,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "label",
        {
          for: "numberOfTiresAndTireSize",
          className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
          children: "S\u1ED1 l\u01B0\u1EE3ng l\u1ED1p ,c\u1EE1 l\u1ED1p/tr\u1EE5c: (Number of Tires And Tire size):"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InspectionAdd.jsx",
          lineNumber: 389,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 380,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { classNameName: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-7", children: "Create" }, void 0, !1, {
      fileName: "app/components/InspectionAdd.jsx",
      lineNumber: 396,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/InspectionAdd.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_home.Inspections.add.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function inspectionAdd() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(InspectionsAddForm, {}, void 0, !1, {
    fileName: "app/routes/_home.Inspections.add.jsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
async function action({ request: request2 }) {
  if (!await requireUserSession(request2))
    return redirect("/login");
  let formData = await request2.formData(), data = {
    NumberPlate: formData.get("carNumberPlate"),
    Type: formData.get("Type"),
    Mark: formData.get("Mark"),
    ModelCode: formData.get("ModelCode"),
    EngineNumber: formData.get("EngineNumber"),
    ChassisNumber: formData.get("ChassisNumber"),
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
    EngineDisplacement: formData.get("EngineDisplacement"),
    maxOutputToRpmRatio: formData.get("maxOutputToRpmRatio"),
    numberOfTiresAndTireSize: formData.get("numberOfTiresAndTireSize")
  }, response = await fetch();
  return null;
}

// app/routes/_home.office._index.jsx
var home_office_index_exports = {};
__export(home_office_index_exports, {
  default: () => OfficePage,
  loader: () => loader4
});
var import_react10 = require("@remix-run/react");

// app/components/OfficeList.jsx
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function OfficeList() {
  let content = (0, import_react9.useLoaderData)().data.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "tr",
    {
      className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { to: dt._id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "th",
        {
          scope: "row",
          className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
          children: dt.name
        },
        void 0,
        !1,
        {
          fileName: "app/components/OfficeList.jsx",
          lineNumber: 12,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/OfficeList.jsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    },
    dt._id,
    !1,
    {
      fileName: "app/components/OfficeList.jsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative overflow-x-auto shadow-md sm:rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Office Name" }, void 0, !1, {
      fileName: "app/components/OfficeList.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/OfficeList.jsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/OfficeList.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("tbody", { children: content }, void 0, !1, {
      fileName: "app/components/OfficeList.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/OfficeList.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/OfficeList.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office._index.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function OfficePage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(OfficeList, {}, void 0, !1, {
      fileName: "app/routes/_home.office._index.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, !0, {
    fileName: "app/routes/_home.office._index.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
async function loader4({ request: request2 }) {
  return await getAllOffice(request2);
}

// app/routes/_home.info._index.jsx
var home_info_index_exports = {};
__export(home_info_index_exports, {
  default: () => Infopage,
  meta: () => meta2
});

// app/components/OwnInfo.jsx
var import_react11 = require("@remix-run/react");
var import_react_fontawesome2 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function OwnInfo() {
  let info = (0, import_react11.useMatches)().find((match) => match.id === "routes/_home"), { name, SSN, dateOfBirth, phone } = info.data.data, formattedDate = formatDate(dateOfBirth), inspection = info.data.registed;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: " m-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { className: "mx-0 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "max-w-7xl lg:pt-5 items-stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mx-5 max-w-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between md:space-x-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "img",
            {
              className: "h-16 w-16 lg:h-24 lg:w-24 rounded-full border border-white/10",
              src: ava_default,
              alt: "image"
            },
            void 0,
            !1,
            {
              fileName: "app/components/OwnInfo.jsx",
              lineNumber: 22,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "span",
            {
              className: "absolute inset-0 rounded-full shadow-inner",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/components/OwnInfo.jsx",
              lineNumber: 27,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/OwnInfo.jsx",
          lineNumber: 21,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/OwnInfo.jsx",
          lineNumber: 20,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "pt-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-xl font-semibold", children: name }, void 0, !1, {
            fileName: "app/components/OwnInfo.jsx",
            lineNumber: 34,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-lg font-light text-black-500", children: [
            "Nh\xE2n vi\xEAn t\u1EA1i: ",
            info.data.workFor.name
          ] }, void 0, !0, {
            fileName: "app/components/OwnInfo.jsx",
            lineNumber: 35,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/OwnInfo.jsx",
          lineNumber: 33,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/OwnInfo.jsx",
        lineNumber: 19,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/OwnInfo.jsx",
        lineNumber: 18,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-24 text-md font-light dark:text-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react11.Link, { to: "edit", className: "flex flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "mb-5 text-lg font-bold ", children: "Th\xF4ng tin c\xE1 nh\xE2n" }, void 0, !1, {
            fileName: "app/components/OwnInfo.jsx",
            lineNumber: 43,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "ms-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faPencil }, void 0, !1, {
            fileName: "app/components/OwnInfo.jsx",
            lineNumber: 47,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/OwnInfo.jsx",
            lineNumber: 46,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/OwnInfo.jsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("dl", { className: "max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Email address" }, void 0, !1, {
              fileName: "app/components/OwnInfo.jsx",
              lineNumber: 52,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("dd", { className: "text-lg font-semibold", children: info.data.email }, void 0, !1, {
              fileName: "app/components/OwnInfo.jsx",
              lineNumber: 55,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/OwnInfo.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Social Security Number" }, void 0, !1, {
              fileName: "app/components/OwnInfo.jsx",
              lineNumber: 59,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("dd", { className: "text-lg font-semibold", children: SSN }, void 0, !1, {
              fileName: "app/components/OwnInfo.jsx",
              lineNumber: 62,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/OwnInfo.jsx",
            lineNumber: 58,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col pb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Date of Birth" }, void 0, !1, {
              fileName: "app/components/OwnInfo.jsx",
              lineNumber: 65,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("dd", { className: "text-lg font-semibold", children: formattedDate }, void 0, !1, {
              fileName: "app/components/OwnInfo.jsx",
              lineNumber: 68,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/OwnInfo.jsx",
            lineNumber: 64,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col pt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("dt", { className: "mb-1 text-gray-500 md:text-lg dark:text-gray-400", children: "Phone number" }, void 0, !1, {
              fileName: "app/components/OwnInfo.jsx",
              lineNumber: 71,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("dd", { className: "text-lg font-semibold", children: phone }, void 0, !1, {
              fileName: "app/components/OwnInfo.jsx",
              lineNumber: 74,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/OwnInfo.jsx",
            lineNumber: 70,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/OwnInfo.jsx",
          lineNumber: 50,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/OwnInfo.jsx",
        lineNumber: 41,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OwnInfo.jsx",
      lineNumber: 17,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/OwnInfo.jsx",
      lineNumber: 16,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/OwnInfo.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/OwnInfo.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { className: "ms-5 mt-10 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-lg font-semibold dark:text-green-300", children: "Inspections" }, void 0, !1, {
        fileName: "app/components/OwnInfo.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ol", { className: "relative border-l border-gray-200 dark:border-gray-700", children: inspection.map((inspec) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { className: "mb-10 ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react11.Link, { to: `/Inspections/${inspec._id}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" }, void 0, !1, {
          fileName: "app/components/OwnInfo.jsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("time", { className: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500", children: formatDate(inspec.regisDate) }, void 0, !1, {
          fileName: "app/components/OwnInfo.jsx",
          lineNumber: 90,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: [
          "M\xE3 s\u1ED1 \u0110\u0103ng ki\u1EC3m: ",
          inspec._id
        ] }, void 0, !0, {
          fileName: "app/components/OwnInfo.jsx",
          lineNumber: 93,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "Bi\u1EC3n s\u1ED1 xe: ",
          inspec.car.numberPlate
        ] }, void 0, !0, {
          fileName: "app/components/OwnInfo.jsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400", children: [
          "T\u1EA1i: ",
          info.data.workFor.name
        ] }, void 0, !0, {
          fileName: "app/components/OwnInfo.jsx",
          lineNumber: 99,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/OwnInfo.jsx",
        lineNumber: 88,
        columnNumber: 15
      }, this) }, inspec._id, !1, {
        fileName: "app/components/OwnInfo.jsx",
        lineNumber: 87,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/OwnInfo.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OwnInfo.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/OwnInfo.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/_home.info._index.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Infopage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(OwnInfo, {}, void 0, !1, {
    fileName: "app/routes/_home.info._index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
function meta2({ matches }) {
  return [
    { title: `${matches[1].data.data.name}` }
  ];
}

// app/routes/_home.office.add.jsx
var home_office_add_exports = {};
__export(home_office_add_exports, {
  action: () => action2,
  default: () => AddOfficePage,
  loader: () => loader5
});

// app/components/AddOfficeForm.jsx
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function AddOfficeForm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react12.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "input",
        {
          type: "number",
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative z-0 w-3/4 mb-6 group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "button",
      {
        className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-3/4 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        children: "Submit"
      },
      void 0,
      !1,
      {
        fileName: "app/components/AddOfficeForm.jsx",
        lineNumber: 70,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/AddOfficeForm.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_home.office.add.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function AddOfficePage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AddOfficeForm, {}, void 0, !1, {
    fileName: "app/routes/_home.office.add.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
async function loader5() {
  return null;
}
async function action2({ request: request2 }) {
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
  action: () => action3,
  default: () => InfoEditpage
});
var import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function InfoEditpage() {
  let info = (0, import_react13.useMatches)().find((match) => match.id === "routes/_home").data, { name, SSN, dateOfBirth, phone } = info.data;
  var date = new Date(dateOfBirth);
  let year = date.getFullYear(), month = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2), formattedDate = `${year}-${month}-${day}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react13.Form, { className: "dark", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid gap-6 mb-6 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
            lineNumber: 108,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
            lineNumber: 114,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_home.info.edit.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_home.info.edit.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { formMethod: "put", className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2", children: "Save" }, void 0, !1, {
      fileName: "app/routes/_home.info.edit.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react13.Link, { to: "/changepass", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { className: "text-white bg-pink-400 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "Change Password" }, void 0, !1, {
      fileName: "app/routes/_home.info.edit.jsx",
      lineNumber: 130,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_home.info.edit.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.info.edit.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
async function action3({ request: request2 }) {
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
  action: () => action4,
  default: () => addStaffPage,
  loader: () => loader6,
  meta: () => meta3
});

// app/components/AddStaffForm.jsx
var import_react14 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function AddForm() {
  let data = (0, import_react14.useLoaderData)();
  console.log(data);
  let option = data.data.map((dt) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("option", { children: dt.name }, dt._id, !1, {
    fileName: "app/components/AddStaffForm.jsx",
    lineNumber: 6,
    columnNumber: 40
  }, this)), error = (0, import_react14.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h3", { className: "text-red-500 text-md bold text-center mb-5", children: [
      error.message,
      ", please try again"
    ] }, void 0, !0, {
      fileName: "app/components/AddStaffForm.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react14.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid gap-6 mb-6 md:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 19,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 25,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 36,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 42,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 53,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 59,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 87,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 93,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 108,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 114,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 125,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 131,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AddStaffForm.jsx",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "ADD" }, void 0, !1, {
        fileName: "app/components/AddStaffForm.jsx",
        lineNumber: 152,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AddStaffForm.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AddStaffForm.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/_home.addStaff.jsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function reformatDate2(dateStr) {
  var dArr = dateStr.split("-");
  return dArr[1] + "/" + dArr[2] + "/" + dArr[0];
}
function meta3() {
  return [{ title: "Add Staff" }];
}
function addStaffPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AddForm, {}, void 0, !1, {
    fileName: "app/routes/_home.addStaff.jsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
async function loader6({ request: request2 }) {
  try {
    return await getAllOffice(request2);
  } catch (error) {
    throw console.log(error), new Error(`${error.message}`);
  }
}
async function action4({ request: request2 }) {
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
var route11 = __toESM(require_forgotpassword());

// app/routes/_home.search.jsx
var home_search_exports = {};
__export(home_search_exports, {
  default: () => SearchPage
});
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function SearchPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: "This is for searching" }, void 0, !1, {
    fileName: "app/routes/_home.search.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/_home.main.jsx
var home_main_exports = {};
__export(home_main_exports, {
  default: () => MainPage,
  meta: () => meta4
});
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), meta4 = () => [{ title: "VietNam Registry" }];
function MainPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: "This after login" }, void 0, !1, {
    fileName: "app/routes/_home.main.jsx",
    lineNumber: 8,
    columnNumber: 12
  }, this);
}

// app/routes/changepass.jsx
var changepass_exports = {};
__export(changepass_exports, {
  action: () => action5,
  default: () => changepassword,
  loader: () => loader7,
  meta: () => meta5
});
var import_react15 = require("@remix-run/react"), import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function meta5() {
  return [{ title: "Change Password" }];
}
function changepassword() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("section", { class: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { class: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { class: "w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { class: "mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Change Password" }, void 0, !1, {
      fileName: "app/routes/changepass.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react15.Form, { class: "mt-1 space-y-4 lg:mt-5 md:space-y-5", method: "patch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { for: "old-password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Old Password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 17,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "password", name: "old-password", id: "email", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "name@company.com", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 18,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 16,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { for: "password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "New Password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 21,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "password", name: "password", id: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 22,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 20,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { for: "confirm-password", class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Confirm password" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 25,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "confirm-password", name: "confirm-password", id: "confirm-password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", class: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: "true" }, void 0, !1, {
          fileName: "app/routes/changepass.jsx",
          lineNumber: 26,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("button", { class: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Reset passwod" }, void 0, !1, {
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
async function loader7({ request: request2 }) {
  let token = await requireUserSession(request2);
  return token || (0, import_node6.redirect)("/login");
}
async function action5({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node6.redirect)("/login");
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
    return console.log(resData), resData.status !== "success" ? (console.log("deo thanh cong"), new Error("Invalid change")) : (0, import_node6.redirect)("/main");
  } catch (error) {
    if (error.status === 401)
      return error;
  }
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader8,
  meta: () => meta6
});
var import_react16 = require("@remix-run/react");
var import_node7 = require("@remix-run/node"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), meta6 = () => [{ title: "VietNam Registry" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react16.Link, { to: "login", children: "login pls" }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
async function loader8({ request: request2 }) {
  return await requireUserSession(request2) ? (0, import_node7.redirect)("/main") : (0, import_node7.redirect)("/login");
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader9
});
var import_node8 = require("@remix-run/node");
async function loader9({ request: request2 }) {
  return console.log(request2), await destroyUserSession(request2);
}

// app/routes/_home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeLayout,
  loader: () => loader10
});
var import_react19 = require("@remix-run/react");

// app/components/MainNavigation.jsx
var import_react17 = require("@remix-run/react"), import_react18 = require("react"), import_react_fontawesome3 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons3 = require("@fortawesome/free-solid-svg-icons"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function MainNavigation() {
  let data = (0, import_react17.useLoaderData)(), { isAdmin } = data, [toggle, setIsToggle] = (0, import_react18.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "aside",
    {
      id: "default-sidebar",
      className: "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0",
      "aria-label": "Sidebar",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react17.Link, { to: "/info", className: "flex items-center pl-2.5 mb-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white", children: "Flowbite" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 37,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ul", { className: "space-y-2 font-medium", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react17.Link,
            {
              to: "/main",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faGauge, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 48,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "ml-3", children: "Dashboard" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react17.Link,
            {
              to: "/login",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faChartLine, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 57,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Analytics" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faMagnifyingGlass, size: "lg" }, void 0, !1, {
                    fileName: "app/components/MainNavigation.jsx",
                    lineNumber: 69,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                    "svg",
                    {
                      "sidebar-toggle-item": "true",
                      className: "w-6 h-6",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "ul",
              {
                id: "dropdown-example",
                className: `py-2 space-y-2 ${toggle ? "" : "hidden"}`,
                children: [
                  isAdmin === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                    import_react17.Link,
                    {
                      to: "/office",
                      className: "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faBuilding, size: "lg" }, void 0, !1, {
                          fileName: "app/components/MainNavigation.jsx",
                          lineNumber: 100,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Centre" }, void 0, !1, {
                          fileName: "app/components/MainNavigation.jsx",
                          lineNumber: 101,
                          columnNumber: 23
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/MainNavigation.jsx",
                      lineNumber: 96,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/MainNavigation.jsx",
                    lineNumber: 95,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                    import_react17.Link,
                    {
                      to: "/Inspections",
                      className: "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faCar, size: "lg" }, void 0, !1, {
                          fileName: "app/components/MainNavigation.jsx",
                          lineNumber: 112,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Inspections" }, void 0, !1, {
                          fileName: "app/components/MainNavigation.jsx",
                          lineNumber: 113,
                          columnNumber: 21
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/MainNavigation.jsx",
                      lineNumber: 108,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/MainNavigation.jsx",
                    lineNumber: 107,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/MainNavigation.jsx",
                lineNumber: 90,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          isAdmin === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react17.Link,
            {
              to: "/addStaff",
              className: "flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faUserPlus, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 126,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Add Staff" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 127,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 122,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          isAdmin === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react17.Link,
            {
              to: "/office/add",
              className: "flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faBuilding, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 139,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Add Centre" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 140,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 135,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 134,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react17.Link,
            {
              to: "/Inspections/add",
              className: "flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faFileLines, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 151,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: [
                  " ",
                  "Create Inspections"
                ] }, void 0, !0, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 152,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/MainNavigation.jsx",
              lineNumber: 147,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 146,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react17.Link,
            {
              to: "/logout",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 self-end",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faRightFromBracket, size: "lg" }, void 0, !1, {
                  fileName: "app/components/MainNavigation.jsx",
                  lineNumber: 163,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "flex-1 ml-3 whitespace-nowrap", children: "Sign Out" }, void 0, !1, {
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
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function HomeLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(MainNavigation, {}, void 0, !1, {
      fileName: "app/routes/_home.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("section", { className: "p-4 relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 min-h-screen ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react19.Outlet, {}, void 0, !1, {
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
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
async function loader10({ request: request2 }) {
  return await getOwnInfo(request2);
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => LoginPage,
  links: () => links2,
  loader: () => loader11
});

// app/components/Login.jsx
var import_react20 = require("@remix-run/react"), import_react_fontawesome4 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons4 = require("@fortawesome/free-solid-svg-icons"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function Login() {
  let data = (0, import_react20.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("section", { className: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("a", { href: "#", className: "flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("img", { className: "w-8 h-8 mr-2", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg", alt: "logo" }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      "Flowbite"
    ] }, void 0, !0, {
      fileName: "app/components/Login.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h1", { className: "text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Welcome to VietNam Registry" }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 17,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h6", { className: "italic text-center text-md mt-1 dark:text-white", children: "Enter your credentials to access your account" }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 20,
        columnNumber: 15
      }, this),
      data ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h6", { className: "text-red-500 text-sm text-center bold", children: data.message }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 21,
        columnNumber: 23
      }, this) : "",
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react20.Form, { className: "space-y-4 md:space-y-6", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "email", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Your email" }, void 0, !1, {
            fileName: "app/components/Login.jsx",
            lineNumber: 24,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { type: "email", name: "email", id: "email", className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "name@company.com", required: !0 }, void 0, !1, {
            fileName: "app/components/Login.jsx",
            lineNumber: 25,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Login.jsx",
          lineNumber: 23,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Password" }, void 0, !1, {
            fileName: "app/components/Login.jsx",
            lineNumber: 28,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { type: "password", name: "password", id: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: !0 }, void 0, !1, {
            fileName: "app/components/Login.jsx",
            lineNumber: 29,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Login.jsx",
          lineNumber: 27,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("button", { className: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Sign in" }, void 0, !1, {
          fileName: "app/components/Login.jsx",
          lineNumber: 42,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-sm font-light text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("a", { href: "#", className: "font-medium text-primary-600 hover:underline dark:text-primary-500", children: "Forgot Password" }, void 0, !1, {
          fileName: "app/components/Login.jsx",
          lineNumber: 44,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/Login.jsx",
          lineNumber: 43,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Login.jsx",
        lineNumber: 22,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Login.jsx",
      lineNumber: 16,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Login.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Login.jsx",
    lineNumber: 10,
    columnNumber: 3
  }, this) }, void 0, !1, {
    fileName: "app/components/Login.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/styles/LoginBox.css
var LoginBox_default = "/build/_assets/LoginBox-PCWKDLI7.css";

// app/routes/login.jsx
var import_node9 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function LoginPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Login, {}, void 0, !1, {
    fileName: "app/routes/login.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
async function loader11({ request: request2 }) {
  return await getUserFromSession(request2) ? (0, import_node9.redirect)("/main") : null;
}
async function action6({ request: request2 }) {
  let formData = await request2.formData(), data = {
    email: formData.get("email"),
    password: formData.get("password")
  };
  try {
    return await login(data.email, data.password);
  } catch (error) {
    return (0, import_node9.json)({ message: error.message });
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
  "routes/_home.Inspections.add": {
    id: "routes/_home.Inspections.add",
    parentId: "routes/_home",
    path: "Inspections/add",
    index: void 0,
    caseSensitive: void 0,
    module: home_Inspections_add_exports
  },
  "routes/_home.office._index": {
    id: "routes/_home.office._index",
    parentId: "routes/_home",
    path: "office",
    index: !0,
    caseSensitive: void 0,
    module: home_office_index_exports
  },
  "routes/_home.info._index": {
    id: "routes/_home.info._index",
    parentId: "routes/_home",
    path: "info",
    index: !0,
    caseSensitive: void 0,
    module: home_info_index_exports
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
    module: route11
  },
  "routes/_home.search": {
    id: "routes/_home.search",
    parentId: "routes/_home",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: home_search_exports
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
