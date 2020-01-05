(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container\">\n    <h2 class=\"title\">Let’s Get Started!</h2>\n    <p>Create an account to Msily to get all features</p>\n\n    <!-- <ion-input type=\"text\" placeholder=\"Username\"></ion-input> -->\n    <ion-input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\"></ion-input>\n    \n    <ion-input type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\"  > </ion-input>\n    <ion-input type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirm_password\"  > </ion-input>\n\n    <ion-radio-group slot=\"primary\" [(ngModel)]=\"status\">\n\n\n      <h4>Choose your field <span class=\"mark\"> * Choose only one</span></h4>\n\n      <ion-item>\n        <ion-label>MC/PR/PC/Pretty</ion-label>\n        <ion-radio value=\"y\" checked ></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Employer</ion-label>\n        <ion-radio value=\"n\" ></ion-radio>\n      </ion-item>\n\n    </ion-radio-group>\n\n    <ion-button class=\"sigup\" block (click)=\"prosesRegister()\" >Create Account</ion-button>\n\n\n    <h5>Already have an account? <a (click)=\"formLogin()\">Sign In.</a></h5>\n\n    <!-- <ion-buttons  slot=\"primary\">\n      <ion-button  class=\"sigin-f\" block style=\"background: #124AE5;\">Facebook</ion-button>\n      <ion-button class=\"sigin-g\" block style=\"background: #ffffff; border: 1px solid #6F6F6F;;\">Google</ion-button>\n    </ion-buttons> -->\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n* {\n  font-family: \"Roboto\", sans-serif;\n}\nh1 {\n  margin: 0;\n  padding: 5px 0 5px 0;\n  font-size: 22px;\n  font-weight: 800 !important;\n}\nh2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600 !important;\n}\nh3 {\n  margin: 0;\n  padding: 18px 0 0 0;\n  font-size: 18px;\n  font-weight: 600 !important;\n}\nh4 {\n  padding: 15px 0 0 0;\n  font-size: 16px;\n  color: #696969;\n}\np {\n  font-size: 14px;\n  color: #696969;\n  text-align: center;\n}\nh6 {\n  padding: 10px 0 20px 0;\n  font-size: 14px;\n  color: #696969;\n  text-align: center;\n}\na {\n  font-weight: 600;\n  color: #124AE5;\n}\nh5 {\n  padding: 15px 0 0 0;\n  font-size: 14px;\n  color: #696969;\n  text-align: center;\n}\n.subtext {\n  font-size: 16px;\n  color: #86868F;\n}\n.container {\n  padding: 30px 20px 20px 20px;\n}\n.containers {\n  padding: 20px 20px;\n}\nion-icon {\n  color: #C4C4C4;\n  padding: 20px;\n}\nion-input {\n  --padding-bottom: 15.5px;\n  --padding-top: 15.5px;\n  font-size: 16px;\n  border-color: #ffffff;\n  border-radius: 25px;\n  box-shadow: 1px 1px 4px 0px rgba(55, 84, 170, 0.28);\n  border-width: 0;\n  margin-top: 20px;\n  --padding-start:30px;\n}\nion-icon {\n  font-size: 16px;\n}\n.title {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n}\n.sigup {\n  margin-top: 40px;\n  height: 47px;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 800;\n}\n.sigin-f {\n  height: 47px;\n  width: 48%;\n  font-size: 16px;\n  color: #ffffff;\n  border-radius: 25px;\n}\n.sigin-g {\n  height: 47px;\n  width: 48%;\n  font-size: 16px;\n  color: #6F6F6F;\n  border-radius: 25px;\n}\nion-button {\n  --border-radius:25px;\n}\n.mark {\n  color: #ED1D1D;\n}\nion-item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --padding-bottom: 2px;\n  --padding-top: 2px;\n  border-color: #ffffff;\n  border-radius: 25px;\n  box-shadow: 1px 1px 4px 0px rgba(55, 84, 170, 0.28);\n  margin-top: 20px;\n  --padding-start:30px;\n  color: #6F6F6F;\n}\nion-radio {\n  --color: #999;\n  --color-checked: #124AE5;\n  --border-width: 2px;\n  --border-style: solid;\n  width: 20px;\n  height: 20px;\n}\n/* You can add more media queries using \",\" */\n@media screen and (min-width: 640px) {\n  .container {\n    padding: 30px 80px 60px 80px;\n    max-width: 600px;\n    margin: 50px auto;\n    border-radius: 20px;\n  }\n\n  .title {\n    margin-top: 0px;\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25lcy9FYXN5bWMvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUywwRUFBQTtBQUNUO0VBQ0ksaUNBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7QURDQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNFSjtBRENBO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDRUo7QURBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHSjtBREFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0dKO0FEQUU7RUFDSSxzQkFBQTtFQUNGLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNHSjtBRERBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDSUo7QURGRTtFQUNFLG1CQUFBO0VBQ0YsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0tGO0FESEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ01KO0FESkE7RUFDSSw0QkFBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtBQ09KO0FESEE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ01KO0FESkE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDT0o7QURMQTtFQUNJLGVBQUE7QUNRSjtBREpBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ09KO0FESkU7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDT047QURKRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ09KO0FESkU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNPSjtBREpFO0VBQ0Usb0JBQUE7QUNPSjtBRExDO0VBQ0ksY0FBQTtBQ1FMO0FETkM7RUFDRyxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ1NKO0FESEM7RUFDRyxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNNSjtBREhDLDZDQUFBO0FBQ0Q7RUFDSTtJQUNJLDRCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUVELG1CQUFBO0VDS0w7O0VESEU7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNNTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuKntcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmgxe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xufVxuaDJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbmgze1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxOHB4IDAgMCAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5oNHtcbiAgICBwYWRkaW5nOiAxNXB4IDAgMCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzY5Njk2OTtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjk2OTY5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGg2IHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMCAyMHB4IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjk2OTY5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMTI0QUU1O1xufVxuICBoNSB7XG4gICAgcGFkZGluZzogMTVweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY5Njk2OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN1YnRleHR7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjODY4NjhGO1xufVxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xuICAgXG59XG4uY29udGFpbmVyc3tcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggO1xuIFxufVxuXG5pb24taWNvbntcbiAgICBjb2xvcjogI0M0QzRDNDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuaW9uLWlucHV0e1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE1LjVweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxNS41cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1jb2xvcjojZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6MjVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAwcHggcmdiYSg1NSw4NCwxNzAsMC4yOCk7XG4gICAgYm9yZGVyLXdpZHRoOjAgO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OjMwcHg7XG59XG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuc2lndXB7XG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0N3B4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICB9XG5cbiAgLnNpZ2luLWZ7XG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIHdpZHRoOiA0OCU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6MjVweFxufVxuXG4gIC5zaWdpbi1ne1xuICAgIGhlaWdodDogNDdweDtcbiAgICB3aWR0aDogNDglO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzZGNkY2RjtcbiAgICBib3JkZXItcmFkaXVzOjI1cHhcbn1cblxuICBpb24tYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1czoyNXB4O1xuICB9XG4gLm1hcmt7XG4gICAgIGNvbG9yOiNFRDFEMUQ7XG4gfVxuIGlvbi1pdGVte1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDJweDtcbiAgICBib3JkZXItY29sb3I6I2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOjI1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMHB4IHJnYmEoNTUsODQsMTcwLDAuMjgpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OjMwcHg7XG4gICAgY29sb3I6IzZGNkY2RjtcblxuXG4gIFxuIH1cblxuIGlvbi1yYWRpb3tcbiAgICAtLWNvbG9yOiAjOTk5O1xuICAgIC0tY29sb3ItY2hlY2tlZDogIzEyNEFFNTtcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gfVxuXG4gLyogWW91IGNhbiBhZGQgbW9yZSBtZWRpYSBxdWVyaWVzIHVzaW5nIFwiLFwiICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCl7XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzogMzBweCA4MHB4IDYwcHggODBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICAgIFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMThweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbmg0IHtcbiAgcGFkZGluZzogMTVweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzY5Njk2OTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2OTY5Njk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDYge1xuICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjk2OTY5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzEyNEFFNTtcbn1cblxuaDUge1xuICBwYWRkaW5nOiAxNXB4IDAgMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjk2OTY5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWJ0ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzg2ODY4Rjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jb250YWluZXJzIHtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjQzRDNEM0O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5pb24taW5wdXQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxNS41cHg7XG4gIC0tcGFkZGluZy10b3A6IDE1LjVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDBweCByZ2JhKDU1LCA4NCwgMTcwLCAwLjI4KTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6MzBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZ3VwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc2lnaW4tZiB7XG4gIGhlaWdodDogNDdweDtcbiAgd2lkdGg6IDQ4JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnNpZ2luLWcge1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiA0OCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2RjZGNkY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6MjVweDtcbn1cblxuLm1hcmsge1xuICBjb2xvcjogI0VEMUQxRDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAycHg7XG4gIC0tcGFkZGluZy10b3A6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAwcHggcmdiYSg1NSwgODQsIDE3MCwgMC4yOCk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1zdGFydDozMHB4O1xuICBjb2xvcjogIzZGNkY2Rjtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvcjogIzk5OTtcbiAgLS1jb2xvci1jaGVja2VkOiAjMTI0QUU1O1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi8qIFlvdSBjYW4gYWRkIG1vcmUgbWVkaWEgcXVlcmllcyB1c2luZyBcIixcIiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA4MHB4IDYwcHggODBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cblxuICAudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/provider */ "./src/app/providers/provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm2015/ionic-storage.js");






let RegisterPage = class RegisterPage {
    constructor(router, Provider, storage, toastCtrl) {
        this.router = router;
        this.Provider = Provider;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.email = "";
        this.password = "";
        this.status = "";
        this.confirm_password = "";
    }
    ngOnInit() {
    }
    prosesRegister() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // validation done
            if (this.email == "") {
                const toast = yield this.toastCtrl.create({
                    message: 'email is required',
                    duration: 3000
                });
                toast.present();
            }
            else if (this.password == "") {
                const toast = yield this.toastCtrl.create({
                    message: 'Password is required',
                    duration: 3000
                });
                toast.present();
            }
            else if (this.password != this.confirm_password) {
                const toast = yield this.toastCtrl.create({
                    message: 'Password not Match!"',
                    duration: 3000
                });
                toast.present();
            }
            else if (this.status == "") {
                const toast = yield this.toastCtrl.create({
                    message: 'status is required',
                    duration: 3000
                });
                toast.present();
            }
            else {
                let body = {
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirm_password,
                    status: this.status,
                    aksi: 'register'
                };
                this.Provider.postData(body, 'login.php').subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    var alertpesan = data.msg;
                    if (data.success) {
                        this.router.navigate(['/login']);
                        const toast = yield this.toastCtrl.create({
                            message: 'Register succesful',
                            duration: 3000
                        });
                        toast.present();
                    }
                    else {
                        const toast = yield this.toastCtrl.create({
                            message: alertpesan,
                            duration: 3000
                        });
                        toast.present();
                    }
                }));
            }
        });
    }
    formLogin() {
        this.router.navigate(['/login']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_provider__WEBPACK_IMPORTED_MODULE_3__["Provider"] },
    { type: _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _providers_provider__WEBPACK_IMPORTED_MODULE_3__["Provider"],
        _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map