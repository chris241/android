(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-thumbnail id=\"logo-thumb\" class=\"logo\" slot=\"start\" (click)=\"retour()\">\n            <img src=\"assets/img/vre.png\">\n        </ion-thumbnail>\n        <ion-title *ngIf=\"contact\">\n            <!--    {{ 'WELCOME_TITLE' | translate }}, {{account?.firstName}}-->\n            LOCATION {{contact.lastName}} {{contact.firstName}} \n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <a routerLink=\"/tabs/alertes\">\n                <ion-button id=\"notifications\">\n                    <ion-icon size=\"large\" slot=\"end\" name=\"notifications\">\n                    </ion-icon>\n                    <ion-badge id=\"notif-badge\" *ngIf=\"alertes\" color=\"danger\">{{alertes.length}}</ion-badge>\n                </ion-button>\n            </a>\n            <ion-button (click)=\"logout()\" id=\"logout\">\n                <!--   {{ 'LOGOUT_TITLE' | translate }}-->\n                <ion-icon slot=\"end\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n     <ion-grid>\n        <ion-row>\n            <ion-col size=\"12\">\n                <div *ngIf=\"contrat\">\n                    <h3>\n                            {{contact.firstName | uppercase}} {{contact.lastName | uppercase}}\n                    </h3>\n                    <p>\n                        <span class=\"alert\">Alert:</span><br>\n                        <span>{{nbr}} alertes liées à cette location</span>\n                    </p>\n                    <p>\n                        Cliquez <a routerLink=\"/tabs/alertes\"> ici</a> pour réctifier les anomalies(nous\n                        redirige vers les alertes avec un filtre).\n                    </p>\n                    <div class=\"infos\">\n                        <ion-label>\n                            <p>\n                                Du {{contrat.dateFrom}} au {{contrat.dateTo}} ( 3 mois maximum )\n                            </p>\n                            <p>\n                                <a routerLink=\"/tabs/operations\"> Voir liste opération</a> ( nous redirige vers les opérations filtrées sur ce locataire )\n                            </p>\n                            <p>\n                                Voir fiche contact ( nous redirige vers l'écran des contacts filtré sur ce locataire )\n                            </p>\n                            <p>\n                                Contrat: Cliquez <a routerLink=\"/tabs/contacts\">ici</a>\n                            </p>\n                            <p>\n                                Type contrat: Initial / Renouvellé ( si renouvellé on a pas d'états des lieux d'entrée )\n                            </p>\n                            <p>\n                                Quittance: Clicquez ici\n                            </p>\n\n                            <p>\n                                Etats des lieux d'entrée: Cliquez ici\n                            </p>\n                            <p>\n                                Etats des lieux de sortie: Cliquez ici\n                            </p>\n                            <p>\n                                Photos états des lieux de sortie ( si nécessaire ): Cliquez ici\n                            </p>\n                        </ion-label>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid> \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/location/location-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/location/location-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function() { return LocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.page */ "./src/app/pages/location/location.page.ts");




const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/location/location.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/location/location.module.ts ***!
  \***************************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-routing.module */ "./src/app/pages/location/location-routing.module.ts");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "./src/app/pages/location/location.page.ts");







let LocationPageModule = class LocationPageModule {
};
LocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"]
        ],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
    })
], LocationPageModule);



/***/ }),

/***/ "./src/app/pages/location/location.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/location/location.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".infos {\n  border: 3px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9jYXRpb24vQzpcXFVzZXJzXFxDaHJpc1xcTXVzaWNcXFZlcnNlLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXGxvY2F0aW9uXFxsb2NhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2NhdGlvbi9sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3N7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxufSIsIi5pbmZvcyB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/location/location.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/location/location.page.ts ***!
  \*************************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @trixprod/api-verse-real-estate/api/alertClient.service */ "./node_modules/@trixprod/api-verse-real-estate/api/alertClient.service.ts");
/* harmony import */ var _trixprod_api_verse_real_estate_api_contractClient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @trixprod/api-verse-real-estate/api/contractClient.service */ "./node_modules/@trixprod/api-verse-real-estate/api/contractClient.service.ts");





let LocationPage = class LocationPage {
    constructor(route, activatedRoute, alertClientService, contractClientService) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.alertClientService = alertClientService;
        this.contractClientService = contractClientService;
        this.id = null;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
        this.alertClientService.getAlertsList().subscribe(alertes => this.alertes = alertes.alerts);
        this.contractClientService.getContract(this.id).subscribe(list => {
            this.contratOut = list;
            this.contrat = this.contratOut.contract;
            this.contact = this.contratOut.contract.tenant;
            this.alerts = this.contratOut.alerts;
            this.nbr = this.alerts.length;
            console.log(this.contratOut);
            console.log(this.contrat);
            console.log(this.nbr);
        });
    }
    retour() {
        this.route.navigate(['tabs/appartements']);
    }
    logout() {
    }
};
LocationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__["AlertClientService"] },
    { type: _trixprod_api_verse_real_estate_api_contractClient_service__WEBPACK_IMPORTED_MODULE_4__["ContractClientService"] }
];
LocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location.page.scss */ "./src/app/pages/location/location.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _trixprod_api_verse_real_estate_api_alertClient_service__WEBPACK_IMPORTED_MODULE_3__["AlertClientService"], _trixprod_api_verse_real_estate_api_contractClient_service__WEBPACK_IMPORTED_MODULE_4__["ContractClientService"]])
], LocationPage);



/***/ })

}]);
//# sourceMappingURL=location-location-module-es2015.js.map