(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-91e521b6"],{1:function(t,e){},"1fb2":function(t,e,a){"use strict";var i={name:"publish_original",props:["data"],data:function(){return{original:~~this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.original=~~t},original:{deep:!0,handler:function(t){this.$emit("update",~~t)}}},computed:{},methods:{},mounted:function(){},components:{}},n=a("2877"),o=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-original"},[e("el-form-item",{attrs:{label:"原创"}},[e("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.original,callback:function(e){t.original=e},expression:"original"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},4555:function(t,e,a){},"505f":function(t,e,a){"use strict";var i=a("52da"),n={name:"publish_client",props:["data","forbidAll","showMobile"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{handleChange:function(){i.a.$emit("changeClient",this.client)}},mounted:function(){},components:{}},o=a("2877"),s=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-client"},[e("el-form-item",{attrs:{label:"版本"}},[e("el-radio-group",{on:{change:t.handleChange},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[e("el-radio",{attrs:{label:"std"}},[t._v("剑三")]),e("el-radio",{attrs:{label:"origin"}},[t._v("缘起")]),t.forbidAll?t._e():e("el-radio",{attrs:{label:"all"}},[t._v("全端")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},"52da":function(t,e,a){"use strict";var i=new(a("2b0e").default);e.a=i},"67be":function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"h",(function(){return s})),a.d(e,"a",(function(){return c})),a.d(e,"g",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return u})),a.d(e,"d",(function(){return d}));var i=a("41cb");function n(t){return Object(i.c)().get("/api/pvxbody/my-list",{params:t})}function o(t){return Object(i.c)().get("/api/pvxbody/".concat(t))}function s(t){return Object(i.c)().post("/api/pvxbody/file-upload",t)}function c(t){return Object(i.c)().post("/api/pvxbody",t)}function r(t,e){return Object(i.c)().put("/api/pvxbody/".concat(t),e)}function l(t){return Object(i.c)().put("/api/pvxbody/".concat(t,"/online"))}function u(t){return Object(i.c)().put("/api/pvxbody/".concat(t,"/offline"))}function d(t){return Object(i.c)().get("/api/charge_attachment/pvxbody/".concat(t,"/edit"))}},"8fb7":function(t,e,a){},b3aa:function(t,e,a){},b4e5:function(t,e,a){"use strict";a("b3aa")},c787:function(t,e,a){"use strict";a("4555")},cfb8:function(t,e,a){"use strict";a("b0c0"),a("e9c4"),a("a9e3"),a("2ca0");var i=a("f0d2"),n=a("67be"),o=a("8910"),s={name:"paid_attachment",props:{body:{type:Number,default:2},describe:{type:String,default:""},type:{type:String,default:"face"}},data:function(){return{data:{id:"",uuid:"",object:"",json:"",name:""}}},computed:{name:function(){return{face:"脸型",body:"体型"}[this.type]}},methods:{selectData:function(){document.getElementById("face_file").dispatchEvent(new MouseEvent("click"))},uploadFile:function(t){return{face:i.i,body:n.h}[this.type](t)},uploadData:function(t){var e=this,a=new FormData;a.append("jx3dat",t),a.append("body",this.body),a.append("describe",this.describe),a.append("data",this.data.json),this.uploadFile(a).then((function(t){e.data.uuid=t.data.data.uuid,e.data.id=t.data.data.id,e.data.name=t.data.data.name,e.$message({message:"数据上传成功",type:"success"}),e.$emit("update:data",e.data)}))},processFile:function(t){var e=t.target.files[0];e&&e.size>65536?this.$message({message:"文件过大，限 64KB 以内",type:"error"}):(this.parseAndUpload(e),t.target.value="")},parseAndUpload:function(t){if(FileReader&&t){var e=this,a=new FileReader;a.onload=function(a){console.log("读取成功...开始执行分析...");var i="",n="";try{var s=Object(o.a)(a.target.result);if(!s)return e.$notify.error({title:"错误",message:"数据类型解析失败"});if("body"===e.type&&s.type.startsWith("face"))return e.$notify.error({title:"错误",message:"请导入体型数据"});if("face"===e.type&&"body"===s.type)return e.$notify.error({title:"错误",message:"请导入脸型数据"});n=s.data,console.log(n),n&&(i=JSON.stringify(n))}catch(t){return console.log(t),void e.$notify.error({title:"错误",message:"无法读取数据"})}n&&i&&(setTimeout((function(){return e.$notify({title:"成功",message:"数据读取成功，开始上传",type:"success"})}),0),e.data.json=i,e.uploadData(t),e.data.object=n)},a.onerror=function(t){e.$notify.error({title:"错误",message:"文件读取异常"})},a.readAsArrayBuffer(t)}},clearData:function(){this.data={id:"",uuid:"",object:null,json:"",name:""},this.$emit("update:data",this.data)}}},c=(a("c787"),a("2877")),r=Object(c.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"m-paid_attachment"},[t("input",{staticClass:"u-data-input",attrs:{type:"file",id:"face_file",accept:".jx3dat, .dat, .ini"},on:{change:this.processFile}}),t("el-button",{attrs:{type:"primary",icon:"el-icon-upload2"},on:{click:this.selectData}},[this._v(this._s("上传".concat(this.name,"数据")))]),t("span",{directives:[{name:"show",rawName:"v-show",value:this.data.uuid,expression:"data.uuid"}],staticClass:"u-data-ready"},[t("i",{staticClass:"el-icon-success"}),this._v(" 已上传 ")])],1)}),[],!1,null,"c96940cc",null);e.a=r.exports},d0a1:function(t,e,a){"use strict";var i={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},n=a("2877"),o=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():e("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),e("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},d107:function(t,e,a){"use strict";a("8fb7")},e4b0:function(t,e,a){"use strict";a.r(e);a("b0c0");var i=a("5530"),n=a("c7eb"),o=a("1da1"),s=(a("7db0"),a("d81d"),a("14d9"),a("e9c4"),a("a9e3"),a("b64b"),a("d3b7"),a("0643"),a("fffc"),a("a573"),a("85e4")),c=a("f0d2"),r=a("ef77"),l=a("d0a1"),u=a("1fb2"),d=a("505f"),p=a("cfb8"),f=a("7b4a"),h=a("b13e"),b=a("896e"),m=a("c9d2"),v=a("0644"),_=a.n(v),y=a("65c2"),g=a("fb5f"),x=a("c402"),j={name:"face",components:{publishHeader:r.a,publishTitle:l.a,publishOriginal:u.a,publishClient:d.a,faceAttachment:p.a,UploadAlbum:f.a,publishBanner:h.a},data:function(){return{post:{original:1,is_fr:1,author_name:"",author_link:"",title:"",remark:"",banner:"",client:"std",body_type:1,is_new_face:0,data:"",file:"",cover:"",images:[],related:[],price_type:"0",price_count:0,is_unlimited:0,code_mode:0,code:""},options:{bodyMap:g.bodyMap,majorMap:g.majorMap,faceSubtype:g.faceSubtype,clients:y.__clients},editDetail:!1,loading:!1,processing:!1,isSuperAuthor:!1,postId:"",postType:"face",promise:!0,faceAttachments:[],faceData:"",decalDb:null,cny_enable:0}},computed:{id:function(){return this.$route.params.id},client:function(){return this.$store.state.client}},mounted:function(){var t=this;return Object(o.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.init();case 1:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var t=this;this.id?this.getData():this.post.client=this.client,this.decalDb=new b.a(this.client),m.a.isSuperAuthor().then((function(e){t.isSuperAuthor=e})),Object(x.e)("cny_enable").then((function(e){t.cny_enable=Number(e.data.data.val)}))},getData:function(){var t=this;this.loading=!0,Object(c.f)(this.id).then((function(e){t.post=e.data.data,t.isOldPost(t.post.updated_at)&&t.showWarning(),t.post.images=t.post.images.map((function(t){return{name:t,url:t}})),m.a.isSuperAuthor().then((function(e){t.isSuperAuthor=e,!1===t.isSuperAuthor&&(t.post.price_type="0",t.post.price_count=0)})),Object(c.e)(t.id).then((function(e){var a=e.data;a&&a.data&&(t.faceAttachments=a.data.map((function(t){return{id:t.id,file:t.uuid,name:t.name,describe:t.describe||"",data:t.data||""}})),t.faceData=t.faceAttachments.find((function(e){return e.file==t.post.file}))),t.loading=!1}))}))},handleFaceChange:function(t){var e=t.object,a=void 0===e?null:e,i=t.json,n=void 0===i?"":i,o=t.uuid,s=void 0===o?"":o,c=t.id,r=void 0===c?"":c,l=t.name,u=void 0===l?"":l;this.faceAttachments.push({id:r,file:s,name:u,data:n,body_type:a.nRoleType,describe:""}),this.faceData={id:r,file:s,name:u,data:n,body_type:a.nRoleType},this.autoParse(a)},validator:function(t){var e,a=["title"],i=["请填写标题"];console.log(t),t.code_mode?(a.push("code"),i.push("请填写捏脸码")):(a.push("file"),i.push("请上传数据"));for(var n=0;n<a.length;n++)if(!t[a[n]]){e=i[n];break}return!e||(this.$message.warning(e),!1)},publish:function(){var t=this;this.processing=!0;var e=Object(i.a)(Object(i.a)({},this.post),{},{images:this.post.images.map((function(t){return t.url||t}))}),a=this.faceAttachments.map((function(t){return{id:t.id,describe:t.describe,data:t.data}}));this.faceData&&(this.faceData.data&&(e.data=JSON.stringify(this.faceData.data)),e.body_type=this.faceData.body_type||this.post.body_type,e.file=this.faceData.file),e.attachments=a,this.validator(e)?this.id?Object(c.h)(this.id,e).then((function(e){t.$message.success("修改成功"),t.processing=!1,setTimeout((function(){location.href=Object(s.f)("face",t.id)}),500)})).finally((function(){t.processing=!1})):Object(c.a)(e).then((function(e){t.$message({message:"发布成功",type:"success"}),t.processing=!1,setTimeout((function(){location.href=Object(s.f)("face",e.data.data.id)}),500)})):this.processing=!1},removeFile:function(t){for(var e=[],a=0;a<this.faceAttachments.length;a++)this.faceAttachments[a].id!=t&&e.push(this.faceAttachments[a]);this.faceAttachments=e,this.faceData.id==t&&(this.faceData="")},setMain:function(t){this.faceData=_()(t);try{var e=JSON.parse(t.data);this.autoParse(e),this.$notify({title:"设置成功",type:"success",duration:2e3})}catch(t){console.error("[文件解析失败]",t),this.$notify({title:"解析失败",type:"error",duration:2e3})}},autoParse:function(t){this.post.client=g.majorMap[t.nMajorVersion],this.post.is_new_face=t.bNewFace?1:0,this.post.body_type=t.nRoleType,this.decalDb=new b.a(this.post.client,t.bNewFace),this.decalDb.setBodyType(this.post.body_type),this.post.is_unlimited=~~this.decalDb.canUseInCreate(t),this.post.game_price=~~this.decalDb.getTotalPrice(t,t.bNewFace)},changePriceType:function(t){0===Number(t)&&(this.post.price_count=0)},isOldPost:function(t){return new Date(t)<new Date("2023-11-13 00:00:00")},showWarning:function(){var t=this;this.$confirm("为保护原创作者的权益，避免他人盗卖作品盈利，我们已修改了相关规则，目前仅签约作者可使用作品收费功能。<br/><br/><span style='color:#f00;font-weight:bold;'>若您不是【签约作者】，继续编辑此作品，将会使作品变为【免费】。</span>","注意",{distinguishCancelAndClose:!0,confirmButtonText:"放弃修改",cancelButtonText:"我已阅读并知晓",dangerouslyUseHTMLString:!0,callback:function(e){"confirm"==e&&(window.location.href=location.origin+Object(s.f)("face",t.id))}}).catch((function(t){}))},codePaste:function(){var t=this;return Object(o.a)(Object(n.a)().mark((function e(){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.readText();case 3:a=e.sent,t.post.code=a,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$message.error("读取剪切板内容失败");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},k=(a("d107"),a("2877")),w=Object(k.a)(j,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box m-publish-box-face"},[e("publish-header",{attrs:{name:"捏脸分享"}}),e("el-form",{attrs:{"label-position":"left","label-width":"90px"}},[e("publish-title",{model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),e("div",{staticClass:"m-publish-info"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("信息")]),e("el-form-item",{attrs:{label:"捏脸码"}},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66"},model:{value:t.post.code_mode,callback:function(e){t.$set(t.post,"code_mode",e)},expression:"post.code_mode"}})],1),t.post.code_mode?e("el-form-item",{attrs:{prop:"code"},scopedSlots:t._u([{key:"label",fn:function(){return[e("span",[t._v("捏脸码")]),e("i",{staticClass:"el-icon-document-copy",staticStyle:{"margin-left":"2px",color:"#c00"},on:{click:t.codePaste}})]},proxy:!0}])},[e("el-input",{attrs:{placeholder:"请输入捏脸码"},model:{value:t.post.code,callback:function(e){t.$set(t.post,"code",e)},expression:"post.code"}})],1):e("el-form-item",{attrs:{label:"数据"}},[e("face-attachment",{attrs:{body:t.post.body_type,type:"face"},on:{"update:data":t.handleFaceChange}}),t._l(t.faceAttachments,(function(a){return e("div",{key:a.id,staticClass:"u-attachment"},[e("el-button",{staticClass:"u-main",attrs:{type:a.file===t.faceData.file?"warning":"",icon:"el-icon-star-off",circle:"",plain:a.file!==t.faceData.file,size:"mini",title:"设为主数据"},on:{click:function(e){return t.setMain(a)}}}),e("span",{staticClass:"u-attachment-text"},[t._v(" 文件名: "),e("b",[t._v(t._s(a.name))])]),e("span",{staticClass:"u-attachment-remark"},[e("el-input",{attrs:{placeholder:"备注",size:"mini"},model:{value:a.describe,callback:function(e){t.$set(a,"describe",e)},expression:"item.describe"}})],1),e("el-button",{staticClass:"u-btn",attrs:{type:"info",icon:"el-icon-delete",circle:"",plain:"",size:"mini",title:"移除"},on:{click:function(e){return t.removeFile(a.id)}}})],1)}))],2),t.faceData||t.post.code_mode?e("el-form-item",{attrs:{label:"体型"}},[e("el-radio-group",{model:{value:t.post.body_type,callback:function(e){t.$set(t.post,"body_type",e)},expression:"post.body_type"}},t._l(t.options.bodyMap,(function(a,i){return e("el-radio",{key:i,attrs:{label:~~i}},[t._v(t._s(a.label))])})),1)],1):t._e(),t.faceData||t.post.code_mode?e("publish-client",{attrs:{forbidAll:!0},model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}}):t._e(),(t.faceData||t.post.code_mode)&&"std"===t.post.client?e("el-form-item",{attrs:{label:"画风"}},[e("el-radio-group",{model:{value:t.post.is_new_face,callback:function(e){t.$set(t.post,"is_new_face",e)},expression:"post.is_new_face"}},[e("el-radio",{attrs:{label:1}},[t._v("写实")]),e("el-radio",{attrs:{label:0}},[t._v("写意")])],1)],1):t._e(),t.faceData||t.post.code_mode?e("el-form-item",{attrs:{label:"可新建"}},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.post.is_unlimited,callback:function(e){t.$set(t.post,"is_unlimited",e)},expression:"post.is_unlimited"}})],1):t._e(),e("el-form-item",{attrs:{label:"首发",prop:"is_fr"}},[e("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.post.is_fr,callback:function(e){t.$set(t.post,"is_fr",e)},expression:"post.is_fr"}})],1),e("publish-original",{model:{value:t.post.original,callback:function(e){t.$set(t.post,"original",e)},expression:"post.original"}}),t.post.original?t._e():[e("el-form-item",{attrs:{label:"原作者名称",prop:"author_name"}},[e("el-input",{attrs:{placeholder:"输入原作者名称"},model:{value:t.post.author_name,callback:function(e){t.$set(t.post,"author_name",e)},expression:"post.author_name"}})],1),e("el-form-item",{attrs:{label:"原作者链接",prop:"author_link"}},[e("el-input",{attrs:{placeholder:"输入原作者链接"},model:{value:t.post.author_link,callback:function(e){t.$set(t.post,"author_link",e)},expression:"post.author_link"}})],1)],e("el-form-item",{scopedSlots:t._u([{key:"label",fn:function(){return[e("span",[t._v("价格")]),e("el-tooltip",{attrs:{content:"仅签约作者可以发布收费作品；1金箔=1分CNY"}},[e("i",{staticClass:"el-icon-warning-outline",staticStyle:{"margin-left":"2px",color:"#c00"}})])]},proxy:!0}])},[e("el-radio-group",{attrs:{disabled:!t.isSuperAuthor},on:{change:t.changePriceType},model:{value:t.post.price_type,callback:function(e){t.$set(t.post,"price_type",e)},expression:"post.price_type"}},[e("el-radio",{attrs:{label:"0"}},[t._v("免费")]),t.isSuperAuthor&&t.cny_enable?e("el-radio",{attrs:{label:"2"}},[t._v("收费(金箔)")]):t._e()],1),"0"!=t.post.price_type?e("el-input-number",{staticClass:"u-price",attrs:{size:"small",max:3e3,min:0},model:{value:t.post.price_count,callback:function(e){t.$set(t.post,"price_count",e)},expression:"post.price_count"}}):t._e(),"0"!=t.post.price_type&&t.post.price_count>0?e("div",{staticClass:"u-tip-box"},[e("div",{staticClass:"u-warning"},[e("el-checkbox",{attrs:{disabled:""},model:{value:t.promise,callback:function(e){t.promise=e},expression:"promise"}},[t._v(" 我承诺该上传属于自己的原创作品或已得到原作者授权，且相关信息中不带有非授权的元素（比如贴图、字体）等，若违反法律规定我将承担全部责任，魔盒有权下架作品。 ")])],1)]):t._e()],1),e("el-form-item",{attrs:{label:"说明"}},[e("el-input",{attrs:{placeholder:"请填写相关说明",type:"textarea",rows:3},model:{value:t.post.remark,callback:function(e){t.$set(t.post,"remark",e)},expression:"post.remark"}})],1),e("el-divider",{attrs:{"content-position":"left"}},[t._v("扩展")]),e("el-form-item",{attrs:{label:"图片列表"}},[e("UploadAlbum",{model:{value:t.post.images,callback:function(e){t.$set(t.post,"images",e)},expression:"post.images"}})],1),t.isSuperAuthor?e("publish-banner",{model:{value:t.post.banner,callback:function(e){t.$set(t.post,"banner",e)},expression:"post.banner"}}):t._e()],2),e("div",{staticClass:"m-publish-buttons"},[e("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:t.publish}},[t._v("发    布")])],1)],1)],1)}),[],!1,null,null,null);e.default=w.exports},ef77:function(t,e,a){"use strict";a("b0c0"),a("14d9");var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},n=(a("b4e5"),a("2877")),o=Object(n.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},f0d2:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"i",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"f",(function(){return c})),a.d(e,"h",(function(){return r})),a.d(e,"g",(function(){return l})),a.d(e,"d",(function(){return u})),a.d(e,"c",(function(){return d})),a.d(e,"e",(function(){return p}));a("99af");var i=a("41cb");function n(t){return Object(i.c)().delete("/api/face/".concat(t))}function o(t){return Object(i.c)().post("/api/face/file-upload",t)}function s(t){return Object(i.c)().post("/api/face",t)}function c(t){return Object(i.c)().get("/api/face/".concat(t))}function r(t,e){return Object(i.c)().put("/api/face/".concat(t),e)}function l(t){return Object(i.c)().get("/api/face/my-list",{params:t})}function u(t){return Object(i.c)().put("/api/face/".concat(t,"/online"))}function d(t){return Object(i.c)().put("/api/face/".concat(t,"/offline"))}function p(t){return Object(i.c)().get("/api/charge_attachment/face/".concat(t,"/edit"))}}}]);
//# sourceMappingURL=chunk-91e521b6.69ca63d2.js.map