(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4aebb7c8"],{"0711":function(t,e,n){"use strict";var i={name:"",props:["data"],components:{},data:function(){return{visible:"0"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.visible=t},visible:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},filters:{},created:function(){},mounted:function(){}},o=(n("cbe6"),n("2877")),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-visible"},[n("el-form-item",{attrs:{label:"阅读权限"}},[n("el-radio-group",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("el-radio",{attrs:{label:"0"}},[t._v("公开")]),n("el-radio",{attrs:{label:"1"}},[t._v("仅自己可见")]),n("el-radio",{attrs:{label:"2"}},[t._v("仅亲友可见")]),n("el-radio",{attrs:{label:"3",disabled:""}},[t._v("密码可见")]),n("el-radio",{attrs:{label:"4",disabled:""}},[t._v("付费可见")]),n("el-radio",{attrs:{label:"5",disabled:""}},[t._v("粉丝可见")])],1)],1)],1)}),[],!1,null,"509226a0",null);e.a=s.exports},4517:function(t,e,n){},4618:function(t,e,n){"use strict";var i={name:"publish_subtype",props:["data","options","lock"],data:function(){return{subtype:this.data,subtypes:this.options||[]}},model:{prop:"data",event:"update"},watch:{data:function(t){this.subtype=t},subtype:{deep:!0,handler:function(t){this.$emit("update",t)}},options:{deep:!0,handler:function(t){t&&(this.subtypes=t)}}},computed:{frozen:function(){return this.lock}},methods:{},mounted:function(){},components:{}},o=n("2877"),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-subtype"},[n("el-form-item",{attrs:{label:"类型"}},[n("el-radio-group",{model:{value:t.subtype,callback:function(e){t.subtype=e},expression:"subtype"}},t._l(t.subtypes,(function(e,i){return n("el-radio",{key:i,attrs:{label:i,border:"",disabled:t.frozen&&t.$route.params.id&&t.subtype!=i}},[t._v(t._s(e))])})),1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},"505f":function(t,e,n){"use strict";var i=n("52da"),o={name:"publish_client",props:["data","forbidAll"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{handleChange:function(){i.a.$emit("changeClient",this.client)}},mounted:function(){},components:{}},s=n("2877"),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-client"},[n("el-form-item",{attrs:{label:"版本"}},[n("el-radio-group",{on:{change:t.handleChange},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[n("el-radio",{attrs:{label:"std"}},[t._v("正式服")]),n("el-radio",{attrs:{label:"origin"}},[t._v("怀旧服")]),t.forbidAll?t._e():n("el-radio",{attrs:{label:"all"}},[t._v("全部")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},"52da":function(t,e,n){"use strict";var i=new(n("2b0e").default);e.a=i},"5c9c":function(t){t.exports=JSON.parse('{"1":"剑三资讯","2":"魔盒公告","3":"功能更新","4":"精选锦集"}')},"5dfe":function(t,e,n){"use strict";n.r(e);var i=n("2909"),o=(n("d3b7"),n("85e4")),s=n("5c9c"),a=n("221a"),r=n("ef77"),l=n("d0a1"),c=n("505f"),u=n("adff"),p=n("b13e"),d=n("cc72"),f=n("0711"),h=n("4618"),m=n("db12"),b=n("c402"),v={name:"bbs",components:{Tinymce:a.a,"publish-header":r.a,"publish-title":l.a,"publish-client":c.a,"publish-excerpt":u.a,"publish-banner":p.a,"publish-comment":d.a,"publish-visible":f.a,"publish-subtype":h.a,"publish-authors":m.a},data:function(){return{loading:!1,processing:!1,post:{ID:"",post_status:"publish",post_type:"notice",post_title:"",post_subtype:"1",post_meta:{},post_content:"",post_mode:"tinymce",original:0,client:"std",lang:"cn",zlp:"",post_excerpt:"",post_banner:"",post_collection:"",comment:0,visible:0},notice_types:s}},computed:{id:function(){return~~this.post.ID},data:function(){return this.id?[this.id,this.post]:[this.post]}},methods:{init:function(){var t=this;return this.loading=!0,this.$route.params.id?Object(b.d)(this.$route.params.id).then((function(e){return t.post=e.data.data,e.data.data})).finally((function(){t.loading=!1})):new Promise((function(t,e){t()})).finally((function(){t.loading=!1}))},publish:function(t,e){var n=this;this.post.post_status=t,this.processing=!0,b.e.apply(void 0,Object(i.a)(this.data)).then((function(t){var i=t.data.data;n.done(e,i)})).finally((function(){n.processing=!1}))},done:function(t,e){t?(this.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(o.getLink)(e.post_type,e.ID)}),500)):(this.$notify({title:"保存成功",message:"云端草稿保存成功",type:"success"}),this.post=e,this.$route.params.id||this.$router.push({params:{id:e.ID}}))}},created:function(){this.post.client=this.$store.state.client,this.init()},watch:{"$route.params.id":function(t){t&&this.init()}}},_=n("2877"),y=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"公告资讯"}}),n("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[n("publish-title",{model:{value:t.post.post_title,callback:function(e){t.$set(t.post,"post_title",e)},expression:"post.post_title"}}),n("div",{staticClass:"m-publish-info"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("信息")]),n("publish-client",{model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}}),n("publish-subtype",{attrs:{options:t.notice_types},model:{value:t.post.post_subtype,callback:function(e){t.$set(t.post,"post_subtype",e)},expression:"post.post_subtype"}})],1),n("div",{staticClass:"m-publish-content"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("正文")]),n("Tinymce",{directives:[{name:"show",rawName:"v-show",value:!t.post.post_mode||"tinymce"==t.post.post_mode,expression:"!post.post_mode || post.post_mode == 'tinymce'"}],attrs:{attachmentEnable:!0,resourceEnable:!0},model:{value:t.post.post_content,callback:function(e){t.$set(t.post,"post_content",e)},expression:"post.post_content"}})],1),n("div",{staticClass:"m-publish-append"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("附加")]),n("publish-excerpt",{model:{value:t.post.post_excerpt,callback:function(e){t.$set(t.post,"post_excerpt",e)},expression:"post.post_excerpt"}})],1),n("div",{staticClass:"m-publish-extend"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("设置")]),n("publish-comment",{model:{value:t.post.comment,callback:function(e){t.$set(t.post,"comment",e)},expression:"post.comment"}}),n("publish-visible",{model:{value:t.post.visible,callback:function(e){t.$set(t.post,"visible",e)},expression:"post.visible"}}),n("publish-authors",{attrs:{id:t.id,uid:t.post.post_author}})],1),n("div",{staticClass:"m-publish-other"},[n("publish-banner",{model:{value:t.post.post_banner,callback:function(e){t.$set(t.post,"post_banner",e)},expression:"post.post_banner"}})],1),n("div",{staticClass:"m-publish-buttons"},[n("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发    布")]),n("el-button",{attrs:{type:"plain",disabled:t.processing},on:{click:function(e){return t.publish("draft",!1)}}},[t._v("保存为草稿")])],1)],1)],1)}),[],!1,null,null,null);e.default=y.exports},"647d":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return c}));n("99af");var i=n("41cb");function o(t){return Object(i.b)().get("/api/cms/posts/user/my/union",{params:t})}function s(t){return Object(i.b)().delete("/api/cms/post/".concat(t,"/authors/quit"))}function a(t){return Object(i.b)().get("/api/cms/post/".concat(t,"/authors"))}function r(t,e){return Object(i.b)().post("/api/cms/post/".concat(t,"/author/").concat(e),{label:"撰稿",r_edit:1})}function l(t,e,n){return Object(i.b)().put("/api/cms/post/".concat(t,"/author/").concat(e),n)}function c(t,e){return Object(i.b)().delete("/api/cms/post/".concat(t,"/author/").concat(e))}},6962:function(t,e,n){"use strict";n("dd68")},"72d5":function(t,e,n){"use strict";n("7f5c")},"7f5c":function(t,e,n){},"952d":function(t,e,n){"use strict";n("4517")},a367:function(t,e,n){},adff:function(t,e,n){"use strict";var i={name:"publish_excerpt",props:["data"],data:function(){return{excerpt:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.excerpt=t},excerpt:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=(n("72d5"),n("2877")),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-excerpt"},[n("el-input",{attrs:{maxlength:200,"show-word-limit":"",type:"textarea",placeholder:"摘要信息"},model:{value:t.excerpt,callback:function(e){t.excerpt=e},expression:"excerpt"}}),t._t("default")],2)}),[],!1,null,"3228f028",null);e.a=s.exports},b13e:function(t,e,n){"use strict";n("99af"),n("bc3a");var i=n("65c2"),o=n("85e4"),s=i.__cms+"api/cms/upload",a={name:"post_banner",props:["data"],data:function(){return{banner:this.data,url:s}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}},methods:{done:function(t,e){this.banner=t.data[0]},fail:function(t,e,n){try{var i=JSON.parse(t.message);this.$message.error("[".concat(i.code,"]").concat(i.msg))}catch(t){this.$message.error("网络请求异常")}},clearBanner:function(){this.banner=""}},filters:{showBanner:o.showBanner}},r=(n("6962"),n("2877")),l=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-banner"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),n("el-alert",{staticClass:"u-tip",attrs:{title:"首页海报尺寸1100*300，非必选，部分栏目不会展示海报，分享功能将使用该图作为预览图",type:"info","show-icon":""}}),n("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.url,"show-file-list":!1,"on-success":t.done,"on-error":t.fail,"with-credentials":"",accept:"image/jpg,image/jpeg,image/gif,image/png,image/bmp"}},[t.banner?n("img",{attrs:{src:t._f("showBanner")(t.banner)}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),n("el-button",{staticClass:"u-remove",attrs:{type:"info",size:"mini",icon:"el-icon-circle-close"},on:{click:t.clearBanner}},[t._v("移除海报")])],1)}),[],!1,null,null,null);e.a=l.exports},c4a9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var i=function(){return"undefined"!=typeof window?window:t},o=function(){var t=i();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},ca72:function(t,e,n){"use strict";var i,o=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],s=function(t){return-1!==o.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},a=function(t,e,n){var i=e.$props.value?e.$props.value:"",o=e.$props.initialValue?e.$props.initialValue:"";n.setContent(i||(e.initialized?e.cache:o)),e.$watch("value",(function(t,i){n&&"string"==typeof t&&t!==i&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)})),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(n)?n.join(" "):n;e.on(i||"change input undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))}(e,n),function(t,e,n){Object.keys(e).filter(s).forEach((function(i){var o=e[i];"function"==typeof o&&("onInit"===i?o(t,n):n.on(i.substring(2),(function(t){return o(t,n)})))}))}(t,e.$listeners,n),e.initialized=!0},r=0,l=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++r+String(e)},c=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},u=function(){return{listeners:[],scriptId:l("tiny-script"),scriptLoaded:!1}},p=(i=u(),{load:function(t,e,n){i.scriptLoaded?n():(i.listeners.push(n),t.getElementById(i.scriptId)||function(t,e,n,i){var o=e.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=t,o.src=n;var s=function(){o.removeEventListener("load",s),i()};o.addEventListener("load",s),e.head&&e.head.appendChild(o)}(i.scriptId,t,e,(function(){i.listeners.forEach((function(t){return t()})),i.scriptLoaded=!0})))},reinitialize:function(){i=u()}}),d=n("c4a9"),f={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},h=function(){return(h=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},m=function(t){return function(){var e,n,i,o=h(h({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,c(e).concat(c(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return a(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(i=t.element)&&"textarea"===i.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),Object(d.a)().init(o)}},b={props:f,created:function(){this.elementId=this.$props.id||l("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(d.a)())m(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;p.load(this.element.ownerDocument,n,m(this))}},beforeDestroy:function(){null!==Object(d.a)()&&Object(d.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(d.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&m(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}};e.a=b},cbe6:function(t,e,n){"use strict";n("a367")},cc72:function(t,e,n){"use strict";var i={name:"publish_comment",props:["data"],data:function(){return{comment:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.comment=t},comment:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=n("2877"),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-comment"},[n("el-form-item",{attrs:{label:"评论开关"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":0,"inactive-value":1},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},d0a1:function(t,e,n){"use strict";var i={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=n("2877"),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():n("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),n("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},db12:function(t,e,n){"use strict";n("a434");var i=n("1dfe"),o=n("647d"),s=n("85e4"),a=n("c9d2"),r={name:"PublishAuthors",props:["id","uid"],components:{UserPop:i.a},data:function(){return{list:[],visible:!1}},computed:{isSuper:function(){return a.a.getInfo().uid==this.uid}},watch:{id:{immediate:!0,handler:function(t){t&&this.loadAuthors()}}},methods:{openPop:function(){this.visible=!0},addAuthor:function(t){var e=this;Object(o.a)(this.id,t.ID).then((function(n){e.$notify({title:"添加成功",message:"联合创作者添加成功",type:"success"}),e.list.push({post_author_info:t,label:"撰稿",status:0})}))},loadAuthors:function(){var t=this;Object(o.b)(this.id).then((function(e){var n,i;t.list=null===(n=e.data)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.other_authors}))},update:function(t){var e=this;this.$prompt("修改展示项，例如：撰稿/修订/主创/校稿..","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(n){var i=n.value;Object(o.f)(e.id,t.post_author_info.ID,{label:i,r_edit:1}).then((function(){t.label=i,e.$notify({title:"修改成功",message:"备注更新成功",type:"success"})}))}))},remove:function(t,e){var n=this;Object(o.e)(this.id,t.post_author_info.ID).then((function(t){n.$notify({title:"删除成功",message:"成功移除联合创作者",type:"success"}),n.list.splice(e,1)}))}},filters:{showAvatar:function(t){return Object(s.showAvatar)(t)}},created:function(){},mounted:function(){}},l=(n("952d"),n("2877")),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.id&&t.isSuper?n("div",{staticClass:"m-publish-authors"},[n("el-form-item",{attrs:{label:"联合创作"}},[n("div",{staticClass:"u-list"},[t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"u-item"},[e.status?t._e():n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"等待被邀请者确认",placement:"top"}},[n("i",{staticClass:"u-status el-icon-loading"})]),n("img",{staticClass:"u-avatar",attrs:{src:t._f("showAvatar")(e.post_author_info.user_avatar)}}),n("span",{staticClass:"u-name"},[t._v(" "+t._s(e.post_author_info.display_name)+" "),n("span",{staticClass:"u-label"},[t._v("("+t._s(e.label||"撰稿")+")")])]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改备注",placement:"top"}},[n("i",{staticClass:"u-edit el-icon-edit",on:{click:function(n){return t.update(e)}}})]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除",placement:"top"}},[n("i",{staticClass:"u-delete el-icon-delete",on:{click:function(n){return t.remove(e,i)}}})])],1)})),n("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.openPop}},[t._v("+ 添加联合创作者")])],2),n("UserPop",{attrs:{title:"添加用户"},on:{confirm:t.addAuthor},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})],1)],1):t._e()}),[],!1,null,null,null);e.a=c.exports},dd68:function(t,e,n){},ef77:function(t,e,n){"use strict";var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){},components:{}},o=n("2877"),s=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports}}]);
//# sourceMappingURL=chunk-4aebb7c8.0f0ef51d.js.map