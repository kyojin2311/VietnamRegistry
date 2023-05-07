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
    assets_manifest_default = { version: "fbe43d8c", entry: { module: "/build/entry.client-FIDWZ2SK.js", imports: ["/build/_shared/chunk-XZB2AACG.js", "/build/_shared/chunk-RQ7GWW3B.js", "/build/_shared/chunk-DG4HR4CT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GCG4S4MU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home": { id: "routes/_home", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_home-G4F2LUKN.js", imports: ["/build/_shared/chunk-2L3TLXHT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.info": { id: "routes/_home.info", parentId: "routes/_home", path: "info", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.info-4CO3PFZ5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_home.main": { id: "routes/_home.main", parentId: "routes/_home", path: "main", index: void 0, caseSensitive: void 0, module: "/build/routes/_home.main-OVDCREK5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WKUSJYIP.js", imports: ["/build/_shared/chunk-YS6WUAA2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/changepass": { id: "routes/changepass", parentId: "root", path: "changepass", index: void 0, caseSensitive: void 0, module: "/build/routes/changepass-PTYEZEUR.js", imports: ["/build/_shared/chunk-2L3TLXHT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgotpassword": { id: "routes/forgotpassword", parentId: "root", path: "forgotpassword", index: void 0, caseSensitive: void 0, module: "/build/routes/forgotpassword-N6CMP3FP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-ZUQS3FUO.js", imports: ["/build/_shared/chunk-2L3TLXHT.js", "/build/_shared/chunk-YS6WUAA2.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-YO44EPFE.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-FBE43D8C.js" };
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
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route1 = __toESM(require_forgotpassword());

// app/routes/_home.info.jsx
var home_info_exports = {};
__export(home_info_exports, {
  default: () => Infopage
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Infopage() {
  let matches = (0, import_react3.useMatches)();
  console.log(matches);
  let info = matches.find((match) => match.id === "routes/_home").data.data;
  console.log(info);
  let { name, ssn, dateOfBirth } = info.user;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: name }, void 0, !1, {
      fileName: "app/routes/_home.info.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: ssn }, void 0, !1, {
      fileName: "app/routes/_home.info.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: dateOfBirth }, void 0, !1, {
      fileName: "app/routes/_home.info.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/changepass", children: "thay doi pass" }, void 0, !1, {
      fileName: "app/routes/_home.info.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_home.info.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/_home.main.jsx
var home_main_exports = {};
__export(home_main_exports, {
  default: () => MainPage
});
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function MainPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "This after login" }, void 0, !1, {
    fileName: "app/routes/_home.main.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/changepass.jsx
var changepass_exports = {};
__export(changepass_exports, {
  action: () => action,
  default: () => changepassword,
  loader: () => loader
});
var import_react4 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/services/auth.server.js
var import_node2 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    path: "/",
    secure: !1,
    secrets: ["S3SR$T"],
    sameSite: !0,
    maxAge: 30 * 24 * 60 * 60,
    // 30 days
    httpOnly: !0
  }
});
async function createUserSession(token, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("token", token), (0, import_node2.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request2) {
  let data = request2.headers.get("cookie"), token = (await sessionStorage.getSession(data)).get("token");
  return token || null;
}
async function getUserInfo(data) {
  let resData = await (await fetch(
    "https://sleepy-coast-93816.herokuapp.com/api/v1/users/getMe",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${data}`
      }
    }
  )).json();
  if (resData.status !== "success")
    throw new Error("invalid request");
  return console.log(resData), resData;
}
async function destroyUserSession(request2) {
  let session = await sessionStorage.getSession(
    request2.headers.get("cookie")
  );
  return console.log(session.get("token")), session.get("token") ? (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  }) : (0, import_node2.redirect)("/login");
}
async function requireUserSession(request2) {
  let token = await getUserFromSession(request2);
  if (!token)
    throw (0, import_node2.redirect)("/login");
  return token;
}
async function login(email, password) {
  let user = await (await fetch(
    "https://sleepy-coast-93816.herokuapp.com/api/v1/users/login",
    {
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password })
    }
  )).json();
  if (user.status !== "success") {
    let error = new Error("Invalid login");
    throw error.status = 401, error;
  }
  return createUserSession(user.token, "/main");
}

// app/routes/changepass.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function changepassword() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Form, { method: "patch", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "passcu", type: "password", placeholder: "pass cu" }, void 0, !1, {
      fileName: "app/routes/changepass.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "passmoi", type: "password", placeholder: "passmoi" }, void 0, !1, {
      fileName: "app/routes/changepass.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "input",
      {
        name: "confirmpassmoi",
        type: "password",
        placeholder: "confirm passmoi"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/changepass.jsx",
        lineNumber: 9,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { children: "Thay doi" }, void 0, !1, {
      fileName: "app/routes/changepass.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/changepass.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
async function loader({ request: request2 }) {
  let token = await requireUserSession(request2);
  return token || (0, import_node3.redirect)("/login");
}
async function action({ request: request2 }) {
  let token = await requireUserSession(request2);
  if (!token)
    return (0, import_node3.redirect)("/login");
  let formData = await request2.formData(), data = {
    passwordCurrent: formData.get("passcu"),
    password: formData.get("passmoi"),
    passwordConfirm: formData.get("confirmpassmoi")
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
    return console.log(resData), resData.status !== "success" ? (console.log("deo thanh cong"), new Error("Invalid change")) : (0, import_node3.redirect)("/main");
  } catch (error) {
    if (error.status === 401)
      return error;
  }
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_dompurify = require("dompurify");

// app/components/Login.jsx
var import_react5 = require("@remix-run/react"), import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Login() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Form, { method: "post", className: "form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Welcome to VietNam Registry" }, void 0, !1, {
      fileName: "app/components/Login.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h6", { children: "Enter your credentials to access your account" }, void 0, !1, {
      fileName: "app/components/Login.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "input", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faEnvelope }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { name: "email", id: "email", placeholder: "Please enter your email", required: !0 }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Login.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "input", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faKey, size: "sm" }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "password", name: "password", id: "password", placeholder: "Please enter your password", required: !0 }, void 0, !1, {
        fileName: "app/components/Login.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Login.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "button", children: "Login" }, void 0, !1, {
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
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta = () => [{ title: "New Remix App" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { to: "login", children: "login pls" }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action2
});
var import_node4 = require("@remix-run/node");
async function action2(request2) {
  if (console.log(request2), request2.method !== "POST")
    throw (0, import_node4.json)({ message: "Invalid request method" }, { status: 400 });
  return destroyUserSession(request2);
}

// app/routes/_home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeLayout,
  links: () => links2,
  loader: () => loader2
});
var import_react9 = require("@remix-run/react");

// app/components/MainNavigation.jsx
var import_react7 = require("@remix-run/react"), import_react8 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function MainNavigation() {
  let data = (0, import_react7.useLoaderData)(), { name, role, workFor } = data.data.user;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("nav", { className: "sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Link, { to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "image-text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text logo-text", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "name", children: name }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 14,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "profession", children: [
        role === "admin" && "C\u1EE5c \u0111\u0103ng ki\u1EC3m",
        " ",
        role !== "admin" && workFor.name,
        " "
      ] }, void 0, !0, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 15,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "menu-bar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { className: "menu-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.NavLink, { to: "analysis", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: "bx bx-home-alt icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 25,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text nav-text", children: "Dashboard" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 26,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 24,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.NavLink, { to: "/login", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: "bx bx-bar-chart-alt-2 icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 31,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text nav-text", children: "Revenue" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 32,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.NavLink, { to: "/login", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: "bx bx-bell icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 37,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text nav-text", children: "Notifications" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 38,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 36,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.NavLink, { to: "/login", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: "bx bx-pie-chart-alt icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 43,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text nav-text", children: "Analytics" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 44,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 42,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.NavLink, { to: "/login", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: "bx bx-heart icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 49,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text nav-text", children: "Likes" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 48,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.NavLink, { to: "/login", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: "bx bx-wallet icon" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 55,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text nav-text", children: "Wallets" }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 56,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 22,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bottom-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: "bx bx-log-out icon" }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text nav-text", children: "Logout" }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 66,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 64,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/styles/MainNavigation.css
var MainNavigation_default = "/build/_assets/MainNavigation-NPZACDEF.css";

// app/routes/_home.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function HomeLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(MainNavigation, {}, void 0, !1, {
      fileName: "app/routes/_home.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
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
async function loader2({ request: request2 }) {
  let response = await requireUserSession(request2);
  return console.log("blo"), console.log(response), await getUserInfo(response);
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: MainNavigation_default
    }
  ];
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => LoginPage,
  links: () => links3
});
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function LoginPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Login, {}, void 0, !1, {
    fileName: "app/routes/login.jsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
async function action3({ request: request2 }) {
  let formData = await request2.formData(), data = {
    email: formData.get("email"),
    password: formData.get("password")
  };
  console.log(data);
  try {
    let response = await login(data.email, data.password);
    return console.log(response), response;
  } catch (error) {
    if (error.status === 401)
      return error;
  }
}
function links3() {
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
  "routes/forgotpassword": {
    id: "routes/forgotpassword",
    parentId: "root",
    path: "forgotpassword",
    index: void 0,
    caseSensitive: void 0,
    module: route1
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
