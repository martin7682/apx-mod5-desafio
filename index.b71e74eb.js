// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJYvl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
var _butomEl = require("./components/butomEl");
var _handPapel = require("./components/hand-papel");
var _handTijera = require("./components/hand-tijera");
var _handPiedra = require("./components/hand-piedra");
var _presentationTitle = require("./components/presentationTitle");
var _rulesComp = require("./components/rules-comp");
var _resultadoGanar = require("./components/resultado-ganar");
var _resultadoPerder = require("./components/resultado-perder");
var _resultadoEmpatar = require("./components/resultado-empatar");
var _score = require("./components/score");
var _state = require("./state");
(function() {
    const root = document.querySelector(".root");
    (0, _router.initRouter)(root);
    (0, _state.state).init();
    (0, _butomEl.initButtonEl)();
    (0, _presentationTitle.initPtesentationTitle)();
    (0, _rulesComp.initRules)();
    (0, _handPapel.initHandPapel)();
    (0, _handPiedra.initHandPiedra)();
    (0, _handTijera.initHandTijera)();
    (0, _resultadoGanar.initResultadoGanar)();
    (0, _resultadoPerder.initResultadoPerder)();
    (0, _resultadoEmpatar.initResultadoEmpatar)();
    (0, _score.initScore)();
})();

},{"./router":"4QFWt","./components/butomEl":"2eP7E","./components/hand-papel":"e7Iu6","./components/hand-piedra":"ersu0","./components/hand-tijera":"6UOe3","./components/presentationTitle":"ilEZ1","./components/resultado-ganar":"7K9IS","./components/resultado-perder":"aN0Sf","./components/resultado-empatar":"3GDSy","./components/score":"5XKJp","./state":"1Yeju","./components/rules-comp":"v2TAj"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _wellcome = require("./pages/wellcome");
var _rules = require("./pages/rules");
var _play = require("./pages/play");
var _ganaste = require("./pages/resutls/ganaste");
var _perdiste = require("./pages/resutls/perdiste");
var _empate = require("./pages/resutls/empate");
const BASE_PATH = "/desafio-dwf-5";
const routes = [
    {
        path: /\/wellcome/,
        component: (0, _wellcome.wellcome)
    },
    {
        path: /\/rules/,
        component: (0, _rules.rules)
    },
    {
        path: /\/play/,
        component: (0, _play.play)
    },
    {
        path: /\/ganar/,
        component: (0, _ganaste.ganar)
    },
    {
        path: /\/perder/,
        component: (0, _perdiste.perder)
    },
    {
        path: /\/empate/,
        component: (0, _empate.empate)
    }
];
function isGithubPages() {
    return location.host.includes("github.io");
}
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        console.log("el handler recibio una nueva ruta", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                i: goTo
            });
            console.log(el);
            if (container.firstElementChild) container.firstElementChild.remove();
            container.appendChild(el);
        }
    }
    if (location.host.includes("github.io")) goTo("/welcome");
    else if (location.pathname == "/") goTo("/wellcome");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/wellcome":"i1dlq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/rules":"jisSM","./pages/play":"hbEIY","./pages/resutls/ganaste":"75NBJ","./pages/resutls/perdiste":"3uW51","./pages/resutls/empate":"emSWC"}],"i1dlq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wellcome", ()=>wellcome);
