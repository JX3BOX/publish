(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6edf3864"],{"1fb2":function(t,e,a){"use strict";var i={name:"publish_original",props:["data"],data:function(){return{original:~~this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.original=~~t},original:{deep:!0,handler:function(t){this.$emit("update",~~t)}}},computed:{},methods:{},mounted:function(){},components:{}},n=a("2877"),o=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-original"},[e("el-form-item",{attrs:{label:"原创"}},[e("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.original,callback:function(e){t.original=e},expression:"original"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},2483:function(t,e,a){"use strict";a("7f06")},"2d01":function(t,e,a){},"3e2f":function(t,e,a){"use strict";a("a1be")},"505f":function(t,e,a){"use strict";var i=a("52da"),n={name:"publish_client",props:["data","forbidAll"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{handleChange:function(){i.a.$emit("changeClient",this.client)}},mounted:function(){},components:{}},o=a("2877"),s=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-client"},[e("el-form-item",{attrs:{label:"版本"}},[e("el-radio-group",{on:{change:t.handleChange},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[e("el-radio",{attrs:{label:"std"}},[t._v("重制")]),e("el-radio",{attrs:{label:"origin"}},[t._v("缘起")]),t.forbidAll?t._e():e("el-radio",{attrs:{label:"all"}},[t._v("双端")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},"52da":function(t,e,a){"use strict";var i=new(a("2b0e").default);e.a=i},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("b64b"),a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("14d9"),a("159b"),a("dbb4");var i=a("a38e");function n(t,e,a){return(e=Object(i.a)(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"7f06":function(t,e,a){},"9b8a":function(t,e,a){"use strict";a("2d01")},a1be:function(t,e,a){},abe2:function(t,e,a){"use strict";a("d810")},b13e:function(t,e,a){"use strict";var i={name:"post_banner",components:{uploadImage:a("5571").a},props:["data"],data:function(){return{banner:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}}},n=(a("2483"),a("2877")),o=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-banner"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),e("uploadImage",{attrs:{info:"非必选。首页海报尺寸1600*280（推荐3200*560支持高分屏），最大20M。"},model:{value:t.banner,callback:function(e){t.banner=e},expression:"banner"}})],1)}),[],!1,null,null,null);e.a=o.exports},d0a1:function(t,e,a){"use strict";var i={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},n=a("2877"),o=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():e("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),e("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},d810:function(t,e,a){},e4b0:function(t,e,a){"use strict";a.r(e);var i=a("5530"),n=(a("d81d"),a("d3b7"),a("85e4"),a("f0d2")),o=a("ef77"),s=a("d0a1"),l=a("1fb2"),r=a("505f"),c=(a("a9e3"),a("e9c4"),a("bda6")),u={name:"paid_attachment",props:{body:{type:Number,default:2},describe:{type:String,default:"个人收藏"}},data:function(){return{data:{id:"",uuid:"",object:"",json:""}}},methods:{selectData:function(){document.getElementById("face_file").dispatchEvent(new MouseEvent("click"))},uploadData:function(t){var e=this,a=new FormData;a.append("jx3dat",t),a.append("body",this.body),a.append("describe",this.describe),Object(n.h)(a).then((function(t){e.data.uuid=t.data.data.uuid,e.data.id=t.data.data.id,e.$message({message:"数据上传成功",type:"success"}),e.$emit("update:data",e.data)}))},processFile:function(t){var e=t.target.files[0];e&&e.size>65536?this.$message({message:"文件过大，限 64KB 以内",type:"error"}):(this.parseAndUpload(e),t.target.value="")},parseAndUpload:function(t){if(FileReader&&t){var e=this,a=new FileReader;a.onload=function(a){console.log("读取成功...开始执行分析...");var i="",n="";try{n=Object(c.a)(a.target.result),i=JSON.stringify(n)}catch(t){return console.log(t),void e.$notify.error({title:"错误",message:"无法读取数据"})}n&&i&&(setTimeout((function(){return e.$notify({title:"成功",message:"数据读取成功，开始上传",type:"success"})}),0),e.uploadData(t),e.data.object=n,e.data.json=i)},a.onerror=function(t){e.$notify.error({title:"错误",message:"文件读取异常"})},a.readAsArrayBuffer(t)}},clearData:function(){this.data={id:"",uuid:"",object:null,json:""},this.$emit("update:data",this.data)}}},p=(a("9b8a"),a("2877")),d=Object(p.a)(u,(function(){var t=this._self._c;return t("div",{staticClass:"m-paid_attachment"},[t("input",{staticClass:"u-data-input",attrs:{type:"file",id:"face_file",accept:".jx3dat, .dat, .ini"},on:{change:this.processFile}}),t("el-button",{attrs:{type:"primary",icon:"el-icon-upload2"},on:{click:this.selectData}},[this._v("上传脸型数据")]),t("span",{directives:[{name:"show",rawName:"v-show",value:this.data.uuid,expression:"data.uuid"}],staticClass:"u-data-ready"},[t("i",{staticClass:"el-icon-success"}),this._v(" 已上传 ")])],1)}),[],!1,null,"7b764d4f",null).exports,f=a("7b4a"),b=a("b13e"),h=a("fb5f"),m={name:"face",components:{publishHeader:o.a,publishTitle:s.a,publishOriginal:l.a,publishClient:r.a,faceAttachment:d,UploadAlbum:f.a,publishBanner:b.a},data:function(){return{post:{original:1,author_name:"",author_link:"",title:"",remark:"",banner:"",client:"std",body_type:1,data:"",file:"",cover:"",images:[],related:[],price_type:"0",price_count:0},loading:!1,processing:!1,fileId:"",postId:"",postType:"face",bodyMap:h.a,promise:!0}},computed:{id:function(){return this.$route.params.id},client:function(){return this.$store.state.client}},mounted:function(){this.init()},methods:{init:function(){this.id?this.getData():this.post.client=this.client},getData:function(){var t=this;this.loading=!0,Object(n.e)(this.id).then((function(e){t.post=e.data.data,t.post.images=t.post.images.map((function(t){return{name:t,url:t}})),t.loading=!1}))},handleFaceChange:function(t){var e=t.object,a=void 0===e?null:e,i=t.json,n=void 0===i?"":i,o=t.uuid,s=void 0===o?"":o,l=t.id,r=void 0===l?"":l;this.post.data=n,this.post.file=s,this.fileId=r,this.post.body_type=a.nRoleType},validator:function(){for(var t,e=["title","file"],a=["请填写标题","请上传数据"],i=0;i<e.length;i++)if(!this.post[e[i]]){t=a[i];break}return!t||(this.$message.warning(t),!1)},publish:function(){var t=this;this.processing=!0;var e=Object(i.a)(Object(i.a)({},this.post),{},{images:this.post.images.map((function(t){return t.url||t}))});this.validator()?this.id?Object(n.g)(this.id,e).then((function(e){t.$message.success("修改成功"),t.afterPublish(t.id).finally((function(){t.processing=!1,setTimeout((function(){location.href="/face/".concat(t.id)}),500)}))})).finally((function(){t.processing=!1})):Object(n.a)(e).then((function(e){t.$message({message:"发布成功",type:"success"}),t.afterPublish(e.data.data.id).finally((function(){t.processing=!1,setTimeout((function(){location.href="/face/".concat(e.data.data.id)}),500)})).finally((function(){t.processing=!1}))})):this.processing=!1},afterPublish:function(t){return this.fileId?Object(n.b)(this.fileId,this.postType,t):Promise.resolve()},removeFile:function(){this.post.file=""}}},v=(a("3e2f"),Object(p.a)(m,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box m-publish-box-face"},[e("publish-header",{attrs:{name:"捏脸分享"}}),e("el-form",{attrs:{"label-position":"left","label-width":"90px"}},[e("publish-title",{model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),e("div",{staticClass:"m-publish-info"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("信息")]),e("publish-client",{attrs:{forbidAll:!0},model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}}),e("publish-original",{model:{value:t.post.original,callback:function(e){t.$set(t.post,"original",e)},expression:"post.original"}}),t.post.original?t._e():[e("el-form-item",{attrs:{label:"原作者名称",prop:"author_name"}},[e("el-input",{attrs:{placeholder:"输入原作者名称"},model:{value:t.post.author_name,callback:function(e){t.$set(t.post,"author_name",e)},expression:"post.author_name"}})],1),e("el-form-item",{attrs:{label:"原作者链接",prop:"author_link"}},[e("el-input",{attrs:{placeholder:"输入原作者链接"},model:{value:t.post.author_link,callback:function(e){t.$set(t.post,"author_link",e)},expression:"post.author_link"}})],1)],e("el-form-item",{attrs:{label:"价格"}},[e("el-radio-group",{model:{value:t.post.price_type,callback:function(e){t.$set(t.post,"price_type",e)},expression:"post.price_type"}},[e("el-radio",{attrs:{label:"0"}},[t._v("免费")]),e("el-radio",{attrs:{label:"2"}},[t._v("金箔")])],1),"0"!=t.post.price_type?e("el-input-number",{staticClass:"u-price",attrs:{size:"small",max:3e3,min:0},model:{value:t.post.price_count,callback:function(e){t.$set(t.post,"price_count",e)},expression:"post.price_count"}}):t._e(),"0"!=t.post.price_type&&t.post.price_count>0?e("div",{staticClass:"u-tip-box"},[e("div",{staticClass:"u-warning"},[e("el-checkbox",{attrs:{disabled:""},model:{value:t.promise,callback:function(e){t.promise=e},expression:"promise"}},[t._v("我承诺该上传属于自己的原创作品或已得到原作者授权，且相关信息中不带有非授权的元素（比如贴图、字体）等，若违反法律规定我将承担全部责任，魔盒有权下架作品。")])],1)]):t._e()],1),e("el-form-item",{attrs:{label:"体型"}},[e("el-radio-group",{model:{value:t.post.body_type,callback:function(e){t.$set(t.post,"body_type",e)},expression:"post.body_type"}},t._l(t.bodyMap,(function(a,i){return e("el-radio",{key:i,attrs:{label:~~i}},[t._v(t._s(a))])})),1)],1),e("el-form-item",{attrs:{label:"数据"}},[t.post.file?e("div",{staticClass:"u-attachment"},[e("span",{staticClass:"u-attachment-text"},[t._v("当前数据唯一标识符："),e("b",[t._v(t._s(t.post.file))])]),e("el-button",{attrs:{type:"primary",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:t.removeFile}})],1):e("face-attachment",{attrs:{body:t.post.body_type},on:{"update:data":t.handleFaceChange}})],1),e("el-form-item",{attrs:{label:"描述"}},[e("el-input",{attrs:{placeholder:"请填写描述",type:"textarea",rows:3},model:{value:t.post.remark,callback:function(e){t.$set(t.post,"remark",e)},expression:"post.remark"}})],1),e("el-divider",{attrs:{"content-position":"left"}},[t._v("扩展")]),e("el-form-item",{attrs:{label:"图片列表"}},[e("UploadAlbum",{model:{value:t.post.images,callback:function(e){t.$set(t.post,"images",e)},expression:"post.images"}})],1),e("publish-banner",{model:{value:t.post.banner,callback:function(e){t.$set(t.post,"banner",e)},expression:"post.banner"}})],2),e("div",{staticClass:"m-publish-buttons"},[e("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:t.publish}},[t._v("发    布")])],1)],1)],1)}),[],!1,null,null,null));e.default=v.exports},ef77:function(t,e,a){"use strict";a("b0c0"),a("14d9");var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},n=(a("abe2"),a("2877")),o=Object(n.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},f0d2:function(t,e,a){"use strict";a.d(e,"h",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return s})),a.d(e,"g",(function(){return l})),a.d(e,"b",(function(){return r})),a.d(e,"f",(function(){return c})),a.d(e,"d",(function(){return u})),a.d(e,"c",(function(){return p}));a("99af");var i=a("41cb");function n(t){return Object(i.c)().post("/api/face/file-upload",t)}function o(t){return Object(i.c)().post("/api/face",t)}function s(t){return Object(i.c)().get("/api/face/".concat(t))}function l(t,e){return Object(i.c)().put("/api/face/".concat(t),e)}function r(t,e,a){return Object(i.c)().post("/api/charge_attachment/".concat(t,"/link-to/").concat(e,"/").concat(a))}function c(t){return Object(i.c)().get("/api/face/my-list",{params:t})}function u(t){return Object(i.c)().put("/api/face/".concat(t,"/online"))}function p(t){return Object(i.c)().put("/api/face/".concat(t,"/offline"))}}}]);
//# sourceMappingURL=chunk-6edf3864.196ad085.js.map