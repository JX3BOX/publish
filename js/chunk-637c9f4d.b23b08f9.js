(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-637c9f4d"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var a=n("6b75");function i(t,e){if(t){if("string"==typeof t)return Object(a.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(t,e):void 0}}},"1ad1":function(t,e,n){},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("6b75");n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");var i=n("06c5");function r(t){return function(t){if(Array.isArray(t))return Object(a.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},3835:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");var a=n("06c5");function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,i,r=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(a=n.next()).done)&&(r.push(a.value),!e||r.length!==e);o=!0);}catch(t){s=!0,i=t}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return r}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"450a":function(t,e,n){"use strict";n.r(e);var a=n("2909"),i=n("3835"),r=n("1da1"),o=(n("96cf"),n("4de4"),n("4fad"),n("d3b7"),n("b64b"),n("498a"),n("ac1f"),n("466d"),n("caad"),n("2532"),n("159b"),n("5319"),n("85e4")),s=n("c840"),l=n("65c2"),u=n("f3cf"),c=n("e9a5"),p=n("ef77"),f=n("c402"),h={name:"joke",components:{"publish-header":p.a,Emotion:s.a},data:function(){return{loading:!1,processing:!1,inputVisible:!1,inputValue:"",contentLength:0,post:{ID:"",post_status:"publish",post_type:"joke",post_title:"",post_subtype:"0",post_meta:{},post_content:"",post_mode:"joke",original:1,client:"all",lang:"cn",zlp:"",post_excerpt:"",post_banner:"",post_collection:"",comment:0,visible:0,tags:[]},schools:[]}},computed:{id:function(){return~~this.post.ID},data:function(){return this.id?[this.id,this.post]:[this.post]}},methods:{handleEmotionSelect:function(t){this.insertVariable(t)},handleClose:function(t){this.post.tags=this.post.tags.filter((function(e){return e!==t}))},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&this.post.tags.push(t),this.inputVisible=!1,this.inputValue=""},insertVariable:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var a,i,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(a=document.querySelector("#textarea")).selectionStart&&0!==a.selectionStart){n.next=11;break}return i=a.selectionStart,r=a.selectionEnd,e.post.post_title=a.value.substring(0,i)+t+a.value.substring(r,a.value.length),n.next=7,e.$nextTick();case 7:a.focus(),a.setSelectionRange(r+t.length,r+t.length),n.next=12;break;case 11:e.post.post_title=t;case 12:case"end":return n.stop()}}),n)})))()},formatSchool:function(){for(var t=[],e=0,n=Object.entries(u.a);e<n.length;e++){var a=Object(i.a)(n[e],2),r=a[0],o=a[1],s={key:r,value:String(o),path:l.__imgPath+"image/school/".concat(o,".png")};t.push(s)}this.schools=t},init:function(){var t=this;return this.loading=!0,this.$route.params.id?Object(f.d)(this.$route.params.id).then((function(e){return t.post=e.data.data,e.data.data})).finally((function(){t.loading=!1})):new Promise((function(t,e){t()})).finally((function(){t.loading=!1}))},publish:function(t,e){var n=this;this.check()&&(this.post.post_status=t,this.processing=!0,f.e.apply(void 0,Object(a.a)(this.data)).then((function(t){var a=t.data.data;n.done(e,a)})).finally((function(){n.processing=!1})))},done:function(t,e){t?(this.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(o.getLink)(e.post_type,e.ID)}),500)):(this.$notify({title:"保存成功",message:"云端草稿保存成功",type:"success"}),this.post=e,this.$route.params.id||this.$router.push({params:{id:e.ID}}))},check:function(){var t,e=Object.keys(c),n=this.post.post_title.trim(),a=/(#[\u4e00-\u9fa5]{1})/g,i=/(#[\u4e00-\u9fa5]{2})/g,r=/(#[\u4e00-\u9fa5]{3})/g;if(!n.length)return this.$notify({title:"错误",message:"内容不能为空",type:"error"}),!1;var o=n.match(a)?n.match(a).filter((function(t){return e.includes(t)})):[];o.forEach((function(t){return n.replace(t,"")}));var s=n.match(i)?n.match(i).filter((function(t){return e.includes(t)})):[];s.forEach((function(t){return n.replace(t,"")}));var l=n.match(r)?n.match(r).filter((function(t){return e.includes(t)})):[];l.forEach((function(t){return n.replace(t,"")}));var u=o.length+s.length+l.length;if(this.contentLength=u,u>10)return this.$notify({title:"错误",message:"表情个数不能超过10个",type:"error"}),!1;var p=(null===(t=n.match(/[^\x00-\xff]/g))||void 0===t?void 0:t.length)||0;return!(2*p+(n.length-p)>128)||(this.$notify({title:"错误",message:"内容长度不能超过128个字符",type:"error"}),!1)}},created:function(){this.init(),this.formatSchool()},watch:{"$route.params.id":function(t){t&&this.init()}}},d=(n("c135"),n("2877")),b=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"剑三骚话"}}),n("Emotion",{staticClass:"m-publish-joke-emotion",on:{selected:t.handleEmotionSelect}}),n("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[n("el-form-item",{attrs:{label:"门派"}},[n("el-select",{attrs:{placeholder:"请选择门派"},model:{value:t.post.post_subtype,callback:function(e){t.$set(t.post,"post_subtype",e)},expression:"post.post_subtype"}},t._l(t.schools,(function(e){return n("el-option",{key:e.value,attrs:{value:e.value,label:e.key}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.key))]),n("span",{staticStyle:{float:"right"}},[n("img",{attrs:{src:e.path,width:"32",alt:e.key}})])])})),1)],1),n("el-form-item",{attrs:{label:"内容"}},[n("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容",id:"textarea",maxlength:128,minlength:1,"show-word-limit":""},model:{value:t.post.post_title,callback:function(e){t.$set(t.post,"post_title",e)},expression:"post.post_title"}})],1),n("el-form-item",{attrs:{label:"标签"}},[n("div",{staticStyle:{display:"flex","margin-top":"5px"}},[t._l(t.post.tags,(function(e){return n("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){return t.handleClose(e)}}},[t._v(t._s(e))])})),t.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("+ 新标签")])],2)]),n("div",{staticClass:"m-publish-buttons"},[n("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发    布")]),n("el-button",{attrs:{type:"plain",disabled:t.processing},on:{click:function(e){return t.publish("draft",!1)}}},[t._v("保存为草稿")])],1)],1)],1)}),[],!1,null,"d7c75efc",null);e.default=b.exports},"6b75":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},c135:function(t,e,n){"use strict";n("1ad1")},ef77:function(t,e,n){"use strict";var a={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){this.$router.push("/")}},mounted:function(){},components:{}},i=n("2877"),r=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=chunk-637c9f4d.b23b08f9.js.map