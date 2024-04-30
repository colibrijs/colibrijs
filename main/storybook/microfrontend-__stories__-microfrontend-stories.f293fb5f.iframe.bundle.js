(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[1962],{"../../node_modules/@module-federation/utilities/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@module-federation/utilities/dist sync recursive",module.exports=webpackEmptyContext},"./components/microfrontend/__stories__/microfrontend.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>microfrontend_stories});var components=__webpack_require__("../mocks/components.ts"),get_base_url=__webpack_require__("../module-utils/get-base-url.ts");function getCssUrl(component){var baseUrl=(0,get_base_url.$)(component);return"".concat(baseUrl,"/component.css")}var react=__webpack_require__("../../node_modules/react/index.js");function encodePackageName(name){return name.replace(/@/g,"_").replace(/\//g,"__")}var index_cjs=__webpack_require__("../../node_modules/@module-federation/utilities/dist/index.cjs.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}function _importRemoteSsr(){return _importRemoteSsr=function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(options){var url,module,remoteEntryFileName,fullUrl,container;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return url=options.url,module=options.module,remoteEntryFileName=options.remoteEntryFileName,fullUrl="".concat(url,"/").concat(remoteEntryFileName),__webpack_require__.e(3821).then(__webpack_require__.t.bind(__webpack_require__,"./components/microfrontend/import-remote/fake.ts",23)),__webpack_require__.I("default"),[4,new Promise((function(resolve){return __webpack_require__.l(fullUrl,resolve,module)}))];case 1:return container=_state.sent(),__webpack_require__.S.default||container.init(__webpack_require__.S.default),[4,container[options.scope].get(module)];case 2:return[2,_state.sent()()]}}))})),_importRemoteSsr.apply(this,arguments)}function importRemote(component){var ssr="undefined"==typeof window,packageName="".concat(component.libraryName,"/").concat(component.name);return ssr?function importRemoteSsr(options){return _importRemoteSsr.apply(this,arguments)}({url:(0,get_base_url.$)(component),scope:encodePackageName(packageName),module:"./component/",remoteEntryFileName:"remote.server.js"}):(0,index_cjs.Gj)({url:(0,get_base_url.$)(component),scope:encodePackageName(packageName),module:"./component/",remoteEntryFileName:"remote.client.js"})}function Microfrontend(param){var component=param.component,props=param.props,Component=(0,react.lazy)((function(){return importRemote(component)}));return react.createElement(react.Fragment,null,react.createElement("link",{rel:"stylesheet",href:getCssUrl(component)}),react.createElement(react.Suspense,null,react.createElement(Component,props)))}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Microfrontend.__docgenInfo={description:"",methods:[],displayName:"Microfrontend",props:{id:{required:!0,tsType:{name:"string"},description:"id элемента"},component:{required:!0,tsType:{name:"IComponent"},description:"Компонент, который нужно отрендерить"},props:{required:!0,tsType:{name:"intersection",raw:"JSX.IntrinsicAttributes & PropsWithRef<P>",elements:[{name:"JSX.IntrinsicAttributes"},{name:"PropsWithRef",elements:[{name:"P"}],raw:"PropsWithRef<P>"}]},description:"Пропсы, с которыми нужно отрендерить компонент"}}};const microfrontend_stories={component:Microfrontend,title:"Microfrontend",args:{component:function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},components.e),{src:String("https://colibrijs.github.io/colibrijs/main/example/")}),props:{title:"Удалённый компонент",text:"Но тем не менее, рендерюсь здесь"}}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../module-utils/get-base-url.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getBaseUrl(component){var name=component.name,libraryName=component.libraryName,src=component.src,srcWithTrailingSlash=src.endsWith("/")?src:"".concat(src,"/");return"".concat(srcWithTrailingSlash).concat(libraryName,"/").concat(name)}__webpack_require__.d(__webpack_exports__,{$:()=>getBaseUrl})}}]);