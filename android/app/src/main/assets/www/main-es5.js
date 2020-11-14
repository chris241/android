function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "../account/account.module": ["./src/app/pages/account/account.module.ts", "common", "account-account-module"],
      "../alertes/alertes.module": ["./src/app/pages/alertes/alertes.module.ts", "alertes-alertes-module"],
      "../appartement/appartement.module": ["./src/app/pages/appartement/appartement.module.ts", "appartement-appartement-module"],
      "../appartements/appartements.module": ["./src/app/pages/appartements/appartements.module.ts", "appartements-appartements-module"],
      "../contacts/contacts.module": ["./src/app/pages/contacts/contacts.module.ts", "contacts-contacts-module"],
      "../entities/entities.module": ["./src/app/pages/entities/entities.module.ts", "common", "entities-entities-module"],
      "../home/home.module": ["./src/app/pages/home/home.module.ts", "common", "home-home-module"],
      "../location/location.module": ["./src/app/pages/location/location.module.ts", "location-location-module"],
      "../operations/operations.module": ["./src/app/pages/operations/operations.module.ts", "operations-operations-module"],
      "../settings/settings.module": ["./src/app/pages/settings/settings.module.ts", "settings-settings-module"],
      "./pages/login/login.module": ["./src/app/pages/login/login.module.ts", "pages-login-login-module"],
      "./pages/signup/signup.module": ["./src/app/pages/signup/signup.module.ts", "pages-signup-signup-module"],
      "./pages/tabs/tabs.module": ["./src/app/pages/tabs/tabs.module.ts", "pages-tabs-tabs-module"],
      "./pages/welcome/welcome.module": ["./src/app/pages/welcome/welcome.module.ts", "pages-welcome-welcome-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
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
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: './pages/welcome/welcome.module#WelcomePageModule'
    }, {
      path: 'tabs',
      loadChildren: './pages/tabs/tabs.module#TabsPageModule'
    }, {
      path: 'login',
      loadChildren: './pages/login/login.module#LoginPageModule'
    }, {
      path: 'signup',
      loadChildren: './pages/signup/signup.module#SignupPageModule'
    }, {
      path: 'accessdenied',
      redirectTo: '',
      pathMatch: 'full'
    }, {
      path: 'appartements',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-appartements-appartements-module */
        "appartements-appartements-module").then(__webpack_require__.bind(null,
        /*! ./pages/appartements/appartements.module */
        "./src/app/pages/appartements/appartements.module.ts")).then(function (m) {
          return m.AppartementsPageModule;
        });
      }
    }, {
      path: 'alertes',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-alertes-alertes-module */
        "alertes-alertes-module").then(__webpack_require__.bind(null,
        /*! ./pages/alertes/alertes.module */
        "./src/app/pages/alertes/alertes.module.ts")).then(function (m) {
          return m.AlertesPageModule;
        });
      }
    }, {
      path: 'appartement',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-appartement-appartement-module */
        "appartement-appartement-module").then(__webpack_require__.bind(null,
        /*! ./pages/appartement/appartement.module */
        "./src/app/pages/appartement/appartement.module.ts")).then(function (m) {
          return m.AppartementPageModule;
        });
      }
    }, {
      path: 'operations',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-operations-operations-module */
        "operations-operations-module").then(__webpack_require__.bind(null,
        /*! ./pages/operations/operations.module */
        "./src/app/pages/operations/operations.module.ts")).then(function (m) {
          return m.OperationsPageModule;
        });
      }
    }, {
      path: 'contacts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-contacts-contacts-module */
        "contacts-contacts-module").then(__webpack_require__.bind(null,
        /*! ./pages/contacts/contacts.module */
        "./src/app/pages/contacts/contacts.module.ts")).then(function (m) {
          return m.ContactsPageModule;
        });
      }
    }, {
      path: 'settings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-settings-settings-module */
        "settings-settings-module").then(__webpack_require__.bind(null,
        /*! ./pages/settings/settings.module */
        "./src/app/pages/settings/settings.module.ts")).then(function (m) {
          return m.SettingsPageModule;
        });
      }
    }, {
      path: 'location',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-location-location-module */
        "location-location-module").then(__webpack_require__.bind(null,
        /*! ./pages/location/location.module */
        "./src/app/pages/location/location.module.ts")).then(function (m) {
          return m.LocationPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, translate) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
          this.initTranslate();
        }
      }, {
        key: "initTranslate",
        value: function initTranslate() {
          var enLang = 'en'; // Set the default language for translation strings, and the current language.

          this.translate.setDefaultLang(enLang);

          if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
          } else {
            this.translate.use(enLang); // Set your language here
          } // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
          //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
          // });

        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _interceptors_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./interceptors/auth-expired.interceptor */
    "./src/app/interceptors/auth-expired.interceptor.ts");
    /* harmony import */


    var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./interceptors/auth.interceptor */
    "./src/app/interceptors/auth.interceptor.ts");
    /* harmony import */


    var _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./interceptors/api.interceptor */
    "./src/app/interceptors/api.interceptor.ts"); //import { AlertClientService } from "@trixprod/api-verse-real-estate/api/alertClient.service";


    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
        }
      }), _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__["NgxWebstorageModule"].forRoot({
        prefix: 'jhi',
        separator: '-'
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthExpiredInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_15__["ApiInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/interceptors/api.interceptor.ts":
  /*!*************************************************!*\
    !*** ./src/app/interceptors/api.interceptor.ts ***!
    \*************************************************/

  /*! exports provided: ApiInterceptor */

  /***/
  function srcAppInterceptorsApiInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function () {
      return ApiInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _trixprod_api_verse_real_estate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @trixprod/api-verse-real-estate */
    "./node_modules/@trixprod/api-verse-real-estate/index.ts");
    /* harmony import */


    var _services_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth/api/auth-api.service */
    "./src/app/services/auth/api/auth-api.service.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var src_assets_appPreferenceKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/assets/appPreferenceKeys */
    "./src/assets/appPreferenceKeys.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ApiInterceptor = /*#__PURE__*/function () {
      function ApiInterceptor(refService) {
        _classCallCheck(this, ApiInterceptor);

        this.refService = refService;
        this.oldApiAuthUrl = _services_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["AuthApiService"].API_URL; // api-auth-url

        this.oldApiServicesUrl = this.refService.configuration.basePath; // api-verse-real-estate-url
      }

      _createClass(ApiInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var url = req.url; // Don't use modified url in prod

          if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
            url = url.replace(this.oldApiServicesUrl, _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiServicesUrl).replace(this.oldApiAuthUrl, _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiAuthUrl);
          } else {
            url = url.replace(this.oldApiServicesUrl, this.apiServicesUrl).replace(this.oldApiAuthUrl, this.apiAuthUrl);
          }

          var clone = req.clone({
            url: url
          });
          return next.handle(clone);
        }
      }]);

      return ApiInterceptor;
    }();

    ApiInterceptor.ctorParameters = function () {
      return [{
        type: _trixprod_api_verse_real_estate__WEBPACK_IMPORTED_MODULE_2__["AlertClientService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"])(src_assets_appPreferenceKeys__WEBPACK_IMPORTED_MODULE_5__["keys"].apiServicesUrl), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ApiInterceptor.prototype, "apiServicesUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"])(src_assets_appPreferenceKeys__WEBPACK_IMPORTED_MODULE_5__["keys"].apiAuthUrl), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ApiInterceptor.prototype, "apiAuthUrl", void 0);
    ApiInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_trixprod_api_verse_real_estate__WEBPACK_IMPORTED_MODULE_2__["AlertClientService"]])], ApiInterceptor);
    /***/
  },

  /***/
  "./src/app/interceptors/auth-expired.interceptor.ts":
  /*!**********************************************************!*\
    !*** ./src/app/interceptors/auth-expired.interceptor.ts ***!
    \**********************************************************/

  /*! exports provided: AuthExpiredInterceptor */

  /***/
  function srcAppInterceptorsAuthExpiredInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthExpiredInterceptor", function () {
      return AuthExpiredInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login/login.service */
    "./src/app/services/login/login.service.ts");

    var AuthExpiredInterceptor = /*#__PURE__*/function () {
      function AuthExpiredInterceptor(loginService) {
        _classCallCheck(this, AuthExpiredInterceptor);

        this.loginService = loginService;
      }

      _createClass(AuthExpiredInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this2 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {}, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
              if (err.status === 401) {
                _this2.loginService.logout();
              }
            }
          }));
        }
      }]);

      return AuthExpiredInterceptor;
    }();

    AuthExpiredInterceptor.ctorParameters = function () {
      return [{
        type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }];
    };

    AuthExpiredInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])], AuthExpiredInterceptor);
    /***/
  },

  /***/
  "./src/app/interceptors/auth.interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/interceptors/auth.interceptor.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _services_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth/api/auth-api.service */
    "./src/app/services/auth/api/auth-api.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(localStorage, sessionStorage) {
        _classCallCheck(this, AuthInterceptor);

        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
        this.servicesEndpoint = _services_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["AuthApiService"].API_URL.replace('api', 'services');
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (!request || !request.url || /^http/.test(request.url) && !request.url.startsWith(_services_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["AuthApiService"].API_URL) && !request.url.startsWith(this.servicesEndpoint)) {
            return next.handle(request);
          }

          var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');

          if (!!token) {
            request = request.clone({
              setHeaders: {
                Authorization: 'Bearer ' + token
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"]])], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/services/auth/account.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/auth/account.service.ts ***!
    \**************************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppServicesAuthAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_auth_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./api/auth-api.service */
    "./src/app/services/auth/api/auth-api.service.ts");

    var AccountService = /*#__PURE__*/function () {
      function AccountService(sessionStorage, http) {
        _classCallCheck(this, AccountService);

        this.sessionStorage = sessionStorage;
        this.http = http;
        this.authenticated = false;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(AccountService, [{
        key: "fetch",
        value: function fetch() {
          return this.http.get(_api_auth_api_service__WEBPACK_IMPORTED_MODULE_5__["AuthApiService"].API_URL + '/account', {
            observe: 'response'
          });
        }
      }, {
        key: "save",
        value: function save(account) {
          return this.http.post(_api_auth_api_service__WEBPACK_IMPORTED_MODULE_5__["AuthApiService"].API_URL + '/account', account, {
            observe: 'response'
          });
        }
      }, {
        key: "authenticate",
        value: function authenticate(identity) {
          this.userIdentity = identity;
          this.authenticated = identity !== null;
          this.authenticationState.next(this.userIdentity);
        }
      }, {
        key: "hasAnyAuthority",
        value: function hasAnyAuthority(authorities) {
          return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
        }
      }, {
        key: "hasAnyAuthorityDirect",
        value: function hasAnyAuthorityDirect(authorities) {
          if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
          }

          for (var i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.includes(authorities[i])) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "hasAuthority",
        value: function hasAuthority(authority) {
          if (!this.authenticated) {
            return Promise.resolve(false);
          }

          return this.identity().then(function (id) {
            return Promise.resolve(id.authorities && id.authorities.includes(authority));
          }, function () {
            return Promise.resolve(false);
          });
        }
      }, {
        key: "identity",
        value: function identity(force) {
          var _this3 = this;

          if (force === true) {
            this.userIdentity = undefined;
          } // check and see if we have retrieved the userIdentity data from the server.
          // if we have, reuse it by immediately resolving


          if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
          } // retrieve the userIdentity data from the server, update the identity object, and then resolve.


          return this.fetch().toPromise().then(function (response) {
            var account = response.body;

            if (account) {
              _this3.userIdentity = account;
              _this3.authenticated = true; // After retrieve the account info, the language will be changed to
              // the user's preferred language configured in the account setting

              var langKey = _this3.sessionStorage.retrieve('locale') || _this3.userIdentity.langKey; // this.languageService.changeLanguage(langKey);

            } else {
              _this3.userIdentity = null;
              _this3.authenticated = false;
            }

            _this3.authenticationState.next(_this3.userIdentity);

            return _this3.userIdentity;
          })["catch"](function (err) {
            _this3.userIdentity = null;
            _this3.authenticated = false;

            _this3.authenticationState.next(_this3.userIdentity);

            return null;
          });
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authenticated;
        }
      }, {
        key: "isIdentityResolved",
        value: function isIdentityResolved() {
          return this.userIdentity !== undefined;
        }
      }, {
        key: "getAuthenticationState",
        value: function getAuthenticationState() {
          return this.authenticationState.asObservable();
        }
      }, {
        key: "getImageUrl",
        value: function getImageUrl() {
          return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
        }
      }]);

      return AccountService;
    }();

    AccountService.ctorParameters = function () {
      return [{
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AccountService);
    /***/
  },

  /***/
  "./src/app/services/auth/api/auth-api.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/auth/api/auth-api.service.ts ***!
    \*******************************************************/

  /*! exports provided: AuthApiService */

  /***/
  function srcAppServicesAuthApiAuthApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthApiService", function () {
      return AuthApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthApiService_1;

    var AuthApiService = AuthApiService_1 = /*#__PURE__*/function () {
      function AuthApiService(http) {
        _classCallCheck(this, AuthApiService);

        this.http = http;
      }

      _createClass(AuthApiService, [{
        key: "get",
        value: function get(endpoint, params, reqOpts) {
          if (!reqOpts) {
            reqOpts = {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            };
          } // Support easy query params for GET requests


          if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();

            for (var k in params) {
              reqOpts.params.set(k, params[k]);
            }
          }

          return this.http.get(AuthApiService_1.API_URL + '/' + endpoint, reqOpts);
        }
      }, {
        key: "post",
        value: function post(endpoint, body, reqOpts) {
          return this.http.post(AuthApiService_1.API_URL + '/' + endpoint, body, reqOpts);
        }
      }, {
        key: "put",
        value: function put(endpoint, body, reqOpts) {
          return this.http.put(AuthApiService_1.API_URL + '/' + endpoint, body, reqOpts);
        }
      }, {
        key: "delete",
        value: function _delete(endpoint, reqOpts) {
          return this.http["delete"](AuthApiService_1.API_URL + '/' + endpoint, reqOpts);
        }
      }, {
        key: "patch",
        value: function patch(endpoint, body, reqOpts) {
          return this.http.put(AuthApiService_1.API_URL + '/' + endpoint, body, reqOpts);
        }
      }]);

      return AuthApiService;
    }();

    AuthApiService.API_URL = 'api-auth-url';

    AuthApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AuthApiService = AuthApiService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AuthApiService);
    /***/
  },

  /***/
  "./src/app/services/auth/auth-jwt.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/auth/auth-jwt.service.ts ***!
    \***************************************************/

  /*! exports provided: AuthServerProvider */

  /***/
  function srcAppServicesAuthAuthJwtServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthServerProvider", function () {
      return AuthServerProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _api_auth_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./api/auth-api.service */
    "./src/app/services/auth/api/auth-api.service.ts");

    var AuthServerProvider = /*#__PURE__*/function () {
      function AuthServerProvider(http, $localStorage, $sessionStorage) {
        _classCallCheck(this, AuthServerProvider);

        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
      }

      _createClass(AuthServerProvider, [{
        key: "getToken",
        value: function getToken() {
          return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
        }
      }, {
        key: "login",
        value: function login(credentials) {
          var data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
          };
          return this.http.post(_api_auth_api_service__WEBPACK_IMPORTED_MODULE_6__["AuthApiService"].API_URL + '/authenticate', data, {
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(authenticateSuccess.bind(this)));

          function authenticateSuccess(resp) {
            var bearerToken = resp.headers.get('Authorization');

            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
              var jwt = bearerToken.slice(7, bearerToken.length);
              this.storeAuthenticationToken(jwt, credentials.rememberMe);
              return jwt;
            }
          }
        }
      }, {
        key: "loginWithToken",
        value: function loginWithToken(jwt, rememberMe) {
          if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
          } else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
          }
        }
      }, {
        key: "storeAuthenticationToken",
        value: function storeAuthenticationToken(jwt, rememberMe) {
          if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
          } else {
            this.$sessionStorage.store('authenticationToken', jwt);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this4 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this4.$localStorage.clear('authenticationToken');

            _this4.$sessionStorage.clear('authenticationToken');

            observer.complete();
          });
        }
      }]);

      return AuthServerProvider;
    }();

    AuthServerProvider.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]
      }];
    };

    AuthServerProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])], AuthServerProvider);
    /***/
  },

  /***/
  "./src/app/services/login/login.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/login/login.service.ts ***!
    \*************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/account.service */
    "./src/app/services/auth/account.service.ts");
    /* harmony import */


    var _auth_auth_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/auth-jwt.service */
    "./src/app/services/auth/auth-jwt.service.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(accountService, authServerProvider, translate) {
        _classCallCheck(this, LoginService);

        this.accountService = accountService;
        this.authServerProvider = authServerProvider;
        this.translate = translate;
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(credentials, callback) {
          var _this5 = this;

          var cb = callback || function () {};

          return new Promise(function (resolve, reject) {
            _this5.authServerProvider.login(credentials).subscribe(function (data) {
              _this5.accountService.identity(true).then(function (account) {
                // After the login the language will be changed to
                // the language selected by the user during his registration
                if (account !== null) {
                  _this5.translate.use(account.langKey);
                }

                resolve(data);
              });

              return cb();
            }, function (err) {
              _this5.logout();

              reject(err);
              return cb(err);
            });
          });
        }
      }, {
        key: "loginWithToken",
        value: function loginWithToken(jwt, rememberMe) {
          return this.authServerProvider.loginWithToken(jwt, rememberMe);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authServerProvider.logout().subscribe();
          this.accountService.authenticate(null);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }, {
        type: _auth_auth_jwt_service__WEBPACK_IMPORTED_MODULE_4__["AuthServerProvider"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"], _auth_auth_jwt_service__WEBPACK_IMPORTED_MODULE_4__["AuthServerProvider"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])], LoginService);
    /***/
  },

  /***/
  "./src/assets/appPreferenceKeys.ts":
  /*!*****************************************!*\
    !*** ./src/assets/appPreferenceKeys.ts ***!
    \*****************************************/

  /*! exports provided: keys */

  /***/
  function srcAssetsAppPreferenceKeysTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "keys", function () {
      return keys;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var keys = {
      apiAuthUrl: 'API_AUTH_URL',
      apiServicesUrl: 'API_SERVICES_URL',
      setLang: 'SET_LANGUAGE'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    // TODO : Switcher cette url en fonction d'un profile


    var environment = {
      production: false,
      apiAuthUrl: '',
      apiServicesUrl: ''
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Chris\Music\Verse-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map