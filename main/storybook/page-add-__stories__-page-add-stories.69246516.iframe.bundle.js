"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[938],{"./components/page-add/__stories__/page-add.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./components/page-add/page-add.tsx").$,title:"PageAdd",args:{onReady:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/page-add/page-add.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>PageAdd});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/form/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/antd/es/divider/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function PageAdd(param){var defaultValues=param.defaultValues,onReady=param.onReady,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),queryClient=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.jE)(),form=_sliced_to_array(antd__WEBPACK_IMPORTED_MODULE_3__.A.useForm(),1)[0];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _defaultValues_route;form.setFieldsValue({route:null!==(_defaultValues_route=null==defaultValues?void 0:defaultValues.route)&&void 0!==_defaultValues_route?_defaultValues_route:""})}),[form,defaultValues]);var _useMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.n)({mutationFn:function(options){return api.pages.post(options)},onSuccess:function(){queryClient.invalidateQueries({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.PE]}),onReady&&onReady()}}),error=_useMutation.error,isPending=_useMutation.isPending,addPage=_useMutation.mutateAsync,rules=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{route:[{required:!0,message:'Параметр "Адрес" обязательный'}]}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A,{layout:"vertical",form,onFinish:addPage,"data-testid":"page-add"},error&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{message:error.message,type:"error","data-testid":"page-add__error"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.A,{type:"vertical"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Item,{label:"Адрес",name:"route",rules:rules.route,"data-testid":"page-add__route",required:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{type:"text","data-testid":"page-add__route-input"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{htmlType:"submit",loading:isPending,type:"primary","data-testid":"page-add__submit"},"Добавить"))}PageAdd.__docgenInfo={description:"",methods:[],displayName:"PageAdd",props:{defaultValues:{required:!1,tsType:{name:"Partial",elements:[{name:"Omit",elements:[{name:"IPage"},{name:"literal",value:"'id'"}],raw:"Omit<IPage, 'id'>"}],raw:"Partial<IPageConstructorOptions>"},description:""},onReady:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")}}]);