(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c0eb95ae"],{"06b0":function(t,a,e){"use strict";e("3a4b")},1856:function(t,a,e){"use strict";e.d(a,"b",(function(){return s})),e.d(a,"d",(function(){return u})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i})),e.d(a,"e",(function(){return c}));var n=e("41cb");function s(t){return Object(n.b)()({method:"GET",url:"/api/my/namespaces",params:t})}function i(t){return Object(n.a)().post("/api/cms/namespace",t)}function c(t,a){return Object(n.a)().put("/api/cms/namespace/".concat(t),a)}function o(t){return Object(n.a)().get("/api/cms/namespace/".concat(t))}function u(t){return Object(n.a)().get("/api/cms/namespace-key",{params:{key:t}})}},"3a4b":function(t,a,e){},"6f6a":function(t,a,e){"use strict";e.r(a);e("9911"),e("d3b7");var n=e("1856"),s=(e("85e4"),e("fb92")),i={0:"待审核",1:"正常启用",2:"未通过审核"},c={name:"namespace",props:["data"],data:function(){return{loading:!1,list:[],statusmap:i,per:16,total:1,page:1}},computed:{params:function(){return{user_id:this.uid,page:this.page,limit:this.per}},uid:function(){return this.$store.state.uid},publishLink:function(){return"./#/namespace"}},methods:{edit:function(t,a,e){location.href="team"!=a?"./#/namespace/"+t:"/team/org/edit/"+e+"?tab=other"},loadData:function(){var t=this;this.loading=!0,Object(n.b)(this.params).then((function(a){t.list=a.data.data.data,t.total=a.data.data.total})).finally((function(){t.loading=!1}))}},mounted:function(){this.loadData()},filters:{dateFormat:function(t){return Object(s.a)(new Date(1e3*~~t))}},watch:{params:{deep:!0,immediate:!0,handler:function(){this.loadData()}}},components:{}},o=(e("06b0"),e("2877")),u=Object(o.a)(c,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-dashboard m-dashboard-work m-dashboard-other"},[a("div",{staticClass:"m-dashboard-work-header"},[a("h2",{staticClass:"u-title"},[t._v("剑三铭牌")]),a("a",{staticClass:"u-publish el-button el-button--primary el-button--small",attrs:{href:t.publishLink}},[a("i",{staticClass:"el-icon-document"}),t._v(" 创建铭牌 ")])]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-namespace-box"},[t.list&&t.list.length?a("el-row",{staticClass:"m-namespace-list",attrs:{gutter:20}},t._l(t.list,(function(e,n){return a("el-col",{key:n,attrs:{span:6}},[a("div",{staticClass:"u-namespace-item"},[a("div",{staticClass:"u-item"},[a("div",{staticClass:"u-box"},[a("div",{staticClass:"u-title"},[a("span",{staticClass:"el-icon-postcard u-icon"}),a("a",{staticClass:"u-name",attrs:{target:"_blank",href:e.link}},[t._v(t._s(e.key||"未知"))])]),a("div",{staticClass:"u-desc"},[a("span",{staticClass:"u-status u-desc-subitem"},[t._v(" 状态: "),a("b",{class:"status".concat(e.status)},[t._v(t._s(t.statusmap[e.status]))])]),a("time",{staticClass:"u-time u-desc-subitem"},[t._v("创建于 : "+t._s(t._f("dateFormat")(e.created)))])])]),a("el-button-group",{staticClass:"u-action"},[a("el-button",{attrs:{size:"mini",icon:"el-icon-edit",title:"编辑"},on:{click:function(a){return t.edit(e.ID,e.source_type,e.source_id)}}})],1)],1)])])})),1):a("el-alert",{staticClass:"m-dashboard-box-null",attrs:{title:"没有找到相关条目",type:"info",center:"","show-icon":""}}),a("div",{staticClass:"m-namespace-pages"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next,jumper","page-size":t.per,total:t.total,"current-page":t.page,"hide-on-single-page":!0},on:{"update:currentPage":function(a){t.page=a},"update:current-page":function(a){t.page=a}}})],1)],1)])}),[],!1,null,"09f21bd2",null);a.default=u.exports},fb92:function(t,a,e){"use strict";e("99af");function n(t){return t<10?"0"+t:t}a.a=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=t.getFullYear(),i=t.getMonth()+1,c=t.getDate(),o=e?"".concat(s).concat(a).concat(n(i)).concat(a).concat(n(c)):"".concat(s).concat(a).concat(i).concat(a).concat(c);return o}}}]);
//# sourceMappingURL=chunk-c0eb95ae.42aa7a8c.js.map