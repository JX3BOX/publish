(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0626bed1"],{"0711":function(t,e,n){"use strict";var i={name:"",props:["data"],components:{},data:function(){return{visible:"0"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.visible=t},visible:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},filters:{},created:function(){},mounted:function(){}},a=(n("cbe6"),n("2877")),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-visible"},[n("el-form-item",{attrs:{label:"阅读权限"}},[n("el-radio-group",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("el-radio",{attrs:{label:"0"}},[t._v("公开")]),n("el-radio",{attrs:{label:"1"}},[t._v("仅自己可见")]),n("el-radio",{attrs:{label:"2"}},[t._v("仅亲友可见")]),n("el-radio",{attrs:{label:"3",disabled:""}},[t._v("密码可见")]),n("el-radio",{attrs:{label:"4",disabled:""}},[t._v("付费可见")]),n("el-radio",{attrs:{label:"5",disabled:""}},[t._v("粉丝可见")])],1)],1)],1)}),[],!1,null,"509226a0",null);e.a=o.exports},1686:function(t,e,n){"use strict";n("78c0")},"1fb2":function(t,e,n){"use strict";var i={name:"publish_original",props:["data"],data:function(){return{original:~~this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.original=~~t},original:{deep:!0,handler:function(t){this.$emit("update",~~t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-original"},[n("el-form-item",{attrs:{label:"原创"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.original,callback:function(e){t.original=e},expression:"original"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},"505f":function(t,e,n){"use strict";var i={name:"publish_client",props:["data","forbidAll"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-client"},[n("el-form-item",{attrs:{label:"版本"}},[n("el-radio-group",{model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[n("el-radio",{attrs:{label:"std"}},[t._v("正式服")]),n("el-radio",{attrs:{label:"origin"}},[t._v("怀旧服")]),t.forbidAll?t._e():n("el-radio",{attrs:{label:"all"}},[t._v("全部")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}},"546f":function(t,e,n){"use strict";n("7dac")},6962:function(t,e,n){"use strict";n("dd68")},"6c2b":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return r}));var i=n("41cb"),a=n("4328");function o(){return Object(i.c)()({method:"GET",url:"/api/post/collection/legal_tags"})}function s(t){return Object(i.c)()({method:"GET",url:"/api/post/collection/".concat(t)})}function l(t){return Object(i.c)()({method:"GET",url:"/api/my/post/collections",params:t})}function c(t){return Object(i.c)()({method:"POST",url:"/api/post/collection",data:a.stringify({action:t.id?"update":"create",collection:t})})}function r(t){return t?Object(i.c)()({method:"PUT",url:"/api/post/collection/remove",data:a.stringify({id:t})}):null}},"78c0":function(t,e,n){},"7c7e":function(t,e,n){"use strict";var i=n("53ca");n("b64b");e.a=function(t){return!t||(!(!Array.isArray(t)||t.length)||"object"==Object(i.a)(t)&&!Object.keys(t).length)}},"7dac":function(t,e,n){},"8cfe":function(t,e,n){"use strict";n.r(e);var i=n("2909"),a=(n("d3b7"),n("2ef0")),o=n.n(a),s=n("85e4"),l=n("46d4"),c=n("221a"),r=n("ef77"),u=n("d0a1"),p=n("1fb2"),d=n("505f"),m=n("d8e2"),h=n("d0b4"),f=n("d95e"),b=(n("b0c0"),n("a434"),n("159b"),n("25f0"),n("c9d2")),v=n("bd13"),_=n("65c2"),g=n("7c7e"),y={data:[{name:"",icon:13,talent:"",macro:"",speed:"",equip:"",equip_type:"jx3box",desc:""}]},x={name:"publishMacro",props:["data","client"],components:{},data:function(){return{macros:this.data,activeIndex:"1",nickname:b.a.getInfo().name,equip_types:{jx3box:"魔盒清单"}}},model:{prop:"data",event:"update"},watch:{data:{immediate:!0,deep:!0,handler:function(t){!t||Object(g.a)(t)?this.macros=o.a.cloneDeep(y):this.macros=t}},macros:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{addMacro:function(){if(this.macros.data.length>7)this.$alert("已经达到添加上限","消息",{confirmButtonText:"确定"});else{var t=this.macros.data.length+1+"";this.macros.data.push({name:"",icon:13,talent:"",macro:"",speed:"",equip:"",equip_type:"",desc:""}),this.activeIndex=t}},removeMacro:function(t){var e=this;this.macros.data.length<2?this.$alert("必须保留1个宏","消息",{confirmButtonText:"确定"}):this.$alert("确定删除这个宏吗，删除后无法找回","消息",{confirmButtonText:"确定",callback:function(n){if("confirm"==n){var i=~~t-1;e.macros.data.splice(i,1),e.activeIndex=i+""}}})},check:function(){this.macros.data.forEach((function(t,e){t.name||(t.name="未标题-"+e)}))},checkDataName:function(t){var e=Object(v.a)(t.name).removeSpace().kill().toString();e?this.$set(t,"name",e):this.$notify.error({title:"错误",message:"宏名称不允许包含特殊字符,不能为空"})},checkTalent:function(t){try{JSON.parse(t.talent)}catch(t){this.$notify.error({title:"错误",message:"奇穴编码格式错误"})}},icon:function(t){var e=isNaN(t.icon)?13:~~t.icon;return e=Math.max(0,Math.min(e,3e4)),this.$set(t,"icon",e),_.__iconPath+"icon/"+e+".png"}},filters:{},created:function(){},mounted:function(){}},C=n("2877"),$=Object(C.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-macro"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("宏")]),n("div",{staticClass:"m-macro-box"},[n("div",{staticClass:"m-macro-header"},[n("el-button",{staticClass:"m-macro-addbutton",attrs:{icon:"el-icon-circle-plus-outline",type:"primary"},on:{click:t.addMacro}},[t._v("添加宏")]),t._m(0),t._m(1)],1),n("el-tabs",{attrs:{type:"card",closable:""},on:{"tab-remove":t.removeMacro},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},t._l(t.macros.data,(function(e,i){return n("el-tab-pane",{key:i,attrs:{name:i+1+""}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"u-tabicon",attrs:{src:t.icon(e)}}),t._v(" "+t._s(i+1+"号位-"+e.name)+" ")]),n("div",{staticClass:"m-macro-cloud m-macro-item"},[n("h5",{staticClass:"u-title"},[t._v(" 云端宏图标/名称 "),n("a",{staticClass:"u-icon-links",attrs:{href:"/app/icons",target:"_blank"}},[n("i",{staticClass:"el-icon-question"}),t._v(" 图标大全 ")])]),n("div",{staticClass:"u-group"},[n("div",{staticClass:"u-subblock m-macro-icon"},[n("el-input",{attrs:{placeholder:"图标ID",minlength:1,maxlength:10,max:3e4,min:0},model:{value:e.icon,callback:function(n){t.$set(e,"icon",n)},expression:"item.icon"}},[n("template",{slot:"prepend"},[n("img",{staticClass:"u-icon",attrs:{src:t.icon(e)}})])],2)],1),n("div",{staticClass:"u-subblock m-macro-name"},[n("el-input",{attrs:{placeholder:"每个宏名称请使用自己名下唯一命名",minlength:1,maxlength:20,"show-word-limit":""},on:{change:function(n){return t.checkDataName(e)}},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"item.name"}},[n("template",{slot:"prepend"},[n("b",{staticClass:"u-feed"},[t._v(t._s(t.nickname)+"#"+t._s(e.name))])])],2)],1)])]),"origin"!=t.client?n("div",{staticClass:"m-macro-talent m-macro-item"},[n("h5",{staticClass:"u-title"},[t._v("奇穴方案")]),n("div",{staticClass:"m-macro-talent-simulator"},[n("div",{staticClass:"qx-container"})]),n("el-input",{attrs:{placeholder:"奇穴方案编码"},on:{change:function(n){return t.checkTalent(e)}},model:{value:e.talent,callback:function(n){t.$set(e,"talent",n)},expression:"item.talent"}},[n("template",{slot:"prepend"},[n("a",{staticClass:"u-get",attrs:{target:"_blank",href:"/app/talent"}},[n("i",{staticClass:"el-icon-warning"}),t._v(" 获取编码 ")])])],2)],1):t._e(),"origin"===t.client?n("div",{staticClass:"m-macro-talent m-macro-item"},[n("h5",{staticClass:"u-title"},[t._v("镇派方案")]),n("div",{staticClass:"m-macro-talent-simulator"},[n("div",{staticClass:"qx-container"})]),n("el-input",{attrs:{placeholder:"镇派方案编码"},on:{change:function(n){return t.checkTalent(e)}},model:{value:e.talent,callback:function(n){t.$set(e,"talent",n)},expression:"item.talent"}},[n("template",{slot:"prepend"},[n("a",{staticClass:"u-get",attrs:{target:"_blank",href:"/app/talent2"}},[n("i",{staticClass:"el-icon-warning"}),t._v(" 获取编码 ")])])],2)],1):t._e(),n("div",{staticClass:"m-macro-macro"},[n("h5",{staticClass:"u-title"},[t._v(" 宏内容 "),n("a",{staticClass:"u-icon-links",attrs:{href:"/app/macroeditor",target:"_blank"}},[n("i",{staticClass:"el-icon-question"}),t._v(" 智能中文宏编辑器 ")])]),n("el-input",{attrs:{placeholder:"注释请写在说明中,勿写在宏内部",minlength:1,maxlength:128,"show-word-limit":"",type:"textarea",rows:12},model:{value:e.macro,callback:function(n){t.$set(e,"macro",n)},expression:"item.macro"}})],1),n("div",{staticClass:"m-macro-equip"},[n("h5",{staticClass:"u-schema"},[t._v(" 配装方案 "),n("a",{staticClass:"u-icon-links",attrs:{href:"/tool/19309",target:"_blank"}},[n("i",{staticClass:"el-icon-question"}),t._v(" 魔盒清单使用指南 ")])]),n("el-input",{attrs:{placeholder:"配装方案编号"},model:{value:e.equip,callback:function(n){t.$set(e,"equip",n)},expression:"item.equip"}},[n("template",{slot:"prepend"},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.equip_type,callback:function(n){t.$set(e,"equip_type",n)},expression:"item.equip_type"}},t._l(t.equip_types,(function(t,e){return n("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1)],2)],1),n("el-form-item",{staticClass:"m-macro-misc",attrs:{label:"其它"}},[n("el-row",[n("el-col",{staticClass:"u-speed",attrs:{span:8}},[n("el-input",{attrs:{placeholder:"填写推荐的急速阈值"},model:{value:e.speed,callback:function(n){t.$set(e,"speed",n)},expression:"item.speed"}},[n("template",{slot:"prepend"},[t._v("急速阈值")])],2)],1),n("el-col",{attrs:{span:8}})],1)],1),n("el-form-item",{staticClass:"m-macro-desc",attrs:{label:"说明"}},[n("el-input",{attrs:{type:"textarea",placeholder:"重要说明（会出现在宏第一行）"},model:{value:e.desc,callback:function(n){t.$set(e,"desc",n)},expression:"item.desc"}})],1),n("div",{staticClass:"m-macro-op"},[n("el-button",{staticClass:"u-macro-remove-fix",attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"small"},on:{click:function(e){return t.removeMacro(i)}}},[t._v("移除本宏")])],1)],1)})),1)],1),t._t("default")],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"m-macro-docs el-button el-button--primary is-plain el-button--small",attrs:{target:"_blank",href:"/tool/265/"}},[e("i",{staticClass:"el-icon-s-management"}),this._v(" 宏命令完整参考手册 ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"m-macro-help el-button el-button--success is-plain el-button--small",attrs:{href:"/tool/14671/",target:"_blank"}},[e("i",{staticClass:"el-icon-info"}),this._v(" 点击查看发布帮助 ")])}],!1,null,null,null).exports,k=n("ad8d"),w=n("b13e"),j=n("cc72"),O=n("0711"),S=n("c402"),E=n("41cb"),z=n("fb92");function D(t){var e=function(t){var e=t.author,n=t.ID,i={author:e,user_id:~~t.post_author||0,post_id:n,post_status:t.post_status,data:{},lang:t.lang||"cn",original:!!t.original,client:t.client},a=l[t.post_subtype].id+"";return t.post_meta.data.forEach((function(o,s){var l="";l+="【奇穴】";try{l+=(o.talent&&JSON.parse(o.talent)).sq}catch(t){console.log("奇穴编码解析失败",t)}l+="\n【最后更新于】",l+=Object(z.a)(new Date),l+="\n【来源】JX3BOX",o.name||(o.name=Date.now()),i.data[o.name]={author:e,key:o.name,version:Date.now(),icon:~~o.icon||13,xf:a||0,data:o.macro,desc:l,about:_.__Root+"macro/"+n,client:t.client}})),i}(t);return console.log("正在执行redis同步作业:",e),Object(E.d)().post("/api/macro/publish",e)}var I={name:"macro",components:{Tinymce:c.a,"publish-header":r.a,"publish-title":u.a,"publish-original":p.a,"publish-client":d.a,"publish-lang":m.a,"publish-zlp":h.a,"publish-xf":f.a,"publish-macro":$,"publish-collection":k.a,"publish-banner":w.a,"publish-comment":j.a,"publish-visible":O.a},data:function(){return{loading:!1,processing:!1,post:{ID:"",post_status:"publish",post_type:"macro",post_title:"",post_subtype:"通用",post_meta:{data:[{name:"",icon:13,talent:"",macro:"",speed:"",equip:"",equip_type:"jx3box",desc:""}]},post_content:"",post_mode:"tinymce",original:0,client:"std",lang:"cn",zlp:"",post_excerpt:"",post_banner:"",post_collection:"",comment:0,visible:0}}},computed:{id:function(){return~~this.post.ID},data:function(){return this.id?[this.id,this.post]:[this.post]}},methods:{init:function(){var t=this;return this.loading=!0,this.$route.params.id?Object(S.d)(this.$route.params.id).then((function(e){return t.post=e.data.data,e.data.data})).finally((function(){t.loading=!1})):new Promise((function(t,e){t()})).finally((function(){t.loading=!1}))},publish:function(t,e){var n=this;this.post.post_status=t,this.processing=!0,this.build(),S.e.apply(void 0,Object(i.a)(this.data)).then((function(t){var i=t.data.data;D(i).then((function(t){n.done(e,i)}))})).finally((function(){n.processing=!1}))},build:function(){this.post.meta_2=~~o.a.get(l[this.post.post_subtype],"id")||0},done:function(t,e){t?(this.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(s.getLink)(e.post_type,e.ID)}),500)):(this.$notify({title:"保存成功",message:"云端草稿保存成功",type:"success"}),this.post=e,this.$route.params.id||this.$router.push({params:{id:e.ID}}))}},created:function(){var t=this;this.post.client=this.$store.state.client,this.init().then((function(e){e&&(!t.post.zlp&&e.meta_1&&(t.post.zlp=e.meta_1),!t.post.lang&&e.meta_4&&(t.post.lang=e.meta_4))}))},watch:{"$route.params.id":function(t){t&&this.init()}}},M=(n("1686"),Object(C.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"云端宏"}}),n("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[n("publish-title",{model:{value:t.post.post_title,callback:function(e){t.$set(t.post,"post_title",e)},expression:"post.post_title"}}),n("div",{staticClass:"m-publish-info"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("信息")]),n("publish-original",{model:{value:t.post.original,callback:function(e){t.$set(t.post,"original",e)},expression:"post.original"}}),n("publish-client",{attrs:{forbidAll:!0},model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}}),n("publish-lang",{model:{value:t.post.lang,callback:function(e){t.$set(t.post,"lang",e)},expression:"post.lang"}}),n("publish-zlp",{attrs:{client:t.post.client},model:{value:t.post.zlp,callback:function(e){t.$set(t.post,"zlp",e)},expression:"post.zlp"}}),n("publish-xf",{attrs:{client:t.post.client},model:{value:t.post.post_subtype,callback:function(e){t.$set(t.post,"post_subtype",e)},expression:"post.post_subtype"}})],1),n("publish-macro",{attrs:{client:t.post.client},model:{value:t.post.post_meta,callback:function(e){t.$set(t.post,"post_meta",e)},expression:"post.post_meta"}}),n("div",{staticClass:"m-publish-content"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("正文")]),n("Tinymce",{directives:[{name:"show",rawName:"v-show",value:!t.post.post_mode||"tinymce"==t.post.post_mode,expression:"!post.post_mode || post.post_mode == 'tinymce'"}],attrs:{attachmentEnable:!0,resourceEnable:!0},model:{value:t.post.post_content,callback:function(e){t.$set(t.post,"post_content",e)},expression:"post.post_content"}})],1),n("div",{staticClass:"m-publish-append"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("附加")]),n("publish-collection",{model:{value:t.post.post_collection,callback:function(e){t.$set(t.post,"post_collection",e)},expression:"post.post_collection"}})],1),n("div",{staticClass:"m-publish-extend"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("设置")]),n("publish-comment",{model:{value:t.post.comment,callback:function(e){t.$set(t.post,"comment",e)},expression:"post.comment"}}),n("publish-visible",{model:{value:t.post.visible,callback:function(e){t.$set(t.post,"visible",e)},expression:"post.visible"}})],1),n("div",{staticClass:"m-publish-other"},[n("publish-banner",{model:{value:t.post.post_banner,callback:function(e){t.$set(t.post,"post_banner",e)},expression:"post.post_banner"}})],1),n("div",{staticClass:"m-publish-buttons"},[n("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发    布")]),n("el-button",{attrs:{type:"plain",disabled:t.processing},on:{click:function(e){return t.publish("draft",!1)}}},[t._v("保存为草稿")])],1)],1)],1)}),[],!1,null,null,null));e.default=M.exports},a367:function(t,e,n){},ad8d:function(t,e,n){"use strict";n("ac1f"),n("841c");var i=n("6c2b"),a=n("0644"),o=n.n(a),s={name:"publish_collection",props:["data"],data:function(){return{collection:this.data,collections:[],copyCollections:[],isInit:!0,loading:!1,search:""}},model:{prop:"data",event:"update"},watch:{data:function(t){this.collection=t},collection:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{loadCollections:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n={keyword:e};Object(i.c)(n).then((function(e){t.collections=e.data.data.data,t.isInit&&(t.copyCollections=o()(t.collections),t.isInit=!1)}))},remoteMethod:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.search=e,this.loading=!0,""!==e){var n={keyword:e};Object(i.c)(n).then((function(e){t.collections=e.data.data.data,t.loading=!1}))}else this.collections=o()(this.copyCollections)},handleBlur:function(){this.collections=o()(this.copyCollections)}},mounted:function(){this.loadCollections()},components:{}},l=(n("546f"),n("2877")),c=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-collection"},[t._m(0),n("el-select",{staticStyle:{width:"100%"},attrs:{remote:"","remote-method":t.remoteMethod,loading:t.loading,filterable:"",clearable:"",placeholder:"请输入小册ID（可选，非必填，可搜索）"},on:{blur:t.handleBlur},model:{value:t.collection,callback:function(e){t.collection=e},expression:"collection"}},t._l(t.collections,(function(t,e){return n("el-option",{key:e,attrs:{label:t.title,value:t.id}})})),1),t._t("default")],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"u-schema"},[this._v(" 关联小册 "),e("a",{staticClass:"u-icon-links",attrs:{href:"https://www.jx3box.com/tool/20891",target:"_blank"}},[e("i",{staticClass:"el-icon-question"}),this._v(" 小册帮助指南 ")])])}],!1,null,null,null);e.a=c.exports},b13e:function(t,e,n){"use strict";n("99af"),n("bc3a");var i=n("65c2"),a=n("85e4"),o=i.__cms+"api/cms/upload",s={name:"post_banner",props:["data"],data:function(){return{banner:this.data,url:o}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}},methods:{done:function(t,e){this.banner=t.data[0]},fail:function(t,e,n){try{var i=JSON.parse(t.message);this.$message.error("[".concat(i.code,"]").concat(i.msg))}catch(t){this.$message.error("网络请求异常")}},clearBanner:function(){this.banner=""}},filters:{showBanner:a.showBanner}},l=(n("6962"),n("2877")),c=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-banner"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),n("el-alert",{staticClass:"u-tip",attrs:{title:"首页海报尺寸1100*300，非必选，部分栏目不会展示海报，分享功能将使用该图作为预览图",type:"info","show-icon":""}}),n("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.url,"show-file-list":!1,"on-success":t.done,"on-error":t.fail,"with-credentials":"",accept:"image/jpg,image/jpeg,image/gif,image/png,image/bmp"}},[t.banner?n("img",{attrs:{src:t._f("showBanner")(t.banner)}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),n("el-button",{staticClass:"u-remove",attrs:{type:"info",size:"mini",icon:"el-icon-circle-close"},on:{click:t.clearBanner}},[t._v("移除海报")])],1)}),[],!1,null,null,null);e.a=c.exports},bd13:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=function(t){return Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase()};class a{constructor(t){if("string"!==i(t))throw new Error("[Sterilizer::init] params should be string");this._symbols={"`":"`","~":"~","!":"!","@":"@","#":"#",$:"\\$","%":"%","^":"\\^","&":"&","*":"\\*","-":"\\-",_:"_","=":"=","+":"+","(":"\\(",")":"\\)","[":"\\[","]":"\\]","{":"\\{","}":"\\}","|":"\\|","\\":"\\\\","/":"/","?":"\\?",":":":",";":";","'":"'",'"':'"',">":">","<":"<",",":",",".":"\\."},this.symbols=Object.keys(this._symbols),this.regs=Object.values(this._symbols),this.str=t,this._str=t}toString(){return this._str}_detected(t){let e=i(t);if(!["string","array","set"].includes(e))throw new Error("[Sterilizer::remove] params should be string|array|set");return t}_sterilize(t){t=[...t].join("");let e=new RegExp(`[${t}]`,"gm");return this._str=this._str.replace(e,""),this}kill(t){let e=null;if(null==t)e=new Set(this.regs);else{this._detected(t),e=new Set;let n=new Set(t);for(let t of n)this.symbols.includes(t)&&e.add(this._symbols[t])}return this._sterilize(e)}live(t){this._detected(t);let e=new Set(this.regs);for(let n of t)this.symbols.includes(n)&&e.delete(this._symbols[n]);return this._sterilize(e)}safe(){return this.kill(["&","<",">",'"',"'","+",":","/","?","=","#","%"])}removeHSC(){return this.kill(["&","<",">",'"',"'"])}removeURL(){return this.kill(["+",":","/","?","=","&","#","%"])}removeSpace(){return this._str=this._str.replace(/\s/gm,""),this}remove(t,e){let n=new RegExp(""+t,"gm");return e=void 0!==e?e:"",this._str=this._str.replace(n,e),this}removeHTMLtag(){return this._str=this._str.replace(/<[^>]+>/gm,""),this}isDirty(t){return t?this.str.includes(t):this.symbols.some(t=>this.str.includes(t))}}function o(t){return new a(t)}},c4a9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var i=function(){return"undefined"!=typeof window?window:t},a=function(){var t=i();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},ca72:function(t,e,n){"use strict";var i,a=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],o=function(t){return-1!==a.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},s=function(t,e,n){var i=e.$props.value?e.$props.value:"",a=e.$props.initialValue?e.$props.initialValue:"";n.setContent(i||(e.initialized?e.cache:a)),e.$watch("value",(function(t,i){n&&"string"==typeof t&&t!==i&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)})),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(n)?n.join(" "):n;e.on(i||"change input undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))}(e,n),function(t,e,n){Object.keys(e).filter(o).forEach((function(i){var a=e[i];"function"==typeof a&&("onInit"===i?a(t,n):n.on(i.substring(2),(function(t){return a(t,n)})))}))}(t,e.$listeners,n),e.initialized=!0},l=0,c=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++l+String(e)},r=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},u=function(){return{listeners:[],scriptId:c("tiny-script"),scriptLoaded:!1}},p=(i=u(),{load:function(t,e,n){i.scriptLoaded?n():(i.listeners.push(n),t.getElementById(i.scriptId)||function(t,e,n,i){var a=e.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=t,a.src=n;var o=function(){a.removeEventListener("load",o),i()};a.addEventListener("load",o),e.head&&e.head.appendChild(a)}(i.scriptId,t,e,(function(){i.listeners.forEach((function(t){return t()})),i.scriptLoaded=!0})))},reinitialize:function(){i=u()}}),d=n("c4a9"),m={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},h=function(){return(h=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},f=function(t){return function(){var e,n,i,a=h(h({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,r(e).concat(r(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return s(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(i=t.element)&&"textarea"===i.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),Object(d.a)().init(a)}},b={props:m,created:function(){this.elementId=this.$props.id||c("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(d.a)())f(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;p.load(this.element.ownerDocument,n,f(this))}},beforeDestroy:function(){null!==Object(d.a)()&&Object(d.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(d.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&f(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}};e.a=b},cbe6:function(t,e,n){"use strict";n("a367")},cc72:function(t,e,n){"use strict";var i={name:"publish_comment",props:["data"],data:function(){return{comment:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.comment=t},comment:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-comment"},[n("el-form-item",{attrs:{label:"评论开关"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":0,"inactive-value":1},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},d0a1:function(t,e,n){"use strict";var i={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():n("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),n("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},d0b4:function(t,e,n){"use strict";var i=n("fc61"),a={name:"publish_zlp",props:["data","client"],data:function(){return{zlp:this.data,zlps:i.std}},model:{prop:"data",event:"update"},watch:{data:function(t){this.zlp=t},zlp:{deep:!0,handler:function(t){this.$emit("update",t)}},client:{handler:function(t){t=t||"std",this.zlps=i[t]},immediate:!0}},computed:{},methods:{},mounted:function(){},components:{}},o=n("2877"),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-zlp"},[n("el-form-item",{attrs:{label:"资料片"}},[n("el-select",{attrs:{filterable:"","allow-create":!0,placeholder:"请选择适应资料片"},model:{value:t.zlp,callback:function(e){t.zlp=e},expression:"zlp"}},t._l(t.zlps,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},d8e2:function(t,e,n){"use strict";var i={name:"publish_lang",props:["data"],data:function(){return{lang:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.lang=t},lang:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-lang"},[n("el-form-item",{attrs:{label:"语言"}},[n("el-radio-group",{model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}},[n("el-radio",{attrs:{label:"cn"}},[t._v("简体中文")]),n("el-radio",{attrs:{label:"tr"}},[t._v("繁體中文")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},d95e:function(t,e,n){"use strict";var i=n("46d4"),a=n("65c2"),o={name:"publish_xf",props:["data","client"],data:function(){return{xf:this.data,xfmap:i,exact_client:this.client||"std"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.xf=t},xf:{deep:!0,handler:function(t){this.$emit("update",t)}},client:function(t){this.exact_client=t||"std"}},computed:{},methods:{},filters:{xficon:function(t){return a.__imgPath+"image/xf/"+t+".png"}},mounted:function(){},components:{}},s=n("2877"),l=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-xf"},[n("el-form-item",{attrs:{label:"心法"}},t._l(t.xfmap,(function(e,i){return n("el-radio",{directives:[{name:"show",rawName:"v-show",value:e.client.includes(t.exact_client),expression:"item.client.includes(exact_client)"}],key:i,attrs:{label:e.name},model:{value:t.xf,callback:function(e){t.xf=e},expression:"xf"}},[n("img",{staticClass:"u-pic",attrs:{src:t._f("xficon")(e.id),alt:e.name}}),n("span",{staticClass:"u-txt"},[t._v(t._s(e.name))])])})),1),t._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},dd68:function(t,e,n){},ef77:function(t,e,n){"use strict";var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){this.$router.push("/")}},mounted:function(){},components:{}},a=n("2877"),o=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},fb92:function(t,e,n){"use strict";n("99af");function i(t){return t<10?"0"+t:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=t.getFullYear(),o=t.getMonth()+1,s=t.getDate(),l=n?"".concat(a).concat(e).concat(i(o)).concat(e).concat(i(s)):"".concat(a).concat(e).concat(o).concat(e).concat(s);return l}}}]);
//# sourceMappingURL=chunk-0626bed1.ee0c9972.js.map