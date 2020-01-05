(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profileem-profileem-module"],{

/***/ "./node_modules/ionic4-rating/dist/components/rating.js":
/*!**************************************************************!*\
  !*** ./node_modules/ionic4-rating/dist/components/rating.js ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.size = 'default';
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RatingComponent_1 = RatingComponent;
    RatingComponent.prototype.onClick = function (rate) {
        this.rate = rate;
        this.rateChange.emit(this.rate);
        this._onChange(this.rate);
    };
    RatingComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.rate = value;
        }
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) { };
    RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled;
    };
    var RatingComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RatingComponent.prototype, "rateChange", void 0);
    RatingComponent = RatingComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "rating",
            template: "\n    <ion-buttons>\n      <ion-button [disabled]=\"readonly\" fill=\"clear\" [size]=\"size\" *ngFor=\"let current of [1, 2, 3, 4, 5]; let i = index\"\n        (click)=\"onClick(i + 1)\" (mouseover)=\"hoverRate = i + 1\" (mouseleave)=\"hoverRate = 0\">\n        <ion-icon slot=\"icon-only\" name=\"star\" [class.filled]=\"(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  ",
            styles: [
                "\n      ion-buttons {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled] {\n        opacity: 1;\n      }\n\n      ion-icon {\n        color: gray;\n      }\n\n      ion-icon.filled {\n        color: orange;\n      }\n    "
            ],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RatingComponent_1; }),
                    multi: true
                }
            ]
        })
    ], RatingComponent);
    return RatingComponent;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ "./node_modules/ionic4-rating/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic4-rating/dist/index.js ***!
  \**************************************************/
/*! exports provided: IonicRatingModule, RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-rating.module */ "./node_modules/ionic4-rating/dist/ionic-rating.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__["IonicRatingModule"]; });

/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/rating */ "./node_modules/ionic4-rating/dist/components/rating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return _components_rating__WEBPACK_IMPORTED_MODULE_1__["RatingComponent"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ionic4-rating/dist/ionic-rating.module.js":
/*!****************************************************************!*\
  !*** ./node_modules/ionic4-rating/dist/ionic-rating.module.js ***!
  \****************************************************************/
/*! exports provided: IonicRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return IonicRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rating */ "./node_modules/ionic4-rating/dist/components/rating.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IonicRatingModule = /** @class */ (function () {
    function IonicRatingModule() {
    }
    IonicRatingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
            exports: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]],
            declarations: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]
        })
    ], IonicRatingModule);
    return IonicRatingModule;
}());

