(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7ab6b532"],{"0711":function(t,e,a){"use strict";var i={name:"",props:["data"],components:{},data:function(){return{visible:"0"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.visible=t},visible:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},filters:{},created:function(){},mounted:function(){}},n=(a("cbe6"),a("2877")),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-visible"},[a("el-form-item",{attrs:{label:"阅读权限"}},[a("el-radio-group",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("el-radio",{attrs:{label:"0"}},[t._v("公开")]),a("el-radio",{attrs:{label:"1"}},[t._v("仅自己可见")]),a("el-radio",{attrs:{label:"2"}},[t._v("仅亲友可见")]),a("el-radio",{attrs:{label:"3",disabled:""}},[t._v("密码可见")]),a("el-radio",{attrs:{label:"4",disabled:""}},[t._v("付费可见")]),a("el-radio",{attrs:{label:"5",disabled:""}},[t._v("粉丝可见")])],1)],1)],1)}),[],!1,null,"509226a0",null);e.a=s.exports},1686:function(t,e,a){"use strict";a("78c0")},"1fb2":function(t,e,a){"use strict";var i={name:"publish_original",props:["data"],data:function(){return{original:~~this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.original=~~t},original:{deep:!0,handler:function(t){this.$emit("update",~~t)}}},computed:{},methods:{},mounted:function(){},components:{}},n=a("2877"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-original"},[a("el-form-item",{attrs:{label:"原创"}},[a("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.original,callback:function(e){t.original=e},expression:"original"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},4517:function(t,e,a){},"46f1":function(t){t.exports=JSON.parse('{"std":["北天药宗","白帝风云","其它"],"origin":["藏剑山庄","物华天宝","其它"],"all":["北天药宗","白帝风云","藏剑山庄","物华天宝","其它"]}')},"505f":function(t,e,a){"use strict";var i={name:"publish_client",props:["data","forbidAll"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},n=a("2877"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-client"},[a("el-form-item",{attrs:{label:"版本"}},[a("el-radio-group",{model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[a("el-radio",{attrs:{label:"std"}},[t._v("正式服")]),a("el-radio",{attrs:{label:"origin"}},[t._v("怀旧服")]),t.forbidAll?t._e():a("el-radio",{attrs:{label:"all"}},[t._v("全部")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},"546f":function(t,e,a){"use strict";a("7dac")},"647d":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"f",(function(){return c})),a.d(e,"e",(function(){return r}));a("99af");var i=a("41cb");function n(t){return Object(i.b)().get("/api/cms/posts/user/my/union",{params:t})}function s(t){return Object(i.b)().delete("/api/cms/post/".concat(t,"/authors/quit"))}function l(t){return Object(i.b)().get("/api/cms/post/".concat(t,"/authors"))}function o(t,e){return Object(i.b)().post("/api/cms/post/".concat(t,"/author/").concat(e),{label:"撰稿",r_edit:1})}function c(t,e,a){return Object(i.b)().put("/api/cms/post/".concat(t,"/author/").concat(e),a)}function r(t,e){return Object(i.b)().delete("/api/cms/post/".concat(t,"/author/").concat(e))}},6962:function(t,e,a){"use strict";a("dd68")},"6c2b":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return l})),a.d(e,"d",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"e",(function(){return r})),a.d(e,"a",(function(){return u}));a("99af");var i=a("41cb"),n=a("4328");function s(){return Object(i.c)()({method:"GET",url:"/api/post/collection/legal_tags"})}function l(t){return Object(i.c)()({method:"GET",url:"/api/post/collection/".concat(t)})}function o(t){return Object(i.c)()({method:"GET",url:"/api/my/post/collections",params:t})}function c(t){return Object(i.c)()({method:"POST",url:"/api/post/collection",data:n.stringify({action:t.id?"update":"create",collection:t})})}function r(t){return t?Object(i.c)()({method:"PUT",url:"/api/post/collection/remove",data:n.stringify({id:t})}):null}function u(t){return Object(i.b)().post("/api/cms/post/".concat(t.post_type,"-").concat(t.post_id,"/append-to-collection/").concat(t.post_collection),{title:t.post_title})}},"78c0":function(t,e,a){},"7c7e":function(t,e,a){"use strict";var i=a("53ca");a("b64b");e.a=function(t){return!t||(!(!Array.isArray(t)||t.length)||"object"==Object(i.a)(t)&&!Object.keys(t).length)}},"7dac":function(t,e,a){},"8cfe":function(t,e,a){"use strict";a.r(e);var i=a("2909"),n=(a("d3b7"),a("2ef0")),s=a.n(n),l=a("85e4"),o=a("46d4"),c=(a("caad"),a("b0c0"),a("0f32")),r=function(t,e,a){(function(t){var e,a;return!!["macro","jx3dat","fb","bps","tool","bbs"].includes(t.$route.name)&&(!(null!==(e=t.$route.query)&&void 0!==e&&e.mode)||"default"===(null===(a=t.$route.query)||void 0===a?void 0:a.mode))})(t)&&t.$store.state.db.setItem(e,a).then((function(){t.$notify({title:"保存成功",message:"本地草稿保存成功",type:"success"})}))},u=(a.n(c)()(r,3e3),a("221a")),p=a("ef77"),d=a("d0a1"),m=a("1fb2"),h=a("505f"),f=a("d8e2"),b=a("d0b4"),v=a("d95e"),_=(a("a434"),a("159b"),a("25f0"),a("c9d2")),g=a("bd13"),C=a("65c2"),x=a("7c7e"),y=a("0644"),k=a.n(y),$=(a("aa47"),{data:[{name:"",icon:13,talent:"",macro:"",speed:"",equip:"",equip_type:"jx3box",desc:""}]}),w={name:"publishMacro",props:["data","client"],components:{},data:function(){return{macros:this.data,activeIndex:"1",nickname:_.a.getInfo().name,equip_types:{jx3box:"魔盒清单"}}},model:{prop:"data",event:"update"},watch:{data:{immediate:!0,deep:!0,handler:function(t){!t||Object(x.a)(t)?this.macros=s.a.cloneDeep($):this.macros=t}},macros:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{addMacro:function(){if(this.macros.data.length>7)this.$alert("已经达到添加上限","消息",{confirmButtonText:"确定"});else{var t=this.macros.data.length+1+"";this.macros.data.push({name:"",icon:13,talent:"",macro:"",speed:"",equip:"",equip_type:"",desc:""}),this.activeIndex=t}},removeMacro:function(t){var e=this;console.log(t),this.macros.data.length<2?this.$alert("必须保留1个宏","消息",{confirmButtonText:"确定"}):this.$alert("确定删除这个宏吗，删除后无法找回","消息",{confirmButtonText:"确定",callback:function(a){if("confirm"==a){var i=~~t-1;e.macros.data.splice(i,1),e.activeIndex="1"}}})},check:function(){this.macros.data.forEach((function(t,e){t.name||(t.name="未标题-"+e)}))},checkDataName:function(t){var e=Object(g.a)(t.name).removeSpace().kill().toString();e?this.$set(t,"name",e):this.$notify.error({title:"错误",message:"宏名称不允许包含特殊字符,不能为空"})},checkTalent:function(t){try{JSON.parse(t.talent)}catch(t){this.$notify.error({title:"错误",message:"奇穴编码格式错误"})}},icon:function(t){var e=isNaN(t.icon)?13:~~t.icon;return e=Math.max(0,Math.min(e,3e4)),this.$set(t,"icon",e),C.__iconPath+"icon/"+e+".png"}},filters:{},created:function(){},mounted:function(){}},O=a("2877"),j=Object(O.a)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-macro"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("宏")]),a("div",{staticClass:"m-macro-box"},[a("div",{staticClass:"m-macro-header"},[a("el-button",{staticClass:"m-macro-addbutton",attrs:{icon:"el-icon-circle-plus-outline",type:"primary"},on:{click:t.addMacro}},[t._v("添加宏")]),t._m(0),t._m(1)],1),a("el-tabs",{staticClass:"tabs-sort",attrs:{type:"card",closable:""},on:{"tab-remove":t.removeMacro},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},t._l(t.macros.data,(function(e,i){return a("el-tab-pane",{key:i,attrs:{name:i+1+""}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("img",{staticClass:"u-tabicon",attrs:{src:t.icon(e)}}),t._v(" "+t._s(i+1+"号位-"+e.name)+" ")]),a("div",{staticClass:"m-macro-cloud m-macro-item"},[a("h5",{staticClass:"u-title"},[t._v(" 云端宏图标/名称 "),a("a",{staticClass:"u-icon-links",attrs:{href:"/app/icons",target:"_blank"}},[a("i",{staticClass:"el-icon-question"}),t._v(" 图标大全 ")])]),a("div",{staticClass:"u-group"},[a("div",{staticClass:"u-subblock m-macro-icon"},[a("el-input",{attrs:{placeholder:"图标ID",minlength:1,maxlength:10,max:3e4,min:0},model:{value:e.icon,callback:function(a){t.$set(e,"icon",a)},expression:"item.icon"}},[a("template",{slot:"prepend"},[a("img",{staticClass:"u-icon",attrs:{src:t.icon(e)}})])],2)],1),a("div",{staticClass:"u-subblock m-macro-name"},[a("el-input",{attrs:{placeholder:"每个宏名称请使用自己名下唯一命名",minlength:1,maxlength:20,"show-word-limit":""},on:{change:function(a){return t.checkDataName(e)}},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}},[a("template",{slot:"prepend"},[a("b",{staticClass:"u-feed"},[t._v(t._s(t.nickname)+"#"+t._s(e.name))])])],2)],1)])]),"origin"!=t.client?a("div",{staticClass:"m-macro-talent m-macro-item"},[a("h5",{staticClass:"u-title"},[t._v("奇穴方案")]),a("div",{staticClass:"m-macro-talent-simulator"},[a("div",{staticClass:"qx-container"})]),a("el-input",{attrs:{placeholder:"奇穴方案编码"},on:{change:function(a){return t.checkTalent(e)}},model:{value:e.talent,callback:function(a){t.$set(e,"talent",a)},expression:"item.talent"}},[a("template",{slot:"prepend"},[a("a",{staticClass:"u-get",attrs:{target:"_blank",href:"/app/talent"}},[a("i",{staticClass:"el-icon-warning"}),t._v(" 获取编码 ")])])],2)],1):t._e(),"origin"===t.client?a("div",{staticClass:"m-macro-talent m-macro-item"},[a("h5",{staticClass:"u-title"},[t._v("镇派方案")]),a("div",{staticClass:"m-macro-talent-simulator"},[a("div",{staticClass:"qx-container"})]),a("el-input",{attrs:{placeholder:"镇派方案编码"},on:{change:function(a){return t.checkTalent(e)}},model:{value:e.talent,callback:function(a){t.$set(e,"talent",a)},expression:"item.talent"}},[a("template",{slot:"prepend"},[a("a",{staticClass:"u-get",attrs:{target:"_blank",href:"/app/talent2"}},[a("i",{staticClass:"el-icon-warning"}),t._v(" 获取编码 ")])])],2)],1):t._e(),a("div",{staticClass:"m-macro-macro"},[a("h5",{staticClass:"u-title"},[t._v(" 宏内容 "),a("a",{staticClass:"u-icon-links",attrs:{href:"/app/macroeditor",target:"_blank"}},[a("i",{staticClass:"el-icon-question"}),t._v(" 智能中文宏编辑器 ")])]),a("el-input",{attrs:{placeholder:"注释请写在说明中,勿写在宏内部",minlength:1,maxlength:128,"show-word-limit":"",type:"textarea",rows:12},model:{value:e.macro,callback:function(a){t.$set(e,"macro",a)},expression:"item.macro"}})],1),a("el-form-item",{staticClass:"m-macro-misc",attrs:{label:"其它"}},[a("el-row",[a("el-col",{staticClass:"u-speed",attrs:{span:8}},[a("el-input",{attrs:{placeholder:"填写推荐的急速阈值"},model:{value:e.speed,callback:function(a){t.$set(e,"speed",a)},expression:"item.speed"}},[a("template",{slot:"prepend"},[t._v("急速阈值")])],2)],1),a("el-col",{attrs:{span:8}})],1)],1),a("el-form-item",{staticClass:"m-macro-desc",attrs:{label:"说明"}},[a("el-input",{attrs:{type:"textarea",placeholder:"重要说明（会出现在宏第一行）"},model:{value:e.desc,callback:function(a){t.$set(e,"desc",a)},expression:"item.desc"}})],1),a("div",{staticClass:"m-macro-op"},[a("el-button",{staticClass:"u-macro-remove-fix",attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"small"},on:{click:function(e){return t.removeMacro(i+1)}}},[t._v("移除本宏")])],1)],1)})),1)],1),t._t("default")],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"m-macro-docs el-button el-button--primary is-plain el-button--small",attrs:{target:"_blank",href:"/tool/265/"}},[e("i",{staticClass:"el-icon-s-management"}),this._v(" 宏命令完整参考手册 ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"m-macro-help el-button el-button--success is-plain el-button--small",attrs:{href:"/tool/14671/",target:"_blank"}},[e("i",{staticClass:"el-icon-info"}),this._v(" 点击查看发布帮助 ")])}],!1,null,null,null).exports,z=a("ad8d"),E=a("c979"),I=a("b13e"),q=a("cc72"),T=a("0711"),D=a("db12"),P=(a("a9e3"),a("b76a")),A=a.n(P),N=a("41cb");var B={name:"PublishPz",props:{data:{type:Array,default:function(){return[{id:"",name:""}]}},limit:{type:Number,default:8},query:{type:Object,default:function(){return{}}}},components:{draggable:A.a},data:function(){return{list:[],loading:!1,default_item:{id:"",name:""},options:[],search_loading:!1}},model:{prop:"data",event:"update"},watch:{data:{immediate:!0,deep:!0,handler:function(t){t&&t.length?this.list=t:this.list=[{id:"",name:""}]}},list:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{params:function(){var t={};return t=Object.assign(t,this.query)}},methods:{loadOptions:function(){var t,e=this;(t=this.params,Object(N.b)().get("/api/cms/app/pz/my",{params:t})).then((function(t){e.options=t.data.data.list||[]}))},listOptions:function(t){t&&this.loadOptions()},searchOptions:function(t){Object.assign(this.params,{search:t});this.loadOptions()},addItem:function(){this.list.push(k()(this.default_item))},removeItem:function(t){this.list.splice(t,1)}},filters:{getLink:function(t){return Object(l.getLink)("pz",t)}},created:function(){},mounted:function(){}},M=(a("9c6a"),Object(O.a)(B,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-pz"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("配装")]),a("div",{staticClass:"m-publish-pz-header"},[a("el-button",{staticClass:"u-add u-btn",attrs:{icon:"el-icon-circle-plus-outline",type:"primary",disabled:t.list.length>=t.limit},on:{click:t.addItem}},[t._v("添加配装")]),t._t("prepend")],2),a("div",{staticClass:"m-publish-pz-list"},[a("draggable",t._b({staticClass:"u-list",attrs:{list:t.list,draggable:".u-item"}},"draggable",{animation:150,scrollSensitivity:200},!1),t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"u-item"},[a("span",{staticClass:"u-item-order"},[t._v(t._s(i+1)+".")]),a("i",{staticClass:"u-item-drag el-icon-rank"}),a("div",{staticClass:"u-item-select"},[a("el-select",{attrs:{placeholder:"请选择配装方案",clearable:"",filterable:"",remote:"",loading:t.search_loading,"remote-method":t.searchOptions,size:"small"},on:{"visible-change":t.listOptions},model:{value:e.id,callback:function(a){t.$set(e,"id",a)},expression:"item.id"}},t._l(t.options,(function(e){return a("el-option",{key:e.id,staticClass:"m-publish-pz-select-option",attrs:{label:e.title,value:e.id}},[a("i",{staticClass:"u-client i-client",class:e.client||"std"},[t._v(t._s("origin"==e.client?"怀旧服":"正式服"))]),a("i",{staticClass:"u-level i-client",class:e.client||"std"},[t._v("Lv."+t._s(e.global_level||"-"))]),a("span",[t._v(t._s(e.title))])])})),1)],1),a("div",{staticClass:"u-item-name"},[a("el-input",{attrs:{placeholder:"请输入配装简称",clearable:"",maxlength:12,minlength:1,"show-word-limit":!0,size:"small"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),a("div",{staticClass:"u-item-op"},[e.id?a("a",{staticClass:"preview el-button delete el-button--text",attrs:{href:t._f("getLink")(e.id)}},[a("i",{staticClass:"el-icon-view"}),t._v("预览 ")]):t._e(),a("el-button",{staticClass:"delete",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.removeItem(i)}}},[t._v("删除")])],1)])})),0)],1),t._t("append"),t._t("default")],2)}),[],!1,null,null,null).exports),S=a("c402");a("fb92");var J=a("6c2b"),L={name:"macro",components:{Tinymce:u.a,"publish-header":p.a,"publish-title":d.a,"publish-original":m.a,"publish-client":h.a,"publish-lang":f.a,"publish-zlp":b.a,"publish-xf":v.a,"publish-macro":j,"publish-collection":z.a,"publish-collection-collapse":E.a,"publish-banner":I.a,"publish-comment":q.a,"publish-visible":T.a,"publish-authors":D.a,"publish-pz":M},data:function(){return{loading:!1,processing:!1,post:{ID:"",post_status:"publish",post_type:"macro",post_title:"",post_subtype:"通用",post_meta:{data:[{name:"",icon:13,talent:"",macro:"",speed:"",equip:"",equip_type:"jx3box",desc:""}]},pz:[],post_content:"",post_mode:"tinymce",original:0,client:"std",lang:"cn",zlp:"",post_excerpt:"",post_banner:"",post_collection:"",collection_collapse:0,comment:0,visible:0},localTimer:"",webTimer:""}},computed:{id:function(){return~~this.post.ID},data:function(){return this.id?[this.id,this.post]:[this.post]},pz_query:function(){var t,e=null===(t=o[this.post.post_subtype])||void 0===t?void 0:t.id,a={};return e&&(a={mount:e}),a}},methods:{init:function(){var t=this;return this.loading=!0,this.$route.params.id?Object(S.d)(this.$route.params.id).then((function(e){return t.post=e.data.data,e.data.data})).finally((function(){t.loading=!1})):new Promise((function(t,e){t()})).finally((function(){t.loading=!1}))},publish:function(t,e){var a=this;this.post.post_status=t,this.processing=!0,this.build(),S.e.apply(void 0,Object(i.a)(this.data)).then((function(t){var e=t.data.data;return e})).then((function(t){a.afterPublish(t).finally((function(){a.done(e,t)}))})).finally((function(){a.processing=!1}))},build:function(){this.post.meta_2=~~s.a.get(o[this.post.post_subtype],"id")||0},done:function(t,e){t?(this.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(l.getLink)(e.post_type,e.ID)}),500)):(this.$notify({title:"保存成功",message:"云端草稿保存成功",type:"success"}),this.post=e,this.$route.params.id||this.$router.push({params:{id:e.ID}}))},afterPublish:function(t){return~~t.post_collection?Object(J.a)({post_type:t.post_type,post_id:t.ID,post_collection:t.post_collection,post_title:t.post_title}):new Promise((function(t,e){t(!0)}))},autoSave:function(){this.id||this.publish("draft",!1);var t=this.post.post_type+this.id;r(this,t,this.post)}},created:function(){var t=this;this.post.client=this.$store.state.client,this.init().then((function(e){e&&(!t.post.zlp&&e.meta_1&&(t.post.zlp=e.meta_1),!t.post.lang&&e.meta_4&&(t.post.lang=e.meta_4))})),this.localTimer=setInterval((function(){t.autoSave()}),3e4)},watch:{"$route.params.id":function(t){t&&this.init()}},beforeDestroy:function(){clearInterval(this.localTimer)}},G=(a("1686"),Object(O.a)(L,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box p-publish-macro"},[a("publish-header",{attrs:{name:"云端宏"}}),a("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[a("publish-title",{model:{value:t.post.post_title,callback:function(e){t.$set(t.post,"post_title",e)},expression:"post.post_title"}}),a("div",{staticClass:"m-publish-info"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("信息")]),a("publish-original",{model:{value:t.post.original,callback:function(e){t.$set(t.post,"original",e)},expression:"post.original"}}),a("publish-client",{attrs:{forbidAll:!0},model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}}),a("publish-lang",{model:{value:t.post.lang,callback:function(e){t.$set(t.post,"lang",e)},expression:"post.lang"}}),a("publish-zlp",{attrs:{client:t.post.client},model:{value:t.post.zlp,callback:function(e){t.$set(t.post,"zlp",e)},expression:"post.zlp"}}),a("publish-xf",{attrs:{client:t.post.client},model:{value:t.post.post_subtype,callback:function(e){t.$set(t.post,"post_subtype",e)},expression:"post.post_subtype"}})],1),a("publish-macro",{attrs:{client:t.post.client},model:{value:t.post.post_meta,callback:function(e){t.$set(t.post,"post_meta",e)},expression:"post.post_meta"}},[a("publish-pz",{attrs:{limit:8,query:t.pz_query},model:{value:t.post.pz,callback:function(e){t.$set(t.post,"pz",e)},expression:"post.pz"}},[a("span",{staticClass:"u-pz-tip",attrs:{slot:"prepend"},slot:"prepend"},[a("i",{staticClass:"el-icon-warning-outline"}),t._v(" 展示你推荐的配装（不超过8个，非必选） ")])])],1),a("div",{staticClass:"m-publish-content"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("正文")]),a("Tinymce",{directives:[{name:"show",rawName:"v-show",value:!t.post.post_mode||"tinymce"==t.post.post_mode,expression:"!post.post_mode || post.post_mode == 'tinymce'"}],attrs:{attachmentEnable:!0,resourceEnable:!0},model:{value:t.post.post_content,callback:function(e){t.$set(t.post,"post_content",e)},expression:"post.post_content"}})],1),a("div",{staticClass:"m-publish-append"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("合集")]),a("publish-collection",{attrs:{defaultCollapse:t.post.collection_collapse},model:{value:t.post.post_collection,callback:function(e){t.$set(t.post,"post_collection",e)},expression:"post.post_collection"}},[a("publish-collection-collapse",{model:{value:t.post.collection_collapse,callback:function(e){t.$set(t.post,"collection_collapse",e)},expression:"post.collection_collapse"}})],1)],1),a("div",{staticClass:"m-publish-extend"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("设置")]),a("publish-comment",{model:{value:t.post.comment,callback:function(e){t.$set(t.post,"comment",e)},expression:"post.comment"}}),a("publish-visible",{model:{value:t.post.visible,callback:function(e){t.$set(t.post,"visible",e)},expression:"post.visible"}}),a("publish-authors",{attrs:{id:t.id,uid:t.post.post_author}})],1),a("div",{staticClass:"m-publish-other"},[a("publish-banner",{model:{value:t.post.post_banner,callback:function(e){t.$set(t.post,"post_banner",e)},expression:"post.post_banner"}})],1),a("div",{staticClass:"m-publish-buttons"},[a("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发    布")]),a("el-button",{attrs:{type:"plain",disabled:t.processing},on:{click:function(e){return t.publish("draft",!1)}}},[t._v("保存为草稿")])],1)],1)],1)}),[],!1,null,null,null));e.default=G.exports},"8fdc":function(t,e,a){},"952d":function(t,e,a){"use strict";a("4517")},"9c6a":function(t,e,a){"use strict";a("8fdc")},a367:function(t,e,a){},ad8d:function(t,e,a){"use strict";a("ac1f"),a("841c"),a("a9e3");var i=a("6c2b"),n=a("0644"),s=a.n(n),l={name:"publish_collection",props:["data"],data:function(){return{post_collection:"",collections:[],copyCollections:[],isInit:!0,loading:!1,search:""}},model:{prop:"data",event:"update"},computed:{isEmpty:function(){return!this.search&&!this.collections.length}},watch:{data:{immediate:!0,handler:function(t){this.post_collection=Number(t)||""}},post_collection:{handler:function(t){this.$emit("update",t)}}},methods:{loadCollections:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={keyword:e};Object(i.d)(a).then((function(e){t.collections=e.data.data.data,t.isInit&&(t.copyCollections=s()(t.collections),t.isInit=!1)}))},remoteMethod:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.search=e,this.loading=!0,""!==e){var a={keyword:e};Object(i.d)(a).then((function(e){t.collections=e.data.data.data,t.loading=!1}))}else this.collections=s()(this.copyCollections)},visibleChange:function(t){t&&(this.collections=s()(this.copyCollections))}},mounted:function(){this.loadCollections()},components:{}},o=(a("546f"),a("2877")),c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-collection-relation"},[a("h5",{staticClass:"u-schema"},[a("span",{staticClass:"u-label"},[t._v("关联小册")]),t._t("default"),t._m(0)],2),a("el-select",{staticClass:"u-collection",attrs:{remote:"","remote-method":t.remoteMethod,loading:t.loading,filterable:"",clearable:"",placeholder:"请选择一个小册（可选，非必填，可搜索）"},on:{"visible-change":t.visibleChange},model:{value:t.post_collection,callback:function(e){t.post_collection=e},expression:"post_collection"}},[t._l(t.collections,(function(t,e){return a("el-option",{key:e,attrs:{label:t.title,value:t.id}})})),a("div",{staticClass:"u-collection-null",attrs:{slot:"empty"},slot:"empty"},[a("div",[t._v(" 没有找到匹配结果， "),a("a",{attrs:{href:"/publish/#/collection",target:"_blank"}},[t._v("创建小册")])])])],2),t.isEmpty?a("div",{staticClass:"u-tip"},[a("i",{staticClass:"el-icon-info"}),t._v(" 当前没有任何小册， "),a("router-link",{attrs:{to:"/collection"}},[t._v("创建小册")])],1):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"u-help u-icon-links",attrs:{href:"/tool/20891",target:"_blank"}},[e("i",{staticClass:"el-icon-question"}),this._v(" 小册帮助指南 ")])}],!1,null,null,null);e.a=c.exports},b13e:function(t,e,a){"use strict";a("99af"),a("bc3a");var i=a("65c2"),n=a("85e4"),s=i.__cms+"api/cms/upload",l={name:"post_banner",props:["data"],data:function(){return{banner:this.data,url:s}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}},methods:{done:function(t,e){this.banner=t.data[0]},fail:function(t,e,a){try{var i=JSON.parse(t.message);this.$message.error("[".concat(i.code,"]").concat(i.msg))}catch(t){this.$message.error("网络请求异常")}},clearBanner:function(){this.banner=""}},filters:{showBanner:n.showBanner}},o=(a("6962"),a("2877")),c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-banner"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),a("el-alert",{staticClass:"u-tip",attrs:{title:"首页海报尺寸1100*300，非必选，部分栏目不会展示海报，分享功能将使用该图作为预览图",type:"info","show-icon":""}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.url,"show-file-list":!1,"on-success":t.done,"on-error":t.fail,"with-credentials":"",accept:"image/jpg,image/jpeg,image/gif,image/png,image/bmp"}},[t.banner?a("img",{attrs:{src:t._f("showBanner")(t.banner)}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a("el-button",{staticClass:"u-remove",attrs:{type:"info",size:"mini",icon:"el-icon-circle-close"},on:{click:t.clearBanner}},[t._v("移除海报")])],1)}),[],!1,null,null,null);e.a=c.exports},c979:function(t,e,a){"use strict";var i={name:"PublishCollectionCollpase",props:["data"],components:{},data:function(){return{collection_collapse:!1}},model:{prop:"data",event:"update"},watch:{data:{immediate:!0,handler:function(t){this.collection_collapse=t}},collection_collapse:{handler:function(t){this.$emit("update",t)}}},methods:{},filters:{},created:function(){},mounted:function(){}},n=a("2877"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-checkbox",{staticClass:"u-collapse",attrs:{"true-label":1,"false-label":0},model:{value:t.collection_collapse,callback:function(e){t.collection_collapse=e},expression:"collection_collapse"}},[t._v("默认展开")])}),[],!1,null,null,null);e.a=s.exports},cbe6:function(t,e,a){"use strict";a("a367")},cc72:function(t,e,a){"use strict";var i={name:"publish_comment",props:["data"],data:function(){return{comment:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.comment=t},comment:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},n=a("2877"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-comment"},[a("el-form-item",{attrs:{label:"评论开关"}},[a("el-switch",{attrs:{"active-color":"#13ce66","active-value":0,"inactive-value":1},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},d0a1:function(t,e,a){"use strict";var i={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},n=a("2877"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():a("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),a("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},d0b4:function(t,e,a){"use strict";var i=a("46f1"),n={name:"publish_zlp",props:["data","client"],data:function(){return{zlp:this.data,zlps:i.std}},model:{prop:"data",event:"update"},watch:{data:function(t){this.zlp=t},zlp:{deep:!0,handler:function(t){this.$emit("update",t)}},client:{handler:function(t){t=t||"std",this.zlps=i[t]},immediate:!0}},computed:{},methods:{},mounted:function(){},components:{}},s=a("2877"),l=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-zlp"},[a("el-form-item",{attrs:{label:"资料片"}},[a("el-select",{attrs:{filterable:"","allow-create":!0,placeholder:"请选择适应资料片"},model:{value:t.zlp,callback:function(e){t.zlp=e},expression:"zlp"}},t._l(t.zlps,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),t._t("default")],2)}),[],!1,null,"0b0f27fe",null);e.a=l.exports},d8e2:function(t,e,a){"use strict";var i={name:"publish_lang",props:["data"],data:function(){return{lang:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.lang=t},lang:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},n=a("2877"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-lang"},[a("el-form-item",{attrs:{label:"语言"}},[a("el-radio-group",{model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}},[a("el-radio",{attrs:{label:"cn"}},[t._v("简体中文")]),a("el-radio",{attrs:{label:"tr"}},[t._v("繁體中文")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},d95e:function(t,e,a){"use strict";var i=a("46d4"),n=a("65c2"),s={name:"publish_xf",props:["data","client"],data:function(){return{xf:this.data,xfmap:i,exact_client:this.client||"std"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.xf=t},xf:{deep:!0,handler:function(t){this.$emit("update",t)}},client:function(t){this.exact_client=t||"std"}},computed:{},methods:{},filters:{xficon:function(t){return n.__imgPath+"image/xf/"+t+".png"}},mounted:function(){},components:{}},l=a("2877"),o=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-xf"},[a("el-form-item",{attrs:{label:"心法"}},t._l(t.xfmap,(function(e,i){return a("el-radio",{directives:[{name:"show",rawName:"v-show",value:e.client.includes(t.exact_client),expression:"item.client.includes(exact_client)"}],key:i,attrs:{label:e.name},model:{value:t.xf,callback:function(e){t.xf=e},expression:"xf"}},[a("img",{staticClass:"u-pic",attrs:{src:t._f("xficon")(e.id),alt:e.name}}),a("span",{staticClass:"u-txt"},[t._v(t._s(e.name))])])})),1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},db12:function(t,e,a){"use strict";a("a434");var i=a("1dfe"),n=a("647d"),s=a("85e4"),l=a("c9d2"),o={name:"PublishAuthors",props:["id","uid"],components:{UserPop:i.a},data:function(){return{list:[],visible:!1}},computed:{isSuper:function(){return l.a.getInfo().uid==this.uid}},watch:{id:{immediate:!0,handler:function(t){t&&this.loadAuthors()}}},methods:{openPop:function(){this.visible=!0},addAuthor:function(t){var e=this;Object(n.a)(this.id,t.ID).then((function(a){e.$notify({title:"添加成功",message:"联合创作者添加成功",type:"success"}),e.list.push({post_author_info:t,label:"撰稿",status:0})}))},loadAuthors:function(){var t=this;Object(n.b)(this.id).then((function(e){var a,i;t.list=null===(a=e.data)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.other_authors}))},update:function(t){var e=this;this.$prompt("修改展示项，例如：撰稿/修订/主创/校稿..","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(a){var i=a.value;Object(n.f)(e.id,t.post_author_info.ID,{label:i,r_edit:1}).then((function(){t.label=i,e.$notify({title:"修改成功",message:"备注更新成功",type:"success"})}))}))},remove:function(t,e){var a=this;Object(n.e)(this.id,t.post_author_info.ID).then((function(t){a.$notify({title:"删除成功",message:"成功移除联合创作者",type:"success"}),a.list.splice(e,1)}))}},filters:{showAvatar:function(t){return Object(s.showAvatar)(t)}},created:function(){},mounted:function(){}},c=(a("952d"),a("2877")),r=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.id&&t.isSuper?a("div",{staticClass:"m-publish-authors"},[a("el-form-item",{attrs:{label:"联合创作"}},[a("div",{staticClass:"u-list"},[t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"u-item"},[e.status?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"等待被邀请者确认",placement:"top"}},[a("i",{staticClass:"u-status el-icon-loading"})]),a("img",{staticClass:"u-avatar",attrs:{src:t._f("showAvatar")(e.post_author_info.user_avatar)}}),a("span",{staticClass:"u-name"},[t._v(" "+t._s(e.post_author_info.display_name)+" "),a("span",{staticClass:"u-label"},[t._v("("+t._s(e.label||"撰稿")+")")])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改备注",placement:"top"}},[a("i",{staticClass:"u-edit el-icon-edit",on:{click:function(a){return t.update(e)}}})]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除",placement:"top"}},[a("i",{staticClass:"u-delete el-icon-delete",on:{click:function(a){return t.remove(e,i)}}})])],1)})),a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.openPop}},[t._v("+ 添加联合创作者")])],2),a("UserPop",{attrs:{title:"添加用户"},on:{confirm:t.addAuthor},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})],1)],1):t._e()}),[],!1,null,null,null);e.a=r.exports},dd68:function(t,e,a){},ef77:function(t,e,a){"use strict";var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){},components:{}},n=a("2877"),s=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},fb92:function(t,e,a){"use strict";a("99af");function i(t){return t<10?"0"+t:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=t.getFullYear(),s=t.getMonth()+1,l=t.getDate(),o=a?"".concat(n).concat(e).concat(i(s)).concat(e).concat(i(l)):"".concat(n).concat(e).concat(s).concat(e).concat(l);return o}}}]);
//# sourceMappingURL=chunk-7ab6b532.7edb59e1.js.map