(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-685f576f"],{1013:function(t,a,n){},1856:function(t,a,n){"use strict";n.d(a,"b",(function(){return s})),n.d(a,"d",(function(){return u})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return c})),n.d(a,"e",(function(){return i}));var e=n("41cb");function s(){return Object(e.c)()({method:"GET",url:"/api/my/namespaces"})}function c(t){return Object(e.b)().post("/api/cms/namespace",t)}function i(t,a){return Object(e.b)().put("/api/cms/namespace/".concat(t),a)}function o(t){return Object(e.b)().get("/api/cms/namespace/".concat(t))}function u(t){return Object(e.b)().get("/api/cms/namespace-key",{params:{key:t}})}},"6f25":function(t,a,n){"use strict";n("1013")},"6f6a":function(t,a,n){"use strict";n.r(a);n("d3b7");var e=n("1856"),s=(n("85e4"),n("fb92")),c={0:"待审核",1:"正常启用",2:"未通过审核"},i={name:"namespace",props:["data"],data:function(){return{loading:!1,list:[],statusmap:c}},computed:{publishLink:function(){return"./#/namespace"}},methods:{edit:function(t,a,n){location.href="team"!=a?"./#/namespace/"+t:"/team/org/edit/"+n+"?tab=other"}},mounted:function(){var t=this;this.loading=!0,Object(e.b)().then((function(a){t.list=a.data.data.data})).finally((function(){t.loading=!1}))},filters:{dateFormat:function(t){return Object(s.a)(new Date(1e3*~~t))}},components:{}},o=(n("6f25"),n("2877")),u=Object(o.a)(i,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-dashboard m-dashboard-work m-dashboard-other"},[n("div",{staticClass:"m-dashboard-work-header"},[n("h2",{staticClass:"u-title"},[t._v("我的铭牌")]),n("a",{staticClass:"u-publish el-button el-button--primary el-button--small",attrs:{href:t.publishLink}},[n("i",{staticClass:"el-icon-document"}),t._v(" 创建铭牌 ")])]),n("el-row",{staticClass:"m-namespace",attrs:{gutter:20}},t._l(t.list,(function(a,e){return n("el-col",{key:e,attrs:{span:6}},[n("div",{staticClass:"u-item"},[n("span",{staticClass:"el-icon-postcard u-icon"}),n("a",{staticClass:"u-title",attrs:{target:"_blank",href:a.link}},[t._v(t._s(a.key||"未知"))]),n("div",{staticClass:"u-desc"},[n("span",{staticClass:"u-status u-desc-subitem"},[t._v(" 状态: "),n("b",{class:"status"+a.status},[t._v(t._s(t.statusmap[a.status]))])]),n("time",{staticClass:"u-time u-desc-subitem"},[t._v("提交于: "+t._s(t._f("dateFormat")(a.created)))])]),n("el-button-group",{staticClass:"u-action"},[n("el-button",{attrs:{size:"mini",icon:"el-icon-edit",title:"编辑"},on:{click:function(n){return t.edit(a.ID,a.source_type,a.source_id)}}})],1)],1)])})),1)],1)}),[],!1,null,"582e7052",null);a.default=u.exports},fb92:function(t,a,n){"use strict";n("99af");function e(t){return t<10?"0"+t:t}a.a=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=t.getFullYear(),c=t.getMonth()+1,i=t.getDate(),o=n?"".concat(s).concat(a).concat(e(c)).concat(a).concat(e(i)):"".concat(s).concat(a).concat(c).concat(a).concat(i);return o}}}]);
//# sourceMappingURL=chunk-685f576f.a7161863.js.map