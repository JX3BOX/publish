(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-637b28ea"],{"0d97":function(t,a,e){"use strict";e("e6f0")},1856:function(t,a,e){"use strict";e.d(a,"b",(function(){return s})),e.d(a,"d",(function(){return u})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i})),e.d(a,"e",(function(){return c}));var n=e("41cb");function s(t){return Object(n.c)()({method:"GET",url:"/api/my/namespaces",params:t})}function i(t){return Object(n.b)().post("/api/cms/namespace",t)}function c(t,a){return Object(n.b)().put("/api/cms/namespace/".concat(t),a)}function o(t){return Object(n.b)().get("/api/cms/namespace/".concat(t))}function u(t){return Object(n.b)().get("/api/cms/namespace-key",{params:{key:t}})}},"6f6a":function(t,a,e){"use strict";e.r(a);e("d3b7");var n=e("1856"),s=(e("85e4"),e("fb92")),i={0:"待审核",1:"正常启用",2:"未通过审核"},c={name:"namespace",props:["data"],data:function(){return{loading:!1,list:[],statusmap:i,per:16,total:1,page:1}},computed:{params:function(){return{user_id:this.uid,page:this.page,limit:this.per}},uid:function(){return this.$store.state.uid},publishLink:function(){return"./#/namespace"}},methods:{edit:function(t,a,e){location.href="team"!=a?"./#/namespace/"+t:"/team/org/edit/"+e+"?tab=other"},loadData:function(){var t=this;Object(n.b)(this.params).then((function(a){t.list=a.data.data.data,t.total=a.data.data.total})).finally((function(){t.loading=!1}))}},mounted:function(){this.loading=!0,this.loadData()},filters:{dateFormat:function(t){return Object(s.a)(new Date(1e3*~~t))}},watch:{params:{deep:!0,immediate:!0,handler:function(){this.loadData()}}},components:{}},o=(e("0d97"),e("2877")),u=Object(o.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"m-dashboard m-dashboard-work m-dashboard-other"},[e("div",{staticClass:"m-dashboard-work-header"},[e("h2",{staticClass:"u-title"},[t._v("我的铭牌")]),e("a",{staticClass:"u-publish el-button el-button--primary el-button--small",attrs:{href:t.publishLink}},[e("i",{staticClass:"el-icon-document"}),t._v(" 创建铭牌 ")])]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-namespace-list"},t._l(t.list,(function(a,n){return e("div",{key:n,staticClass:"u-namespace-item"},[e("div",{staticClass:"u-item"},[e("div",{staticClass:"u-box"},[e("div",{staticClass:"u-title"},[e("span",{staticClass:"el-icon-postcard u-icon"}),e("a",{staticClass:"u-name",attrs:{target:"_blank",href:a.link}},[t._v(t._s(a.key||"未知"))])]),e("div",{staticClass:"u-desc"},[e("span",{staticClass:"u-status u-desc-subitem"},[t._v(" 状态: "),e("b",{class:"status"+a.status},[t._v(t._s(t.statusmap[a.status]))])]),e("time",{staticClass:"u-time u-desc-subitem"},[t._v("创建于 : "+t._s(t._f("dateFormat")(a.created)))])])]),e("el-button-group",{staticClass:"u-action"},[e("el-button",{attrs:{size:"mini",icon:"el-icon-edit",title:"编辑"},on:{click:function(e){return t.edit(a.ID,a.source_type,a.source_id)}}})],1)],1)])})),0),e("div",{staticClass:"m-namespace-pages"},[e("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next,jumper","page-size":t.per,total:t.total,"current-page":t.page,"hide-on-single-page":!0},on:{"update:currentPage":function(a){t.page=a},"update:current-page":function(a){t.page=a}}})],1)])}),[],!1,null,"3ea74a9b",null);a.default=u.exports},e6f0:function(t,a,e){},fb92:function(t,a,e){"use strict";e("99af");function n(t){return t<10?"0"+t:t}a.a=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=t.getFullYear(),i=t.getMonth()+1,c=t.getDate(),o=e?"".concat(s).concat(a).concat(n(i)).concat(a).concat(n(c)):"".concat(s).concat(a).concat(i).concat(a).concat(c);return o}}}]);
//# sourceMappingURL=chunk-637b28ea.4900c53f.js.map