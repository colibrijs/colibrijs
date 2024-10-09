"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[1488],{"./components/content-editor/__stories__/content-editor.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/elements.ts"),_colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../mocks/pages.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/layout/sidebar-decorator.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./components/content-editor/content-editor.tsx").j,title:"ContentEditor",decorators:[_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_3__.u],args:{content:_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.Ou,pageId:_colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_1__.ab.id,onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/content-editor/__stories__/integration-element-add.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AfterIfSelected:()=>AfterIfSelected,AtEndIfNoSelected:()=>AtEndIfNoSelected,ErrorOnAdd:()=>ErrorOnAdd,HiddenByDefault:()=>HiddenByDefault,HidesOnAdded:()=>HidesOnAdded,HidesOnClose:()=>HidesOnClose,VisibleOnClick:()=>VisibleOnClick,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/components.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_content_editor_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/content-editor/__stories__/content-editor.stories.ts"),_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./hooks/use-api/mocked.tsx"),_element_add_test_object__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/element-add/test-object.ts"),_test_object__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/content-editor/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_content_editor_stories__WEBPACK_IMPORTED_MODULE_2__.default),{title:"ContentEditor/tests/integration-element-add"});var _ref,HiddenByDefault={name:"Добавление элемента скрыто по умолчанию",play:_async_to_generator((function(){var elementAdd;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return elementAdd=_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.queryByTestId("content-editor-element-add"),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(elementAdd).toBeNull()];case 1:return _state.sent(),[2]}}))}))},VisibleOnClick={name:'При клике на кнопку "добавить элемент", начинается добавление элемента',play:_async_to_generator((function(){var addElementButton,elementAdd;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return addElementButton=_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.getByTestId("content-editor__add-element-button"),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(addElementButton)];case 1:return _state.sent(),elementAdd=_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.getByTestId("content-editor-element-add"),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(elementAdd).toBeVisible()];case 2:return _state.sent(),[2]}}))}))},HidesOnClose={name:"Когда добавление элемента отменено, интерфейс добавления скрывается",play:(_ref=_async_to_generator((function(param){var step,canvasElement,elementAdd,contentElement;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return step=param.step,canvasElement=param.canvasElement,[4,new _test_object__WEBPACK_IMPORTED_MODULE_5__.S({step,canvasElement}).addElement()];case 1:return _state.sent(),elementAdd=new _element_add_test_object__WEBPACK_IMPORTED_MODULE_4__.D({canvasElement,step,testId:"content-editor-element-add"}),contentElement=elementAdd.getContentElement(),[4,elementAdd.clickClose()];case 2:return _state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fm)(_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(contentElement,"проверяю что элемент скрыт").not.toBeVisible()];case 1:return[2,_state.sent()]}}))})))];case 3:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})},HidesOnAdded={name:"Когда добавляется новый элемент, интерфейс добавления скрывается",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({components:{get:function(){return Promise.resolve([_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF])}},elements:{post:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()}})}))],play:function(){var _ref=_async_to_generator((function(param){var step,canvasElement,contentEditor,elementAdd,contentElement;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return step=param.step,canvasElement=param.canvasElement,contentEditor=new _test_object__WEBPACK_IMPORTED_MODULE_5__.S({step,canvasElement}),elementAdd=new _element_add_test_object__WEBPACK_IMPORTED_MODULE_4__.D({canvasElement,step,testId:"content-editor-element-add"}),[4,contentEditor.addElement()];case 1:return _state.sent(),[4,elementAdd.clickOnComponentsSelect()];case 2:return _state.sent(),[4,elementAdd.selectComponent(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF.id)];case 3:return _state.sent(),[4,elementAdd.clickAdd()];case 4:return _state.sent(),contentElement=elementAdd.getContentElement(),[4,elementAdd.clickClose()];case 5:return _state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fm)(_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(contentElement,"проверяю что элемент скрыт").not.toBeVisible()];case 1:return[2,_state.sent()]}}))})))];case 6:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},ErrorOnAdd={name:"Когда добавляется новый элемент, и происходит ошибка, интерфейс добавления не скрывается",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({components:{get:function(){return Promise.resolve([_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF])}},elements:{post:function(){return Promise.reject(new Error("Ошибка добавления"))}}})}))],play:function(){var _ref=_async_to_generator((function(param){var step,canvasElement,contentEditor,elementAdd;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return step=param.step,canvasElement=param.canvasElement,contentEditor=new _test_object__WEBPACK_IMPORTED_MODULE_5__.S({step,canvasElement}),elementAdd=new _element_add_test_object__WEBPACK_IMPORTED_MODULE_4__.D({canvasElement,step,testId:"content-editor-element-add"}),[4,contentEditor.addElement()];case 1:return _state.sent(),[4,elementAdd.clickOnComponentsSelect()];case 2:return _state.sent(),[4,elementAdd.selectComponent(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.DF.id)];case 3:return _state.sent(),[4,elementAdd.clickAdd()];case 4:return _state.sent(),[4,step("проверяю, что появилось уведомление с текстом ошибки",_async_to_generator((function(){var error;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.findByTestId("component-editor__error")];case 1:return error=_state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toHaveTextContent("Ошибка добавления")];case 2:return _state.sent(),[2]}}))})))];case 5:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},AtEndIfNoSelected={name:"Если ни один из элементов не выбран, новый элемент добавляется в конец дерева"},AfterIfSelected={name:"Если один из элементов выбран, новый элемент добавляется после выбранного"};const __namedExportsOrder=["HiddenByDefault","VisibleOnClick","HidesOnClose","HidesOnAdded","ErrorOnAdd","AtEndIfNoSelected","AfterIfSelected"]},"./components/content-editor/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>ContentEditorTO});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var ContentEditorTO=function(){function ContentEditorTO(options){var _options_testId;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ContentEditorTO),_define_property(this,"canvasElement",void 0),_define_property(this,"step",void 0),_define_property(this,"testId",void 0),this.canvasElement=options.canvasElement,this.step=options.step,this.testId=null!==(_options_testId=options.testId)&&void 0!==_options_testId?_options_testId:"content-editor"}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(ContentEditorTO,[{key:"root",get:function get(){var canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(this.canvasElement);return(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvas.getByTestId(this.testId))}},{key:"getTreeNodeTitle",value:function getTreeNodeTitle(elementId){return this.root.findByTestId("content-editor__".concat(elementId))}},{key:"selectElement",value:function selectElement(elementId){var _this=this;return _async_to_generator((function(){var element;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.getTreeNodeTitle(elementId)];case 1:return element=_state.sent(),[4,_this.step("Кликаю на элемент с id ".concat(elementId),(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(element)}))];case 2:return _state.sent(),[4,_this.step("Жду пока сработает анимация открытия",(function(){return new Promise((function(resolve){return setTimeout(resolve,400)}))}))];case 3:return _state.sent(),[2]}}))}))()}},{key:"addElement",value:function addElement(){var _this=this;return _async_to_generator((function(){var addElementButton;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return addElementButton=_this.root.getByTestId("content-editor__add-element-button"),[4,_this.step('Кликаю на кнопку "Добавить элемент"',(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(addElementButton)}))];case 1:return _state.sent(),[2]}}))}))()}},{key:"getEditorDrawerElement",value:function getEditorDrawerElement(){return this.findElement("element-editor-drawer",_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj)}},{key:"getEditorDrawerTitle",value:function getEditorDrawerTitle(){return this.findElement("element-editor-drawer__title",_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj)}},{key:"findElement",value:function findElement(testId){var root=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root,timeout=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,_this=this;return _async_to_generator((function(){var element;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return(element=root.queryByTestId(testId))||timeout<=0?[2,element]:[4,new Promise((function(resolve){return setTimeout(resolve,50)}))];case 1:return _state.sent(),[2,_this.findElement(testId,root,timeout-50)]}}))}))()}}]),ContentEditorTO}()},"./components/layout/sidebar-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>SidebarDecorator});var antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),_sidebar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/layout/sidebar.tsx"),layoutStyles={maxWidth:_sidebar__WEBPACK_IMPORTED_MODULE_0__.g,height:"100vh"};function SidebarDecorator(Story){return React.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.A,{style:layoutStyles},React.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_0__.B,null,React.createElement(Story,null)))}SidebarDecorator.__docgenInfo={description:"",methods:[],displayName:"SidebarDecorator"}}}]);