//# sourceMappingURL=ionic-rating.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employer/profileem/profileem.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employer/profileem/profileem.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n</ion-header>\n\n<ion-content >\n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-button>\n        <ion-icon color=\"light\" slot=\"icon-only\" name=\"time\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"light\" (click)=\"presentActionSheet()\">\n        <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-avatar>\n    <img src=\"https://f.ptcdn.info/192/066/000/pylequ8eqfyBoV5jx8B-o.jpg\">\n  </ion-avatar>\n\n  <div class=\"contaier\">\n    <div class=\"wrapper_hearder\">\n      <h2>Lalisa Manoban</h2>\n      <span>Bangkok, Thailand</span>\n      <div style=\"font-size: 25px; color: gold; padding: 10px 0 30px 0\">\n      <ion-icon name=\"star\" ></ion-icon>\n      <ion-icon name=\"star\" ></ion-icon>\n      <ion-icon name=\"star\" ></ion-icon>\n      <ion-icon name=\"star\" ></ion-icon>\n      <ion-icon name=\"star\" ></ion-icon>\n    </div>\n      <!-- <rating [(ngModel)]=\"rate\" readonly=\"false\" size=\"default\" (ngModelChange)=\"onRateChange($event)\"></rating> -->\n      <ion-grid>\n        <ion-row>\n          <ion-col style=\"border-right: 1px solid #7373733b;\">\n            <h5>1</h5>\n            <h6>Job</h6>\n          </ion-col>\n          <ion-col style=\"border-right: 1px solid #7373733b;\">\n            <h5>1</h5>\n            <h6>Completed Jobs</h6>\n          </ion-col>\n          <ion-col>\n            <h5>1</h5>\n            <h6>Cancle Jobs</h6>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </div>\n    <div class=\"wrapper_content\">\n      <ion-segment [(ngModel)]=\"profile\">\n        <ion-segment-button checked value=\"Personal\">\n          <ion-label>Personal</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button value=\"Review\">\n          <ion-label>Review</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <div class=\"wrapper_content_text\">\n      <div [ngSwitch]=\"profile\">\n        <div *ngSwitchCase=\"'Personal'\">\n          <h2>Information</h2>\n          <p>Contrary to popular belief, Lorem Ipsum is not\n            simply random text. It has roots in a piece\n            of classical Latin literature from 45 BC,\n            Contrary to popular belief, Lorem Ipsum is not\n            simply random text. It has roots in a piece\n            of classical Latin literature from 45 BC,\n            Contrary to popular belief, Lorem Ipsum is not\n            simply random text. It has roots in a piece\n            of classical Latin literature from 45 BC,\n            Contrary to popular belief, Lorem Ipsum is not\n            simply random text. It has roots in a piece\n            of classical Latin literature from 45 BC,\n            Contrary to popular belief, Lorem Ipsum is not\n            simply random text. It has roots in a piece\n          </p>\n        </div>\n\n        <div *ngSwitchCase=\"'Review'\">\n          <div>\n            <ion-item style=\"padding: 30px 0 0 0;\">\n              <ion-avatar slot=\"start\" style=\"width: 60px; height: 60px; margin: 0px;\">\n                <img src=\"https://f.ptcdn.info/192/066/000/pylequ8eqfyBoV5jx8B-o.jpg\">\n              </ion-avatar>\n              <ion-label>\n                <h3>Phanukarn Rattanasuk</h3>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n              </ion-label>\n            </ion-item>\n            <ion-label>\n              <h2>“ Where does it come from? “</h2>\n              <p>Contrary to popular belief, Lorem Ipsum is not\n                simply random text. It has roots in a piece\n                of classical Latin literature from 45 BC, </p>\n            </ion-label>\n          </div>\n          <div>\n            <ion-item style=\"padding: 30px 0 0 0;\">\n              <ion-avatar slot=\"start\" style=\"width: 60px; height: 60px; margin: 0px;\">\n                <img src=\"https://f.ptcdn.info/192/066/000/pylequ8eqfyBoV5jx8B-o.jpg\">\n              </ion-avatar>\n              <ion-label>\n                <h3>Phanukarn Rattanasuk</h3>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n              </ion-label>\n            </ion-item>\n            <ion-label>\n              <h2>“ Where does it come from? “</h2>\n              <p>Contrary to popular belief, Lorem Ipsum is not\n                simply random text. It has roots in a piece\n                of classical Latin literature from 45 BC, </p>\n            </ion-label>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/profileem/profileem-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/employer/profileem/profileem-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfileemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileemPageRoutingModule", function() { return ProfileemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profileem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileem.page */ "./src/app/employer/profileem/profileem.page.ts");




const routes = [
    {
        path: '',
        component: _profileem_page__WEBPACK_IMPORTED_MODULE_3__["ProfileemPage"]
    }
];
let ProfileemPageRoutingModule = class ProfileemPageRoutingModule {
};
ProfileemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileemPageRoutingModule);



/***/ }),

/***/ "./src/app/employer/profileem/profileem.module.ts":
/*!********************************************************!*\
  !*** ./src/app/employer/profileem/profileem.module.ts ***!
  \********************************************************/
/*! exports provided: ProfileemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileemPageModule", function() { return ProfileemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profileem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profileem-routing.module */ "./src/app/employer/profileem/profileem-routing.module.ts");
/* harmony import */ var _profileem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profileem.page */ "./src/app/employer/profileem/profileem.page.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");








let ProfileemPageModule = class ProfileemPageModule {
};
ProfileemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
            _profileem_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileemPageRoutingModule"],
        ],
        declarations: [_profileem_page__WEBPACK_IMPORTED_MODULE_6__["ProfileemPage"]]
    })
], ProfileemPageModule);



/***/ }),

