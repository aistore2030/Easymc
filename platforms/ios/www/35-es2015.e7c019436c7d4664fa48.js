(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{qq66:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class u{}var o=e("pMnS"),r=e("oBZk"),i=e("ZZ/e"),s=e("s7LF"),a=e("mrSG"),g=e("h3kM");class d{constructor(n,l,e,t){this.router=n,this.Provider=l,this.storage=e,this.toastCtrl=t,this.email="",this.password="",this.status="",this.confirm_password=""}ngOnInit(){}prosesRegister(){return a.b(this,void 0,void 0,(function*(){""==this.email?(yield this.toastCtrl.create({message:"email is required",duration:3e3})).present():""==this.password?(yield this.toastCtrl.create({message:"Password is required",duration:3e3})).present():this.password!=this.confirm_password?(yield this.toastCtrl.create({message:'Password not Match!"',duration:3e3})).present():""==this.status?(yield this.toastCtrl.create({message:"status is required",duration:3e3})).present():this.Provider.postData({email:this.email,password:this.password,confirm_password:this.confirm_password,status:this.status,aksi:"register"},"login.php").subscribe(n=>a.b(this,void 0,void 0,(function*(){var l=n.msg;n.success?"y"==n.result.status?(this.storage.set("session_storage",n.result),this.router.navigate(["mc/createprofile"]),(yield this.toastCtrl.create({message:"Login user Succesfully.",duration:2e3})).present()):"n"==n.result.status&&(this.storage.set("session_storage",n.result),this.router.navigate(["/employer/profileem/editprofileemployer"]),(yield this.toastCtrl.create({message:"Login N user Succesfully.",duration:2e3})).present()):(yield this.toastCtrl.create({message:l,duration:3e3})).present()})))}))}formLogin(){this.router.navigate(["/login"])}}var b=e("iInd"),p=e("xgBC"),c=t.qb({encapsulation:0,styles:[["@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);*[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}h1[_ngcontent-%COMP%]{margin:0;padding:5px 0;font-size:22px;font-weight:800!important}h2[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:600!important}h3[_ngcontent-%COMP%]{margin:0;padding:18px 0 0;font-size:18px;font-weight:600!important}h4[_ngcontent-%COMP%]{padding:15px 0 0;font-size:16px;color:#696969}p[_ngcontent-%COMP%]{font-size:14px;color:#696969;text-align:center}h6[_ngcontent-%COMP%]{padding:10px 0 20px;font-size:14px;color:#696969;text-align:center}a[_ngcontent-%COMP%]{font-weight:600;color:#124ae5}h5[_ngcontent-%COMP%]{padding:15px 0 0;font-size:14px;color:#696969;text-align:center}.subtext[_ngcontent-%COMP%]{font-size:16px;color:#86868f}.container[_ngcontent-%COMP%]{padding:30px 20px 20px}.containers[_ngcontent-%COMP%]{padding:20px}ion-icon[_ngcontent-%COMP%]{color:#c4c4c4;padding:20px;font-size:16px}ion-input[_ngcontent-%COMP%]{--padding-bottom:15.5px;--padding-top:15.5px;font-size:16px;border-color:#fff;border-radius:25px;box-shadow:1px 1px 4px 0 rgba(55,84,170,.28);border-width:0;margin-top:20px;--padding-start:30px}.title[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:24px;font-weight:700}.sigup[_ngcontent-%COMP%]{margin-top:40px;height:47px;width:100%;font-size:16px;font-weight:800}.sigin-f[_ngcontent-%COMP%]{height:47px;width:48%;font-size:16px;color:#fff;border-radius:25px}.sigin-g[_ngcontent-%COMP%]{height:47px;width:48%;font-size:16px;color:#6f6f6f;border-radius:25px}ion-button[_ngcontent-%COMP%]{--border-radius:25px}.mark[_ngcontent-%COMP%]{color:#ed1d1d}ion-item[_ngcontent-%COMP%]{--inner-border-width:0px 0px 0px 0px;--padding-bottom:2px;--padding-top:2px;border-color:#fff;border-radius:25px;box-shadow:1px 1px 4px 0 rgba(55,84,170,.28);margin-top:20px;--padding-start:30px;color:#6f6f6f}ion-radio[_ngcontent-%COMP%]{--color:#999;--color-checked:#124AE5;--border-width:2px;--border-style:solid;width:20px;height:20px}@media screen and (min-width:640px){.container[_ngcontent-%COMP%]{padding:30px 80px 60px;max-width:600px;margin:50px auto;border-radius:20px}.title[_ngcontent-%COMP%]{margin-top:0;text-align:center;font-size:24px;font-weight:700}}"]],data:{}});function h(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,63,"ion-content",[],null,null,null,r.kb,r.m)),t.rb(1,49152,null,0,i.u,[t.h,t.k,t.x],null,null),(n()(),t.sb(2,0,null,0,61,"div",[["class","container"]],null,null,null,null,null)),(n()(),t.sb(3,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Let\u2019s Get Started!"])),(n()(),t.sb(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Create an account to Msily to get all features"])),(n()(),t.sb(7,0,null,null,6,"ion-input",[["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Eb(n,8)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Eb(n,8)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.email=e)&&u),u}),r.ub,r.w)),t.rb(8,16384,null,0,i.Pb,[t.k],null,null),t.Jb(1024,null,s.e,(function(n){return[n]}),[i.Pb]),t.rb(10,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,s.f,null,[s.h]),t.rb(12,16384,null,0,s.g,[[4,s.f]],null,null),t.rb(13,49152,null,0,i.G,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.sb(14,0,null,null,6,"ion-input",[["placeholder","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Eb(n,15)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Eb(n,15)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.password=e)&&u),u}),r.ub,r.w)),t.rb(15,16384,null,0,i.Pb,[t.k],null,null),t.Jb(1024,null,s.e,(function(n){return[n]}),[i.Pb]),t.rb(17,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,s.f,null,[s.h]),t.rb(19,16384,null,0,s.g,[[4,s.f]],null,null),t.rb(20,49152,null,0,i.G,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.sb(21,0,null,null,6,"ion-input",[["placeholder","Confirm Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Eb(n,22)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Eb(n,22)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.confirm_password=e)&&u),u}),r.ub,r.w)),t.rb(22,16384,null,0,i.Pb,[t.k],null,null),t.Jb(1024,null,s.e,(function(n){return[n]}),[i.Pb]),t.rb(24,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,s.f,null,[s.h]),t.rb(26,16384,null,0,s.g,[[4,s.f]],null,null),t.rb(27,49152,null,0,i.G,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.sb(28,0,null,null,28,"ion-radio-group",[["slot","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Eb(n,29)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Eb(n,29)._handleChangeEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.status=e)&&u),u}),r.Ab,r.D)),t.rb(29,16384,null,0,i.Ob,[t.k],null,null),t.Jb(1024,null,s.e,(function(n){return[n]}),[i.Ob]),t.rb(31,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,s.f,null,[s.h]),t.rb(33,16384,null,0,s.g,[[4,s.f]],null,null),t.rb(34,49152,null,0,i.bb,[t.h,t.k,t.x],null,null),(n()(),t.sb(35,0,null,0,3,"h4",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Choose your field "])),(n()(),t.sb(37,0,null,null,1,"span",[["class","mark"]],null,null,null,null,null)),(n()(),t.Mb(-1,null,[" * Choose only one"])),(n()(),t.sb(39,0,null,0,8,"ion-item",[],null,null,null,r.xb,r.x)),t.rb(40,49152,null,0,i.H,[t.h,t.k,t.x],null,null),(n()(),t.sb(41,0,null,0,2,"ion-label",[],null,null,null,r.yb,r.A)),t.rb(42,49152,null,0,i.N,[t.h,t.k,t.x],null,null),(n()(),t.Mb(-1,0,["MC/PR/PC/Pretty"])),(n()(),t.sb(44,0,null,0,3,"ion-radio",[["checked",""],["value","y"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Eb(n,47)._handleBlurEvent(e.target)&&u),"ionSelect"===l&&(u=!1!==t.Eb(n,47)._handleIonSelect(e.target)&&u),u}),r.Bb,r.C)),t.Jb(5120,null,s.e,(function(n){return[n]}),[i.Nb]),t.rb(46,49152,null,0,i.ab,[t.h,t.k,t.x],{checked:[0,"checked"],value:[1,"value"]},null),t.rb(47,16384,null,0,i.Nb,[t.k],null,null),(n()(),t.sb(48,0,null,0,8,"ion-item",[],null,null,null,r.xb,r.x)),t.rb(49,49152,null,0,i.H,[t.h,t.k,t.x],null,null),(n()(),t.sb(50,0,null,0,2,"ion-label",[],null,null,null,r.yb,r.A)),t.rb(51,49152,null,0,i.N,[t.h,t.k,t.x],null,null),(n()(),t.Mb(-1,0,["Employer"])),(n()(),t.sb(53,0,null,0,3,"ion-radio",[["value","n"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Eb(n,56)._handleBlurEvent(e.target)&&u),"ionSelect"===l&&(u=!1!==t.Eb(n,56)._handleIonSelect(e.target)&&u),u}),r.Bb,r.C)),t.Jb(5120,null,s.e,(function(n){return[n]}),[i.Nb]),t.rb(55,49152,null,0,i.ab,[t.h,t.k,t.x],{value:[0,"value"]},null),t.rb(56,16384,null,0,i.Nb,[t.k],null,null),(n()(),t.sb(57,0,null,null,2,"ion-button",[["block",""],["class","sigup"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.prosesRegister()&&t),t}),r.bb,r.d)),t.rb(58,49152,null,0,i.k,[t.h,t.k,t.x],null,null),(n()(),t.Mb(-1,0,["Create Account"])),(n()(),t.sb(60,0,null,null,3,"h5",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Already have an account? "])),(n()(),t.sb(62,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.formLogin()&&t),t}),null,null)),(n()(),t.Mb(-1,null,["Sign In."]))],(function(n,l){var e=l.component;n(l,10,0,e.email),n(l,13,0,"Email","email"),n(l,17,0,e.password),n(l,20,0,"password","password"),n(l,24,0,e.confirm_password),n(l,27,0,"Confirm Password","password"),n(l,31,0,e.status),n(l,46,0,"","y"),n(l,55,0,"n")}),(function(n,l){n(l,7,0,t.Eb(l,12).ngClassUntouched,t.Eb(l,12).ngClassTouched,t.Eb(l,12).ngClassPristine,t.Eb(l,12).ngClassDirty,t.Eb(l,12).ngClassValid,t.Eb(l,12).ngClassInvalid,t.Eb(l,12).ngClassPending),n(l,14,0,t.Eb(l,19).ngClassUntouched,t.Eb(l,19).ngClassTouched,t.Eb(l,19).ngClassPristine,t.Eb(l,19).ngClassDirty,t.Eb(l,19).ngClassValid,t.Eb(l,19).ngClassInvalid,t.Eb(l,19).ngClassPending),n(l,21,0,t.Eb(l,26).ngClassUntouched,t.Eb(l,26).ngClassTouched,t.Eb(l,26).ngClassPristine,t.Eb(l,26).ngClassDirty,t.Eb(l,26).ngClassValid,t.Eb(l,26).ngClassInvalid,t.Eb(l,26).ngClassPending),n(l,28,0,t.Eb(l,33).ngClassUntouched,t.Eb(l,33).ngClassTouched,t.Eb(l,33).ngClassPristine,t.Eb(l,33).ngClassDirty,t.Eb(l,33).ngClassValid,t.Eb(l,33).ngClassInvalid,t.Eb(l,33).ngClassPending)}))}function C(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,1,"app-register",[],null,null,null,h,c)),t.rb(1,114688,null,0,d,[b.m,g.a,p.b,i.Qb],null,null)],(function(n,l){n(l,1,0)}),null)}var f=t.ob("app-register",d,C,{},{},[]),x=e("SVse");class m{}e.d(l,"RegisterPageModuleNgFactory",(function(){return E}));var E=t.pb(u,[],(function(n){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[o.a,f]],[3,t.j],t.v]),t.Cb(4608,x.l,x.k,[t.s,[2,x.z]]),t.Cb(4608,s.j,s.j,[]),t.Cb(4608,i.b,i.b,[t.x,t.g]),t.Cb(4608,i.Hb,i.Hb,[i.b,t.j,t.p]),t.Cb(4608,i.Mb,i.Mb,[i.b,t.j,t.p]),t.Cb(1073742336,x.b,x.b,[]),t.Cb(1073742336,s.i,s.i,[]),t.Cb(1073742336,s.a,s.a,[]),t.Cb(1073742336,i.Eb,i.Eb,[]),t.Cb(1073742336,b.n,b.n,[[2,b.s],[2,b.m]]),t.Cb(1073742336,m,m,[]),t.Cb(1073742336,u,u,[]),t.Cb(1024,b.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);