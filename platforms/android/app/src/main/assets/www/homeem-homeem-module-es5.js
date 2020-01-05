(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homeem-homeem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/employer/homeem/homeem.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employer/homeem/homeem.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>homeem</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/employer/homeem/homeem-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/employer/homeem/homeem-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeemPageRoutingModule", function() { return HomeemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homeem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeem.page */ "./src/app/employer/homeem/homeem.page.ts");




var routes = [
    {
        path: '',
        component: _homeem_page__WEBPACK_IMPORTED_MODULE_3__["HomeemPage"]
    }
];
var HomeemPageRoutingModule = /** @class */ (function () {
    function HomeemPageRoutingModule() {
    }
    HomeemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomeemPageRoutingModule);
    return HomeemPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/employer/homeem/homeem.module.ts":
/*!**************************************************!*\
  !*** ./src/app/employer/homeem/homeem.module.ts ***!
  \**************************************************/
/*! exports provided: HomeemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeemPageModule", function() { return HomeemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _homeem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeem-routing.module */ "./src/app/employer/homeem/homeem-routing.module.ts");
/* harmony import */ var _homeem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeem.page */ "./src/app/employer/homeem/homeem.page.ts");







var HomeemPageModule = /** @class */ (function () {
    function HomeemPageModule() {
    }
    HomeemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _homeem_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeemPageRoutingModule"]
            ],
            declarations: [_homeem_page__WEBPACK_IMPORTED_MODULE_6__["HomeemPage"]]
        })
    ], HomeemPageModule);
    return HomeemPageModule;
}());



/***/ }),

/***/ "./src/app/employer/homeem/homeem.page.scss":
/*!**************************************************!*\
  !*** ./src/app/employer/homeem/homeem.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2hvbWVlbS9ob21lZW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/employer/homeem/homeem.page.ts":
/*!************************************************!*\
  !*** ./src/app/employer/homeem/homeem.page.ts ***!
  \************************************************/
/*! exports provided: HomeemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeemPage", function() { return HomeemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeemPage = /** @class */ (function () {
    function HomeemPage() {
    }
    HomeemPage.prototype.ngOnInit = function () {
    };
    HomeemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homeem',
            template: __webpack_require__(/*! raw-loader!./homeem.page.html */ "./node_modules/raw-loader/index.js!./src/app/employer/homeem/homeem.page.html"),
            styles: [__webpack_require__(/*! ./homeem.page.scss */ "./src/app/employer/homeem/homeem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeemPage);
    return HomeemPage;
}());



/***/ })

}]);
//# sourceMappingURL=homeem-homeem-module-es5.js.map