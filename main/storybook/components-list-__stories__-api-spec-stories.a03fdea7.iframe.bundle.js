(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[1857,4886],{"./components/components-list/__stories__/api.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ResponseData:()=>ResponseData,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/components.ts"),_colibrijs_module_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../module-utils/get-schema-url.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_components_list_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/components-list/__stories__/components-list.stories.ts"),_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./hooks/use-api/mocked.tsx");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_components_list_stories__WEBPACK_IMPORTED_MODULE_2__.default),{title:"ComponentsList/tests/api"});var _ref,ResponseData={name:"В таблице отображаются компоненты из ответа api.components.get",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({components:{get:function(){return Promise.resolve([_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.e])}}})}))],play:(_ref=_async_to_generator((function(param){var canvasElement,step,componentRow;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).findByTestId("components-list__".concat(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.e.id))];case 1:return componentRow=_state.sent(),[4,step("Проверяю, что в первом столбике отображается имя компонента",_async_to_generator((function(){var firstColumn;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return firstColumn=componentRow.querySelector(".ant-table-cell:nth-child(1)"),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(firstColumn).toHaveTextContent(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.e.name)];case 1:return _state.sent(),[2]}}))})))];case 2:return _state.sent(),[4,step("Проверяю, что в во втором столбике отображается название библиотеки",_async_to_generator((function(){var secondColumn;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return secondColumn=componentRow.querySelector(".ant-table-cell:nth-child(2)"),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(secondColumn).toHaveTextContent(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.e.libraryName)];case 1:return _state.sent(),[2]}}))})))];case 3:return _state.sent(),[4,step("Проверяю, что в третьем столбике отображается ссылка на схему",_async_to_generator((function(){var thirdColumn,schemaUrl;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return thirdColumn=componentRow.querySelector(".ant-table-cell:nth-child(3)"),schemaUrl=(0,_colibrijs_module_utils__WEBPACK_IMPORTED_MODULE_4__.p)(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.e),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(thirdColumn).toHaveTextContent(schemaUrl)];case 1:return _state.sent(),[2]}}))})))];case 4:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})};const __namedExportsOrder=["ResponseData"]},"./components/components-list/__stories__/components-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>components_list_stories});var mocked=__webpack_require__("./hooks/use-api/mocked.tsx"),get_schema_url=__webpack_require__("../module-utils/get-schema-url.ts"),useQuery=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useQuery.js"),table=__webpack_require__("../../node_modules/antd/es/table/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),use_api=__webpack_require__("./hooks/use-api/index.ts"),component_add=__webpack_require__("./components/component-add/component-add.tsx"),component_remove=__webpack_require__("./components/component-remove/component-remove.tsx"),components_link=__webpack_require__("./components/link/index.ts");function ComponentsList(){var api=(0,use_api.gf)(),_useQuery=(0,useQuery.I)({queryFn:function(){return api.components.get()},queryKey:[use_api.bh]}),components=_useQuery.data,isLoading=_useQuery.isLoading,getRowClassName=(0,react.useCallback)((function(component){return component.id}),[]),setRowAttributes=(0,react.useCallback)((function(component){return{"data-testid":"components-list__".concat(component.id)}}),[]),columns=(0,react.useMemo)((function(){return[{title:"Компонент",dataIndex:"name",key:"name"},{title:"Библиотека",dataIndex:"libraryName",key:"libraryName"},{title:"Ссылка",dataIndex:"src",key:"src",render:function(_,component){return React.createElement(components_link.N,{href:(0,get_schema_url.p)(component),target:"_blank",rel:"noreferrer"},(0,get_schema_url.p)(component))}},{key:"actions",render:function(_,component){return React.createElement(component_remove.o,{component})}}]}),[]),Footer=(0,react.useCallback)((function(){return React.createElement(component_add.B,null)}),[]);return React.createElement(table.A,{columns,dataSource:components,loading:isLoading,pagination:!1,rowKey:getRowClassName,footer:Footer,onRow:setRowAttributes})}ComponentsList.__docgenInfo={description:"",methods:[],displayName:"ComponentsList"};const components_list_stories={component:ComponentsList,title:"ComponentsList"};var Default={},Empty={decorators:[(0,mocked.M)((function(apiClient){return apiClient.override({components:{get:function(){return Promise.resolve([])}}})}))]},Loading={decorators:[(0,mocked.M)((function(apiClient){return apiClient.override({components:{get:function(){return new Promise((function(){}))}}})}))]};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  decorators: [withMockedApi(apiClient => apiClient.override({\n    components: {\n      get: () => Promise.resolve([])\n    }\n  }))]\n}",...Empty.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  decorators: [withMockedApi(apiClient => apiClient.override({\n    components: {\n      get: () => new Promise(() => {})\n    }\n  }))]\n}",...Loading.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Empty","Loading"]},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./components/component-add/component-add.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>ComponentAdd});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/form/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/antd/es/divider/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ComponentAdd(param){var defaultValues=param.defaultValues,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),queryClient=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.jE)(),form=_sliced_to_array(antd__WEBPACK_IMPORTED_MODULE_3__.A.useForm(),1)[0];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _defaultValues_name,_defaultValues_libraryName,_defaultValues_src;form.setFieldsValue({name:null!==(_defaultValues_name=null==defaultValues?void 0:defaultValues.name)&&void 0!==_defaultValues_name?_defaultValues_name:"",libraryName:null!==(_defaultValues_libraryName=null==defaultValues?void 0:defaultValues.libraryName)&&void 0!==_defaultValues_libraryName?_defaultValues_libraryName:"",src:null!==(_defaultValues_src=null==defaultValues?void 0:defaultValues.src)&&void 0!==_defaultValues_src?_defaultValues_src:""})}),[form,defaultValues]);var _useMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.n)({mutationFn:function(options){return api.components.post(options)},onSuccess:function(){return queryClient.invalidateQueries({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.bh]})}}),error=_useMutation.error,isPending=_useMutation.isPending,addComponent=_useMutation.mutateAsync,rules=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{name:[{required:!0,message:'Параметр "Название компонента" обязательный'}],libraryName:[{required:!0,message:'Параметр "Название библиотеки" обязательный'}],src:[{required:!0,message:'Параметр "Ссылка на сборку" обязательный'},{type:"url",message:'Параметр "Ссылка на сборку" должен быть ссылкой'}]}}),[]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A,{layout:"vertical",form,onFinish:addComponent},error&&React.createElement(React.Fragment,null,React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{message:error.message,type:"error","data-testid":"component-add__error"}),React.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.A,{type:"vertical"})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Item,{label:"Название компонента",name:"name",rules:rules.name,"data-testid":"component-add__name",required:!0},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{type:"text","data-testid":"component-add__name-input"})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Item,{label:"Название библиотеки",name:"libraryName",rules:rules.libraryName,"data-testid":"component-add__library-name",required:!0},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{type:"text","data-testid":"component-add__library-name-input"})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Item,{label:"Ссылка на сборку",name:"src",rules:rules.src,"data-testid":"component-add__src",required:!0},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{type:"url","data-testid":"component-add__src-input"})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{htmlType:"submit",loading:isPending,type:"primary","data-testid":"component-add__submit"},"Добавить"))}ComponentAdd.__docgenInfo={description:"",methods:[],displayName:"ComponentAdd",props:{defaultValues:{required:!1,tsType:{name:"Partial",elements:[{name:"Omit",elements:[{name:"IComponent"},{name:"literal",value:"'id'"}],raw:"Omit<IComponent, 'id'>"}],raw:"Partial<IComponentConstructorOptions>"},description:""}}}},"./components/component-remove/component-remove.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>ComponentRemove});var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/DeleteOutlined.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/popconfirm/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/antd/es/tooltip/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts");function ComponentRemove(param){var component=param.component,onRemove=param.onRemove,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),queryClient=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.jE)(),_useMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.n)({mutationFn:function(){return api.components.delete(component.id)},onError:function(error){return antd__WEBPACK_IMPORTED_MODULE_4__.Ay.error(React.createElement("span",{"data-testid":"component-remove__error"},error.message))},onSuccess:function(removedComponent){onRemove&&onRemove(removedComponent),queryClient.invalidateQueries({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.bh]}),antd__WEBPACK_IMPORTED_MODULE_4__.Ay.success(React.createElement("span",{"data-testid":"component-remove__success"},"Компонент “",component.name,"” успешно удалён"))}}),deleteComponent=_useMutation.mutate,isPending=_useMutation.isPending,confirmHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){deleteComponent()}),[deleteComponent]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Удалить компонент?",description:"Компонент “".concat(component.name,"” будет удалён с концами"),okText:React.createElement("span",{"data-testid":"component-remove__confirm"},"Да"),cancelText:"Галя, отмена",onConfirm:confirmHandler},React.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.A,{title:"Удалить"},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{loading:isPending,icon:React.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.A,null),htmlType:"button","data-testid":"component-remove__remove",shape:"circle",danger:!0,ghost:!0})))}ComponentRemove.__docgenInfo={description:"",methods:[],displayName:"ComponentRemove",props:{component:{required:!0,tsType:{name:"IComponent"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(component: IComponent) => void",signature:{arguments:[{type:{name:"IComponent"},name:"component"}],return:{name:"void"}}},description:""}}}},"./components/link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>Link});var typography=__webpack_require__("../../node_modules/antd/es/typography/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),context=__webpack_require__("./hooks/use-router/context.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Link(_param){var children=_param.children,href=_param.href,attributes=_object_without_properties(_param,["children","href"]),router=function useRouter(){return(0,react.useContext)(context.z)}(),clickHandler=(0,react.useCallback)((function(event){"_blank"!==attributes.target&&event.preventDefault(),router.push(href)}),[attributes,href,router]);return React.createElement(typography.A.Link,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},attributes),{href,onClick:clickHandler}),children)}Link.__docgenInfo={description:"",methods:[],displayName:"Link"}},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")},"../module-utils/get-base-url.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getBaseUrl(component){var name=component.name,libraryName=component.libraryName,src=component.src,srcWithTrailingSlash=src.endsWith("/")?src:"".concat(src,"/");return"".concat(srcWithTrailingSlash).concat(libraryName,"/").concat(name)}__webpack_require__.d(__webpack_exports__,{$:()=>getBaseUrl})},"../module-utils/get-schema-url.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>getSchemaUrl});var _get_base_url__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../module-utils/get-base-url.ts");function getSchemaUrl(component){var baseUrl=(0,_get_base_url__WEBPACK_IMPORTED_MODULE_0__.$)(component);return"".concat(baseUrl,"/schema.json")}}}]);