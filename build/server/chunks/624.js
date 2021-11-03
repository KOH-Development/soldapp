"use strict";
exports.id = 624;
exports.ids = [624];
exports.modules = {

/***/ 7353:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletAdapterNetwork = exports.BaseWalletAdapter = exports.EventEmitter = void 0;

const eventemitter3_1 = __importDefault(__webpack_require__(9553));

exports.EventEmitter = eventemitter3_1.default;

class BaseWalletAdapter extends eventemitter3_1.default {}

exports.BaseWalletAdapter = BaseWalletAdapter;
var WalletAdapterNetwork;

(function (WalletAdapterNetwork) {
  WalletAdapterNetwork["Mainnet"] = "mainnet-beta";
  WalletAdapterNetwork["Testnet"] = "testnet";
  WalletAdapterNetwork["Devnet"] = "devnet";
})(WalletAdapterNetwork = exports.WalletAdapterNetwork || (exports.WalletAdapterNetwork = {}));

/***/ }),

/***/ 3735:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletWindowClosedError = exports.WalletWindowBlockedError = exports.WalletSignTransactionError = exports.WalletSignMessageError = exports.WalletSendTransactionError = exports.WalletNotConnectedError = exports.WalletKeypairError = exports.WalletPublicKeyError = exports.WalletAccountError = exports.WalletDisconnectionError = exports.WalletDisconnectedError = exports.WalletConnectionError = exports.WalletNotReadyError = exports.WalletNotInstalledError = exports.WalletNotFoundError = exports.WalletError = void 0;

class WalletError extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }

}

exports.WalletError = WalletError;

class WalletNotFoundError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotFoundError';
  }

}

exports.WalletNotFoundError = WalletNotFoundError;

class WalletNotInstalledError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotInstalledError';
  }

}

exports.WalletNotInstalledError = WalletNotInstalledError;

class WalletNotReadyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotReadyError';
  }

}

exports.WalletNotReadyError = WalletNotReadyError;

class WalletConnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletConnectionError';
  }

}

exports.WalletConnectionError = WalletConnectionError;

class WalletDisconnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectedError';
  }

}

exports.WalletDisconnectedError = WalletDisconnectedError;

class WalletDisconnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectionError';
  }

}

exports.WalletDisconnectionError = WalletDisconnectionError;

class WalletAccountError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletAccountError';
  }

}

exports.WalletAccountError = WalletAccountError;

class WalletPublicKeyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletPublicKeyError';
  }

}

exports.WalletPublicKeyError = WalletPublicKeyError;

class WalletKeypairError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletKeypairError';
  }

}

exports.WalletKeypairError = WalletKeypairError;

class WalletNotConnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotConnectedError';
  }

}

exports.WalletNotConnectedError = WalletNotConnectedError;

class WalletSendTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSendTransactionError';
  }

}

exports.WalletSendTransactionError = WalletSendTransactionError;

class WalletSignMessageError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignMessageError';
  }

}

exports.WalletSignMessageError = WalletSignMessageError;

class WalletSignTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignTransactionError';
  }

}

exports.WalletSignTransactionError = WalletSignTransactionError;

class WalletWindowBlockedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowBlockedError';
  }

}

exports.WalletWindowBlockedError = WalletWindowBlockedError;

class WalletWindowClosedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowClosedError';
  }

}

exports.WalletWindowClosedError = WalletWindowClosedError;

/***/ }),

/***/ 5938:
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

__exportStar(__webpack_require__(7353), exports);

__exportStar(__webpack_require__(3735), exports);

__exportStar(__webpack_require__(3708), exports);

__exportStar(__webpack_require__(8344), exports);

/***/ }),

/***/ 3708:
/***/ (function(__unused_webpack_module, exports) {



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
exports.pollUntilReady = exports.poll = void 0;

function poll(callback, interval, count) {
  if (count > 0) {
    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
      const done = yield callback();
      if (!done) poll(callback, interval, count - 1);
    }), interval);
  }
}

exports.poll = poll;

function pollUntilReady(adapter, pollInterval, pollCount) {
  poll(() => {
    const {
      ready
    } = adapter;

    if (ready) {
      if (!adapter.emit('ready')) {
        console.warn(`${adapter.constructor.name} is ready but no listener was registered`);
      }
    }

    return ready;
  }, pollInterval, pollCount);
}

exports.pollUntilReady = pollUntilReady;

/***/ }),

/***/ 8344:
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

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BaseMessageSignerWalletAdapter = exports.BaseSignerWalletAdapter = void 0;

const adapter_1 = __webpack_require__(7353);

const errors_1 = __webpack_require__(3735);

