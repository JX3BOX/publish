(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3cd9515f"],{"0711":function(t,e,a){"use strict";var n={name:"",props:["data"],components:{},data:function(){return{visible:"0"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.visible=t},visible:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},filters:{},created:function(){},mounted:function(){}},i=(a("cbe6"),a("2877")),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-visible"},[a("el-form-item",{attrs:{label:"阅读权限"}},[a("el-radio-group",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("el-radio",{attrs:{label:"0"}},[t._v("公开")]),a("el-radio",{attrs:{label:"1"}},[t._v("仅自己可见")]),a("el-radio",{attrs:{label:"2"}},[t._v("仅亲友可见")]),a("el-radio",{attrs:{label:"3",disabled:""}},[t._v("密码可见")]),a("el-radio",{attrs:{label:"4",disabled:""}},[t._v("付费可见")]),a("el-radio",{attrs:{label:"5",disabled:""}},[t._v("粉丝可见")])],1)],1)],1)}),[],!1,null,"509226a0",null);e.a=s.exports},"1fb2":function(t,e,a){"use strict";var n={name:"publish_original",props:["data"],data:function(){return{original:~~this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.original=~~t},original:{deep:!0,handler:function(t){this.$emit("update",~~t)}}},computed:{},methods:{},mounted:function(){},components:{}},i=a("2877"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-original"},[a("el-form-item",{attrs:{label:"原创"}},[a("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.original,callback:function(e){t.original=e},expression:"original"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},4618:function(t,e,a){"use strict";var n={name:"publish_subtype",props:["data","options","lock"],data:function(){return{subtype:this.data,subtypes:this.options||[]}},model:{prop:"data",event:"update"},watch:{data:function(t){this.subtype=t},subtype:{deep:!0,handler:function(t){this.$emit("update",t)}},options:{deep:!0,handler:function(t){t&&(this.subtypes=t)}}},computed:{frozen:function(){return this.lock}},methods:{},mounted:function(){},components:{}},i=a("2877"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-subtype"},[a("el-form-item",{attrs:{label:"类型"}},[a("el-radio-group",{model:{value:t.subtype,callback:function(e){t.subtype=e},expression:"subtype"}},t._l(t.subtypes,(function(e,n){return a("el-radio",{key:n,attrs:{label:n,border:"",disabled:t.frozen&&t.$route.params.id&&t.subtype!=n}},[t._v(t._s(e))])})),1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},"505f":function(t,e,a){"use strict";var n=a("52da"),i={name:"publish_client",props:["data","forbidAll"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{handleChange:function(){n.a.$emit("changeClient",this.client)}},mounted:function(){},components:{}},s=a("2877"),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-client"},[a("el-form-item",{attrs:{label:"版本"}},[a("el-radio-group",{on:{change:t.handleChange},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[a("el-radio",{attrs:{label:"std"}},[t._v("正式服")]),a("el-radio",{attrs:{label:"origin"}},[t._v("怀旧服")]),t.forbidAll?t._e():a("el-radio",{attrs:{label:"all"}},[t._v("全部")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},"52da":function(t,e,a){"use strict";var n=new(a("2b0e").default);e.a=n},"61d5":function(t,e,a){},6962:function(t,e,a){"use strict";a("dd68")},"72d5":function(t,e,a){"use strict";a("7f5c")},"7c7e":function(t,e,a){"use strict";var n=a("53ca");a("b64b");e.a=function(t){return!t||(!(!Array.isArray(t)||t.length)||"object"==Object(n.a)(t)&&!Object.keys(t).length)}},"7c9b":function(t,e,a){"use strict";a.r(e);var n=a("2909"),i=(a("d3b7"),a("85e4")),s=a("b447"),o=a("ef77"),l=a("d0a1"),c=(a("1fb2"),a("505f"),a("adff"),a("b13e"),a("cc72"),a("0711"),a("4618"),a("fb6a"),a("e9c4"),a("2ef0")),r=a.n(c),u=a("7c7e"),d=a("7b4a"),p=a("d4f4"),f=a("41cb");var m=a("fb5f"),h={author:"",pics:[],file:"",data:""},b={name:"publishFacedat",props:["data","client"],components:{UploadAlbum:d.a},data:function(){return{facedat:this.data,object:""}},model:{prop:"data",event:"update"},watch:{data:{immediate:!0,deep:!0,handler:function(t){!t||Object(u.a)(t)?this.facedat=r.a.cloneDeep(h):this.facedat=t}},facedat:{deep:!0,handler:function(t){this.$emit("update",t)}},"facedat.author":function(t){this.$emit("updateMeta",{key:"meta_1",val:t})},"facedat.data":function(t){var e=this.object.nRoleType;this.$emit("updateMeta",{key:"post_subtype",val:m.a[e]})}},computed:{},methods:{selectData:function(t){document.getElementById("face_file").dispatchEvent(new MouseEvent("click"))},uploadData:function(t){var e=this,a=new FormData,n=t.target.files[0];a.append("facedata",n),function(t){return Object(f.b)().post("/api/cms/upload/facedata",t)}(a).then((function(t){e.facedat.file=t.data.data[0],e.$message({message:"上传成功",type:"success"})})),this.parseData(n)},parseData:function(t){var e=this;if(FileReader){var a=new FileReader;a.readAsText(t),a.onload=function(t){console.log("读取成功...开始执行分析...");var a=t.target.result;a=a.slice(a.indexOf("return {"));try{e.object=Object(p.parse)(a),e.facedat.data=JSON.stringify(Object(p.parse)(a)),e.$notify({title:"成功",message:"脸型数据解析成功",type:"success"})}catch(t){e.$notify.error({title:"错误",message:"无法解析脸型数据"})}},a.onerror=function(t){e.$notify.error({title:"错误",message:"无法解析脸型数据"})}}}},filters:{},created:function(){},mounted:function(){}},v=a("2877"),_=Object(v.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-facedat"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("① 数据")]),a("el-form-item",{attrs:{label:"数据"}},[a("input",{staticClass:"u-data-input",attrs:{type:"file",id:"face_file"},on:{change:t.uploadData}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-upload2"},on:{click:t.selectData}},[t._v("上传脸型数据")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.facedat.file,expression:"facedat.file"}],staticClass:"u-data-ready"},[a("i",{staticClass:"el-icon-success"}),t._v(" 已上传 ")])],1),a("el-form-item",{attrs:{label:"分析结果"}},[a("el-input",{attrs:{type:"textarea",rows:6,disabled:""},model:{value:t.facedat.data,callback:function(e){t.$set(t.facedat,"data",e)},expression:"facedat.data"}})],1),a("el-divider",{attrs:{"content-position":"left"}},[t._v("② 美图")]),a("el-form-item",{attrs:{label:"图册"}},[a("UploadAlbum",{model:{value:t.facedat.pics,callback:function(e){t.$set(t.facedat,"pics",e)},expression:"facedat.pics"}})],1),a("el-divider",{attrs:{"content-position":"left"}},[t._v("③ 其它")]),a("el-form-item",{attrs:{label:"作者"}},[a("el-input",{attrs:{placeholder:"请注明原作者"},model:{value:t.facedat.author,callback:function(e){t.$set(t.facedat,"author",e)},expression:"facedat.author"}})],1),t._t("default")],2)}),[],!1,null,null,null).exports,g=a("c402"),y={name:"share",components:{"publish-header":o.a,"publish-title":l.a,"publish-facedat":_},data:function(){return{loading:!1,processing:!1,post:{ID:"",post_status:"publish",post_type:"share",post_title:"",post_subtype:"成男",post_meta:{author:"",pics:[],file:"",data:""},meta_1:"",post_content:"",post_mode:"tinymce",original:0,client:"std",lang:"cn",zlp:"",post_excerpt:"",post_banner:"",post_collection:"",comment:0,visible:0},share_types:s,setting:!1}},computed:{id:function(){return~~this.post.ID},data:function(){return this.id?[this.id,this.post]:[this.post]}},methods:{init:function(){var t=this;return this.loading=!0,this.$route.params.id?Object(g.d)(this.$route.params.id).then((function(e){return t.post=e.data.data,e.data.data})).finally((function(){t.loading=!1})):new Promise((function(t,e){t()})).finally((function(){t.loading=!1}))},publish:function(t,e){var a=this;this.post.post_status=t,this.processing=!0,g.e.apply(void 0,Object(n.a)(this.data)).then((function(t){var n=t.data.data;a.done(e,n)})).finally((function(){a.processing=!1}))},done:function(t,e){t?(this.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(i.getLink)(e.post_type,e.ID)}),500)):(this.$notify({title:"保存成功",message:"云端草稿保存成功",type:"success"}),this.post=e,this.$route.params.id||this.$router.push({params:{id:e.ID}}))},updateMeta:function(t){this.post[t.key]=t.val},toggleSetting:function(){this.setting=!this.setting}},created:function(){this.post.client=this.$store.state.client,this.init()},watch:{"$route.params.id":function(t){t&&this.init()}}},$=(a("bd1a"),Object(v.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box m-publish-box-facedata"},[a("publish-header",{attrs:{name:"捏脸分享"}}),a("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[a("div",{staticClass:"m-publish-info"},[a("publish-facedat",{on:{updateMeta:t.updateMeta},model:{value:t.post.post_meta,callback:function(e){t.$set(t.post,"post_meta",e)},expression:"post.post_meta"}}),a("el-form-item",{attrs:{label:"备注"}},[a("publish-title",{attrs:{hideDiv:!0,placeholder:"请填写描述"},model:{value:t.post.post_title,callback:function(e){t.$set(t.post,"post_title",e)},expression:"post.post_title"}})],1)],1),a("div",{staticClass:"m-publish-buttons"},[a("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发    布")]),a("el-button",{attrs:{type:"plain",disabled:t.processing},on:{click:function(e){return t.publish("draft",!1)}}},[t._v("保存为草稿")])],1)])],1)}),[],!1,null,null,null));e.default=$.exports},"7f5c":function(t,e,a){},a367:function(t,e,a){},adff:function(t,e,a){"use strict";var n={name:"publish_excerpt",props:["data"],data:function(){return{excerpt:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.excerpt=t},excerpt:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},i=(a("72d5"),a("2877")),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-excerpt"},[a("el-input",{attrs:{maxlength:200,"show-word-limit":"",type:"textarea",placeholder:"摘要信息"},model:{value:t.excerpt,callback:function(e){t.excerpt=e},expression:"excerpt"}}),t._t("default")],2)}),[],!1,null,"3228f028",null);e.a=s.exports},b13e:function(t,e,a){"use strict";a("99af"),a("bc3a");var n=a("65c2"),i=a("85e4"),s=n.__cms+"api/cms/upload",o={name:"post_banner",props:["data"],data:function(){return{banner:this.data,url:s}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}},methods:{done:function(t,e){this.banner=t.data[0]},fail:function(t,e,a){try{var n=JSON.parse(t.message);this.$message.error("[".concat(n.code,"]").concat(n.msg))}catch(t){this.$message.error("网络请求异常")}},clearBanner:function(){this.banner=""}},filters:{showBanner:i.showBanner}},l=(a("6962"),a("2877")),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-banner"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),a("el-alert",{staticClass:"u-tip",attrs:{title:"首页海报尺寸1100*300，非必选，部分栏目不会展示海报，分享功能将使用该图作为预览图",type:"info","show-icon":""}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.url,"show-file-list":!1,"on-success":t.done,"on-error":t.fail,"with-credentials":"",accept:"image/jpg,image/jpeg,image/gif,image/png,image/bmp"}},[t.banner?a("img",{attrs:{src:t._f("showBanner")(t.banner)}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a("el-button",{staticClass:"u-remove",attrs:{type:"info",size:"mini",icon:"el-icon-circle-close"},on:{click:t.clearBanner}},[t._v("移除海报")])],1)}),[],!1,null,null,null);e.a=c.exports},b447:function(t){t.exports=JSON.parse('{"成男":"成男","成女":"成女","正太":"正太","萝莉":"萝莉"}')},bcca:function(t,e,a){},bd1a:function(t,e,a){"use strict";a("bcca")},bec3:function(t,e,a){"use strict";a("61d5")},cbe6:function(t,e,a){"use strict";a("a367")},cc72:function(t,e,a){"use strict";var n={name:"publish_comment",props:["data"],data:function(){return{comment:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.comment=t},comment:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},i=a("2877"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-comment"},[a("el-form-item",{attrs:{label:"评论开关"}},[a("el-switch",{attrs:{"active-color":"#13ce66","active-value":0,"inactive-value":1},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},d0a1:function(t,e,a){"use strict";var n={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},i=a("2877"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():a("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),a("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},dd68:function(t,e,a){},ef77:function(t,e,a){"use strict";var n={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},i=(a("bec3"),a("2877")),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports}}]);
//# sourceMappingURL=chunk-3cd9515f.c4ea5964.js.map