(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-25e3eb24"],{"12df":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("b0c0");var o=n("ef77"),i=n("221a"),s=n("685b"),r=n("c9d2"),a=n("b78a"),c=n("85e4"),l={name:"item",data:function(){return{options:{sources:null},post:{id:"",content:"",source_id:"",level:0,remark:""},loading:!1,processing:!1}},computed:{client:function(){return this.$store.state.client}},methods:{toPublish:function(){var t=this;this.post.source_id?this.post.content?this.post.level>=1&&this.post.level<=5?this.post.remark?(this.processing=!0,s.a.save({type:"item",source_id:this.post.source_id,level:this.post.level,user_nickname:r.a.getInfo().name,content:this.post.content,remark:this.post.remark}).then((function(e){200===(e=e.data).code?(t.$message({message:"提交成功，请等待审核",type:"success"}),setTimeout((function(){t.$router.push({name:"wiki_post",params:{type:"item"}})}),500)):t.$message({message:"".concat(e.message),type:"warning"})})).finally((function(){t.processing=!1}))):this.$message({message:"请简单描述本次修订说明",type:"warning"}):this.$message({message:"请选择适合的综合难度",type:"warning"}):this.$message({message:"要编写攻略正文哦",type:"warning"}):this.$message({message:"请选择要修订攻略的物品",type:"warning"})},icon_url_filter:function(t){return Object(c.iconLink)(t)},search_handle:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loading=!0,Object(a.a)(e,10).then((function(e){200===(e=e.data).code&&(t.options.sources=e.data.data),t.loading=!1}))},loadData:function(t){var e=this;return this.loading=!0,s.a.newest("item",this.post.source_id,0,t).then((function(t){var n=t.data,o=n.data.post,i=n.data.source;if(o?(e.post.source_id=o.source_id,e.post.level=o.level||1,e.post.remark="",e.post.content=o.content):(e.post.source_id=e.post.source_id?e.post.source_id:"",e.post.level=0,e.post.remark="",e.post.content=""),i){var s=!1;for(var r in e.options.sources=e.options.sources||[],e.options.sources)if(e.options.sources[r].id==i.id){s=!0;break}s||e.options.sources.push(i)}return o})).finally((function(){e.loading=!1}))}},created:function(){this.search_handle("");var t=this.$route.params.source_id;this.post.source_id=t||null},watch:{"post.source_id":{handler:function(t){var e=this;t&&("std"==this.client?this.loadData("std"):this.loadData("origin").then((function(t){console.log("兼容获取"),t||e.loadData("std")})))}}},components:{"publish-header":o.a,Tinymce:i.a}},u=(n("7cca"),n("2877")),p=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"物品百科"}},[t._t("header")],2),n("el-form",{staticClass:"m-publish-post"},[n("div",{staticClass:"m-publish-source"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("选择物品 *")]),n("el-select",{staticClass:"u-source-id",attrs:{filterable:"",remote:"",disabled:!!t.post.id,placeholder:"输入物品名称/物品描述并按『回车』进行搜索","remote-method":t.search_handle,loading:t.options.loading},model:{value:t.post.source_id,callback:function(e){t.$set(t.post,"source_id",e)},expression:"post.source_id"}},t._l(t.options.sources,(function(e){return n("el-option",{key:e.id,attrs:{label:e.Name,value:e.id}},[n("div",{staticClass:"m-selector-item"},[n("img",{staticClass:"u-icon",attrs:{src:t.icon_url_filter(e.IconID),alt:e.Name}}),n("span",{staticClass:"u-name",domProps:{textContent:t._s(e.Name)}})])])})),1)],1),n("div",{staticClass:"m-publish-level"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("综合难度 *")]),n("el-rate",{staticClass:"u-level",model:{value:t.post.level,callback:function(e){t.$set(t.post,"level",e)},expression:"post.level"}})],1),n("div",{staticClass:"m-publish-remark"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("修订说明 *")]),n("el-input",{attrs:{placeholder:"请简单描述一下本次修订的说明"},model:{value:t.post.remark,callback:function(e){t.$set(t.post,"remark",e)},expression:"post.remark"}})],1),n("div",{staticClass:"m-publish-content"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("攻略正文 *")]),n("Tinymce",{attrs:{attachmentEnable:!0,resourceEnable:!0,height:400},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1),n("div",{staticClass:"m-publish-commit"},[n("el-divider",{attrs:{"content-position":"left"}}),n("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"primary",disabled:t.processing},on:{click:t.toPublish}},[t._v("提交攻略")])],1)])],1)}),[],!1,null,"01d5fb54",null);e.default=p.exports},"61d5":function(t,e,n){},"7cca":function(t,e,n){"use strict";n("ae12")},ae12:function(t,e,n){},b78a:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("41cb");function i(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s={keyword:t,limit:e,fields:n};return null!==i&&(s.is_equip=i?1:0),Object(o.b)()({method:"GET",url:"/api/item/search",params:s})}},bec3:function(t,e,n){"use strict";n("61d5")},c4a9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var o=function(){return"undefined"!=typeof window?window:t},i=function(){var t=o();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},ca72:function(t,e,n){"use strict";var o,i=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],s=function(t){return-1!==i.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},r=function(t,e,n){var o=e.$props.value?e.$props.value:"",i=e.$props.initialValue?e.$props.initialValue:"";n.setContent(o||(e.initialized?e.cache:i)),e.$watch("value",(function(t,o){n&&"string"==typeof t&&t!==o&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)})),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,o=Array.isArray(n)?n.join(" "):n;e.on(o||"change input undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))}(e,n),function(t,e,n){Object.keys(e).filter(s).forEach((function(o){var i=e[o];"function"==typeof i&&("onInit"===o?i(t,n):n.on(o.substring(2),(function(t){return i(t,n)})))}))}(t,e.$listeners,n),e.initialized=!0},a=0,c=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++a+String(e)},l=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},u=function(){return{listeners:[],scriptId:c("tiny-script"),scriptLoaded:!1}},p=(o=u(),{load:function(t,e,n){o.scriptLoaded?n():(o.listeners.push(n),t.getElementById(o.scriptId)||function(t,e,n,o){var i=e.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=t,i.src=n;var s=function(){i.removeEventListener("load",s),o()};i.addEventListener("load",s),e.head&&e.head.appendChild(i)}(o.scriptId,t,e,(function(){o.listeners.forEach((function(t){return t()})),o.scriptLoaded=!0})))},reinitialize:function(){o=u()}}),d=n("c4a9"),h={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},m=function(){return(m=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},f=function(t){return function(){var e,n,o,i=m(m({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,l(e).concat(l(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return r(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(o=t.element)&&"textarea"===o.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),Object(d.a)().init(i)}},v={props:h,created:function(){this.elementId=this.$props.id||c("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(d.a)())f(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;p.load(this.element.ownerDocument,n,f(this))}},beforeDestroy:function(){null!==Object(d.a)()&&Object(d.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(d.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&f(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}};e.a=v},ef77:function(t,e,n){"use strict";var o={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},i=(n("bec3"),n("2877")),s=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports}}]);
//# sourceMappingURL=chunk-25e3eb24.2902ed23.js.map