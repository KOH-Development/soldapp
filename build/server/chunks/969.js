"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 4173:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhantomWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

const web3_js_1 = __webpack_require__(5681);

class PhantomWalletAdapter extends wallet_adapter_base_1.BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
  }

  get autoApprove() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.autoApprove);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isPhantom) throw new wallet_adapter_base_1.WalletNotInstalledError();

        if (!wallet.isConnected) {
          // HACK: Phantom doesn't reject or emit an event if the popup is closed
          const handleDisconnect = wallet._handleDisconnect;

          try {
            yield new Promise((resolve, reject) => {
              const connect = () => {
                wallet.off('connect', connect);
                resolve();
              };

              wallet._handleDisconnect = (...args) => {
                wallet.off('connect', connect);
                reject(new wallet_adapter_base_1.WalletWindowClosedError());
                return handleDisconnect.apply(wallet, args);
              };

              wallet.on('connect', connect);
              wallet.connect().catch(reason => {
                wallet.off('connect', connect);
                reject(reason);
              });
            });
          } catch (error) {
            if (error instanceof wallet_adapter_base_1.WalletError) throw error;
            throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
          } finally {
            wallet._handleDisconnect = handleDisconnect;
          }
        }

        if (!wallet.publicKey) throw new wallet_adapter_base_1.WalletConnectionError();
        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(wallet.publicKey.toBytes());
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signTransaction(transaction);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signAllTransactions(transactions);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const {
            signature
          } = yield wallet.signMessage(message);
          return Uint8Array.from(signature);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.PhantomWalletAdapter = PhantomWalletAdapter;

/***/ }),

/***/ 7516:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(4173), exports);

/***/ }),

/***/ 3201:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SolflareWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

const web3_js_1 = __webpack_require__(5681);

class SolflareWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
  }

  get autoApprove() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.autoApprove);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isSolflare) throw new wallet_adapter_base_1.WalletNotInstalledError();

        if (!wallet.isConnected) {
          try {
            yield wallet.connect();
          } catch (error) {
            throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
          }
        } // HACK: Solflare doesn't reject its promise if the popup is closed


        if (!wallet.publicKey) throw new wallet_adapter_base_1.WalletConnectionError();
        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(wallet.publicKey.toBytes());
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signTransaction(transaction);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signAllTransactions(transactions);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.SolflareWalletAdapter = SolflareWalletAdapter;

/***/ }),

/***/ 632:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(3201), exports);

/***/ }),

/***/ 141:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SolletWalletAdapter = void 0;

const sol_wallet_adapter_1 = __importDefault(__webpack_require__(6099));

const wallet_adapter_base_1 = __webpack_require__(5938);

class SolletWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._provider = config.provider || 'https://www.sollet.io';
    this._network = config.network || wallet_adapter_base_1.WalletAdapterNetwork.Mainnet;
    this._connecting = false;
    this._wallet = null;
  }

  get publicKey() {
    var _a;

    return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
  }

  get ready() {
    // @FIXME
    return false;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.connected);
  }

  get autoApprove() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.autoApprove);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        let wallet;
        let interval;

        try {
          wallet = new sol_wallet_adapter_1.default(this._provider, this._network); // HACK: sol-wallet-adapter doesn't reject or emit an event if the popup is closed or blocked

          yield new Promise((resolve, reject) => {
            wallet.connect().then(resolve, reject);

            if (typeof this._provider === 'string') {
              let count = 0;
              interval = setInterval(() => {
                const popup = wallet._popup;

                if (popup) {
                  if (popup.closed) reject(new wallet_adapter_base_1.WalletWindowClosedError());
                } else {
                  if (count > 50) reject(new wallet_adapter_base_1.WalletWindowBlockedError());
                }

                count++;
              }, 100);
            }
          });
        } catch (error) {
          throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        } finally {
          if (interval) clearInterval(interval);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signTransaction(transaction);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signAllTransactions(transactions);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.SolletWalletAdapter = SolletWalletAdapter;

/***/ }),

/***/ 2232:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(141), exports);

/***/ }),

/***/ 2969:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(6419), exports);

/***/ }),

/***/ 6419:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTorusWallet = exports.getSolongWallet = exports.getSolletWallet = exports.getSolflareWebWallet = exports.getSolflareWallet = exports.getSlopeWallet = exports.getSafePalWallet = exports.getPhantomWallet = exports.getMathWallet = exports.getLedgerWallet = exports.getCoin98Wallet = exports.getBloctoWallet = exports.getBitpieWallet = exports.ICONS_URL = exports.WalletName = void 0;

const wallet_adapter_bitpie_1 = __webpack_require__(8612);

const wallet_adapter_blocto_1 = __webpack_require__(1936);

const wallet_adapter_coin98_1 = __webpack_require__(6684);

const wallet_adapter_ledger_1 = __webpack_require__(9568);

const wallet_adapter_mathwallet_1 = __webpack_require__(8080);

const wallet_adapter_phantom_1 = __webpack_require__(7516);

const wallet_adapter_safepal_1 = __webpack_require__(3808);

const wallet_adapter_slope_1 = __webpack_require__(5148);

const wallet_adapter_solflare_1 = __webpack_require__(632);

const wallet_adapter_sollet_1 = __webpack_require__(2232);

const wallet_adapter_solong_1 = __webpack_require__(243);

const wallet_adapter_torus_1 = __webpack_require__(2983);

