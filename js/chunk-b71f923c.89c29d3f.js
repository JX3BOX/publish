(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b71f923c"],{2969:function(t,s,e){"use strict";e("c91d")},"8a80":function(t,s,e){"use strict";e.r(s);var i=e("5530"),n=(e("14d9"),e("b0c0"),e("d3b7"),e("ef77")),o=e("221a"),a=e("500d"),r=e("c9d2"),c=e("85e4"),l=e("f475"),u={name:"skill",data:function(){return{options:{sources:null},post:{id:"",content:"",source_id:"",remark:""},loading:!1,processing:!1,latest:{},current:{}}},computed:{client:function(){return this.$store.state.client},id:function(){var t;return null===(t=this.$route.query)||void 0===t?void 0:t.post_id},isLatest:function(){var t,s,e,i;return!(null===(t=this.current)||void 0===t||null===(s=t.post)||void 0===s||!s.id||null===(e=this.latest)||void 0===e||null===(i=e.post)||void 0===i||!i.id)&&this.current.post.id==this.latest.post.id}},methods:{toPublish:function(){var t=this;if(this.post.source_id)if(this.post.content)if(this.post.remark){this.processing=!0;var s={source_id:String(this.post.source_id),user_nickname:r.a.getInfo().name,content:this.post.content,remark:this.post.remark};if(this.id){var e=pick(s,["level","content","remark"]);a.a.update(this.id,Object(i.a)(Object(i.a)({},e),{},{client:this.client})).then((function(s){s=s.data,t.$message({message:"提交成功，请等待审核",type:"success"}),setTimeout((function(){t.$router.push({name:"wiki_post",params:{type:"skill"}})}),500)})).finally((function(){t.processing=!1}))}else a.a.post(Object(i.a)(Object(i.a)({type:"skill"},s),{},{client:this.client})).then((function(s){s=s.data,t.$message({message:"提交成功，请等待审核",type:"success"}),setTimeout((function(){t.$router.push({name:"wiki_post",params:{type:"skill"}})}),500)})).finally((function(){t.processing=!1}))}else this.$message({message:"请简单描述本次修订说明",type:"warning"});else this.$message({message:"要编写百科正文哦",type:"warning"});else this.$message({message:"请选择要修订百科的技能",type:"warning"})},icon_url_filter:function(t){return Object(c.j)(t)},search_handle:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loading=!0,Object(l.c)({Name:s}).then((function(s){t.options.sources=s.data.list,t.loading=!1}))},loadData:function(t){var s=this;if(this.post.source_id)return this.loading=!0,a.a.get({type:"skill",id:this.post.source_id},{client:t}).then((function(t){var e=t.data,i=e.data.post,n=e.data.source;if(i?(s.post.source_id=parseInt(i.source_id),s.post.remark=i.remark,s.post.content=i.content):(s.post.source_id=s.post.source_id?parseInt(s.post.source_id):"",s.post.remark="",s.post.content=""),n){var o=!1;for(var a in s.options.sources=s.options.sources||[],s.options.sources)if(s.options.sources[a].SkillID==n.SkillID){o=!0;break}o||s.options.sources.push(n)}return i})).finally((function(){s.loading=!1}))},loadDataByPostId:function(){var t=this;return this.loading=!0,a.a.getById(this.id).then((function(s){t.current=s.data.data;var e=s.data,i=e.data.post,n=e.data.source;if(i?(t.post.source_id=parseInt(i.source_id),t.post.remark=i.remark,t.post.content=i.content):(t.post.source_id=t.post.source_id?parseInt(t.post.source_id):"",t.post.remark="",t.post.content=""),n){var o=!1;for(var a in t.options.sources=t.options.sources||[],t.options.sources)if(t.options.sources[a].SkillID==n.SkillID){o=!0;break}o||t.options.sources.push(n)}return i})).finally((function(){t.loading=!1}))},loadLatest:function(){var t=this;this.post.source_id&&a.a.get({type:"skill",id:this.post.source_id}).then((function(s){t.latest=s.data.data}))},getLink:function(t){return Object(c.f)("skill",t)},getLatest:function(){var t;this.post.content=(null===(t=this.latest.post)||void 0===t?void 0:t.content)||""}},created:function(){this.search_handle();var t=this.$route.params.id;this.post.source_id=t?parseInt(t):null,this.loadLatest()},watch:{"post.source_id":{handler:function(t){var s=this;this.id?this.loadDataByPostId():"std"==this.client?this.loadData("std"):this.loadData("origin").then((function(t){console.log("兼容获取"),t||s.loadData("std")}))}}},components:{"publish-header":n.a,Tinymce:o.a}},d=(e("2969"),e("2877")),p=Object(d.a)(u,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"m-publish-box"},[s("publish-header",{attrs:{name:"技能百科"}},[t._t("header")],2),s("el-form",{staticClass:"m-publish-post"},[s("div",{staticClass:"m-publish-source"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("选择技能 *")]),s("el-select",{staticClass:"u-source-id",attrs:{disabled:!!t.post.id,filterable:"",remote:"","remote-method":t.search_handle,loading:t.options.loading},model:{value:t.post.source_id,callback:function(s){t.$set(t.post,"source_id",s)},expression:"post.source_id"}},t._l(t.options.sources,(function(e,i){return s("el-option",{key:e.SkillID+""+i,attrs:{label:e.Name,value:e.SkillID}},[s("div",{staticClass:"m-selector-item"},[s("img",{staticClass:"u-icon",attrs:{src:t.icon_url_filter(e.IconID),alt:e.Name}}),s("span",{staticClass:"u-name",domProps:{textContent:t._s(e.Name)}})])])})),1)],1),s("div",{staticClass:"m-publish-remark"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("修订说明 *")]),s("el-input",{attrs:{maxlength:200,minlength:1,"show-word-limit":"",required:"",placeholder:"请简单描述一下本次修订的说明"},model:{value:t.post.remark,callback:function(s){t.$set(t.post,"remark",s)},expression:"post.remark"}})],1),s("div",{staticClass:"m-publish-content"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("百科正文 *")]),s("Tinymce",{attrs:{attachmentEnable:!0,resourceEnable:!0,height:400},model:{value:t.post.content,callback:function(s){t.$set(t.post,"content",s)},expression:"post.content"}},[!t.isLatest&&t.latest.post&&t.current.post?s("el-alert",{staticClass:"m-latest-check",attrs:{type:"warning","show-icon":""},scopedSlots:t._u([{key:"title",fn:function(){return[s("span",{staticClass:"u-alert-title"},[t._v("当前百科已经有更新的版本，你的攻略可能已经失效，请先进行比对。")]),s("el-link",{staticClass:"u-view-latest",attrs:{type:"primary",icon:"el-icon-link",href:t.getLink(t.post.source_id),target:"_blank"}},[t._v("查看最新攻略")]),t.latest.post?s("el-link",{staticClass:"u-get-latest",attrs:{icon:"el-icon-download",type:"primary"},on:{click:t.getLatest}},[t._v("获取最新攻略")]):t._e()]},proxy:!0}],null,!1,2238318328)}):t._e()],1)],1),s("div",{staticClass:"m-publish-commit"},[s("el-divider",{attrs:{"content-position":"left"}}),s("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"primary",disabled:t.processing},on:{click:t.toPublish}},[t._v("提交百科 ")])],1)])],1)}),[],!1,null,"c9dc2eac",null);s.default=p.exports},b3aa:function(t,s,e){},b4e5:function(t,s,e){"use strict";e("b3aa")},c91d:function(t,s,e){},ef77:function(t,s,e){"use strict";e("b0c0"),e("14d9");var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},n=(e("b4e5"),e("2877")),o=Object(n.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);s.a=o.exports},f475:function(t,s,e){"use strict";e.d(s,"b",(function(){return n})),e.d(s,"c",(function(){return o})),e.d(s,"a",(function(){return a}));e("99af");var i=e("41cb");function n(t,s){var e=isNaN(t)?"name":"id";return Object(i.d)().get("/skill/".concat(e,"/").concat(t),{params:s}).then((function(t){return t.data})).catch((function(t){console.log(t)}))}function o(t){return Object(i.d)().get("/skill",{params:t})}function a(t){return Object(i.d)().get("/v2/kungfu/panel",{params:t})}}}]);
//# sourceMappingURL=chunk-b71f923c.89c29d3f.js.map