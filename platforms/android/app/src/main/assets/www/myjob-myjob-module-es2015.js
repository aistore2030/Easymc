(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myjob-myjob-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mc/myjob/myjob.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mc/myjob/myjob.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>My Jobs</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon style=\"color: black;\" name=\"calendar\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-toolbar>\n    <div class=\"container\">\n      <h1>All your Jobs</h1>\n      <span class=\"subtext\">Work you have to do <span style=\"font-weight: 800; color: black;\">Beness!!</span> </span>\n    </div>\n    \n  </ion-toolbar>\n\n  <div class=\"container_slide\">\n    <ion-slides [options]=\"sliderConfig\">\n\n      <ion-slide>\n        <ion-card (click)=\"showDetail()\">\n          <img style=\" object-fit: cover;\"\n            src=\"https://p-u.popcdn.net/hero_images/desktop_images/000/000/167/medium/755343b1dccf14b8ac4d627c8bc1180410c991f3.jpg%20-strip?1577639563\" />\n          <ion-card-content>\n            <ion-card-title style=\"font-size: 20px;  font-weight: 800; \">iCreator\n              Conference 2019\n            </ion-card-title>\n            <span class=\"destext\">Budget 5,000 - 10,000฿</span><br>\n            <ion-col style=\"padding: 0px;\">\n              <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n            </ion-col>\n            <ion-col>\n              <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n            </ion-col><br>\n            <ion-icon name=\"person\"></ion-icon> <span>สมัครแล้ว <strong class=\"num\"> 1 / 3 </strong></span>\n            <h3>รายละเอียด</h3>\n            <p>We are looking for a FX and animation\n              artist who can work on freelance </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <img style=\" object-fit: cover;\"\n            src=\"https://p-u.popcdn.net/hero_images/desktop_images/000/000/173/medium/00c4a62e25d9fb31cd398676cf1bb8822c9044ae.jpg%20-strip?1576482335\" />\n          <ion-card-content>\n            <ion-card-title style=\"font-size: 20px;  font-weight: 800; \">iCreator\n              Conference 2019\n            </ion-card-title>\n            <span class=\"destext\">Budget 5,000 - 10,000฿</span><br>\n            <ion-col style=\"padding: 0px;\">\n              <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n            </ion-col>\n            <ion-col>\n              <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n            </ion-col><br>\n            <ion-icon name=\"person\"></ion-icon> <span>สมัครแล้ว <strong class=\"num\"> 1 / 3 </strong></span>\n            <h3>รายละเอียด</h3>\n            <p>We are looking for a FX and animation\n              artist who can work on freelance </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <img style=\" object-fit: cover;\"\n            src=\"https://s359.kapook.com/pagebuilder/1ed0969e-44d4-4291-82f0-93882e64c969.jpg\" />\n          <ion-card-content>\n            <ion-card-title style=\"font-size: 20px;  font-weight: 800; \">iCreator\n              Conference 2019\n            </ion-card-title>\n            <span class=\"destext\">Budget 5,000 - 10,000฿</span><br>\n            <ion-col style=\"padding: 0px;\">\n              <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n            </ion-col>\n            <ion-col>\n              <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n            </ion-col><br>\n            <ion-icon name=\"person\"></ion-icon> <span>สมัครแล้ว <strong class=\"num\"> 1 / 3 </strong></span>\n            <h3>รายละเอียด</h3>\n            <p>We are looking for a FX and animation\n              artist who can work on freelance </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <img style=\" object-fit: cover;\"\n            src=\"https://s359.kapook.com/pagebuilder/1ed0969e-44d4-4291-82f0-93882e64c969.jpg\" />\n          <ion-card-content>\n            <ion-card-title style=\"font-size: 20px;  font-weight: 800; \">iCreator\n              Conference 2019\n            </ion-card-title>\n            <span class=\"destext\">Budget 5,000 - 10,000฿</span><br>\n            <ion-col style=\"padding: 0px;\">\n              <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n            </ion-col>\n            <ion-col>\n              <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n            </ion-col><br>\n            <ion-icon name=\"person\"></ion-icon> <span>สมัครแล้ว <strong class=\"num\"> 1 / 3 </strong></span>\n            <h3>รายละเอียด</h3>\n            <p>We are looking for a FX and animation\n              artist who can work on freelance </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div class=\"containers\">\n    <h3>Coming Soon!!!</h3>\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title style=\"font-size: 20px;  font-weight: 800; \">iCreator\n          Conference 2019\n        </ion-card-title>\n        <span class=\"destext\">Budget 5,000 - 10,000฿</span><br>\n        <ion-col style=\"padding: 0px;\">\n          <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n        </ion-col><br>\n        <ion-icon name=\"person\"></ion-icon> <span>สมัครแล้ว <strong class=\"num\"> 1 / 3 </strong></span>\n        <h3>รายละเอียด</h3>\n        <p>We are looking for a FX and animation\n          artist who can work on freelance </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/mc/myjob/myjob-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/mc/myjob/myjob-routing.module.ts ***!
  \**************************************************/
/*! exports provided: MyjobPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobPageRoutingModule", function() { return MyjobPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myjob_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myjob.page */ "./src/app/mc/myjob/myjob.page.ts");




