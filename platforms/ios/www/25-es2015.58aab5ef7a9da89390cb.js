(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"6SDM":function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class o{}var u=t("pMnS"),r=t("oBZk"),b=t("ZZ/e"),a=t("mrSG");class i{constructor(l,n,t,e){this.actionSheetController=l,this.router=n,this.storage=t,this.toastCtrl=e}ngOnInit(){}presentActionSheet(){this.actionSheet=this.actionSheetController.create({header:"Freaky Jolly",buttons:[{text:"edit",role:"destructive",handler:()=>{this.router.navigate(["tabs/mc/home"])}},{text:"Logout",icon:"logout",handler:()=>{this.storage.clear(),this.router.navigate(["/login"])}},{text:"Cancel",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]}).then(l=>{l.present()})}prosesLogout(){return a.b(this,void 0,void 0,(function*(){this.storage.clear(),this.router.navigate(["/login"]),(yield this.toastCtrl.create({message:"logout succesful",duration:3e3})).present()}))}}var s=t("iInd"),c=t("xgBC"),h=e.qb({encapsulation:0,styles:[[""]],data:{}});function k(l){return e.Ob(0,[(l()(),e.sb(0,0,null,null,6,"ion-header",[],null,null,null,r.pb,r.r)),e.rb(1,49152,null,0,b.B,[e.h,e.k,e.x],null,null),(l()(),e.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.Ub,r.W)),e.rb(3,49152,null,0,b.Cb,[e.h,e.k,e.x],null,null),(l()(),e.sb(4,0,null,0,2,"ion-title",[],null,null,null,r.Tb,r.V)),e.rb(5,49152,null,0,b.Ab,[e.h,e.k,e.x],null,null),(l()(),e.Mb(-1,0,["bookmark"])),(l()(),e.sb(7,0,null,null,4,"ion-content",[],null,null,null,r.kb,r.m)),e.rb(8,49152,null,0,b.u,[e.h,e.k,e.x],null,null),(l()(),e.sb(9,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.presentActionSheet()&&e),e}),r.bb,r.d)),e.rb(10,49152,null,0,b.k,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(l()(),e.Mb(-1,0,["Show Action Sheet"]))],(function(l,n){l(n,10,0,"block")}),null)}function p(l){return e.Ob(0,[(l()(),e.sb(0,0,null,null,1,"app-bookmark",[],null,null,null,k,h)),e.rb(1,114688,null,0,i,[b.a,s.m,c.b,b.Qb],null,null)],(function(l,n){l(n,1,0)}),null)}var d=e.ob("app-bookmark",i,p,{},{},[]),C=t("SVse"),g=t("s7LF");class m{}t.d(n,"BookmarkPageModuleNgFactory",(function(){return v}));var v=e.pb(o,[],(function(l){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[u.a,d]],[3,e.j],e.v]),e.Cb(4608,C.l,C.k,[e.s,[2,C.z]]),e.Cb(4608,g.j,g.j,[]),e.Cb(4608,b.b,b.b,[e.x,e.g]),e.Cb(4608,b.Hb,b.Hb,[b.b,e.j,e.p]),e.Cb(4608,b.Mb,b.Mb,[b.b,e.j,e.p]),e.Cb(1073742336,C.b,C.b,[]),e.Cb(1073742336,g.i,g.i,[]),e.Cb(1073742336,g.a,g.a,[]),e.Cb(1073742336,b.Eb,b.Eb,[]),e.Cb(1073742336,s.n,s.n,[[2,s.s],[2,s.m]]),e.Cb(1073742336,m,m,[]),e.Cb(1073742336,o,o,[]),e.Cb(1024,s.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);