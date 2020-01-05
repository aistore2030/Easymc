(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookmark-bookmark-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mc/bookmark/bookmark.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mc/bookmark/bookmark.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>bookmark</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button expand=\"block\" (click)=\"presentActionSheet()\">Show Action Sheet</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mc/bookmark/bookmark-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/mc/bookmark/bookmark-routing.module.ts ***!
  \********************************************************/
/*! exports provided: BookmarkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPageRoutingModule", function() { return BookmarkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bookmark_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookmark.page */ "./src/app/mc/bookmark/bookmark.page.ts");




var routes = [
    {
        path: '',
        component: _bookmark_page__WEBPACK_IMPORTED_MODULE_3__["BookmarkPage"]
    }
];
var BookmarkPageRoutingModule = /** @class */ (function () {
    function BookmarkPageRoutingModule() {
    }
    BookmarkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BookmarkPageRoutingModule);
    return BookmarkPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/mc/bookmark/bookmark.module.ts":
/*!************************************************!*\
  !*** ./src/app/mc/bookmark/bookmark.module.ts ***!
  \************************************************/
/*! exports provided: BookmarkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPageModule", function() { return BookmarkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookmark_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookmark-routing.module */ "./src/app/mc/bookmark/bookmark-routing.module.ts");
/* harmony import */ var _bookmark_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookmark.page */ "./src/app/mc/bookmark/bookmark.page.ts");







var BookmarkPageModule = /** @class */ (function () {
    function BookmarkPageModule() {
    }
    BookmarkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _bookmark_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookmarkPageRoutingModule"]
            ],
            declarations: [_bookmark_page__WEBPACK_IMPORTED_MODULE_6__["BookmarkPage"]]
        })
    ], BookmarkPageModule);
    return BookmarkPageModule;
}());



/***/ }),

/***/ "./src/app/mc/bookmark/bookmark.page.scss":
/*!************************************************!*\
  !*** ./src/app/mc/bookmark/bookmark.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21jL2Jvb2ttYXJrL2Jvb2ttYXJrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/mc/bookmark/bookmark.page.ts":
/*!**********************************************!*\
  !*** ./src/app/mc/bookmark/bookmark.page.ts ***!
  \**********************************************/
/*! exports provided: BookmarkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPage", function() { return BookmarkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");






var BookmarkPage = /** @class */ (function () {
    function BookmarkPage(actionSheetController, router, storage, toastCtrl) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
    }
    BookmarkPage.prototype.ngOnInit = function () {
    };
    BookmarkPage.prototype.presentActionSheet = function () {
        var _this = this;
        this.actionSheet = this.actionSheetController.create({
            header: 'Freaky Jolly',
            buttons: [{
                    text: 'edit',
                    role: 'destructive',
                    handler: function () {
                        _this.router.navigate(['tabs/mc/home']);
                    }
                }, {
                    text: 'Logout',
                    icon: 'logout',
                    handler: function () {
                        _this.storage.clear();
                        _this.router.navigate(['/login']);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }]
        }).then(function (actionsheet) {
            actionsheet.present();
        });
    };
    BookmarkPage.prototype.prosesLogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.clear();
                        this.router.navigate(['/login']);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'logout succesful',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    BookmarkPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    BookmarkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookmark',
            template: __webpack_require__(/*! raw-loader!./bookmark.page.html */ "./node_modules/raw-loader/index.js!./src/app/mc/bookmark/bookmark.page.html"),
            styles: [__webpack_require__(/*! ./bookmark.page.scss */ "./src/app/mc/bookmark/bookmark.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], BookmarkPage);
    return BookmarkPage;
}());



/***/ })

}]);
//# sourceMappingURL=bookmark-bookmark-module-es5.js.map