function wellcome(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <custom-presentation></custom-presentation>
    <custom-button class="buttonEl" title="Empezar Martin"></custom-button>
    <div class="hands">
        <hand-piedra></hand-piedra>
        <hand-papel></hand-papel>
        <hand-tijera></hand-tijera>
    </div>
    `;
    div.className = "contenedor";
    const style = document.createElement("style");
    style.textContent = `
    .contenedor{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        padding: 85px 0 0 0;
    }
    .hands{
        display:flex;
        width: 80%;
        justify-content: space-evenly;
        position: relative;
        top: 10px;
    }

    @media(min-width:960px){
        .hands{
            width: 50%;
        }
    }
    `;
    function buttonAction() {
        const buttonEl = div.querySelector(".buttonEl");
        buttonEl?.addEventListener("click", (e)=>{
            params.i("/rules");
        });
    }
    buttonAction();
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jisSM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rules", ()=>rules);
function rules(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <custom-rules></custom-rules>
    <custom-button class="buttonEl" title="¡Jugá!"></custom-button>
    
    <div class="hands">
        <hand-piedra></hand-piedra>
        <hand-papel></hand-papel>
        <hand-tijera></hand-tijera>
    </div>
    `;
    div.className = "contenedor";
    const style = document.createElement("style");
    style.textContent = `
    
    .contenedor{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        padding: 85px 0 0 0;
    }
    .hands{
        display:flex;
        width: 80%;
        justify-content: space-evenly;
        position: relative;
        top: 10px;
    }
    @media(min-width:960px){
        .hands{
            width: 50%;
        }
    }
    `;
    function buttonAction() {
        const buttonEl = div.querySelector(".buttonEl");
        buttonEl?.addEventListener("click", ()=>{
            params.i("/play");
        });
    }
    buttonAction();
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbEIY":[function(require,module,exports) {
//import { clear, time } from "console";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "play", ()=>play);
var _timers = require("timers");
var _state = require("../../state");
function play(direction) {
    const piedraImage = require("c4fc474ad2de02c7");
    const papelImage = require("185269758e8f58ca");
    const tijeraImage = require("29174698e241f35b");
    const imagenPiedra = require("86113892617815dd");
    const imagenPapel = require("33431e39a66f3c9c");
    const imagenTijera = require("540779e20b287855");
    const imagenFin = require("fe4ae9aba4c169ab");
    var imagesHuman = [
        imagenPiedra,
        imagenPapel,
        imagenTijera,
        imagenFin
    ];
    var currentImageHuman = 0;
    var imagesComputer = [
        piedraImage,
        papelImage,
        tijeraImage
    ];
    var currentImageComputer = 0;
    let intervaloHuman = setInterval(function() {
        var imgHuman = document.getElementById("imageHuman");
        imgHuman.src = imagesHuman[currentImageHuman];
        currentImageHuman = (currentImageHuman + 1) % imagesHuman.length;
        var imgComputer = document.getElementById("imageComputer");
        imgComputer.src = imagesComputer[currentImageComputer];
        currentImageComputer = (currentImageComputer + 1) % imagesComputer.length;
        if (imgHuman.src == imagesHuman[3]) {
            direction.i("/rules");
            clearInterval(intervaloHuman);
        }
    }, 1000);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class = "contador">
        <img id="imageHuman" >
        <img id="imageComputer" >
    </div>
    <div class="hands-computer">
        <img hand="piedra" class="hand-piedra-computer hand-disabled" src=${imagenPiedra}>
        <img hand="papel" class="hand-papel-computer hand-disabled" src=${imagenPapel}>
        <img hand="tijera" class="hand-tijera-computer hand-disabled" src=${imagenTijera}>
    </div>
    <div class="hands-player">
        <img class="hand-piedra-player" src=${imagenPiedra}>
        <img class="hand-papel-player" src=${imagenPapel}>
        <img class="hand-tijera-player" src=${imagenTijera}>
    </div>
    `;
    div.classList.add("contenedor");
    const handComputerPiedra = div.querySelector(".hand-piedra-computer");
    const handComputerPapel = div.querySelector(".hand-papel-computer");
    const handComputerTijera = div.querySelector(".hand-tijera-computer");
    const style = document.createElement("style");
    style.textContent = `
    .hands-player{
        display:flex;
        width: 100%;
        justify-content: space-evenly;
        translate: 0px 5px;
    }
    @media(min-width:960px){
        .hands-player{
            width: 70%;
        }
    }

    .hand-disabled{
        display: none
    }

    .hand-piedra-computer,
    .hand-papel-computer,
    .hand-tijera-computer{
        transform: rotate(180deg);
        
    }
    
    .hand-piedra-player:hover,
    .hand-papel-player:hover,
    .hand-tijera-player:hover{
        transform: translateY(-80px);
        bottom: -50px;
        transition: all 1s;
    }

    .hand-select{
        transform: translateY(-25px);
        transition: all 0.5s;
    }
    .deselected{
        opacity: 0.5;
        transform: translateY(5px);
        transition: all 0.5s;
    }
    
    .contenedor{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        padding: 85px 0 0 0;
    }
    .contador{
        
        border-radius: 100%;
        border: solid 15px black;
        padding: 50px 50px;
        
    }
    .jugar{
        padding:50px 0 0 0;
    }
    `;
    const piedra = div.querySelector(".hand-piedra-player");
    const papel = div.querySelector(".hand-papel-player");
    const tijera = div.querySelector(".hand-tijera-player");
    const time = div.querySelector(".contador");
    const hands = div.querySelector(".hands-player").children;
    for (const h of hands)h.addEventListener("click", ()=>{
        const clase = h.getAttribute("class");
        clearInterval(intervaloHuman);
        if (clase == "hand-piedra-player") {
            (0, _state.state).playerMove("piedra");
            classDinamic(piedra);
        } else if (clase == "hand-papel-player") {
            (0, _state.state).playerMove("papel");
            classDinamic(papel);
        } else if (clase == "hand-tijera-player") {
            (0, _state.state).playerMove("tijera");
            classDinamic(tijera);
        }
    });
    function classDinamic(params) {
        for (const h of hands)h.classList.add("deselected");
        if (params == piedra) {
            params.classList.add("hand-select");
            params.classList.remove("deselected");
            params.classList.remove("hand-piedra-player");
            papel?.classList.remove("hand-papel-player");
            tijera?.classList.remove("hand-tijera-player");
            (0, _timers.setTimeout)(()=>{
                papel?.classList.add("hand-disabled");
                tijera?.classList.add("hand-disabled");
                div.classList.add("jugar");
            }, 1000);
        }
        if (params == papel) {
            params.classList.add("hand-select");
            params.classList.remove("deselected");
            params.classList.remove("hand-papel-player");
            piedra?.classList.remove("hand-piedra-player");
            tijera?.classList.remove("hand-tiejra-player");
            (0, _timers.setTimeout)(()=>{
                piedra?.classList.add("hand-disabled");
                tijera?.classList.add("hand-disabled");
                div.classList.add("jugar");
            }, 1000);
        }
        if (params == tijera) {
            params.classList.add("hand-select");
            params.classList.remove("deselected");
            params.classList.remove("hand-tijera-player");
            papel?.classList.remove("hand-papel-player");
            piedra?.classList.remove("hand-piedra-player");
            (0, _timers.setTimeout)(()=>{
                piedra?.classList.add("hand-disabled");
                papel?.classList.add("hand-disabled");
                div.classList.add("jugar");
            }, 1000);
        }
        const jugada = (0, _state.state).getState().currentPlay.myPlay;
        const jugadaMaquina = (0, _state.state).getState().currentPlay.computerPlay;
        (0, _timers.setTimeout)(()=>{
            time?.remove();
            if (jugadaMaquina == "piedra") {
                handComputerPiedra?.classList.remove("hand-disabled");
                const re = (0, _state.state).whoWins(jugada, "piedra");
                console.log(re);
            }
            if (jugadaMaquina == "papel") {
                handComputerPapel?.classList.remove("hand-disabled");
                const re1 = (0, _state.state).whoWins(jugada, "papel");
                console.log(re1);
            }
            if (jugadaMaquina == "tijera") {
                handComputerTijera?.classList.remove("hand-disabled");
                const re2 = (0, _state.state).whoWins(jugada, "tijera");
                console.log(re2);
            }
        }, 1000);
        (0, _timers.setTimeout)(()=>{
            const currentState = (0, _state.state).getState();
            if (currentState.currentPlay.resultado == "empate") {
                (0, _state.state).pushToHistory("empate");
                direction.i("/empate");
            } else if (currentState.currentPlay.resultado == "ganaste") {
                (0, _state.state).pushToHistory("ganaste");
                direction.i("/ganar");
            } else if (currentState.currentPlay.resultado == "perdiste") {
                (0, _state.state).pushToHistory("perdiste");
                direction.i("/perder");
            }
        }, 2800);
    }
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","c4fc474ad2de02c7":"bjciQ","185269758e8f58ca":"5qZNX","29174698e241f35b":"arkEu","timers":"l8XYx","fe4ae9aba4c169ab":"jvrCg","86113892617815dd":"2yGim","33431e39a66f3c9c":"4KlgF","540779e20b287855":"3m73m"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentPlay: {
            myPlay: "",
            computerPlay: "",
            resultado: []
        },
        historyScore: {
            jugador: 0,
            computadora: 0
        }
    },
    init () {
        const data = localStorage.getItem("scoreData");
        if (!data) return console.log("bienvenidos a pidra papel y tijera");
        this.data.historyScore = JSON.parse(data);
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
    },
    playerMove (selectHand) {
        const currentStateData = this.getState();
        currentStateData.currentPlay.myPlay = selectHand;
        const computerMove = ()=>{
            const randomMove = Math.floor(Math.random() * 3);
            const playList = [
                "piedra",
                "papel",
                "tijera"
            ];
            const randomPlay = playList[randomMove];
            return randomPlay;
        };
        const data = currentStateData;
        data.currentPlay.computerPlay = computerMove();
    },
    whoWins (jugador, computadora) {
        const data = this.getState();
        const resultado = data.currentPlay.resultado;
        const piedra = jugador == "piedra" && computadora == "tijera";
        const papel = jugador == "papel" && computadora == "piedra";
        const tijera = jugador == "tijera" && computadora == "papel";
        const playerWins = [
            piedra,
            papel,
            tijera
        ].includes(true);
        const piedraEmpate = jugador == "piedra" && computadora == "piedra";
        const papelEmpate = jugador == "papel" && computadora == "papel";
        const tijeraEmpate = jugador == "tijera" && computadora == "tijera";
        const empate = [
            piedraEmpate,
            papelEmpate,
            tijeraEmpate
        ].includes(true);
        if (empate) return resultado[0] = "empate";
        if (playerWins) return resultado[0] = "ganaste";
        else return resultado[0] = "perdiste";
    },
    pushToHistory (resultado) {
        const currentStateData = this.getState();
        const jugadorScore = currentStateData.historyScore.jugador;
        const computerScore = currentStateData.historyScore.computadora;
        if (resultado == "ganaste") this.setState({
            ...currentStateData,
            historyScore: {
                jugador: jugadorScore + 1,
                computadora: computerScore
            }
        });
        else if (resultado == "perdiste") this.setState({
            ...currentStateData,
            historyScore: {
                jugador: jugadorScore,
                computadora: computerScore + 1
            }
        });
        this.saveScore();
    },
    saveScore () {
        const currentStateData = this.getState().historyScore;
        localStorage.setItem("scoreData", JSON.stringify(currentStateData));
    },
    borrarScore () {
        const sd = {
            jugador: 0,
            computadora: 0
        };
        localStorage.setItem("scoreData", JSON.stringify(sd));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjciQ":[function(require,module,exports) {
module.exports = require("f4877f6a07d2c0e0").getBundleURL("7UhFu") + "piedra-img.c561a645.svg" + "?" + Date.now();

},{"f4877f6a07d2c0e0":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5qZNX":[function(require,module,exports) {
module.exports = require("2b919f747ebb950f").getBundleURL("7UhFu") + "papel-img.6385c276.svg" + "?" + Date.now();

},{"2b919f747ebb950f":"lgJ39"}],"arkEu":[function(require,module,exports) {
module.exports = require("3fb5782c9a7ab6d3").getBundleURL("7UhFu") + "tijera-img.372a5382.svg" + "?" + Date.now();

},{"3fb5782c9a7ab6d3":"lgJ39"}],"l8XYx":[function(require,module,exports) {
var global = arguments[3];
var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;
// DOM APIs, for completeness
exports.setTimeout = function() {
    return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
    return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function(timeout) {
    if (timeout) timeout.close();
};
function Timeout(id, clearFn) {
    this._id = id;
    this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
    this._clearFn.call(scope, this._id);
};
// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = msecs;
};
exports.unenroll = function(item) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = -1;
};
exports._unrefActive = exports.active = function(item) {
    clearTimeout(item._idleTimeoutId);
    var msecs = item._idleTimeout;
    if (msecs >= 0) item._idleTimeoutId = setTimeout(function onTimeout() {
        if (item._onTimeout) item._onTimeout();
    }, msecs);
};
// setimmediate attaches itself to the global object
require("6ce9ef65cd3e53cd");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;

},{"6ce9ef65cd3e53cd":"g4k8b"}],"g4k8b":[function(require,module,exports) {
var global = arguments[3];
var process = require("f2aab880515f961c");
(function(global, undefined) {
    "use strict";
    if (global.setImmediate) return;
    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;
    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") callback = new Function("" + callback);
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i + 1];
        // Store and register the task
        var task = {
            callback: callback,
            args: args
        };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }
    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }
    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch(args.length){
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }
    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
        // "too much recursion" error.
        setTimeout(runIfPresent, 0, handle);
        else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally{
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }
    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function() {
                runIfPresent(handle);
            });
        };
    }
    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }
    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) runIfPresent(+event.data.slice(messagePrefix.length));
        };
        if (global.addEventListener) global.addEventListener("message", onGlobalMessage, false);
        else global.attachEvent("onmessage", onGlobalMessage);
        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }
    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };
        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }
    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function() {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }
    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }
    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
    // Don't get fooled by e.g. browserify environments.
    if (({}).toString.call(global.process) === "[object process]") // For Node.js before 0.9
    installNextTickImplementation();
    else if (canUsePostMessage()) // For non-IE10 modern browsers
    installPostMessageImplementation();
    else if (global.MessageChannel) // For web workers, where supported
    installMessageChannelImplementation();
    else if (doc && "onreadystatechange" in doc.createElement("script")) // For IE 6–8
    installReadyStateChangeImplementation();
    else // For older browsers
    installSetTimeoutImplementation();
    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);

},{"f2aab880515f961c":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"jvrCg":[function(require,module,exports) {
module.exports = require("772db987e3b68fde").getBundleURL("7UhFu") + "count.aca6d215.svg" + "?" + Date.now();

},{"772db987e3b68fde":"lgJ39"}],"2yGim":[function(require,module,exports) {
module.exports = require("3d91c3aece960cfe").getBundleURL("7UhFu") + "human-piedra.7debb643.svg" + "?" + Date.now();

},{"3d91c3aece960cfe":"lgJ39"}],"4KlgF":[function(require,module,exports) {
module.exports = require("257cef55da6da385").getBundleURL("7UhFu") + "human-papel.997dd7d0.svg" + "?" + Date.now();

},{"257cef55da6da385":"lgJ39"}],"3m73m":[function(require,module,exports) {
module.exports = require("e01a0479b535da5d").getBundleURL("7UhFu") + "human-tijera.26316ea5.svg" + "?" + Date.now();

},{"e01a0479b535da5d":"lgJ39"}],"75NBJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ganar", ()=>ganar);
var _state = require("../../../state");
function ganar(params) {
    const div = document.createElement("div");
    const currentStateData = (0, _state.state).getState();
    div.innerHTML = `
        <resultado-ganar class="star"></resultado-ganar>
        <custom-score puntosJugador=${currentStateData.historyScore.jugador} puntosMaquina=${currentStateData.historyScore.computadora}></custom-score>
        <custom-button title="Volver a jugar" class="buttonEl"></custom-button>
        <custom-button title="Borrar puntaje" class="buttonEl reset"></custom-button>
    `;
    div.className = "contenedor";
    const style = document.createElement("style");
    style.textContent = `
    .contenedor{
        background: var(--fondo-ganaste);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100vh;
    }
    .buttonEl{
        margin-top:4px;
    }
    `;
    div.appendChild(style);
    const buttonEl = div.querySelector(".buttonEl");
    const reset = div.querySelector(".reset");
    buttonEl?.addEventListener("click", ()=>{
        params.i("/play");
    });
    reset?.addEventListener("click", ()=>{
        (0, _state.state).borrarScore();
        (0, _state.state).init();
        params.i("/rules");
    });
    return div;
}

},{"../../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3uW51":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "perder", ()=>perder);
var _state = require("../../../state");
function perder(params) {
    const div = document.createElement("div");
    const currentStateData = (0, _state.state).getState();
    div.innerHTML = `
        <resultado-perder class="star"></resultado-perder>
        <custom-score puntosJugador=${currentStateData.historyScore.jugador} puntosMaquina=${currentStateData.historyScore.computadora}></custom-score>
        <custom-button title="Volver a jugar" class="buttonEl"></custom-button>
        <custom-button title="Borrar puntaje" class="buttonEl reset"></custom-button>
    `;
    div.className = "contenedor";
    const style = document.createElement("style");
    style.textContent = `
    .contenedor{
        background: var(--fondo-perdiste);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100vh;
    }
    .buttonEl{
        margin-top:4px;
    }
    `;
    div.appendChild(style);
    const buttonEl = div.querySelector(".buttonEl");
    const reset = div.querySelector(".reset");
    buttonEl?.addEventListener("click", ()=>{
        params.i("/play");
    });
    reset?.addEventListener("click", ()=>{
        params.i("/rules");
        (0, _state.state).borrarScore();
        (0, _state.state).init();
    });
    return div;
}

},{"../../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"emSWC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "empate", ()=>empate);
var _state = require("../../../state");
function empate(params) {
    const div = document.createElement("div");
    const currentStateData = (0, _state.state).getState();
    div.innerHTML = `
        <resultado-empatar class="star"></resultado-empatar>
        <custom-score puntosJugador=${currentStateData.historyScore.jugador} puntosMaquina=${currentStateData.historyScore.computadora}></custom-score>
        <custom-button title="Volver a jugar" class="buttonEl"></custom-button>
        <custom-button title="Borrar puntaje" class="buttonEl reset"></custom-button>
    `;
    div.className = "contenedor";
    const style = document.createElement("style");
    style.textContent = `
    .contenedor{
        background: var(--fondo-empate);
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        justify-content: space-evenly;
    }
    .botonEl{
        margin-top:4px;
    }
    .star{
        width:255px;
        height:260px;
    }
    `;
    div.appendChild(style);
    const buttonEl = div.querySelector(".buttonEl");
    const reset = div.querySelector(".reset");
    buttonEl?.addEventListener("click", ()=>{
        params.i("/play");
    });
    reset?.addEventListener("click", ()=>{
        (0, _state.state).borrarScore();
        (0, _state.state).init();
        params.i("/rules");
    });
    return div;
}

},{"../../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2eP7E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButtonEl", ()=>initButtonEl);
function initButtonEl() {
    class buttonComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const title = this.getAttribute("title");
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `
                <div class="contenedor-buttonEl">
                    <buttonEl class="buttonEl">${this.title}</buttonEl>
                </div>
            `;
            style.innerHTML = `
            .contenedor-buttonEl{
                display: flex
            }
            .buttonEl{
                background: #006CFC;
                color: #D8FCFC;
                border: 10px solid #001997;
                border-radius: 10px;
                width: 322px;
                height: 87px;
                text-align: center;
                padding: 18px 0 0 0;
                font-size: 45px;
                font-family: 'Odibee Sans';
                
                
            }
            @media(min-width:960px){
                .buttonEl{
                    width: 336px;
                }
            }
            `;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-button", buttonComponent);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e7Iu6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHandPapel", ()=>initHandPapel);
function initHandPapel() {
    class handPapel extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const imageSrc = require("57e75e3220780275");
            const img = document.createElement("img");
            img.src = imageSrc;
            shadow.appendChild(img);
        }
    }
    customElements.define("hand-papel", handPapel);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","57e75e3220780275":"kIgFK"}],"kIgFK":[function(require,module,exports) {
module.exports = require("773e933694599aa").getBundleURL("7UhFu") + "papel.5ec5e1f5.svg" + "?" + Date.now();

},{"773e933694599aa":"lgJ39"}],"ersu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHandPiedra", ()=>initHandPiedra);
function initHandPiedra() {
    class handPiedra extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const imageSrc = require("17d8f24ff03865cd");
            const img = document.createElement("img");
            img.src = imageSrc;
            shadow.appendChild(img);
        }
    }
    customElements.define("hand-piedra", handPiedra);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","17d8f24ff03865cd":"8DNbB"}],"8DNbB":[function(require,module,exports) {
module.exports = require("a713f5a01c119bcf").getBundleURL("7UhFu") + "piedra.ce0acb14.svg" + "?" + Date.now();

},{"a713f5a01c119bcf":"lgJ39"}],"6UOe3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHandTijera", ()=>initHandTijera);
function initHandTijera() {
    class handTijera extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const imageSrc = require("2ea08a385b7d0532");
            const img = document.createElement("img");
            img.src = imageSrc;
            shadow.appendChild(img);
        }
    }
    customElements.define("hand-tijera", handTijera);
}

},{"2ea08a385b7d0532":"5sSbh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5sSbh":[function(require,module,exports) {
module.exports = require("6fbf5dd2c2485fd7").getBundleURL("7UhFu") + "tijera.f02a9a5c.svg" + "?" + Date.now();

},{"6fbf5dd2c2485fd7":"lgJ39"}],"ilEZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPtesentationTitle", ()=>initPtesentationTitle);
function initPtesentationTitle() {
    class presentationComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const imageSrc = require("f7f2b5efcc173b");
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="image"></div>
            `;
            const contenedor = div.querySelector(".image");
            contenedor.innerHTML = `
            <img src=${imageSrc}>
            `;
            shadow.appendChild(div);
        }
    }
    customElements.define("custom-presentation", presentationComponent);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","f7f2b5efcc173b":"dwKT8"}],"dwKT8":[function(require,module,exports) {
