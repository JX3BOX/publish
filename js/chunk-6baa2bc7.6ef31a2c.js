(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6baa2bc7"],{5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("14d9"),n("159b"),n("dbb4");var a=n("a38e");function i(t,e,n){return(e=Object(a.a)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"67be":function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"h",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"g",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"d",(function(){return d}));var a=n("41cb");function i(t){return Object(a.c)().get("/api/pvxbody/my-list",{params:t})}function c(t){return Object(a.c)().get("/api/pvxbody/".concat(t))}function o(t){return Object(a.c)().post("/api/pvxbody/file-upload",t)}function s(t){return Object(a.c)().post("/api/pvxbody",t)}function r(t,e){return Object(a.c)().put("/api/pvxbody/".concat(t),e)}function u(t){return Object(a.c)().put("/api/pvxbody/".concat(t,"/online"))}function l(t){return Object(a.c)().put("/api/pvxbody/".concat(t,"/offline"))}function d(t){return Object(a.c)().get("/api/charge_attachment/pvxbody/".concat(t,"/edit"))}},"90c8":function(t,e,n){},"9ba0":function(t,e,n){"use strict";n("90c8")},b463:function(t,e,n){"use strict";n.r(e);n("ac1f"),n("841c");var a=n("5530"),i=(n("d3b7"),n("67be")),c={name:"pvxBody",props:[],data:function(){return{loading:!1,data:[],total:1,page:1,per:10,search:""}},computed:{params:function(){return{pageIndex:this.page,pageSize:this.per,title:this.search}},publishLink:function(){return"./#/body"}},watch:{params:{deep:!0,immediate:!0,handler:function(t){this.loadPosts()}}},methods:{loadPosts:function(){var t=this;this.loading=!0;var e=Object(a.a)({},this.params);Object(i.f)(e).then((function(e){t.data=e.data.data.list,t.total=e.data.data.page.total})).finally((function(){t.loading=!1}))},edit:function(t){location.href="./#/body/"+t},postLink:function(t){return"/body/"+t},handleOnline:function(t){var e=this;Object(i.c)(t).then((function(t){e.$message.success("上架成功"),e.loadPosts()}))},handleOffline:function(t){var e=this;this.$confirm("此操作将下架该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i.b)(t).then((function(t){e.$message.success("下架成功"),e.loadPosts()}))}))}}},o=(n("9ba0"),n("2877")),s=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-dashboard-work m-dashboard-cms"},[e("div",{staticClass:"m-dashboard-work-header"},[e("h2",{staticClass:"u-title"},[t._v("体型数据")]),e("a",{staticClass:"u-publish el-button el-button--primary el-button--small",attrs:{href:t.publishLink}},[e("i",{staticClass:"el-icon-document"}),t._v(" 发布数据 ")])]),e("el-input",{staticClass:"m-dashboard-work-search",attrs:{placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("关键词")]),e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),e("div",{staticClass:"m-dashboard-box"},[t.data&&t.data.length?e("ul",{staticClass:"m-dashboard-box-list"},t._l(t.data,(function(n,a){return e("li",{key:a},[1==n.status?e("i",{staticClass:"u-item-icon u-success-icon el-icon-success",attrs:{title:"上架中"}}):e("i",{staticClass:"u-item-icon u-remove-icon el-icon-remove",attrs:{title:"已下架"}}),e("a",{staticClass:"u-title",attrs:{target:"_blank",href:t.postLink(n.id)}},[t._v(t._s(n.title||"未命名"))]),e("div",{staticClass:"u-desc"},[e("time",{staticClass:"u-desc-subitem"},[e("i",{staticClass:"el-icon-finished"}),t._v(" 发布 : "+t._s(n.created_at)+" ")]),e("time",{staticClass:"u-desc-subitem"},[e("i",{staticClass:"el-icon-refresh"}),t._v(" 更新 : "+t._s(n.updated_at)+" ")])]),e("el-button-group",{staticClass:"u-action"},[e("el-button",{attrs:{size:"mini",icon:"el-icon-edit",title:"编辑"},on:{click:function(e){return t.edit(n.id)}}}),1==n.status?e("el-button",{attrs:{size:"mini",icon:"el-icon-download",title:"下架"},on:{click:function(e){return t.handleOffline(n.id)}}}):e("el-button",{attrs:{size:"mini",icon:"el-icon-upload2",title:"上架"},on:{click:function(e){return t.handleOnline(n.id)}}})],1)],1)})),0):e("el-alert",{staticClass:"m-dashboard-box-null",attrs:{title:"没有找到相关条目",type:"info",center:"","show-icon":""}}),e("el-pagination",{staticClass:"m-dashboard-box-pages",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1)],1)}),[],!1,null,"19b0b463",null);e.default=s.exports}}]);
//# sourceMappingURL=chunk-6baa2bc7.6ef31a2c.js.map