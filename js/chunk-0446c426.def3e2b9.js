(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0446c426"],{"0b10":function(t,e,a){"use strict";a.r(e);a("caad"),a("ac1f"),a("841c"),a("d3b7"),a("65c2");var n=a("6a7f"),i=a("208a"),s=(a("a434"),a("b09a")),c=a("fb92"),o=a("85e4"),r={"-2":"已删除","-1":"未通过审核",0:"待审核",1:"已入库"},u={name:"question",props:["data"],data:function(){return{statusmap:r,list:this.data||[]}},watch:{data:function(t){this.list=t||[]}},methods:{edit:function(t){location.href="./#/question/"+t},postLink:function(t){return Object(o.getLink)("question",t)},del:function(t,e){var a=this;this.$alert("确定删除吗？","消息",{confirmButtonText:"确定",callback:function(i){"confirm"==i&&Object(n.d)(t).then((function(t){a.$message({message:"删除成功",type:"success"}),a.list.splice(e,1)}))}})}},filters:{dateFormat:function(t){return Object(c.a)(new Date(1e3*t))},typeFormat:function(t){return s.e[t]}},mounted:function(){},components:{}},l=(a("2e42"),a("2877")),d=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.list,(function(e,i){return n("li",{key:i},[n("i",{staticClass:"u-icon"},[e.status>0?n("img",{attrs:{"svg-inline":"",src:a("d850")}}):n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16",fill:"#dbab09","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"}})])]),n("a",{staticClass:"u-title",attrs:{target:"_blank",href:t.postLink(e.id)}},[t._v("["+t._s(t._f("typeFormat")(e.type))+"] "+t._s(e.title||"无标题"))]),n("div",{staticClass:"u-desc"},[n("span",{staticClass:"u-desc-subitem"},[t._v(" 编号 : "),n("b",[t._v(t._s(e.id))])]),n("span",{staticClass:"u-status u-desc-subitem"},[t._v(" 状态: "),n("b",{class:{pass:e.status>0,pending:0==e.status,fail:e.status<0}},[t._v(t._s(t.statusmap[e.status]))])]),n("time",{staticClass:"u-time u-desc-subitem"},[t._v("提交于: "+t._s(t._f("dateFormat")(e.createTime)))])]),n("el-button-group",{staticClass:"u-action"},[n("el-button",{attrs:{size:"mini",icon:"el-icon-edit",title:"编辑"},on:{click:function(a){return t.edit(e.id)}}}),n("el-button",{attrs:{size:"mini",icon:"el-icon-delete",title:"删除"},on:{click:function(a){return t.del(e.id,i)}}})],1)],1)})),0)}),[],!1,null,"c591ceae",null).exports,p={"-2":"已删除","-1":"未通过审核",0:"待审核",1:"已入库",2:"私有"},h={name:"paper",props:["data"],data:function(){return{statusmap:p,list:this.data||[]}},watch:{data:function(t){this.list=t||[]}},methods:{edit:function(t){location.href="./#/paper/"+t},postLink:function(t){return Object(o.getLink)("paper",t)},del:function(t,e){var a=this;this.$alert("确定删除吗？","消息",{confirmButtonText:"确定",callback:function(i){"confirm"==i&&Object(n.c)(t).then((function(t){a.$message({message:"删除成功",type:"success"}),a.list.splice(e,1)}))}})}},filters:{dateFormat:function(t){return Object(c.a)(new Date(1e3*t))},typeFormat:function(t){return s.e[t]}},mounted:function(){},components:{}},f=(a("ffe4"),Object(l.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.list,(function(e,n){return a("li",{key:n},[a("i",{staticClass:"u-icon"},[0!=e.status?a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16","aria-hidden":"true",fill:"#555","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}})]):a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16",fill:"#dbab09","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"}})])]),a("a",{staticClass:"u-title",attrs:{target:"_blank",href:t.postLink(e.id)}},[t._v(" "+t._s(e.title||"无标题")+" ")]),a("div",{staticClass:"u-desc"},[a("span",{staticClass:"u-desc-subitem"},[t._v(" 编号 : "),a("b",[t._v(t._s(e.id))])]),a("span",{staticClass:"u-status u-desc-subitem"},[t._v(" 状态: "),a("b",{class:{pass:e.status>0,pending:0==e.status,fail:e.status<0||e.status>1}},[t._v(t._s(t.statusmap[e.status]))])]),a("time",{staticClass:"u-time u-desc-subitem"},[t._v("提交于: "+t._s(t._f("dateFormat")(e.createTime)))])]),a("el-button-group",{staticClass:"u-action"},[a("el-button",{attrs:{size:"mini",icon:"el-icon-edit",title:"编辑"},on:{click:function(a){return t.edit(e.id)}}}),a("el-button",{attrs:{size:"mini",icon:"el-icon-delete",title:"删除"},on:{click:function(a){return t.del(e.id,n)}}})],1)],1)})),0)}),[],!1,null,"f373a5a0",null).exports),m={name:"item_plan",props:["data"],methods:{plan_edit:function(t){location.href="./#/item_plan/"+t},plan_delete:function(t){var e=this;this.$confirm("确认是否删除该物品清单？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i.a)(t).then((function(t){200===(t=t.data).code?(e.$message.success(t.message),e.$emit("refresh")):e.$message.error(t.message)}))}))}},filters:{dateFormat:function(t){return Object(c.a)(new Date(1e3*t))},authorLink:o.authorLink}},v=(a("14f8"),Object(l.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.data,(function(e,n){return a("li",{key:n,staticClass:"m-plan"},[a("i",{staticClass:"u-icon"},[e.public?a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16","aria-hidden":"true",fill:"#555","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}})]):a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16",fill:"#dbab09","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"}})])]),a("a",{staticClass:"u-title",attrs:{target:"_blank",href:"/item/#/plan_view/"+e.id}},[t._v(t._s(e.title||"无标题"))]),a("div",{staticClass:"u-desc"},[a("time",{staticClass:"u-desc-subitem"},[a("i",{staticClass:"el-icon-finished"}),t._v(" 发布 : "+t._s(t._f("dateFormat")(e.created))+" ")]),a("time",{staticClass:"u-desc-subitem"},[a("i",{staticClass:"el-icon-refresh"}),t._v(" 更新 : "+t._s(t._f("dateFormat")(e.updated))+" ")])]),a("el-button-group",{staticClass:"u-action"},[a("el-button",{attrs:{size:"mini",icon:"el-icon-edit",title:"编辑"},on:{click:function(a){return t.plan_edit(e.id)}}}),a("el-button",{attrs:{size:"mini",icon:"el-icon-delete",title:"删除"},on:{click:function(a){return t.plan_delete(e.id)}}})],1)],1)})),0)}),[],!1,null,"7b3eaf0e",null).exports),b={question:n.h,item_plan:i.c,paper:n.f},g=["question","paper"],_=["collection","item_plan"],w={name:"ideas",props:[],data:function(){return{loading:!1,data:[],total:1,page:1,per:10,search:"",types:{item_plan:"我的清单",question:"我的题目",paper:"我的试卷"}}},computed:{type:function(){return this.$route.params.type},typeLable:function(){return this.types[this.type]},params:function(){return g.includes(this.type)?{pageIndex:this.page,title:this.search,pageSize:this.per}:_.includes(this.type)?{page:this.page,keyword:this.search,limit:this.per}:{page:this.page,query:this.search,per:this.per}},publishLink:function(){return"./#/"+this.type},isNotExam:function(){return"question"!=this.type&&"paper"!=this.type}},watch:{type:function(){this.page=1},params:{deep:!0,handler:function(t){this.loadPosts()}}},methods:{loadPosts:function(){var t=this;this.type&&(this.loading=!0,b[this.type](this.params).then((function(e){_.includes(t.type)?200===(e=e.data).code&&(t.data=e.data.data,t.total=e.data.total):(t.data=e.data.data,t.total=e.data.page.total)})).finally((function(){t.loading=!1})))}},mounted:function(){this.loadPosts()},components:{question:d,item_plan:v,paper:f}},y=(a("581c"),Object(l.a)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-dashboard m-dashboard-work m-dashboard-other"},[a("div",{staticClass:"m-dashboard-work-header"},[a("h2",{staticClass:"u-title"},[t._v(t._s(t.typeLable))]),t.isNotExam?a("a",{staticClass:"u-publish el-button el-button--primary el-button--small",attrs:{href:t.publishLink}},[a("i",{staticClass:"el-icon-document"}),t._v(" 发布作品 ")]):t._e()]),a("el-input",{staticClass:"m-dashboard-work-search",attrs:{placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("关键词")]),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-dashboard-box"},[t.data&&t.data.length?["collection"===t.type?a("collection",{key:"collection",staticClass:"m-dashboard-box-list",attrs:{data:t.data}}):t._e(),"item_plan"===t.type?a("item_plan",{key:"item_plan",staticClass:"m-dashboard-box-list",attrs:{data:t.data},on:{refresh:function(e){return t.loadPosts(t.type)}}}):t._e(),"question"===t.type?a("question",{key:"question",staticClass:"m-dashboard-box-list",attrs:{data:t.data}}):t._e(),"paper"===t.type?a("paper",{staticClass:"m-dashboard-box-list",attrs:{data:t.data}}):t._e()]:a("el-alert",{staticClass:"m-dashboard-box-null",attrs:{title:"没有找到相关条目",type:"info",center:"","show-icon":""}}),a("el-pagination",{staticClass:"m-dashboard-box-pages",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],2)],1)}),[],!1,null,"6376c327",null));e.default=y.exports},"14f8":function(t,e,a){"use strict";a("e106")},"208a":function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"d",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return u}));var n=a("41cb"),i=a("4328"),s=a.n(i);function c(t){return Object(n.c)()({method:"GET",url:"/api/item_plan/".concat(t)})}function o(t){var e={action:t.id?"update":"create",plan:t};return Object(n.c)()({method:"POST",url:"/api/item_plan",data:s.a.stringify(e)})}function r(t){return Object(n.c)()({method:"GET",url:"/api/my/item_plans",params:t})}function u(t){return Object(n.c)()({method:"PUT",url:"/api/item_plan/remove",data:s.a.stringify({plan_id:t})})}},"2e42":function(t,e,a){"use strict";a("4065")},4065:function(t,e,a){},"581c":function(t,e,a){"use strict";a("9843")},"5d59":function(t,e,a){},"6a7f":function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"j",(function(){return c})),a.d(e,"h",(function(){return l})),a.d(e,"a",(function(){return o})),a.d(e,"i",(function(){return r})),a.d(e,"e",(function(){return u})),a.d(e,"f",(function(){return d})),a.d(e,"d",(function(){return p})),a.d(e,"c",(function(){return h}));var n=a("41cb");function i(t){return Object(n.d)().get("/api/question/"+t)}function s(t){return Object(n.d)().post("/api/question/create",t)}function c(t,e){return Object(n.d)().put("/api/question/"+t+"/update",e)}function o(t){return Object(n.d)().post("/api/question/exam-paper",t)}function r(t,e){return Object(n.d)().put("/api/question/exam-paper/"+t,e)}function u(t){return Object(n.d)().get("/api/question/exam-paper/"+t)}function l(t){return Object(n.d)().get("/api/question/my-list",{params:t})}function d(t){return Object(n.d)().get("/api/question/exam-paper?my",{params:t})}function p(t){return Object(n.d)().delete("/api/question/my/".concat(t))}function h(t){return Object(n.d)().delete("/api/question/exam-paper/my/".concat(t))}},9843:function(t,e,a){},b09a:function(t){t.exports=JSON.parse('{"e":{"radio":"单选题","checkbox":"多选题"},"c":[{"label":"默认（蓝色）","value":"default"},{"label":"PVE（绿色）","value":"green"},{"label":"PVX（橙色）","value":"orange"},{"label":"PVP（红色）","value":"red"},{"label":"PVBB（紫色）","value":"purple"}],"a":[{"label":"剑三老司机","value":"driver"}],"b":[{"label":"官方试卷","value":"official"}],"d":{"school":["七秀","万花","五毒","长歌","天策","少林","明教","苍云","纯阳","唐门","藏剑","丐帮","蓬莱","凌雪","衍天"],"subject":["语文","数学","外语","信息","物理","化学","生物","政治","历史","地理"],"game":["PVE","PVP","PVX","PVBB"],"play":["副本","宠物","家园","奇遇","成就","阵营","野外","竞技场","切磋","吃鸡"],"domain":["美容","金融","医学","法学"]}}')},d850:function(t,e,a){t.exports=a.p+"img/repo.e8c2e45e.svg"},e106:function(t,e,a){},fb92:function(t,e,a){"use strict";a("99af");function n(t){return t<10?"0"+t:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=t.getFullYear(),s=t.getMonth()+1,c=t.getDate(),o=a?"".concat(i).concat(e).concat(n(s)).concat(e).concat(n(c)):"".concat(i).concat(e).concat(s).concat(e).concat(c);return o}},ffe4:function(t,e,a){"use strict";a("5d59")}}]);
//# sourceMappingURL=chunk-0446c426.def3e2b9.js.map