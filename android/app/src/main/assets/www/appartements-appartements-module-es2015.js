(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appartements-appartements-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appartements/appartements.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appartements/appartements.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-thumbnail id=\"logo-thumb\" class=\"logo\" slot=\"start\"(click)=\"retour()\">\n            <img src=\"assets/img/vre.png\">\n        </ion-thumbnail>\n        <ion-title>\n            <!--    {{ 'WELCOME_TITLE' | translate }}, {{account?.firstName}}-->\n            MES APPARTEMENTS\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <a routerLink=\"/tabs/alertes\">\n                <ion-button id=\"notifications\">\n                    <ion-icon size=\"large\" slot=\"end\" name=\"notifications\" >\n                    </ion-icon>\n                    <ion-badge id=\"notif-badge\" *ngIf=\"alertes\" color=\"danger\">{{alertes.length}}</ion-badge>\n                </ion-button>\n            </a>\n            <ion-button (click)=\"logout()\" id=\"logout\">\n                <!--   {{ 'LOGOUT_TITLE' | translate }}-->\n                <ion-icon slot=\"end\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf=\"rentals\">\n        <div *ngFor=\"let rental of rentals\">\n                <div routerLink=\"/tabs/appartement/{{rental.id}}\">\n        <ion-card  color=\"primary\">\n            <img class=\"simple-image\" src=\"data:image/png;base64,{{rental.photos[0]}}\">\n            <ion-card-header>\n                <ion-card-title>{{rental.title}}</ion-card-title>\n                <ion-card-subtitle>{{rental.subtitle}}</ion-card-subtitle>\n            </ion-card-header>\n        </ion-card>\n    </div>\n    </div>\n    </div>\n \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/appartements/appartements-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/appartements/appartements-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AppartementsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppartementsPageRoutingModule", function() { return AppartementsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _appartements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appartements.page */ "./src/app/pages/appartements/appartements.page.ts");




const routes = [
    {
        path: '',
        component: _appartements_page__WEBPACK_IMPORTED_MODULE_3__["AppartementsPage"]
    }
];
let AppartementsPageRoutingModule = class AppartementsPageRoutingModule {
};
AppartementsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppartementsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/appartements/appartements.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/appartements/appartements.module.ts ***!
  \***********************************************************/
/*! exports provided: AppartementsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppartementsPageModule", function() { return AppartementsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _appartements_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appartements-routing.module */ "./src/app/pages/appartements/appartements-routing.module.ts");
/* harmony import */ var _appartements_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appartements.page */ "./src/app/pages/appartements/appartements.page.ts");







let AppartementsPageModule = class AppartementsPageModule {
};
AppartementsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appartements_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppartementsPageRoutingModule"]
        ],
        declarations: [_appartements_page__WEBPACK_IMPORTED_MODULE_6__["AppartementsPage"]]
    })
], AppartementsPageModule);



/***/ }),

/***/ "./src/app/pages/appartements/appartements.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/appartements/appartements.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  width: 90%;\n  margin: 3vh auto;\n  height: 300px;\n}\n\n.simple-image {\n  height: 220px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwYXJ0ZW1lbnRzL0M6XFxVc2Vyc1xcQ2hyaXNcXE11c2ljXFxWZXJzZS1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFxhcHBhcnRlbWVudHNcXGFwcGFydGVtZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FwcGFydGVtZW50cy9hcHBhcnRlbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcGFydGVtZW50cy9hcHBhcnRlbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAzdmggYXV0bztcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uc2ltcGxlLWltYWdlIHtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4iLCJpb24tY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogM3ZoIGF1dG87XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5zaW1wbGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/appartements/appartements.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/appartements/appartements.page.ts ***!
  \*********************************************************/
/*! exports provided: AppartementsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppartementsPage", function() { return AppartementsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @trixprod/api-verse-real-estate/api/alertClient.service */ "./node_modules/@trixprod/api-verse-real-estate/api/alertClient.service.ts");
/* harmony import */ var _trixprod_api_verse_real_estate_api_rentalClient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @trixprod/api-verse-real-estate/api/rentalClient.service */ "./node_modules/@trixprod/api-verse-real-estate/api/rentalClient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AppartementsPage = class AppartementsPage {
    constructor(alertClientService, route, rentalClientService, sanitizer) {
        this.alertClientService = alertClientService;
        this.route = route;
        this.rentalClientService = rentalClientService;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.alertClientService.getAlertsList().subscribe(alertes => this.alertes = alertes.alerts);
        this.rentalClientService.getRentalsList().subscribe(list => {
            this.rentals = list.rentals;
        });
    }
    retour() {
        this.route.navigate(['tabs/home']);
    }
    logout() {
    }
};
AppartementsPage.ctorParameters = () => [
    { type: _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__["AlertClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _trixprod_api_verse_real_estate_api_rentalClient_service__WEBPACK_IMPORTED_MODULE_4__["RentalClientService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
AppartementsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appartements',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appartements.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appartements/appartements.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appartements.page.scss */ "./src/app/pages/appartements/appartements.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__["AlertClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _trixprod_api_verse_real_estate_api_rentalClient_service__WEBPACK_IMPORTED_MODULE_4__["RentalClientService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], AppartementsPage);



/***/ })

}]);
//# sourceMappingURL=appartements-appartements-module-es2015.js.map