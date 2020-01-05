(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myjobem-myjobem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/employer/myjobem/myjobem.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employer/myjobem/myjobem.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>myjobem</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/employer/myjobem/myjobem-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/employer/myjobem/myjobem-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MyjobemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobemPageRoutingModule", function() { return MyjobemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myjobem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myjobem.page */ "./src/app/employer/myjobem/myjobem.page.ts");




const routes = [
    {
        path: '',
        component: _myjobem_page__WEBPACK_IMPORTED_MODULE_3__["MyjobemPage"]
    }
];
let MyjobemPageRoutingModule = class MyjobemPageRoutingModule {
};
MyjobemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyjobemPageRoutingModule);



/***/ }),

/***/ "./src/app/employer/myjobem/myjobem.module.ts":
/*!****************************************************!*\
  !*** ./src/app/employer/myjobem/myjobem.module.ts ***!
  \****************************************************/
/*! exports provided: MyjobemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobemPageModule", function() { return MyjobemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myjobem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myjobem-routing.module */ "./src/app/employer/myjobem/myjobem-routing.module.ts");
/* harmony import */ var _myjobem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myjobem.page */ "./src/app/employer/myjobem/myjobem.page.ts");







let MyjobemPageModule = class MyjobemPageModule {
};
MyjobemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myjobem_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyjobemPageRoutingModule"]
        ],
        declarations: [_myjobem_page__WEBPACK_IMPORTED_MODULE_6__["MyjobemPage"]]
    })
], MyjobemPageModule);



/***/ }),

/***/ "./src/app/employer/myjobem/myjobem.page.scss":
/*!****************************************************!*\
  !*** ./src/app/employer/myjobem/myjobem.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL215am9iZW0vbXlqb2JlbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employer/myjobem/myjobem.page.ts":
/*!**************************************************!*\
  !*** ./src/app/employer/myjobem/myjobem.page.ts ***!
  \**************************************************/
/*! exports provided: MyjobemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobemPage", function() { return MyjobemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyjobemPage = class MyjobemPage {
    constructor() { }
    ngOnInit() {
    }
};
MyjobemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myjobem',
        template: __webpack_require__(/*! raw-loader!./myjobem.page.html */ "./node_modules/raw-loader/index.js!./src/app/employer/myjobem/myjobem.page.html"),
        styles: [__webpack_require__(/*! ./myjobem.page.scss */ "./src/app/employer/myjobem/myjobem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyjobemPage);



/***/ })

}]);
//# sourceMappingURL=myjobem-myjobem-module-es2015.js.map