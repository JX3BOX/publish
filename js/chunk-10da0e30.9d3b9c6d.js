(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-10da0e30"],{"11ed":function(t,e,i){},"18db":function(t,e,i){},"263c":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return c})),i.d(e,"f",(function(){return l})),i.d(e,"e",(function(){return r}));i("99af");var n=i("41cb"),o=function(t,e){return Object(n.a)().post("/api/cms/post/".concat(t,"/revision"),e)},a=function(t,e){return Object(n.a)().get("/api/cms/post/".concat(t,"/revision/").concat(e))},s=function(t,e){return Object(n.a)().get("/api/cms/post/".concat(t,"/revisions"),{params:e})},c=function(t,e,i){return Object(n.a)().put("/api/cms/post/".concat(t,"/revision/").concat(e),i)},r=function(t,e){return Object(n.a)().delete("/api/cms/post/".concat(t,"/revision/").concat(e))},l=function(t,e){return Object(n.a)().delete("/api/cms/post/".concat(t,"/revisions?list=").concat(e))}},3779:function(t,e,i){},"3c49":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("c7eb"),o=i("1da1"),a=(i("b64b"),i("99af"),i("41cb"));var s,c=i("c9d2"),r={data:function(){return{isSuperAuthor:!1}},computed:{userInfo:function(){return c.a.getInfo()}},mounted:function(){var t=this;return Object(o.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.isSuperAuthor();case 2:t.isSuperAuthor=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{atUser:(s=Object(o.a)(Object(n.a)().mark((function t(e){var i;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(i=sessionStorage.getItem("atAuthor"))){t.next=6;break}return t.next=5,n={sendUserId:this.userInfo.uid,accessUserId:JSON.parse(i),postId:e||this.id,postType:this.post_type||this.post.post_type},o=void 0,s=void 0,c=void 0,r=void 0,o=n.sendUserId,s=n.accessUserId,c=n.postId,r=n.postType,Object(a.e)({mute:!0}).get("/api/horn/".concat(o,"/to/user/article/").concat(r,"/").concat(c),{params:{accessUserId:s}});case 5:sessionStorage.removeItem("atAuthor");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var n,o,s,c,r}),t,this,[[0,8]])}))),function(t){return s.apply(this,arguments)})}}},"3efa":function(t,e,i){"use strict";i("11ed")},"41de":function(t,e,i){"use strict";i("99af"),i("4de4"),i("a15b"),i("d81d"),i("14d9"),i("fb6a"),i("b0c0"),i("a9e3"),i("d3b7"),i("0643"),i("2382"),i("a573");var n=i("263c"),o=i("e4f1"),a={name:"publish_revision",props:{postId:{type:[String,Number],default:0},visible:{type:Boolean,default:!0},enable:{type:Boolean,default:!1}},data:function(){return{show:!1,data:[],per:10,page:1,total:0,loading:!1,checked:[],checkedAll:!1,isIndeterminate:!1}},computed:{params:function(){return{page:this.page,per:this.per}},isPostMode:function(){return!this.$route.query.mode||"default"==this.$route.query.mode},ready:function(){return this.enable&&this.postId&&this.isPostMode}},filters:{revisionName:function(t){return"版本".concat(t.version)},formatDate:function(t){return Object(o.c)(new Date(t))}},methods:{formatRemark:function(t){return(null==t?void 0:t.length)>10?t.slice(0,10)+"..":t},view:function(){this.postId&&(this.show=!0,this.loadList())},loadList:function(){var t=this;this.loading=!0,Object(n.c)(this.postId,this.params).then((function(e){t.data=e.data.data.list.map((function(e){return t.$set(e,"checked",!1),e})),t.page=e.data.data.page,t.per=e.data.data.per,t.total=e.data.data.total})).finally((function(){t.loading=!1}))},remark:function(t){var e=this;this.$prompt("请输入备注","提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputValue:t.remark||""}).then((function(i){var o=i.value;Object(n.d)(e.postId,t.id,{remark:o}).then((function(){return e.$message.success("备注添加成功"),t.remark=o,!0})).catch((function(){return!1}))}))},checkChange:function(t,e){t?this.checked.push(e.id):this.checked=this.checked.filter((function(t){return t!==e.id})),this.checkedAll=this.checked.length===this.data.length},checkAll:function(t){t?(this.checked=this.data.map((function(t){return t.id})),this.data.map((function(t){return t.checked=!0,t}))):(this.checked=[],this.data.map((function(t){return t.checked=!1,t}))),this.isIndeterminate=!1,console.log(this.checked)},use:function(t){var e=this.$route.name;this.$router.push("/".concat(e,"/").concat(t.post_id,"/?mode=revision&id=").concat(t.id))},del:function(t){var e=this;this.$confirm("确认删除【版本-".concat(t.version,"】吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n.e)(e.postId,t.id).then((function(){e.$notify({type:"success",title:"成功",message:"历史版本删除成功"}),e.loadList()}))}))},delRevisions:function(){var t=this;this.$confirm("确认删除选中的历史版本？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=t.checked.join(",");Object(n.f)(t.postId,e).then((function(){t.$notify({type:"success",title:"成功",message:"历史版本删除成功"}),t.checkedAll=!1,t.checked=[],1===t.page?t.loadList():t.page=1}))}))}},watch:{params:{deep:!0,handler:function(){this.loadList()}}}},s=(i("3efa"),i("2877")),c=Object(s.a)(a,(function(){var t=this,e=t._self._c;return t.ready?e("div",{staticClass:"m-revision"},[e("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-folder"},on:{click:t.view}},[t._v("历史版本")]),e("el-drawer",{staticClass:"m-revision-drawer",attrs:{title:"历史版本",visible:t.show,"z-index":"2100","append-to-body":""},on:{"update:visible":function(e){t.show=e}}},[e("h3",{staticClass:"u-revision-title",attrs:{slot:"title"},slot:"title"},[t._v("历史版本")]),e("main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-revision-container"},[e("div",{staticClass:"u-actions"},[e("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.checkAll},model:{value:t.checkedAll,callback:function(e){t.checkedAll=e},expression:"checkedAll"}},[t._v("全选")]),e("el-button",{staticClass:"u-empty",attrs:{size:"mini",plain:"",icon:"el-icon-delete",disabled:!t.checked||!t.checked.length},on:{click:t.delRevisions}},[t._v("批量删除")])],1),e("div",{staticClass:"m-revision-list"},[t.data&&t.data.length?e("ul",{staticClass:"u-list"},[t._l(t.data,(function(i,n){return e("li",{key:n,staticClass:"m-revision-item"},[e("span",{staticClass:"u-name"},[e("el-checkbox",{staticClass:"u-checkbox",on:{change:function(e){return t.checkChange(e,i)}},model:{value:i.checked,callback:function(e){t.$set(i,"checked",e)},expression:"item.checked"}}),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:i.remark,placement:"top",disabled:!i.remark}},[e("span",[e("i",{staticClass:"u-icon el-icon-tickets"}),e("span",{staticClass:"u-remark"},[t._v(t._s(i.remark?t.formatRemark(i.remark):i.post_title))])])]),e("em",{staticClass:"u-time"},[t._v(t._s(t._f("formatDate")(i.updated_at)))]),i.user_info?e("span",{staticClass:"u-creator",attrs:{title:"创建人"}},[t._v(t._s(i.user_info.display_name))]):t._e(),e("i",{staticClass:"u-edit el-icon-edit",attrs:{title:"添加备注"},on:{click:function(e){return t.remark(i)}}})],1),e("el-button-group",[e("el-button",{attrs:{size:"mini",icon:"el-icon-view",title:"预览"},on:{click:function(e){return t.use(i)}}}),e("el-button",{attrs:{size:"mini",icon:"el-icon-delete",title:"删除"},on:{click:function(e){return t.del(i)}}})],1)],1)})),e("el-pagination",{staticClass:"u-pagination",attrs:{background:"","hide-on-single-page":"",layout:"prev,pager,next,->,total",total:t.total,"page-size":t.per,"current-page":t.page},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],2):e("el-alert",{staticClass:"u-null",attrs:{title:"当前没有任何历史版本",type:"info","show-icon":""}})],1)])])],1):t._e()}),[],!1,null,null,null);e.a=c.exports},4905:function(t,e,i){},5614:function(t,e,i){"use strict";i("4905")},6275:function(t,e,i){"use strict";i("99dc")},6851:function(t,e,i){"use strict";i("3779")},"6c2b":function(t,e,i){"use strict";i.d(e,"d",(function(){return o})),i.d(e,"e",(function(){return c})),i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return a})),i.d(e,"f",(function(){return s})),i.d(e,"c",(function(){return l}));i("99af");var n=i("41cb");function o(t){return Object(n.a)()({method:"GET",url:"/api/cms/post/collection/mine",params:t})}function a(t){return Object(n.a)().post("/api/cms/post/collection",t)}function s(t,e){return Object(n.a)().put("/api/cms/post/collection/".concat(t),e)}function c(t){return Object(n.a)().delete("/api/cms/post/collection/".concat(t))}function r(t){return Object(n.a)().post("/api/cms/post/".concat(t.post_type,"-").concat(t.post_id,"/append-to-collection/").concat(t.post_collection),{title:t.post_title})}function l(t){return Object(n.a)()({method:"GET",url:"/api/cms/post/collection/".concat(t,"/raw")})}},"81fc":function(t,e,i){"use strict";i.d(e,"k",(function(){return a})),i.d(e,"f",(function(){return r})),i.d(e,"d",(function(){return p})),i.d(e,"l",(function(){return h})),i.d(e,"a",(function(){return l})),i.d(e,"i",(function(){return u})),i.d(e,"m",(function(){return s})),i.d(e,"h",(function(){return f})),i.d(e,"g",(function(){return m})),i.d(e,"c",(function(){return v})),i.d(e,"o",(function(){return b})),i.d(e,"e",(function(){return g})),i.d(e,"b",(function(){return _})),i.d(e,"j",(function(){return d})),i.d(e,"n",(function(){return c}));i("99af");var n=i("41cb"),o="/api/next2";function a(t){return Object(n.c)().post("".concat(o,"/community/discussion/topic"),t)}function s(t,e){return Object(n.c)().put("".concat(o,"/community/discussion/my/topic/item/").concat(t),e)}function c(t,e){return Object(n.c)().put("".concat(o,"/community/discussion/manage/topic/item/").concat(t,"/update"),e)}function r(t){return Object(n.c)().get("".concat(o,"/community/discussion/my/topic/list"),{params:t})}function l(t){return Object(n.c)().delete("".concat(o,"/community/discussion/my/topic/item/").concat(t))}function u(t){return Object(n.c)().get("".concat(o,"/community/discussion/my/topic/item/").concat(t))}function d(t){return Object(n.c)().get("".concat(o,"/community/discussion/manage/topic/item/").concat(t))}function p(t){return Object(n.c)().get("".concat(o,"/community/discussion/topic/list"),{params:t})}function h(t,e){return Object(n.c)().put("".concat(o,"/community/discussion/my/topic/item/").concat(t,"/self-visit/").concat(e))}function f(t){return Object(n.c)().get("".concat(o,"/community/discussion/my/reply/list"),{params:t})}function m(t){return Object(n.c)().get("".concat(o,"/community/discussion/my/reply/item/").concat(t))}function v(t){return Object(n.c)().delete("".concat(o,"/community/discussion/my/reply/item/").concat(t))}function b(t,e){return Object(n.c)().put("".concat(o,"/community/discussion/my/reply/item/").concat(t),e)}function g(t){return Object(n.c)().get("".concat(o,"/community/discussion/my/comment/list"),{params:t})}function _(t){return Object(n.c)().delete("".concat(o,"/community/discussion/my/comment/item/").concat(t))}},"99dc":function(t,e,i){},ad8d:function(t,e,i){"use strict";i("a9e3"),i("ac1f"),i("841c");var n=i("6c2b"),o=i("0644"),a=i.n(o),s={name:"publish_collection",props:["data"],data:function(){return{post_collection:"",collections:[],copyCollections:[],isInit:!0,loading:!1,search:""}},model:{prop:"data",event:"update"},computed:{isEmpty:function(){return!this.search&&!this.collections.length}},watch:{data:{immediate:!0,handler:function(t){this.post_collection=Number(t)||""}},post_collection:{handler:function(t){this.$emit("update",t)}}},methods:{loadCollections:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i={keyword:e};Object(n.d)(i).then((function(e){t.collections=e.data.data.list,t.isInit&&(t.copyCollections=a()(t.collections),t.isInit=!1)}))},remoteMethod:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.search=e,this.loading=!0,""!==e){var i={keyword:e};Object(n.d)(i).then((function(e){t.collections=e.data.data.list,t.loading=!1}))}else this.collections=a()(this.copyCollections)},visibleChange:function(t){t&&(this.collections=a()(this.copyCollections))}},mounted:function(){this.loadCollections()},components:{}},c=(i("6851"),i("2877")),r=Object(c.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-collection-relation"},[e("h5",{staticClass:"u-schema"},[e("a",{staticClass:"u-add el-button el-button--primary el-button--mini",attrs:{href:"/publish/#/collection",target:"_blank"}},[t._v("+ 创建小册")]),t._t("default"),t._m(0)],2),e("el-select",{staticClass:"u-collection",attrs:{remote:"","remote-method":t.remoteMethod,loading:t.loading,filterable:"",clearable:"",placeholder:"请选择一个小册（可选，非必填，可搜索）"},on:{"visible-change":t.visibleChange},model:{value:t.post_collection,callback:function(e){t.post_collection=e},expression:"post_collection"}},[t._l(t.collections,(function(t,i){return e("el-option",{key:i,attrs:{label:t.title,value:t.id}})})),e("div",{staticClass:"u-collection-null",attrs:{slot:"empty"},slot:"empty"},[e("div",[t._v(" 没有找到匹配结果， "),e("a",{attrs:{href:"/publish/#/collection",target:"_blank"}},[t._v("创建小册")])])])],2),t.isEmpty?e("div",{staticClass:"u-tip"},[e("i",{staticClass:"el-icon-info"}),t._v(" 当前没有任何小册， "),e("a",{attrs:{href:"/publish/#/collection",target:"_blank"}},[t._v("创建小册")])]):t._e()],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"u-help u-icon-links",attrs:{href:"/tool/20891",target:"_blank"}},[t("i",{staticClass:"el-icon-question"}),this._v(" 小册帮助指南 ")])}],!1,null,null,null);e.a=r.exports},af05:function(t,e,i){"use strict";i("a15b"),i("a434"),i("e9c4"),i("b64b");var n=i("9a1b"),o=i("85e4"),a={name:"publish_at_authors",data:function(){return{authorIds:[],list:[]}},mounted:function(){window.addEventListener("setItemEvent",this.handleSession)},beforeDestroy:function(){window.removeEventListener("setItemEvent",this.handleSession)},watch:{authorIds:{deep:!0,handler:function(t,e){t.length>e.length&&this.loadUsers()}}},methods:{handleSession:function(t){if("atAuthor"===t.key)try{var e=JSON.parse(t.newVal);this.authorIds=e}catch(t){console.log(t),this.authorIds=[]}},loadUsers:function(){var t=this;Object(n.c)(this.authorIds).then((function(e){t.list=e.data.data}))},remove:function(t,e){var i=this.authorIds.split(",");i.splice(e,1),this.list.splice(e,1),i.length?sessionStorage.setItem("atAuthor",JSON.stringify(i.join(","))):sessionStorage.removeItem("atAuthor")}},filters:{showAvatar:function(t){return Object(o.o)(t)}}},s=(i("e87f"),i("2877")),c=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-authors"},[e("el-form-item",{attrs:{label:"@圈一下"}},[e("div",{staticClass:"u-list"},t._l(t.list,(function(i,n){return e("div",{key:n,staticClass:"u-item"},[e("img",{staticClass:"u-avatar",attrs:{src:t._f("showAvatar")(i.user_avatar)}}),e("span",{staticClass:"u-name"},[t._v(" "+t._s(i.display_name)+" ")]),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"移除",placement:"top"}},[e("i",{staticClass:"u-delete el-icon-delete",on:{click:function(e){return t.remove(i,n)}}})])],1)})),0)])],1)}),[],!1,null,"07522ff3",null);e.a=c.exports},b3aa:function(t,e,i){},b4e5:function(t,e,i){"use strict";i("b3aa")},bb78:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("b85c"),o=(i("ac1f"),i("00b4"),i("466d"),i("5319"),i("2ca0"),i("a27f")),a=i("c9d2"),s={data:function(){return{hasRead:0,open_white_list:0,visible_for_self:0,from:"",is_illegal:!1}},mounted:function(){this.initExtend()},computed:{profile:function(){return this.$store.state.profile},level:function(){var t;return a.a.getLevel(null===(t=this.profile)||void 0===t?void 0:t.experience)}},methods:{initExtend:function(){this.hasRead=~~localStorage.getItem("jx3box_has_read")||0},setHasRead:function(){localStorage.setItem("jx3box_has_read",this.hasRead)},loadCommentConfig:function(t,e){var i=this;Object(o.b)(t,e).then((function(t){var e,n;i.open_white_list=(null===(e=t.data.data)||void 0===e?void 0:e.open_white_list)||0,i.visible_for_self=(null===(n=t.data.data)||void 0===n?void 0:n.visible_for_self)||0}))},setCommentConfig:function(t,e){Object(o.e)(t,e,this.open_white_list?"open":"close"),Object(o.f)(t,e,this.visible_for_self?"open":"close")},removeBase64Img:function(t){return t.replace(/(&lt;|<)img[^>]*?src="data:image[^>]*?(&gt;|>)/gi,"")},isExtraLink:function(t){if(!t)return!1;if(t.startsWith("/"))return!1;return!/^https?:\/\/([^\/]+\.)?jx3box\.com/.test(t)},checkIllegal:function(t){if(this.level>2)this.is_illegal=!1;else{var e=0,i=t.match(/(?:https?:)?\/\/([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[a-zA-Z0-9._~:\/?#[\]@!$&'()*+,;=-]*)?/gm);if(i){var o,a=Object(n.a)(i);try{for(a.s();!(o=a.n()).done;){var s=o.value;this.isExtraLink(s)&&e++}}catch(t){a.e(t)}finally{a.f()}}this.is_illegal=e>=5}}},created:function(){this.post.client=this.$store.state.client},watch:{$route:{immediate:!0,deep:!0,handler:function(){var t,e=null===(t=this.$route.query)||void 0===t?void 0:t.from;e&&(this.from=e),this.init()}},"$store.state.user_conf.editor_mode":{immediate:!0,handler:function(t){this.id||(this.post.post_mode=t||"tinymce")}},"post.post_content":{handler:function(t){this.checkIllegal(t)}},"post.content":{handler:function(t){this.checkIllegal(t)}}}}},c59a:function(t,e,i){"use strict";i.r(e);var n=i("2909"),o=i("5530"),a=(i("4de4"),i("d81d"),i("14d9"),i("fb6a"),i("d3b7"),i("ac1f"),i("6062"),i("1e70"),i("79a4"),i("c1a1"),i("8b00"),i("a4e7"),i("1e5a"),i("72c3"),i("3ca3"),i("466d"),i("5319"),i("0643"),i("2382"),i("a573"),i("ddb0"),i("65c2")),s=i("f5d0"),c=i("81fc"),r=i("221a"),l=i("ef77"),u=i("d0a1"),d=i("ad8d"),p=i("41de"),h=(i("b0c0"),i("a9e3"),{props:{options:{type:Array,required:!0},value:{type:[String,Number],default:""}},data:function(){return{category:this.value}},watch:{value:function(t){this.category=t},options:{deep:!0,immediate:!0,handler:function(){var t,e;this.value||(this.category=null===(t=this.options)||void 0===t||null===(e=t[0])||void 0===e?void 0:e.name,this.$emit("update",this.category))}}},model:{prop:"value",event:"update"},methods:{updateCategory:function(t){this.$emit("update",t)}}}),f=(i("5614"),i("2877")),m=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-category-list"},[e("span",{staticClass:"u-category"},[t._v("类别")]),e("el-radio-group",{on:{input:t.updateCategory},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},t._l(t.options,(function(i){return e("el-tooltip",{key:i.name,attrs:{effect:"dark",content:i.remark,placement:"top-start"}},[e("el-radio",{attrs:{border:"",label:i.name}},[t._v(t._s(i.name))])],1)})),1)],1)}),[],!1,null,null,null).exports,v=i("af05"),b=i("c402"),g=i("bb78"),_=i("3c49"),y=i("1509"),k=i("6c2b"),C={name:"community",mixins:[g.a,_.a],components:{Tinymce:r.a,"publish-header":l.a,"publish-title":u.a,"publish-collection":d.a,"publish-revision":p.a,"publish-category":m,"publish-at-authors":v.a},data:function(){return{skins:[],loading:!1,processing:!1,post:{id:"",client:"all",decoration_id:"",category:"",title:"",content:"",collection_id:"",is_self_visit:"0",is_from_phone:0},currentDecorationId:"",community_types:s,tags:[],buckets:[],post_type:"community",extraImages:[]}},computed:{id:function(){return~~this.post.id},data:function(){return Object(o.a)(Object(o.a)({},this.post),{},{category:this.post.category,collection_id:this.post.collection_id||void 0,decoration_id:this.post.decoration_id||void 0,extra_images:this.extraImages,introduction:this.getIntroduction(this.post.content)})}},mounted:function(){this.getTopicBucket();var t=this.$route.params.id;t&&(this.post.id=t,this.loadCommentConfig("community",t)),this.post.client="all",window.navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)&&!this.post.is_from_phone&&(this.post.is_from_phone=1)},methods:{goShopping:function(t){window.open("/vip/mall/list?category=virtual&sub_category=palu","_blank"),t.preventDefault(),t.stopPropagation()},setSkin:function(t){t.amount<=0&&t.id!=this.currentDecorationId?this.$message({message:"该皮肤已经被使用完了",type:"warning"}):this.post.decoration_id==t.id?this.post.decoration_id="":this.post.decoration_id=t.id},getDecoration:function(){var t=this;Object(y.b)({type:"palu"}).then((function(e){var i=(e.data.data||[]).filter((function(e){return e.amount>0||e.id==t.currentDecorationId}));t.skins=i.map((function(t){return{val:t.val,id:t.id,amount:t.amount,url:a.__imgPath+"decoration/palu/".concat(t.val,".png")}}))})).catch((function(){t.skins=[]}))},getIntroduction:function(t){return t.replace(/<[^>]*>|\n|&nbsp;| &nbsp;/g,"").slice(0,200)},init:function(){var t=this;sessionStorage.removeItem("atAuthor");var e=this.$route.params.id;e?("admin"===this.from?c.j:c.i)(e).then((function(e){var i=e.data.data;t.currentDecorationId=i.decoration_id,t.post=Object(o.a)(Object(o.a)({},i),{},{title:i.title,content:i.content,collection_id:i.collection_id,is_self_visit:String(i.is_self_visit)}),t.getDecoration()})):this.getDecoration()},publish:function(){var t=this;(this.loading=!0,this.data.id)?("admin"===this.from?c.n:c.m)(this.data.id,this.data).then((function(e){t.$message({message:"更新成功",type:"success"}),t.atUser(t.data.id),Object(c.l)(t.data.id,t.post.is_self_visit)})).then((function(){t.afterPublish({id:t.data.id,collection_id:t.data.collection_id,title:t.data.title}).then((function(){setTimeout((function(){location.href="/community/".concat(t.post.id)}),500)}))})).finally((function(){t.loading=!1})):Object(c.k)(this.data).then((function(e){var i=e.data.data;t.$message({message:"发布成功",type:"success"});var n=e.data.data.id;return Object(c.l)(n,t.post.is_self_visit),t.atUser(n),i})).then((function(e){t.afterPublish(e).then((function(){setTimeout((function(){location.href="/community/".concat(e.id)}),500)}))})).finally((function(){t.loading=!1}))},getImgSrc:function(t){for(var e,i=/<img\s+(?![^>]*\bclass\b)[^>]*?src="([^"]*)"/g,n=[];null!==(e=i.exec(t));)n.push(e[1]);return n},getTopicBucket:function(){var t=this;Object(b.k)({type:"community"}).then((function(e){var i=e.data.data;t.tags=Object(n.a)(i)}))},afterPublish:function(t){return~~t.collection_id?Object(k.a)({post_type:"community",post_id:t.id,post_collection:t.collection_id,post_title:t.title}):new Promise((function(t,e){t(!0)}))}},watch:{"post.content":{handler:function(t){var e=this.getImgSrc(t);this.extraImages=Object(n.a)(new Set(e))},immediate:!0}}},j=(i("6275"),Object(f.a)(C,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box p-community"},[e("publish-header",{attrs:{name:"魔盒论坛"}},[e("publish-revision",{attrs:{enable:!0,"post-id":t.id}})],1),e("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[e("publish-title",{model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),e("div",{staticClass:"m-publish-info"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("信息")]),e("publish-category",{attrs:{options:t.tags},model:{value:t.post.category,callback:function(e){t.$set(t.post,"category",e)},expression:"post.category"}})],1),e("div",{staticClass:"m-publish-info m-publish-extraimg"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("魔卡 "),e("el-tooltip",{staticClass:"box-item",attrs:{effect:"dark",content:"使用魔卡让你的贴贴闪闪发光!",placement:"top"}},[e("i",{staticClass:"el-icon-question"})]),e("a",{staticClass:"u-buy el-button el-button--primary el-button--mini is-round",attrs:{href:"/vip/mall/list?category=virtual&sub_category=palu",target:"_blank"}},[e("i",{staticClass:"el-icon-shopping-cart-full"}),t._v(" 兑换魔卡")])],1),t.skins.length?e("div",{staticClass:"u-imgs u-skin-imgs"},t._l(t.skins,(function(i,n){return e("div",{key:n,class:"u-imgs-item u-skin ".concat(t.post.decoration_id===i.id&&"active"),attrs:{title:"点击使用卡片皮肤，再次点击取消选择"},on:{click:function(e){return t.setSkin(i)}}},[e("el-image",{attrs:{src:i.url,fit:"fill"}}),e("div",{staticClass:"u-mark"},[e("i",{staticClass:"el-icon-check"}),t._v(" 已选择")]),e("div",{staticClass:"u-amount"},[t._v("数量 : "+t._s(i.amount))])],1)})),0):e("div",{staticClass:"u-null"},[t._v(" 你还没有任何魔卡，"),e("a",{attrs:{href:"/vip/mall/list?category=virtual&sub_category=palu",target:"_blank"}},[t._v("点击前往")]),t._v("使用积分兑换。 ")])],1),e("div",{staticClass:"m-publish-content"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("正文")]),e("Tinymce",{directives:[{name:"show",rawName:"v-show",value:"tinymce",expression:"'tinymce'"}],attrs:{attachmentEnable:!0,resourceEnable:!0},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1),e("div",{staticClass:"m-publish-append"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("小册")]),e("publish-collection",{attrs:{defaultCollapse:t.post.collection_collapse},model:{value:t.post.collection_id,callback:function(e){t.$set(t.post,"collection_id",e)},expression:"post.collection_id"}})],1),e("div",{staticClass:"m-publish-extend"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("设置")]),e("el-form-item",{attrs:{label:"阅读权限"}},[e("el-radio-group",{model:{value:t.post.is_self_visit,callback:function(e){t.$set(t.post,"is_self_visit",e)},expression:"post.is_self_visit"}},[e("el-radio",{attrs:{label:"0"}},[t._v("公开")]),e("el-radio",{attrs:{label:"1"}},[t._v("仅自己可见")])],1)],1)],1),e("div",{staticClass:"m-publish-extend"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("临时")]),e("publish-at-authors")],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.extraImages.length,expression:"extraImages.length"}],staticClass:"m-publish-extraimg"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("附图")]),e("div",{staticClass:"u-imgs"},t._l(t.extraImages,(function(i,n){return e("div",{key:n,class:"u-imgs-item"},[e("el-image",{staticStyle:{width:"148px",height:"148px"},attrs:{src:i,fit:"cover","preview-src-list":[i]}}),e("div",{staticClass:"u-mark"},[t._v("封面")])],1)})),0)],1),e("div",{staticClass:"m-publish-doc"},[t.is_illegal?e("el-alert",{staticClass:"u-illegal-alert",attrs:{closable:!1,"show-icon":"",type:"warning",title:"检测到您的内容存在不合规，将无法发布成功，并有禁言风险。"}}):t._e(),e("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.hasRead,callback:function(e){t.hasRead=e},expression:"hasRead"}},[t._v("我已阅读并了解"),e("a",{attrs:{href:"/notice/119",target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("《创作发布规范》")])])],1),e("div",{staticClass:"m-publish-buttons"},[[e("el-button",{attrs:{type:"primary",disabled:t.processing||!t.hasRead},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发    布")])]],2)],1)],1)}),[],!1,null,null,null));e.default=j.exports},d0a1:function(t,e,i){"use strict";var n={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},o=i("2877"),a=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():e("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),e("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},e87f:function(t,e,i){"use strict";i("18db")},ef77:function(t,e,i){"use strict";i("b0c0"),i("14d9");var n={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},o=(i("b4e5"),i("2877")),a=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},f5d0:function(t){t.exports=JSON.parse('{"讨论":"讨论","文章":"文章"}')}}]);
//# sourceMappingURL=chunk-10da0e30.9d3b9c6d.js.map