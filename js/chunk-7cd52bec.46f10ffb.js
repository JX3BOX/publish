(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7cd52bec"],{"0711":function(t,e,n){"use strict";var i={name:"",props:["data"],components:{},data:function(){return{visible:"0"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.visible=t},visible:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},filters:{},created:function(){},mounted:function(){}},o=(n("cbe6"),n("2877")),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-visible"},[n("el-form-item",{attrs:{label:"阅读权限"}},[n("el-radio-group",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("el-radio",{attrs:{label:"0"}},[t._v("公开")]),n("el-radio",{attrs:{label:"1"}},[t._v("仅自己可见")]),n("el-radio",{attrs:{label:"2"}},[t._v("仅亲友可见")]),n("el-radio",{attrs:{label:"3",disabled:""}},[t._v("密码可见")]),n("el-radio",{attrs:{label:"4",disabled:""}},[t._v("付费可见")]),n("el-radio",{attrs:{label:"5",disabled:""}},[t._v("粉丝可见")])],1)],1)],1)}),[],!1,null,"509226a0",null);e.a=s.exports},1:function(t,e){},"1b4a":function(t){t.exports=JSON.parse('{"1":"玩法心得","2":"江湖回忆","3":"同人影音","4":"交流讨论"}')},"1fb2":function(t,e,n){"use strict";var i={name:"publish_original",props:["data"],data:function(){return{original:~~this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.original=~~t},original:{deep:!0,handler:function(t){this.$emit("update",~~t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=n("2877"),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-original"},[n("el-form-item",{attrs:{label:"原创"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.original,callback:function(e){t.original=e},expression:"original"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},"1fb9":function(t){t.exports=JSON.parse('{"b":300000,"a":30000}')},"263c":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return r})),n.d(e,"e",(function(){return l}));n("99af");var i=n("41cb"),o=function(t,e){return Object(i.a)().post("/api/cms/post/".concat(t,"/revision"),e)},s=function(t,e){return Object(i.a)().get("/api/cms/post/".concat(t,"/revision/").concat(e))},a=function(t,e){return Object(i.a)().get("/api/cms/post/".concat(t,"/revisions"),{params:e})},c=function(t,e,n){return Object(i.a)().put("/api/cms/post/".concat(t,"/revision/").concat(e),n)},l=function(t,e){return Object(i.a)().delete("/api/cms/post/".concat(t,"/revision/").concat(e))},r=function(t,e){return Object(i.a)().delete("/api/cms/post/".concat(t,"/revisions?list=").concat(e))}},"3c49":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("c7eb"),o=n("1da1"),s=(n("99af"),n("41cb"));var a,c=n("c9d2"),l={computed:{userInfo:function(){return c.a.getInfo()}},methods:{atUser:(a=Object(o.a)(Object(i.a)().mark((function t(e){var n;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(n=sessionStorage.getItem("atAuthor"))){t.next=6;break}return t.next=5,i={sendUserId:this.userInfo.uid,accessUserId:JSON.parse(n),postId:e||this.id,postType:this.post.post_type},o=void 0,a=void 0,c=void 0,l=void 0,o=i.sendUserId,a=i.accessUserId,c=i.postId,l=i.postType,Object(s.e)({mute:!0}).get("/api/horn/".concat(o,"/to/user/article/").concat(l,"/").concat(c),{params:{accessUserId:a}});case 5:sessionStorage.removeItem("atAuthor");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var i,o,a,c,l}),t,this,[[0,8]])}))),function(t){return a.apply(this,arguments)})}}},"41de":function(t,e,n){"use strict";n("a9e3"),n("fb6a"),n("d3b7"),n("d81d"),n("4de4"),n("b0c0"),n("99af"),n("a15b");var i=n("263c"),o=n("e4f1"),s={name:"publish_revision",props:{postId:{type:[String,Number],default:0},visible:{type:Boolean,default:!0},enable:{type:Boolean,default:!1}},data:function(){return{show:!1,data:[],per:10,page:1,total:0,loading:!1,checked:[],checkedAll:!1,isIndeterminate:!1}},computed:{params:function(){return{page:this.page,per:this.per}},isPostMode:function(){return!this.$route.query.mode||"default"==this.$route.query.mode},ready:function(){return this.enable&&this.postId&&this.isPostMode}},filters:{revisionName:function(t){return console.log(t),"版本".concat(t.version)},formatDate:function(t){return Object(o.c)(new Date(t))}},methods:{formatRemark:function(t){return(null==t?void 0:t.length)>10?t.slice(0,10)+"..":t},view:function(){this.postId&&(this.show=!0,this.loadList())},loadList:function(){var t=this;this.loading=!0,Object(i.c)(this.postId,this.params).then((function(e){t.data=e.data.data.list.map((function(e){return t.$set(e,"checked",!1),e})),t.page=e.data.data.page,t.per=e.data.data.per,t.total=e.data.data.total})).finally((function(){t.loading=!1}))},remark:function(t){var e=this;this.$prompt("请输入备注","提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputValue:t.remark||""}).then((function(n){var o=n.value;Object(i.d)(e.postId,t.id,{remark:o}).then((function(){return e.$message.success("备注添加成功"),t.remark=o,!0})).catch((function(){return!1}))}))},checkChange:function(t,e){t?this.checked.push(e.id):this.checked=this.checked.filter((function(t){return t!==e.id})),this.checkedAll=this.checked.length===this.data.length},checkAll:function(t){t?(this.checked=this.data.map((function(t){return t.id})),this.data.map((function(t){return t.checked=!0,t}))):(this.checked=[],this.data.map((function(t){return t.checked=!1,t}))),this.isIndeterminate=!1,console.log(this.checked)},use:function(t){var e=this.$route.name;this.$router.push("/".concat(e,"/").concat(t.post_id,"/?mode=revision&id=").concat(t.id))},del:function(t){var e=this;this.$confirm("确认删除【版本-".concat(t.version,"】吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i.e)(e.postId,t.id).then((function(){e.$notify({type:"success",title:"成功",message:"历史版本删除成功"}),e.loadList()}))}))},delRevisions:function(){var t=this;this.$confirm("确认删除选中的历史版本？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=t.checked.join(",");Object(i.f)(t.postId,e).then((function(){t.$notify({type:"success",title:"成功",message:"历史版本删除成功"}),t.checkedAll=!1,t.checked=[],1===t.page?t.loadList():t.page=1}))}))}},watch:{params:{deep:!0,handler:function(){this.loadList()}}}},a=(n("e939"),n("2877")),c=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ready?n("div",{staticClass:"m-revision"},[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-folder"},on:{click:t.view}},[t._v("历史版本")]),n("el-drawer",{staticClass:"m-revision-drawer",attrs:{title:"历史版本",visible:t.show,"z-index":"2100","append-to-body":""},on:{"update:visible":function(e){t.show=e}}},[n("h3",{staticClass:"u-revision-title",attrs:{slot:"title"},slot:"title"},[t._v("历史版本")]),n("main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-revision-container"},[n("div",{staticClass:"u-actions"},[n("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.checkAll},model:{value:t.checkedAll,callback:function(e){t.checkedAll=e},expression:"checkedAll"}},[t._v("全选")]),n("el-button",{staticClass:"u-empty",attrs:{size:"mini",plain:"",icon:"el-icon-delete",disabled:!t.checked||!t.checked.length},on:{click:t.delRevisions}},[t._v("批量删除")])],1),n("div",{staticClass:"m-revision-list"},[t.data&&t.data.length?n("ul",{staticClass:"u-list"},[t._l(t.data,(function(e,i){return n("li",{key:i,staticClass:"m-revision-item"},[n("span",{staticClass:"u-name"},[n("el-checkbox",{staticClass:"u-checkbox",on:{change:function(n){return t.checkChange(n,e)}},model:{value:e.checked,callback:function(n){t.$set(e,"checked",n)},expression:"item.checked"}}),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.remark,placement:"top",disabled:!e.remark}},[n("span",[n("i",{staticClass:"u-icon el-icon-tickets"}),n("span",{staticClass:"u-remark"},[t._v(t._s(e.remark?t.formatRemark(e.remark):e.post_title))])])]),n("em",{staticClass:"u-time"},[t._v(t._s(t._f("formatDate")(e.updated_at)))]),e.user_info?n("span",{staticClass:"u-creator",attrs:{title:"创建人"}},[t._v(t._s(e.user_info.display_name))]):t._e(),n("i",{staticClass:"u-edit el-icon-edit",attrs:{title:"添加备注"},on:{click:function(n){return t.remark(e)}}})],1),n("el-button-group",[n("el-button",{attrs:{size:"mini",icon:"el-icon-view",title:"预览"},on:{click:function(n){return t.use(e)}}}),n("el-button",{attrs:{size:"mini",icon:"el-icon-delete",title:"删除"},on:{click:function(n){return t.del(e)}}})],1)],1)})),n("el-pagination",{staticClass:"u-pagination",attrs:{background:"","hide-on-single-page":"",layout:"prev,pager,next,->,total",total:t.total,"page-size":t.per,"current-page":t.page},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],2):n("el-alert",{staticClass:"u-null",attrs:{title:"当前没有任何历史版本",type:"info","show-icon":""}})],1)])])],1):t._e()}),[],!1,null,null,null);e.a=c.exports},4517:function(t,e,n){},4618:function(t,e,n){"use strict";var i={name:"publish_subtype",props:["data","options","lock"],data:function(){return{subtype:this.data,subtypes:this.options||[]}},model:{prop:"data",event:"update"},watch:{data:function(t){this.subtype=t},subtype:{deep:!0,handler:function(t){this.$emit("update",t)}},options:{deep:!0,handler:function(t){t&&(this.subtypes=t)}}},computed:{frozen:function(){return this.lock}},methods:{},mounted:function(){},components:{}},o=n("2877"),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-subtype"},[n("el-form-item",{attrs:{label:"类型"}},[n("el-radio-group",{model:{value:t.subtype,callback:function(e){t.subtype=e},expression:"subtype"}},t._l(t.subtypes,(function(e,i){return n("el-radio",{key:i,attrs:{label:i,border:"",disabled:t.frozen&&t.$route.params.id&&t.subtype!=i}},[t._v(t._s(e))])})),1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},"4a9e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d3b7"),n("e9c4"),n("99af");var i=n("c402"),o=n("1fb9"),s=n("263c"),a=n("d442"),c=n.n(a),l=n("2ef0"),r={data:function(){return{localTimer:"",webTimer:""}},beforeDestroy:function(){clearInterval(this.localTimer),this.localTimer=null,clearInterval(this.webTimer),this.webTimer=null},computed:{db:function(){return this.$store.state.db},isDraft:function(){var t;return"draft"===(null===(t=this.$route.query)||void 0===t?void 0:t.mode)},isRevision:function(){var t;return"revision"===(null===(t=this.$route.query)||void 0===t?void 0:t.mode)},isNewPost:function(){return!this.id}},methods:{loadData:function(){var t=this;if(this.loading=!0,this.isDraft){var e,n,o=null===(e=this.$route)||void 0===e||null===(n=e.query)||void 0===n?void 0:n.key;return this.db.getItem(o).then((function(e){t.post=e})).finally((function(){t.loading=!1}))}if(this.isRevision){var a=this.$route.params.id,c=this.$route.query.id;return Object(s.b)(a,c).then((function(e){t.post=e.data.data})).finally((function(){t.loading=!1}))}return this.$route.params.id?Object(i.d)(this.$route.params.id).then((function(e){t.post=e.data.data})).finally((function(){t.loading=!1})):new Promise((function(t,e){t()})).finally((function(){t.loading=!1}))},autoSave:function(){var t=this;this.id&&sessionStorage.setItem(this.post.post_type+"_"+this.id,JSON.stringify(this.post)),this.isDraft||this.isRevision||(this.localTimer=setInterval((function(){t.createLocalDraft()}),o.a),this.id&&(this.webTimer=setInterval((function(){t.createCloudRevision()}),o.b)))},createLocalDraft:function(){var t="";if(this.isNewPost&&this.post.post_content){var e="无标题-"+(new Date).getTime();t=this.post.post_type+"_"+(this.post.post_title||e)}this.id&&(t=this.post.post_type+"_"+this.id);var n=Object(l.cloneDeep)(this.post);n.cache_time=(new Date).getTime(),t&&this.db.setItem(t,n).then((function(){console.log("本地草稿备份完成",t,(new Date).getTime())}))},createCloudRevision:function(){var t=this;c.a.MD5(sessionStorage.getItem("".concat(this.post.post_type,"_").concat(this.post.ID)))===c.a.MD5(JSON.stringify(this.post))||Object(s.a)(this.post.ID,this.post).then((function(){t.$notify({title:"提醒",type:"success",message:"历史版本生成成功"})}))},useDraft:function(){var t=this;this.$alert("是否使用该版本发布？","确认信息",{confirmButtonText:"确定",callback:function(e){"confirm"===e&&t.publish("publish",!0)}})}}}},"505f":function(t,e,n){"use strict";var i=n("52da"),o={name:"publish_client",props:["data","forbidAll"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{handleChange:function(){i.a.$emit("changeClient",this.client)}},mounted:function(){},components:{}},s=n("2877"),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-client"},[n("el-form-item",{attrs:{label:"版本"}},[n("el-radio-group",{on:{change:t.handleChange},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[n("el-radio",{attrs:{label:"std"}},[t._v("重制")]),n("el-radio",{attrs:{label:"origin"}},[t._v("缘起")]),t.forbidAll?t._e():n("el-radio",{attrs:{label:"all"}},[t._v("双端")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},"52da":function(t,e,n){"use strict";var i=new(n("2b0e").default);e.a=i},"546f":function(t,e,n){"use strict";n("7dac")},"61d5":function(t,e,n){},"647d":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return r}));n("99af");var i=n("41cb");function o(t){return Object(i.a)().get("/api/cms/posts/user/my/union",{params:t})}function s(t){return Object(i.a)().delete("/api/cms/post/".concat(t,"/authors/quit"))}function a(t){return Object(i.a)().get("/api/cms/post/".concat(t,"/authors"))}function c(t,e){return Object(i.a)().post("/api/cms/post/".concat(t,"/author/").concat(e),{label:"撰稿",r_edit:1})}function l(t,e,n){return Object(i.a)().put("/api/cms/post/".concat(t,"/author/").concat(e),n)}function r(t,e){return Object(i.a)().delete("/api/cms/post/".concat(t,"/author/").concat(e))}},6962:function(t,e,n){"use strict";n("dd68")},"6c2b":function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return u}));n("99af");var i=n("41cb"),o=n("4328");function s(){return Object(i.b)()({method:"GET",url:"/api/post/collection/legal_tags"})}function a(t){return Object(i.b)()({method:"GET",url:"/api/post/collection/".concat(t)})}function c(t){return Object(i.b)()({method:"GET",url:"/api/my/post/collections",params:t})}function l(t){return Object(i.b)()({method:"POST",url:"/api/post/collection",data:o.stringify({action:t.id?"update":"create",collection:t})})}function r(t){return t?Object(i.b)()({method:"PUT",url:"/api/post/collection/remove",data:o.stringify({id:t})}):null}function u(t){return Object(i.a)().post("/api/cms/post/".concat(t.post_type,"-").concat(t.post_id,"/append-to-collection/").concat(t.post_collection),{title:t.post_title})}},"72d5":function(t,e,n){"use strict";n("7f5c")},"7dac":function(t,e,n){},"7f5c":function(t,e,n){},8722:function(t,e,n){"use strict";n.r(e);var i=n("2909"),o=(n("d3b7"),n("85e4")),s=n("1b4a"),a=n("221a"),c=n("e84a"),l=n("ef77"),r=n("d0a1"),u=n("1fb2"),p=n("505f"),d=n("ad8d"),h=n("c979"),f=n("adff"),m=n("b13e"),b=n("cc72"),v=n("0711"),_=n("4618"),g=n("db12"),k=n("41de"),y=n("c402"),x=n("6c2b"),C=n("4a9e"),$=n("bb78"),w=n("3c49"),O={name:"bbs",mixins:[C.a,$.a,w.a],components:{Tinymce:a.a,Markdown:c.a,"publish-header":l.a,"publish-title":r.a,"publish-original":u.a,"publish-client":p.a,"publish-excerpt":f.a,"publish-collection":d.a,"publish-collection-collapse":h.a,"publish-banner":m.a,"publish-comment":b.a,"publish-visible":v.a,"publish-subtype":_.a,"publish-authors":g.a,"publish-revision":k.a},data:function(){return{loading:!1,processing:!1,post:{ID:"",post_status:"publish",post_type:"bbs",post_title:"",post_subtype:"1",post_meta:{},post_content:"",post_mode:"tinymce",original:0,client:"std",lang:"cn",zlp:"",post_excerpt:"",post_banner:"",post_collection:"",collection_collapse:0,comment:0,visible:0},bbs_types:s}},computed:{id:function(){return this.isRevision?~~this.post.post_id:~~this.post.ID},data:function(){return this.id?[this.id,this.post]:[this.post]}},methods:{init:function(){var t=this;return this.loadData().then((function(){t.autoSave()}))},publish:function(t,e){var n=this;return this.post.post_status=t,this.processing=!0,y.e.apply(void 0,Object(i.a)(this.data)).then((function(t){return t.data.data})).then((function(t){n.atUser(t.ID),n.afterPublish(t).finally((function(){n.done(e,t)}))})).finally((function(){n.processing=!1}))},done:function(t,e){t?(this.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(o.getLink)(e.post_type,e.ID)}),500)):(this.$notify({title:"保存成功",message:"云端草稿保存成功",type:"success"}),this.post=e,this.$route.params.id||this.$router.push({params:{id:e.ID}}))},afterPublish:function(t){return~~t.post_collection?Object(x.a)({post_type:t.post_type,post_id:t.ID,post_collection:t.post_collection,post_title:t.post_title}):new Promise((function(t,e){t(!0)}))}}},j=n("2877"),I=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"剑三茶馆"}},[n("publish-revision",{attrs:{enable:!0,"post-id":t.id}})],1),n("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[n("publish-title",{model:{value:t.post.post_title,callback:function(e){t.$set(t.post,"post_title",e)},expression:"post.post_title"}}),n("div",{staticClass:"m-publish-info"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("信息")]),n("publish-original",{model:{value:t.post.original,callback:function(e){t.$set(t.post,"original",e)},expression:"post.original"}}),n("publish-client",{model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}}),n("publish-subtype",{attrs:{options:t.bbs_types},model:{value:t.post.post_subtype,callback:function(e){t.$set(t.post,"post_subtype",e)},expression:"post.post_subtype"}})],1),n("div",{staticClass:"m-publish-content"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("正文")]),n("el-radio-group",{staticClass:"m-publish-editormode",attrs:{size:"small"},model:{value:t.post.post_mode,callback:function(e){t.$set(t.post,"post_mode",e)},expression:"post.post_mode"}},[n("el-radio-button",{attrs:{label:"tinymce"}},[t._v("可视化编辑器")]),n("el-radio-button",{attrs:{label:"markdown"}},[t._v("Markdown")])],1),n("Markdown",{directives:[{name:"show",rawName:"v-show",value:"markdown"==t.post.post_mode,expression:"post.post_mode == 'markdown'"}],attrs:{editable:!0,readOnly:!1},model:{value:t.post.post_content,callback:function(e){t.$set(t.post,"post_content",e)},expression:"post.post_content"}}),n("Tinymce",{directives:[{name:"show",rawName:"v-show",value:!t.post.post_mode||"tinymce"==t.post.post_mode,expression:"!post.post_mode || post.post_mode == 'tinymce'"}],attrs:{attachmentEnable:!0,resourceEnable:!0},model:{value:t.post.post_content,callback:function(e){t.$set(t.post,"post_content",e)},expression:"post.post_content"}})],1),n("div",{staticClass:"m-publish-append"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("摘要")]),n("publish-excerpt",{model:{value:t.post.post_excerpt,callback:function(e){t.$set(t.post,"post_excerpt",e)},expression:"post.post_excerpt"}})],1),n("div",{staticClass:"m-publish-append"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("合集")]),n("publish-collection",{attrs:{defaultCollapse:t.post.collection_collapse},model:{value:t.post.post_collection,callback:function(e){t.$set(t.post,"post_collection",e)},expression:"post.post_collection"}},[n("publish-collection-collapse",{model:{value:t.post.collection_collapse,callback:function(e){t.$set(t.post,"collection_collapse",e)},expression:"post.collection_collapse"}})],1)],1),n("div",{staticClass:"m-publish-extend"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("设置")]),n("publish-comment",{model:{value:t.post.comment,callback:function(e){t.$set(t.post,"comment",e)},expression:"post.comment"}}),n("publish-visible",{model:{value:t.post.visible,callback:function(e){t.$set(t.post,"visible",e)},expression:"post.visible"}}),n("publish-authors",{attrs:{id:t.id,uid:t.post.post_author}})],1),n("div",{staticClass:"m-publish-other"},[n("publish-banner",{model:{value:t.post.post_banner,callback:function(e){t.$set(t.post,"post_banner",e)},expression:"post.post_banner"}})],1),n("div",{staticClass:"m-publish-buttons"},[t.isDraft||t.isRevision?[n("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:t.useDraft}},[t._v("使用此版本")])]:[n("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发    布")]),n("el-button",{attrs:{type:"plain",disabled:t.processing},on:{click:function(e){return t.publish("draft",!1)}}},[t._v("保存为草稿")])]],2)],1)],1)}),[],!1,null,null,null);e.default=I.exports},"952d":function(t,e,n){"use strict";n("4517")},a367:function(t,e,n){},ad8d:function(t,e,n){"use strict";n("ac1f"),n("841c"),n("a9e3");var i=n("6c2b"),o=n("0644"),s=n.n(o),a={name:"publish_collection",props:["data"],data:function(){return{post_collection:"",collections:[],copyCollections:[],isInit:!0,loading:!1,search:""}},model:{prop:"data",event:"update"},computed:{isEmpty:function(){return!this.search&&!this.collections.length}},watch:{data:{immediate:!0,handler:function(t){this.post_collection=Number(t)||""}},post_collection:{handler:function(t){this.$emit("update",t)}}},methods:{loadCollections:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n={keyword:e};Object(i.d)(n).then((function(e){t.collections=e.data.data.data,t.isInit&&(t.copyCollections=s()(t.collections),t.isInit=!1)}))},remoteMethod:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.search=e,this.loading=!0,""!==e){var n={keyword:e};Object(i.d)(n).then((function(e){t.collections=e.data.data.data,t.loading=!1}))}else this.collections=s()(this.copyCollections)},visibleChange:function(t){t&&(this.collections=s()(this.copyCollections))}},mounted:function(){this.loadCollections()},components:{}},c=(n("546f"),n("2877")),l=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-collection-relation"},[n("h5",{staticClass:"u-schema"},[n("span",{staticClass:"u-label"},[t._v("关联小册")]),t._t("default"),t._m(0)],2),n("el-select",{staticClass:"u-collection",attrs:{remote:"","remote-method":t.remoteMethod,loading:t.loading,filterable:"",clearable:"",placeholder:"请选择一个小册（可选，非必填，可搜索）"},on:{"visible-change":t.visibleChange},model:{value:t.post_collection,callback:function(e){t.post_collection=e},expression:"post_collection"}},[t._l(t.collections,(function(t,e){return n("el-option",{key:e,attrs:{label:t.title,value:t.id}})})),n("div",{staticClass:"u-collection-null",attrs:{slot:"empty"},slot:"empty"},[n("div",[t._v(" 没有找到匹配结果， "),n("a",{attrs:{href:"/publish/#/collection",target:"_blank"}},[t._v("创建小册")])])])],2),t.isEmpty?n("div",{staticClass:"u-tip"},[n("i",{staticClass:"el-icon-info"}),t._v(" 当前没有任何小册， "),n("router-link",{attrs:{to:"/collection"}},[t._v("创建小册")])],1):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"u-help u-icon-links",attrs:{href:"/tool/20891",target:"_blank"}},[e("i",{staticClass:"el-icon-question"}),this._v(" 小册帮助指南 ")])}],!1,null,null,null);e.a=l.exports},adff:function(t,e,n){"use strict";var i={name:"publish_excerpt",props:["data"],data:function(){return{excerpt:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.excerpt=t},excerpt:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=(n("72d5"),n("2877")),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-excerpt"},[n("el-input",{attrs:{maxlength:200,"show-word-limit":"",type:"textarea",placeholder:"摘要信息"},model:{value:t.excerpt,callback:function(e){t.excerpt=e},expression:"excerpt"}}),t._t("default")],2)}),[],!1,null,"3228f028",null);e.a=s.exports},b13e:function(t,e,n){"use strict";var i={name:"post_banner",components:{uploadImage:n("5571").a},props:["data"],data:function(){return{banner:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}}},o=(n("6962"),n("2877")),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-banner"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),n("uploadImage",{attrs:{info:"非必选。首页海报尺寸1100*300（推荐2200*600支持高分屏），最大20M。"},model:{value:t.banner,callback:function(e){t.banner=e},expression:"banner"}})],1)}),[],!1,null,null,null);e.a=s.exports},bb78:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={data:function(){return{}},methods:{},created:function(){this.post.client=this.$store.state.client},watch:{$route:{immediate:!0,deep:!0,handler:function(){this.init()}},"$store.state.user_conf.editor_mode":{immediate:!0,handler:function(t){this.id||(this.post.post_mode=t||"tinymce")}}}}},bec3:function(t,e,n){"use strict";n("61d5")},c979:function(t,e,n){"use strict";var i={name:"PublishCollectionCollpase",props:["data"],components:{},data:function(){return{collection_collapse:!1}},model:{prop:"data",event:"update"},watch:{data:{immediate:!0,handler:function(t){this.collection_collapse=t}},collection_collapse:{handler:function(t){this.$emit("update",t)}}},methods:{},filters:{},created:function(){},mounted:function(){}},o=n("2877"),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-checkbox",{staticClass:"u-collapse",attrs:{"true-label":1,"false-label":0},model:{value:t.collection_collapse,callback:function(e){t.collection_collapse=e},expression:"collection_collapse"}},[t._v("默认展开")])}),[],!1,null,null,null);e.a=s.exports},cbe6:function(t,e,n){"use strict";n("a367")},cc72:function(t,e,n){"use strict";var i={name:"publish_comment",props:["data"],data:function(){return{comment:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.comment=t},comment:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=n("2877"),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-comment"},[n("el-form-item",{attrs:{label:"评论开关"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":0,"inactive-value":1},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},d0a1:function(t,e,n){"use strict";var i={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=n("2877"),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():n("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),n("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},db12:function(t,e,n){"use strict";n("a434");var i=n("1dfe"),o=n("647d"),s=n("85e4"),a=n("c9d2"),c={name:"PublishAuthors",props:["id","uid"],components:{UserPop:i.a},data:function(){return{list:[],visible:!1}},computed:{isSuper:function(){return a.a.getInfo().uid==this.uid}},watch:{id:{immediate:!0,handler:function(t){t&&this.loadAuthors()}}},methods:{openPop:function(){this.visible=!0},addAuthor:function(t){var e=this;Object(o.a)(this.id,t.ID).then((function(n){e.$notify({title:"添加成功",message:"联合创作者添加成功",type:"success"}),e.list.push({post_author_info:t,label:"撰稿",status:0})}))},loadAuthors:function(){var t=this;Object(o.b)(this.id).then((function(e){var n,i;t.list=null===(n=e.data)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.other_authors}))},update:function(t){var e=this;this.$prompt("修改展示项，例如：撰稿/修订/主创/校稿..","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(n){var i=n.value;Object(o.f)(e.id,t.post_author_info.ID,{label:i,r_edit:1}).then((function(){t.label=i,e.$notify({title:"修改成功",message:"备注更新成功",type:"success"})}))}))},remove:function(t,e){var n=this;Object(o.e)(this.id,t.post_author_info.ID).then((function(t){n.$notify({title:"删除成功",message:"成功移除联合创作者",type:"success"}),n.list.splice(e,1)}))}},filters:{showAvatar:function(t){return Object(s.showAvatar)(t)}},created:function(){},mounted:function(){}},l=(n("952d"),n("2877")),r=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.id&&t.isSuper?n("div",{staticClass:"m-publish-authors"},[n("el-form-item",{attrs:{label:"联合创作"}},[n("div",{staticClass:"u-list"},[t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"u-item"},[e.status?t._e():n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"等待被邀请者确认",placement:"top"}},[n("i",{staticClass:"u-status el-icon-loading"})]),n("img",{staticClass:"u-avatar",attrs:{src:t._f("showAvatar")(e.post_author_info.user_avatar)}}),n("span",{staticClass:"u-name"},[t._v(" "+t._s(e.post_author_info.display_name)+" "),n("span",{staticClass:"u-label"},[t._v("("+t._s(e.label||"撰稿")+")")])]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改备注",placement:"top"}},[n("i",{staticClass:"u-edit el-icon-edit",on:{click:function(n){return t.update(e)}}})]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除",placement:"top"}},[n("i",{staticClass:"u-delete el-icon-delete",on:{click:function(n){return t.remove(e,i)}}})])],1)})),n("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.openPop}},[t._v("+ 添加联合创作者")])],2),n("UserPop",{attrs:{title:"添加用户"},on:{confirm:t.addAuthor},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})],1)],1):t._e()}),[],!1,null,null,null);e.a=r.exports},dd68:function(t,e,n){},e939:function(t,e,n){"use strict";n("f685")},ef77:function(t,e,n){"use strict";var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},o=(n("bec3"),n("2877")),s=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},f685:function(t,e,n){}}]);
//# sourceMappingURL=chunk-7cd52bec.46f10ffb.js.map