(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{GJ8m:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),u=function(){return function(){}}(),i=l("pMnS"),r=l("oBZk"),o=l("ZZ/e"),s=l("Ip0R"),c=function(){function n(){}return n.prototype.transform=function(n,t){return 0===t.length?n:(t=t.toLocaleLowerCase(),n.filter((function(n){return n.name.toLocaleLowerCase().includes(t)||n.email.toLocaleLowerCase().includes(t)})))},n}(),a=l("gIcY"),h=l("mrSG"),b=function(n){function t(t,l){var e=n.call(this,t,l)||this;return e.scheduler=t,e.work=l,e.pending=!1,e}return h.d(t,n),t.prototype.schedule=function(n,t){if(void 0===t&&(t=0),this.closed)return this;this.state=n;var l=this.id,e=this.scheduler;return null!=l&&(this.id=this.recycleAsyncId(e,l,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(e,this.id,t),this},t.prototype.requestAsyncId=function(n,t,l){return void 0===l&&(l=0),setInterval(n.flush.bind(n,this),l)},t.prototype.recycleAsyncId=function(n,t,l){if(void 0===l&&(l=0),null!==l&&this.delay===l&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var l=this._execute(n,t);if(l)return l;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(n,t){var l=!1,e=void 0;try{this.work(n)}catch(u){l=!0,e=!!u&&u||new Error(u)}if(l)return this.unsubscribe(),e},t.prototype._unsubscribe=function(){var n=this.id,t=this.scheduler,l=t.actions,e=l.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==e&&l.splice(e,1),null!=n&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null},t}(function(n){function t(t,l){return n.call(this)||this}return h.d(t,n),t.prototype.schedule=function(n,t){return void 0===t&&(t=0),this},t}(l("pugT").a)),d=function(){function n(t,l){void 0===l&&(l=n.now),this.SchedulerAction=t,this.now=l}return n.prototype.schedule=function(n,t,l){return void 0===t&&(t=0),new this.SchedulerAction(this,n).schedule(l,t)},n.now=function(){return Date.now()},n}(),f=new(function(n){function t(l,e){void 0===e&&(e=d.now);var u=n.call(this,l,(function(){return t.delegate&&t.delegate!==u?t.delegate.now():e()}))||this;return u.actions=[],u.active=!1,u.scheduled=void 0,u}return h.d(t,n),t.prototype.schedule=function(l,e,u){return void 0===e&&(e=0),t.delegate&&t.delegate!==this?t.delegate.schedule(l,e,u):n.prototype.schedule.call(this,l,e,u)},t.prototype.flush=function(n){var t=this.actions;if(this.active)t.push(n);else{var l;this.active=!0;do{if(l=n.execute(n.state,n.delay))break}while(n=t.shift());if(this.active=!1,l){for(;n=t.shift();)n.unsubscribe();throw l}}},t}(d))(b),p=l("FFOo"),v=l("G5J1"),y=l("F/XL"),w=l("6blF"),g=function(){function n(n,t,l){this.kind=n,this.value=t,this.error=l,this.hasValue="N"===n}return n.prototype.observe=function(n){switch(this.kind){case"N":return n.next&&n.next(this.value);case"E":return n.error&&n.error(this.error);case"C":return n.complete&&n.complete()}},n.prototype.do=function(n,t,l){switch(this.kind){case"N":return n&&n(this.value);case"E":return t&&t(this.error);case"C":return l&&l()}},n.prototype.accept=function(n,t,l){return n&&"function"==typeof n.next?this.observe(n):this.do(n,t,l)},n.prototype.toObservable=function(){var n;switch(this.kind){case"N":return Object(y.a)(this.value);case"E":return n=this.error,new w.a((function(t){return t.error(n)}));case"C":return Object(v.b)()}throw new Error("unexpected notification kind value")},n.createNext=function(t){return void 0!==t?new n("N",t):n.undefinedValueNotification},n.createError=function(t){return new n("E",void 0,t)},n.createComplete=function(){return n.completeNotification},n.completeNotification=new n("C"),n.undefinedValueNotification=new n("N",void 0),n}(),k=function(){function n(n,t){this.delay=n,this.scheduler=t}return n.prototype.call=function(n,t){return t.subscribe(new m(n,this.delay,this.scheduler))},n}(),m=function(n){function t(t,l,e){var u=n.call(this,t)||this;return u.delay=l,u.scheduler=e,u.queue=[],u.active=!1,u.errored=!1,u}return h.d(t,n),t.dispatch=function(n){for(var t=n.source,l=t.queue,e=n.scheduler,u=n.destination;l.length>0&&l[0].time-e.now()<=0;)l.shift().notification.observe(u);if(l.length>0){var i=Math.max(0,l[0].time-e.now());this.schedule(n,i)}else this.unsubscribe(),t.active=!1},t.prototype._schedule=function(n){this.active=!0,this.destination.add(n.schedule(t.dispatch,this.delay,{source:this,destination:this.destination,scheduler:n}))},t.prototype.scheduleNotification=function(n){if(!0!==this.errored){var t=this.scheduler,l=new N(t.now()+this.delay,n);this.queue.push(l),!1===this.active&&this._schedule(t)}},t.prototype._next=function(n){this.scheduleNotification(g.createNext(n))},t.prototype._error=function(n){this.errored=!0,this.queue=[],this.destination.error(n),this.unsubscribe()},t.prototype._complete=function(){this.scheduleNotification(g.createComplete()),this.unsubscribe()},t}(p.a),N=function(){return function(n,t){this.time=n,this.notification=t}}(),C=l("t/Na"),x=function(){function n(n){this.http=n}return n.prototype.getUsuarios=function(){return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(function(n,t){void 0===t&&(t=f);var l=2500 instanceof Date&&!isNaN(2500)?2500-t.now():Math.abs(2500);return function(n){return n.lift(new k(l,t))}}())},n.ngInjectableDef=e.Qb({factory:function(){return new n(e.Rb(C.c))},token:n,providedIn:"root"}),n}(),I=function(){function n(n){var t=this;this.UsuariosService=n,this.usuarios=[],this.textoBuscar="",this.UsuariosService.getUsuarios().subscribe((function(n){return t.usuarios=n}))}return n.prototype.buscarUsuario=function(n){this.textoBuscar=n.target.value},n}(),z=e.qb({encapsulation:0,styles:[[""]],data:{}});function E(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,7,"ion-item",[],null,null,null,r.pb,r.x)),e.rb(1,49152,null,0,o.H,[e.h,e.k,e.z],null,null),(n()(),e.sb(2,0,null,0,5,"ion-label",[],null,null,null,r.qb,r.y)),e.rb(3,49152,null,0,o.N,[e.h,e.k,e.z],null,null),(n()(),e.sb(4,0,null,0,1,"ion-skeleton-text",[["width","40%"]],null,null,null,r.Ab,r.I)),e.rb(5,49152,null,0,o.pb,[e.h,e.k,e.z],{width:[0,"width"]},null),(n()(),e.sb(6,0,null,0,1,"ion-skeleton-text",[["width","80%"]],null,null,null,r.Ab,r.I)),e.rb(7,49152,null,0,o.pb,[e.h,e.k,e.z],{width:[0,"width"]},null)],(function(n,t){n(t,5,0,"40%"),n(t,7,0,"80%")}),null)}function B(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,4,"ion-list",[],null,null,null,r.rb,r.z)),e.rb(1,49152,null,0,o.O,[e.h,e.k,e.z],null,null),(n()(),e.hb(16777216,null,0,2,null,E)),e.rb(3,278528,null,0,s.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null),e.Fb(4,10)],(function(n,t){var l=n(t,4,0,1,1,1,1,1,1,1,1,1,1);n(t,3,0,l)}),null)}function q(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,7,"ion-item",[],null,null,null,r.pb,r.x)),e.rb(1,49152,null,0,o.H,[e.h,e.k,e.z],null,null),(n()(),e.sb(2,0,null,0,5,"ion-label",[],null,null,null,r.qb,r.y)),e.rb(3,49152,null,0,o.N,[e.h,e.k,e.z],null,null),(n()(),e.sb(4,0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),e.Lb(5,null,[" ",""])),(n()(),e.sb(6,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),e.Lb(7,null,[" "," "]))],null,(function(n,t){n(t,5,0,t.context.$implicit.name),n(t,7,0,t.context.$implicit.email)}))}function A(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,4,"ion-list",[],null,null,null,r.rb,r.z)),e.rb(1,49152,null,0,o.O,[e.h,e.k,e.z],null,null),(n()(),e.hb(16777216,null,0,2,null,q)),e.rb(3,278528,null,0,s.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null),e.Hb(4,2)],(function(n,t){var l=t.component,u=e.Mb(t,3,0,n(t,4,0,e.Eb(t.parent,0),l.usuarios,l.textoBuscar));n(t,3,0,u)}),null)}function F(n){return e.Nb(0,[e.Gb(0,c,[]),(n()(),e.sb(1,0,null,null,12,"ion-header",[["no-border",""]],null,null,null,r.jb,r.r)),e.rb(2,49152,null,0,o.B,[e.h,e.k,e.z],null,null),(n()(),e.sb(3,0,null,0,4,"ion-toolbar",[["color","tertiary"]],null,null,null,r.Jb,r.R)),e.rb(4,49152,null,0,o.Cb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.sb(5,0,null,0,2,"ion-title",[],null,null,null,r.Ib,r.Q)),e.rb(6,49152,null,0,o.Ab,[e.h,e.k,e.z],null,null),(n()(),e.Lb(-1,0,[" Usuarios "])),(n()(),e.sb(8,0,null,0,5,"ion-toolbar",[["color","tertiary"]],null,null,null,r.Jb,r.R)),e.rb(9,49152,null,0,o.Cb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.sb(10,0,null,0,3,"ion-searchbar",[["animated",""],["placeholder","Buscar usuario..."]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,t,l){var u=!0,i=n.component;return"ionBlur"===t&&(u=!1!==e.Eb(n,13)._handleBlurEvent(l.target)&&u),"ionChange"===t&&(u=!1!==e.Eb(n,13)._handleInputEvent(l.target)&&u),"ionChange"===t&&(u=!1!==i.buscarUsuario(l)&&u),u}),r.xb,r.F)),e.Ib(5120,null,a.b,(function(n){return[n]}),[o.Nb]),e.rb(12,49152,null,0,o.kb,[e.h,e.k,e.z],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),e.rb(13,16384,null,0,o.Nb,[e.k],null,null),(n()(),e.sb(14,0,null,null,5,"ion-content",[],null,null,null,r.eb,r.m)),e.rb(15,49152,null,0,o.u,[e.h,e.k,e.z],null,null),(n()(),e.hb(16777216,null,0,1,null,B)),e.rb(17,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.hb(16777216,null,0,1,null,A)),e.rb(19,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,4,0,"tertiary"),n(t,9,0,"tertiary"),n(t,12,0,"","Buscar usuario..."),n(t,17,0,0===l.usuarios.length),n(t,19,0,l.usuarios.length>0)}),null)}function O(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"app-bookmarkem",[],null,null,null,F,z)),e.rb(1,49152,null,0,I,[x],null,null)],null,null)}var j=e.ob("app-bookmarkem",I,O,{},{},[]),L=function(){return function(){}}(),_=l("ZYCi"),U=function(){return function(){}}();l.d(t,"BookmarkemPageModuleNgFactory",(function(){return J}));var J=e.pb(u,[],(function(n){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[i.a,j]],[3,e.j],e.x]),e.Cb(4608,s.k,s.j,[e.u,[2,s.s]]),e.Cb(4608,a.g,a.g,[]),e.Cb(4608,o.b,o.b,[e.z,e.g]),e.Cb(4608,o.Hb,o.Hb,[o.b,e.j,e.q]),e.Cb(4608,o.Kb,o.Kb,[o.b,e.j,e.q]),e.Cb(1073742336,L,L,[]),e.Cb(1073742336,s.b,s.b,[]),e.Cb(1073742336,a.f,a.f,[]),e.Cb(1073742336,a.a,a.a,[]),e.Cb(1073742336,o.Eb,o.Eb,[]),e.Cb(1073742336,_.n,_.n,[[2,_.s],[2,_.m]]),e.Cb(1073742336,U,U,[]),e.Cb(1073742336,u,u,[]),e.Cb(1024,_.k,(function(){return[[{path:"",component:I}]]}),[])])}))}}]);