module.exports = require("466ee0766f2b69a0").getBundleURL("7UhFu") + "piedra-papel-tijera.d5200c5a.svg" + "?" + Date.now();

},{"466ee0766f2b69a0":"lgJ39"}],"7K9IS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultadoGanar", ()=>initResultadoGanar);
function initResultadoGanar() {
    class resutladoGanar extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const imageSrc = require("4dbd601fb6e8b2cb");
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="image">                 
                </div>
            `;
            const contenedor = div.querySelector(".image");
            contenedor.innerHTML = `
                <img src=${imageSrc}>
            `;
            shadow.appendChild(div);
        }
    }
    customElements.define("resultado-ganar", resutladoGanar);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","4dbd601fb6e8b2cb":"frUXQ"}],"frUXQ":[function(require,module,exports) {
module.exports = require("fcdaaf0361023c68").getBundleURL("7UhFu") + "estrella-ganaste.331d4bb8.svg" + "?" + Date.now();

},{"fcdaaf0361023c68":"lgJ39"}],"aN0Sf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultadoPerder", ()=>initResultadoPerder);
function initResultadoPerder() {
    class resutladoPerder extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const imageSrc = require("6821d6cfc889167f");
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="image">                 
                </div>
            `;
            const contenedor = div.querySelector(".image");
            contenedor.innerHTML = `
                <img src=${imageSrc}>
            `;
            shadow.appendChild(div);
        }
    }
    customElements.define("resultado-perder", resutladoPerder);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","6821d6cfc889167f":"coars"}],"coars":[function(require,module,exports) {
