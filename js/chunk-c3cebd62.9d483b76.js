(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c3cebd62"],{"0cb2":function(t,e,n){var i=n("7b0b"),o=Math.floor,s="".replace,r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,l,u){var p=n+t.length,d=c.length,h=a;return void 0!==l&&(l=i(l),h=r),s.call(u,h,(function(i,s){var r;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(p);case"<":r=l[s.slice(1,-1)];break;default:var a=+s;if(0===a)return i;if(a>d){var u=o(a/10);return 0===u?i:u<=d?void 0===c[u-1]?s.charAt(1):c[u-1]+s.charAt(1):i}r=c[a-1]}return void 0===r?"":r}))}},5319:function(t,e,n){"use strict";var i=n("d784"),o=n("825a"),s=n("50c4"),r=n("a691"),a=n("1d80"),c=n("8aa5"),l=n("0cb2"),u=n("14c3"),p=Math.max,d=Math.min;i("replace",2,(function(t,e,n,i){var h=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,f=i.REPLACE_KEEPS_$0,m=h?"$":"$0";return[function(n,i){var o=a(this),s=null==n?void 0:n[t];return void 0!==s?s.call(n,o,i):e.call(String(o),n,i)},function(t,i){if(!h&&f||"string"==typeof i&&-1===i.indexOf(m)){var a=n(e,t,this,i);if(a.done)return a.value}var v=o(t),g=String(this),b="function"==typeof i;b||(i=String(i));var y=v.global;if(y){var $=v.unicode;v.lastIndex=0}for(var C=[];;){var _=u(v,g);if(null===_)break;if(C.push(_),!y)break;""===String(_[0])&&(v.lastIndex=c(g,s(v.lastIndex),$))}for(var S,E="",w=0,k=0;k<C.length;k++){_=C[k];for(var x=String(_[0]),O=p(d(r(_.index),g.length),0),j=[],I=1;I<_.length;I++)j.push(void 0===(S=_[I])?S:String(S));var A=_.groups;if(b){var P=[x].concat(j,O,g);void 0!==A&&P.push(A);var D=String(i.apply(void 0,P))}else D=l(x,g,O,j,A,i);O>=w&&(E+=g.slice(w,O)+D,w=O+x.length)}return E+g.slice(w)}]}))},"7c5f":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("b0c0"),n("ac1f"),n("5319");var i=n("ef77"),o=n("221a"),s=n("685b"),r=n("c9d2"),a=n("41cb");function c(t){return Object(a.c)()({method:"GET",url:"/api/quests",params:t})}var l={name:"quest",data:function(){return{options:{sources:null},post:{id:"",content:"",source_id:"",level:0,remark:""},loading:!1,processing:!1}},computed:{},methods:{toPublish:function(){var t=this;this.post.source_id?this.post.content?this.post.level>=1&&this.post.level<=5?this.post.remark?(this.processing=!0,s.a.save({type:"quest",source_id:this.post.source_id,level:this.post.level,user_nickname:r.a.getInfo().name,content:this.post.content,remark:this.post.remark}).then((function(e){200===(e=e.data).code?(t.$message({message:"提交成功，请等待审核",type:"success"}),setTimeout((function(){t.$router.push({name:"wiki_post",params:{type:"quest"}})}),500)):t.$message({message:"".concat(e.message),type:"warning"})})).finally((function(){t.processing=!1}))):this.$message({message:"请简单描述本次修订说明",type:"warning"}):this.$message({message:"请选择适合的综合难度",type:"warning"}):this.$message({message:"要编写攻略正文哦",type:"warning"}):this.$message({message:"请选择要修订攻略的任务",type:"warning"})},search_handle:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loading=!0,c({keyword:e,limit:10}).then((function(e){200===(e=e.data).code&&(t.options.sources=e.data.data),t.loading=!1}))}},created:function(){this.search_handle("");var t=this.$route.params.source_id;this.post.source_id=t?parseInt(t):null},watch:{"post.source_id":{handler:function(){var t=this;this.post.source_id&&(this.loading=!0,s.a.newest("quest",this.post.source_id,0).then((function(e){var n=e.data;if(200===n.code){var i=n.data.post,o=n.data.source;if(i){t.post.source_id=parseInt(i.source_id),t.post.level=i.level||1,t.post.remark="";var s=i.content;s=(s=(s=s.replace(/(<p>)?\s*◆任务难度 [★]+\s*(<\/p>)?/gi,"")).replace(/(<p>)?\s*◆花费时长 [★]+\s*(<\/p>)?/gi,"")).replace(/(<p>)?\s*◆任务攻略\s*(<\/p>)?/gi,""),t.post.content=s}else t.post.source_id=t.post.source_id?parseInt(t.post.source_id):"",t.post.level=0,t.post.remark="",t.post.content="";if(o){var r=!1;for(var a in t.options.sources=t.options.sources||[],t.options.sources)if(t.options.sources[a].id==o.id){r=!0;break}r||t.options.sources.push(o)}}})).finally((function(){t.loading=!1})))}}},components:{"publish-header":i.a,Tinymce:o.a}},u=(n("c9f3"),n("2877")),p=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"任务百科"}},[t._t("header")],2),n("el-form",{staticClass:"m-publish-post"},[n("div",{staticClass:"m-publish-source"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("选择任务 *")]),n("el-select",{staticClass:"u-source-id",attrs:{filterable:"",remote:"",disabled:!!t.post.id,placeholder:"输入任务名称（可适配中括号形式）「回车」进行搜索","remote-method":t.search_handle,loading:t.options.loading},model:{value:t.post.source_id,callback:function(e){t.$set(t.post,"source_id",e)},expression:"post.source_id"}},t._l(t.options.sources,(function(e){return n("el-option",{key:e.id,attrs:{label:e.Name,value:e.id}},[n("div",{staticClass:"m-selector-item"},[n("i",{staticClass:"el-icon-collection u-icon"}),n("span",{staticClass:"u-name",domProps:{textContent:t._s(e.Name)}})])])})),1)],1),n("div",{staticClass:"m-publish-level"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("综合难度 *")]),n("el-rate",{staticClass:"u-level",model:{value:t.post.level,callback:function(e){t.$set(t.post,"level",e)},expression:"post.level"}})],1),n("div",{staticClass:"m-publish-remark"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("修订说明 *")]),n("el-input",{attrs:{maxlength:200,minlength:1,"show-word-limit":"",required:"",placeholder:"请简单描述一下本次修订的说明"},model:{value:t.post.remark,callback:function(e){t.$set(t.post,"remark",e)},expression:"post.remark"}})],1),n("div",{staticClass:"m-publish-content"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("攻略正文 *")]),n("Tinymce",{attrs:{attachmentEnable:!0,resourceEnable:!0,height:400},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1),n("div",{staticClass:"m-publish-commit"},[n("el-divider",{attrs:{"content-position":"left"}}),n("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"primary",disabled:t.processing},on:{click:t.toPublish}},[t._v("提交攻略 ")])],1)])],1)}),[],!1,null,"0a0f92ac",null);e.default=p.exports},"948f":function(t,e,n){},a15b:function(t,e,n){"use strict";var i=n("23e7"),o=n("44ad"),s=n("fc6a"),r=n("a640"),a=[].join,c=o!=Object,l=r("join",",");i({target:"Array",proto:!0,forced:c||!l},{join:function(t){return a.call(s(this),void 0===t?",":t)}})},c4a9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var i=function(){return"undefined"!=typeof window?window:t},o=function(){var t=i();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},c9f3:function(t,e,n){"use strict";n("948f")},ca72:function(t,e,n){"use strict";var i,o=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],s=function(t){return-1!==o.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},r=function(t,e,n){var i=e.$props.value?e.$props.value:"",o=e.$props.initialValue?e.$props.initialValue:"";n.setContent(i||(e.initialized?e.cache:o)),e.$watch("value",(function(t,i){n&&"string"==typeof t&&t!==i&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)})),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(n)?n.join(" "):n;e.on(i||"change input undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))}(e,n),function(t,e,n){Object.keys(e).filter(s).forEach((function(i){var o=e[i];"function"==typeof o&&("onInit"===i?o(t,n):n.on(i.substring(2),(function(t){return o(t,n)})))}))}(t,e.$listeners,n),e.initialized=!0},a=0,c=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++a+String(e)},l=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},u=function(){return{listeners:[],scriptId:c("tiny-script"),scriptLoaded:!1}},p=(i=u(),{load:function(t,e,n){i.scriptLoaded?n():(i.listeners.push(n),t.getElementById(i.scriptId)||function(t,e,n,i){var o=e.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=t,o.src=n;var s=function(){o.removeEventListener("load",s),i()};o.addEventListener("load",s),e.head&&e.head.appendChild(o)}(i.scriptId,t,e,(function(){i.listeners.forEach((function(t){return t()})),i.scriptLoaded=!0})))},reinitialize:function(){i=u()}}),d=n("c4a9"),h={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},f=function(){return(f=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},m=function(t){return function(){var e,n,i,o=f(f({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,l(e).concat(l(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return r(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(i=t.element)&&"textarea"===i.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),Object(d.a)().init(o)}},v={props:h,created:function(){this.elementId=this.$props.id||c("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(d.a)())m(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;p.load(this.element.ownerDocument,n,m(this))}},beforeDestroy:function(){null!==Object(d.a)()&&Object(d.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(d.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&m(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}};e.a=v},ef77:function(t,e,n){"use strict";var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){this.$router.push("/")}},mounted:function(){},components:{}},o=n("2877"),s=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports}}]);
//# sourceMappingURL=chunk-c3cebd62.9d483b76.js.map