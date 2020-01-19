(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{E3o2:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),i=t("pMnS"),o=t("ZZ/e"),r=t("oBZk"),a=t("Ip0R"),c=t("mrSG"),s=t("LG6+"),b=t("01F9"),f=t("Yttj"),p=t("iWj2"),h=t("2WpN"),m=function(){function l(l,n,t,e,u,i,o,r,a,c,s){this.camera=l,this.file=n,this.http=t,this.webview=e,this.actionSheetController=u,this.toastController=i,this.storage=o,this.platform=r,this.loadingController=a,this.ref=c,this.filePath=s,this.img_profile=[]}return l.prototype.ngOnInit=function(){var l=this;this.platform.ready().then((function(){l.loadStoredImages()}))},l.prototype.loadStoredImages=function(){var l=this;this.storage.get("my_images").then((function(n){if(n){var t=JSON.parse(n);l.img_profile=[];for(var e=0,u=t;e<u.length;e++){var i=u[e],o=l.file.dataDirectory+i,r=l.pathForImage(o);l.img_profile.push({name:i,path:r,filePath:o})}}}))},l.prototype.pathForImage=function(l){return null===l?"":this.webview.convertFileSrc(l)},l.prototype.presentToast=function(l){return c.b(this,void 0,void 0,(function(){return c.e(this,(function(n){switch(n.label){case 0:return[4,this.toastController.create({message:l,position:"bottom",duration:3e3})];case 1:return n.sent().present(),[2]}}))}))},l.prototype.selectImage=function(){return c.b(this,void 0,void 0,(function(){var l=this;return c.e(this,(function(n){switch(n.label){case 0:return[4,this.actionSheetController.create({header:"Select Image source",buttons:[{text:"Load from Library",handler:function(){l.takePicture(l.camera.PictureSourceType.PHOTOLIBRARY)}},{text:"Use Camera",handler:function(){l.takePicture(l.camera.PictureSourceType.CAMERA)}},{text:"Cancel",role:"cancel"}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},l.prototype.takePicture=function(l){var n=this;this.camera.getPicture({quality:100,sourceType:l,saveToPhotoAlbum:!1,correctOrientation:!0}).then((function(t){if(n.platform.is("android")&&l===n.camera.PictureSourceType.PHOTOLIBRARY)n.filePath.resolveNativePath(t).then((function(l){var e=l.substr(0,l.lastIndexOf("/")+1),u=t.substring(t.lastIndexOf("/")+1,t.lastIndexOf("?"));n.copyFileToLocalDir(e,u,n.createFileName())}));else{var e=t.substr(t.lastIndexOf("/")+1),u=t.substr(0,t.lastIndexOf("/")+1);n.copyFileToLocalDir(u,e,n.createFileName())}}))},l.prototype.createFileName=function(){return(new Date).getTime()+".jpg"},l.prototype.copyFileToLocalDir=function(l,n,t){var e=this;this.file.copyFile(l,n,this.file.dataDirectory,t).then((function(l){e.updateStoredImages(t)}),(function(l){e.presentToast("Error while storing file.")}))},l.prototype.updateStoredImages=function(l){var n=this;this.storage.get("my_images").then((function(t){var e=JSON.parse(t);e?(e.push(l),n.storage.set("my_images",JSON.stringify(e))):n.storage.set("my_images",JSON.stringify([l]));var u=n.file.dataDirectory+l,i=n.pathForImage(u);n.img_profile=[{name:l,path:i,filePath:u}].concat(n.img_profile),n.ref.detectChanges()}))},l.prototype.deleteImage=function(l,n){var t=this;this.img_profile.splice(n,1),this.storage.get("my_images").then((function(n){var e=JSON.parse(n).filter((function(n){return n!=l.name}));t.storage.set("my_images",JSON.stringify(e));var u=l.filePath.substr(0,l.filePath.lastIndexOf("/")+1);t.file.removeFile(u,l.name).then((function(l){t.presentToast("File removed.")}))}))},l.prototype.startUpload=function(l){var n=this;this.file.resolveLocalFilesystemUrl(l.filePath).then((function(l){l.file((function(l){return n.readFile(l)}))})).catch((function(l){n.presentToast("Error while reading file.")}))},l.prototype.readFile=function(l){var n=this,t=new FileReader;t.onload=function(){var e=new FormData,u=new Blob([t.result],{type:l.type});e.append("file",u,l.name),n.uploadImageData(e)},t.readAsArrayBuffer(l)},l.prototype.uploadImageData=function(l){return c.b(this,void 0,void 0,(function(){var n,t=this;return c.e(this,(function(e){switch(e.label){case 0:return[4,this.loadingController.create({message:"Uploading image..."})];case 1:return[4,(n=e.sent()).present()];case 2:return e.sent(),this.http.post("http://192.168.64.2/server_easymc/upload.php",l).pipe(Object(h.a)((function(){n.dismiss()}))).subscribe((function(l){t.presentToast(l.success?"File upload complete.":"File upload failed.")})),[2]}}))}))},l}(),d=t("t/Na"),g=t("iw74"),y=e.sb({encapsulation:0,styles:[[""]],data:{}});function k(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,2,"h3",[["text-center",""]],null,null,null,null,null)),e.tb(1,16384,null,0,o.d,[e.k],null,null),(l()(),e.Ob(-1,null,["Please Select Image!"]))],null,null)}function v(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,17,"ion-item",[["text-wrap",""]],null,null,null,r.xb,r.x)),e.tb(1,49152,null,0,o.H,[e.h,e.k,e.z],null,null),e.tb(2,16384,null,0,o.d,[e.k],null,null),(l()(),e.ub(3,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,r.Sb,r.U)),e.tb(4,49152,null,0,o.zb,[e.h,e.k,e.z],null,null),(l()(),e.ub(5,0,null,0,1,"ion-img",[],null,null,null,r.rb,r.t)),e.tb(6,49152,null,0,o.D,[e.h,e.k,e.z],{src:[0,"src"]},null),(l()(),e.ub(7,0,null,0,2,"ion-label",[],null,null,null,r.yb,r.A)),e.tb(8,49152,null,0,o.N,[e.h,e.k,e.z],null,null),(l()(),e.Ob(9,0,[" "," "])),(l()(),e.ub(10,0,null,0,3,"ion-button",[["fill","clear"],["slot","end"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.startUpload(l.context.$implicit)&&e),e}),r.bb,r.d)),e.tb(11,49152,null,0,o.k,[e.h,e.k,e.z],{fill:[0,"fill"]},null),(l()(),e.ub(12,0,null,0,1,"ion-icon",[["name","cloud-upload"],["slot","icon-only"]],null,null,null,r.qb,r.s)),e.tb(13,49152,null,0,o.C,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.ub(14,0,null,0,3,"ion-button",[["fill","clear"],["slot","end"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.deleteImage(l.context.$implicit,l.context.index)&&e),e}),r.bb,r.d)),e.tb(15,49152,null,0,o.k,[e.h,e.k,e.z],{fill:[0,"fill"]},null),(l()(),e.ub(16,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,r.qb,r.s)),e.tb(17,49152,null,0,o.C,[e.h,e.k,e.z],{name:[0,"name"]},null)],(function(l,n){l(n,6,0,n.context.$implicit.path),l(n,11,0,"clear"),l(n,13,0,"cloud-upload"),l(n,15,0,"clear"),l(n,17,0,"trash")}),(function(l,n){l(n,9,0,n.context.$implicit.name)}))}function I(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,9,"ion-header",[],null,null,null,r.pb,r.r)),e.tb(1,49152,null,0,o.B,[e.h,e.k,e.z],null,null),(l()(),e.ub(2,0,null,0,7,"ion-toolbar",[],null,null,null,r.Ub,r.W)),e.tb(3,49152,null,0,o.Cb,[e.h,e.k,e.z],null,null),(l()(),e.ub(4,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,r.cb,r.e)),e.tb(5,49152,null,0,o.l,[e.h,e.k,e.z],null,null),(l()(),e.ub(6,0,null,0,3,"ion-button",[["color","dark"]],null,null,null,r.bb,r.d)),e.tb(7,49152,null,0,o.k,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.ub(8,0,null,0,1,"ion-icon",[["name","search"],["slot","icon-only"]],null,null,null,r.qb,r.s)),e.tb(9,49152,null,0,o.C,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.ub(10,0,null,null,8,"ion-content",[["padding",""]],null,null,null,r.kb,r.m)),e.tb(11,49152,null,0,o.u,[e.h,e.k,e.z],null,null),e.tb(12,16384,null,0,o.d,[e.k],null,null),(l()(),e.jb(16777216,null,0,1,null,k)),e.tb(14,16384,null,0,a.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.ub(15,0,null,0,3,"ion-list",[],null,null,null,r.zb,r.B)),e.tb(16,49152,null,0,o.O,[e.h,e.k,e.z],null,null),(l()(),e.jb(16777216,null,0,1,null,v)),e.tb(18,278528,null,0,a.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ub(19,0,null,null,8,"ion-footer",[],null,null,null,r.nb,r.p)),e.tb(20,49152,null,0,o.z,[e.h,e.k,e.z],null,null),(l()(),e.ub(21,0,null,0,6,"ion-toolbar",[["color","primary"]],null,null,null,r.Ub,r.W)),e.tb(22,49152,null,0,o.Cb,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.ub(23,0,null,0,4,"ion-button",[["color","light"],["expand","full"],["fill","clear"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectImage()&&e),e}),r.bb,r.d)),e.tb(24,49152,null,0,o.k,[e.h,e.k,e.z],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.ub(25,0,null,0,1,"ion-icon",[["name","camera"],["slot","start"]],null,null,null,r.qb,r.s)),e.tb(26,49152,null,0,o.C,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.Ob(-1,0,[" Select Image"]))],(function(l,n){var t=n.component;l(n,7,0,"dark"),l(n,9,0,"search"),l(n,14,0,0==t.img_profile.length),l(n,18,0,t.img_profile),l(n,22,0,"primary"),l(n,24,0,"light","full","clear"),l(n,26,0,"camera")}),null)}function O(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,"app-notification",[],null,null,null,I,y)),e.tb(1,114688,null,0,m,[s.a,b.a,d.c,f.a,o.a,o.Qb,g.b,o.Lb,o.Gb,e.h,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var z=e.qb("app-notification",m,O,{},{},[]),F=t("gIcY"),x=t("ZYCi"),P=function(){return function(){}}();t.d(n,"NotificationPageModuleNgFactory",(function(){return S}));var S=e.rb(u,[],(function(l){return e.Db([e.Eb(512,e.j,e.cb,[[8,[i.a,z]],[3,e.j],e.x]),e.Eb(4608,a.l,a.k,[e.u,[2,a.z]]),e.Eb(4608,F.j,F.j,[]),e.Eb(4608,o.b,o.b,[e.z,e.g]),e.Eb(4608,o.Hb,o.Hb,[o.b,e.j,e.q]),e.Eb(4608,o.Mb,o.Mb,[o.b,e.j,e.q]),e.Eb(1073742336,a.b,a.b,[]),e.Eb(1073742336,F.i,F.i,[]),e.Eb(1073742336,F.a,F.a,[]),e.Eb(1073742336,o.Eb,o.Eb,[]),e.Eb(1073742336,x.n,x.n,[[2,x.s],[2,x.m]]),e.Eb(1073742336,P,P,[]),e.Eb(1073742336,u,u,[]),e.Eb(1024,x.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);