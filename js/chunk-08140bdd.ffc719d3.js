(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-08140bdd"],{"0711":function(t,e,n){"use strict";var i={name:"",props:["data"],components:{},data:function(){return{visible:"0"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.visible=t},visible:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},filters:{},created:function(){},mounted:function(){}},o=(n("cbe6"),n("2877")),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-visible"},[n("el-form-item",{attrs:{label:"阅读权限"}},[n("el-radio-group",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("el-radio",{attrs:{label:"0"}},[t._v("公开")]),n("el-radio",{attrs:{label:"1"}},[t._v("仅自己可见")]),n("el-radio",{attrs:{label:"2"}},[t._v("仅亲友可见")]),n("el-radio",{attrs:{label:"3",disabled:""}},[t._v("密码可见")]),n("el-radio",{attrs:{label:"4",disabled:""}},[t._v("付费可见")]),n("el-radio",{attrs:{label:"5",disabled:""}},[t._v("粉丝可见")])],1)],1)],1)}),[],!1,null,"509226a0",null);e.a=a.exports},"1fb2":function(t,e,n){"use strict";var i={name:"publish_original",props:["data"],data:function(){return{original:~~this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.original=~~t},original:{deep:!0,handler:function(t){this.$emit("update",~~t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=n("2877"),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-original"},[n("el-form-item",{attrs:{label:"原创"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.original,callback:function(e){t.original=e},expression:"original"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},"34ac7":function(t,e,n){},"438e":function(t,e,n){"use strict";n("34ac7")},"505f":function(t,e,n){"use strict";var i={name:"publish_client",props:["data","forbidAll"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=n("2877"),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-client"},[n("el-form-item",{attrs:{label:"版本"}},[n("el-radio-group",{model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[n("el-radio",{attrs:{label:"std"}},[t._v("正式服")]),n("el-radio",{attrs:{label:"origin"}},[t._v("怀旧服")]),t.forbidAll?t._e():n("el-radio",{attrs:{label:"all"}},[t._v("全部")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},"546f":function(t,e,n){"use strict";n("7dac")},"666d":function(t,e,n){"use strict";n.r(e);var i=n("2909"),o=(n("d3b7"),n("ac1f"),n("1276"),n("85e4")),a=n("7ec5"),s=n("221a"),l=n("ef77"),c=n("d0a1"),r=n("1fb2"),u=n("505f"),p=n("d0b4"),d=n("d95e"),h=n("ad8d"),f=n("b13e"),m=n("cc72"),b=n("0711"),v=n("deb9"),g=n("c402"),_={name:"bps",components:{Tinymce:s.a,"publish-header":l.a,"publish-title":c.a,"publish-original":r.a,"publish-client":u.a,"publish-zlp":p.a,"publish-xf":d.a,"publish-collection":h.a,"publish-banner":f.a,"publish-comment":m.a,"publish-visible":b.a,"publish-tags":v.a},data:function(){return{loading:!1,processing:!1,post:{ID:"",post_status:"publish",post_type:"bps",post_title:"",post_subtype:"通用",post_meta:{},post_content:"",post_mode:"tinymce",original:0,client:"std",lang:"cn",zlp:"",post_excerpt:"",post_banner:"",post_collection:"",comment:0,visible:0},prefer:a.a}},computed:{id:function(){return~~this.post.ID},data:function(){return this.id?[this.id,this.post]:[this.post]}},methods:{init:function(){var t=this;return this.loading=!0,this.$route.params.id?Object(g.d)(this.$route.params.id).then((function(e){return t.post=e.data.data,e.data.data})).finally((function(){t.loading=!1})):new Promise((function(t,e){t()})).finally((function(){t.loading=!1}))},publish:function(t,e){var n=this;this.post.post_status=t,this.processing=!0,g.e.apply(void 0,Object(i.a)(this.data)).then((function(t){var i=t.data.data;n.done(e,i)})).finally((function(){n.processing=!1}))},done:function(t,e){t?(this.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(o.getLink)(e.post_type,e.ID)}),500)):(this.$notify({title:"保存成功",message:"云端草稿保存成功",type:"success"}),this.post=e,this.$route.params.id||this.$router.push({params:{id:e.ID}}))}},created:function(){var t=this;this.post.client=this.$store.state.client,this.init().then((function(e){e&&(!t.post.zlp&&e.post_meta.zlp&&(t.post.zlp=e.post_meta.zlp),t.post.tags&&t.post.tags.length||!e.post_meta.pvmode||(t.post.tags=e.post_meta.pvmode.split(",")))}))},watch:{"$route.params.id":function(t){t&&this.init()}}},y=n("2877"),$=Object(y.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"职业攻略"}}),n("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[n("publish-title",{model:{value:t.post.post_title,callback:function(e){t.$set(t.post,"post_title",e)},expression:"post.post_title"}}),n("div",{staticClass:"m-publish-info"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("信息")]),n("publish-original",{model:{value:t.post.original,callback:function(e){t.$set(t.post,"original",e)},expression:"post.original"}}),n("publish-client",{model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}}),n("publish-zlp",{attrs:{client:t.post.client},model:{value:t.post.zlp,callback:function(e){t.$set(t.post,"zlp",e)},expression:"post.zlp"}}),n("publish-xf",{attrs:{client:t.post.client},model:{value:t.post.post_subtype,callback:function(e){t.$set(t.post,"post_subtype",e)},expression:"post.post_subtype"}}),n("publish-tags",{attrs:{options:t.prefer},model:{value:t.post.tags,callback:function(e){t.$set(t.post,"tags",e)},expression:"post.tags"}})],1),n("div",{staticClass:"m-publish-content"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("正文")]),n("Tinymce",{directives:[{name:"show",rawName:"v-show",value:!t.post.post_mode||"tinymce"==t.post.post_mode,expression:"!post.post_mode || post.post_mode == 'tinymce'"}],attrs:{attachmentEnable:!0,resourceEnable:!0},model:{value:t.post.post_content,callback:function(e){t.$set(t.post,"post_content",e)},expression:"post.post_content"}})],1),n("div",{staticClass:"m-publish-append"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("附加")]),n("publish-collection",{model:{value:t.post.post_collection,callback:function(e){t.$set(t.post,"post_collection",e)},expression:"post.post_collection"}})],1),n("div",{staticClass:"m-publish-extend"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("设置")]),n("publish-comment",{model:{value:t.post.comment,callback:function(e){t.$set(t.post,"comment",e)},expression:"post.comment"}}),n("publish-visible",{model:{value:t.post.visible,callback:function(e){t.$set(t.post,"visible",e)},expression:"post.visible"}})],1),n("div",{staticClass:"m-publish-other"},[n("publish-banner",{model:{value:t.post.post_banner,callback:function(e){t.$set(t.post,"post_banner",e)},expression:"post.post_banner"}})],1),n("div",{staticClass:"m-publish-buttons"},[n("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发    布")]),n("el-button",{attrs:{type:"plain",disabled:t.processing},on:{click:function(e){return t.publish("draft",!1)}}},[t._v("保存为草稿")])],1)],1)],1)}),[],!1,null,null,null);e.default=$.exports},6962:function(t,e,n){"use strict";n("dd68")},"6c2b":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return r}));var i=n("41cb"),o=n("4328");function a(){return Object(i.c)()({method:"GET",url:"/api/post/collection/legal_tags"})}function s(t){return Object(i.c)()({method:"GET",url:"/api/post/collection/".concat(t)})}function l(t){return Object(i.c)()({method:"GET",url:"/api/my/post/collections",params:t})}function c(t){return Object(i.c)()({method:"POST",url:"/api/post/collection",data:o.stringify({action:t.id?"update":"create",collection:t})})}function r(t){return t?Object(i.c)()({method:"PUT",url:"/api/post/collection/remove",data:o.stringify({id:t})}):null}},"7dac":function(t,e,n){},"7ec5":function(t){t.exports=JSON.parse('{"a":["PVE","PVP","PVX","全部"]}')},a367:function(t,e,n){},ad8d:function(t,e,n){"use strict";n("ac1f"),n("841c");var i=n("6c2b"),o=n("0644"),a=n.n(o),s={name:"publish_collection",props:["data"],data:function(){return{collection:this.data,collections:[],copyCollections:[],isInit:!0,loading:!1,search:""}},model:{prop:"data",event:"update"},watch:{data:function(t){this.collection=t},collection:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{loadCollections:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n={keyword:e};Object(i.c)(n).then((function(e){t.collections=e.data.data.data,t.isInit&&(t.copyCollections=a()(t.collections),t.isInit=!1)}))},remoteMethod:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.search=e,this.loading=!0,""!==e){var n={keyword:e};Object(i.c)(n).then((function(e){t.collections=e.data.data.data,t.loading=!1}))}else this.collections=a()(this.copyCollections)},handleBlur:function(){this.collections=a()(this.copyCollections)}},mounted:function(){this.loadCollections()},components:{}},l=(n("546f"),n("2877")),c=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-collection"},[t._m(0),n("el-select",{staticStyle:{width:"100%"},attrs:{remote:"","remote-method":t.remoteMethod,loading:t.loading,filterable:"",clearable:"",placeholder:"请输入小册ID（可选，非必填，可搜索）"},on:{blur:t.handleBlur},model:{value:t.collection,callback:function(e){t.collection=e},expression:"collection"}},t._l(t.collections,(function(t,e){return n("el-option",{key:e,attrs:{label:t.title,value:t.id}})})),1),t._t("default")],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"u-schema"},[this._v(" 关联小册 "),e("a",{staticClass:"u-icon-links",attrs:{href:"https://www.jx3box.com/tool/20891",target:"_blank"}},[e("i",{staticClass:"el-icon-question"}),this._v(" 小册帮助指南 ")])])}],!1,null,null,null);e.a=c.exports},b13e:function(t,e,n){"use strict";n("99af"),n("bc3a");var i=n("65c2"),o=n("85e4"),a=i.__cms+"api/cms/upload",s={name:"post_banner",props:["data"],data:function(){return{banner:this.data,url:a}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}},methods:{done:function(t,e){this.banner=t.data[0]},fail:function(t,e,n){try{var i=JSON.parse(t.message);this.$message.error("[".concat(i.code,"]").concat(i.msg))}catch(t){this.$message.error("网络请求异常")}},clearBanner:function(){this.banner=""}},filters:{showBanner:o.showBanner}},l=(n("6962"),n("2877")),c=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-banner"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),n("el-alert",{staticClass:"u-tip",attrs:{title:"首页海报尺寸1100*300，非必选，部分栏目不会展示海报，分享功能将使用该图作为预览图",type:"info","show-icon":""}}),n("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.url,"show-file-list":!1,"on-success":t.done,"on-error":t.fail,"with-credentials":"",accept:"image/jpg,image/jpeg,image/gif,image/png,image/bmp"}},[t.banner?n("img",{attrs:{src:t._f("showBanner")(t.banner)}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),n("el-button",{staticClass:"u-remove",attrs:{type:"info",size:"mini",icon:"el-icon-circle-close"},on:{click:t.clearBanner}},[t._v("移除海报")])],1)}),[],!1,null,null,null);e.a=c.exports},c4a9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var i=function(){return"undefined"!=typeof window?window:t},o=function(){var t=i();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},ca72:function(t,e,n){"use strict";var i,o=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],a=function(t){return-1!==o.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},s=function(t,e,n){var i=e.$props.value?e.$props.value:"",o=e.$props.initialValue?e.$props.initialValue:"";n.setContent(i||(e.initialized?e.cache:o)),e.$watch("value",(function(t,i){n&&"string"==typeof t&&t!==i&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)})),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(n)?n.join(" "):n;e.on(i||"change input undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))}(e,n),function(t,e,n){Object.keys(e).filter(a).forEach((function(i){var o=e[i];"function"==typeof o&&("onInit"===i?o(t,n):n.on(i.substring(2),(function(t){return o(t,n)})))}))}(t,e.$listeners,n),e.initialized=!0},l=0,c=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++l+String(e)},r=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},u=function(){return{listeners:[],scriptId:c("tiny-script"),scriptLoaded:!1}},p=(i=u(),{load:function(t,e,n){i.scriptLoaded?n():(i.listeners.push(n),t.getElementById(i.scriptId)||function(t,e,n,i){var o=e.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=t,o.src=n;var a=function(){o.removeEventListener("load",a),i()};o.addEventListener("load",a),e.head&&e.head.appendChild(o)}(i.scriptId,t,e,(function(){i.listeners.forEach((function(t){return t()})),i.scriptLoaded=!0})))},reinitialize:function(){i=u()}}),d=n("c4a9"),h={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},f=function(){return(f=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},m=function(t){return function(){var e,n,i,o=f(f({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,r(e).concat(r(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return s(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(i=t.element)&&"textarea"===i.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),Object(d.a)().init(o)}},b={props:h,created:function(){this.elementId=this.$props.id||c("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(d.a)())m(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;p.load(this.element.ownerDocument,n,m(this))}},beforeDestroy:function(){null!==Object(d.a)()&&Object(d.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(d.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&m(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}};e.a=b},cbe6:function(t,e,n){"use strict";n("a367")},cc72:function(t,e,n){"use strict";var i={name:"publish_comment",props:["data"],data:function(){return{comment:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.comment=t},comment:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=n("2877"),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-comment"},[n("el-form-item",{attrs:{label:"评论开关"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":0,"inactive-value":1},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},d0a1:function(t,e,n){"use strict";var i={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=n("2877"),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():n("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),n("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},d0b4:function(t,e,n){"use strict";var i=n("fc61"),o={name:"publish_zlp",props:["data","client"],data:function(){return{zlp:this.data,zlps:i.std}},model:{prop:"data",event:"update"},watch:{data:function(t){this.zlp=t},zlp:{deep:!0,handler:function(t){this.$emit("update",t)}},client:{handler:function(t){t=t||"std",this.zlps=i[t]},immediate:!0}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),s=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-zlp"},[n("el-form-item",{attrs:{label:"资料片"}},[n("el-select",{attrs:{filterable:"","allow-create":!0,placeholder:"请选择适应资料片"},model:{value:t.zlp,callback:function(e){t.zlp=e},expression:"zlp"}},t._l(t.zlps,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},d95e:function(t,e,n){"use strict";var i=n("46d4"),o=n("65c2"),a={name:"publish_xf",props:["data","client"],data:function(){return{xf:this.data,xfmap:i,exact_client:this.client||"std"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.xf=t},xf:{deep:!0,handler:function(t){this.$emit("update",t)}},client:function(t){this.exact_client=t||"std"}},computed:{},methods:{},filters:{xficon:function(t){return o.__imgPath+"image/xf/"+t+".png"}},mounted:function(){},components:{}},s=n("2877"),l=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-xf"},[n("el-form-item",{attrs:{label:"心法"}},t._l(t.xfmap,(function(e,i){return n("el-radio",{directives:[{name:"show",rawName:"v-show",value:e.client.includes(t.exact_client),expression:"item.client.includes(exact_client)"}],key:i,attrs:{label:e.name},model:{value:t.xf,callback:function(e){t.xf=e},expression:"xf"}},[n("img",{staticClass:"u-pic",attrs:{src:t._f("xficon")(e.id),alt:e.name}}),n("span",{staticClass:"u-txt"},[t._v(t._s(e.name))])])})),1),t._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},dd68:function(t,e,n){},deb9:function(t,e,n){"use strict";var i={name:"publish_tags",props:["data","options"],data:function(){return{tag:this.data||[],tags:this.options||[]}},model:{prop:"data",event:"update"},watch:{data:function(t){this.tag=t||[]},tag:{deep:!0,handler:function(t){this.$emit("update",t)}},options:{deep:!0,handler:function(t){t&&(this.tags=t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=(n("438e"),n("2877")),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-tags"},[n("el-form-item",{attrs:{label:"标签"}},[n("el-checkbox-group",{model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}},t._l(t.tags,(function(t){return n("el-checkbox",{key:t,attrs:{label:t}})})),1)],1),t._t("default")],2)}),[],!1,null,"aa15aeb8",null);e.a=a.exports},ef77:function(t,e,n){"use strict";var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){this.$router.push("/")}},mounted:function(){},components:{}},o=n("2877"),a=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports}}]);
//# sourceMappingURL=chunk-08140bdd.ffc719d3.js.map