(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d33fc9ba"],{"0711":function(t,e,n){"use strict";var i={name:"",props:["data"],components:{},data:function(){return{visible:"0"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.visible=t},visible:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},filters:{},created:function(){},mounted:function(){}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-visible"},[n("el-form-item",{attrs:{label:"阅读权限"}},[n("el-radio-group",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("el-radio",{attrs:{label:"0"}},[t._v("公开")]),n("el-radio",{attrs:{label:"1"}},[t._v("仅自己可见")]),n("el-radio",{attrs:{label:"2"}},[t._v("仅亲友可见")]),n("el-radio",{attrs:{label:"3",disabled:""}},[t._v("密码可见")]),n("el-radio",{attrs:{label:"4",disabled:""}},[t._v("付费可见")]),n("el-radio",{attrs:{label:"5",disabled:""}},[t._v("粉丝可见")])],1)],1)],1)}),[],!1,null,null,null);e.a=o.exports},"0cb2":function(t,e,n){var i=n("7b0b"),a=Math.floor,o="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,c,u){var p=n+t.length,d=r.length,f=l;return void 0!==c&&(c=i(c),f=s),o.call(u,f,(function(i,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(p);case"<":s=c[o.slice(1,-1)];break;default:var l=+o;if(0===l)return i;if(l>d){var u=a(l/10);return 0===u?i:u<=d?void 0===r[u-1]?o.charAt(1):r[u-1]+o.charAt(1):i}s=r[l-1]}return void 0===s?"":s}))}},"1fb2":function(t,e,n){"use strict";var i={name:"publish_original",props:["data"],data:function(){return{original:~~this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.original=~~t},original:{deep:!0,handler:function(t){this.$emit("update",~~t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-original"},[n("el-form-item",{attrs:{label:"原创"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.original,callback:function(e){t.original=e},expression:"original"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},"34b2":function(t,e,n){"use strict";n("b969")},"505f":function(t,e,n){"use strict";var i={name:"publish_client",props:["data"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-client"},[n("el-form-item",{attrs:{label:"版本"}},[n("el-radio-group",{model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[n("el-radio",{attrs:{label:"std"}},[t._v("正式服")]),n("el-radio",{attrs:{label:"origin"}},[t._v("怀旧服")]),n("el-radio",{attrs:{label:"all"}},[t._v("全部")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},5319:function(t,e,n){"use strict";var i=n("d784"),a=n("825a"),o=n("50c4"),s=n("a691"),l=n("1d80"),r=n("8aa5"),c=n("0cb2"),u=n("14c3"),p=Math.max,d=Math.min;i("replace",2,(function(t,e,n,i){var f=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=i.REPLACE_KEEPS_$0,h=f?"$":"$0";return[function(n,i){var a=l(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,a,i):e.call(String(a),n,i)},function(t,i){if(!f&&b||"string"==typeof i&&-1===i.indexOf(h)){var l=n(e,t,this,i);if(l.done)return l.value}var m=a(t),v=String(this),_="function"==typeof i;_||(i=String(i));var g=m.global;if(g){var y=m.unicode;m.lastIndex=0}for(var $=[];;){var w=u(m,v);if(null===w)break;if($.push(w),!g)break;""===String(w[0])&&(m.lastIndex=r(v,o(m.lastIndex),y))}for(var x,C="",k=0,S=0;S<$.length;S++){w=$[S];for(var j=String(w[0]),O=p(d(s(w.index),v.length),0),E=[],z=1;z<w.length;z++)E.push(void 0===(x=w[z])?x:String(x));var D=w.groups;if(_){var I=[j].concat(E,O,v);void 0!==D&&I.push(D);var A=String(i.apply(void 0,I))}else A=c(j,v,O,E,D,i);O>=k&&(C+=v.slice(k,O)+A,k=O+j.length)}return C+v.slice(k)}]}))},"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}},6962:function(t,e,n){"use strict";n("dd68")},"7c7e":function(t,e,n){"use strict";var i=n("53ca");n("b64b");e.a=function(t){return!t||(!(!Array.isArray(t)||t.length)||"object"==Object(i.a)(t)&&!Object.keys(t).length)}},8863:function(t,e,n){"use strict";n.r(e);var i=n("2909"),a=(n("d3b7"),n("85e4")),o=n("221a"),s=n("ef77"),l=n("d0a1"),r=n("1fb2"),c=n("505f"),u=(n("b64b"),n("2ef0")),p=n.n(u),d=n("7c7e"),f=n("ffe2"),b=n("65c2"),h={fb_zlp:"",fb_name:"",fb_boss:[],fb_level:[]},m={name:"publishFb",props:["data","client"],components:{},data:function(){return{fbdata:this.data,fbmap:f}},model:{prop:"data",event:"update"},watch:{data:{immediate:!0,deep:!0,handler:function(t){!t||Object(d.a)(t)?this.fbdata=p.a.cloneDeep(h):this.fbdata=t}},fbdata:{deep:!0,handler:function(t){this.$emit("update",t)}},"fbdata.fb_zlp":function(t){t&&this.$emit("updateMeta",{key:"zlp",val:t})},"fbdata.fb_name":function(t){t&&this.$emit("updateMeta",{key:"post_subtype",val:t})}},computed:{zlp_list:function(){return Object.keys(this.fbmap)},fb_list:function(){var t=this.fbmap[this.fbdata.fb_zlp];return p.a.get(t,"dungeon")},boss_list:function(){return p.a.get(this.fb_list[this.fbdata.fb_name],"boss")},level_list:function(){return p.a.get(this.fb_list[this.fbdata.fb_name],"maps")},default_zlp:function(){return p.a.get(this.zlp_list,0)},default_fb:function(){return Object.keys(this.fbmap[this.default_zlp].dungeon)[0]}},methods:{setDefaultOption:function(){this.fbdata.fb_name=this.default_fb,this.fbdata.fb_zlp=this.default_zlp},zlpChange:function(t){var e=Object.keys(this.fbmap[t].dungeon)[0];this.fbdata.fb_name=e,this.fbdata.fb_boss=[],this.fbdata.fb_level=[]},subtypeChange:function(t){this.fbdata.fb_boss=[],this.fbdata.fb_level=[]}},filters:{thumbnail:function(t){return b.__imgPath+t+"?v="+Date.now()}},created:function(){this.setDefaultOption()},mounted:function(){}},v=n("2877"),_=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-fb"},[t.zlp_list?n("el-form-item",{attrs:{label:"资料片"}},t._l(t.zlp_list,(function(e,i){return n("el-radio",{directives:[{name:"show",rawName:"v-show",value:t.fbmap[e].client.includes(t.client),expression:"fbmap[zlp]['client'].includes(client)"}],key:i,attrs:{label:e,border:""},on:{change:function(n){return t.zlpChange(e)}},model:{value:t.fbdata.fb_zlp,callback:function(e){t.$set(t.fbdata,"fb_zlp",e)},expression:"fbdata.fb_zlp"}},[t._v(" "+t._s(e)+" "),n("span",{staticClass:"u-level"},[t._v(t._s(t.fbmap[e].level))])])})),1):t._e(),t.fb_list?n("el-form-item",{attrs:{label:"副本名称"}},t._l(t.fb_list,(function(e,i){return n("el-radio",{directives:[{name:"show",rawName:"v-show",value:t.fb_list[i].client.includes(t.client),expression:"fb_list[key]['client'].includes(client)"}],key:i,staticClass:"u-fb-thumbnail",attrs:{label:i},on:{change:function(e){return t.subtypeChange(i)}},model:{value:t.fbdata.fb_name,callback:function(e){t.$set(t.fbdata,"fb_name",e)},expression:"fbdata.fb_name"}},[n("img",{attrs:{src:t._f("thumbnail")(e.icon,e.icon),alt:i}}),n("span",[t._v(t._s(i))])])})),1):t._e(),t.boss_list?n("el-form-item",{attrs:{label:"首领名称"}},[n("el-checkbox-group",{model:{value:t.fbdata.fb_boss,callback:function(e){t.$set(t.fbdata,"fb_boss",e)},expression:"fbdata.fb_boss"}},t._l(t.boss_list,(function(e,i){return n("el-checkbox-button",{key:i,attrs:{label:e}},[t._v(t._s(e))])})),1)],1):t._e(),t.level_list?n("el-form-item",{attrs:{label:"难度模式"}},[n("el-checkbox-group",{model:{value:t.fbdata.fb_level,callback:function(e){t.$set(t.fbdata,"fb_level",e)},expression:"fbdata.fb_level"}},t._l(t.level_list,(function(t){return n("el-checkbox",{key:t.mode+t.map_id,attrs:{label:t.mode}})})),1)],1):t._e(),t._t("default")],2)}),[],!1,null,null,null).exports,g=n("ad8d"),y=n("b13e"),$=n("cc72"),w=n("0711"),x=n("c402"),C={name:"fb",components:{Tinymce:o.a,"publish-header":s.a,"publish-title":l.a,"publish-original":r.a,"publish-client":c.a,"publish-fb":_,"publish-collection":g.a,"publish-banner":y.a,"publish-comment":$.a,"publish-visible":w.a},data:function(){return{loading:!1,processing:!1,post:{ID:"",post_status:"publish",post_type:"fb",post_title:"",post_subtype:"",post_meta:{fb_zlp:"",fb_name:"",fb_boss:[],fb_level:[]},post_content:"",post_mode:"tinymce",original:0,client:"std",lang:"cn",zlp:"",post_excerpt:"",post_banner:"",post_collection:"",comment:0,visible:0}}},computed:{id:function(){return~~this.post.ID},data:function(){return this.id?[this.id,this.post]:[this.post]}},methods:{init:function(){var t=this;return this.loading=!0,this.$route.params.id?Object(x.d)(this.$route.params.id).then((function(e){return t.post=e.data.data,e.data.data})).finally((function(){t.loading=!1})):new Promise((function(t,e){t()})).finally((function(){t.loading=!1}))},publish:function(t,e){var n=this;this.post.post_status=t,this.processing=!0,x.e.apply(void 0,Object(i.a)(this.data)).then((function(t){var i=t.data.data;n.done(e,i)})).finally((function(){n.processing=!1}))},done:function(t,e){t?(this.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(a.getLink)(e.post_type,e.ID)}),500)):(this.$notify({title:"保存成功",message:"云端草稿保存成功",type:"success"}),this.post=e,this.$route.params.id||this.$router.push({params:{id:e.ID}}))},updateMeta:function(t){this.post[t.key]=t.val}},created:function(){var t=this;this.post.client=this.$store.state.client,this.init().then((function(e){e&&!t.post.zlp&&e.post_meta.fb_zlp&&(t.post.zlp=e.post_meta.fb_zlp)}))},watch:{"$route.params.id":function(t){t&&this.init()}}},k=(n("34b2"),Object(v.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"副本攻略"}}),n("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[n("publish-title",{model:{value:t.post.post_title,callback:function(e){t.$set(t.post,"post_title",e)},expression:"post.post_title"}}),n("div",{staticClass:"m-publish-info"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("信息")]),n("publish-original",{model:{value:t.post.original,callback:function(e){t.$set(t.post,"original",e)},expression:"post.original"}}),n("publish-client",{model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}}),n("publish-fb",{attrs:{client:t.post.client},on:{updateMeta:t.updateMeta},model:{value:t.post.post_meta,callback:function(e){t.$set(t.post,"post_meta",e)},expression:"post.post_meta"}})],1),n("div",{staticClass:"m-publish-content"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("正文")]),n("Tinymce",{directives:[{name:"show",rawName:"v-show",value:!t.post.post_mode||"tinymce"==t.post.post_mode,expression:"!post.post_mode || post.post_mode == 'tinymce'"}],attrs:{attachmentEnable:!0,resourceEnable:!0},model:{value:t.post.post_content,callback:function(e){t.$set(t.post,"post_content",e)},expression:"post.post_content"}})],1),n("div",{staticClass:"m-publish-append"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("附加")]),n("publish-collection",{model:{value:t.post.post_collection,callback:function(e){t.$set(t.post,"post_collection",e)},expression:"post.post_collection"}})],1),n("div",{staticClass:"m-publish-extend"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("设置")]),n("publish-comment",{model:{value:t.post.comment,callback:function(e){t.$set(t.post,"comment",e)},expression:"post.comment"}}),n("publish-visible",{model:{value:t.post.visible,callback:function(e){t.$set(t.post,"visible",e)},expression:"post.visible"}})],1),n("div",{staticClass:"m-publish-other"},[n("publish-banner",{model:{value:t.post.post_banner,callback:function(e){t.$set(t.post,"post_banner",e)},expression:"post.post_banner"}})],1),n("div",{staticClass:"m-publish-buttons"},[n("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发 布")]),n("el-button",{attrs:{type:"plain",disabled:t.processing},on:{click:function(e){return t.publish("draft",!1)}}},[t._v("保存为草稿")])],1)],1)],1)}),[],!1,null,null,null));e.default=k.exports},a15b:function(t,e,n){"use strict";var i=n("23e7"),a=n("44ad"),o=n("fc6a"),s=n("a640"),l=[].join,r=a!=Object,c=s("join",",");i({target:"Array",proto:!0,forced:r||!c},{join:function(t){return l.call(o(this),void 0===t?",":t)}})},ad8d:function(t,e,n){"use strict";var i={name:"publish_collection",props:["data"],data:function(){return{collection:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.collection=t},collection:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-collection"},[n("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:"请输入小册ID（可选，非必填）"},model:{value:t.collection,callback:function(e){t.collection=e},expression:"collection"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("关联小册")]),n("span",{attrs:{slot:"append"},slot:"append"},[n("a",{attrs:{href:"https://www.jx3box.com/tool/20891",target:"_blank"}},[n("i",{staticClass:"el-icon-question"}),t._v(" 小册帮助指南 ")])])]),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},b13e:function(t,e,n){"use strict";n("99af");var i=n("65c2"),a=n("85e4"),o=i.__server+"upload",s={name:"post_banner",props:["data"],data:function(){return{banner:this.data,url:o}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}},methods:{done:function(t,e){this.banner=t.data.list[0]},fail:function(t,e,n){try{var i=JSON.parse(t.message);this.$message.error("[".concat(i.code,"]").concat(i.msg))}catch(t){this.$message.error("网络请求异常")}},clearBanner:function(){this.banner=""}},filters:{showBanner:a.showBanner}},l=(n("6962"),n("2877")),r=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-banner"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),n("el-alert",{staticClass:"u-tip",attrs:{title:"首页海报尺寸1100*300，非必选，部分栏目不会展示海报，分享功能将使用该图作为预览图",type:"info","show-icon":""}}),n("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.url,"show-file-list":!1,"on-success":t.done,"on-error":t.fail,"with-credentials":"",accept:"image/jpg,image/jpeg,image/gif,image/png,image/bmp"}},[t.banner?n("img",{attrs:{src:t._f("showBanner")(t.banner)}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),n("el-button",{staticClass:"u-remove",attrs:{type:"info",size:"mini",icon:"el-icon-circle-close"},on:{click:t.clearBanner}},[t._v("移除海报")])],1)}),[],!1,null,null,null);e.a=r.exports},b64b:function(t,e,n){var i=n("23e7"),a=n("7b0b"),o=n("df75");i({target:"Object",stat:!0,forced:n("d039")((function(){o(1)}))},{keys:function(t){return o(a(t))}})},b969:function(t,e,n){},c4a9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var i=function(){return"undefined"!=typeof window?window:t},a=function(){var t=i();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},ca72:function(t,e,n){"use strict";var i,a=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],o=function(t){return-1!==a.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},s=function(t,e,n){var i=e.$props.value?e.$props.value:"",a=e.$props.initialValue?e.$props.initialValue:"";n.setContent(i||(e.initialized?e.cache:a)),e.$watch("value",(function(t,i){n&&"string"==typeof t&&t!==i&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)})),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(n)?n.join(" "):n;e.on(i||"change input undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))}(e,n),function(t,e,n){Object.keys(e).filter(o).forEach((function(i){var a=e[i];"function"==typeof a&&("onInit"===i?a(t,n):n.on(i.substring(2),(function(t){return a(t,n)})))}))}(t,e.$listeners,n),e.initialized=!0},l=0,r=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++l+String(e)},c=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},u=function(){return{listeners:[],scriptId:r("tiny-script"),scriptLoaded:!1}},p=(i=u(),{load:function(t,e,n){i.scriptLoaded?n():(i.listeners.push(n),t.getElementById(i.scriptId)||function(t,e,n,i){var a=e.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=t,a.src=n;var o=function(){a.removeEventListener("load",o),i()};a.addEventListener("load",o),e.head&&e.head.appendChild(a)}(i.scriptId,t,e,(function(){i.listeners.forEach((function(t){return t()})),i.scriptLoaded=!0})))},reinitialize:function(){i=u()}}),d=n("c4a9"),f={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},b=function(){return(b=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},h=function(t){return function(){var e,n,i,a=b(b({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,c(e).concat(c(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return s(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(i=t.element)&&"textarea"===i.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),Object(d.a)().init(a)}},m={props:f,created:function(){this.elementId=this.$props.id||r("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(d.a)())h(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;p.load(this.element.ownerDocument,n,h(this))}},beforeDestroy:function(){null!==Object(d.a)()&&Object(d.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(d.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&h(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}};e.a=m},cc72:function(t,e,n){"use strict";var i={name:"publish_comment",props:["data"],data:function(){return{comment:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.comment=t},comment:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-comment"},[n("el-form-item",{attrs:{label:"评论开关"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":0,"inactive-value":1},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},d0a1:function(t,e,n){"use strict";var i={name:"publish_title",props:["data"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-title"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),n("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},dd68:function(t,e,n){},ef77:function(t,e,n){"use strict";var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){this.$router.push("/")}},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports}}]);
//# sourceMappingURL=chunk-d33fc9ba.2f3fe900.js.map