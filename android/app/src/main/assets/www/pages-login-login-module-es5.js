function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'LOGIN_TITLE' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form (submit)=\"doLogin()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">{{ 'USERNAME' | translate }}</ion-label>\n        <ion-input type=\"string\" [(ngModel)]=\"account.username\" name=\"username\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">{{ 'PASSWORD' | translate }}</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"account.password\" name=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf=\"!environmentMode\">\n        <ion-label position=\"floating\">Auth URL</ion-label>\n        <ion-input type=\"string\" [(ngModel)]=\"apiAuthUrl\" name=\"authUrl\"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf=\"!environmentMode\">\n        <ion-label position=\"floating\">Service URL</ion-label>\n        <ion-input type=\"string\" [(ngModel)]=\"apiServicesUrl\" name=\"baseUrl\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ 'REMEMBER_ME' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"account.rememberMe\" name=\"rememberMe\"></ion-toggle>\n      </ion-item>\n      <ion-row class=\"ion-padding\">\n        <ion-col>\n          <ion-button expand=\"block\" type=\"submit\" color=\"primary\" id=\"login\">{{ 'LOGIN_BUTTON' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/login/login.service */
    "./src/app/services/login/login.service.ts");
    /* harmony import */


    var _assets_appPreferenceKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../assets/appPreferenceKeys */
    "./src/assets/appPreferenceKeys.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(translateService, loginService, toastController, navController) {
        _classCallCheck(this, LoginPage);

        this.translateService = translateService;
        this.loginService = loginService;
        this.toastController = toastController;
        this.navController = navController; // The account fields for the login form.

        this.account = {
          username: '',
          password: '',
          rememberMe: false
        };
        this.environmentMode = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
          });
        }
      }, {
        key: "doLogin",
        value: function doLogin() {
          var _this2 = this;

          this.loginService.login(this.account).then(function () {
            _this2.navController.navigateRoot('/tabs');
          }, function (err) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // Unable to log in
                      console.log(err);
                      this.account.password = '';
                      _context.next = 4;
                      return this.toastController.create({
                        message: this.loginErrorString,
                        duration: 3000,
                        position: 'top'
                      });

                    case 4:
                      toast = _context.sent;
                      toast.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"])(_assets_appPreferenceKeys__WEBPACK_IMPORTED_MODULE_5__["keys"].apiAuthUrl), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LoginPage.prototype, "apiAuthUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"])(_assets_appPreferenceKeys__WEBPACK_IMPORTED_MODULE_5__["keys"].apiServicesUrl), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LoginPage.prototype, "apiServicesUrl", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map