"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[520],{"./components/props-editor/__stories__/props-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>props_editor_stories});var dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),schema=__webpack_require__("./components/props-editor/__stories__/schema.json"),layout=__webpack_require__("../../node_modules/antd/es/layout/index.js"),sidebar=__webpack_require__("./components/layout/sidebar.tsx"),layoutStyles={maxWidth:sidebar.g};function SidebarDecorator(Story){return react.createElement(layout.A,{style:layoutStyles},react.createElement(sidebar.B,null,react.createElement(Story,null)))}SidebarDecorator.__docgenInfo={description:"",methods:[],displayName:"SidebarDecorator"};var es_form=__webpack_require__("../../node_modules/antd/es/form/index.js"),input=__webpack_require__("../../node_modules/antd/es/input/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function PropsEditor(param){var schema=param.schema,onChange=param.onChange,value=param.value,propertiesNames=function getPropertiesNames(jsonSchema){var schema=JSON.parse(jsonSchema);return Object.keys(schema.properties)}(schema),getChangeHandler=(0,react.useCallback)((function(key){return function(event){var newValue=event.target.value;onChange(_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},value),_define_property({},key,newValue)))}}),[onChange,value]);return react.createElement(es_form.A,{layout:"vertical"},propertiesNames.map((function(propName){return react.createElement(es_form.A.Item,{key:propName,label:react.createElement("span",{"data-testid":"props-editor__label"},propName),"data-testid":"props-editor__item"},react.createElement(input.A,{value:value[propName],"data-testid":"props-editor__input",onChange:getChangeHandler(propName)}))})))}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}PropsEditor.__docgenInfo={description:"",methods:[],displayName:"PropsEditor",props:{schema:{required:!0,tsType:{name:"string"},description:"JSON схема, которая описывает каким должен быть объект"},value:{required:!0,tsType:{name:"T"},description:"Объект со значением по умолчанию"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Функция, которая будет вызвана, когда пропсы поменяются"}}};const props_editor_stories={component:Default,title:"PropsEditor",args:{onChange:(0,dist.fn)(),schema:JSON.stringify(schema,null,2),value:{name:"",surname:""}},decorators:[SidebarDecorator]};function Default(param){var value=param.value,_$schema=param.schema,onChange=param.onChange,_useState=_sliced_to_array((0,react.useState)(value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react.useCallback)((function(newValue){onChange(newValue),setCurrentValue(newValue)}),[onChange]);return react.createElement(PropsEditor,{value:currentValue,schema:_$schema,onChange:changeHandler})}Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default<T extends Record<string, string>>({\n  value,\n  schema,\n  onChange\n}: Props<T>) {\n  const [currentValue, setCurrentValue] = useState(value);\n  const changeHandler = useCallback((newValue: T) => {\n    onChange(newValue);\n    setCurrentValue(newValue);\n  }, [onChange]);\n  return <PropsEditor value={currentValue} schema={schema} onChange={changeHandler} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/antd/es/layout/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>es_layout});var toConsumableArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),omit=__webpack_require__("../../node_modules/rc-util/es/omit.js"),context=__webpack_require__("../../node_modules/antd/es/config-provider/context.js"),layout_context=__webpack_require__("../../node_modules/antd/es/layout/context.js"),toArray=__webpack_require__("../../node_modules/rc-util/es/Children/toArray.js"),Sider=__webpack_require__("../../node_modules/antd/es/layout/Sider.js");var es=__webpack_require__("../../node_modules/@ant-design/cssinjs/es/index.js"),genComponentStyleHook=__webpack_require__("../../node_modules/antd/es/theme/util/genComponentStyleHook.js");const light=token=>{const{componentCls,bodyBg,lightSiderBg,lightTriggerBg,lightTriggerColor}=token;return{[`${componentCls}-sider-light`]:{background:lightSiderBg,[`${componentCls}-sider-trigger`]:{color:lightTriggerColor,background:lightTriggerBg},[`${componentCls}-sider-zero-width-trigger`]:{color:lightTriggerColor,background:lightTriggerBg,border:`1px solid ${bodyBg}`,borderInlineStart:0}}}},genLayoutStyle=token=>{const{antCls,componentCls,colorText,triggerColor,footerBg,triggerBg,headerHeight,headerPadding,headerColor,footerPadding,triggerHeight,zeroTriggerHeight,zeroTriggerWidth,motionDurationMid,motionDurationSlow,fontSize,borderRadius,bodyBg,headerBg,siderBg}=token;return{[componentCls]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:bodyBg,"&, *":{boxSizing:"border-box"},[`&${componentCls}-has-sider`]:{flexDirection:"row",[`> ${componentCls}, > ${componentCls}-content`]:{width:0}},[`${componentCls}-header, &${componentCls}-footer`]:{flex:"0 0 auto"},[`${componentCls}-sider`]:{position:"relative",minWidth:0,background:siderBg,transition:`all ${motionDurationMid}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${antCls}-menu${antCls}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:triggerHeight},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:triggerHeight,color:triggerColor,lineHeight:(0,es.zA)(triggerHeight),textAlign:"center",background:triggerBg,cursor:"pointer",transition:`all ${motionDurationMid}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:headerHeight,insetInlineEnd:token.calc(zeroTriggerWidth).mul(-1).equal(),zIndex:1,width:zeroTriggerWidth,height:zeroTriggerHeight,color:triggerColor,fontSize:token.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:siderBg,borderStartStartRadius:0,borderStartEndRadius:borderRadius,borderEndEndRadius:borderRadius,borderEndStartRadius:0,cursor:"pointer",transition:`background ${motionDurationSlow} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${motionDurationSlow}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:token.calc(zeroTriggerWidth).mul(-1).equal(),borderStartStartRadius:borderRadius,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:borderRadius}}}}},light(token)),{"&-rtl":{direction:"rtl"}}),[`${componentCls}-header`]:{height:headerHeight,padding:headerPadding,color:headerColor,lineHeight:(0,es.zA)(headerHeight),background:headerBg,[`${antCls}-menu`]:{lineHeight:"inherit"}},[`${componentCls}-footer`]:{padding:footerPadding,color:colorText,fontSize,background:footerBg},[`${componentCls}-content`]:{flex:"auto",color:colorText,minHeight:0}}},layout_style=(0,genComponentStyleHook.OF)("Layout",(token=>[genLayoutStyle(token)]),(token=>{const{colorBgLayout,controlHeight,controlHeightLG,colorText,controlHeightSM,marginXXS,colorTextLightSolid,colorBgContainer}=token,paddingInline=1.25*controlHeightLG;return{colorBgHeader:"#001529",colorBgBody:colorBgLayout,colorBgTrigger:"#002140",bodyBg:colorBgLayout,headerBg:"#001529",headerHeight:2*controlHeight,headerPadding:`0 ${paddingInline}px`,headerColor:colorText,footerPadding:`${controlHeightSM}px ${paddingInline}px`,footerBg:colorBgLayout,siderBg:"#001529",triggerHeight:controlHeightLG+2*marginXXS,triggerBg:"#002140",triggerColor:colorTextLightSolid,zeroTriggerWidth:controlHeightLG,zeroTriggerHeight:controlHeightLG,lightSiderBg:colorBgContainer,lightTriggerBg:colorBgContainer,lightTriggerColor:colorText}}),{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]});var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function generator(_ref){let{suffixCls,tagName,displayName}=_ref;return BasicComponent=>react.forwardRef(((props,ref)=>react.createElement(BasicComponent,Object.assign({ref,suffixCls,tagName},props))))}const Basic=react.forwardRef(((props,ref)=>{const{prefixCls:customizePrefixCls,suffixCls,className,tagName:TagName}=props,others=__rest(props,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls}=react.useContext(context.QO),prefixCls=getPrefixCls("layout",customizePrefixCls),[wrapSSR,hashId,cssVarCls]=layout_style(prefixCls),prefixWithSuffixCls=suffixCls?`${prefixCls}-${suffixCls}`:prefixCls;return wrapSSR(react.createElement(TagName,Object.assign({className:classnames_default()(customizePrefixCls||prefixWithSuffixCls,className,hashId,cssVarCls),ref},others)))})),BasicLayout=react.forwardRef(((props,ref)=>{const{direction}=react.useContext(context.QO),[siders,setSiders]=react.useState([]),{prefixCls:customizePrefixCls,className,rootClassName,children,hasSider,tagName:Tag,style}=props,others=__rest(props,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),passedProps=(0,omit.A)(others,["suffixCls"]),{getPrefixCls,layout}=react.useContext(context.QO),prefixCls=getPrefixCls("layout",customizePrefixCls),mergedHasSider=function useHasSider(siders,children,hasSider){return"boolean"==typeof hasSider?hasSider:!!siders.length||(0,toArray.A)(children).some((node=>node.type===Sider.A))}(siders,children,hasSider),[wrapCSSVar,hashId,cssVarCls]=layout_style(prefixCls),classString=classnames_default()(prefixCls,{[`${prefixCls}-has-sider`]:mergedHasSider,[`${prefixCls}-rtl`]:"rtl"===direction},null==layout?void 0:layout.className,className,rootClassName,hashId,cssVarCls),contextValue=react.useMemo((()=>({siderHook:{addSider:id=>{setSiders((prev=>[].concat((0,toConsumableArray.A)(prev),[id])))},removeSider:id=>{setSiders((prev=>prev.filter((currentId=>currentId!==id))))}}})),[]);return wrapCSSVar(react.createElement(layout_context.M.Provider,{value:contextValue},react.createElement(Tag,Object.assign({ref,className:classString,style:Object.assign(Object.assign({},null==layout?void 0:layout.style),style)},passedProps),children)))})),Layout=generator({tagName:"div",displayName:"Layout"})(BasicLayout),Header=generator({suffixCls:"header",tagName:"header",displayName:"Header"})(Basic),Footer=generator({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(Basic),Content=generator({suffixCls:"content",tagName:"main",displayName:"Content"})(Basic),layout_Layout=Layout;layout_Layout.Header=Header,layout_Layout.Footer=Footer,layout_Layout.Content=Content,layout_Layout.Sider=Sider.A,layout_Layout._InternalSiderContext=Sider.P;const es_layout=layout_Layout},"../../node_modules/antd/es/theme/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>theme});var es=__webpack_require__("../../node_modules/@ant-design/cssinjs/es/index.js"),themes_default=__webpack_require__("../../node_modules/antd/es/theme/themes/default/index.js"),seed=__webpack_require__("../../node_modules/antd/es/theme/themes/seed.js"),alias=__webpack_require__("../../node_modules/antd/es/theme/util/alias.js");const theme_getDesignToken=config=>{const theme=(null==config?void 0:config.algorithm)?(0,es.an)(config.algorithm):(0,es.an)(themes_default.A),mergedToken=Object.assign(Object.assign({},seed.A),null==config?void 0:config.token);return(0,es.lO)(mergedToken,{override:null==config?void 0:config.token},theme,alias.A)};var useToken=__webpack_require__("../../node_modules/antd/es/theme/useToken.js"),context=__webpack_require__("../../node_modules/antd/es/theme/context.js"),genControlHeight=__webpack_require__("../../node_modules/antd/es/theme/themes/shared/genControlHeight.js"),genFontMapToken=__webpack_require__("../../node_modules/antd/es/theme/themes/shared/genFontMapToken.js");const compact=(token,mapToken)=>{const mergedMapToken=null!=mapToken?mapToken:(0,themes_default.A)(token),fontSize=mergedMapToken.fontSizeSM,controlHeight=mergedMapToken.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},mergedMapToken),function genSizeMapToken(token){const{sizeUnit,sizeStep}=token,compactSizeStep=sizeStep-2;return{sizeXXL:sizeUnit*(compactSizeStep+10),sizeXL:sizeUnit*(compactSizeStep+6),sizeLG:sizeUnit*(compactSizeStep+2),sizeMD:sizeUnit*(compactSizeStep+2),sizeMS:sizeUnit*(compactSizeStep+1),size:sizeUnit*compactSizeStep,sizeSM:sizeUnit*compactSizeStep,sizeXS:sizeUnit*(compactSizeStep-1),sizeXXS:sizeUnit*(compactSizeStep-1)}}(null!=mapToken?mapToken:token)),(0,genFontMapToken.A)(fontSize)),{controlHeight}),(0,genControlHeight.A)(Object.assign(Object.assign({},mergedMapToken),{controlHeight})))};var colors_es=__webpack_require__("../../node_modules/@ant-design/colors/es/index.js"),genColorMapToken=__webpack_require__("../../node_modules/antd/es/theme/themes/shared/genColorMapToken.js"),dist_module=__webpack_require__("../../node_modules/@ctrl/tinycolor/dist/module/index.js");const getAlphaColor=(baseColor,alpha)=>new dist_module.q(baseColor).setAlpha(alpha).toRgbString(),getSolidColor=(baseColor,brightness)=>new dist_module.q(baseColor).lighten(brightness).toHexString(),generateColorPalettes=baseColor=>{const colors=(0,colors_es.cM)(baseColor,{theme:"dark"});return{1:colors[0],2:colors[1],3:colors[2],4:colors[3],5:colors[6],6:colors[5],7:colors[4],8:colors[6],9:colors[5],10:colors[4]}},generateNeutralColorPalettes=(bgBaseColor,textBaseColor)=>{const colorBgBase=bgBaseColor||"#000",colorTextBase=textBaseColor||"#fff";return{colorBgBase,colorTextBase,colorText:getAlphaColor(colorTextBase,.85),colorTextSecondary:getAlphaColor(colorTextBase,.65),colorTextTertiary:getAlphaColor(colorTextBase,.45),colorTextQuaternary:getAlphaColor(colorTextBase,.25),colorFill:getAlphaColor(colorTextBase,.18),colorFillSecondary:getAlphaColor(colorTextBase,.12),colorFillTertiary:getAlphaColor(colorTextBase,.08),colorFillQuaternary:getAlphaColor(colorTextBase,.04),colorBgElevated:getSolidColor(colorBgBase,12),colorBgContainer:getSolidColor(colorBgBase,8),colorBgLayout:getSolidColor(colorBgBase,0),colorBgSpotlight:getSolidColor(colorBgBase,26),colorBgBlur:getAlphaColor(colorTextBase,.04),colorBorder:getSolidColor(colorBgBase,26),colorBorderSecondary:getSolidColor(colorBgBase,19)}},dark=(token,mapToken)=>{const colorPalettes=Object.keys(seed.r).map((colorKey=>{const colors=(0,colors_es.cM)(token[colorKey],{theme:"dark"});return new Array(10).fill(1).reduce(((prev,_,i)=>(prev[`${colorKey}-${i+1}`]=colors[i],prev[`${colorKey}${i+1}`]=colors[i],prev)),{})})).reduce(((prev,cur)=>prev=Object.assign(Object.assign({},prev),cur)),{}),mergedMapToken=null!=mapToken?mapToken:(0,themes_default.A)(token);return Object.assign(Object.assign(Object.assign({},mergedMapToken),colorPalettes),(0,genColorMapToken.A)(token,{generateColorPalettes,generateNeutralColorPalettes}))};const theme={defaultConfig:context.sb,defaultSeed:context.sb.token,useToken:function theme_useToken(){const[theme,token,hashId]=(0,useToken.Ay)();return{theme,token,hashId}},defaultAlgorithm:themes_default.A,darkAlgorithm:dark,compactAlgorithm:compact,getDesignToken:theme_getDesignToken}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".components-layout-layout-module__root {\n  --header-height: 64px;\n}\n\n.components-layout-layout-module__sidebar {\n  padding: 20px 16px;\n}\n\n.components-layout-layout-module__content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n","",{version:3,sources:["webpack://./components/layout/layout.module.css"],names:[],mappings:"AAAA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;EAC9C,aAAa;AACf",sourcesContent:[".root {\n  --header-height: 64px;\n}\n\n.sidebar {\n  padding: 20px 16px;\n}\n\n.content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"components-layout-layout-module__root",sidebar:"components-layout-layout-module__sidebar",content:"components-layout-layout-module__content"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./components/layout/layout.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.module.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"./components/layout/sidebar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Sidebar,g:()=>SIDEBAR_WIDTH});var antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/antd/es/theme/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/config-provider/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_layout_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/layout/layout.module.css"),SIDEBAR_WIDTH=350;function Sidebar(param){var children=param.children,darkTheme=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{algorithm:antd__WEBPACK_IMPORTED_MODULE_2__.A.darkAlgorithm}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Sider,{theme:"dark",width:SIDEBAR_WIDTH,className:_layout_module_css__WEBPACK_IMPORTED_MODULE_1__.A.sidebar},react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.Ay,{theme:darkTheme},children))}Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar"}},"./components/props-editor/__stories__/schema.json":module=>{module.exports=JSON.parse('{"title":"scheme","description":"Props scheme","type":"object","properties":{"name":{"description":"Your name","type":"string"},"surname":{"description":"Your surname","type":"string"}}}')}}]);