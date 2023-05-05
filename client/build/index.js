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
    assets_manifest_default = { version: "144ebe82", entry: { module: "/build/entry.client-YC3K3XFK.js", imports: ["/build/_shared/chunk-NVZCXBSR.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AZMCCQFU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-AUEJMYDG.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-GRLCBK3N.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home.analysis": { id: "routes/home.analysis", parentId: "routes/home", path: "analysis", index: void 0, caseSensitive: void 0, module: "/build/routes/home.analysis-5DU3E6ZE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staff.$staffId": { id: "routes/staff.$staffId", parentId: "root", path: "staff/:staffId", index: void 0, caseSensitive: void 0, module: "/build/routes/staff.$staffId-B2AO3RWQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-144EBE82.js" };
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
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
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
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
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

// app/styles/ShareStyles.css
var ShareStyles_default = "/build/_assets/ShareStyles-XLQRLG73.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function links() {
  return [
    {
      rel: "stylesheet",
      href: ShareStyles_default
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
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/staff.$staffId.jsx
var staff_staffId_exports = {};
__export(staff_staffId_exports, {
  default: () => Infopage
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Infopage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "This is InfoPage" }, void 0, !1, {
    fileName: "app/routes/staff.$staffId.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/home.analysis.jsx
var home_analysis_exports = {};
__export(home_analysis_exports, {
  default: () => Analysis
});
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Analysis() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "This is analysic Page" }, void 0, !1, {
    fileName: "app/routes/home.analysis.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  action: () => action,
  default: () => Index,
  links: () => links2,
  meta: () => meta
});
var import_dompurify = __toESM(require("dompurify"));

// app/components/Login.jsx
var import_react3 = require("@remix-run/react"), import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Login() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Form, { method: "post", className: "form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Welcome to VietNam Registry" }, void 0, !1, {
      fileName: "app/components/Login.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h6", { children: "Enter your credentials to access your account" }, void 0, !1, {
      fileName: "app/components/Login.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "input", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faEnvelope }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "email", id: "email", placeholder: "Please enter your email", required: !0 }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Login.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "input", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faKey, size: "sm" }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "password", name: "password", id: "password", placeholder: "Please enter your password", required: !0 }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Login.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "button", children: "Login" }, void 0, !1, {
      fileName: "app/components/Login.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Login.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/Login.jsx",
    lineNumber: 5,
    columnNumber: 12
  }, this);
}

// app/styles/LoginBox.css
var LoginBox_default = "/build/_assets/LoginBox-K4NDIHCI.css";

// app/routes/_index.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta = () => [{ title: "New Remix App" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Login, {}, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
async function action({ request }) {
  let formData = await request.formData(), data = Object.fromEntries(formData), sendData = {
    email: import_dompurify.default.sanitize(data.email),
    password: import_dompurify.default.sanitize(data.password)
  }, response = await fetch();
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: LoginBox_default
    }
  ];
}

// app/routes/home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeLayout,
  links: () => links3
});
var import_react5 = require("@remix-run/react");

// app/components/MainNavigation.jsx
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("nav", { className: "sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "image-text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text logo-text", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "name", children: "Codinglab" }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 9,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "profession", children: "Web developer" }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 10,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 8,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "menu-bar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "menu-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.NavLink, { to: "analysis", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "bx bx-home-alt icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 19,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text nav-text", children: "Dashboard" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 20,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 18,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 17,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.NavLink, { to: "/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "bx bx-bar-chart-alt-2 icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 25,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text nav-text", children: "Revenue" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 26,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 24,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 23,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.NavLink, { to: "/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "bx bx-bell icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 31,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text nav-text", children: "Notifications" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 32,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 30,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 29,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.NavLink, { to: "/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "bx bx-pie-chart-alt icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 37,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text nav-text", children: "Analytics" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 38,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 36,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 35,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.NavLink, { to: "/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "bx bx-heart icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 43,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text nav-text", children: "Likes" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 44,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 42,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 41,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.NavLink, { to: "/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "bx bx-wallet icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 49,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text nav-text", children: "Wallets" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 50,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 48,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 47,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 16,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bottom-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.Link, { to: "/", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "bx bx-log-out icon" }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text nav-text", children: "Logout" }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 59,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 57,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 55,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/styles/MainNavigation.css
var MainNavigation_default = "/build/_assets/MainNavigation-HMLJC6YP.css";

// app/routes/home.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function HomeLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(MainNavigation, {}, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 8,
      columnNumber: 35
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home.jsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
function links3() {
  return [{
    rel: "stylesheet",
    href: MainNavigation_default
  }];
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
  "routes/staff.$staffId": {
    id: "routes/staff.$staffId",
    parentId: "root",
    path: "staff/:staffId",
    index: void 0,
    caseSensitive: void 0,
    module: staff_staffId_exports
  },
  "routes/home.analysis": {
    id: "routes/home.analysis",
    parentId: "routes/home",
    path: "analysis",
    index: void 0,
    caseSensitive: void 0,
    module: home_analysis_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
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
