function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactsContactsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-thumbnail id=\"logo-thumb\" class=\"logo\" slot=\"start\" (click)=\"retour()\">\n            <img src=\"assets/img/vre.png\">\n        </ion-thumbnail>\n        <ion-title>\n            <!--    {{ 'WELCOME_TITLE' | translate }}, {{account?.firstName}}-->\n            CONTACTS\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <a routerLink=\"/tabs/alertes\">\n                <ion-button id=\"notifications\">\n                    <ion-icon size=\"large\" slot=\"end\" name=\"notifications\">\n\n                    </ion-icon>\n                    <ion-badge id=\"notif-badge\" *ngIf=\"alertes\" color=\"danger\">{{alertes.length}}</ion-badge>\n                </ion-button>\n            </a>\n            <ion-button (click)=\"logout()\" id=\"logout\">\n                <!--   {{ 'LOGOUT_TITLE' | translate }}-->\n                <ion-icon slot=\"end\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   contact\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/contacts/contacts-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/contacts/contacts-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ContactsPageRoutingModule */

  /***/
  function srcAppPagesContactsContactsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function () {
      return ContactsPageRoutingModule;
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


    var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts.page */
    "./src/app/pages/contacts/contacts.page.ts");

    var routes = [{
      path: '',
      component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
    }];

    var ContactsPageRoutingModule = function ContactsPageRoutingModule() {
      _classCallCheck(this, ContactsPageRoutingModule);
    };

    ContactsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/contacts/contacts.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/contacts/contacts.module.ts ***!
    \***************************************************/

  /*! exports provided: ContactsPageModule */

  /***/
  function srcAppPagesContactsContactsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function () {
      return ContactsPageModule;
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


    var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contacts-routing.module */
    "./src/app/pages/contacts/contacts-routing.module.ts");
    /* harmony import */


    var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contacts.page */
    "./src/app/pages/contacts/contacts.page.ts");

    var ContactsPageModule = function ContactsPageModule() {
      _classCallCheck(this, ContactsPageModule);
    };

    ContactsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"]],
      declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
    })], ContactsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/contacts/contacts.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/contacts/contacts.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactsContactsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/contacts/contacts.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/contacts/contacts.page.ts ***!
    \*************************************************/

  /*! exports provided: ContactsPage */

  /***/
  function srcAppPagesContactsContactsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsPage", function () {
      return ContactsPage;
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


    var _trixprod_api_verse_real_estate_api_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @trixprod/api-verse-real-estate/api/contact.service */
    "./node_modules/@trixprod/api-verse-real-estate/api/contact.service.ts");

    var ContactsPage = /*#__PURE__*/function () {
      function ContactsPage(route, alertClientService, contactService) {
        _classCallCheck(this, ContactsPage);

        this.route = route;
        this.alertClientService = alertClientService;
        this.contactService = contactService;
      }

      _createClass(ContactsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.alertClientService.getAlertsList().subscribe(function (alertes) {
            return _this.alertes = alertes.alerts;
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

      return ContactsPage;
    }();

    ContactsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__["AlertClientService"]
      }, {
        type: _trixprod_api_verse_real_estate_api_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
      }];
    };

    ContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contacts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contacts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contacts.page.scss */
      "./src/app/pages/contacts/contacts.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__["AlertClientService"], _trixprod_api_verse_real_estate_api_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]])], ContactsPage);
    /***/
  }
}]);
//# sourceMappingURL=contacts-contacts-module-es5.js.map