/***/ "./src/app/employer/profileem/profileem.page.scss":
/*!********************************************************!*\
  !*** ./src/app/employer/profileem/profileem.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n* {\n  font-family: \"Roboto\", sans-serif;\n}\nion-content {\n  --background: #124AE5;\n}\nion-toolbar {\n  --background: #124AE5;\n  --border-width: 0 !important;\n}\nion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  width: 120px;\n  height: 120px;\n  max-width: none;\n  z-index: 2;\n  /* position: fixed; */\n  top: 70px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border: 5px solid #ffffff;\n}\np {\n  color: #696969;\n  font-size: 16px;\n}\n.contaier {\n  margin-top: -70px;\n  width: 100%;\n  top: 120px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ffffff;\n  border-radius: 30px 30px 0 0;\n}\n.wrapper_hearder {\n  text-align: center;\n  padding: 60px 20px 10px 20px;\n}\n.wrapper_content {\n  text-align: center;\n  padding: 40px 50px 10px 50px;\n}\n.wrapper_content_text {\n  text-align: left;\n  padding: 20px 20px 10px 20px;\n}\nion-grid {\n  box-shadow: 1px 1px 5px 0px rgba(84, 84, 84, 0.23);\n  border-radius: 10px;\n  padding: 20px;\n}\nh2 {\n  font-size: 20px;\n  font-weight: 800;\n  margin: 20px 0 10px 0;\n}\nh5 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0px;\n}\nh6 {\n  font-size: 14px;\n  font-weight: 500;\n  color: #737373;\n  margin: 0px;\n}\nspan {\n  font-size: 14px;\n  color: #86868F;\n}\nion-segment-button {\n  --color: #86868F;\n  --color-activated: #000000;\n  --color-hover: #000000;\n  --color-checked:#ffffff;\n  --background-checked:#124AE5;\n  --padding-start:20px;\n  --padding-end:20px;\n  --background-hover:#E8E8E8;\n  --background-activated:#ffffff;\n  font-weight: 600;\n  --padding-bottom:5px;\n  --padding-top:5px;\n}\nion-item {\n  --border-width: 0px;\n  --padding-end:0px;\n  --padding-start:0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25lcy9FYXN5bWMvc3JjL2FwcC9lbXBsb3llci9wcm9maWxlZW0vcHJvZmlsZWVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wbG95ZXIvcHJvZmlsZWVtL3Byb2ZpbGVlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVMsMEVBQUE7QUFDVDtFQUNJLGlDQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0FDQ0o7QURDQTtFQUNJLHFCQUFBO0VBQ0EsNEJBQUE7QUNFSjtBREFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ0dKO0FEREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0lKO0FEREE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ0lKO0FEREE7RUFDSSxrQkFBQTtFQUNBLDRCQUFBO0FDSUo7QURGQTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7QUNLSjtBREhBO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtBQ01KO0FESkE7RUFHQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ09BO0FETEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ1FKO0FETkE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDUUo7QUROQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDU0o7QURQQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDVUo7QURQRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ1VKO0FEUkE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL3Byb2ZpbGVlbS9wcm9maWxlZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuKntcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogIzEyNEFFNTtcbn1cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogIzEyNEFFNTtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuaW9uLWF2YXRhcntcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHotaW5kZXg6IDI7XG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICAgIHRvcDogNzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmO1xufVxucHtcbiAgICBjb2xvcjogIzY5Njk2OTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jb250YWllcntcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDEyMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDAgMDtcbn1cblxuLndyYXBwZXJfaGVhcmRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNjBweCAyMHB4IDEwcHggMjBweDtcbn1cbi53cmFwcGVyX2NvbnRlbnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHggNTBweCAxMHB4IDUwcHg7XG59XG4ud3JhcHBlcl9jb250ZW50X3RleHR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xufVxuaW9uLWdyaWR7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggcmdiYSg4NCw4NCw4NCwwLjIzKTtcbi1tb3otYm94LXNoYWRvdzogMXB4IDFweCA1cHggMHB4IHJnYmEoODQsODQsODQsMC4yMyk7XG5ib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggcmdiYSg4NCw4NCw4NCwwLjIzKTtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5wYWRkaW5nOiAyMHB4O1xufVxuaDJ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7ICBcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG59XG5oNXtcbiAgICBcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDBweDtcbn1cbmg2e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICAgIG1hcmdpbjogMHB4O1xufVxuc3BhbntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM4Njg2OEY7XG59XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIC0tY29sb3I6ICM4Njg2OEY7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDAwMDA7XG4gICAgLS1jb2xvci1ob3ZlcjogIzAwMDAwMDtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6I2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDojMTI0QUU1O1xuICAgIC0tcGFkZGluZy1zdGFydDoyMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6MjBweDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6I0U4RThFODtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOjVweDtcbiAgICAtLXBhZGRpbmctdG9wOjVweDtcbn1cbmlvbi1pdGVte1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDowcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OjBweDtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzEyNEFFNTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMxMjRBRTU7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1hdmF0YXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgei1pbmRleDogMjtcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICB0b3A6IDcwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbnAge1xuICBjb2xvcjogIzY5Njk2OTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY29udGFpZXIge1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMTIwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XG59XG5cbi53cmFwcGVyX2hlYXJkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHggMjBweCAxMHB4IDIwcHg7XG59XG5cbi53cmFwcGVyX2NvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggNTBweCAxMHB4IDUwcHg7XG59XG5cbi53cmFwcGVyX2NvbnRlbnRfdGV4dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDIwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggcmdiYSg4NCwgODQsIDg0LCAwLjIzKTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggcmdiYSg4NCwgODQsIDg0LCAwLjIzKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMHB4IHJnYmEoODQsIDg0LCA4NCwgMC4yMyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDBweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBtYXJnaW46IDBweDtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4Njg2OEY7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICM4Njg2OEY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjMDAwMDAwO1xuICAtLWNvbG9yLWhvdmVyOiAjMDAwMDAwO1xuICAtLWNvbG9yLWNoZWNrZWQ6I2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IzEyNEFFNTtcbiAgLS1wYWRkaW5nLXN0YXJ0OjIwcHg7XG4gIC0tcGFkZGluZy1lbmQ6MjBweDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiNFOEU4RTg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTo1cHg7XG4gIC0tcGFkZGluZy10b3A6NXB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6MHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/employer/profileem/profileem.page.ts":
