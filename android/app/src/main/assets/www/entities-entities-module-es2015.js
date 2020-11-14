(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entities-entities-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entities/entities.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entities/entities.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ 'TAB2_TITLE' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item *ngFor=\"let entity of entities\" (click)=\"openPage(entity)\">\n      <h2>{{entity.name}}</h2>\n    </ion-item>\n  </ion-list>\n\n  <div *ngIf=\"entities.length === 0\">\n    {{ 'EMPTY_ENTITIES_MESSAGE' | translate }}\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/entities/entities.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/entities/entities.module.ts ***!
  \***************************************************/
/*! exports provided: EntitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesPageModule", function() { return EntitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth/user-route-access.service */ "./src/app/services/auth/user-route-access.service.ts");
/* harmony import */ var _entities_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities.page */ "./src/app/pages/entities/entities.page.ts");









const routes = [
    {
        path: '',
        component: _entities_page__WEBPACK_IMPORTED_MODULE_8__["EntitiesPage"],
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }
    /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];
let EntitiesPageModule = class EntitiesPageModule {
};
EntitiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
        declarations: [_entities_page__WEBPACK_IMPORTED_MODULE_8__["EntitiesPage"]]
    })
], EntitiesPageModule);



/***/ }),

/***/ "./src/app/pages/entities/entities.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/entities/entities.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".trash {\n  position: absolute;\n  margin-left: 205px;\n  margin-top: -125px;\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW50aXRpZXMvQzpcXFVzZXJzXFxDaHJpc1xcTXVzaWNcXFZlcnNlLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXGVudGl0aWVzXFxlbnRpdGllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VudGl0aWVzL2VudGl0aWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbnRpdGllcy9lbnRpdGllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAyMDVweDtcbiAgbWFyZ2luLXRvcDogLTEyNXB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iLCIudHJhc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAyMDVweDtcbiAgbWFyZ2luLXRvcDogLTEyNXB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/entities/entities.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/entities/entities.page.ts ***!
  \*************************************************/
/*! exports provided: EntitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesPage", function() { return EntitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let EntitiesPage = class EntitiesPage {
    constructor(navController) {
        this.navController = navController;
        this.entities = [
        /* jhipster-needle-add-entity-page - JHipster will add entity pages here */
        ];
    }
    openPage(page) {
        this.navController.navigateForward('/tabs/entities/' + page.route);
    }
};
EntitiesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
EntitiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entities.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entities/entities.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./entities.page.scss */ "./src/app/pages/entities/entities.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], EntitiesPage);



/***/ })

}]);
//# sourceMappingURL=entities-entities-module-es2015.js.map