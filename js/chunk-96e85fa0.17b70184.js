(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-96e85fa0"],{"2eb6":function(t,e,a){},"505f":function(t,e,a){"use strict";var i=a("52da"),s={name:"publish_client",props:["data","forbidAll"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{handleChange:function(){i.a.$emit("changeClient",this.client)}},mounted:function(){},components:{}},l=a("2877"),n=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-client"},[a("el-form-item",{attrs:{label:"版本"}},[a("el-radio-group",{on:{change:t.handleChange},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[a("el-radio",{attrs:{label:"std"}},[t._v("重制")]),a("el-radio",{attrs:{label:"origin"}},[t._v("缘起")]),t.forbidAll?t._e():a("el-radio",{attrs:{label:"all"}},[t._v("双端")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},"52da":function(t,e,a){"use strict";var i=new(a("2b0e").default);e.a=i},"61d5":function(t,e,a){},"6a7f":function(t,e,a){"use strict";a.d(e,"g",(function(){return s})),a.d(e,"b",(function(){return l})),a.d(e,"j",(function(){return n})),a.d(e,"h",(function(){return u})),a.d(e,"a",(function(){return r})),a.d(e,"i",(function(){return c})),a.d(e,"e",(function(){return o})),a.d(e,"f",(function(){return p})),a.d(e,"d",(function(){return m})),a.d(e,"c",(function(){return d}));var i=a("41cb");function s(t){return Object(i.c)().get("/api/question/"+t)}function l(t){return Object(i.c)().post("/api/question/create",t)}function n(t,e){return Object(i.c)().put("/api/question/"+t+"/update",e)}function r(t){return Object(i.c)().post("/api/question/exam-paper",t)}function c(t,e){return Object(i.c)().put("/api/question/exam-paper/"+t,e)}function o(t){return Object(i.c)().get("/api/question/exam-paper/"+t)}function u(t){return Object(i.c)().get("/api/question/my-list",{params:t})}function p(t){return Object(i.c)().get("/api/question/exam-paper?my",{params:t})}function m(t){return Object(i.c)().delete("/api/question/my/".concat(t))}function d(t){return Object(i.c)().delete("/api/question/exam-paper/my/".concat(t))}},"70e9":function(t,e,a){"use strict";a("2eb6")},b09a:function(t){t.exports=JSON.parse('{"e":{"radio":"单选题","checkbox":"多选题"},"c":[{"label":"默认（蓝色）","value":"default"},{"label":"PVE（绿色）","value":"green"},{"label":"PVX（橙色）","value":"orange"},{"label":"PVP（红色）","value":"red"},{"label":"PVBB（紫色）","value":"purple"}],"a":[{"label":"剑三老司机","value":"driver"}],"b":[{"label":"官方试卷","value":"official"}],"d":{"school":["七秀","万花","五毒","长歌","天策","少林","明教","苍云","纯阳","唐门","藏剑","丐帮","蓬莱","凌雪","衍天","药宗"],"subject":["语文","数学","外语","信息","物理","化学","生物","政治","历史","地理"],"game":["PVE","PVP","PVX","PVBB"],"play":["副本","宠物","家园","奇遇","成就","阵营","野外","竞技场","切磋","吃鸡"],"domain":["美容","金融","医学","法学"]}}')},be8a:function(t,e,a){"use strict";a.r(e);a("d3b7"),a("25f0"),a("ac1f"),a("1276"),a("d81d");var i=a("ef77"),s=a("505f"),l=a("f912d"),n=a("c9d2"),r=a("6a7f"),c=a("b09a"),o=a("85e4"),u={name:"exam_paper",props:[],data:function(){return{primary:{client:"std",title:"",desc:"",questionList:[],hardStar:0,tags:[],corner:"",medalAward:"",style:"default",iframe:""},list:"",isSuper:n.a.isEditor(),awards:c.a,marks:c.b,styles:c.c,processing:!1,loading:!1}},computed:{id:function(){return this.$route.params.id}},watch:{},methods:{publish:function(){var t=this;this.processing=!0,this.primary.questionList=this.checkList(),this.primary.questionList&&(this.id?Object(r.i)(this.id,this.primary,this).then((function(e){t.success(e)})).finally((function(){t.processing=!1})):Object(r.a)(this.primary,this).then((function(e){t.success(e)})).finally((function(){t.processing=!1})))},success:function(t){var e=this;this.$message({message:t.data.msg||"提交成功",type:"success"}),setTimeout((function(){location.href=Object(o.getLink)("paper",e.id||t.data.data.id)}),500)},loadData:function(){var t=this;this.loading=!0,Object(r.e)(this.id,this).then((function(e){var a=e.data;t.primary=a,t.primary.tags=JSON.parse(a.tags),t.primary.questionList=JSON.parse(a.questionList),t.list=t.primary.questionList.toString()})).finally((function(){t.loading=!1}))},checkList:function(){var t=this.list.split(",");return t.length>10||!t.length?(this.$alert("请设置10道题，每道题10分，满分100分","提醒",{confirmButtonText:"确定"}),!1):t.map((function(t){return~~t}))}},created:function(){this.id&&this.loadData()},components:{"publish-header":i.a,exam_tags:l.a,"publish-client":s.a}},p=(a("70e9"),a("2877")),m=Object(p.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-publish-box"},[a("publish-header",{attrs:{name:"剑三试卷",localDraft:!1}},[t._t("header")],2),a("el-form",{staticClass:"m-publish-exam",attrs:{"label-position":"left","label-width":"80px"}},[a("publish-client",{model:{value:t.primary.client,callback:function(e){t.$set(t.primary,"client",e)},expression:"primary.client"}}),a("el-form-item",{staticClass:"m-publish-exam-title",attrs:{label:"标题"}},[a("el-input",{attrs:{maxlength:120,minlength:2,"show-word-limit":"",required:"",placeholder:"请填写试卷标题"},model:{value:t.primary.title,callback:function(e){t.$set(t.primary,"title",e)},expression:"primary.title"}})],1),a("el-form-item",{staticClass:"m-publish-exam-desc",attrs:{label:"描述"}},[a("el-input",{attrs:{maxlength:200,minlength:2,"show-word-limit":"",required:"",rows:3,type:"textarea",placeholder:"请填写试卷描述"},model:{value:t.primary.desc,callback:function(e){t.$set(t.primary,"desc",e)},expression:"primary.desc"}})],1),a("el-form-item",{staticClass:"m-publish-exam-common",attrs:{label:"题目"}},[a("div",[t._v("请设置10道题（每道题10分，满分100分），用半角逗号隔开，例如1,2,3")]),a("el-input",{attrs:{"show-word-limit":"",required:"",placeholder:"请填写题目ID序列"},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}})],1),a("el-form-item",{staticClass:"m-publish-exam-common",attrs:{label:"外链"}},[a("div",[t._v("如果为外链地址，则设置的题目将不会生效")]),a("el-input",{attrs:{"show-word-limit":"",required:"",placeholder:"请填写外链问卷地址"},model:{value:t.primary.iframe,callback:function(e){t.$set(t.primary,"iframe",e)},expression:"primary.iframe"}})],1),a("el-form-item",{staticClass:"m-publish-exam-level",attrs:{label:"难度"}},[a("el-rate",{attrs:{"show-score":"","text-color":"#ff9900","score-template":"{value} 星"},model:{value:t.primary.hardStar,callback:function(e){t.$set(t.primary,"hardStar",e)},expression:"primary.hardStar"}})],1),a("el-form-item",{staticClass:"m-publish-exam-style",attrs:{label:"风格"}},[a("el-select",{attrs:{placeholder:"请选择封面风格"},model:{value:t.primary.style,callback:function(e){t.$set(t.primary,"style",e)},expression:"primary.style"}},t._l(t.styles,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("exam_tags",{staticClass:"m-publish-exam-tags",model:{value:t.primary.tags,callback:function(e){t.$set(t.primary,"tags",e)},expression:"primary.tags"}}),a("el-form-item",{staticClass:"m-publish-exam-content",attrs:{label:""}},[a("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"primary",disabled:t.processing},on:{click:t.publish}},[t._v("发布试卷")])],1)],1)],1)}),[],!1,null,"743428e2",null);e.default=m.exports},bec3:function(t,e,a){"use strict";a("61d5")},c52b:function(t,e,a){},e0df:function(t,e,a){"use strict";a("c52b")},ef77:function(t,e,a){"use strict";var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},s=(a("bec3"),a("2877")),l=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},f912d:function(t,e,a){"use strict";a("a434");var i=a("b09a"),s=a("2b04"),l={name:"exam_tags",props:["tags"],data:function(){return{options:i.d,school:s,inputVisible:!1,inputValue:"",list:this.tags}},model:{prop:"tags",event:"update"},watch:{tags:function(t){this.list=t},list:function(t){this.$emit("update",t)}},methods:{handleClose:function(t){this.custom.splice(this.custom.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&this.custom.push(t),this.inputVisible=!1,this.inputValue=""}},mounted:function(){},components:{}},n=(a("e0df"),a("2877")),r=Object(n.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",{attrs:{label:"标签"}},[a("div",{staticClass:"m-publish-exam-tags-list"},[a("el-checkbox-group",{model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},[a("div",{staticClass:"u-group"},[a("label",{staticClass:"el-checkbox"},[a("span",{staticClass:"el-checkbox__label u-group-label "},[t._v("方向")])]),t._l(t.options.game,(function(e){return a("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}))],2),a("div",{staticClass:"u-group"},[a("label",{staticClass:"el-checkbox"},[a("span",{staticClass:"el-checkbox__label u-group-label "},[t._v("门派")])]),t._l(t.school,(function(e){return a("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}))],2),a("div",{staticClass:"u-group"},[a("label",{staticClass:"el-checkbox"},[a("span",{staticClass:"el-checkbox__label u-group-label "},[t._v("玩法")])]),t._l(t.options.play,(function(e){return a("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}))],2),a("div",{staticClass:"u-group"},[a("label",{staticClass:"el-checkbox"},[a("span",{staticClass:"el-checkbox__label u-group-label "},[t._v("学科")])]),t._l(t.options.subject,(function(e){return a("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}))],2),a("div",{staticClass:"u-group"},[a("label",{staticClass:"el-checkbox"},[a("span",{staticClass:"el-checkbox__label u-group-label "},[t._v("领域")])]),t._l(t.options.domain,(function(e){return a("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}))],2)])],1)])}),[],!1,null,"c3a63494",null);e.a=r.exports}}]);
//# sourceMappingURL=chunk-96e85fa0.17b70184.js.map