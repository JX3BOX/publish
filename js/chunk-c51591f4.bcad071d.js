(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c51591f4"],{"0a06":function(t,e,n){"use strict";var r=n("c532"),o=n("30b5"),i=n("f6b49"),s=n("5270"),a=n("4a7b");function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)n=n.then(e.shift(),e.shift());return n},c.prototype.getUri=function(t){return t=a(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}})),r.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,n,o){return this.request(r.merge(o||{},{method:t,url:e,data:n}))}})),t.exports=c},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},2444:function(t,e,n){"use strict";(function(e){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==e&&"[object process]"===Object.prototype.toString.call(e))&&(a=n("b50d")),a),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){c.headers[t]=r.merge(i)})),t.exports=c}).call(this,n("4362"))},"2d83":function(t,e,n){"use strict";var r=n("387f");t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,n){"use strict";var r=n("c532");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,(function(t,e){null!=t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))})))})),i=s.join("&")}if(i){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},"3a86":function(t,e,n){"use strict";n("e019")},"467f":function(t,e,n){"use strict";var r=n("2d83");t.exports=function(t,e,n){var o=n.config.validateStatus;!o||o(n.status)?t(n):e(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},"4a7b":function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){e=e||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(t){void 0!==e[t]&&(n[t]=e[t])})),r.forEach(i,(function(o){r.isObject(e[o])?n[o]=r.deepMerge(t[o],e[o]):void 0!==e[o]?n[o]=e[o]:r.isObject(t[o])?n[o]=r.deepMerge(t[o]):void 0!==t[o]&&(n[o]=t[o])})),r.forEach(s,(function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])}));var a=o.concat(i).concat(s),c=Object.keys(e).filter((function(t){return-1===a.indexOf(t)}));return r.forEach(c,(function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])})),n}},5270:function(t,e,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),s=n("2444");function a(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return a(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||s.adapter)(t).then((function(e){return a(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(a(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"61d5":function(t,e,n){},"7a77":function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"83b9":function(t,e,n){"use strict";var r=n("d925"),o=n("e683");t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},"8df4b":function(t,e,n){"use strict";var r=n("7a77");function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},ae02:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("d3b7"),n("ac1f"),n("5319");var r=n("ef77"),o=n("221a"),i=n("1b86"),s=n("c9d2"),a=n("41cb");function c(t){return Object(a.b)()({method:"GET",url:"/api/achievement/search",params:t})}var u=n("85e4"),l={name:"achievement",data:function(){return{options:{sources:null},post:{id:"",content:"",source_id:"",level:0,remark:""},loading:!1,processing:!1}},computed:{client:function(){return this.$store.state.client}},methods:{toPublish:function(){var t=this;if(this.post.source_id)if(this.post.content)if(this.post.level>=1&&this.post.level<=5)if(this.post.remark){this.processing=!0;var e={source_id:String(this.post.source_id),level:this.post.level,user_nickname:s.a.getInfo().name,content:this.post.content,remark:this.post.remark};i.a.post({type:"achievement",data:e,client:this.client},{}).then((function(e){200===(e=e.data).code?(t.$message({message:"提交成功，请等待审核",type:"success"}),setTimeout((function(){t.$router.push({name:"wiki_post",params:{type:"achievement"}})}),500)):t.$message({message:"".concat(e.message),type:"warning"})})).finally((function(){t.processing=!1}))}else this.$message({message:"请简单描述本次修订说明",type:"warning"});else this.$message({message:"请选择适合的综合难度",type:"warning"});else this.$message({message:"要编写攻略正文哦",type:"warning"});else this.$message({message:"请选择要修订攻略的成就",type:"warning"})},icon_url_filter:function(t){return Object(u.iconLink)(t)},search_handle:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loading=!0,c({keyword:e,limit:10}).then((function(e){200===(e=e.data).code&&(t.options.sources=e.data.achievements),t.loading=!1}))},loadData:function(t){var e=this;return this.loading=!0,i.a.get({type:"achievement",id:this.post.source_id},{supply:0,client:t}).then((function(t){var n=t.data,r=n.data.post,o=n.data.source;if(r){e.post.source_id=parseInt(r.source_id),e.post.level=r.level||1,e.post.remark="";var i=r.content;i=(i=(i=i.replace(/(<p>)?\s*◆成就难度 [★]+\s*(<\/p>)?/gi,"")).replace(/(<p>)?\s*◆花费时长 [★]+\s*(<\/p>)?/gi,"")).replace(/(<p>)?\s*◆成就攻略\s*(<\/p>)?/gi,""),e.post.content=i}else e.post.source_id=e.post.source_id?parseInt(e.post.source_id):"",e.post.level=0,e.post.remark="",e.post.content="";if(o){var s=!1;for(var a in e.options.sources=e.options.sources||[],e.options.sources)if(e.options.sources[a].ID==o.ID){s=!0;break}s||e.options.sources.push(o)}return r})).finally((function(){e.loading=!1}))}},created:function(){this.search_handle("");var t=this.$route.params.achievement_id;this.post.source_id=t?parseInt(t):null},watch:{"post.source_id":{handler:function(t){var e=this;t&&("std"==this.client?this.loadData("std"):this.loadData("origin").then((function(t){console.log("兼容获取"),t||e.loadData("std")})))}}},components:{"publish-header":r.a,Tinymce:o.a}},f=(n("3a86"),n("2877")),d=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-box"},[n("publish-header",{attrs:{name:"成就百科"}},[t._t("header")],2),n("el-form",{staticClass:"m-publish-post"},[n("div",{staticClass:"m-publish-source"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("选择成就 *")]),n("el-select",{staticClass:"u-source-id",attrs:{filterable:"",remote:"",disabled:!!t.post.id,placeholder:"输入成就名称/成就描述/称号/奖励物品并按『回车』进行搜索","remote-method":t.search_handle,loading:t.options.loading},model:{value:t.post.source_id,callback:function(e){t.$set(t.post,"source_id",e)},expression:"post.source_id"}},t._l(t.options.sources,(function(e){return n("el-option",{key:e.ID,attrs:{label:e.Name,value:e.ID}},[n("div",{staticClass:"m-selector-item"},[n("img",{staticClass:"u-icon",attrs:{src:t.icon_url_filter(e.IconID),alt:e.Name}}),n("span",{staticClass:"u-name",domProps:{textContent:t._s(e.Name)}})])])})),1)],1),n("div",{staticClass:"m-publish-level"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("综合难度 *")]),n("el-rate",{staticClass:"u-level",model:{value:t.post.level,callback:function(e){t.$set(t.post,"level",e)},expression:"post.level"}})],1),n("div",{staticClass:"m-publish-remark"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("修订说明 *")]),n("el-input",{attrs:{maxlength:200,minlength:1,"show-word-limit":"",required:"",placeholder:"请简单描述一下本次修订的说明"},model:{value:t.post.remark,callback:function(e){t.$set(t.post,"remark",e)},expression:"post.remark"}})],1),n("div",{staticClass:"m-publish-content"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("攻略正文 *")]),n("Tinymce",{attrs:{attachmentEnable:!0,resourceEnable:!0,height:400},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1),n("div",{staticClass:"m-publish-commit"},[n("el-divider",{attrs:{"content-position":"left"}}),n("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"primary",disabled:t.processing},on:{click:t.toPublish}},[t._v("提交攻略 ")])],1)])],1)}),[],!1,null,"74e1d0dd",null);e.default=d.exports},b50d:function(t,e,n){"use strict";var r=n("c532"),o=n("467f"),i=n("30b5"),s=n("83b9"),a=n("c345"),c=n("3934"),u=n("2d83");t.exports=function(t){return new Promise((function(e,l){var f=t.data,d=t.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}var v=s(t.baseURL,t.url);if(p.open(t.method.toUpperCase(),i(v,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:t,request:p};o(e,l,r),p=null}},p.onabort=function(){p&&(l(u("Request aborted",t,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(u("Network Error",t,null,p)),p=null},p.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),l(u(e,t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n("7aac"),y=(t.withCredentials||c(v))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;y&&(d[t.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(d,(function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(p.withCredentials=!!t.withCredentials),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){p&&(p.abort(),l(t),p=null)})),void 0===f&&(f=null),p.send(f)}))}},bc3a:function(t,e,n){t.exports=n("cee4")},bec3:function(t,e,n){"use strict";n("61d5")},c345:function(t,e,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}})),s):s}},c401:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e,n){return r.forEach(n,(function(n){t=n(t,e)})),t}},c4a9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var r=function(){return"undefined"!=typeof window?window:t},o=function(){var t=r();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},c532:function(t,e,n){"use strict";var r=n("1d2b"),o=Object.prototype.toString;function i(t){return"[object Array]"===o.call(t)}function s(t){return void 0===t}function a(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===o.call(t)}function u(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:function(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:s,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:c,isStream:function(t){return a(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return e},deepMerge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]="object"==typeof n?t({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return e},extend:function(t,e,n){return u(e,(function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},c8af:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},ca72:function(t,e,n){"use strict";var r,o=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],i=function(t){return-1!==o.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},s=function(t,e,n){var r=e.$props.value?e.$props.value:"",o=e.$props.initialValue?e.$props.initialValue:"";n.setContent(r||(e.initialized?e.cache:o)),e.$watch("value",(function(t,r){n&&"string"==typeof t&&t!==r&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)})),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,r=Array.isArray(n)?n.join(" "):n;e.on(r||"change input undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))}(e,n),function(t,e,n){Object.keys(e).filter(i).forEach((function(r){var o=e[r];"function"==typeof o&&("onInit"===r?o(t,n):n.on(r.substring(2),(function(t){return o(t,n)})))}))}(t,e.$listeners,n),e.initialized=!0},a=0,c=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++a+String(e)},u=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},l=function(){return{listeners:[],scriptId:c("tiny-script"),scriptLoaded:!1}},f=(r=l(),{load:function(t,e,n){r.scriptLoaded?n():(r.listeners.push(n),t.getElementById(r.scriptId)||function(t,e,n,r){var o=e.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=t,o.src=n;var i=function(){o.removeEventListener("load",i),r()};o.addEventListener("load",i),e.head&&e.head.appendChild(o)}(r.scriptId,t,e,(function(){r.listeners.forEach((function(t){return t()})),r.scriptLoaded=!0})))},reinitialize:function(){r=l()}}),d=n("c4a9"),p={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},h=function(){return(h=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},m=function(t){return function(){var e,n,r,o=h(h({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,u(e).concat(u(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return s(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(r=t.element)&&"textarea"===r.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),Object(d.a)().init(o)}},v={props:p,created:function(){this.elementId=this.$props.id||c("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(d.a)())m(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;f.load(this.element.ownerDocument,n,m(this))}},beforeDestroy:function(){null!==Object(d.a)()&&Object(d.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(d.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&m(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}};e.a=v},cee4:function(t,e,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),s=n("4a7b");function a(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var c=a(n("2444"));c.Axios=i,c.create=function(t){return a(s(c.defaults,t))},c.Cancel=n("7a77"),c.CancelToken=n("8df4b"),c.isCancel=n("2e67"),c.all=function(t){return Promise.all(t)},c.spread=n("0df6"),t.exports=c,t.exports.default=c},d772:function(t,e,n){t.exports=function(){"use strict";var t,e,n=1e3,r=6e4,o=36e5,i=864e5,s=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:a,months:c,days:i,hours:o,minutes:r,seconds:n,milliseconds:1,weeks:6048e5},f=function(t){return t instanceof y},d=function(t,e,n){return new y(t,n,e.$l)},p=function(t){return e.p(t)+"s"},h=function(t){return t<0},m=function(t){return h(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},g=function(t,e){return t?h(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function h(t,e,n){var r=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return d(t*l[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){r.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var o=t.match(u);if(o){var i=o.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=i[0],this.$d.months=i[1],this.$d.weeks=i[2],this.$d.days=i[3],this.$d.hours=i[4],this.$d.minutes=i[5],this.$d.seconds=i[6],this.calMilliseconds(),this}}return this}var v=h.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*l[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/c),t%=c,this.$d.days=m(t/i),t%=i,this.$d.hours=m(t/o),t%=o,this.$d.minutes=m(t/r),t%=r,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=g(this.$d.years,"Y"),e=g(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var r=g(n,"D"),o=g(this.$d.hours,"H"),i=g(this.$d.minutes,"M"),s=this.$d.seconds||0;this.$d.milliseconds&&(s+=this.$d.milliseconds/1e3);var a=g(s,"S"),c=t.negative||e.negative||r.negative||o.negative||i.negative||a.negative,u=o.format||i.format||a.format?"T":"",l=(c?"-":"")+"P"+t.format+e.format+r.format+u+o.format+i.format+a.format;return"P"===l||"-P"===l?"P0D":l},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(s,(function(t,e){return e||String(r[t])}))},v.as=function(t){return this.$ms/l[p(t)]},v.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/l[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var r;return r=e?t*l[p(e)]:f(t)?t.$ms:d(t,this).$ms,d(this.$ms+r*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return d(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},h}();return function(n,r,o){t=o,e=o().$utils(),o.duration=function(t,e){var n=o.locale();return d(t,{$l:n},e)},o.isDuration=f;var i=r.prototype.add,s=r.prototype.subtract;r.prototype.add=function(t,e){return f(t)&&(t=t.asMilliseconds()),i.bind(this)(t,e)},r.prototype.subtract=function(t,e){return f(t)&&(t=t.asMilliseconds()),s.bind(this)(t,e)}}}()},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},e019:function(t,e,n){},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},ef77:function(t,e,n){"use strict";var r={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},o=(n("bec3"),n("2877")),i=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-publish-header"},[e("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},f6b49:function(t,e,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o}}]);
//# sourceMappingURL=chunk-c51591f4.bcad071d.js.map