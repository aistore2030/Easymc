(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificationem-notificationem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/employer/notificationem/notificationem.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employer/notificationem/notificationem.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>notificationem</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/employer/notificationem/notificationem-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/employer/notificationem/notificationem-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationemPageRoutingModule", function() { return NotificationemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notificationem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificationem.page */ "./src/app/employer/notificationem/notificationem.page.ts");




var routes = [
    {
        path: '',
        component: _notificationem_page__WEBPACK_IMPORTED_MODULE_3__["NotificationemPage"]
    }
];
var NotificationemPageRoutingModule = /** @class */ (function () {
    function NotificationemPageRoutingModule() {
    }
    NotificationemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NotificationemPageRoutingModule);
    return NotificationemPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/employer/notificationem/notificationem.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/employer/notificationem/notificationem.module.ts ***!
  \******************************************************************/
/*! exports provided: NotificationemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationemPageModule", function() { return NotificationemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notificationem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificationem-routing.module */ "./src/app/employer/notificationem/notificationem-routing.module.ts");
/* harmony import */ var _notificationem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificationem.page */ "./src/app/employer/notificationem/notificationem.page.ts");







var NotificationemPageModule = /** @class */ (function () {
    function NotificationemPageModule() {
    }
    NotificationemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _notificationem_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationemPageRoutingModule"]
            ],
            declarations: [_notificationem_page__WEBPACK_IMPORTED_MODULE_6__["NotificationemPage"]]
        })
    ], NotificationemPageModule);
    return NotificationemPageModule;
}());



/***/ }),

/***/ "./src/app/employer/notificationem/notificationem.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/employer/notificationem/notificationem.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL25vdGlmaWNhdGlvbmVtL25vdGlmaWNhdGlvbmVtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employer/notificationem/notificationem.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/employer/notificationem/notificationem.page.ts ***!
  \****************************************************************/
/*! exports provided: NotificationemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationemPage", function() { return NotificationemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationemPage = /** @class */ (function () {
    function NotificationemPage() {
    }
    NotificationemPage.prototype.ngOnInit = function () {
    };
    NotificationemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notificationem',
            template: __webpack_require__(/*! raw-loader!./notificationem.page.html */ "./node_modules/raw-loader/index.js!./src/app/employer/notificationem/notificationem.page.html"),
            styles: [__webpack_require__(/*! ./notificationem.page.scss */ "./src/app/employer/notificationem/notificationem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationemPage);
    return NotificationemPage;
}());



/***/ })

}]);
//# sourceMappingURL=notificationem-notificationem-module-es5.js.map