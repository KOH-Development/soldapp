"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6624);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5681);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5938);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const SOLANA_NETWORK = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_4__.WalletAdapterNetwork.Mainnet; // const SOLANA_NETWORK = WalletAdapterNetwork.Devnet;

const network = SOLANA_NETWORK;
const WalletProvider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__.default)(() => Promise.all(/* import() */[__webpack_require__.e(526), __webpack_require__.e(969), __webpack_require__.e(857)]).then(__webpack_require__.bind(__webpack_require__, 7857)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7857)],
    modules: ["_app.tsx -> " + "../contexts/ClientWalletProvider"]
  }
});

function MyApp({
  Component,
  pageProps
}) {
  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl)(network), []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.ConnectionProvider, {
    endpoint: endpoint,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(WalletProvider, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ 6099:
/***/ ((module) => {

module.exports = require("@project-serum/sol-wallet-adapter");

/***/ }),

/***/ 8612:
/***/ ((module) => {

module.exports = require("@solana/wallet-adapter-bitpie");

/***/ }),

/***/ 1936:
/***/ ((module) => {

module.exports = require("@solana/wallet-adapter-blocto");

/***/ }),

/***/ 6684:
/***/ ((module) => {

module.exports = require("@solana/wallet-adapter-coin98");

/***/ }),

/***/ 9568:
/***/ ((module) => {

module.exports = require("@solana/wallet-adapter-ledger");

/***/ }),

/***/ 8080:
/***/ ((module) => {

module.exports = require("@solana/wallet-adapter-mathwallet");

/***/ }),

/***/ 3808:
/***/ ((module) => {

module.exports = require("@solana/wallet-adapter-safepal");

/***/ }),

/***/ 5148:
/***/ ((module) => {

module.exports = require("@solana/wallet-adapter-slope");

/***/ }),

/***/ 243:
/***/ ((module) => {

module.exports = require("@solana/wallet-adapter-solong");

/***/ }),

/***/ 2983:
/***/ ((module) => {

module.exports = require("@solana/wallet-adapter-torus");

/***/ }),

/***/ 5681:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 9553:
/***/ ((module) => {

module.exports = require("eventemitter3");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [624,152], () => (__webpack_exec__(9064)));
module.exports = __webpack_exports__;

})();