var WalletName;

(function (WalletName) {
  WalletName["Bitpie"] = "Bitpie";
  WalletName["Blocto"] = "Blocto";
  WalletName["Coin98"] = "Coin98";
  WalletName["Ledger"] = "Ledger";
  WalletName["MathWallet"] = "MathWallet";
  WalletName["Phantom"] = "Phantom";
  WalletName["SafePalWallet"] = "SafePal";
  WalletName["Slope"] = "Slope";
  WalletName["Solflare"] = "Solflare";
  WalletName["SolflareWeb"] = "Solflare (Web)";
  WalletName["Sollet"] = "Sollet";
  WalletName["Solong"] = "Solong";
  WalletName["Torus"] = "Torus";
})(WalletName = exports.WalletName || (exports.WalletName = {}));

exports.ICONS_URL = 'https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons';

const getBitpieWallet = config => ({
  name: WalletName.Bitpie,
  url: 'https://bitpiecn.com',
  icon: `${exports.ICONS_URL}/bitpie.svg`,
  adapter: () => new wallet_adapter_bitpie_1.BitpieWalletAdapter(config)
});

exports.getBitpieWallet = getBitpieWallet;

const getBloctoWallet = config => ({
  name: WalletName.Blocto,
  url: 'https://wallet.blocto.app',
  icon: `${exports.ICONS_URL}/blocto.svg`,
  adapter: () => new wallet_adapter_blocto_1.BloctoWalletAdapter(config)
});

exports.getBloctoWallet = getBloctoWallet;

const getCoin98Wallet = config => ({
  name: WalletName.Coin98,
  url: 'https://coin98.com',
  icon: `${exports.ICONS_URL}/coin98.svg`,
  adapter: () => new wallet_adapter_coin98_1.Coin98WalletAdapter(config)
});

exports.getCoin98Wallet = getCoin98Wallet;

const getLedgerWallet = config => ({
  name: WalletName.Ledger,
  url: 'https://www.ledger.com',
  icon: `${exports.ICONS_URL}/ledger.svg`,
  adapter: () => new wallet_adapter_ledger_1.LedgerWalletAdapter(config)
});

exports.getLedgerWallet = getLedgerWallet;

const getMathWallet = config => ({
  name: WalletName.MathWallet,
  url: 'https://mathwallet.org',
  icon: `${exports.ICONS_URL}/mathwallet.svg`,
  adapter: () => new wallet_adapter_mathwallet_1.MathWalletWalletAdapter(config)
});

exports.getMathWallet = getMathWallet;

const getPhantomWallet = config => ({
  name: WalletName.Phantom,
  url: 'https://www.phantom.app',
  icon: `${exports.ICONS_URL}/phantom.svg`,
  adapter: () => new wallet_adapter_phantom_1.PhantomWalletAdapter(config)
});

exports.getPhantomWallet = getPhantomWallet;

const getSafePalWallet = config => ({
  name: WalletName.SafePalWallet,
  url: 'https://www.safepal.io',
  icon: `${exports.ICONS_URL}/safepal.svg`,
  adapter: () => new wallet_adapter_safepal_1.SafePalWalletAdapter(config)
});

exports.getSafePalWallet = getSafePalWallet;

const getSlopeWallet = config => ({
  name: WalletName.Slope,
  url: 'https://www.slope.finance/#/wallet',
  icon: `${exports.ICONS_URL}/slope.svg`,
  adapter: () => new wallet_adapter_slope_1.SlopeWalletAdapter(config)
});

exports.getSlopeWallet = getSlopeWallet;

const getSolflareWallet = config => ({
  name: WalletName.Solflare,
  url: 'https://solflare.com',
  icon: `${exports.ICONS_URL}/solflare.svg`,
  adapter: () => new wallet_adapter_solflare_1.SolflareWalletAdapter(config)
});

exports.getSolflareWallet = getSolflareWallet;

const getSolflareWebWallet = config => ({
  name: WalletName.SolflareWeb,
  url: 'https://solflare.com',
  icon: `${exports.ICONS_URL}/solflare.svg`,
  adapter: () => new wallet_adapter_sollet_1.SolletWalletAdapter(Object.assign(Object.assign({}, config), {
    provider: (config === null || config === void 0 ? void 0 : config.provider) || 'https://solflare.com/access-wallet'
  }))
});

exports.getSolflareWebWallet = getSolflareWebWallet;

const getSolletWallet = config => ({
  name: WalletName.Sollet,
  url: 'https://www.sollet.io',
  icon: `${exports.ICONS_URL}/sollet.svg`,
  adapter: () => new wallet_adapter_sollet_1.SolletWalletAdapter(config)
});

exports.getSolletWallet = getSolletWallet;

const getSolongWallet = config => ({
  name: WalletName.Solong,
  url: 'https://solongwallet.com',
  icon: `${exports.ICONS_URL}/solong.png`,
  adapter: () => new wallet_adapter_solong_1.SolongWalletAdapter(config)
});

exports.getSolongWallet = getSolongWallet;

const getTorusWallet = config => ({
  name: WalletName.Torus,
  url: 'https://tor.us',
  icon: `${exports.ICONS_URL}/torus.svg`,
  adapter: () => new wallet_adapter_torus_1.TorusWalletAdapter(config)
});

exports.getTorusWallet = getTorusWallet;

/***/ })

};
;