(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-69979fdc"],{1:function(t,e){},"208a":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return c})),a.d(e,"e",(function(){return l})),a.d(e,"d",(function(){return s}));var i=a("41cb");a("4328");function n(t){return Object(i.a)().get("/api/cms/app/item-plan/mine",{params:t}).then((function(t){return t.data.data}))}function s(t){return Object(i.a)().get("/api/cms/app/item-plan/".concat(t)).then((function(t){return t.data.data}))}function c(t){return Object(i.a)().post("/api/cms/app/item-plan",t)}function l(t,e){return Object(i.a)().put("/api/cms/app/item-plan/".concat(t),e)}function r(t){return Object(i.a)().delete("/api/cms/app/item-plan/".concat(t))}},"3a7c":function(t,e,a){},"44e9":function(t,e,a){"use strict";a("7886")},"5faf":function(t,e,a){},7886:function(t,e,a){},abe2:function(t,e,a){"use strict";a("d810")},b78a:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return s}));var i=a("41cb");function n(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s={keyword:t,limit:e,fields:a};return null!==n&&(s.is_equip=n?1:0),Object(i.b)()({method:"GET",url:"/api/item/search",params:s})}function s(t){return Object(i.b)().get("/api/item/search",{params:t}).then((function(t){return t.data.data}))}function c(t){if(t)return Object(i.b)().get("api/item/".concat(t))}},c540:function(t,e,a){"use strict";a("3a7c")},d810:function(t,e,a){},e9fe:function(t,e,a){"use strict";a.r(e);var i=a("53ca"),n=(a("a4d3"),a("e01a"),a("498a"),a("a434"),a("99af"),a("d81d"),a("d3b7"),a("159b"),a("14d9"),a("ef77")),s=a("7a5f"),c=(a("b64b"),a("c7fa")),l=a("b78a"),r=a("65c2"),u=a("85e4"),o={name:"ItemIcon",props:["item","item_id","dishoverable","click_trigger"],data:function(){return{source:null}},computed:{client:function(){return this.$store.state.client}},components:{"jx3-item":c.a},methods:{get_data:function(t){var e=this;t&&Object(l.a)(t).then((function(t){var a=t.data.data.item;Object.keys(a).length&&(e.source=a)}))},show:function(){this.source&&void 0!==this.source.Genre||this.get_data(this.source.id)},item_border:function(t){switch(t.Quality){case 3:return"url(".concat(r.__imgPath,"image/item/blue.png)");case 4:return"url(".concat(r.__imgPath,"image/item/purple.png)");case 5:return"url(".concat(r.__imgPath,"image/item/orange.gif)");default:return""}},item_border_quest:function(t){return t.IsQuest>0?"url(".concat(r.__imgPath,"image/item/renwu.png)"):""},icon_url:function(t){return Object(u.iconLink)(t)}},watch:{item:{immediate:!0,handler:function(){this.source=this.item}},item_id:{immediate:!0,handler:function(){this.get_data(this.item_id)}}}},d=(a("44e9"),a("f026"),a("2877")),p=Object(d.a)(o,(function(){var t=this,e=t._self._c;return t.source?e("el-popover",{attrs:{placement:"right-start",width:"auto",trigger:t.click_trigger?"click":"hover",disabled:t.dishoverable,"popper-class":"m-item-icon-popup","visible-arrow":!1,transition:"none","close-delay":0},on:{show:t.show}},[e("template",{slot:"reference"},[e("div",{staticClass:"m-item-icon"},[e("div",{staticClass:"u-item-icon"},[e("div",{staticClass:"u-border",style:{backgroundImage:t.item_border(t.source),opacity:5==t.source.Quality?.9:1}}),e("div",{staticClass:"u-border-quest",style:{backgroundImage:t.item_border_quest(t.source)}}),e("img",{staticClass:"u-item-icon",attrs:{src:t.icon_url(t.source.IconID)}})]),e("div",{staticClass:"u-name",class:"quality-".concat(t.source.Quality)},[t._v(t._s(t.source.Name))])])]),e("jx3-item",{attrs:{item:t.source}})],2):t._e()}),[],!1,null,"409202d7",null).exports,m=a("b76a"),b=a.n(m),f=a("208a"),h={id:"",title:"",public:1,type:"1",description:"",relation:[]},g=[[{title:"melee_weapon",label:"武器",AucGenre:1,list:[]},{title:"range_weapon",label:"暗器",AucGenre:2,list:[]}],[{title:"helm",label:"帽子",AucGenre:3,AucSubType:2,list:[]},{title:"chest",label:"上衣",AucGenre:3,AucSubType:1,list:[]},{title:"waist",label:"腰带",AucGenre:3,AucSubType:3,list:[]}],[{title:"bangle",label:"护腕",AucGenre:3,AucSubType:6,list:[]},{title:"pants",label:"下装",AucGenre:3,AucSubType:4,list:[]},{title:"boots",label:"鞋子",AucGenre:3,AucSubType:5,list:[]}],[{title:"amulet",label:"项链",AucGenre:4,AucSubType:1,list:[]},{title:"pendant",label:"腰坠",AucGenre:4,AucSubType:3,list:[]},{title:"ring_1",label:"戒指",AucGenre:4,AucSubType:2,list:[]},{title:"ring_2",label:"戒指",AucGenre:4,AucSubType:2,list:[]}]],_={name:"plan",components:{draggable:b.a,"publish-header":n.a,"jx3-item-simple":s.a,itemIcon:p},data:function(){return{data:Object.assign({},h),relationList:[],equipList:[].concat(g),loading:!1,keyword:"",per:15,page:1,total:1,searchList:[],item_id:""}},computed:{plan_id:function(){return this.$route.params.plan_id},search_params:function(){var t={page:this.page,limit:this.per,is_equip:2==this.data.type?1:0,fields:["id","UiID","Name","IconID","Quality","AucGenre","AucSubType","Desc"],apply:1};return this.keyword&&(t.keyword=this.keyword),t}},watch:{keyword:function(){this.resetPages()},search_params:{immediate:!0,deep:!0,handler:function(){this.loadItems()}}},methods:{loadItems:function(){var t=this;Object(l.b)(this.search_params).then((function(e){e.data.map((function(t){return t.count=1})),t.searchList=e.data,t.total=e.total}))},resetPages:function(){this.page=1},iconLink:u.iconLink,addRelation:function(){this.data.relation.unshift({title:"",data:[]})},moveHandle:function(t){if(!t.to.classList.contains("u-item-drag")){var e=t.to.getAttribute("data-AucGenre"),a=t.to.getAttribute("data-AucSubType"),i=t.draggedContext.element.AucGenre==e;return null!==a&&(i=i&&t.draggedContext.element.AucSubType==a),i}},getPlanData:function(){var t=this;Object(f.d)(this.plan_id).then((function(e){e=t.extractID(e),console.log(e),t.data=e,2==t.data.type&&t.toEquipList(t.data.relation)}))},extractID:function(t){return 1==t.type?t.relation=t.relation.map((function(t){return t.data=t.data.map((function(t){return"string"==typeof t&&(t={id:t,count:1}),"object"==Object(i.a)(t)&&(t={id:t.id,count:t.count}),t})),t})):t.relation=this.equipItem(t.relation),t},equipItem:function(t){for(var e in t)t[e]=t[e].map((function(t){return"object"==Object(i.a)(t)&&(t=t.id),t}));return t},toEquipList:function(t){this.equipList.map((function(e){e.map((function(e){t.hasOwnProperty(e.title)&&(e.list=t[e.title])}))}))},toEquip:function(){var t={};this.equipList.forEach((function(e){e.forEach((function(e){t[e.title]=e.list}))})),t=this.equipItem(t),this.data.relation=t},submit:function(){var t=this;2==this.data.type&&this.toEquip(),this.loading=!0,this.plan_id?Object(f.e)(this.plan_id,this.data).then((function(){t.$message({message:"物品清单修改成功",type:"success"}),t.$router.push({name:"bucket",params:{type:"item_plan"}})})).finally((function(){t.loading=!1})):Object(f.a)(this.data).then((function(){t.$message({message:"物品清单提交成功",type:"success"}),t.$router.push({name:"bucket",params:{type:"item_plan"}})})).finally((function(){t.loading=!1}))}},created:function(){this.plan_id&&this.getPlanData()}},v=(a("c540"),Object(d.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-box"},[e("publish-header",{attrs:{name:"物品清单",localDraft:!1}},[t._t("header")],2),e("el-form",{staticClass:"u-form",attrs:{"label-position":"left","label-width":"80px"}},[e("el-form-item",{attrs:{label:"标题"}},[e("el-input",{attrs:{placeholder:"请输入物品清单的标题",maxlength:"20","show-word-limit":""},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}})],1),e("el-form-item",{attrs:{label:"可见性"}},[e("el-radio",{attrs:{label:1},model:{value:t.data.public,callback:function(e){t.$set(t.data,"public",e)},expression:"data.public"}},[t._v("公开")]),e("el-radio",{attrs:{label:0},model:{value:t.data.public,callback:function(e){t.$set(t.data,"public",e)},expression:"data.public"}},[t._v("私有")])],1),e("el-form-item",{attrs:{label:"描述"}},[e("el-input",{attrs:{type:"textarea",rows:3,placeholder:"简单说明一下你的物品清单",maxlength:2e3,"show-word-limit":""},model:{value:t.data.description,callback:function(e){t.$set(t.data,"description",e)},expression:"data.description"}})],1),e("el-form-item",{attrs:{label:"类型"}},[e("el-radio-group",{attrs:{size:"medium"},on:{change:t.resetPages},model:{value:t.data.type,callback:function(e){t.$set(t.data,"type",e)},expression:"data.type"}},[e("el-radio-button",{attrs:{label:"1"}},[t._v("道具清单")]),e("el-radio-button",{attrs:{label:"2"}},[t._v("装备清单")])],1),e("el-button",{staticClass:"u-add-plan",attrs:{size:"medium",icon:"el-icon-plus"},on:{click:t.addRelation}},[t._v("新增分组")])],1),e("el-form-item",{attrs:{label:"清单"}},[e("div",{staticClass:"m-plan-list"},[t.searchList.length?e("div",{staticClass:"u-list-search"},[e("el-input",{staticClass:"u-title",attrs:{placeholder:"请输入物品名称（可适配中括号）","prefix-icon":"el-icon-search"},model:{value:t.keyword,callback:function(e){t.keyword="string"==typeof e?e.trim():e},expression:"keyword"}}),e("draggable",{attrs:{draggable:".u-change",move:t.moveHandle,group:{name:"draggable-item",pull:"clone",put:!1}},model:{value:t.searchList,callback:function(e){t.searchList=e},expression:"searchList"}},t._l(t.searchList,(function(t,a){return e("jx3-item-simple",{key:a,staticClass:"u-change",attrs:{item:t}})})),1),e("el-pagination",{staticClass:"m-archive-pages",attrs:{small:"",background:"",layout:"prev, pager, next, jumper","hide-on-single-page":!0,"page-size":t.per,total:t.total,"current-page":t.page,size:"mini"},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1):t._e(),"1"==t.data.type?e("el-row",{staticClass:"u-list-box",attrs:{gutter:20}},t._l(t.data.relation,(function(a,i){return e("el-col",{key:i,attrs:{span:6}},[e("div",{staticClass:"u-list"},[e("i",{staticClass:"u-list-close el-icon-circle-close",on:{click:function(e){return t.data.relation.splice(i,1)}}}),e("el-input",{staticClass:"u-title",attrs:{type:"text",placeholder:"子清单标题（选填）",maxlength:"20","show-word-limit":""},model:{value:a.title,callback:function(e){t.$set(a,"title",e)},expression:"relation.title"}}),e("draggable",{staticClass:"u-item-drag",attrs:{list:a.data,group:"draggable-item","ghost-class":"ghost"}},[a.data&&a.data.length?t._l(a.data,(function(i,n){return e("div",{key:n,staticClass:"u-selected u-selected-item u-selected-count"},[e("itemIcon",{staticClass:"u-icon",attrs:{item_id:i.id}}),e("div",{staticClass:"u-count"},[e("span",[t._v("数量：")]),e("el-input-number",{attrs:{size:"mini",min:1,label:"数字"},model:{value:i.count,callback:function(e){t.$set(i,"count",t._n(e))},expression:"item.count"}})],1),e("i",{staticClass:"u-close el-icon-circle-close",on:{click:function(t){return a.data.splice(n,1)}}})],1)})):e("div",{staticClass:"u-normal"},[t._v("拖拽所需道具到此处")])],2)],1)])})),1):e("el-row",{staticClass:"u-list-box u-list-equip",attrs:{gutter:20}},t._l(t.equipList,(function(a,n){return e("el-col",{key:n,attrs:{span:6}},t._l(a,(function(a,n){return e("div",{key:n,staticClass:"u-list"},[e("div",{staticClass:"u-title"},[t._v(t._s(a.label))]),e("draggable",{attrs:{list:a.list,move:t.moveHandle,"data-AucGenre":a.AucGenre,"data-AucSubType":a.AucSubType,group:"draggable-item","ghost-class":"ghost"}},[a.list&&a.list.length?t._l(a.list,(function(n,s){return e("div",{key:s,staticClass:"u-selected u-selected-item u-selected-equip"},["string"==typeof n?e("itemIcon",{staticClass:"u-icon",attrs:{item_id:n}}):t._e(),"object"==Object(i.a)(n)?e("itemIcon",{staticClass:"u-icon",attrs:{item:n}}):t._e(),e("i",{staticClass:"u-close el-icon-circle-close",on:{click:function(t){return a.list.splice(s,1)}}})],1)})):e("div",{staticClass:"u-normal"},[t._v("拖拽所需道具到此处")])],2)],1)})),0)})),1)],1)]),e("el-form-item",[e("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"primary",loading:t.loading},on:{click:t.submit}},[t._v("提交物品清单")])],1)],1)],1)}),[],!1,null,"68adcb47",null));e.default=v.exports},ef77:function(t,e,a){"use strict";a("b0c0"),a("14d9");var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},n=(a("abe2"),a("2877")),s=Object(n.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},f026:function(t,e,a){"use strict";a("5faf")}}]);
//# sourceMappingURL=chunk-69979fdc.b4d699bf.js.map