(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[8394,5102],{"../../node_modules/@ant-design/icons/es/icons/DownOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>icons_DownOutlined});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_DownOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),DownOutlined_DownOutlined=function DownOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_DownOutlined}))};const icons_DownOutlined=react.forwardRef(DownOutlined_DownOutlined)},"./components/element-add/__stories__/element-add.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/components.ts"),_colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../mocks/pages.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./hooks/use-api/mocked.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./components/element-add/element-add.tsx").Q,title:"ElementAdd",args:{open:!0,pageId:_colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_1__.ab.id,onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)(),onReady:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()},decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({components:{get:function(){return Promise.resolve([_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF])}}})}))]};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/antd/es/_util/ActionButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/rc-util/es/hooks/useState.js"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/antd/es/button/index.js"),_button_buttonHelpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/button/buttonHelpers.js");function isThenable(thing){return!(!thing||!thing.then)}const __WEBPACK_DEFAULT_EXPORT__=props=>{const{type,children,prefixCls,buttonProps,close,autoFocus,emitEvent,isSilent,quitOnNullishReturnValue,actionFn}=props,clickedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),buttonRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[loading,setLoading]=(0,rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_1__.A)(!1),onInternalClose=function(){null==close||close.apply(void 0,arguments)};react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{let timeoutId=null;return autoFocus&&(timeoutId=setTimeout((()=>{var _a;null===(_a=buttonRef.current)||void 0===_a||_a.focus()}))),()=>{timeoutId&&clearTimeout(timeoutId)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.Ay,Object.assign({},(0,_button_buttonHelpers__WEBPACK_IMPORTED_MODULE_3__.DU)(type),{onClick:e=>{if(clickedRef.current)return;if(clickedRef.current=!0,!actionFn)return void onInternalClose();let returnValueOfOnOk;if(emitEvent){if(returnValueOfOnOk=actionFn(e),quitOnNullishReturnValue&&!isThenable(returnValueOfOnOk))return clickedRef.current=!1,void onInternalClose(e)}else if(actionFn.length)returnValueOfOnOk=actionFn(close),clickedRef.current=!1;else if(returnValueOfOnOk=actionFn(),!isThenable(returnValueOfOnOk))return void onInternalClose();(returnValueOfOnOk=>{isThenable(returnValueOfOnOk)&&(setLoading(!0),returnValueOfOnOk.then((function(){setLoading(!1,!0),onInternalClose.apply(void 0,arguments),clickedRef.current=!1}),(e=>{if(setLoading(!1,!0),clickedRef.current=!1,!(null==isSilent?void 0:isSilent()))return Promise.reject(e)})))})(returnValueOfOnOk)},loading,prefixCls},buttonProps,{ref:buttonRef}),children)}},"../../node_modules/antd/es/flex/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>flex});var react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),omit=__webpack_require__("../../node_modules/rc-util/es/omit.js"),gapSize=__webpack_require__("../../node_modules/antd/es/_util/gapSize.js"),context=__webpack_require__("../../node_modules/antd/es/config-provider/context.js"),genComponentStyleHook=__webpack_require__("../../node_modules/antd/es/theme/util/genComponentStyleHook.js"),statistic=__webpack_require__("../../node_modules/antd/es/theme/util/statistic.js");const flexWrapValues=["wrap","nowrap","wrap-reverse"],justifyContentValues=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],alignItemsValues=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];const utils=function createFlexClassNames(prefixCls,props){return classnames_default()(Object.assign(Object.assign(Object.assign({},((prefixCls,props)=>{const wrap=!0===props.wrap?"wrap":props.wrap;return{[`${prefixCls}-wrap-${wrap}`]:wrap&&flexWrapValues.includes(wrap)}})(prefixCls,props)),((prefixCls,props)=>{const alignCls={};return alignItemsValues.forEach((cssKey=>{alignCls[`${prefixCls}-align-${cssKey}`]=props.align===cssKey})),alignCls[`${prefixCls}-align-stretch`]=!props.align&&!!props.vertical,alignCls})(prefixCls,props)),((prefixCls,props)=>{const justifyCls={};return justifyContentValues.forEach((cssKey=>{justifyCls[`${prefixCls}-justify-${cssKey}`]=props.justify===cssKey})),justifyCls})(prefixCls,props)))},genFlexStyle=token=>{const{componentCls}=token;return{[componentCls]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},genFlexGapStyle=token=>{const{componentCls}=token;return{[componentCls]:{"&-gap-small":{gap:token.flexGapSM},"&-gap-middle":{gap:token.flexGap},"&-gap-large":{gap:token.flexGapLG}}}},genFlexWrapStyle=token=>{const{componentCls}=token,wrapStyle={};return flexWrapValues.forEach((value=>{wrapStyle[`${componentCls}-wrap-${value}`]={flexWrap:value}})),wrapStyle},genAlignItemsStyle=token=>{const{componentCls}=token,alignStyle={};return alignItemsValues.forEach((value=>{alignStyle[`${componentCls}-align-${value}`]={alignItems:value}})),alignStyle},genJustifyContentStyle=token=>{const{componentCls}=token,justifyStyle={};return justifyContentValues.forEach((value=>{justifyStyle[`${componentCls}-justify-${value}`]={justifyContent:value}})),justifyStyle},flex_style=(0,genComponentStyleHook.OF)("Flex",(token=>{const{paddingXS,padding,paddingLG}=token,flexToken=(0,statistic.h1)(token,{flexGapSM:paddingXS,flexGap:padding,flexGapLG:paddingLG});return[genFlexStyle(flexToken),genFlexGapStyle(flexToken),genFlexWrapStyle(flexToken),genAlignItemsStyle(flexToken),genJustifyContentStyle(flexToken)]}),(()=>({})),{resetStyle:!1});var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Flex=react.forwardRef(((props,ref)=>{const{prefixCls:customizePrefixCls,rootClassName,className,style,flex,gap,children,vertical=!1,component:Component="div"}=props,othersProps=__rest(props,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:ctxFlex,direction:ctxDirection,getPrefixCls}=react.useContext(context.QO),prefixCls=getPrefixCls("flex",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=flex_style(prefixCls),mergedVertical=null!=vertical?vertical:null==ctxFlex?void 0:ctxFlex.vertical,mergedCls=classnames_default()(className,rootClassName,null==ctxFlex?void 0:ctxFlex.className,prefixCls,hashId,cssVarCls,utils(prefixCls,props),{[`${prefixCls}-rtl`]:"rtl"===ctxDirection,[`${prefixCls}-gap-${gap}`]:(0,gapSize.X)(gap),[`${prefixCls}-vertical`]:mergedVertical}),mergedStyle=Object.assign(Object.assign({},null==ctxFlex?void 0:ctxFlex.style),style);return flex&&(mergedStyle.flex=flex),gap&&!(0,gapSize.X)(gap)&&(mergedStyle.gap=gap),wrapCSSVar(react.createElement(Component,Object.assign({ref,className:mergedCls,style:mergedStyle},(0,omit.A)(othersProps,["justify","wrap","align"])),children))}));const flex=Flex},"./components/element-add/element-add.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ElementAdd});var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/CloseOutlined.js"),_colibrijs_schema__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../schema/utils/get-default-values.ts"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useQuery.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/modal/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/form/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/antd/es/select/index.js"),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/antd/es/flex/index.js"),antd__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts"),_hooks_use_schema__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./hooks/use-schema/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ElementAdd(param){var _component_id,_component_id1,open=param.open,pageId=param.pageId,_param_testId=param.testId,testId=void 0===_param_testId?"element-add":_param_testId,onClose=param.onClose,onReady=param.onReady,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),component=_useState[0],setComponent=_useState[1],_useQuery=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.I)({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.bh],queryFn:function(){return api.components.get()}}),components=_useQuery.data,isLoading=_useQuery.isLoading,isSuccess=_useQuery.isSuccess,schema=(0,_hooks_use_schema__WEBPACK_IMPORTED_MODULE_2__.p)(component).data,componentsOptions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return isSuccess?components.map((function(component){return{label:React.createElement("span",{"data-testid":"component-option","data-value":component.id},component.name),value:component.id}})):[]}),[components,isSuccess]),changeComponentHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(componentId){if(isSuccess){var _components_find,component=null!==(_components_find=components.find((function(component){return component.id===componentId})))&&void 0!==_components_find?_components_find:null;setComponent(component)}}),[components,isSuccess]),submitHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){component&&schema&&onReady({component,pageId,props:(0,_colibrijs_schema__WEBPACK_IMPORTED_MODULE_4__.w)(schema)})}),[component,pageId,schema,onReady]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{footer:null,open,title:"Добавить элемент",onClose,onCancel:onClose,"data-testid":testId,closeIcon:React.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.A,{"data-testid":"element-add__close-button"})},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{layout:"vertical",onFinish:submitHandler},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A.Item,{label:"Выберите компонент",required:!0},React.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.A,{loading:isLoading,onChange:changeComponentHandler,options:componentsOptions,value:null!==(_component_id=null==component?void 0:component.id)&&void 0!==_component_id?_component_id:null,"data-testid":"element-add__select","data-value":String(null!==(_component_id1=null==component?void 0:component.id)&&void 0!==_component_id1?_component_id1:null)})),schema&&React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A.Item,{label:"Пропсы"},React.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.A.TextArea,{value:JSON.stringify((0,_colibrijs_schema__WEBPACK_IMPORTED_MODULE_4__.w)(schema),null,2),"data-testid":"element-add__props",autoSize:!0,disabled:!0})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.A,{justify:"end"},React.createElement(antd__WEBPACK_IMPORTED_MODULE_11__.Ay,{disabled:!component||!schema,htmlType:"submit",type:"primary","data-testid":"element-add__submit"},"Добавить"))))}ElementAdd.__docgenInfo={description:"",methods:[],displayName:"ElementAdd",props:{open:{required:!0,tsType:{name:"boolean"},description:""},pageId:{required:!0,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'element-add'",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReady:{required:!0,tsType:{name:"signature",type:"function",raw:"(options: IElementConstructorOptions) => void",signature:{arguments:[{type:{name:"Omit",elements:[{name:"IElement"},{name:"literal",value:"'id'"}],raw:"Omit<IElement, 'id'>"},name:"options"}],return:{name:"void"}}},description:""}}}},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,YT:()=>ELEMENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",ELEMENTS_KEY="elements",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")},"./hooks/use-schema/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>_use_schema__WEBPACK_IMPORTED_MODULE_0__.p});var _use_schema__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./hooks/use-schema/use-schema.ts")},"../schema/utils/get-default-values.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>getDefaultValues});var _get_properties_names__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../schema/utils/get-properties-names.ts");function getDefaultValues(schema){return getPropertiesValues(schema)}function getPropertiesValues(property){return(0,_get_properties_names__WEBPACK_IMPORTED_MODULE_0__.U)(property).reduce((function(obj,key){return"number"===property.properties[key].type&&(obj[key]=0),"string"===property.properties[key].type&&(obj[key]=""),"boolean"===property.properties[key].type&&(obj[key]=!1),"object"===property.properties[key].type&&(obj[key]=getPropertiesValues(property.properties[key])),obj}),{})}},"../schema/utils/get-properties-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getPropertiesNames(property){return Object.keys(property.properties)}__webpack_require__.d(__webpack_exports__,{U:()=>getPropertiesNames})}}]);