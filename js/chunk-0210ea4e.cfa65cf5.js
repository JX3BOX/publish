(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0210ea4e"],{"024d":function(t,e,a){"use strict";a.r(e);a("2ca0"),a("d3b7"),a("159b"),a("a434");var i={name:"draft",props:[],components:{},data:function(){return{data:[]}},computed:{isSupported:function(){return!!window.localStorage},isNotNull:function(){return!!this.data&&!!this.data.length}},methods:{loadDrafts:function(){for(var t=localStorage.length,e=0;e<t;e++){var a=localStorage.key(e);a.startsWith("tinymce-autosave-")&&this.data.push({key:a,data:localStorage.getItem(a)})}},clean:function(){var t=this;this.$alert("此操作不可逆！请谨慎操作！","警告",{confirmButtonText:"确定清空",callback:function(e){t.data.forEach((function(t){localStorage.removeItem(t.key)})),t.data=[],t.$notify({title:"清空成功",type:"success",message:"本地草稿清空成功"})}})},preview:function(t){t.active=!t.active,this.$forceUpdate()},del:function(t,e){localStorage.removeItem(t.key),this.data.splice(e,1)},onCopy:function(t){this.$notify({title:"复制成功",message:"草稿源码复制成功",type:"success"})},onError:function(){this.$notify.error({title:"复制失败",message:"请手动复制"})}},filters:{},created:function(){localStorage&&this.loadDrafts()},mounted:function(){}},s=(a("aaa6"),a("2877")),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish m-draft"},[a("div",{staticClass:"m-draft-header"},[t._m(0),a("div",{staticClass:"u-op"},[a("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"small",disabled:!t.isNotNull},on:{click:t.clean}},[t._v("清空")])],1)]),t.isSupported?[a("div",{staticClass:"m-draft-warning"},[a("el-alert",{attrs:{title:"以下草稿为编辑器为该浏览器产生的临时本地草稿HTML源码，并不存在于服务器中，仅用于断网或窗口异常关闭时恢复。",type:"warning","show-icon":""}})],1),t.isNotNull?a("div",{staticClass:"m-draft-list"},[a("ul",{staticClass:"u-list"},t._l(t.data,(function(e,i){return a("li",{key:i,staticClass:"u-item",on:{click:function(a){return t.preview(e)}}},[a("div",{staticClass:"u-label",class:{on:!!e.active}},[a("i",{staticClass:"u-item-icon",class:e.active?"el-icon-folder-opened":"el-icon-folder"}),a("span",{staticClass:"u-item-key"},[t._v(t._s(e.key))]),a("div",{staticClass:"u-op"},[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.data,expression:"item.data",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"u-delete",attrs:{type:"info",icon:"el-icon-document-copy",size:"mini"},on:{click:function(t){t.stopPropagation()}}},[t._v("复制")]),a("el-popconfirm",{attrs:{title:"确定删除吗？"},on:{confirm:function(a){return t.del(e,i)}}},[a("el-button",{staticClass:"u-delete",attrs:{slot:"reference",type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(t){t.stopPropagation()}},slot:"reference"},[t._v("删除")])],1)],1)]),e.active?a("div",{staticClass:"u-value"},[a("div",{staticClass:"u-content"},[t._v(t._s(e.data))])]):t._e()])})),0)]):a("div",{staticClass:"m-draft-null"},[a("i",{staticClass:"el-icon-warning-outline"}),t._v(" 暂无任何内容 ")])]:[a("el-alert",{attrs:{title:"您的浏览器太旧了，不支持本功能。",type:"error","show-icon":""}})]],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"m-title"},[e("i",{staticClass:"el-icon-receiving"}),this._v(" 草稿箱 "),e("a",{staticClass:"u-help",attrs:{href:"/tool/21933",target:"_blank"}},[e("i",{staticClass:"el-icon-question"}),this._v(" 使用帮助 ")])])}],!1,null,null,null);e.default=o.exports},"402b":function(t,e,a){},aaa6:function(t,e,a){"use strict";a("402b")}}]);
//# sourceMappingURL=chunk-0210ea4e.cfa65cf5.js.map