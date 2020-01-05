(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showdetail-showdetail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mc/showdetail/showdetail.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mc/showdetail/showdetail.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-back-button text=\"\" icon=\"close-circle\" style=\"color: black;\">\n      </ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar>\n    <div class=\"container\">\n      <h1>iCreator Conference 2019</h1>\n      <span class=\"subtext\">Work you have to do <span class=\"mark-text\">Beness!!</span> </span>\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button style=\"padding: 0; color: black;\">\n        <ion-icon slot=\"icon-only\" name=\"bookmark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <img style=\"  object-fit: cover;\" src=\"https://p-u.popcdn.net/hero_images/desktop_images/000/000/167/medium/755343b1dccf14b8ac4d627c8bc1180410c991f3.jpg%20-strip?1577639563\" />\n\n</ion-content>"

/***/ }),

/***/ "./src/app/mc/showdetail/showdetail-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/mc/showdetail/showdetail-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ShowdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowdetailPageRoutingModule", function() { return ShowdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _showdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showdetail.page */ "./src/app/mc/showdetail/showdetail.page.ts");




var routes = [
    {
        path: '',
        component: _showdetail_page__WEBPACK_IMPORTED_MODULE_3__["ShowdetailPage"]
    }
];
var ShowdetailPageRoutingModule = /** @class */ (function () {
    function ShowdetailPageRoutingModule() {
    }
    ShowdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShowdetailPageRoutingModule);
    return ShowdetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/mc/showdetail/showdetail.module.ts":
/*!****************************************************!*\
  !*** ./src/app/mc/showdetail/showdetail.module.ts ***!
  \****************************************************/
/*! exports provided: ShowdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowdetailPageModule", function() { return ShowdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _showdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showdetail-routing.module */ "./src/app/mc/showdetail/showdetail-routing.module.ts");
/* harmony import */ var _showdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showdetail.page */ "./src/app/mc/showdetail/showdetail.page.ts");







var ShowdetailPageModule = /** @class */ (function () {
    function ShowdetailPageModule() {
    }
    ShowdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _showdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowdetailPageRoutingModule"]
            ],
            declarations: [_showdetail_page__WEBPACK_IMPORTED_MODULE_6__["ShowdetailPage"]]
        })
    ], ShowdetailPageModule);
    return ShowdetailPageModule;
}());



/***/ }),

/***/ "./src/app/mc/showdetail/showdetail.page.scss":
/*!****************************************************!*\
  !*** ./src/app/mc/showdetail/showdetail.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n* {\n  font-family: \"Roboto\", sans-serif;\n}\nh1 {\n  margin: 0;\n  padding: 5px 0 5px 0;\n  font-size: 22px;\n  font-weight: 800 !important;\n}\nh3 {\n  margin: 0;\n  padding: 20px 0 0 0;\n  font-size: 18px;\n  font-weight: 600 !important;\n}\n.subtext {\n  font-size: 16px;\n  color: #86868F;\n}\n.header-ios ion-toolbar:last-child {\n  --border-width: 0px;\n}\n.container {\n  padding: 0 20px 20px 20px;\n}\n.mark-text {\n  font-weight: 800;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25lcy9FYXN5bWMvc3JjL2FwcC9tYy9zaG93ZGV0YWlsL3Nob3dkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9tYy9zaG93ZGV0YWlsL3Nob3dkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFTLDBFQUFBO0FBQ1Q7RUFDSSxpQ0FBQTtBQ0NKO0FERUE7RUFDSSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNDSjtBRENBO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDRUo7QURBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDR0o7QURBQTtFQUNJLG1CQUFBO0FDR0o7QURBQTtFQUNJLHlCQUFBO0FDR0o7QURBQTtFQUNJLGdCQUFBO0VBQWtCLFlBQUE7QUNJdEIiLCJmaWxlIjoic3JjL2FwcC9tYy9zaG93ZGV0YWlsL3Nob3dkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuKntcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmgxe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xufVxuaDN7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cbi5zdWJ0ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzg2ODY4Rjtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgXG59XG4ubWFyay10ZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiBibGFjaztcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJ0ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzg2ODY4Rjtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xufVxuXG4ubWFyay10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mc/showdetail/showdetail.page.ts":
/*!**************************************************!*\
  !*** ./src/app/mc/showdetail/showdetail.page.ts ***!
  \**************************************************/
/*! exports provided: ShowdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowdetailPage", function() { return ShowdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShowdetailPage = /** @class */ (function () {
    function ShowdetailPage() {
    }
    ShowdetailPage.prototype.ngOnInit = function () {
    };
    ShowdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showdetail',
            template: __webpack_require__(/*! raw-loader!./showdetail.page.html */ "./node_modules/raw-loader/index.js!./src/app/mc/showdetail/showdetail.page.html"),
            styles: [__webpack_require__(/*! ./showdetail.page.scss */ "./src/app/mc/showdetail/showdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShowdetailPage);
    return ShowdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=showdetail-showdetail-module-es5.js.map