(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({25:"page-add-__stories__-callbacks-spec-stories",113:"page-title-__stories__-content-spec-stories",938:"page-add-__stories__-page-add-stories",1005:"page-add-__stories__-api-spec-stories",1256:"page-remove-__stories__-api-spec-stories",1436:"layout-__stories__-layout-stories",1742:"components-add-__stories__-api-spec-stories",1857:"components-list-__stories__-api-spec-stories",1962:"microfrontend-__stories__-microfrontend-stories",2041:"components-remove-__stories__-api-spec-stories",3353:"page-add-modal-__stories__-page-add-integration-spec-stories",3617:"components-add-__stories__-validation-spec-stories",4282:"pages-list-__stories__-content-spec-stories",4846:"page-add-modal-__stories__-page-add-modal-stories",4886:"components-list-__stories__-components-list-stories",5150:"pages-list-__stories__-pages-list-stories",5656:"components-add-__stories__-components-add-stories",5967:"microfrontend-__stories__-microfrontend-test-stories",6520:"props-editor-__stories__-props-editor-stories",7344:"page-title-__stories__-page-title-stories",7845:"components-remove-__stories__-callbacks-spec-stories",7982:"components-remove-__stories__-components-remove-stories",8196:"props-editor-__stories__-common-test-stories",8200:"page-add-__stories__-validation-spec-stories",8898:"page-remove-__stories__-page-remove-stories",9945:"pages-list-__stories__-integration-page-add-spec-stories"}[chunkId]||chunkId)+"."+{25:"045c4b0b",113:"6ae32edd",129:"830a0739",175:"4b3196ff",516:"71c43306",765:"69d8ffee",938:"d194091f",988:"a7bb7995",1005:"2f588d8a",1256:"1beb6b4c",1436:"d3ce3b34",1589:"72bb89d2",1742:"b82af810",1857:"7fa599a6",1962:"81a4e6f4",2041:"c24f65b0",2909:"440cdc0c",3235:"3c462743",3353:"3206550a",3562:"1a096956",3617:"a43388b0",3821:"c5429cb8",4282:"87a98b7c",4476:"095d2800",4757:"4fc27be9",4846:"79b22ba9",4886:"fa35308c",5150:"55ce3a96",5184:"f9d260fc",5395:"8bae96f6",5656:"7d638d15",5967:"eeca612b",6520:"424c6566",6824:"ecc255f9",7005:"c24b9854",7067:"c621abf9",7118:"3116c8a7",7344:"0a40cebb",7512:"f17980d6",7625:"7ac6c369",7845:"91f140e4",7982:"927468eb",8196:"eaed88d0",8200:"fefb728c",8835:"5b3f1d3f",8898:"3a2dadc9",9272:"0ebedaf0",9835:"10a0f51e",9945:"988841cf"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@colibrijs/core:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@colibrijs/core:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),(()=>{__webpack_require__.S={};var initPromises={},initTokens={};__webpack_require__.I=(name,initScope)=>{initScope||(initScope=[]);var initToken=initTokens[name];if(initToken||(initToken=initTokens[name]={}),!(initScope.indexOf(initToken)>=0)){if(initScope.push(initToken),initPromises[name])return initPromises[name];__webpack_require__.o(__webpack_require__.S,name)||(__webpack_require__.S[name]={});__webpack_require__.S[name];var promises=[];return promises.length?initPromises[name]=Promise.all(promises).then((()=>initPromises[name]=1)):initPromises[name]=1}}})(),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();