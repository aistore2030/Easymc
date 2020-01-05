(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mc/home/home.page.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mc/home/home.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon style=\"color: black;\" name=\"calendar\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n    <div class=\"containers\">\n      <span class=\"subtext\">Hi {{email}}!</span>\n      <h1>Popular Right Now</h1>\n      <span class=\"subtext\" >Don’t miss the chance to join these events!</span>\n      <hr class=\"line\">\n  </div>\n\n  <!-- ---------------------------------------------------------------------------------------- -->\n  <!-- <ion-item>\n    <h1>Popular Right Now</h1>\n    <a href=\"\" slot=\"end\" style=\"font-size: 16;\">See more</a>\n  </ion-item>\n  <span class=\"subtext\" style=\"padding: 20px;\">Don’t miss the chance to join these events!</span> -->\n\n  <ion-slides [options]=\"slidercard\">\n    <ion-slide>\n      <ion-card  style=\"\n      -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\n      box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75); \">\n        <img style=\" object-fit: cover; border-radius: 8px;\"\n          src=\"https://p-u.popcdn.net/hero_images/desktop_images/000/000/172/medium/4853d402665a911e99c3d10a7efbc51ced3235c7.jpg%20-strip?1576429601\" />\n          <ion-card-content style=\"padding: 10px 5px;\n          float: left;\">\n          <h4>iCreator Conference 2019</h4>\n          <span style=\"padding: 5px 0;\n          float: left;\">12 November 2019</span>\n        </ion-card-content>\n      </ion-card>\n     \n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card style=\"\n      -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\n      box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75); \">\n        <img style=\" object-fit: cover; border-radius: 8px;\" \n          src=\"https://p-u.popcdn.net/hero_images/desktop_images/000/000/173/medium/00c4a62e25d9fb31cd398676cf1bb8822c9044ae.jpg%20-strip?1576482335\" />\n          <ion-card-content style=\"padding: 10px 5px;\n          float: left;\">\n          <h4>iCreator Conference 2019</h4>\n          <span style=\"padding: 5px 0;\n          float: left;\">12 November 2019</span>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card style=\"\n      -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\n      box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75); \">\n        <img style=\" object-fit: cover; border-radius: 8px;\"\n          src=\"https://p-u.popcdn.net/hero_images/desktop_images/000/000/160/medium/2aa0830dd71daf57f662381df6d38f854c1b3eda.jpg%20-strip?1575002435\" />\n          <ion-card-content style=\"padding: 10px 5px;\n          float: left;\">\n          <h4>iCreator Conference 2019</h4>\n          <span style=\"padding: 5px 0;\n          float: left;\">12 November 2019</span>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card style=\"\n      -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\n      box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75); \">\n        <img style=\" object-fit: cover; border-radius: 8px;\"\n          src=\"https://s359.kapook.com/pagebuilder/1ed0969e-44d4-4291-82f0-93882e64c969.jpg\" />\n          <ion-card-content style=\"padding: 10px 5px;\n          float: left;\">\n          <h4>iCreator Conference 2019</h4>\n          <span style=\"padding: 5px 0;\n          float: left;\">12 November 2019</span>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n\n  <!-- ---------------------------------------------------------------------------------------- -->\n\n  <div class=\"containers\">\n    <h1>An Easy Way to Find Jobs</h1>\n    <span class=\"subtext\">Choose the desired job type.</span>\n  <hr class=\"line\">\n    <br><br>\n\n    <ion-segment [(ngModel)]=\"pet\">\n      <ion-slides [options]=\"sliderConfig\" #theSlides>\n\n\n        <ion-slide (click)=\"move(theSlides)\">\n          <ion-segment-button checked value=\"puppies\" style=\" border-radius:25px;\">\n            <ion-label>Call</ion-label>\n          </ion-segment-button>\n        </ion-slide>\n\n        <ion-slide (click)=\"move(theSlides)\">\n          <ion-segment-button value=\"kittens\" style=\" border-radius:25px;\">\n            <ion-label>Favorite</ion-label>\n          </ion-segment-button>\n        </ion-slide>\n\n        <ion-slide (click)=\"move(theSlides)\">\n          <ion-segment-button value=\"ducklings\" style=\" border-radius:25px;\">\n            <ion-label>Map</ion-label>\n          </ion-segment-button>\n        </ion-slide>\n\n        <ion-slide (click)=\"move(theSlides)\">\n          <ion-segment-button value=\"monkey\" style=\" border-radius:25px;\">\n            <ion-label>monkey</ion-label>\n          </ion-segment-button>\n        </ion-slide>\n\n        <ion-slide (click)=\"move(theSlides)\">\n          <ion-segment-button value=\"lion\" style=\" border-radius:25px;\">\n            <ion-label>lion</ion-label>\n          </ion-segment-button>\n        </ion-slide>\n\n        <ion-slide (click)=\"move(theSlides)\">\n          <ion-segment-button value=\"Tecnology\" style=\" border-radius:25px;\">\n            <ion-label>Tecnology</ion-label>\n          </ion-segment-button>\n        </ion-slide>\n\n        <ion-slide (click)=\"move(theSlides)\">\n          <ion-segment-button value=\"Education\" style=\" border-radius:25px;\">\n            <ion-label>Education</ion-label>\n          </ion-segment-button>\n        </ion-slide>\n\n        <ion-slide (click)=\"move(theSlides)\">\n          <ion-segment-button value=\"photo\" style=\" border-radius:25px;\">\n            <ion-label>Photo</ion-label>\n          </ion-segment-button>\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-segment>\n\n\n\n  </div>\n\n\n  <div [ngSwitch]=\"pet\">\n    <div *ngSwitchCase=\"'puppies'\">\n      <ion-card>\n        <img style=\"height: 125px; object-fit: cover;\"\n          src=\"https://p-u.popcdn.net/hero_images/desktop_images/000/000/172/medium/4853d402665a911e99c3d10a7efbc51ced3235c7.jpg%20-strip?1576429601\" />\n        <ion-card-content>\n          <ion-card-title style=\"font-size: 20px; font-family: 'Roboto', sans-serif; font-weight: 800; \">iCreator\n            Conference 2019\n          </ion-card-title>\n          <span class=\"destext\">Budget 5,000 - 10,000฿</span><br>\n          <ion-col style=\"padding: 0px;\">\n            <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n          </ion-col><br>\n          <ion-icon name=\"person\"></ion-icon> <span>สมัครแล้ว <strong class=\"num\"> 1 / 3 </strong></span>\n          <h3>รายละเอียด</h3>\n          <p>We are looking for a FX and animation\n            artist who can work on freelance </p>\n\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n    <div *ngSwitchCase=\"'kittens'\">\n      <ion-card>\n        <img style=\"height: 125px; object-fit: cover;\"\n          src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n        <ion-card-header>\n          <ion-card-title style=\"font-size: 20px; font-family: 'Roboto', sans-serif; font-weight: 800; \"> test\n          </ion-card-title>\n          <ion-card-subtitle style=\"font-size: 16px; font-family: 'Roboto', sans-serif; font-weight: 600;\">Budget\n            5,000\n            -\n            10,000฿</ion-card-subtitle>\n\n          <ion-col style=\"padding: 0px;\">\n            <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n          </ion-col>\n          <br><br>\n\n        </ion-card-header>\n        <ion-card-content>\n          <hr style=\"background: #D9D9D9;\">\n\n          <ion-col>\n            <ion-chip class=\"ion-margin-start\">\n              <ion-avatar>\n                <img\n                  src=\"https://p-u.popcdn.net/hero_images/desktop_images/000/000/160/medium/2aa0830dd71daf57f662381df6d38f854c1b3eda.jpg%20-strip?1575002435\">\n              </ion-avatar>\n              <ion-label>test</ion-label>\n            </ion-chip>\n          </ion-col>\n\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n\n\n\n    <div *ngSwitchCase=\"'kittens'\">\n      <ion-card>\n        <img style=\"height: 125px; object-fit: cover;\"\n          src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n        <ion-card-header>\n          <ion-card-title style=\"font-size: 20px; font-family: 'Roboto', sans-serif; font-weight: 800; \"> test\n          </ion-card-title>\n          <ion-card-subtitle style=\"font-size: 16px; font-family: 'Roboto', sans-serif; font-weight: 600;\">Budget\n            5,000\n            -\n            10,000฿</ion-card-subtitle>\n\n          <ion-col style=\"padding: 0px;\">\n            <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n          </ion-col>\n          <br><br>\n\n        </ion-card-header>\n        <ion-card-content>\n          <hr style=\"background: #D9D9D9;\">\n\n          <ion-col>\n            <ion-chip class=\"ion-margin-start\">\n              <ion-avatar>\n                <img\n                  src=\"https://p-u.popcdn.net/hero_images/desktop_images/000/000/160/medium/2aa0830dd71daf57f662381df6d38f854c1b3eda.jpg%20-strip?1575002435\">\n              </ion-avatar>\n              <ion-label>test</ion-label>\n            </ion-chip>\n          </ion-col>\n\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase=\"'ducklings'\">\n      <ion-card>\n        <img style=\"height: 125px; object-fit: cover;\"\n          src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n        <ion-card-header>\n          <ion-card-title style=\"font-size: 20px; font-family: 'Roboto', sans-serif; font-weight: 800; \"> test\n          </ion-card-title>\n          <ion-card-subtitle style=\"font-size: 16px; font-family: 'Roboto', sans-serif; font-weight: 600;\">Budget\n            5,000 - 10,000฿</ion-card-subtitle>\n\n          <ion-col style=\"padding: 0px;\">\n            <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n          </ion-col>\n          <br><br>\n        </ion-card-header>\n        <ion-card-content>\n          <hr style=\"background: #D9D9D9;\">\n          <ion-col>\n            <ion-chip class=\"ion-margin-start\">\n              <ion-avatar>\n                <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\">\n              </ion-avatar>\n              <ion-label>test</ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase=\"'monkey'\">\n      <ion-card>\n        <img style=\"height: 125px; object-fit: cover;\"\n          src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n        <ion-card-header>\n          <ion-card-title style=\"font-size: 20px; font-family: 'Roboto', sans-serif; font-weight: 800; \"> test\n          </ion-card-title>\n          <ion-card-subtitle style=\"font-size: 16px; font-family: 'Roboto', sans-serif; font-weight: 600;\">Budget\n            5,000 - 10,000฿</ion-card-subtitle>\n\n          <ion-col style=\"padding: 0px;\">\n            <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n          </ion-col>\n          <br><br>\n        </ion-card-header>\n        <ion-card-content>\n          <hr style=\"background: #D9D9D9;\">\n          <ion-col>\n            <ion-chip class=\"ion-margin-start\">\n              <ion-avatar>\n                <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\">\n              </ion-avatar>\n              <ion-label>test</ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase=\"'lion'\">\n      <ion-card>\n        <img style=\"height: 125px; object-fit: cover;\"\n          src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n        <ion-card-header>\n          <ion-card-title style=\"font-size: 20px; font-family: 'Roboto', sans-serif; font-weight: 800; \"> test\n          </ion-card-title>\n          <ion-card-subtitle style=\"font-size: 16px; font-family: 'Roboto', sans-serif; font-weight: 600;\">Budget\n            5,000 - 10,000฿</ion-card-subtitle>\n\n          <ion-col style=\"padding: 0px;\">\n            <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n          </ion-col>\n          <br><br>\n        </ion-card-header>\n        <ion-card-content>\n          <hr style=\"background: #D9D9D9;\">\n          <ion-col>\n            <ion-chip class=\"ion-margin-start\">\n              <ion-avatar>\n                <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\">\n              </ion-avatar>\n              <ion-label>test</ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase=\"'Tecnology'\">\n      <ion-card>\n        <img style=\"height: 125px; object-fit: cover;\"\n          src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n        <ion-card-header>\n          <ion-card-title style=\"font-size: 20px; font-family: 'Roboto', sans-serif; font-weight: 800; \"> test\n          </ion-card-title>\n          <ion-card-subtitle style=\"font-size: 16px; font-family: 'Roboto', sans-serif; font-weight: 600;\">Budget\n            5,000 - 10,000฿</ion-card-subtitle>\n\n          <ion-col style=\"padding: 0px;\">\n            <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n          </ion-col>\n          <br><br>\n        </ion-card-header>\n        <ion-card-content>\n          <hr style=\"background: #D9D9D9;\">\n          <ion-col>\n            <ion-chip class=\"ion-margin-start\">\n              <ion-avatar>\n                <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\">\n              </ion-avatar>\n              <ion-label>test</ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase=\"'Education'\">\n      <ion-card>\n        <img style=\"height: 125px; object-fit: cover;\"\n          src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n        <ion-card-header>\n          <ion-card-title style=\"font-size: 20px; font-family: 'Roboto', sans-serif; font-weight: 800; \"> test\n          </ion-card-title>\n          <ion-card-subtitle style=\"font-size: 16px; font-family: 'Roboto', sans-serif; font-weight: 600;\">Budget\n            5,000 - 10,000฿</ion-card-subtitle>\n\n          <ion-col style=\"padding: 0px;\">\n            <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n          </ion-col>\n          <br><br>\n        </ion-card-header>\n        <ion-card-content>\n          <hr style=\"background: #D9D9D9;\">\n          <ion-col>\n            <ion-chip class=\"ion-margin-start\">\n              <ion-avatar>\n                <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\">\n              </ion-avatar>\n              <ion-label>test</ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n    <div *ngSwitchCase=\"'photo'\">\n      <ion-card>\n        <img style=\"height: 125px; object-fit: cover;\"\n          src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n        <ion-card-header>\n          <ion-card-title style=\"font-size: 20px; font-family: 'Roboto', sans-serif; font-weight: 800; \"> test\n          </ion-card-title>\n          <ion-card-subtitle style=\"font-size: 16px; font-family: 'Roboto', sans-serif; font-weight: 600;\">Budget\n            5,000 - 10,000฿</ion-card-subtitle>\n\n          <ion-col style=\"padding: 0px;\">\n            <ion-icon name=\"pin\"></ion-icon><span>Siam Paragon</span>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"calendar\"></ion-icon> <span>12 November 2019</span>\n          </ion-col>\n          <br><br>\n        </ion-card-header>\n        <ion-card-content>\n          <hr style=\"background: #D9D9D9;\">\n          <ion-col>\n            <ion-chip class=\"ion-margin-start\">\n              <ion-avatar>\n                <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\">\n              </ion-avatar>\n              <ion-label>test</ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/mc/home/home-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/mc/home/home-routing.module.ts ***!
  \************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/mc/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/mc/home/home.module.ts":
/*!****************************************!*\
  !*** ./src/app/mc/home/home.module.ts ***!
  \****************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/mc/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/mc/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/mc/home/home.page.scss":
/*!****************************************!*\
  !*** ./src/app/mc/home/home.page.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n* {\n  font-family: \"Roboto\", sans-serif;\n}\nh1 {\n  margin: 0;\n  padding: 5px 0 5px 0;\n  font-size: 22px;\n  font-weight: 800 !important;\n}\nh2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600 !important;\n}\nh3 {\n  margin: 0;\n  padding: 18px 0 0 0;\n  font-size: 18px;\n  font-weight: 600 !important;\n}\nh4 {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600 !important;\n  float: left;\n}\n.line {\n  width: 100px;\n  background-color: #124AE5;\n  border: #124AE5 solid 2px !important;\n  margin: 10px 0 0 0;\n  border-radius: 20px;\n}\n.subtext {\n  font-size: 16px;\n  color: #86868F;\n}\n.container {\n  padding: 30px 20px 20px 20px;\n}\n.containers {\n  padding: 20px 20px;\n}\nion-segment-button {\n  --color: #86868F;\n  --color-activated: #ffffff;\n  --border-style:none;\n  --background-checked:#124AE5;\n  --padding-start:20px;\n  --padding-end:20px;\n  --background-hover:#ffffff;\n  --background-activated:#ffffff;\n  font-weight: 600;\n  --padding-bottom:5px;\n  --padding-top:5px;\n}\nion-item {\n  --border-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25lcy9FYXN5bWMvc3JjL2FwcC9tYy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9tYy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFTLDBFQUFBO0FBQ1Q7RUFDSSxpQ0FBQTtBQ0NKO0FERUE7RUFDSSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNDSjtBRENBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0VKO0FEQ0E7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNFSjtBREFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDR0o7QUREQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0lKO0FERkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0tKO0FESEE7RUFDSSw0QkFBQTtBQ01KO0FEQUE7RUFDSSxrQkFBQTtBQ0dKO0FEQUE7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDR0o7QURLQTtFQUNJLG9CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tYy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuKntcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmgxe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xufVxuaDJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbmgze1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxOHB4IDAgMCAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5oNHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmxpbmV7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjRBRTU7XG4gICAgYm9yZGVyOiMxMjRBRTUgc29saWQgMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uc3VidGV4dHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM4Njg2OEY7XG59XG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG4gICBcbn1cbi8vIGlvbi1jb250ZW50e1xuLy8gICAgIC0tYmFja2dyb3VuZDojRjlGOUY5O1xuLy8gfVxuLmNvbnRhaW5lcnN7XG4gICAgcGFkZGluZzogMjBweCAyMHB4IDtcbiAgIFxufVxuaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIC0tY29sb3I6ICM4Njg2OEY7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItc3R5bGU6bm9uZTtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDojMTI0QUU1O1xuICAgIC0tcGFkZGluZy1zdGFydDoyMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6MjBweDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6I2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOjVweDtcbiAgICAtLXBhZGRpbmctdG9wOjVweDtcblxufVxuLy8gaW9uLXRvb2xiYXJ7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiNGNkY2RjY7XG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbi8vIH1cblxuaW9uLWl0ZW17XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMThweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5saW5lIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI0QUU1O1xuICBib3JkZXI6ICMxMjRBRTUgc29saWQgMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnN1YnRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODY4NjhGO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNvbnRhaW5lcnMge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICM4Njg2OEY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWJvcmRlci1zdHlsZTpub25lO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDojMTI0QUU1O1xuICAtLXBhZGRpbmctc3RhcnQ6MjBweDtcbiAgLS1wYWRkaW5nLWVuZDoyMHB4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6I2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLXBhZGRpbmctYm90dG9tOjVweDtcbiAgLS1wYWRkaW5nLXRvcDo1cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/mc/home/home.page.ts":
/*!**************************************!*\
  !*** ./src/app/mc/home/home.page.ts ***!
  \**************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/provider */ "./src/app/providers/provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");







var HomePage = /** @class */ (function () {
    function HomePage(platform, router, Provider, storage, toastCtrl) {
        this.router = router;
        this.Provider = Provider;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.pet = "puppies";
        this.isAndroid = false;
        this.customers = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
        this.slidercard = {
            slidesPerView: 1.2,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            resistanceRatio: 0,
            spaceBetween: 0.1,
            loop: true
        };
        this.sliderConfig = {
            slidesPerView: 3,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            resistanceRatio: 0,
            spaceBetween: 0.1,
            loop: true
        };
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.email = _this.anggota.email;
            console.log(res);
        });
    };
    HomePage.prototype.loadCustomer = function () {
        throw new Error("Method not implemented.");
    };
    HomePage.prototype.ngOnInit = function () {
    };
    // slidesDidLoad(slides: IonSlides) {
    //   slides.startAutoplay();
    // }
    HomePage.prototype.move = function (slides) {
        console.log(slides);
        slides.slideNext(600, true);
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _providers_provider__WEBPACK_IMPORTED_MODULE_3__["Provider"] },
        { type: _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/mc/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/mc/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _providers_provider__WEBPACK_IMPORTED_MODULE_3__["Provider"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map