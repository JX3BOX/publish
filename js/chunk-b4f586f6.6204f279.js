(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b4f586f6"],{abe2:function(t,e,n){"use strict";n("d810")},c1a7:function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("ef77"),a=n("d0a1"),l={name:"Demo",props:[],components:{"publish-header":i.a,"publish-title":a.a},data:function(){return{name:"Demo",form:{title:""}}},computed:{},methods:{},filters:{},created:function(){},mounted:function(){}},o=n("2877"),s=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-box"},[e("publish-header",{attrs:{name:t.name}}),e("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[e("publish-title",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),e("el-divider",{attrs:{"content-position":"left"}},[t._v("块标题")]),e("div",[t._v(" ... ")])],1)],1)}),[],!1,null,null,null);e.default=s.exports},d0a1:function(t,e,n){"use strict";var i={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},a=n("2877"),l=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():e("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),e("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},d810:function(t,e,n){},ef77:function(t,e,n){"use strict";n("b0c0");var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},a=(n("abe2"),n("2877")),l=Object(a.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports}}]);
//# sourceMappingURL=chunk-b4f586f6.6204f279.js.map