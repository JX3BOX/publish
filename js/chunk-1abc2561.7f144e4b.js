(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1abc2561"],{"1fb2":function(t,e,a){"use strict";var n={name:"publish_original",props:["data"],data:function(){return{original:~~this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.original=~~t},original:{deep:!0,handler:function(t){this.$emit("update",~~t)}}},computed:{},methods:{},mounted:function(){},components:{}},i=a("2877"),o=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-original"},[e("el-form-item",{attrs:{label:"原创"}},[e("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.original,callback:function(e){t.original=e},expression:"original"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},"4e9c":function(t,e,a){"use strict";a("ee4b")},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("b64b"),a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("14d9"),a("159b"),a("dbb4");var n=a("a38e");function i(t,e,a){return(e=Object(n.a)(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"5a5c":function(t,e,a){"use strict";a("bb22")},"67be":function(t,e,a){"use strict";a.d(e,"f",(function(){return i})),a.d(e,"e",(function(){return o})),a.d(e,"h",(function(){return s})),a.d(e,"a",(function(){return c})),a.d(e,"g",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return u})),a.d(e,"d",(function(){return d}));var n=a("41cb");function i(t){return Object(n.c)().get("/api/pvxbody/my-list",{params:t})}function o(t){return Object(n.c)().get("/api/pvxbody/".concat(t))}function s(t){return Object(n.c)().post("/api/pvxbody/file-upload",t)}function c(t){return Object(n.c)().post("/api/pvxbody",t)}function r(t,e){return Object(n.c)().put("/api/pvxbody/".concat(t),e)}function l(t){return Object(n.c)().put("/api/pvxbody/".concat(t,"/online"))}function u(t){return Object(n.c)().put("/api/pvxbody/".concat(t,"/offline"))}function d(t){return Object(n.c)().get("/api/charge_attachment/pvxbody/".concat(t,"/edit"))}},a75b:function(t,e,a){"use strict";a.r(e);a("b0c0");var n=a("5530"),i=(a("d81d"),a("7db0"),a("d3b7"),a("14d9"),a("e9c4"),a("85e4"),a("67be")),o=a("ef77"),s=a("d0a1"),c=a("1fb2"),r=a("cfb8"),l=a("7b4a"),u=a("b13e"),d=a("fb5f"),p=a("c9d2"),f=a("0644"),b=a.n(f),h={name:"pvxbody",components:{publishHeader:o.a,publishTitle:s.a,publishOriginal:c.a,faceAttachment:r.a,UploadAlbum:l.a,publishBanner:u.a},data:function(){return{post:{original:1,is_fr:1,author_name:"",author_link:"",title:"",remark:"",banner:"",client:"std",body_type:1,data:"",file:"",cover:"",images:[],related:[],price_type:"0",price_count:0},loading:!1,processing:!1,postId:"",postType:"body",bodyMap:d.a,promise:!0,bodyAttachments:[],bodyData:""}},computed:{id:function(){return this.$route.params.id},client:function(){return this.$store.state.client},isSuperAuthor:function(){return p.a.isSuperAuthor()}},mounted:function(){this.init()},methods:{init:function(){this.id?this.getData():this.post.client=this.client},getData:function(){var t=this;this.loading=!0,Object(i.e)(this.id).then((function(e){t.post=e.data.data,t.post.images=t.post.images.map((function(t){return{name:t,url:t}})),Object(i.d)(t.id).then((function(e){var a=e.data;a&&a.data&&(t.bodyAttachments=a.data.map((function(t){return{id:t.id,file:t.uuid,name:t.name,describe:t.describe||"",data:t.data||""}})),t.bodyData=t.bodyAttachments.find((function(e){return e.file==t.post.file}))),t.loading=!1}))}))},handleBodyChange:function(t){var e=t.object,a=void 0===e?null:e,n=t.json,i=void 0===n?"":n,o=t.uuid,s=void 0===o?"":o,c=t.id,r=void 0===c?"":c,l=t.name,u=void 0===l?"":l;this.bodyAttachments.push({id:r,file:s,name:u,data:i,body_type:a.nRoleType,describe:""}),console.log(console.log(this.post)),this.bodyData||(this.bodyData={id:r,file:s,name:u,data:i,body_type:a.nRoleType},this.post.body_type=a.nRoleType)},validator:function(t){for(var e,a=["title","file"],n=["请填写标题","请上传数据"],i=0;i<a.length;i++)if(!t[a[i]]){e=n[i];break}return!e||(this.$message.warning(e),!1)},publish:function(){var t=this;this.processing=!0;var e=Object(n.a)(Object(n.a)({},this.post),{},{images:this.post.images.map((function(t){return t.url||t}))}),a=this.bodyAttachments.map((function(t){return{id:t.id,describe:t.describe,data:t.data}}));this.bodyData&&(this.bodyData.data&&(e.data=JSON.stringify(this.bodyData.data)),e.body_type=this.bodyData.body_type||this.post.body_type,e.file=this.bodyData.file),e.attachments=a,this.validator(e)?this.id?Object(i.g)(this.id,e).then((function(e){t.$message.success("修改成功"),t.processing=!1,setTimeout((function(){location.href="/body/".concat(t.id)}),500)})).finally((function(){t.processing=!1})):Object(i.a)(e).then((function(e){t.$message({message:"发布成功",type:"success"}),t.processing=!1,setTimeout((function(){location.href="/body/".concat(e.data.data.id)}),500)})):this.processing=!1},removeFile:function(t){for(var e=[],a=0;a<this.bodyAttachments.length;a++)this.bodyAttachments[a].id!=t&&e.push(this.bodyAttachments[a]);this.bodyAttachments=e,this.bodyData.id==t&&(this.bodyData="")},setMain:function(t){this.bodyData=b()(t),this.$notify({title:"设置成功",type:"success",duration:2e3})}}},m=(a("f535"),a("2877")),y=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box m-publish-box-face"},[e("publish-header",{attrs:{name:"体型分享"}}),e("el-form",{attrs:{"label-position":"left","label-width":"90px"}},[e("publish-title",{model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),e("div",{staticClass:"m-publish-info"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("信息")]),e("el-form-item",{attrs:{label:"版本"}},[e("el-radio-group",{model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}},[e("el-radio",{attrs:{label:"std"}},[t._v("重制")])],1)],1),e("publish-original",{model:{value:t.post.original,callback:function(e){t.$set(t.post,"original",e)},expression:"post.original"}}),e("el-form-item",{attrs:{label:"首发",prop:"is_fr"}},[e("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.post.is_fr,callback:function(e){t.$set(t.post,"is_fr",e)},expression:"post.is_fr"}})],1),t.post.original?t._e():[e("el-form-item",{attrs:{label:"原作者名称",prop:"author_name"}},[e("el-input",{attrs:{placeholder:"输入原作者名称"},model:{value:t.post.author_name,callback:function(e){t.$set(t.post,"author_name",e)},expression:"post.author_name"}})],1),e("el-form-item",{attrs:{label:"原作者链接",prop:"author_link"}},[e("el-input",{attrs:{placeholder:"输入原作者链接"},model:{value:t.post.author_link,callback:function(e){t.$set(t.post,"author_link",e)},expression:"post.author_link"}})],1)],e("el-form-item",{attrs:{label:"价格"}},[e("el-radio-group",{model:{value:t.post.price_type,callback:function(e){t.$set(t.post,"price_type",e)},expression:"post.price_type"}},[e("el-radio",{attrs:{label:"0"}},[t._v("免费")]),e("el-radio",{attrs:{label:"2"}},[t._v("金箔")])],1),"0"!=t.post.price_type?e("el-input-number",{staticClass:"u-price",attrs:{size:"small",max:3e3,min:0},model:{value:t.post.price_count,callback:function(e){t.$set(t.post,"price_count",e)},expression:"post.price_count"}}):t._e(),"0"!=t.post.price_type&&t.post.price_count>0?e("div",{staticClass:"u-tip-box"},[e("div",{staticClass:"u-warning"},[e("el-checkbox",{attrs:{disabled:""},model:{value:t.promise,callback:function(e){t.promise=e},expression:"promise"}},[t._v("我承诺该上传属于自己的原创作品或已得到原作者授权，且相关信息中不带有非授权的元素（比如贴图、字体）等，若违反法律规定我将承担全部责任，魔盒有权下架作品。")])],1)]):t._e()],1),e("el-form-item",{attrs:{label:"体型"}},[e("el-radio-group",{model:{value:t.post.body_type,callback:function(e){t.$set(t.post,"body_type",e)},expression:"post.body_type"}},t._l(t.bodyMap,(function(a,n){return e("el-radio",{key:n,attrs:{label:~~n}},[t._v(t._s(a))])})),1)],1),e("el-form-item",{attrs:{label:"数据"}},[e("face-attachment",{attrs:{body:t.post.body_type,type:"body"},on:{"update:data":t.handleBodyChange}}),t._l(t.bodyAttachments,(function(a){return e("div",{key:a.id,staticClass:"u-attachment"},[e("el-button",{staticClass:"u-main",attrs:{type:a.file===t.bodyData.file?"warning":"",icon:"el-icon-star-off",circle:"",plain:a.file!==t.bodyData.file,size:"mini",title:"设为主数据"},on:{click:function(e){return t.setMain(a)}}}),e("span",{staticClass:"u-attachment-text"},[t._v("文件名: "),e("b",[t._v(t._s(a.name))])]),e("span",{staticClass:"u-attachment-remark"},[e("el-input",{attrs:{placeholder:"备注",size:"mini"},model:{value:a.describe,callback:function(e){t.$set(a,"describe",e)},expression:"item.describe"}})],1),e("el-button",{staticClass:"u-btn",attrs:{type:"info",icon:"el-icon-delete",circle:"",plain:"",size:"mini",title:"移除"},on:{click:function(e){return t.removeFile(a.id)}}})],1)}))],2),e("el-form-item",{attrs:{label:"描述"}},[e("el-input",{attrs:{placeholder:"请填写描述",type:"textarea",rows:3},model:{value:t.post.remark,callback:function(e){t.$set(t.post,"remark",e)},expression:"post.remark"}})],1),e("el-divider",{attrs:{"content-position":"left"}},[t._v("扩展")]),e("el-form-item",{attrs:{label:"图片列表"}},[e("UploadAlbum",{model:{value:t.post.images,callback:function(e){t.$set(t.post,"images",e)},expression:"post.images"}})],1),t.isSuperAuthor?e("publish-banner",{model:{value:t.post.banner,callback:function(e){t.$set(t.post,"banner",e)},expression:"post.banner"}}):t._e()],2),e("div",{staticClass:"m-publish-buttons"},[e("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:t.publish}},[t._v("发    布")])],1)],1)],1)}),[],!1,null,null,null);e.default=y.exports},abe2:function(t,e,a){"use strict";a("d810")},b13e:function(t,e,a){"use strict";var n={name:"post_banner",components:{uploadImage:a("5571").a},props:["data"],data:function(){return{banner:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}}},i=(a("5a5c"),a("2877")),o=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-banner"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),e("uploadImage",{attrs:{info:"非必选。首页海报尺寸1600*280（推荐3200*560支持高分屏），最大30M。","max-size":30},model:{value:t.banner,callback:function(e){t.banner=e},expression:"banner"}})],1)}),[],!1,null,null,null);e.a=o.exports},bb22:function(t,e,a){},c164:function(t,e,a){},cfb8:function(t,e,a){"use strict";a("b0c0"),a("a9e3"),a("e9c4");var n=a("f0d2"),i=a("67be"),o=a("bda6"),s={name:"paid_attachment",props:{body:{type:Number,default:2},describe:{type:String,default:""},type:{type:String,default:"face"}},data:function(){return{data:{id:"",uuid:"",object:"",json:"",name:""}}},computed:{name:function(){return{face:"脸型",body:"体型"}[this.type]}},methods:{selectData:function(){document.getElementById("face_file").dispatchEvent(new MouseEvent("click"))},uploadFile:function(t){return{face:n.i,body:i.h}[this.type](t)},uploadData:function(t){var e=this,a=new FormData;a.append("jx3dat",t),a.append("body",this.body),a.append("describe",this.describe),a.append("data",this.data.json),this.uploadFile(a).then((function(t){e.data.uuid=t.data.data.uuid,e.data.id=t.data.data.id,e.data.name=t.data.data.name,e.$message({message:"数据上传成功",type:"success"}),e.$emit("update:data",e.data)}))},processFile:function(t){var e=t.target.files[0];e&&e.size>65536?this.$message({message:"文件过大，限 64KB 以内",type:"error"}):(this.parseAndUpload(e),t.target.value="")},parseAndUpload:function(t){if(FileReader&&t){var e=this,a=new FileReader;a.onload=function(a){console.log("读取成功...开始执行分析...");var n="",i="";try{i=Object(o.a)(a.target.result),n=JSON.stringify(i)}catch(t){return console.log(t),void e.$notify.error({title:"错误",message:"无法读取数据"})}i&&n&&(setTimeout((function(){return e.$notify({title:"成功",message:"数据读取成功，开始上传",type:"success"})}),0),e.data.json=n,e.uploadData(t),e.data.object=i)},a.onerror=function(t){e.$notify.error({title:"错误",message:"文件读取异常"})},a.readAsArrayBuffer(t)}},clearData:function(){this.data={id:"",uuid:"",object:null,json:"",name:""},this.$emit("update:data",this.data)}}},c=(a("4e9c"),a("2877")),r=Object(c.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"m-paid_attachment"},[t("input",{staticClass:"u-data-input",attrs:{type:"file",id:"face_file",accept:".jx3dat, .dat, .ini"},on:{change:this.processFile}}),t("el-button",{attrs:{type:"primary",icon:"el-icon-upload2"},on:{click:this.selectData}},[this._v(this._s("上传".concat(this.name,"数据")))]),t("span",{directives:[{name:"show",rawName:"v-show",value:this.data.uuid,expression:"data.uuid"}],staticClass:"u-data-ready"},[t("i",{staticClass:"el-icon-success"}),this._v(" 已上传 ")])],1)}),[],!1,null,"648fe7d7",null);e.a=r.exports},d0a1:function(t,e,a){"use strict";var n={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},i=a("2877"),o=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():e("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),e("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},d810:function(t,e,a){},ee4b:function(t,e,a){},ef77:function(t,e,a){"use strict";a("b0c0"),a("14d9");var n={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},i=(a("abe2"),a("2877")),o=Object(i.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},f0d2:function(t,e,a){"use strict";a.d(e,"i",(function(){return i})),a.d(e,"a",(function(){return o})),a.d(e,"f",(function(){return s})),a.d(e,"h",(function(){return c})),a.d(e,"g",(function(){return r})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return u})),a.d(e,"b",(function(){return d})),a.d(e,"e",(function(){return p}));a("99af");var n=a("41cb");function i(t){return Object(n.c)().post("/api/face/file-upload",t)}function o(t){return Object(n.c)().post("/api/face",t)}function s(t){return Object(n.c)().get("/api/face/".concat(t))}function c(t,e){return Object(n.c)().put("/api/face/".concat(t),e)}function r(t){return Object(n.c)().get("/api/face/my-list",{params:t})}function l(t){return Object(n.c)().get("/api/face",{params:t})}function u(t){return Object(n.c)().put("/api/face/".concat(t,"/online"))}function d(t){return Object(n.c)().put("/api/face/".concat(t,"/offline"))}function p(t){return Object(n.c)().get("/api/charge_attachment/face/".concat(t,"/edit"))}},f535:function(t,e,a){"use strict";a("c164")}}]);
//# sourceMappingURL=chunk-1abc2561.7f144e4b.js.map