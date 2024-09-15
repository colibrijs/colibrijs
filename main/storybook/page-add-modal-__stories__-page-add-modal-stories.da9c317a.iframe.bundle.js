(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[4846],{"./components/page-add-modal/__stories__/page-add-modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Opened:()=>Opened,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_page_add_modal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/page-add-modal/page-add-modal.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={component:function Wrapper(param){var defaultOpen=param.open,onClose=param.onClose,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOpen),2),open=_useState[0],setOpen=_useState[1],openModal=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){return setOpen(!0)}),[]),closeHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setOpen(!1),onClose()}),[onClose]);return React.createElement(React.Fragment,null,React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.Ay,{onClick:openModal,type:"primary"},"Открыть"),React.createElement(_page_add_modal__WEBPACK_IMPORTED_MODULE_2__.k,{open,onClose:closeHandler}))},title:"PageAddModal",args:{open:!1,onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};var Default={},Opened={args:{open:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Opened.parameters={...Opened.parameters,docs:{...Opened.parameters?.docs,source:{originalSource:"{\n  args: {\n    open: true\n  }\n}",...Opened.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Opened"]},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/rc-util/es/KeyCode.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var KeyCode={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function isTextModifyingKeyEvent(e){var keyCode=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||keyCode>=KeyCode.F1&&keyCode<=KeyCode.F12)return!1;switch(keyCode){case KeyCode.ALT:case KeyCode.CAPS_LOCK:case KeyCode.CONTEXT_MENU:case KeyCode.CTRL:case KeyCode.DOWN:case KeyCode.END:case KeyCode.ESC:case KeyCode.HOME:case KeyCode.INSERT:case KeyCode.LEFT:case KeyCode.MAC_FF_META:case KeyCode.META:case KeyCode.NUMLOCK:case KeyCode.NUM_CENTER:case KeyCode.PAGE_DOWN:case KeyCode.PAGE_UP:case KeyCode.PAUSE:case KeyCode.PRINT_SCREEN:case KeyCode.RIGHT:case KeyCode.SHIFT:case KeyCode.UP:case KeyCode.WIN_KEY:case KeyCode.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function isCharacterKey(keyCode){if(keyCode>=KeyCode.ZERO&&keyCode<=KeyCode.NINE)return!0;if(keyCode>=KeyCode.NUM_ZERO&&keyCode<=KeyCode.NUM_MULTIPLY)return!0;if(keyCode>=KeyCode.A&&keyCode<=KeyCode.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===keyCode)return!0;switch(keyCode){case KeyCode.SPACE:case KeyCode.QUESTION_MARK:case KeyCode.NUM_PLUS:case KeyCode.NUM_MINUS:case KeyCode.NUM_PERIOD:case KeyCode.NUM_DIVISION:case KeyCode.SEMICOLON:case KeyCode.DASH:case KeyCode.EQUALS:case KeyCode.COMMA:case KeyCode.PERIOD:case KeyCode.SLASH:case KeyCode.APOSTROPHE:case KeyCode.SINGLE_QUOTE:case KeyCode.OPEN_SQUARE_BRACKET:case KeyCode.BACKSLASH:case KeyCode.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const __WEBPACK_DEFAULT_EXPORT__=KeyCode},"./components/page-add-modal/page-add-modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>PageAddModal});var modal=__webpack_require__("../../node_modules/antd/es/modal/index.js"),page_add=__webpack_require__("./components/page-add/page-add.tsx");function PageAddModal(param){var open=param.open,onClose=param.onClose;return React.createElement(modal.A,{footer:null,open,title:"Добавление страницы",onCancel:onClose,"data-testid":"page-add-modal"},React.createElement("div",{"data-testid":"page-add-modal__content"},React.createElement(page_add.$,{onReady:onClose})))}PageAddModal.__docgenInfo={description:"",methods:[],displayName:"PageAddModal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./components/page-add/page-add.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>PageAdd});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/form/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/antd/es/divider/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function PageAdd(param){var defaultValues=param.defaultValues,onReady=param.onReady,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),queryClient=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.jE)(),form=_sliced_to_array(antd__WEBPACK_IMPORTED_MODULE_3__.A.useForm(),1)[0];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _defaultValues_name,_defaultValues_route;form.setFieldsValue({name:null!==(_defaultValues_name=null==defaultValues?void 0:defaultValues.name)&&void 0!==_defaultValues_name?_defaultValues_name:"",route:null!==(_defaultValues_route=null==defaultValues?void 0:defaultValues.route)&&void 0!==_defaultValues_route?_defaultValues_route:""})}),[form,defaultValues]);var _useMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.n)({mutationFn:function(options){return api.pages.post(options)},onSuccess:function(){queryClient.invalidateQueries({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.PE]}),onReady&&onReady()}}),error=_useMutation.error,isPending=_useMutation.isPending,addPage=_useMutation.mutateAsync,rules=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{name:[{required:!0,message:'Параметр "Название" обязательный'}],route:[{required:!0,message:'Параметр "Адрес" обязательный'}]}}),[]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A,{layout:"vertical",form,onFinish:addPage,"data-testid":"page-add"},error&&React.createElement(React.Fragment,null,React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{message:error.message,type:"error","data-testid":"page-add__error"}),React.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.A,{type:"vertical"})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Item,{label:"Название",name:"name",rules:rules.name,"data-testid":"page-add__name",required:!0},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{type:"text","data-testid":"page-add__name-input"})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Item,{label:"Адрес",name:"route",rules:rules.route,"data-testid":"page-add__route",required:!0},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{type:"text","data-testid":"page-add__route-input"})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{htmlType:"submit",loading:isPending,type:"primary","data-testid":"page-add__submit"},"Добавить"))}PageAdd.__docgenInfo={description:"",methods:[],displayName:"PageAdd",props:{defaultValues:{required:!1,tsType:{name:"Partial",elements:[{name:"Omit",elements:[{name:"IPage"},{name:"literal",value:"'id'"}],raw:"Omit<IPage, 'id'>"}],raw:"Partial<IPageConstructorOptions>"},description:""},onReady:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")}}]);