class BaseSignerWalletAdapter extends adapter_1.BaseWalletAdapter {
  sendTransaction(transaction, connection, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        try {
          transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
          transaction.recentBlockhash || (transaction.recentBlockhash = (yield connection.getRecentBlockhash('finalized')).blockhash);

          const {
            signers
          } = options,
                sendOptions = __rest(options, ["signers"]);

          (signers === null || signers === void 0 ? void 0 : signers.length) && transaction.partialSign(...signers);
          transaction = yield this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return yield connection.sendRawTransaction(rawTransaction, sendOptions);
        } catch (error) {
          if (error instanceof errors_1.WalletError) throw error;
          throw new errors_1.WalletSendTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.BaseSignerWalletAdapter = BaseSignerWalletAdapter;

class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {}

exports.BaseMessageSignerWalletAdapter = BaseMessageSignerWalletAdapter;

/***/ }),

/***/ 9042:
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

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConnectionProvider = void 0;

const web3_js_1 = __webpack_require__(5681);

const react_1 = __importStar(__webpack_require__(9297));

const useConnection_1 = __webpack_require__(7861);

const ConnectionProvider = ({
  children,
  endpoint,
  config = {
    commitment: 'confirmed'
  }
}) => {
  const connection = (0, react_1.useMemo)(() => new web3_js_1.Connection(endpoint, config), [endpoint, config]);
  return react_1.default.createElement(useConnection_1.ConnectionContext.Provider, {
    value: {
      connection
    }
  }, children);
};

exports.ConnectionProvider = ConnectionProvider;

/***/ }),

/***/ 9027:
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

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

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
exports.WalletProvider = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

const react_1 = __importStar(__webpack_require__(9297));

const errors_1 = __webpack_require__(5321);

const useLocalStorage_1 = __webpack_require__(7244);

const useWallet_1 = __webpack_require__(67);

const initialState = {
  wallet: null,
  adapter: null,
  ready: false,
  publicKey: null,
  connected: false,
  autoApprove: false
};

const WalletProvider = ({
  children,
  wallets,
  autoConnect = false,
  onError = error => console.error(error),
  localStorageKey = 'walletName'
}) => {
  const [name, setName] = (0, useLocalStorage_1.useLocalStorage)(localStorageKey, null);
  const [{
    wallet,
    adapter,
    ready,
    publicKey,
    connected,
    autoApprove
  }, setState] = (0, react_1.useState)(initialState);
  const [connecting, setConnecting] = (0, react_1.useState)(false);
  const [disconnecting, setDisconnecting] = (0, react_1.useState)(false); // Map of wallet names to wallets

  const walletsByName = (0, react_1.useMemo)(() => wallets.reduce((walletsByName, wallet) => {
    walletsByName[wallet.name] = wallet;
    return walletsByName;
  }, {}), [wallets]); // When the selected wallet changes, initialize the state

  (0, react_1.useEffect)(() => {
    const wallet = name && walletsByName[name];
    const adapter = wallet && wallet.adapter();

    if (adapter) {
      const {
        ready,
        publicKey,
        connected,
        autoApprove
      } = adapter;
      setState({
        wallet,
        adapter,
        connected,
        publicKey,
        ready,
        autoApprove
      });
    } else {
      setState(initialState);
    }
  }, [name, walletsByName, setState]); // If autoConnect is enabled, try to connect when the adapter changes and is ready

  (0, react_1.useEffect)(() => {
    if (autoConnect && adapter && ready && !connecting && !connected) {
      (function () {
        return __awaiter(this, void 0, void 0, function* () {
          setConnecting(true);

          try {
            yield adapter.connect();
          } catch (error) {
            // Clear the selected wallet
            setName(null); // Don't throw error, but onError will still be called
          } finally {
            setConnecting(false);
          }
        });
      })();
    }
  }, [autoConnect, adapter, ready, connecting, connected, setConnecting, setName]); // Reset the state

  const reset = (0, react_1.useCallback)(() => {
    setConnecting(false);
    setDisconnecting(false);
    setState(initialState);
  }, [setConnecting, setDisconnecting, setState]); // Select a wallet by name

  const select = (0, react_1.useCallback)(newName => __awaiter(void 0, void 0, void 0, function* () {
    if (name === newName) return;
    if (adapter) yield adapter.disconnect();
    setName(newName);
  }), [name, adapter, setName]); // Handle the adapter's ready event

  const onReady = (0, react_1.useCallback)(() => setState(state => Object.assign(Object.assign({}, state), {
    ready: true
  })), [setState]); // Handle the adapter's connect event

  const onConnect = (0, react_1.useCallback)(() => {
    if (!adapter) return;
    const {
      connected,
      publicKey,
      ready,
      autoApprove
    } = adapter;
    setState(state => Object.assign(Object.assign({}, state), {
      connected,
      publicKey,
      ready,
      autoApprove
    }));
  }, [adapter, setState]); // Handle the adapter's disconnect event

  const onDisconnect = (0, react_1.useCallback)(() => reset(), [reset]); // Connect the adapter to the wallet

  const connect = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (connecting || disconnecting || connected) return;

    if (!wallet || !adapter) {
      const error = new errors_1.WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!ready) {
      setName(null);

      if (false) {}

      const error = new wallet_adapter_base_1.WalletNotReadyError();
      onError(error);
      throw error;
    }

    setConnecting(true);

    try {
      yield adapter.connect();
    } catch (error) {
      setName(null);
      throw error;
    } finally {
      setConnecting(false);
    }
  }), [connecting, disconnecting, connected, wallet, adapter, onError, ready, setName, setConnecting]); // Disconnect the adapter from the wallet

  const disconnect = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (disconnecting) return;
    if (!adapter) return setName(null);
    setDisconnecting(true);

    try {
      yield adapter.disconnect();
    } finally {
      setName(null);
      setDisconnecting(false);
    }
  }), [disconnecting, adapter, setName, setDisconnecting]); // Send a transaction using the provided connection

  const sendTransaction = (0, react_1.useCallback)((transaction, connection, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!adapter) {
      const error = new errors_1.WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.sendTransaction(transaction, connection, options);
  }), [adapter, onError, connected]); // Sign a transaction if the wallet supports it

  const signTransaction = (0, react_1.useMemo)(() => adapter && 'signTransaction' in adapter ? transaction => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signTransaction(transaction);
  }) : undefined, [adapter, onError, connected]); // Sign multiple transactions if the wallet supports it

  const signAllTransactions = (0, react_1.useMemo)(() => adapter && 'signAllTransactions' in adapter ? transactions => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signAllTransactions(transactions);
  }) : undefined, [adapter, onError, connected]); // Sign an arbitrary message if the wallet supports it

  const signMessage = (0, react_1.useMemo)(() => adapter && 'signMessage' in adapter ? message => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signMessage(message);
  }) : undefined, [adapter, onError, connected]); // Setup and teardown event listeners when the adapter changes

  (0, react_1.useEffect)(() => {
    if (adapter) {
      adapter.on('ready', onReady);
      adapter.on('connect', onConnect);
      adapter.on('disconnect', onDisconnect);
      adapter.on('error', onError);
      return () => {
        adapter.off('ready', onReady);
        adapter.off('connect', onConnect);
        adapter.off('disconnect', onDisconnect);
        adapter.off('error', onError);
      };
    }
  }, [adapter, onReady, onConnect, onDisconnect, onError]);
  return react_1.default.createElement(useWallet_1.WalletContext.Provider, {
    value: {
      wallets,
      autoConnect,
      select,
      wallet,
      adapter,
      publicKey,
      ready,
      connecting,
      disconnecting,
      connected,
      autoApprove,
      connect,
      disconnect,
      sendTransaction,
      signTransaction,
      signAllTransactions,
      signMessage
    }
  }, children);
};

