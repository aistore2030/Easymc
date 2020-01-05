(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mc-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mc/tabs/tabs.page.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mc/tabs/tabs.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs #tabs>\n\t<ion-tab-bar slot=\"bottom\">\n\t\t<ion-tab-button tab=\"mc/home\">\n\t\t\t<ion-icon name=\"home\"></ion-icon>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"mc/myjob\">\n\t\t\t<ion-icon name=\"briefcase\"></ion-icon>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"mc/bookmark\">\n\t\t\t<ion-icon name=\"bookmark\"></ion-icon>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"mc/notification\">\n\t\t\t<ion-icon name=\"notifications\"></ion-icon>\t\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"mc/profile\">\n\t\t\t<ion-icon name=\"contact\"></ion-icon>\n\t\t</ion-tab-button>\n\t</ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/mc/tabs/tabs.module.ts":
/*!****************************************!*\
  !*** ./src/app/mc/tabs/tabs.module.ts ***!
  \****************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/mc/tabs/tabs.page.ts");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/mc/tabs/tabs.router.module.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__["TabsRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/mc/tabs/tabs.page.scss":
/*!****************************************!*\
  !*** ./src/app/mc/tabs/tabs.page.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mc/tabs/tabs.page.ts":
/*!**************************************!*\
  !*** ./src/app/mc/tabs/tabs.page.ts ***!
  \**************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/mc/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/mc/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/mc/tabs/tabs.router.module.ts":
/*!***********************************************!*\
  !*** ./src/app/mc/tabs/tabs.router.module.ts ***!
  \***********************************************/
/*! exports provided: TabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRoutingModule", function() { return TabsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/mc/tabs/tabs.page.ts");




var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            { path: 'mc/home', loadChildren: '../home/home.module#HomePageModule' },
            { path: 'mc/myjob', loadChildren: '../myjob/myjob.module#MyjobPageModule' },
            { path: 'mc/bookmark', loadChildren: '../bookmark/bookmark.module#BookmarkPageModule' },
            { path: 'mc/notification', loadChildren: '../notification/notification.module#NotificationPageModule' },
            { path: 'mc/profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
            { path: 'mc/myjob/showdetail', loadChildren: '../showdetail/showdetail.module#ShowdetailPageModule' },
        ]
    }
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=mc-tabs-tabs-module-es5.js.map