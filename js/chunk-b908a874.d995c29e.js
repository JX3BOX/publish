(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b908a874"],{"01c5":function(t,e,a){"use strict";a("be6f")},"0c36":function(t,e,a){},1550:function(t,e,a){"use strict";a("0c36")},"505f":function(t,e,a){"use strict";var i=a("52da"),s={name:"publish_client",props:["data","forbidAll","showMobile"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{handleChange:function(){i.a.$emit("changeClient",this.client)}},mounted:function(){},components:{}},n=a("2877"),l=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-client"},[e("el-form-item",{attrs:{label:"版本"}},[e("el-radio-group",{on:{change:t.handleChange},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[e("el-radio",{attrs:{label:"std"}},[t._v("重制")]),e("el-radio",{attrs:{label:"origin"}},[t._v("缘起")]),t.forbidAll?t._e():e("el-radio",{attrs:{label:"all"}},[t._v("全端")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},"52da":function(t,e,a){"use strict";var i=new(a("2b0e").default);e.a=i},"6a7f":function(t,e,a){"use strict";a.d(e,"g",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"j",(function(){return l})),a.d(e,"h",(function(){return u})),a.d(e,"a",(function(){return r})),a.d(e,"i",(function(){return o})),a.d(e,"e",(function(){return c})),a.d(e,"f",(function(){return p})),a.d(e,"d",(function(){return m})),a.d(e,"c",(function(){return b}));var i=a("41cb");function s(t){return Object(i.c)().get("/api/question/"+t)}function n(t){return Object(i.c)().post("/api/question/create",t)}function l(t,e){return Object(i.c)().put("/api/question/"+t+"/update",e)}function r(t){return Object(i.c)().post("/api/question/exam-paper",t)}function o(t,e){return Object(i.c)().put("/api/question/exam-paper/"+t,e)}function c(t){return Object(i.c)().get("/api/question/exam-paper/"+t)}function u(t){return Object(i.c)().get("/api/question/my-list",{params:t})}function p(t){return Object(i.c)().get("/api/question/exam-paper?my",{params:t})}function m(t){return Object(i.c)().delete("/api/question/my/".concat(t))}function b(t){return Object(i.c)().delete("/api/question/exam-paper/my/".concat(t))}},"9d92":function(t,e,a){"use strict";a.r(e);a("b64b"),a("d3b7");var i=a("ef77"),s=a("505f"),n=a("f912"),l=a("221a"),r=(a("c9d2"),a("6a7f")),o=a("85e4"),c={name:"exam_question",props:[],data:function(){return{primary:{client:"std",title:"",type:"radio",options:["","","",""],answer:[],hardStar:0,tags:[],whyami:"",pool:"common"},processing:!1,loading:!1,answer_radio:"",answer_checkbox:[]}},computed:{id:function(){return this.$route.params.id}},watch:{answer_radio:function(t){this.primary.answer=[t]},answer_checkbox:function(t){this.primary.answer=t},"primary.answer":function(t){"radio"==this.primary.type?this.answer_radio=t[0]:this.answer_checkbox=t}},methods:{publish:function(){var t=this;this.processing=!0,this.id?Object(r.j)(this.id,this.primary).then((function(e){t.success(e)})).finally((function(){t.processing=!1})):Object(r.b)(this.primary).then((function(e){t.success(e)})).finally((function(){t.processing=!1}))},success:function(t){var e=this;this.$message({message:t.data.msg||"提交成功",type:"success"}),setTimeout((function(){location.href=Object(o.f)("question",e.id||t.data.data.id)}),500)},loadData:function(){var t=this;this.loading=!0,Object(r.g)(this.id).then((function(e){var a=e.data;t.primary=a,t.primary.options=JSON.parse(a.options),t.primary.tags=JSON.parse(a.tags),t.primary.answer=a.answerList||[]})).finally((function(){t.loading=!1}))}},created:function(){this.id&&this.loadData()},components:{"publish-header":i.a,Tinymce:l.a,exam_tags:n.a,"publish-client":s.a}},u=(a("01c5"),a("2877")),p=Object(u.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-box"},[e("publish-header",{attrs:{name:"剑三题目",localDraft:!1}},[t._t("header")],2),e("el-form",{staticClass:"m-publish-exam",attrs:{"label-position":"left","label-width":"80px"}},[e("publish-client",{model:{value:t.primary.client,callback:function(e){t.$set(t.primary,"client",e)},expression:"primary.client"}}),e("el-form-item",{staticClass:"m-publish-exam-title",attrs:{label:"题目"}},[e("el-input",{attrs:{maxlength:500,minlength:2,"show-word-limit":"",required:"",rows:3,type:"textarea",placeholder:"请填写题目内容 (支持html)"},model:{value:t.primary.title,callback:function(e){t.$set(t.primary,"title",e)},expression:"primary.title"}})],1),e("el-form-item",{staticClass:"m-publish-exam-type",attrs:{label:"题型"}},[e("el-radio-group",{model:{value:t.primary.type,callback:function(e){t.$set(t.primary,"type",e)},expression:"primary.type"}},[e("el-radio",{attrs:{label:"radio",border:""}},[t._v("单选题")]),e("el-radio",{attrs:{label:"checkbox",border:""}},[t._v("多选题")])],1)],1),e("el-form-item",{staticClass:"m-publish-exam-options",attrs:{label:"选项"}},[e("el-input",{attrs:{placeholder:"选项1 (支持html)"},model:{value:t.primary.options[0],callback:function(e){t.$set(t.primary.options,0,e)},expression:"primary.options[0]"}},[e("template",{slot:"prepend"},[t._v("A")])],2),e("el-input",{attrs:{placeholder:"选项2 (支持html)"},model:{value:t.primary.options[1],callback:function(e){t.$set(t.primary.options,1,e)},expression:"primary.options[1]"}},[e("template",{slot:"prepend"},[t._v("B")])],2),e("el-input",{attrs:{placeholder:"选项3 (支持html)"},model:{value:t.primary.options[2],callback:function(e){t.$set(t.primary.options,2,e)},expression:"primary.options[2]"}},[e("template",{slot:"prepend"},[t._v("C")])],2),e("el-input",{attrs:{placeholder:"选项4 (支持html)"},model:{value:t.primary.options[3],callback:function(e){t.$set(t.primary.options,3,e)},expression:"primary.options[3]"}},[e("template",{slot:"prepend"},[t._v("D")])],2)],1),e("el-form-item",{staticClass:"m-publish-exam-answer",attrs:{label:"答案"}},["radio"==t.primary.type?e("el-radio-group",{model:{value:t.answer_radio,callback:function(e){t.answer_radio=e},expression:"answer_radio"}},[e("el-radio",{attrs:{label:0}},[t._v("A")]),e("el-radio",{attrs:{label:1}},[t._v("B")]),e("el-radio",{attrs:{label:2}},[t._v("C")]),e("el-radio",{attrs:{label:3}},[t._v("D")])],1):e("el-checkbox-group",{model:{value:t.answer_checkbox,callback:function(e){t.answer_checkbox=e},expression:"answer_checkbox"}},[e("el-checkbox",{attrs:{label:0}},[t._v("A")]),e("el-checkbox",{attrs:{label:1}},[t._v("B")]),e("el-checkbox",{attrs:{label:2}},[t._v("C")]),e("el-checkbox",{attrs:{label:3}},[t._v("D")])],1)],1),e("el-form-item",{staticClass:"m-publish-exam-level",attrs:{label:"难度"}},[e("el-rate",{attrs:{"show-score":"","text-color":"#ff9900","score-template":"{value} 星"},model:{value:t.primary.hardStar,callback:function(e){t.$set(t.primary,"hardStar",e)},expression:"primary.hardStar"}})],1),e("exam_tags",{staticClass:"m-publish-exam-tags",model:{value:t.primary.tags,callback:function(e){t.$set(t.primary,"tags",e)},expression:"primary.tags"}}),e("el-form-item",{staticClass:"m-publish-exam-content",attrs:{label:"答案解析"}},[e("Tinymce",{attrs:{attachmentEnable:!0,resourceEnable:!0,height:400},model:{value:t.primary.whyami,callback:function(e){t.$set(t.primary,"whyami",e)},expression:"primary.whyami"}}),e("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"primary",disabled:t.processing},on:{click:t.publish}},[t._v("提交题目")])],1)],1)],1)}),[],!1,null,"505f7ca4",null);e.default=p.exports},b09a:function(t){t.exports=JSON.parse('{"e":{"radio":"单选题","checkbox":"多选题"},"c":[{"label":"蓝色","value":"default"},{"label":"绿色","value":"green"},{"label":"橙色","value":"orange"},{"label":"红色","value":"red"},{"label":"紫色","value":"purple"}],"a":[{"label":"剑三老司机","value":"driver"}],"b":[{"label":"官方试卷","value":"official"}],"d":{"subject":["语文","数学","外语","信息","物理","化学","生物","政治","历史","地理","美术","音乐","体育","劳动","理综","文综"],"game":["PVE","PVP","PVX","PVBB"],"play":["副本","宠物","家园","奇遇","成就","阵营","野外","竞技场","切磋","吃鸡"],"domain":["美容","金融","医学","法学"]}}')},b3aa:function(t,e,a){},b4e5:function(t,e,a){"use strict";a("b3aa")},be6f:function(t,e,a){},ef77:function(t,e,a){"use strict";a("b0c0"),a("14d9");var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},s=(a("b4e5"),a("2877")),n=Object(s.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},f912:function(t,e,a){"use strict";a("14d9"),a("a434");var i=a("b09a"),s=a("2b04"),n={name:"exam_tags",props:["tags"],data:function(){return{options:i.d,school:s,inputVisible:!1,inputValue:"",list:this.tags}},model:{prop:"tags",event:"update"},watch:{tags:function(t){this.list=t},list:function(t){this.$emit("update",t)}},methods:{handleClose:function(t){this.custom.splice(this.custom.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&this.custom.push(t),this.inputVisible=!1,this.inputValue=""}},mounted:function(){},components:{}},l=(a("1550"),a("2877")),r=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("el-form-item",{attrs:{label:"标签"}},[e("div",{staticClass:"m-publish-exam-tags-list"},[e("el-checkbox-group",{model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},[e("div",{staticClass:"u-group"},[e("label",{staticClass:"el-checkbox"},[e("span",{staticClass:"el-checkbox__label u-group-label"},[t._v("方向")])]),t._l(t.options.game,(function(a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(a))])}))],2),e("div",{staticClass:"u-group"},[e("label",{staticClass:"el-checkbox"},[e("span",{staticClass:"el-checkbox__label u-group-label"},[t._v("门派")])]),t._l(t.school,(function(a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(a))])}))],2),e("div",{staticClass:"u-group"},[e("label",{staticClass:"el-checkbox"},[e("span",{staticClass:"el-checkbox__label u-group-label"},[t._v("玩法")])]),t._l(t.options.play,(function(a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(a))])}))],2),e("div",{staticClass:"u-group"},[e("label",{staticClass:"el-checkbox"},[e("span",{staticClass:"el-checkbox__label u-group-label"},[t._v("学科")])]),t._l(t.options.subject,(function(a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(a))])}))],2),e("div",{staticClass:"u-group"},[e("label",{staticClass:"el-checkbox"},[e("span",{staticClass:"el-checkbox__label u-group-label"},[t._v("领域")])]),t._l(t.options.domain,(function(a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(a))])}))],2)])],1)])}),[],!1,null,"c3a63494",null);e.a=r.exports}}]);
//# sourceMappingURL=chunk-b908a874.d995c29e.js.map