function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'SIGNUP_TITLE' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form (submit)=\"doSignup()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">{{ 'FIRST_NAME' | translate }}</ion-label>\n        <ion-input type=\"string\" [(ngModel)]=\"account.firstName\" name=\"firstName\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">{{ 'LAST_NAME' | translate }}</ion-label>\n        <ion-input type=\"string\" [(ngModel)]=\"account.lastName\" name=\"lastName\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">{{ 'EMAIL' | translate }}</ion-label>\n        <ion-input type=\"email\" [(ngModel)]=\"account.email\" name=\"email\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">{{ 'PASSWORD' | translate }}</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"account.password\" name=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-row class=\"ion-padding\">\n        <ion-col>\n          <ion-button expand=\"block\" type=\"submit\" color=\"primary\">{{ 'SIGNUP_BUTTON' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]
    }];

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/signup/signup.page.ts ***!
    \*********************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user/user.service */
    "./src/app/services/user/user.service.ts");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(navController, userService, toastController, translateService) {
        var _this = this;

        _classCallCheck(this, SignupPage);

        this.navController = navController;
        this.userService = userService;
        this.toastController = toastController;
        this.translateService = translateService; // The account fields for the signup form

        this.account = {
          login: '',
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          langKey: 'en'
        };
        this.translateService.get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS', 'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR']).subscribe(function (values) {
          _this.signupErrorString = values.SIGNUP_ERROR;
          _this.signupSuccessString = values.SIGNUP_SUCCESS;
          _this.existingUserError = values.EXISTING_USER_ERROR;
          _this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
        });
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "doSignup",
        value: function doSignup() {
          var _this2 = this;

          // set login to same as email
          this.account.login = this.account.email; // Attempt to login in through our User service

          this.userService.signup(this.account).subscribe(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: this.signupSuccessString,
                        duration: 3000,
                        position: 'top'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var error, displayError, toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // Unable to sign up
                      error = JSON.parse(response.error);
                      displayError = this.signupErrorString;

                      if (response.status === 400 && error.type.includes('already-used')) {
                        displayError = this.existingUserError;
                      } else if (response.status === 400 && error.message === 'error.validation' && error.fieldErrors[0].field === 'password' && error.fieldErrors[0].message === 'Size') {
                        displayError = this.invalidPasswordError;
                      }

                      _context2.next = 5;
                      return this.toastController.create({
                        message: displayError,
                        duration: 3000,
                        position: 'middle'
                      });

                    case 5:
                      toast = _context2.sent;
                      toast.present();

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/pages/signup/signup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])], SignupPage);
    /***/
  },

  /***/
  "./src/app/services/user/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/user/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/api/auth-api.service */
    "./src/app/services/auth/api/auth-api.service.ts");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/services/login/login.service.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(apiService, loginService) {
        _classCallCheck(this, UserService);

        this.apiService = apiService;
        this.loginService = loginService;
      }
      /**
       * Send a POST request to our login endpoint with the data
       * the user entered on the form.
       */


      _createClass(UserService, [{
        key: "login",
        value: function login(accountInfo) {
          var _this3 = this;

          this.loginService.login(accountInfo).then(function (res) {
            _this3.loggedIn(res);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(res);
          })["catch"](function (err) {
            console.error('ERROR', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          });
        }
      }, {
        key: "findAll",
        value: function findAll() {
          return this.apiService.get('users');
        }
        /**
         * Send a POST request to our signup endpoint with the data
         * the user entered on the form.
         */

      }, {
        key: "signup",
        value: function signup(accountInfo) {
          return this.apiService.post('register', accountInfo, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        }
        /**
         * Log the user out, which forgets the session
         */

      }, {
        key: "logout",
        value: function logout() {
          this.loginService.logout();
          this.user = null;
        }
        /**
         * Process a login/signup response to store user data
         */

      }, {
        key: "loggedIn",
        value: function loggedIn(resp) {
          this.user = resp.user;
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__["AuthApiService"]
      }, {
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__["AuthApiService"], _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])], UserService);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map