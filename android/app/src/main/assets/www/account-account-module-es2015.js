(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            {{ 'TAB3_TITLE' | translate }}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"alertes\">\n        <h1>hello {{alertes.length}}</h1>\n        <ul>\n            <li *ngFor=\"let alert of alertes\"><span style=\"color: blue;\">{{alert.id}}</span> {{alert.severity}} {{alert.title}} </li>\n        </ul>\n    </div>\n    <div *ngIf=\"!alertes\">\n        <p>Chargement...</p>\n    </div>\n\n    <div *ngIf=\"rentals\">\n        <ul>\n            <li *ngFor=\"let rental of rentals\"><span style=\"color: blue;\">{{rental.id}}</span> {{rental.title}} {{rental.subtitle}} <img class=\"simple-image\" src=\"data:image/png;base64,{{rental.photos[0]}}\"> </li>\n        </ul>\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth/user-route-access.service */ "./src/app/services/auth/user-route-access.service.ts");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account.page */ "./src/app/pages/account/account.page.ts");









const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_8__["AccountPage"],
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }
];
let AccountPageModule = class AccountPageModule {
};
AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_8__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/pages/account/account.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".simple-image {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9DOlxcVXNlcnNcXENocmlzXFxNdXNpY1xcVmVyc2UtbWFzdGVyL3NyY1xcYXBwXFxwYWdlc1xcYWNjb3VudFxcYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbXBsZS1pbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbn0iLCIuc2ltcGxlLWltYWdlIHtcbiAgd2lkdGg6IDgwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/account/account.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @trixprod/api-verse-real-estate/api/alertClient.service */ "./node_modules/@trixprod/api-verse-real-estate/api/alertClient.service.ts");
/* harmony import */ var _trixprod_api_verse_real_estate_api_rentalClient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @trixprod/api-verse-real-estate/api/rentalClient.service */ "./node_modules/@trixprod/api-verse-real-estate/api/rentalClient.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let AccountPage = class AccountPage {
    constructor(alertClientService, rentalClientService, sanitizer) {
        this.alertClientService = alertClientService;
        this.rentalClientService = rentalClientService;
        this.sanitizer = sanitizer;
    }
    essai() {
        this.alertClientService.getAlertsList().subscribe(alertes => this.alertes = alertes.alerts);
        this.rentalClientService.getRentalsList().subscribe(list => {
            this.rentals = list.rentals;
            // const reader = new FileReader();
            // console.log(this.rentals);
            //var b = new Blob(this.rentals[0].photos[0], { type: 'image/png' });
            //  reader.readAsDataURL(b);
            //    var URLcreator =  window.URL||webkitURL;
            //      this.imageURL = "data:image/png;base64,"+this.rentals[0].photos[0];
            //        reader.onloadend = this.onLoadend;
            // console.log(b);
        });
    }
    onLoadend(e) {
        this.imageLoaded = true;
    }
    ngOnInit() {
        this.imageLoaded = false;
        this.essai();
        //console.log("hehe "+this.alertes.length);
    }
};
AccountPage.ctorParameters = () => [
    { type: _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_2__["AlertClientService"] },
    { type: _trixprod_api_verse_real_estate_api_rentalClient_service__WEBPACK_IMPORTED_MODULE_3__["RentalClientService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.page.scss */ "./src/app/pages/account/account.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_2__["AlertClientService"], _trixprod_api_verse_real_estate_api_rentalClient_service__WEBPACK_IMPORTED_MODULE_3__["RentalClientService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], AccountPage);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map