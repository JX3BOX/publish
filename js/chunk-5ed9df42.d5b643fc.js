(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5ed9df42"],{"1ad1":function(t,e,n){},3835:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");var r=n("06c5");function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"450a":function(t,e,n){"use strict";n.r(e);var r=n("2909"),o=n("3835");n("d3b7");function i(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}n("96cf"),n("4de4"),n("4fad"),n("b64b"),n("498a"),n("ac1f"),n("466d"),n("caad"),n("2532"),n("159b"),n("5319");var a=n("85e4"),s=n("c840"),c=n("65c2"),u=n("f3cf"),l=n("e9a5"),h=n("ef77"),f=n("c402"),p={name:"joke",components:{"publish-header":h.a,Emotion:s.a},data:function(){return{loading:!1,processing:!1,inputVisible:!1,inputValue:"",contentLength:0,post:{ID:"",post_status:"publish",post_type:"joke",post_title:"",post_subtype:"0",post_meta:{},post_content:"",post_mode:"joke",original:1,client:"all",lang:"cn",zlp:"",post_excerpt:"",post_banner:"",post_collection:"",comment:0,visible:0,tags:[]},schools:[]}},computed:{id:function(){return~~this.post.ID},data:function(){return this.id?[this.id,this.post]:[this.post]}},methods:{handleEmotionSelect:function(t){this.insertVariable(t)},handleClose:function(t){this.post.tags=this.post.tags.filter((function(e){return e!==t}))},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&this.post.tags.push(t),this.inputVisible=!1,this.inputValue=""},insertVariable:function(t){var e,n=this;return(e=regeneratorRuntime.mark((function e(){var r,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=document.querySelector("#textarea")).selectionStart&&0!==r.selectionStart){e.next=11;break}return o=r.selectionStart,i=r.selectionEnd,n.post.post_title=r.value.substring(0,o)+t+r.value.substring(i,r.value.length),e.next=7,n.$nextTick();case 7:r.focus(),r.setSelectionRange(i+t.length,i+t.length),e.next=12;break;case 11:n.post.post_title=t;case 12:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)}))})()},formatSchool:function(){for(var t=[],e=0,n=Object.entries(u.a);e<n.length;e++){var r=Object(o.a)(n[e],2),i=r[0],a=r[1],s={key:i,value:String(a),path:c.__imgPath+"image/school/".concat(a,".png")};t.push(s)}this.schools=t},init:function(){var t=this;return this.loading=!0,this.$route.params.id?Object(f.d)(this.$route.params.id).then((function(e){return t.post=e.data.data,e.data.data})).finally((function(){t.loading=!1})):new Promise((function(t,e){t()})).finally((function(){t.loading=!1}))},publish:function(t,e){var n=this;this.check()&&(this.post.post_status=t,this.processing=!0,f.e.apply(void 0,Object(r.a)(this.data)).then((function(t){var r=t.data.data;n.done(e,r)})).finally((function(){n.processing=!1})))},done:function(t,e){t?(this.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(a.getLink)(e.post_type,e.ID)}),500)):(this.$notify({title:"保存成功",message:"云端草稿保存成功",type:"success"}),this.post=e,this.$route.params.id||this.$router.push({params:{id:e.ID}}))},check:function(){var t,e=Object.keys(l),n=this.post.post_title.trim(),r=/(#[\u4e00-\u9fa5]{1})/g,o=/(#[\u4e00-\u9fa5]{2})/g,i=/(#[\u4e00-\u9fa5]{3})/g;if(!n.length)return this.$notify({title:"错误",message:"内容不能为空",type:"error"}),!1;var a=n.match(r)?n.match(r).filter((function(t){return e.includes(t)})):[];a.forEach((function(t){return n.replace(t,"")}));var s=n.match(o)?n.match(o).filter((function(t){return e.includes(t)})):[];s.forEach((function(t){return n.replace(t,"")}));var c=n.match(i)?n.match(i).filter((function(t){return e.includes(t)})):[];c.forEach((function(t){return n.replace(t,"")}));var u=a.length+s.length+c.length;if(this.contentLength=u,u>10)return this.$notify({title:"错误",message:"表情个数不能超过10个",type:"error"}),!1;var h=(null===(t=n.match(/[^\x00-\xff]/g))||void 0===t?void 0:t.length)||0;return!(2*h+(n.length-h)>128)||(this.$notify({title:"错误",message:"内容长度不能超过128个字符",type:"error"}),!1)}},created:function(){this.init(),this.formatSchool()},watch:{"$route.params.id":function(t){t&&this.init()}}},d=(n("c135"),n("2877")),m=Object(d.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"剑三骚话"}}),n("Emotion",{staticClass:"m-publish-joke-emotion",on:{selected:t.handleEmotionSelect}}),n("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[n("el-form-item",{attrs:{label:"门派"}},[n("el-select",{attrs:{placeholder:"请选择门派"},model:{value:t.post.post_subtype,callback:function(e){t.$set(t.post,"post_subtype",e)},expression:"post.post_subtype"}},t._l(t.schools,(function(e){return n("el-option",{key:e.value,attrs:{value:e.value,label:e.key}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.key))]),n("span",{staticStyle:{float:"right"}},[n("img",{attrs:{src:e.path,width:"32",alt:e.key}})])])})),1)],1),n("el-form-item",{attrs:{label:"内容"}},[n("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容",id:"textarea",maxlength:128,minlength:1,"show-word-limit":""},model:{value:t.post.post_title,callback:function(e){t.$set(t.post,"post_title",e)},expression:"post.post_title"}})],1),n("el-form-item",{attrs:{label:"标签"}},[n("div",{staticStyle:{display:"flex","margin-top":"5px"}},[t._l(t.post.tags,(function(e){return n("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){return t.handleClose(e)}}},[t._v(t._s(e))])})),t.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("+ 新标签")])],2)]),n("div",{staticClass:"m-publish-buttons"},[n("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发    布")]),n("el-button",{attrs:{type:"plain",disabled:t.processing},on:{click:function(e){return t.publish("draft",!1)}}},[t._v("保存为草稿")])],1)],1)],1)}),[],!1,null,"d7c75efc",null);e.default=m.exports},"96cf":function(t,e){!function(e){"use strict";var n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",c="object"==typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=e.regeneratorRuntime=c?t.exports:{}).wrap=m;var l={},h={};h[i]=function(){return this};var f=Object.getPrototypeOf,p=f&&f(f(j([])));p&&p!==n&&r.call(p,i)&&(h=p);var d=b.prototype=y.prototype=Object.create(h);g.prototype=d.constructor=b,b.constructor=g,b[s]=g.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(d),t},u.awrap=function(t){return{__await:t}},w(x.prototype),x.prototype[a]=function(){return this},u.AsyncIterator=x,u.async=function(t,e,n,r){var o=new x(m(t,e,n,r));return u.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(d),d[s]="Generator",d[i]=function(){return this},d.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}}}function m(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=_(a,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=v(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function y(){}function g(){}function b(){}function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,a){var s=v(t[n],t,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){c.value=t,i(c)}),a)}a(s.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=v(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}}(function(){return this}()||Function("return this")())},c135:function(t,e,n){"use strict";n("1ad1")},ef77:function(t,e,n){"use strict";var r={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){this.$router.push("/")}},mounted:function(){},components:{}},o=n("2877"),i=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports}}]);
//# sourceMappingURL=chunk-5ed9df42.d5b643fc.js.map