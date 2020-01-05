(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-tabbar-tabbar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/employer/tabbar/tabbar.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employer/tabbar/tabbar.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs #tabs>\n\t<ion-tab-bar slot=\"bottom\">\n\t\t<ion-tab-button tab=\"employer/homeem\">\n\t\t\t<ion-icon name=\"home\"></ion-icon>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"employer/myjobem\">\n\t\t\t<ion-icon name=\"briefcase\"></ion-icon>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"employer/bookmarkem\">\n\t\t\t<ion-icon name=\"bookmark\"></ion-icon>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"employer/notificationem\">\n\t\t\t<ion-icon name=\"notifications\"></ion-icon>\t\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"employer/profileem\">\n\t\t\t<ion-icon name=\"contact\"></ion-icon>\n\t\t</ion-tab-button>\n\t</ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/employer/tabbar/tabbar-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/employer/tabbar/tabbar-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: TabbarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarPageRoutingModule", function() { return TabbarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabbar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabbar.page */ "./src/app/employer/tabbar/tabbar.page.ts");




var routes = [
    {
        path: '',
        component: _tabbar_page__WEBPACK_IMPORTED_MODULE_3__["TabbarPage"],
        children: [
            { path: 'employer/homeem', loadChildren: '../homeem/homeem.module#HomeemPageModule' },
            { path: 'employer/myjobem', loadChildren: '../myjobem/myjobem.module#MyjobemPageModule' },
            { path: 'employer/bookmarkem', loadChildren: '../bookmarkem/bookmarkem.module#BookmarkemPageModule' },
            { path: 'employer/notificationem', loadChildren: '../notificationem/notificationem.module#NotificationemPageModule' },
            { path: 'employer/profileem', loadChildren: '../profileem/profileem.module#ProfileemPageModule' },
        ]
    }
];
var TabbarPageRoutingModule = /** @class */ (function () {
    function TabbarPageRoutingModule() {
    }
    TabbarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TabbarPageRoutingModule);
    return TabbarPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/employer/tabbar/tabbar.module.ts":
/*!**************************************************!*\
  !*** ./src/app/employer/tabbar/tabbar.module.ts ***!
  \**************************************************/
/*! exports provided: TabbarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarPageModule", function() { return TabbarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabbar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabbar-routing.module */ "./src/app/employer/tabbar/tabbar-routing.module.ts");
/* harmony import */ var _tabbar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabbar.page */ "./src/app/employer/tabbar/tabbar.page.ts");







var TabbarPageModule = /** @class */ (function () {
    function TabbarPageModule() {
    }
    TabbarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tabbar_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabbarPageRoutingModule"]
            ],
            declarations: [_tabbar_page__WEBPACK_IMPORTED_MODULE_6__["TabbarPage"]]
        })
    ], TabbarPageModule);
    return TabbarPageModule;
}());



/***/ }),

/***/ "./src/app/employer/tabbar/tabbar.page.scss":
/*!**************************************************!*\
  !*** ./src/app/employer/tabbar/tabbar.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL3RhYmJhci90YWJiYXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/employer/tabbar/tabbar.page.ts":
/*!************************************************!*\
  !*** ./src/app/employer/tabbar/tabbar.page.ts ***!
  \************************************************/
/*! exports provided: TabbarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarPage", function() { return TabbarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabbarPage = /** @class */ (function () {
    function TabbarPage() {
    }
    TabbarPage.prototype.ngOnInit = function () {
    };
    TabbarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabbar',
            template: __webpack_require__(/*! raw-loader!./tabbar.page.html */ "./node_modules/raw-loader/index.js!./src/app/employer/tabbar/tabbar.page.html"),
            styles: [__webpack_require__(/*! ./tabbar.page.scss */ "./src/app/employer/tabbar/tabbar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabbarPage);
    return TabbarPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-tabbar-tabbar-module-es5.js.map