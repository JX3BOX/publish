(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8be50df0"],{3408:function(t,i,e){"use strict";e("6f23")},"6f23":function(t,i,e){},ef77:function(t,i,e){"use strict";var s={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){this.$router.push("/")}},mounted:function(){},components:{}},a=e("2877"),l=Object(a.a)(s,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"m-publish-header"},[i("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);i.a=l.exports},f18d:function(t,i,e){"use strict";e.r(i);e("d3b7"),e("159b"),e("b0c0"),e("99af"),e("a434");var s=e("85e4"),a=e("ef77"),l=e("9530"),n=e("41cb");var o={name:"emotion",components:{UploadImages:l.a,"publish-header":a.a},data:function(){return{loading:!1,processing:!1,supportTypes:"image/png, image/jpeg, image/gif, image/bmp, image/webp",list:[{desc:"test",url:"https://console.cnyixun.com/2019/09/logo.png",original:0,author:""},{desc:"test",url:"https://console.cnyixun.com/2019/09/logo.png",original:0,author:""},{desc:"test",url:"https://console.cnyixun.com/2019/09/logo.png",original:0,author:""}],data:{desc:"test",url:"https://console.cnyixun.com/2019/09/logo.png",original:0,author:"111"},dialogImageUrl:"",dialogVisible:!1}},computed:{id:function(){return~~this.$route.params.id}},methods:{init:function(){var t,i=this;this.loading=!0,(t=this.id,Object(n.b)().get("/api/cms/post/emotion/".concat(t))).then((function(t){var e;i.data=null===(e=t.data)||void 0===e?void 0:e.data})).finally((function(){i.loading=!1}))},updateFileList:function(t){var i=t.list,e=[];i.forEach((function(t){t.is_img&&e.push({desc:t.name,url:t.url,original:0,author:""})})),this.list=this.list.concat(e)},previewHandle:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},deleteHandle:function(t){this.list.splice(t,1)},publish:function(){var t,i=this;this.processing=!0,(t=this.list,Object(n.b)().post("/api/cms/post/emotion",t)).then((function(t){i.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(s.getLink)("emotion")}),500)}))},update:function(){var t,i,e=this;this.processing=!0,(t=this.id,i=this.data,Object(n.b)().put("/api/cms/post/emotion/".concat(t),i)).then((function(t){e.$message({message:"更新成功",type:"success"}),setTimeout((function(){location.href=Object(s.getLink)("emotion",e.id)}),500)}))}},watch:{"$route.params.id":{immediate:!0,handler:function(t){t&&this.init()}}},filters:{showThumbnail:function(t){return Object(s.getThumbnail)(t,146)}}},c=(e("3408"),e("2877")),u=Object(c.a)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box m-publish-box-emotion"},[e("publish-header",{attrs:{name:"剑三表情"}}),e("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[t.id?e("div",{staticClass:"m-publish-emotion m-publish-emotion-edit"},[e("el-form-item",{attrs:{label:"图片"}},[e("div",{staticClass:"u-pic"},[e("img",{staticClass:"u-img",attrs:{src:t._f("showThumbnail")(t.data.url)}}),e("i",{staticClass:"u-mask"}),e("i",{staticClass:"u-preview",on:{click:function(i){return t.previewHandle(t.data)}}},[e("i",{staticClass:"el-icon-zoom-in"})])])]),e("el-form-item",{attrs:{label:"描述"}},[e("el-input",{attrs:{placeholder:"图片说明"},model:{value:t.data.desc,callback:function(i){t.$set(t.data,"desc",i)},expression:"data.desc"}})],1),e("el-form-item",{attrs:{label:"原创"}},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.data.original,callback:function(i){t.$set(t.data,"original",t._n(i))},expression:"data.original"}})],1),e("el-form-item",{attrs:{label:"原作者"}},[e("el-input",{attrs:{placeholder:"（非必填）"},model:{value:t.data.author,callback:function(i){t.$set(t.data,"author",i)},expression:"data.author"}})],1),e("div",{staticClass:"m-publish-buttons"},[e("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:t.update}},[t._v("更    新")])],1)],1):e("div",{staticClass:"m-publish-emotion m-publish-emotion-create"},[e("div",{staticClass:"m-publish-emotion-bulk"},[e("h1",{staticClass:"u-title"},[t._v("上传表情")]),e("UploadImages",{attrs:{text:"批量上传图片",onlyImage:!0,desc:"一次最多同时上传10个文件（不超过5M）",accept:t.supportTypes},on:{insert:t.updateFileList}})],1),t.list&&t.list.length?e("div",{staticClass:"m-publish-emotion-list"},[e("div",{staticClass:"u-list"},t._l(t.list,(function(i,s){return e("div",{key:s,staticClass:"u-item"},[e("div",{staticClass:"u-div"},[e("i",{staticClass:"u-order"},[t._v(t._s(s+1))]),e("div",{staticClass:"u-op"},[e("el-button",{staticClass:"u-delete",attrs:{icon:"el-icon-delete",type:"info",size:"mini"},on:{click:function(i){return t.deleteHandle(s)}}},[t._v("删除")])],1)]),e("div",{staticClass:"u-pic"},[e("img",{staticClass:"u-img",attrs:{src:t._f("showThumbnail")(i.url)}}),e("i",{staticClass:"u-mask"}),e("i",{staticClass:"u-preview",on:{click:function(e){return t.previewHandle(i)}}},[e("i",{staticClass:"el-icon-zoom-in"})])]),e("div",{staticClass:"u-desc"},[e("el-input",{attrs:{placeholder:"图片说明"},model:{value:i.desc,callback:function(e){t.$set(i,"desc",e)},expression:"item.desc"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("描述")])])],1),e("div",{staticClass:"u-extend"},[e("el-switch",{attrs:{"inactive-text":"原创","active-value":1,"inactive-value":0},model:{value:i.original,callback:function(e){t.$set(i,"original",t._n(e))},expression:"item.original"}}),i.original?t._e():e("el-input",{staticClass:"u-author",attrs:{placeholder:"（非必填）",size:"mini"},model:{value:i.author,callback:function(e){t.$set(i,"author",e)},expression:"item.author"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("原作者")])])],1)])})),0),e("div",{staticClass:"m-publish-buttons"},[e("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:t.publish}},[t._v("发    布")])],1)]):t._e(),e("el-dialog",{staticClass:"m-publish-emotion-preview",attrs:{visible:t.dialogVisible},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)])],1)}),[],!1,null,null,null);i.default=u.exports}}]);
//# sourceMappingURL=chunk-8be50df0.ab17b787.js.map