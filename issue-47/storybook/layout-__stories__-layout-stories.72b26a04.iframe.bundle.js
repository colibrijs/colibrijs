"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[436],{"./components/layout/__stories__/layout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Sidebar:()=>Sidebar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>layout_stories});var typography=__webpack_require__("../../node_modules/antd/es/typography/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),layout=__webpack_require__("../../node_modules/antd/es/layout/index.js"),menu=__webpack_require__("../../node_modules/antd/es/menu/index.js"),layout_styles=__webpack_require__("./components/layout/layout.styles.css"),layout_sidebar=__webpack_require__("./components/layout/sidebar.tsx");function Layout(param){var children=param.children,sidebar=param.sidebar,hasSidebar=(0,react.useMemo)((function(){return Boolean(sidebar)}),[sidebar]),menuItems=(0,react.useMemo)((function(){return[{key:"components",label:react.createElement("a",{href:"/components/"},"Компоненты")}]}),[]);return react.createElement(layout.A,{className:layout_styles.A.root},react.createElement(layout.A.Header,null,react.createElement(menu.A,{items:menuItems,mode:"horizontal",theme:"dark"})),react.createElement(layout.A,{hasSider:hasSidebar},hasSidebar&&react.createElement(layout_sidebar.B,null,sidebar),react.createElement(layout.A.Content,{className:layout_styles.A.content},children)))}Layout.__docgenInfo={description:"",methods:[],displayName:"Layout"};const layout_stories={component:Layout,title:"Layout",args:{children:react.createElement(typography.A.Text,null,"Некий контент")}};var Default={},Sidebar={args:{sidebar:react.createElement(typography.A.Text,null,"Сайдбар")}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Sidebar.parameters={...Sidebar.parameters,docs:{...Sidebar.parameters?.docs,source:{originalSource:"{\n  args: {\n    sidebar: <Typography.Text>Сайдбар</Typography.Text>\n  }\n}",...Sidebar.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Sidebar"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.styles.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.components-layout-layout-styles__root {\n  --header-height: 64px;\n}\n\n.components-layout-layout-styles__sidebar {\n  padding: 20px 16px;\n}\n\n.components-layout-layout-styles__content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n","",{version:3,sources:["webpack://./components/layout/layout.styles.css"],names:[],mappings:"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;EAC9C,aAAa;AACf",sourcesContent:["* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.root {\n  --header-height: 64px;\n}\n\n.sidebar {\n  padding: 20px 16px;\n}\n\n.content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"components-layout-layout-styles__root",sidebar:"components-layout-layout-styles__sidebar",content:"components-layout-layout-styles__content"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./components/layout/layout.styles.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_styles_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.styles.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_styles_css__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_styles_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_styles_css__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_styles_css__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"./components/layout/sidebar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Sidebar,g:()=>SIDEBAR_WIDTH});var antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/antd/es/theme/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/config-provider/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_layout_styles_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/layout/layout.styles.css"),SIDEBAR_WIDTH=350;function Sidebar(param){var children=param.children,darkTheme=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{algorithm:antd__WEBPACK_IMPORTED_MODULE_2__.A.darkAlgorithm}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Sider,{theme:"dark",width:SIDEBAR_WIDTH,className:_layout_styles_css__WEBPACK_IMPORTED_MODULE_1__.A.sidebar},react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.Ay,{theme:darkTheme},children))}Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar"}}}]);