"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[7344],{"../../node_modules/@ant-design/icons/es/icons/CheckOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_CheckOutlined});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_CheckOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),CheckOutlined_CheckOutlined=function CheckOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_CheckOutlined}))};const icons_CheckOutlined=react.forwardRef(CheckOutlined_CheckOutlined)},"./components/page-title/__stories__/page-title.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>page_title_stories});var pages=__webpack_require__("../mocks/pages.ts"),flex=__webpack_require__("../../node_modules/antd/es/flex/index.js"),typography=__webpack_require__("../../node_modules/antd/es/typography/index.js"),page_remove=__webpack_require__("./components/page-remove/page-remove.tsx");function PageTitle(param){var page=param.page;return React.createElement(flex.A,{align:"baseline",justify:"space-between","data-testid":"page-title"},React.createElement(typography.A.Title,{level:1,"data-testid":"page-title__name"},page.name),React.createElement(page_remove.Q,{page}))}PageTitle.__docgenInfo={description:"",methods:[],displayName:"PageTitle",props:{page:{required:!0,tsType:{name:"IPage"},description:""}}};const page_title_stories={component:PageTitle,title:"PageTitle",args:{page:pages.ab},parameters:{screenshots:[{src:"./screenshot.png",alt:"First Screenshot"}]}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/antd/es/_util/gapSize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isPresetSize(size){return["small","middle","large"].includes(size)}function isValidGapNumber(size){return!!size&&("number"==typeof size&&!Number.isNaN(size))}__webpack_require__.d(__webpack_exports__,{X:()=>isPresetSize,m:()=>isValidGapNumber})},"../../node_modules/antd/es/flex/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>flex});var react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),omit=__webpack_require__("../../node_modules/rc-util/es/omit.js"),gapSize=__webpack_require__("../../node_modules/antd/es/_util/gapSize.js"),context=__webpack_require__("../../node_modules/antd/es/config-provider/context.js"),genComponentStyleHook=__webpack_require__("../../node_modules/antd/es/theme/util/genComponentStyleHook.js"),statistic=__webpack_require__("../../node_modules/antd/es/theme/util/statistic.js");const flexWrapValues=["wrap","nowrap","wrap-reverse"],justifyContentValues=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],alignItemsValues=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];const utils=function createFlexClassNames(prefixCls,props){return classnames_default()(Object.assign(Object.assign(Object.assign({},((prefixCls,props)=>{const wrap=!0===props.wrap?"wrap":props.wrap;return{[`${prefixCls}-wrap-${wrap}`]:wrap&&flexWrapValues.includes(wrap)}})(prefixCls,props)),((prefixCls,props)=>{const alignCls={};return alignItemsValues.forEach((cssKey=>{alignCls[`${prefixCls}-align-${cssKey}`]=props.align===cssKey})),alignCls[`${prefixCls}-align-stretch`]=!props.align&&!!props.vertical,alignCls})(prefixCls,props)),((prefixCls,props)=>{const justifyCls={};return justifyContentValues.forEach((cssKey=>{justifyCls[`${prefixCls}-justify-${cssKey}`]=props.justify===cssKey})),justifyCls})(prefixCls,props)))},genFlexStyle=token=>{const{componentCls}=token;return{[componentCls]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},genFlexGapStyle=token=>{const{componentCls}=token;return{[componentCls]:{"&-gap-small":{gap:token.flexGapSM},"&-gap-middle":{gap:token.flexGap},"&-gap-large":{gap:token.flexGapLG}}}},genFlexWrapStyle=token=>{const{componentCls}=token,wrapStyle={};return flexWrapValues.forEach((value=>{wrapStyle[`${componentCls}-wrap-${value}`]={flexWrap:value}})),wrapStyle},genAlignItemsStyle=token=>{const{componentCls}=token,alignStyle={};return alignItemsValues.forEach((value=>{alignStyle[`${componentCls}-align-${value}`]={alignItems:value}})),alignStyle},genJustifyContentStyle=token=>{const{componentCls}=token,justifyStyle={};return justifyContentValues.forEach((value=>{justifyStyle[`${componentCls}-justify-${value}`]={justifyContent:value}})),justifyStyle},flex_style=(0,genComponentStyleHook.OF)("Flex",(token=>{const{paddingXS,padding,paddingLG}=token,flexToken=(0,statistic.h1)(token,{flexGapSM:paddingXS,flexGap:padding,flexGapLG:paddingLG});return[genFlexStyle(flexToken),genFlexGapStyle(flexToken),genFlexWrapStyle(flexToken),genAlignItemsStyle(flexToken),genJustifyContentStyle(flexToken)]}),(()=>({})),{resetStyle:!1});var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Flex=react.forwardRef(((props,ref)=>{const{prefixCls:customizePrefixCls,rootClassName,className,style,flex,gap,children,vertical=!1,component:Component="div"}=props,othersProps=__rest(props,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:ctxFlex,direction:ctxDirection,getPrefixCls}=react.useContext(context.QO),prefixCls=getPrefixCls("flex",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=flex_style(prefixCls),mergedVertical=null!=vertical?vertical:null==ctxFlex?void 0:ctxFlex.vertical,mergedCls=classnames_default()(className,rootClassName,null==ctxFlex?void 0:ctxFlex.className,prefixCls,hashId,cssVarCls,utils(prefixCls,props),{[`${prefixCls}-rtl`]:"rtl"===ctxDirection,[`${prefixCls}-gap-${gap}`]:(0,gapSize.X)(gap),[`${prefixCls}-vertical`]:mergedVertical}),mergedStyle=Object.assign(Object.assign({},null==ctxFlex?void 0:ctxFlex.style),style);return flex&&(mergedStyle.flex=flex),gap&&!(0,gapSize.X)(gap)&&(mergedStyle.gap=gap),wrapCSSVar(react.createElement(Component,Object.assign({ref,className:mergedCls,style:mergedStyle},(0,omit.A)(othersProps,["justify","wrap","align"])),children))}));const flex=Flex},"./components/page-remove/page-remove.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>PageRemove});var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/DeleteOutlined.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/popconfirm/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/antd/es/tooltip/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts");function PageRemove(param){var page=param.page,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),queryClient=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.jE)(),_useMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.n)({mutationFn:function(){return api.pages.delete(page.id)},onError:function(error){return antd__WEBPACK_IMPORTED_MODULE_4__.Ay.error(React.createElement("span",{"data-testid":"page-remove__error"},error.message))},onSuccess:function(){queryClient.invalidateQueries({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.PE]}),antd__WEBPACK_IMPORTED_MODULE_4__.Ay.success(React.createElement("span",{"data-testid":"page-remove__success"},"Страница “",page.name,"” (",page.route,") успешно удалена"))}}),deletePage=_useMutation.mutate,isPending=_useMutation.isPending,confirmHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){deletePage()}),[deletePage]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Удалить страницу?",description:"Страница “".concat(page.name,"” (").concat(page.route,") будет удалена с концами"),okText:React.createElement("span",{"data-testid":"page-remove__confirm"},"Да"),cancelText:"Галя, отмена",onConfirm:confirmHandler},React.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.A,{title:"Удалить"},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{loading:isPending,icon:React.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.A,null),htmlType:"button","data-testid":"page-remove",shape:"circle",danger:!0,ghost:!0})))}PageRemove.__docgenInfo={description:"",methods:[],displayName:"PageRemove",props:{page:{required:!0,tsType:{name:"IPage"},description:""}}}},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,YT:()=>ELEMENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",ELEMENTS_KEY="elements",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")}}]);