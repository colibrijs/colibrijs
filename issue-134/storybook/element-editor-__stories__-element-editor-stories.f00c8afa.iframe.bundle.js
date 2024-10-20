(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[3424],{"../../node_modules/@ant-design/icons/es/icons/CheckOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>icons_CheckOutlined});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_CheckOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),CheckOutlined_CheckOutlined=function CheckOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_CheckOutlined}))};const icons_CheckOutlined=react.forwardRef(CheckOutlined_CheckOutlined)},"./components/element-editor/__stories__/element-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/elements.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./hooks/use-api/mocked.tsx"),_element_editor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/element-editor/element-editor.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={component:function Wrapper(param){var element=param.element,onEdit=param.onEdit,onRemove=param.onRemove,onClose=param.onClose,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(element),2),elementExample=_useState[0],setElementExample=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),2),open=_useState1[0],setOpen=_useState1[1],closeHandler=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(){setOpen(!1),onClose()}),[onClose]),editHandler=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(props){onEdit(props),setElementExample(_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},elementExample),{props}))}),[elementExample,onEdit]),onOpen=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(){setOpen(!0)}),[]);return React.createElement(React.Fragment,null,React.createElement("button",{onClick:onOpen},"Открыть эдитор"),React.createElement(_element_editor__WEBPACK_IMPORTED_MODULE_4__.C,{element:elementExample,onRemove,onEdit:editHandler,open,onClose:closeHandler}))},title:"ElementEditor",args:{element:_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2,onRemove:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),onEdit:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()},decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({elements:{delete:function(){return Promise.resolve(_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2)},patch:function(){return Promise.resolve(_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2)}}})}))]};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/antd/es/_util/gapSize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isPresetSize(size){return["small","middle","large"].includes(size)}function isValidGapNumber(size){return!!size&&("number"==typeof size&&!Number.isNaN(size))}__webpack_require__.d(__webpack_exports__,{X:()=>isPresetSize,m:()=>isValidGapNumber})},"../../node_modules/antd/es/theme/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>theme});var es=__webpack_require__("../../node_modules/@ant-design/cssinjs/es/index.js"),themes_default=__webpack_require__("../../node_modules/antd/es/theme/themes/default/index.js"),seed=__webpack_require__("../../node_modules/antd/es/theme/themes/seed.js"),alias=__webpack_require__("../../node_modules/antd/es/theme/util/alias.js");const theme_getDesignToken=config=>{const theme=(null==config?void 0:config.algorithm)?(0,es.an)(config.algorithm):(0,es.an)(themes_default.A),mergedToken=Object.assign(Object.assign({},seed.A),null==config?void 0:config.token);return(0,es.lO)(mergedToken,{override:null==config?void 0:config.token},theme,alias.A)};var useToken=__webpack_require__("../../node_modules/antd/es/theme/useToken.js"),context=__webpack_require__("../../node_modules/antd/es/theme/context.js"),genControlHeight=__webpack_require__("../../node_modules/antd/es/theme/themes/shared/genControlHeight.js"),genFontMapToken=__webpack_require__("../../node_modules/antd/es/theme/themes/shared/genFontMapToken.js");const compact=(token,mapToken)=>{const mergedMapToken=null!=mapToken?mapToken:(0,themes_default.A)(token),fontSize=mergedMapToken.fontSizeSM,controlHeight=mergedMapToken.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},mergedMapToken),function genSizeMapToken(token){const{sizeUnit,sizeStep}=token,compactSizeStep=sizeStep-2;return{sizeXXL:sizeUnit*(compactSizeStep+10),sizeXL:sizeUnit*(compactSizeStep+6),sizeLG:sizeUnit*(compactSizeStep+2),sizeMD:sizeUnit*(compactSizeStep+2),sizeMS:sizeUnit*(compactSizeStep+1),size:sizeUnit*compactSizeStep,sizeSM:sizeUnit*compactSizeStep,sizeXS:sizeUnit*(compactSizeStep-1),sizeXXS:sizeUnit*(compactSizeStep-1)}}(null!=mapToken?mapToken:token)),(0,genFontMapToken.A)(fontSize)),{controlHeight}),(0,genControlHeight.A)(Object.assign(Object.assign({},mergedMapToken),{controlHeight})))};var colors_es=__webpack_require__("../../node_modules/@ant-design/colors/es/index.js"),genColorMapToken=__webpack_require__("../../node_modules/antd/es/theme/themes/shared/genColorMapToken.js"),dist_module=__webpack_require__("../../node_modules/@ctrl/tinycolor/dist/module/index.js");const getAlphaColor=(baseColor,alpha)=>new dist_module.q(baseColor).setAlpha(alpha).toRgbString(),getSolidColor=(baseColor,brightness)=>new dist_module.q(baseColor).lighten(brightness).toHexString(),generateColorPalettes=baseColor=>{const colors=(0,colors_es.cM)(baseColor,{theme:"dark"});return{1:colors[0],2:colors[1],3:colors[2],4:colors[3],5:colors[6],6:colors[5],7:colors[4],8:colors[6],9:colors[5],10:colors[4]}},generateNeutralColorPalettes=(bgBaseColor,textBaseColor)=>{const colorBgBase=bgBaseColor||"#000",colorTextBase=textBaseColor||"#fff";return{colorBgBase,colorTextBase,colorText:getAlphaColor(colorTextBase,.85),colorTextSecondary:getAlphaColor(colorTextBase,.65),colorTextTertiary:getAlphaColor(colorTextBase,.45),colorTextQuaternary:getAlphaColor(colorTextBase,.25),colorFill:getAlphaColor(colorTextBase,.18),colorFillSecondary:getAlphaColor(colorTextBase,.12),colorFillTertiary:getAlphaColor(colorTextBase,.08),colorFillQuaternary:getAlphaColor(colorTextBase,.04),colorBgElevated:getSolidColor(colorBgBase,12),colorBgContainer:getSolidColor(colorBgBase,8),colorBgLayout:getSolidColor(colorBgBase,0),colorBgSpotlight:getSolidColor(colorBgBase,26),colorBgBlur:getAlphaColor(colorTextBase,.04),colorBorder:getSolidColor(colorBgBase,26),colorBorderSecondary:getSolidColor(colorBgBase,19)}},dark=(token,mapToken)=>{const colorPalettes=Object.keys(seed.r).map((colorKey=>{const colors=(0,colors_es.cM)(token[colorKey],{theme:"dark"});return new Array(10).fill(1).reduce(((prev,_,i)=>(prev[`${colorKey}-${i+1}`]=colors[i],prev[`${colorKey}${i+1}`]=colors[i],prev)),{})})).reduce(((prev,cur)=>prev=Object.assign(Object.assign({},prev),cur)),{}),mergedMapToken=null!=mapToken?mapToken:(0,themes_default.A)(token);return Object.assign(Object.assign(Object.assign({},mergedMapToken),colorPalettes),(0,genColorMapToken.A)(token,{generateColorPalettes,generateNeutralColorPalettes}))};const theme={defaultConfig:context.sb,defaultSeed:context.sb.token,useToken:function theme_useToken(){const[theme,token,hashId]=(0,useToken.Ay)();return{theme,token,hashId}},defaultAlgorithm:themes_default.A,darkAlgorithm:dark,compactAlgorithm:compact,getDesignToken:theme_getDesignToken}},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,YT:()=>ELEMENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",ELEMENTS_KEY="elements",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")},"./hooks/use-schema/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>_use_schema__WEBPACK_IMPORTED_MODULE_0__.p});var _use_schema__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./hooks/use-schema/use-schema.ts")}}]);