/*!******************************************************!*\
  !*** ./src/app/employer/profileem/profileem.page.ts ***!
  \******************************************************/
/*! exports provided: ProfileemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileemPage", function() { return ProfileemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/provider */ "./src/app/providers/provider.ts");







let ProfileemPage = class ProfileemPage {
    constructor(actionSheetController, router, storage, toastCtrl, Provider) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.Provider = Provider;
        this.profile = "Personal";
        this.customers = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    ngOnInit() {
    }
    presentActionSheet() {
        this.actionSheet = this.actionSheetController.create({
            header: 'Profile employer',
            buttons: [{
                    text: 'edit profile',
                    role: 'destructive',
                    icon: 'create',
                    handler: () => {
                        this.router.navigate(['/employer/profileem/editprofileemployer']);
                    }
                }, {
                    text: 'Logout',
                    icon: 'log-out',
                    handler: () => {
                        this.storage.clear();
                        this.router.navigate(['/login']);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }]
        }).then(actionsheet => {
            actionsheet.present();
        });
    }
    updateCustomer(id, employ_id, fname, lname, location, info) {
        this.router.navigate(['/employer/profileem/editprofileemployer/' + id + '/' + employ_id + '/' + fname + '/' + lname + '/' + location + '/' + info]);
    }
    prosesLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.clear();
            this.router.navigate(['/login']);
            const toast = yield this.toastCtrl.create({
                message: 'logout succesful',
                duration: 3000
            });
            toast.present();
        });
    }
    onRateChange(event) {
        console.log('Your rate:', event);
    }
};
ProfileemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers_provider__WEBPACK_IMPORTED_MODULE_5__["Provider"] }
];
ProfileemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profileem',
        template: __webpack_require__(/*! raw-loader!./profileem.page.html */ "./node_modules/raw-loader/index.js!./src/app/employer/profileem/profileem.page.html"),
        styles: [__webpack_require__(/*! ./profileem.page.scss */ "./src/app/employer/profileem/profileem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_provider__WEBPACK_IMPORTED_MODULE_5__["Provider"]])
], ProfileemPage);



/***/ })

}]);
//# sourceMappingURL=profileem-profileem-module-es2015.js.map