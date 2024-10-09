"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[4527],{"./components/element-add/__stories__/components-select.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComponentsFromApi:()=>ComponentsFromApi,ComponentsSelectable:()=>ComponentsSelectable,DefaultPropsForComponent:()=>DefaultPropsForComponent,NullByDefault:()=>NullByDefault,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/components.ts"),_colibrijs_schema__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../schema/utils/get-default-values.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_element_add_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/element-add/__stories__/element-add.stories.ts"),_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./hooks/use-api/mocked.tsx"),_test_object__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/element-add/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_element_add_stories__WEBPACK_IMPORTED_MODULE_2__.default),{title:"ElementAdd/tests/components-select"});var _ref,ComponentsFromApi={name:"В опциях селекта компоненты, которые возвращает api.components.get",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({components:{get:function(){return Promise.resolve([_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF])}}})}))],play:(_ref=_async_to_generator((function(context){var elementAdd,options;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(elementAdd=new _test_object__WEBPACK_IMPORTED_MODULE_4__.D(context)).waitForComponentsLoading()];case 1:return _state.sent(),[4,elementAdd.clickOnComponentsSelect()];case 2:return _state.sent(),[4,elementAdd.getComponentsOptions()];case 3:return options=_state.sent(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(options,"Убеждаюсь что в опшинах текст = component.name, value = component.id").toStrictEqual([{text:_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF.name,value:_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF.id}]),[2]}}))})),function(context){return _ref.apply(this,arguments)})},NullByDefault={name:"По умолчанию, ни один из компонентов не выбран",play:function(){var _ref=_async_to_generator((function(context){var elementAdd,selected;return _ts_generator(this,(function(_state){return elementAdd=new _test_object__WEBPACK_IMPORTED_MODULE_4__.D(context),selected=elementAdd.getSelectedComponentId(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(selected,"Убеждаюсь, что по умолчанию ничего не выбрано").toBe(null),[2]}))}));return function(context){return _ref.apply(this,arguments)}}()},ComponentsSelectable={name:"Когда пользователь выбирает один из компонентов, компонент становится выбранным",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({components:{get:function(){return Promise.resolve([_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF])}}})}))],play:function(){var _ref=_async_to_generator((function(context){var elementAdd,selected;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(elementAdd=new _test_object__WEBPACK_IMPORTED_MODULE_4__.D(context)).selectComponent(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF.id)];case 1:return _state.sent(),selected=elementAdd.getSelectedComponentId(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(selected,"Убеждаюсь, что при выборе компонента, он становится выбранным").toBe(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF.id),[2]}}))}));return function(context){return _ref.apply(this,arguments)}}()},DefaultPropsForComponent={name:"Когда пользователь выбирает один из компонентов, пропсы заполняются значениями по умолчанию",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({components:{get:function(){return Promise.resolve([_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF])}}})}))],play:function(){var _ref=_async_to_generator((function(context){var elementAdd,propsElement;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(elementAdd=new _test_object__WEBPACK_IMPORTED_MODULE_4__.D(context)).selectComponent(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF.id)];case 1:return _state.sent(),[4,elementAdd.findPropsElement()];case 2:return propsElement=_state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(propsElement,"Убеждаюсь что пропсы элемента равны дефолтным пропсам схемы компонента").toHaveValue(JSON.stringify((0,_colibrijs_schema__WEBPACK_IMPORTED_MODULE_5__.w)(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.OJ),null,2))];case 3:return _state.sent(),[2]}}))}));return function(context){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["ComponentsFromApi","NullByDefault","ComponentsSelectable","DefaultPropsForComponent"]},"./components/element-add/__stories__/element-add.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>element_add_stories});var components=__webpack_require__("../mocks/components.ts"),src=__webpack_require__("../../node_modules/fetch-mock/src/index.js");var dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),mocked=__webpack_require__("./hooks/use-api/mocked.tsx");const element_add_stories={component:__webpack_require__("./components/element-add/element-add.tsx").Q,title:"ElementAdd",args:{open:!0,onClose:(0,dist.fn)(),onReady:(0,dist.fn)()},decorators:[(0,mocked.M)((function(apiClient){apiClient.override({components:{get:function(){return Promise.resolve([components.DF])}}})})),function(Story){return(0,react.useEffect)((function(){return function mockLoadSchemaRequest(response){return src.A.get("*",response)}(components.OJ),function(){return function resetLoadSchemaRequestMock(){src.A.reset()}()}})),react.createElement(Story)}]};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/element-add/element-add.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>ElementAdd});var CloseOutlined=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/CloseOutlined.js"),get_schema_url=__webpack_require__("../module-utils/get-schema-url.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}function _loadSchema(){return _loadSchema=function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(component){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,fetch((0,get_schema_url.p)(component))];case 1:return[4,_state.sent().json()];case 2:return[2,_state.sent()]}}))})),_loadSchema.apply(this,arguments)}var get_default_values=__webpack_require__("../schema/utils/get-default-values.ts"),useQuery=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useQuery.js"),modal=__webpack_require__("../../node_modules/antd/es/modal/index.js"),es_form=__webpack_require__("../../node_modules/antd/es/form/index.js"),es_select=__webpack_require__("../../node_modules/antd/es/select/index.js"),input=__webpack_require__("../../node_modules/antd/es/input/index.js"),flex=__webpack_require__("../../node_modules/antd/es/flex/index.js"),es_button=__webpack_require__("../../node_modules/antd/es/button/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),use_api=__webpack_require__("./hooks/use-api/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ElementAdd(param){var _component_id,_component_id1,open=param.open,pageId=param.pageId,_param_testId=param.testId,testId=void 0===_param_testId?"element-add":_param_testId,onClose=param.onClose,onReady=param.onReady,api=(0,use_api.gf)(),_useState=_sliced_to_array((0,react.useState)(null),2),component=_useState[0],setComponent=_useState[1],_useQuery=(0,useQuery.I)({queryKey:[use_api.bh],queryFn:function(){return api.components.get()}}),components=_useQuery.data,isLoading=_useQuery.isLoading,isSuccess=_useQuery.isSuccess,_useQuery1=(0,useQuery.I)({enabled:Boolean(component),queryKey:[use_api.bh,"schema",null==component?void 0:component.id],queryFn:function(){return function loadSchema(component){return _loadSchema.apply(this,arguments)}(component)}}),schema=_useQuery1.data,componentsOptions=(0,react.useMemo)((function(){return isSuccess?components.map((function(component){return{label:React.createElement("span",{"data-testid":"component-option","data-value":component.id},component.name),value:component.id}})):[]}),[components,isSuccess]),changeComponentHandler=(0,react.useCallback)((function(componentId){if(isSuccess){var _components_find,component=null!==(_components_find=components.find((function(component){return component.id===componentId})))&&void 0!==_components_find?_components_find:null;setComponent(component)}}),[components,isSuccess]),submitHandler=(0,react.useCallback)((function(){component&&schema&&onReady({component,pageId,props:(0,get_default_values.w)(schema)})}),[component,schema,pageId,onReady]);return React.createElement(modal.A,{footer:null,open,title:"Добавить элемент",onClose,onCancel:onClose,"data-testid":testId,closeIcon:React.createElement(CloseOutlined.A,{"data-testid":"element-add__close-button"})},React.createElement(es_form.A,{layout:"vertical",onFinish:submitHandler},React.createElement(es_form.A.Item,{label:"Выберите компонент",required:!0},React.createElement(es_select.A,{loading:isLoading,onChange:changeComponentHandler,options:componentsOptions,value:null!==(_component_id=null==component?void 0:component.id)&&void 0!==_component_id?_component_id:null,"data-testid":"element-add__select","data-value":String(null!==(_component_id1=null==component?void 0:component.id)&&void 0!==_component_id1?_component_id1:null)})),schema&&React.createElement(es_form.A.Item,{label:"Пропсы"},React.createElement(input.A.TextArea,{value:JSON.stringify((0,get_default_values.w)(schema),null,2),"data-testid":"element-add__props",autoSize:!0,disabled:!0})),React.createElement(flex.A,{justify:"end"},React.createElement(es_button.Ay,{disabled:!component||!schema,htmlType:"submit",type:"primary","data-testid":"element-add__submit"},"Добавить"))))}ElementAdd.__docgenInfo={description:"",methods:[],displayName:"ElementAdd",props:{open:{required:!0,tsType:{name:"boolean"},description:""},pageId:{required:!0,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'element-add'",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReady:{required:!0,tsType:{name:"signature",type:"function",raw:"(options: IElementConstructorOptions) => void",signature:{arguments:[{type:{name:"Omit",elements:[{name:"IElement"},{name:"literal",value:"'id'"}],raw:"Omit<IElement, 'id'>"},name:"options"}],return:{name:"void"}}},description:""}}}},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,YT:()=>ELEMENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",ELEMENTS_KEY="elements",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")},"../module-utils/get-base-url.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getBaseUrl(component){var name=component.name,libraryName=component.libraryName,src=component.src,srcWithTrailingSlash=src.endsWith("/")?src:"".concat(src,"/");return"".concat(srcWithTrailingSlash).concat(libraryName,"/").concat(name)}__webpack_require__.d(__webpack_exports__,{$:()=>getBaseUrl})},"../module-utils/get-schema-url.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>getSchemaUrl});var _get_base_url__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../module-utils/get-base-url.ts");function getSchemaUrl(component){var baseUrl=(0,_get_base_url__WEBPACK_IMPORTED_MODULE_0__.$)(component);return"".concat(baseUrl,"/schema.json")}},"../schema/utils/get-default-values.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>getDefaultValues});var _get_properties_names__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../schema/utils/get-properties-names.ts");function getDefaultValues(schema){return getPropertiesValues(schema)}function getPropertiesValues(property){return(0,_get_properties_names__WEBPACK_IMPORTED_MODULE_0__.U)(property).reduce((function(obj,key){return"number"===property.properties[key].type&&(obj[key]=0),"string"===property.properties[key].type&&(obj[key]=""),"boolean"===property.properties[key].type&&(obj[key]=!1),"object"===property.properties[key].type&&(obj[key]=getPropertiesValues(property.properties[key])),obj}),{})}},"../schema/utils/get-properties-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getPropertiesNames(property){return Object.keys(property.properties)}__webpack_require__.d(__webpack_exports__,{U:()=>getPropertiesNames})}}]);