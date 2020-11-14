function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='primary'>\n        <ion-title>\n            {{ 'WELCOME_TITLE' | translate }} dans Verse Estate\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <span class=\"hipster\"></span>\n    <div>\n        <ion-button expand=\"block\" routerLink=\"/login\" id=\"signIn\">{{ 'LOGIN' | translate }}</ion-button>\n\n        <p>{{ 'NO_ACCOUNT_MESSAGE' | translate }}</p>\n        <ion-button expand=\"block\" routerLink=\"/signup\">{{ 'SIGNUP' | translate }}</ion-button>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/welcome/welcome.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/welcome/welcome.module.ts ***!
    \*************************************************/

  /*! exports provided: WelcomePageModule */

  /***/
  function srcAppPagesWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
      return WelcomePageModule;
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


    var _welcome_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/pages/welcome/welcome.page.ts");

    var routes = [{
      path: '',
      component: _welcome_page__WEBPACK_IMPORTED_MODULE_7__["WelcomePage"]
    }];

    var WelcomePageModule = function WelcomePageModule() {
      _classCallCheck(this, WelcomePageModule);
    };

    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
      declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_7__["WelcomePage"]]
    })], WelcomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/welcome/welcome.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/welcome/welcome.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* this code needs to be factored but can't be put in global.scss as it is generated by Ionic */\n.hipster {\n  display: block;\n  width: 209px;\n  height: 300px;\n  margin: 20px auto;\n  background: url('vre.jpg') no-repeat center top;\n  background-size: contain;\n}\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster {\n    background: url('vre.jpg') no-repeat center top;\n    background-size: contain;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZS9DOlxcVXNlcnNcXENocmlzXFxNdXNpY1xcVmVyc2UtbWFzdGVyL3NyY1xcYXBwXFxwYWdlc1xcd2VsY29tZVxcd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0ZBQUE7QUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7RUFDQSx3QkFBQTtBQ0FKO0FESUEsMEZBQUE7QUFFQTtFQU1JO0lBQ0ksK0NBQUE7SUFDQSx3QkFBQTtFQ1BOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGhpcyBjb2RlIG5lZWRzIHRvIGJlIGZhY3RvcmVkIGJ1dCBjYW4ndCBiZSBwdXQgaW4gZ2xvYmFsLnNjc3MgYXMgaXQgaXMgZ2VuZXJhdGVkIGJ5IElvbmljICovXG5cbi5oaXBzdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjA5cHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvdnJlLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuXG4vKiB3YWl0IGF1dG9wcmVmaXhlciB1cGRhdGUgdG8gYWxsb3cgc2ltcGxlIGdlbmVyYXRpb24gb2YgaGlnaCBwaXhlbCBkZW5zaXR5IG1lZGlhIHF1ZXJ5ICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG5vbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXG5vbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG5vbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxub25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbm9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgLmhpcHN0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvdnJlLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgfVxufSIsIi8qIHRoaXMgY29kZSBuZWVkcyB0byBiZSBmYWN0b3JlZCBidXQgY2FuJ3QgYmUgcHV0IGluIGdsb2JhbC5zY3NzIGFzIGl0IGlzIGdlbmVyYXRlZCBieSBJb25pYyAqL1xuLmhpcHN0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwOXB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy92cmUuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi8qIHdhaXQgYXV0b3ByZWZpeGVyIHVwZGF0ZSB0byBhbGxvdyBzaW1wbGUgZ2VuZXJhdGlvbiBvZiBoaWdoIHBpeGVsIGRlbnNpdHkgbWVkaWEgcXVlcnkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAuaGlwc3RlciB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy92cmUuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/welcome/welcome.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/welcome/welcome.page.ts ***!
    \***********************************************/

  /*! exports provided: WelcomePage */

  /***/
  function srcAppPagesWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
      return WelcomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WelcomePage = /*#__PURE__*/function () {
      function WelcomePage() {
        _classCallCheck(this, WelcomePage);
      }

      _createClass(WelcomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomePage;
    }();

    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.page.scss */
      "./src/app/pages/welcome/welcome.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], WelcomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map