const routes = [
    {
        path: '',
        component: _myjob_page__WEBPACK_IMPORTED_MODULE_3__["MyjobPage"]
    }
];
let MyjobPageRoutingModule = class MyjobPageRoutingModule {
};
MyjobPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyjobPageRoutingModule);



/***/ }),

/***/ "./src/app/mc/myjob/myjob.module.ts":
/*!******************************************!*\
  !*** ./src/app/mc/myjob/myjob.module.ts ***!
  \******************************************/
/*! exports provided: MyjobPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobPageModule", function() { return MyjobPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myjob_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myjob-routing.module */ "./src/app/mc/myjob/myjob-routing.module.ts");
/* harmony import */ var _myjob_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myjob.page */ "./src/app/mc/myjob/myjob.page.ts");







let MyjobPageModule = class MyjobPageModule {
};
MyjobPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myjob_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyjobPageRoutingModule"]
        ],
        declarations: [_myjob_page__WEBPACK_IMPORTED_MODULE_6__["MyjobPage"]]
    })
], MyjobPageModule);



/***/ }),

/***/ "./src/app/mc/myjob/myjob.page.scss":
/*!******************************************!*\
  !*** ./src/app/mc/myjob/myjob.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n* {\n  font-family: \"Roboto\", sans-serif;\n}\nh1 {\n  margin: 0;\n  padding: 5px 0 5px 0;\n  font-size: 22px;\n  font-weight: 800 !important;\n}\nh3 {\n  margin: 0;\n  padding: 20px 0 0 0;\n  font-size: 18px;\n  font-weight: 600 !important;\n}\n.subtext {\n  font-size: 16px;\n  color: #86868F;\n}\n.container {\n  padding: 20px 20px 20px 20px;\n}\n.containers {\n  padding: 0px 20px;\n}\n.swiper-zoom-container {\n  text-align: left;\n}\n.container_slide {\n  margin-left: -20px;\n}\n.slide-overleb {\n  position: fixed;\n  bottom: 0px;\n  padding-bottom: 3px;\n}\nion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%;\n}\n.category-block {\n  margin-bottom: 4px;\n}\n.category-banner {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-light);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25lcy9FYXN5bWMvc3JjL2FwcC9tYy9teWpvYi9teWpvYi5wYWdlLnNjc3MiLCJzcmMvYXBwL21jL215am9iL215am9iLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUywwRUFBQTtBQUNUO0VBQ0ksaUNBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7QURDQTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0VKO0FEQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0dKO0FEREE7RUFDSSw0QkFBQTtBQ0lKO0FEREE7RUFDSSxpQkFBQTtBQ0lKO0FEREE7RUFDSSxnQkFBQTtBQ0lKO0FERkE7RUFDSSxrQkFBQTtBQ0tKO0FERkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDS0o7QURBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNHSjtBREFBO0VBQ0ksa0JBQUE7QUNHSjtBREFBO0VBQ0ksaURBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL21jL215am9iL215am9iLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcbip7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5oMXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbn1cbmgze1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG4uc3VidGV4dHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM4Njg2OEY7XG59XG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICBcbn1cbi5jb250YWluZXJze1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDtcbiAgIFxufVxuLnN3aXBlci16b29tLWNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRhaW5lcl9zbGlkZXtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICBcbn1cbi5zbGlkZS1vdmVybGViIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbn1cblxuXG5cbmlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbiBcbi5jYXRlZ29yeS1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuIFxuLmNhdGVnb3J5LWJhbm5lciB7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4vLyAuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuLy8gfSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLnN1YnRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODY4NjhGO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNvbnRhaW5lcnMge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLnN3aXBlci16b29tLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb250YWluZXJfc2xpZGUge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5zbGlkZS1vdmVybGViIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5jYXRlZ29yeS1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmNhdGVnb3J5LWJhbm5lciB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mc/myjob/myjob.page.ts":
/*!****************************************!*\
  !*** ./src/app/mc/myjob/myjob.page.ts ***!
  \****************************************/
/*! exports provided: MyjobPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobPage", function() { return MyjobPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MyjobPage = class MyjobPage {
    constructor(router) {
        this.router = router;
        this.sliderConfig = {
            slidesPerView: 1.14,
            spaceBetween: -10,
            centeredSlides: true
        };
    }
    ngOnInit() {
    }
    showDetail() {
        this.router.navigate(['tabs/mc/myjob/showdetail']);
    }
};
MyjobPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MyjobPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myjob',
        template: __webpack_require__(/*! raw-loader!./myjob.page.html */ "./node_modules/raw-loader/index.js!./src/app/mc/myjob/myjob.page.html"),
        styles: [__webpack_require__(/*! ./myjob.page.scss */ "./src/app/mc/myjob/myjob.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MyjobPage);



/***/ })

}]);
//# sourceMappingURL=myjob-myjob-module-es2015.js.map