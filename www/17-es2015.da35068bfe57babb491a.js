(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"S/gD":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),a=u("SVse"),s=u("h3kM");class b{constructor(l,n,u,t,e){this.router=l,this.Provider=n,this.storage=u,this.toastCtrl=t,this.actRoute=e,this.customers=[],this.limit=13,this.start=0}ngOnInit(){}ionViewWillEnter(){this.storage.get("session_storage").then(l=>{this.anggota=l,this.email=this.anggota.email,console.log(l)}),this.customers=[],this.start=0,this.loadCustomer()}doRefresh(l){setTimeout(()=>{this.ionViewWillEnter(),l.target.complete()},500)}loadData(l){this.start+=this.limit,setTimeout(()=>{this.loadCustomer().then(()=>{l.target.complete()})},500)}loadCustomer(){return new Promise(l=>{this.Provider.postData({aksi:"getdata",limit:this.limit,start:this.start},"showprofile_employer.php").subscribe(n=>{for(let l of n.result)this.customers.push(l);l(!0)})})}}var p=u("iInd"),c=u("xgBC"),g=t.ob({encapsulation:0,styles:[["@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);*[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}h1[_ngcontent-%COMP%]{margin:0;padding:5px 0;font-size:22px;font-weight:800!important}h2[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:600!important}h3[_ngcontent-%COMP%]{margin:0;padding:18px 0 0;font-size:18px;font-weight:600!important}h4[_ngcontent-%COMP%]{margin:0;padding:0;font-size:16px;font-weight:600!important;float:left}.line[_ngcontent-%COMP%]{width:100px;background-color:#124ae5;border:2px solid #124ae5!important;margin:10px 0 0;border-radius:20px}.subtext[_ngcontent-%COMP%]{font-size:16px;color:#86868f}.container[_ngcontent-%COMP%]{padding:30px 20px 20px}.containers[_ngcontent-%COMP%]{padding:20px}ion-grid[_ngcontent-%COMP%]{--ion-grid-width:163px}.sc-ion-card-ios-h[_ngcontent-%COMP%]{margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px}ion-card-content[_ngcontent-%COMP%], ion-card-header[_ngcontent-%COMP%]{padding:10px}p[_ngcontent-%COMP%]{margin:0}h5[_ngcontent-%COMP%]{font-size:14px;font-weight:800;color:#232323;margin:0}span[_ngcontent-%COMP%]{font-size:12px}ion-col[_ngcontent-%COMP%]{min-width:163px;padding:0 2px;margin-top:-10px}"]],data:{}});function h(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,30,"ion-col",[["col-12",""]],null,null,null,i.W,i.l)),t.pb(1,49152,null,0,r.s,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,28,"ion-card",[],null,null,null,i.U,i.f)),t.pb(3,49152,null,0,r.l,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,0,"img",[["src","https://cache.gmo2.sistacafe.com/images/uploads/summary/image/61318/246c161a906fe739f7ccaec86cfba922.jpg"],["style"," object-fit: cover;height: 143px;"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,0,21,"ion-card-header",[],null,null,null,i.R,i.h)),t.pb(6,49152,null,0,r.n,[t.h,t.k,t.x],null,null),(l()(),t.qb(7,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),t.Gb(8,null,[""," ",""])),(l()(),t.qb(9,0,null,0,10,"div",[["style","font-size: 12px; color: gold; padding: 0"]],null,null,null,null,null)),(l()(),t.qb(10,0,null,null,1,"ion-icon",[["name","star"]],null,null,null,i.cb,i.r)),t.pb(11,49152,null,0,r.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(12,0,null,null,1,"ion-icon",[["name","star"]],null,null,null,i.cb,i.r)),t.pb(13,49152,null,0,r.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(14,0,null,null,1,"ion-icon",[["name","star"]],null,null,null,i.cb,i.r)),t.pb(15,49152,null,0,r.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(16,0,null,null,1,"ion-icon",[["name","star"]],null,null,null,i.cb,i.r)),t.pb(17,49152,null,0,r.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(18,0,null,null,1,"ion-icon",[["name","star"]],null,null,null,i.cb,i.r)),t.pb(19,49152,null,0,r.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(20,0,null,0,1,"p",[["style","font-size: 12; color:#86868F;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Bangkok, Thailand"])),(l()(),t.qb(22,0,null,0,1,"span",[["style","font-size: 12; color:#86868F;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Gender : Male"])),(l()(),t.qb(24,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.qb(25,0,null,0,1,"span",[["style","font-size: 12; color:#86868F;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Age : 24 "])),(l()(),t.qb(27,0,null,0,3,"ion-card-content",[],null,null,null,i.Q,i.g)),t.pb(28,49152,null,0,r.m,[t.h,t.k,t.x],null,null),(l()(),t.qb(29,0,null,0,1,"p",[["style"," margin:0px; font-weight: 800;"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["5,xxx - 1x,xxx \u0e3f"]))],(function(l,n){l(n,11,0,"star"),l(n,13,0,"star"),l(n,15,0,"star"),l(n,17,0,"star"),l(n,19,0,"star")}),(function(l,n){l(n,8,0,n.context.$implicit.fname,n.context.$implicit.lname)}))}function m(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,12,"ion-header",[],null,null,null,i.bb,i.q)),t.pb(1,49152,null,0,r.A,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,10,"ion-toolbar",[],null,null,null,i.vb,i.K)),t.pb(3,49152,null,0,r.Bb,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,2,"ion-title",[],null,null,null,i.ub,i.J)),t.pb(5,49152,null,0,r.zb,[t.h,t.k,t.x],null,null),(l()(),t.Gb(-1,0,["Home"])),(l()(),t.qb(7,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,i.P,i.e)),t.pb(8,49152,null,0,r.k,[t.h,t.k,t.x],null,null),(l()(),t.qb(9,0,null,0,3,"ion-button",[],null,null,null,i.O,i.d)),t.pb(10,49152,null,0,r.j,[t.h,t.k,t.x],null,null),(l()(),t.qb(11,0,null,0,1,"ion-icon",[["name","calendar"],["style","color: black;"]],null,null,null,i.cb,i.r)),t.pb(12,49152,null,0,r.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(13,0,null,null,23,"ion-content",[],null,null,null,i.X,i.m)),t.pb(14,49152,null,0,r.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(15,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var t=!0;return"ionRefresh"===n&&(t=!1!==l.component.doRefresh(u)&&t),t}),i.lb,i.z)),t.pb(16,49152,null,0,r.cb,[t.h,t.k,t.x],null,null),(l()(),t.qb(17,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Pull to refresh"],["refreshingSpinner","circles"],["refreshingText","Refreshing..."]],null,null,null,i.kb,i.A)),t.pb(18,49152,null,0,r.db,[t.h,t.k,t.x],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(l()(),t.qb(19,0,null,0,7,"div",[["class","containers"]],null,null,null,null,null)),(l()(),t.qb(20,0,null,null,1,"span",[["class","subtext"]],null,null,null,null,null)),(l()(),t.Gb(21,null,["Hi ","!"])),(l()(),t.qb(22,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Find your MC"])),(l()(),t.qb(24,0,null,null,1,"span",[["class","subtext"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Don't miss the opportunity to find an MC."])),(l()(),t.qb(26,0,null,null,0,"hr",[["class","line"]],null,null,null,null,null)),(l()(),t.qb(27,0,null,0,5,"ion-grid",[],null,null,null,i.ab,i.p)),t.pb(28,49152,null,0,r.z,[t.h,t.k,t.x],null,null),(l()(),t.qb(29,0,null,0,3,"ion-row",[],null,null,null,i.mb,i.B)),t.pb(30,49152,null,0,r.ib,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,h)),t.pb(32,278528,null,0,a.h,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(33,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadData(u)&&t),t}),i.eb,i.s)),t.pb(34,49152,null,0,r.D,[t.h,t.k,t.x],null,null),(l()(),t.qb(35,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,i.db,i.t)),t.pb(36,49152,null,0,r.E,[t.h,t.k,t.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var u=n.component;l(n,12,0,"calendar"),l(n,18,0,"arrow-dropdown","Pull to refresh","circles","Refreshing..."),l(n,32,0,u.customers),l(n,36,0,"bubbles","Loading more data...")}),(function(l,n){l(n,21,0,n.component.email)}))}function d(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,1,"app-homeem",[],null,null,null,m,g)),t.pb(1,114688,null,0,b,[p.m,s.a,c.b,r.Mb,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=t.mb("app-homeem",b,d,{},{},[]),x=u("s7LF");class q{}u.d(n,"HomeemPageModuleNgFactory",(function(){return k}));var k=t.nb(e,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[o.a,f]],[3,t.j],t.v]),t.Ab(4608,a.j,a.i,[t.s,[2,a.r]]),t.Ab(4608,x.g,x.g,[]),t.Ab(4608,r.b,r.b,[t.x,t.g]),t.Ab(4608,r.Fb,r.Fb,[r.b,t.j,t.p]),t.Ab(4608,r.Ib,r.Ib,[r.b,t.j,t.p]),t.Ab(1073742336,a.b,a.b,[]),t.Ab(1073742336,x.f,x.f,[]),t.Ab(1073742336,x.a,x.a,[]),t.Ab(1073742336,r.Db,r.Db,[]),t.Ab(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),t.Ab(1073742336,q,q,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,p.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);