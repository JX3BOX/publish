(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c13972a2"],{"0f6b":function(t,e,n){"use strict";n("f5ba")},3835:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d28b"),n("14d9"),n("d3b7"),n("3ca3"),n("ddb0");var a=n("06c5");n("d9e2");function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,i,o,r,c=[],u=!0,s=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=o.call(n)).done)&&(c.push(a.value),c.length!==e);u=!0);}catch(t){s=!0,i=t}finally{try{if(!u&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw i}}return c}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"450a":function(t,e,n){"use strict";n.r(e);var a=n("3835"),i=n("c7eb"),o=n("1da1"),r=(n("4de4"),n("caad"),n("14d9"),n("4fad"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("466d"),n("5319"),n("498a"),n("159b"),n("85e4")),c=n("c840"),u=n("65c2"),s=n("33a5"),l=n("0608"),f=n("ef77"),h=n("e4f6"),d={name:"joke",components:{"publish-header":f.a,Emotion:c.a},data:function(){return{loading:!1,processing:!1,inputVisible:!1,inputValue:"",contentLength:0,data:{type:"0",content:""},schools:[]}},computed:{id:function(){return this.$route.params.id},publishAction:function(){return this.id?h.j:h.h}},methods:{handleEmotionSelect:function(t){this.insertVariable(t.key)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&this.post.tags.push(t),this.inputVisible=!1,this.inputValue=""},insertVariable:function(t){var e=this;return Object(o.a)(Object(i.a)().mark((function n(){var a,o,r;return Object(i.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(a=document.querySelector("#textarea")).selectionStart&&0!==a.selectionStart){n.next=11;break}return o=a.selectionStart,r=a.selectionEnd,e.data.content=a.value.substring(0,o)+t+a.value.substring(r,a.value.length),n.next=7,e.$nextTick();case 7:a.focus(),a.setSelectionRange(r+t.length,r+t.length),n.next=12;break;case 11:e.data.content=t;case 12:case"end":return n.stop()}}),n)})))()},formatSchool:function(){for(var t=[],e=0,n=Object.entries(s);e<n.length;e++){var i=Object(a.a)(n[e],2),o=i[0],r=i[1],c={key:o,value:String(r),path:u.__imgPath+"image/school/".concat(o,".png")};t.push(c)}this.schools=t},init:function(){var t=this;if(this.id)return this.loading=!0,Object(h.d)(this.id).then((function(e){var n;t.data=null==e||null===(n=e.data)||void 0===n?void 0:n.data})).finally((function(){t.loading=!1}))},publish:function(){var t=this;this.check()&&(this.processing=!0,this.publishAction(this.data).then((function(e){var n,a,i=t.id||(null==e||null===(n=e.data)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.id);t.$message({message:"发布成功,请等待审核",type:"success"}),setTimeout((function(){location.href=Object(r.getLink)("joke",i)}),500)})).finally((function(){t.processing=!1})))},check:function(){var t,e=Object.keys(l),n=this.data.content.trim(),a=/(#[\u4e00-\u9fa5]{1})/g,i=/(#[\u4e00-\u9fa5]{2})/g,o=/(#[\u4e00-\u9fa5]{3})/g;if(!n.length)return this.$notify({title:"错误",message:"内容不能为空",type:"error"}),!1;var r=n.match(a)?n.match(a).filter((function(t){return e.includes(t)})):[];r.forEach((function(t){return n.replace(t,"")}));var c=n.match(i)?n.match(i).filter((function(t){return e.includes(t)})):[];c.forEach((function(t){return n.replace(t,"")}));var u=n.match(o)?n.match(o).filter((function(t){return e.includes(t)})):[];u.forEach((function(t){return n.replace(t,"")}));var s=r.length+c.length+u.length;if(this.contentLength=s,s>10)return this.$notify({title:"错误",message:"表情个数不能超过10个",type:"error"}),!1;var f=(null===(t=n.match(/[^\x00-\xff]/g))||void 0===t?void 0:t.length)||0;return!(2*f+(n.length-f)>128)||(this.$notify({title:"错误",message:"内容长度不能超过128个字符",type:"error"}),!1)}},created:function(){this.init(),this.formatSchool()},watch:{"$route.params.id":function(t){t&&this.init()}}},p=(n("0f6b"),n("2877")),b=Object(p.a)(d,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box"},[e("publish-header",{attrs:{name:"剑三骚话"}}),e("Emotion",{staticClass:"m-publish-joke-emotion",on:{selected:t.handleEmotionSelect}}),e("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[e("el-form-item",{attrs:{label:"门派"}},[e("el-select",{attrs:{placeholder:"请选择门派"},model:{value:t.data.type,callback:function(e){t.$set(t.data,"type",e)},expression:"data.type"}},t._l(t.schools,(function(n){return e("el-option",{key:n.value,attrs:{value:n.key,label:n.value}},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(n.value))]),e("span",{staticStyle:{float:"right"}},[e("img",{attrs:{src:n.path,width:"32",alt:n.key}})])])})),1)],1),e("el-form-item",{attrs:{label:"内容"}},[e("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容",id:"textarea",maxlength:128,minlength:1,"show-word-limit":""},model:{value:t.data.content,callback:function(e){t.$set(t.data,"content",e)},expression:"data.content"}})],1),e("div",{staticClass:"m-publish-buttons"},[e("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:t.publish}},[t._v("发    布")])],1)],1)],1)}),[],!1,null,"b63d65e6",null);e.default=b.exports},b3aa:function(t,e,n){},b4e5:function(t,e,n){"use strict";n("b3aa")},e4f6:function(t,e,n){"use strict";n.d(e,"g",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"i",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"k",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"j",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"f",(function(){return d})),n.d(e,"b",(function(){return p}));var a=n("41cb");function i(t){return Object(a.a)().post("/api/cms/post/emotion",t)}function o(t,e){return Object(a.a)().put("/api/cms/post/emotion/".concat(t),e)}function r(t){return Object(a.a)().get("/api/cms/post/emotion/".concat(t))}function c(t){return Object(a.a)().get("/api/cms/post/emotions/my",{params:t})}function u(t){return Object(a.a)().delete("/api/cms/post/emotion/".concat(t))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"emotions";return Object(a.c)().post("/api/".concat(e,"/upload"),t)}function l(t){return Object(a.c)().post("/api/joke/share",t)}function f(t){return Object(a.c)().put("/api/joke/share/".concat(t.id),t)}function h(t){return Object(a.a)().get("/api/cms/post/joke/".concat(t))}function d(t){return Object(a.a)().get("/api/cms/post/jokes/my",{params:t})}function p(t){return Object(a.a)().delete("/api/cms/post/joke/".concat(t))}},ef77:function(t,e,n){"use strict";n("b0c0"),n("14d9");var a={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},i=(n("b4e5"),n("2877")),o=Object(i.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},f5ba:function(t,e,n){}}]);
//# sourceMappingURL=chunk-c13972a2.2820083d.js.map