module.exports = require("b57211f9e99e3cbb").getBundleURL("7UhFu") + "estrella-perdiste.ea924636.svg" + "?" + Date.now();

},{"b57211f9e99e3cbb":"lgJ39"}],"3GDSy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultadoEmpatar", ()=>initResultadoEmpatar);
function initResultadoEmpatar() {
    class resutladoEmpatar extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const imageSrc = require("33cf74a12db6a0a4");
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="image">                 
                </div>
            `;
            const contenedor = div.querySelector(".image");
            contenedor.innerHTML = `
                <img src=${imageSrc}>
            `;
            shadow.appendChild(div);
        }
    }
    customElements.define("resultado-empatar", resutladoEmpatar);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","33cf74a12db6a0a4":"amSEh"}],"amSEh":[function(require,module,exports) {
module.exports = require("3d378c68f9d3fdeb").getBundleURL("7UhFu") + "estrella-empate.8090034c.svg" + "?" + Date.now();

},{"3d378c68f9d3fdeb":"lgJ39"}],"5XKJp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initScore", ()=>initScore);
function initScore() {
    class score extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const puntosJugador = this.getAttribute("puntosJugador");
            const puntosMaquina = this.getAttribute("puntosMaquina");
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="score">
                    <h1 class="score_title">Score</h1>
                    <p class="player">Vos: ${puntosJugador}</p>
                    <p class="computer">Máquina: ${puntosMaquina}</p>
                </div>
            `;
            const style = document.createElement("style");
            style.textContent = `
            .score{
                display:flex;
                font-family: 'Odibee Sans';
                height: 175px;
                width:235px;
                justify-content: center;
                flex-direction: column;
                border: 10px solid #000000;
                border-radius: 10px;
                background: #FFFFFF;
                margin:0 0 10px 0;
            }
            .score_title{
                margin: 5px
                font-size:55px;
                letter-spacing: 0.05em;
                text-align: center;
            }
            .player,
            .computer{
                text-align:end;
                font-size:45px;
                margin: 0 5px 3px 0;
            }
            
            `;
            shadow.append(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-score", score);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"v2TAj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRules", ()=>initRules);
function initRules() {
    class rulesComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            div.className = "rules";
            div.innerHTML = `
                <h3 class="rules-text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen 3 segundos.</h3>
            `;
            const style = document.createElement("style");
            style.innerHTML = `
            .rules{
                display:flex;
                font-family: "Noto Serif Display", serif;
                color: black;
                text-align: center;
            }
            .rules-text{
                font-size: 40px;
                width: 317px;
                height: 330px;
                padding:0px;
                margin:0px;
            }
            
            `;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-rules", rulesComponent);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire1b67")

//# sourceMappingURL=index.b71e74eb.js.map
