(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a80936c8"],{1:function(t,e){},"61d5":function(t,e,i){},6281:function(t,e,i){"use strict";i("db00")},6962:function(t,e,i){"use strict";i("dd68")},"6c2b":function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"d",(function(){return c})),i.d(e,"f",(function(){return a})),i.d(e,"e",(function(){return r})),i.d(e,"a",(function(){return u}));i("99af");var s=i("41cb"),l=i("4328");function n(){return Object(s.b)()({method:"GET",url:"/api/post/collection/legal_tags"})}function o(t){return Object(s.b)()({method:"GET",url:"/api/post/collection/".concat(t)})}function c(t){return Object(s.b)()({method:"GET",url:"/api/my/post/collections",params:t})}function a(t){return Object(s.b)()({method:"POST",url:"/api/post/collection",data:l.stringify({action:t.id?"update":"create",collection:t})})}function r(t){return t?Object(s.b)()({method:"PUT",url:"/api/post/collection/remove",data:l.stringify({id:t})}):null}function u(t){return Object(s.a)().post("/api/cms/post/".concat(t.post_type,"-").concat(t.post_id,"/append-to-collection/").concat(t.post_collection),{title:t.post_title})}},b13e:function(t,e,i){"use strict";var s={name:"post_banner",components:{uploadImage:i("5571").a},props:["data"],data:function(){return{banner:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}}},l=(i("6962"),i("2877")),n=Object(l.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"m-publish-banner"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),i("uploadImage",{attrs:{info:"非必选。首页海报尺寸1100*300（推荐2200*600支持高分屏），最大20M。"},model:{value:t.banner,callback:function(e){t.banner=e},expression:"banner"}})],1)}),[],!1,null,null,null);e.a=n.exports},bec3:function(t,e,i){"use strict";i("61d5")},db00:function(t,e,i){},dd68:function(t,e,i){},ef77:function(t,e,i){"use strict";var s={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},l=(i("bec3"),i("2877")),n=Object(l.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},f1e8:function(t,e,i){"use strict";i.r(e);var s=i("b85c"),l=(i("ac1f"),i("1276"),i("e9c4"),i("d3b7"),i("65c2")),n=i("221a"),o=i("47b9"),c=i("ef77"),a=i("b13e"),r=i("b76a"),u=i.n(r),p=i("6c2b"),d=i("29c2"),m=i("85e4"),f=(i("4328"),i("2ef0")),h=i.n(f),b={name:"collection",props:[],data:function(){var t=Object.assign({custom:"自定义"},l.__postType,l.__wikiType,l.__appType);return delete t.calendar,{source_types:t,public:o.a,collection:{id:"",title:"",public:1,image:"",description:"",tags:[],posts:[]},tag:"",legal_tags:null,show_description:!1,processing:!1}},computed:{id:function(){return this.$route.params.collection_id}},methods:{tags_search:function(t,e){var i=this;null===this.legal_tags?Object(p.c)().then((function(s){s=s.data,i.legal_tags=200===s.code?s.data.tags:[],e(i.tags_filters(t))})):e(this.tags_filters(t))},tags_filters:function(t){var e,i=[],l=Object(s.a)(this.legal_tags);try{for(l.s();!(e=l.n()).done;){var n=e.value;n.split(t).length>1&&i.push({value:n})}}catch(t){l.e(t)}finally{l.f()}return i},title_fill:function(t,e){var i=e.posts[t];e.title=i&&i.title?i.title:""},add_posts_item:function(){this.collection.posts.push({title:"",type:"",id:"",url:"",posts:null})},search_handle:function(t,e){null===t&&(e.id=t=""),Object(d.b)(e.type,{public:1,keyword:t}).then((function(t){200===(t=t.data).code&&(e.posts=t.data.posts)}))},init:function(){var t=this;Object(p.b)(this.id).then((function(e){if(200===(e=e.data).code){var i=e.data.collection;if(i){for(var s in i.posts){var l=i.posts[s];i.posts[s].posts="custom"===l.type?null:[{id:l.id,title:l.title}]}t.collection=i}else t.$message({message:"该剑三小册已被删除或无权限访问",type:"warning"})}}))},submit:function(){var t=this,e=JSON.parse(JSON.stringify(this.collection));for(var i in e.posts||(e.posts=[]),e.posts)delete e.posts[i].posts;e.posts=JSON.stringify(e.posts),this.processing=!0,Object(p.f)(e).then((function(e){if(200===(e=e.data).code){t.$message({message:e.message,type:"success"});var i=h.a.get(e,"data.collection.id"),s=t.id||i;setTimeout((function(){location.href=Object(m.getLink)("collection",s)}),500)}else t.$message({message:"".concat(e.message),type:"warning"})})).finally((function(){t.processing=!1}))}},watch:{id:{immediate:!0,handler:function(t){t&&this.init()}}},components:{Tinymce:n.a,draggable:u.a,"publish-header":c.a,"publish-banner":a.a}},_=(i("6281"),i("2877")),v=Object(_.a)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"m-publish-box"},[i("publish-header",{attrs:{name:"剑三小册",localDraft:!1}},[t._t("header")],2),i("el-form",{staticClass:"m-publish-collection",attrs:{"label-position":"left"}},[i("div",{staticClass:"m-publish-title"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),i("el-input",{attrs:{placeholder:"请输入小册标题",maxlength:"30","show-word-limit":""},model:{value:t.collection.title,callback:function(e){t.$set(t.collection,"title",e)},expression:"collection.title"}})],1),i("div",{staticClass:"m-publish-primary"},[i("div",{staticClass:"m-publish-primary-block"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("可见性")]),i("el-radio",{attrs:{label:this.public.PUBLIC},model:{value:t.collection.public,callback:function(e){t.$set(t.collection,"public",t._n(e))},expression:"collection.public"}},[t._v("公开")]),i("el-radio",{attrs:{label:this.public.PRIVATE},model:{value:t.collection.public,callback:function(e){t.$set(t.collection,"public",t._n(e))},expression:"collection.public"}},[t._v("私有")])],1),i("div",{staticClass:"m-publish-primary-block m-publish-collection-posts"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("内容")]),t.collection.posts&&t.collection.posts.length?i("draggable",{staticClass:"m-list-style",attrs:{tag:"ul",list:t.collection.posts,handle:".u-move"}},t._l(t.collection.posts,(function(e,s){return i("li",{key:s,staticClass:"c-posts-item"},[i("i",{staticClass:"u-move el-icon-more"}),i("i",{staticClass:"u-delete el-icon-close",on:{click:function(e){return t.collection.posts.splice(s,1)}}}),i("el-row",{staticClass:"m-posts-item",attrs:{gutter:10}},[i("el-col",{staticClass:"u-collection-type",attrs:{span:4}},[i("el-select",{staticClass:"u-item-key",attrs:{placeholder:"请选择作品类型"},on:{change:function(){t.search_handle(null,e),e.url=e.title=""}},model:{value:e.type,callback:function(i){t.$set(e,"type",i)},expression:"item.type"}},t._l(t.source_types,(function(t,e){return i("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1),i("el-col",{staticClass:"u-collection-id",attrs:{span:8}},["custom"!==e.type?i("el-select",{staticClass:"u-item-value",attrs:{filterable:"",remote:"",placeholder:"通过输入作品标题进行搜索","remote-method":function(i){t.search_handle(i,e)}},on:{change:function(i){t.title_fill(i,e)}},model:{value:e.id,callback:function(i){t.$set(e,"id",i)},expression:"item.id"}},[t._l(e.posts,(function(e){return[e.id&&e.title?i("el-option",{key:e.id,attrs:{value:e.id,label:e.title}}):t._e()]}))],2):i("el-input",{staticClass:"u-item-value",attrs:{placeholder:"请输入完整网页链接（需以HTTP或HTTPS开头）"},model:{value:e.url,callback:function(i){t.$set(e,"url",i)},expression:"item.url"}})],1),e.url?i("el-col",{staticClass:"u-collection-url",attrs:{span:12}},[i("el-input",{attrs:{placeholder:"请输入自定义标题"},model:{value:e.title,callback:function(i){t.$set(e,"title",i)},expression:"item.title"}})],1):t._e()],1)],1)})),0):i("div",{staticClass:"u-posts-items-empty"},[t._v("暂无作品信息，请进行作品添加")]),i("div",{staticClass:"u-posts-add",on:{click:t.add_posts_item}},[i("i",{staticClass:"el-icon-plus"}),i("span",[t._v("添加作品")])])],1),i("div",{staticClass:"m-publish-primary-block m-publish-description"},[i("el-divider",{attrs:{"content-position":"left"},on:{click:function(e){t.show_description=!t.show_description}}},[t._v("描述（选填）")]),t.show_description?t._e():i("span",{staticClass:"u-show",on:{click:function(e){t.show_description=!0}}},[t._v("▼ 展开")]),t.show_description?i("span",{staticClass:"u-hide",on:{click:function(e){t.show_description=!1}}},[t._v("▲ 收起")]):t._e(),i("Tinymce",{directives:[{name:"show",rawName:"v-show",value:t.show_description,expression:"show_description"}],attrs:{attachmentEnable:!0,resourceEnable:!0,height:300},model:{value:t.collection.description,callback:function(e){t.$set(t.collection,"description",e)},expression:"collection.description"}})],1),i("div",{staticClass:"m-publish-primary-block"},[i("publish-banner",{model:{value:t.collection.image,callback:function(e){t.$set(t.collection,"image",e)},expression:"collection.image"}})],1)]),i("el-form-item",[i("el-button",{staticClass:"m-publish-collection-publish u-publish",attrs:{icon:"el-icon-s-promotion",type:"primary",loading:t.processing},on:{click:t.submit}},[t._v("提交小册")])],1)],1)],1)}),[],!1,null,"5022c8a8",null);e.default=v.exports}}]);
//# sourceMappingURL=chunk-a80936c8.ebc7d1e5.js.map