exports.WalletProvider = WalletProvider;

/***/ }),

/***/ 5321:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletNotSelectedError = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

class WalletNotSelectedError extends wallet_adapter_base_1.WalletError {}

exports.WalletNotSelectedError = WalletNotSelectedError;

/***/ }),

/***/ 6624:
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

__exportStar(__webpack_require__(4288), exports);

__exportStar(__webpack_require__(9042), exports);

__exportStar(__webpack_require__(5321), exports);

__exportStar(__webpack_require__(7861), exports);

__exportStar(__webpack_require__(7244), exports);

__exportStar(__webpack_require__(67), exports);

__exportStar(__webpack_require__(9027), exports);

/***/ }),

/***/ 4288:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAnchorWallet = void 0;

const react_1 = __webpack_require__(9297);

const useWallet_1 = __webpack_require__(67);

function useAnchorWallet() {
  const {
    publicKey,
    signTransaction,
    signAllTransactions
  } = (0, useWallet_1.useWallet)();
  return (0, react_1.useMemo)(() => publicKey && signTransaction && signAllTransactions ? {
    publicKey,
    signTransaction,
    signAllTransactions
  } : undefined, [publicKey, signTransaction, signAllTransactions]);
}

exports.useAnchorWallet = useAnchorWallet;

/***/ }),

/***/ 7861:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useConnection = exports.ConnectionContext = void 0;

const react_1 = __webpack_require__(9297);

exports.ConnectionContext = (0, react_1.createContext)({});

function useConnection() {
  return (0, react_1.useContext)(exports.ConnectionContext);
}

exports.useConnection = useConnection;

/***/ }),

/***/ 7244:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useLocalStorage = void 0;

const react_1 = __webpack_require__(9297);

function useLocalStorage(key, defaultState) {
  const [value, setValue] = (0, react_1.useState)(() => {
    if (typeof localStorage === 'undefined') return defaultState;
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return defaultState;
  });
  const setLocalStorage = (0, react_1.useCallback)(newValue => {
    if (newValue === value) return;
    setValue(newValue);

    if (newValue === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  }, [value, setValue, key]);
  return [value, setLocalStorage];
}

exports.useLocalStorage = useLocalStorage;

/***/ }),

/***/ 67:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useWallet = exports.WalletContext = void 0;

const react_1 = __webpack_require__(9297);

exports.WalletContext = (0, react_1.createContext)({});

function useWallet() {
  return (0, react_1.useContext)(exports.WalletContext);
}

exports.useWallet = useWallet;

/***/ })

};
;