function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alertes-alertes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alertes/alertes.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alertes/alertes.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAlertesAlertesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-thumbnail id=\"logo-thumb\" class=\"logo\" slot=\"start\" (click)=\"retour()\">\n            <img src=\"assets/img/vre-3.png\">\n        </ion-thumbnail>\n        <ion-title>\n            <!--    {{ 'WELCOME_TITLE' | translate }}, {{account?.firstName}}-->\n            ALERTES\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button id=\"notifications\" (click)=\"goBack()\">\n                <ion-icon slot=\"end\" size=\"large\" name=\"notifications\">\n                </ion-icon>\n                <ion-badge *ngIf=\"alertes\" color=\"danger\" id=\"notif-badge\">{{alertes.length}}</ion-badge>\n            </ion-button>\n            <ion-button id=\"logout\">\n                <ion-icon slot=\"end\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"alertes\">\n        <ion-card *ngFor=\"let alert of alertes\" class=\"alert-card\" [color]='getIconColor(alert)'>\n            <ion-card-header>\n                <span>{{alert.title}}</span>\n\n            </ion-card-header>\n            <ion-card-content>\n\n                <ion-label>\n                    <p *ngIf=\"contracts[alert.idContract]\">\n                        {{contracts[alert.idContract].tenant.firstName |titlecase}} {{contracts[alert.idContract].tenant.lastName|uppercase}} - {{contracts[alert.idContract].price}} € <br> Du {{contracts[alert.idContract].dateFrom}} à {{contracts[alert.idContract].dateFrom}}\n                    </p>\n                    <p *ngIf=\"!contracts[alert.idContract]\">\n                        <span class=\"erreur\">(erreur getContract(id:{{alert.idContract}})) </span><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci obcaecati sequi dignissimos.\n                    </p>\n\n                </ion-label>\n\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n    <div *ngIf=\"!alertes\">\n        <p>Chargement...</p>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/alertes/alertes-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/alertes/alertes-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AlertesPageRoutingModule */

  /***/
  function srcAppPagesAlertesAlertesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertesPageRoutingModule", function () {
      return AlertesPageRoutingModule;
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


    var _alertes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alertes.page */
    "./src/app/pages/alertes/alertes.page.ts");

    var routes = [{
      path: '',
      component: _alertes_page__WEBPACK_IMPORTED_MODULE_3__["AlertesPage"]
    }];

    var AlertesPageRoutingModule = function AlertesPageRoutingModule() {
      _classCallCheck(this, AlertesPageRoutingModule);
    };

    AlertesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlertesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/alertes/alertes.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/alertes/alertes.module.ts ***!
    \*************************************************/

  /*! exports provided: AlertesPageModule */

  /***/
  function srcAppPagesAlertesAlertesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertesPageModule", function () {
      return AlertesPageModule;
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


    var _alertes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alertes-routing.module */
    "./src/app/pages/alertes/alertes-routing.module.ts");
    /* harmony import */


    var _alertes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alertes.page */
    "./src/app/pages/alertes/alertes.page.ts");

    var AlertesPageModule = function AlertesPageModule() {
      _classCallCheck(this, AlertesPageModule);
    };

    AlertesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _alertes_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlertesPageRoutingModule"]],
      declarations: [_alertes_page__WEBPACK_IMPORTED_MODULE_6__["AlertesPage"]]
    })], AlertesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/alertes/alertes.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/alertes/alertes.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAlertesAlertesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".alert-div {\n  width: 90%;\n  height: 100px;\n  background-color: white;\n  margin: 2vh auto;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);\n  border-radius: 5px;\n  padding: 5px;\n}\n\nspan {\n  font-weight: bolder;\n  font-size: 1.5em;\n}\n\nion-card-header {\n  padding: 7px 16px;\n}\n\nspan.erreur {\n  font-style: italic;\n  font-size: 1em;\n}\n\n.alert-icon {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  margin: auto;\n}\n\n.alert-card {\n  height: 120px;\n  width: 90%;\n  margin: 2vh auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxlcnRlcy9DOlxcVXNlcnNcXENocmlzXFxNdXNpY1xcVmVyc2UtbWFzdGVyL3NyY1xcYXBwXFxwYWdlc1xcYWxlcnRlc1xcYWxlcnRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FsZXJ0ZXMvYWxlcnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFHQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsZXJ0ZXMvYWxlcnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtZGl2IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAydmggYXV0bztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDdweCAxNnB4O1xufVxuXG5zcGFuLmVycmV1ciB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uYWxlcnQtaWNvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5hbGVydC1jYXJkIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAydmggYXV0bztcbn1cbiIsIi5hbGVydC1kaXYge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAydmggYXV0bztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogN3B4IDE2cHg7XG59XG5cbnNwYW4uZXJyZXVyIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmFsZXJ0LWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmFsZXJ0LWNhcmQge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDJ2aCBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/alertes/alertes.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/alertes/alertes.page.ts ***!
    \***********************************************/

  /*! exports provided: AlertesPage */

  /***/
  function srcAppPagesAlertesAlertesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertesPage", function () {
      return AlertesPage;
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


    var _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @trixprod/api-verse-real-estate/api/alertClient.service */
    "./node_modules/@trixprod/api-verse-real-estate/api/alertClient.service.ts");
    /* harmony import */


    var _trixprod_api_verse_real_estate_api_contractClient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @trixprod/api-verse-real-estate/api/contractClient.service */
    "./node_modules/@trixprod/api-verse-real-estate/api/contractClient.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AlertesPage = /*#__PURE__*/function () {
      function AlertesPage(alertClientService, route, _location, contractClientService) {
        _classCallCheck(this, AlertesPage);

        this.alertClientService = alertClientService;
        this.route = route;
        this._location = _location;
        this.contractClientService = contractClientService;
      }

      _createClass(AlertesPage, [{
        key: "getContracts",
        value: function getContracts() {
          var _this = this;

          this.contracts = new Array(this.alertes.length);

          var _loop = function _loop(i) {
            _this.contractClientService.getContract(_this.alertes[i].idContract.toString()).subscribe(function (contract) {
              _this.contracts[i] = contract.contract;
            });
          };

          for (var i = 0; i < this.alertes.length; i++) {
            _loop(i);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.alertClientService.getAlertsList().subscribe(function (liste) {
            _this2.alertes = liste.alerts;

            _this2.getContracts();
          });
        }
      }, {
        key: "getIconColor",
        value: function getIconColor(alert) {
          if (alert.severity === 'high') return 'danger';
          if (alert.severity === 'medium') return 'warning';
          return 'dark';
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this._location.back();
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

      return AlertesPage;
    }();

    AlertesPage.ctorParameters = function () {
      return [{
        type: _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__["AlertClientService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _trixprod_api_verse_real_estate_api_contractClient_service__WEBPACK_IMPORTED_MODULE_4__["ContractClientService"]
      }];
    };

    AlertesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alertes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alertes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alertes/alertes.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alertes.page.scss */
      "./src/app/pages/alertes/alertes.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__["AlertClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _trixprod_api_verse_real_estate_api_contractClient_service__WEBPACK_IMPORTED_MODULE_4__["ContractClientService"]])], AlertesPage);
    /***/
  }
}]);
//# sourceMappingURL=alertes-alertes-module-es5.js.map