(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container\">\n    <div class=\"logo\">\n      <img  src=\"src/assets/img/logo.png\" >\n    </div>\n    <h2 class=\"title\">Welcome to msily</h2>\n    <p>log in your existing account</p>\n\n   \n      <ion-input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\" ></ion-input>\n    \n      <ion-input type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" >\n      <!-- <ion-icon  size=\"small\"  name=\"lock\" slot=\"start\"></ion-icon> -->\n      </ion-input>\n   \n      <ion-button class=\"sigin\" block (click)=\"prosesLogin()\" >Sign In</ion-button>\n      <br>\n      <h6>Or connect using</h6>\n\n      <ion-buttons  slot=\"primary\">\n      <ion-button  class=\"sigin-f\" block style=\"background: #124AE5;\">Facebook</ion-button>\n      <ion-button class=\"sigin-g\" block style=\"background: #ffffff; border: 1px solid #6F6F6F;;\">Google</ion-button>\n    </ion-buttons>\n\n    <h5>New user? <a (click)=\"formRegister()\"> Create an account</a></h5>\n\n\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n* {\n  font-family: \"Roboto\", sans-serif;\n}\nh1 {\n  margin: 0;\n  padding: 5px 0 5px 0;\n  font-size: 22px;\n  font-weight: 800 !important;\n}\nh2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600 !important;\n}\nh3 {\n  margin: 0;\n  padding: 18px 0 0 0;\n  font-size: 18px;\n  font-weight: 600 !important;\n}\nh4 {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600 !important;\n  float: left;\n}\n.subtext {\n  font-size: 16px;\n  color: #86868F;\n}\n.container {\n  padding: 30px 20px 20px 20px;\n}\n/* You can add more media queries using \",\" */\n@media screen and (min-width: 640px) {\n  .container {\n    padding: 60px 80px 60px 80px;\n    max-width: 500px;\n    margin: 50px auto;\n    border-radius: 20px;\n  }\n}\n.containers {\n  padding: 20px 20px;\n}\n.logo {\n  margin-top: 40px;\n  text-align: center;\n}\nimg {\n  width: 90px;\n  height: 90px;\n}\nion-icon {\n  color: #C4C4C4;\n  padding: 20px;\n}\nion-input {\n  --padding-bottom: 15.5px;\n  --padding-top: 15.5px;\n  font-size: 16px;\n  border-color: #ffffff;\n  border-radius: 25px;\n  box-shadow: 1px 1px 4px 0px rgba(55, 84, 170, 0.28);\n  border-width: 0;\n  margin-top: 20px;\n  --padding-start:30px;\n}\nion-icon {\n  font-size: 16px;\n}\n.title {\n  margin-top: 10px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n}\np {\n  font-size: 14px;\n  color: #696969;\n  text-align: center;\n}\nh6 {\n  padding: 10px 0 20px 0;\n  font-size: 14px;\n  color: #696969;\n  text-align: center;\n}\na {\n  font-weight: 600;\n  color: #124AE5;\n}\nh5 {\n  padding: 30px 0 0 0;\n  font-size: 14px;\n  color: #696969;\n  text-align: center;\n}\n.sigin {\n  margin-top: 40px;\n  height: 47px;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 800;\n}\n.sigin-f {\n  height: 47px;\n  width: 48%;\n  font-size: 16px;\n  color: #ffffff;\n  border-radius: 25px;\n}\n.sigin-g {\n  height: 47px;\n  width: 48%;\n  font-size: 16px;\n  color: #6F6F6F;\n  border-radius: 25px;\n}\nion-button {\n  --border-radius:25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25lcy9FYXN5bWMvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUywwRUFBQTtBQUNUO0VBQ0ksaUNBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7QURDQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNFSjtBRENBO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDRUo7QURBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0dKO0FEREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0lKO0FERkE7RUFDSSw0QkFBQTtBQ0tKO0FERkEsNkNBQUE7QUFDQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBRUQsbUJBQUE7RUNJTDtBQUNGO0FEREE7RUFDSSxrQkFBQTtBQ0dKO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDR0o7QURBQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FDR0o7QUREQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNJSjtBREZBO0VBQ0ksZUFBQTtBQ0tKO0FEREE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSUo7QUREQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNJSjtBRERFO0VBQ0ksc0JBQUE7RUFDRixlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSUo7QURGQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0tKO0FESEU7RUFDRSxtQkFBQTtFQUNGLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNNRjtBREpFO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ09OO0FESkU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNPSjtBREpFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDT0o7QURKRTtFQUNFLG9CQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XG4qe1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuaDF7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG59XG5oMntcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuaDN7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE4cHggMCAwIDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cbmg0e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uc3VidGV4dHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM4Njg2OEY7XG59XG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG4gICBcbn1cbi8qIFlvdSBjYW4gYWRkIG1vcmUgbWVkaWEgcXVlcmllcyB1c2luZyBcIixcIiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpe1xuICAgIC5jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6IDYwcHggODBweCA2MHB4IDgwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgICAgICBcbiAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbn1cblxuLmNvbnRhaW5lcnN7XG4gICAgcGFkZGluZzogMjBweCAyMHB4IDtcbiAgXG4gICBcbn1cbi5sb2dve1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW1ne1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogOTBweDtcblxufVxuaW9uLWljb257XG4gICAgY29sb3I6ICNDNEM0QzQ7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbmlvbi1pbnB1dHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNS41cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTUuNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItY29sb3I6I2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOjI1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMHB4IHJnYmEoNTUsODQsMTcwLDAuMjgpO1xuICAgIGJvcmRlci13aWR0aDowIDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDozMHB4O1xufVxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG5cbi50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY5Njk2OTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBoNiB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY5Njk2OTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbmF7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzEyNEFFNTtcbn1cbiAgaDUge1xuICAgIHBhZGRpbmc6IDMwcHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2OTY5Njk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiAgLnNpZ2lue1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIGhlaWdodDogNDdweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5zaWdpbi1me1xuICAgIGhlaWdodDogNDdweDtcbiAgICB3aWR0aDogNDglO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOjI1cHhcbn1cblxuICAuc2lnaW4tZ3tcbiAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM2RjZGNkY7XG4gICAgYm9yZGVyLXJhZGl1czoyNXB4XG59XG5cbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJvcmRlci1yYWRpdXM6MjVweDtcbiAgfSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE4cHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG5oNCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uc3VidGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4Njg2OEY7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4vKiBZb3UgY2FuIGFkZCBtb3JlIG1lZGlhIHF1ZXJpZXMgdXNpbmcgXCIsXCIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDYwcHggODBweCA2MHB4IDgwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG59XG4uY29udGFpbmVycyB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICNDNEM0QzQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDE1LjVweDtcbiAgLS1wYWRkaW5nLXRvcDogMTUuNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMHB4IHJnYmEoNTUsIDg0LCAxNzAsIDAuMjgpO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1zdGFydDozMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY5Njk2OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNiB7XG4gIHBhZGRpbmc6IDEwcHggMCAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2OTY5Njk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMTI0QUU1O1xufVxuXG5oNSB7XG4gIHBhZGRpbmc6IDMwcHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2OTY5Njk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpZ2luIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc2lnaW4tZiB7XG4gIGhlaWdodDogNDdweDtcbiAgd2lkdGg6IDQ4JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnNpZ2luLWcge1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiA0OCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2RjZGNkY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6MjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/provider */ "./src/app/providers/provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm2015/ionic-storage.js");






let LoginPage = class LoginPage {
    constructor(router, Provider, storage, platform, toastCtrl) {
        this.router = router;
        this.Provider = Provider;
        this.storage = storage;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.email = "em@hotmail.com";
        this.password = "123456";
        this.status = "n";
    }
    ngOnInit() {
    }
    prosesLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.email != "" && this.password != "") {
                let body = {
                    email: this.email,
                    password: this.password,
                    status: this.status,
                    aksi: 'login'
                };
                this.Provider.postData(body, 'login.php').subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    var alertpesan = data.msg;
                    if (data.success) {
                        if (data.result['status'] == 'y') {
                            this.storage.set('session_storage', data.result);
                            this.router.navigate(['/tabs/mc/home']);
                            const toast = yield this.toastCtrl.create({
                                message: 'Login  user Succesfully.',
                                duration: 2000
                            });
                            toast.present();
                        }
                        else if (data.result['status'] == 'n') {
                            this.storage.set('session_storage', data.result);
                            this.router.navigate(['/tabbar/employer/homeem']);
                            const toast = yield this.toastCtrl.create({
                                message: 'Login N user Succesfully.',
                                duration: 2000
                            });
                            toast.present();
                        }
                        else if (data.result['status'] == '') {
                            this.storage.set('session_storage', data.result);
                            const toast = yield this.toastCtrl.create({
                                message: 'error',
                                duration: 3000
                            });
                            toast.present();
                        }
                        this.email = "";
                        this.password = "";
                        this.status = "";
                        console.log(data);
                    }
                    else {
                        const toast = yield this.toastCtrl.create({
                            message: alertpesan,
                            duration: 2000
                        });
                        toast.present();
                    }
                }));
            }
            else {
                const toast = yield this.toastCtrl.create({
                    message: 'Email or Password Invalid.',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
    formRegister() {
        this.router.navigate(['/register']);
    }
    myJob() {
        this.router.navigate(['/customer']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_provider__WEBPACK_IMPORTED_MODULE_3__["Provider"] },
    { type: _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _providers_provider__WEBPACK_IMPORTED_MODULE_3__["Provider"],
        _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map