(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7865f088"],{"024d":function(t,e,a){"use strict";a.r(e);var i,s=a("c7eb"),n=a("1da1"),c=(a("14d9"),a("99af"),a("a434"),a("e4f1")),o={name:"draft",props:[],components:{},data:function(){return{data:[]}},computed:{isSupported:function(){return!!window.localStorage},isNotNull:function(){return!!this.data&&!!this.data.length},isWeb:function(t){return"web"===t.activeName},db:function(){return this.$store.state.db}},methods:{loadDrafts:(i=Object(n.a)(Object(s.a)().mark((function t(){var e,a,i;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.db.length();case 2:e=t.sent,a=0;case 4:if(!(a<e)){t.next=18;break}return t.next=7,this.db.key(a);case 7:return i=t.sent,t.t0=this.data,t.t1=i,t.next=12,this.db.getItem(i);case 12:t.t2=t.sent,t.t3={key:t.t1,data:t.t2},t.t0.push.call(t.t0,t.t3);case 15:a++,t.next=4;break;case 18:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),clean:function(){var t=this;this.$alert("此操作不可逆！请谨慎操作！","警告",{confirmButtonText:"确定清空",callback:function(e){t.db.clear(),t.data=[],t.$notify({title:"清空成功",type:"success",message:"本地草稿清空成功"})}})},preview:function(t){this.$router.push("/".concat(t.data.post_type,"/").concat(t.data.ID,"?mode=draft&key=").concat(t.key))},del:function(t,e){var a=this;this.db.removeItem(t.key).then((function(){a.data.splice(e,1)}))},onCopy:function(t){this.$notify({title:"复制成功",message:"草稿源码复制成功",type:"success"})},onError:function(){this.$notify.error({title:"复制失败",message:"请手动复制"})}},filters:{itemName:function(t){var e;return(null==t||null===(e=t.data)||void 0===e?void 0:e.post_title)||"".concat(t.key)},formatDate:function(t){var e,a=null==t||null===(e=t.data)||void 0===e?void 0:e.cache_time;return a?Object(c.b)(new Date(a)):""}},created:function(){this.loadDrafts()},mounted:function(){}},l=(a("c31a"),a("2877")),r=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish m-draft"},[e("div",{staticClass:"m-draft-header"},[e("h1",{staticClass:"m-title"},[e("i",{staticClass:"el-icon-receiving"}),t._v(" 草稿箱 "),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top","popper-class":"m-draft-help-tip"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v("以下草稿是编辑器在当前浏览器下产生的临时本地草稿HTML源码，"),e("br"),t._v("并不存在于服务器中，仅用于断网或窗口异常关闭时恢复。")]),e("span",{staticClass:"u-help"},[e("i",{staticClass:"el-icon-question"}),t._v(" "),e("span",[t._v("使用帮助")])])])],1),e("div",{staticClass:"u-op"},[e("el-button",{attrs:{plain:"",icon:"el-icon-delete",size:"small",disabled:!t.isNotNull},on:{click:t.clean}},[t._v("清空")])],1)]),t.isSupported?[t.isNotNull?e("div",{staticClass:"m-draft-list"},[e("ul",{staticClass:"u-list"},t._l(t.data,(function(a,i){return e("li",{key:i,staticClass:"u-item"},[e("div",{staticClass:"u-label",class:{on:!!a.active}},[e("i",{staticClass:"u-item-icon el-icon-document"}),e("span",{staticClass:"u-item-key"},[t._v(t._s(t._f("itemName")(a))+" "),a.data.cache_time?e("em",{staticClass:"u-item-time"},[t._v("( "+t._s(t._f("formatDate")(a))+" )")]):t._e()]),e("div",{staticClass:"u-op"},[e("el-button",{staticClass:"u-delete",attrs:{type:"primary",plain:"",icon:"el-icon-view",size:"mini"},on:{click:function(e){return e.stopPropagation(),t.preview(a)}}},[t._v("预览")]),e("el-popconfirm",{attrs:{title:"确定删除吗？"},on:{confirm:function(e){return t.del(a,i)}}},[e("el-button",{staticClass:"u-delete",attrs:{slot:"reference",plain:"",icon:"el-icon-delete",size:"mini"},on:{click:function(t){t.stopPropagation()}},slot:"reference"},[t._v("删除")])],1)],1)])])})),0)]):e("div",{staticClass:"m-draft-null"},[e("i",{staticClass:"el-icon-warning-outline"}),t._v(" 暂无任何内容")])]:[e("el-alert",{attrs:{title:"您的浏览器太旧了，不支持本功能。",type:"error","show-icon":""}})]],2)}),[],!1,null,null,null);e.default=r.exports},c31a:function(t,e,a){"use strict";a("ca29")},ca29:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7865f088.8b628489.js.map