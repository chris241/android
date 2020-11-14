function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operations-operations-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operations/operations.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operations/operations.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOperationsOperationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-thumbnail id=\"logo-thumb\" class=\"logo\" slot=\"start\" (click)=\"retour()\">\n            <img src=\"assets/img/vre.png\">\n        </ion-thumbnail>\n        <ion-title>\n            <!--    {{ 'WELCOME_TITLE' | translate }}, {{account?.firstName}}-->\n            OPERATIONS\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <a routerLink=\"/tabs/alertes\">\n                <ion-button id=\"notifications\">\n                    <ion-icon size=\"large\" slot=\"end\" name=\"notifications\">\n\n                    </ion-icon>\n                    <ion-badge id=\"notif-badge\" *ngIf=\"alertes\" color=\"danger\">{{alertes.length}}</ion-badge>\n                </ion-button>\n            </a>\n            <ion-button (click)=\"logout()\" id=\"logout\">\n                <!--   {{ 'LOGOUT_TITLE' | translate }}-->\n                <ion-icon slot=\"end\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\nOpération\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/operations/operations-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/operations/operations-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: OperationsPageRoutingModule */

  /***/
  function srcAppPagesOperationsOperationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationsPageRoutingModule", function () {
      return OperationsPageRoutingModule;
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
    /* harmony import */


    var _operations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./operations.page */
    "./src/app/pages/operations/operations.page.ts");

    var routes = [{
      path: '',
      component: _operations_page__WEBPACK_IMPORTED_MODULE_3__["OperationsPage"]
    }];

    var OperationsPageRoutingModule = function OperationsPageRoutingModule() {
      _classCallCheck(this, OperationsPageRoutingModule);
    };

    OperationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OperationsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/operations/operations.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/operations/operations.module.ts ***!
    \*******************************************************/

  /*! exports provided: OperationsPageModule */

  /***/
  function srcAppPagesOperationsOperationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationsPageModule", function () {
      return OperationsPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _operations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./operations-routing.module */
    "./src/app/pages/operations/operations-routing.module.ts");
    /* harmony import */


    var _operations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./operations.page */
    "./src/app/pages/operations/operations.page.ts");

    var OperationsPageModule = function OperationsPageModule() {
      _classCallCheck(this, OperationsPageModule);
    };

    OperationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _operations_routing_module__WEBPACK_IMPORTED_MODULE_5__["OperationsPageRoutingModule"]],
      declarations: [_operations_page__WEBPACK_IMPORTED_MODULE_6__["OperationsPage"]]
    })], OperationsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/operations/operations.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/operations/operations.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOperationsOperationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdGlvbnMvb3BlcmF0aW9ucy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/operations/operations.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/operations/operations.page.ts ***!
    \*****************************************************/

  /*! exports provided: OperationsPage */

  /***/
  function srcAppPagesOperationsOperationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationsPage", function () {
      return OperationsPage;
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
    /* harmony import */


    var _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @trixprod/api-verse-real-estate/api/alertClient.service */
    "./node_modules/@trixprod/api-verse-real-estate/api/alertClient.service.ts");
    /* harmony import */


    var _trixprod_api_verse_real_estate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @trixprod/api-verse-real-estate */
    "./node_modules/@trixprod/api-verse-real-estate/index.ts");

    var OperationsPage = /*#__PURE__*/function () {
      function OperationsPage(route, alertClientService, operationClientServie) {
        _classCallCheck(this, OperationsPage);

        this.route = route;
        this.alertClientService = alertClientService;
        this.operationClientServie = operationClientServie;
      }

      _createClass(OperationsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.alertClientService.getAlertsList().subscribe(function (alertes) {
            _this.alertes = alertes.alerts;
          });
        }
      }, {
        key: "retour",
        value: function retour() {
          this.route.navigate(['tabs/appartements']);
        }
      }, {
        key: "logout",
        value: function logout() {}
      }]);

      return OperationsPage;
    }();

    OperationsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__["AlertClientService"]
      }, {
        type: _trixprod_api_verse_real_estate__WEBPACK_IMPORTED_MODULE_4__["OperationClientService"]
      }];
    };

    OperationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-operations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./operations.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operations/operations.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./operations.page.scss */
      "./src/app/pages/operations/operations.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__["AlertClientService"], _trixprod_api_verse_real_estate__WEBPACK_IMPORTED_MODULE_4__["OperationClientService"]])], OperationsPage);
    /***/
  }
}]);
//# sourceMappingURL=operations-operations-module-es5.js.map