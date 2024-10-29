"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[8200],{"./components/page-add/__stories__/page-add.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./components/page-add/page-add.tsx").$,title:"PageAdd",args:{onReady:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/page-add/__stories__/validation.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NameRequired:()=>NameRequired,RouteRequired:()=>RouteRequired,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/pages.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_page_add_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/page-add/__stories__/page-add.stories.ts"),_test_object__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/page-add/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=_object_spread_props(_object_spread({},_page_add_stories__WEBPACK_IMPORTED_MODULE_2__.default),{title:"PageAdd/tests/validation"});var _ref,NameRequired={name:'Поле "Название" является обязательным',args:{defaultValues:_object_spread_props(_object_spread({},_colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_0__.OE),{name:""})},play:(_ref=_async_to_generator((function(param){var canvasElement,step,pageAdd;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,(step=param.step)("Предусловие: изначально все поля, кроме name заполнены",(function(){})),pageAdd=new _test_object__WEBPACK_IMPORTED_MODULE_3__.Y({rootElement:canvasElement,step}),[4,step("Убеждаюсь, что изначально элемента с ошибкой не видно",_async_to_generator((function(){var error;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,pageAdd.getNameError({strict:!1})];case 1:return error=_state.sent(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeNull(),[2]}}))})))];case 1:return _state.sent(),[4,pageAdd.submit()];case 2:return _state.sent(),[4,step("Убеждаюсь, что теперь элемент с ошибкой виден",_async_to_generator((function(){var error;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,pageAdd.getNameError({strict:!0})];case 1:return error=_state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeVisible()];case 2:return _state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toHaveTextContent('Параметр "Название" обязательный')];case 3:return _state.sent(),[2]}}))})))];case 3:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})},RouteRequired={name:'Поле "Адрес" является обязательным',args:{defaultValues:_object_spread_props(_object_spread({},_colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_0__.OE),{route:""})},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,pageAdd;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,(step=param.step)("Предусловие: изначально все поля, кроме route заполнены",(function(){})),pageAdd=new _test_object__WEBPACK_IMPORTED_MODULE_3__.Y({rootElement:canvasElement,step}),[4,step("Убеждаюсь, что изначально элемента с ошибкой не видно",_async_to_generator((function(){var error;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,pageAdd.getRouteError({strict:!1})];case 1:return error=_state.sent(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeNull(),[2]}}))})))];case 1:return _state.sent(),[4,pageAdd.submit()];case 2:return _state.sent(),[4,step("Убеждаюсь, что теперь элемент с ошибкой виден",_async_to_generator((function(){var error;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,pageAdd.getRouteError({strict:!0})];case 1:return error=_state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeVisible()];case 2:return _state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toHaveTextContent('Параметр "Адрес" обязательный')];case 3:return _state.sent(),[2]}}))})))];case 3:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["NameRequired","RouteRequired"]}}]);