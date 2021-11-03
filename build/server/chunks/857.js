"use strict";
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 7857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientWalletProvider": () => (/* binding */ ClientWalletProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6624);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2969);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4526);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






__webpack_require__.e(/* import() */ 121).then(__webpack_require__.t.bind(__webpack_require__, 2121, 23));
function ClientWalletProvider(props) {
  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [(0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.getPhantomWallet)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.getSolflareWallet)(), // getTorusWallet({
  //   options: {
  //     // TODO: Get your own tor.us wallet client Id
  //     clientId:
  //       "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
  //   },
  // }),
  // getLedgerWallet(),
  // getSolongWallet(),
  // getMathWallet(),
  (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.getSolletWallet)()], []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.WalletProvider, _objectSpread(_objectSpread({
    wallets: wallets
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__/* .WalletModalProvider */ .sR, _objectSpread({}, props))
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientWalletProvider);

/***/ })

};
;