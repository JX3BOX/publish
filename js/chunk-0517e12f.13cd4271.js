(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0517e12f"],{"41a2":function(t,n,c){"use strict";c.r(n);c("fb6a"),c("d3b7");var i=c("221a"),e=c("ef77"),o=c("81fc"),u=c("2ef0"),a={name:"community_reply",components:{Tinymce:i.a,"publish-header":e.a},computed:{id:function(){return this.$route.params.id}},data:function(){return{data:{content:""},loading:!1,processing:!1}},watch:{id:{immediate:!0,handler:function(t){t&&this.loadData()}}},methods:{loadData:function(){var t=this;this.loading=!0,Object(o.g)(this.id).then((function(n){t.data=n.data.data})).finally((function(){t.loading=!1}))},onSubmit:function(){var t=this;this.processing=!0;var n=Object(u.pick)(this.data,["content"]);Object(o.o)(this.id,n).then((function(){t.$message({message:"更新回帖成功",type:"success"}),setTimeout((function(){var n;location.href="/community/".concat(null===(n=t.data)||void 0===n?void 0:n.topic_id)}),500)})).finally((function(){t.processing=!1}))},getContent:function(t){var n,c,i=null==t||null===(n=t.topic)||void 0===n||null===(c=n.title)||void 0===c?void 0:c.slice(0,30);return i?"回复：".concat(i):""}}},s=c("2877"),r=Object(s.a)(a,(function(){var t=this,n=t._self._c;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"".concat(t.getContent(t.data))}}),n("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[n("div",{staticClass:"m-publish-content"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("回帖内容")]),n("Tinymce",{attrs:{attachmentEnable:!0,resourceEnable:!0},model:{value:t.data.content,callback:function(n){t.$set(t.data,"content",n)},expression:"data.content"}})],1),n("div",{staticClass:"m-publish-buttons"},[n("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:t.onSubmit}},[t._v("更    新")])],1)])],1)}),[],!1,null,null,null);n.default=r.exports},"81fc":function(t,n,c){"use strict";c.d(n,"k",(function(){return o})),c.d(n,"f",(function(){return s})),c.d(n,"d",(function(){return l})),c.d(n,"l",(function(){return f})),c.d(n,"a",(function(){return r})),c.d(n,"i",(function(){return m})),c.d(n,"m",(function(){return u})),c.d(n,"h",(function(){return p})),c.d(n,"g",(function(){return b})),c.d(n,"c",(function(){return h})),c.d(n,"o",(function(){return y})),c.d(n,"e",(function(){return g})),c.d(n,"b",(function(){return v})),c.d(n,"j",(function(){return d})),c.d(n,"n",(function(){return a}));c("99af");var i=c("41cb"),e="/api/next2";function o(t){return Object(i.c)().post("".concat(e,"/community/discussion/topic"),t)}function u(t,n){return Object(i.c)().put("".concat(e,"/community/discussion/my/topic/item/").concat(t),n)}function a(t,n){return Object(i.c)().put("".concat(e,"/community/discussion/manage/topic/item/").concat(t,"/update"),n)}function s(t){return Object(i.c)().get("".concat(e,"/community/discussion/my/topic/list"),{params:t})}function r(t){return Object(i.c)().delete("".concat(e,"/community/discussion/my/topic/item/").concat(t))}function m(t){return Object(i.c)().get("".concat(e,"/community/discussion/my/topic/item/").concat(t))}function d(t){return Object(i.c)().get("".concat(e,"/community/discussion/manage/topic/item/").concat(t))}function l(t){return Object(i.c)().get("".concat(e,"/community/discussion/topic/list"),{params:t})}function f(t,n){return Object(i.c)().put("".concat(e,"/community/discussion/my/topic/item/").concat(t,"/self-visit/").concat(n))}function p(t){return Object(i.c)().get("".concat(e,"/community/discussion/my/reply/list"),{params:t})}function b(t){return Object(i.c)().get("".concat(e,"/community/discussion/my/reply/item/").concat(t))}function h(t){return Object(i.c)().delete("".concat(e,"/community/discussion/my/reply/item/").concat(t))}function y(t,n){return Object(i.c)().put("".concat(e,"/community/discussion/my/reply/item/").concat(t),n)}function g(t){return Object(i.c)().get("".concat(e,"/community/discussion/my/comment/list"),{params:t})}function v(t){return Object(i.c)().delete("".concat(e,"/community/discussion/my/comment/item/").concat(t))}},b3aa:function(t,n,c){},b4e5:function(t,n,c){"use strict";c("b3aa")},ef77:function(t,n,c){"use strict";c("b0c0"),c("14d9");var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},e=(c("b4e5"),c("2877")),o=Object(e.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);n.a=o.exports}}]);
//# sourceMappingURL=chunk-0517e12f.13cd4271.js.map