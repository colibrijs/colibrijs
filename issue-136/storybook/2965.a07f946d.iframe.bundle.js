"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[2965],{"./components/element-editor/element-editor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>ElementEditor});var CheckOutlined=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/CheckOutlined.js"),QueryClientProvider=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),useMutation=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),theme=__webpack_require__("../../node_modules/antd/es/theme/index.js"),message=__webpack_require__("../../node_modules/antd/es/message/index.js"),config_provider=__webpack_require__("../../node_modules/antd/es/config-provider/index.js"),drawer=__webpack_require__("../../node_modules/antd/es/drawer/index.js"),space=__webpack_require__("../../node_modules/antd/es/space/index.js"),es_button=__webpack_require__("../../node_modules/antd/es/button/index.js"),skeleton=__webpack_require__("../../node_modules/antd/es/skeleton/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),use_api=__webpack_require__("./hooks/use-api/index.ts"),use_schema=__webpack_require__("./hooks/use-schema/index.ts"),element_remove=__webpack_require__("./components/element-remove/element-remove.tsx"),props_editor=__webpack_require__("./components/props-editor/props-editor.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ElementEditor(param){var element=param.element,onRemove=param.onRemove,onEdit=param.onEdit,open=param.open,onClose=param.onClose,api=(0,use_api.gf)(),queryClient=(0,QueryClientProvider.jE)(),darkTheme=(0,react.useMemo)((function(){return{algorithm:theme.A.darkAlgorithm}}),[]),_useState=_sliced_to_array((0,react.useState)(JSON.stringify(element.props)),2),lastSavedProps=_useState[0],setLastSavedProps=_useState[1],showSaveButton=(0,react.useMemo)((function(){return lastSavedProps!==JSON.stringify(element.props)}),[element.props,lastSavedProps]),_useSchema=(0,use_schema.p)(element.component),schema=_useSchema.data,isLoading=_useSchema.isLoading,isSuccess=_useSchema.isSuccess,_useMutation=(0,useMutation.n)({mutationFn:function(){return api.elements.patch(element.id,element.props)},onSuccess:function(){queryClient.invalidateQueries({queryKey:[use_api.YT]}),message.Ay.success(React.createElement("span",{"data-testid":"element-editor__success"},"Элемент “",element.component.name,"” успешно обновлен")),setLastSavedProps(JSON.stringify(element.props))},onError:function(error){message.Ay.error(React.createElement("span",{"data-testid":"element-editor__error"},error.message))}}),saveChanges=_useMutation.mutate,isPending=_useMutation.isPending,onClick=(0,react.useCallback)((function(){return saveChanges()}),[saveChanges]);return React.createElement(config_provider.Ay,{theme:darkTheme},React.createElement(drawer.A,{"aria-label":"Редактирование элемента",open,mask:!1,title:React.createElement("span",{"data-testid":"element-editor__title"},element.component.name),extra:React.createElement(space.A,null,showSaveButton&&React.createElement(es_button.Ay,{loading:isPending,icon:React.createElement(CheckOutlined.A,null),htmlType:"button","data-testid":"element-editor__save",shape:"circle",onClick}),React.createElement(element_remove.h,{onRemove,element})),onClose},React.createElement(skeleton.A,{loading:isLoading},isSuccess&&React.createElement(props_editor.S,{schema,onChange:onEdit,value:element.props}))))}ElementEditor.__docgenInfo={description:"",methods:[],displayName:"ElementEditor",props:{element:{required:!0,tsType:{name:"IElement"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEdit:{required:!0,tsType:{name:"signature",type:"function",raw:"(newProps: object) => void",signature:{arguments:[{type:{name:"object"},name:"newProps"}],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./components/element-editor/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ElementEditorTO});var dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),test_object=__webpack_require__("./components/element-remove/test-object.ts"),prop_editor_test_object=__webpack_require__("./components/prop-editor/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var PropsEditorTO=function(){function PropsEditorTO(param){var canvasElement=param.canvasElement,step=param.step,testId=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"props-editor";!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PropsEditorTO),_define_property(this,"canvasElement",void 0),_define_property(this,"step",void 0),_define_property(this,"testId",void 0),this.step=step,this.canvasElement=canvasElement,this.testId=testId}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PropsEditorTO,[{key:"editorElement",get:function get(){return(0,dist.ux)(this.canvasElement).getByTestId(this.testId)}},{key:"getValue",value:function getValue(propertyName){return new prop_editor_test_object.U({canvasElement:this.editorElement,step:this.step},"props-editor__".concat(propertyName)).getValue()}},{key:"fill",value:function fill(propertyName,value){var _this=this;return function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,new prop_editor_test_object.U({canvasElement:_this.editorElement,step:_this.step},"props-editor__".concat(propertyName)).setValue(value)];case 1:return _state.sent(),[2]}}))}))()}}]),PropsEditorTO}();function test_object_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function test_object_async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){test_object_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){test_object_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function test_object_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function test_object_ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var ElementEditorTO=function(){function ElementEditorTO(param){var step=param.step;!function test_object_class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ElementEditorTO),function test_object_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(this,"step",void 0),this.step=step}return function test_object_create_class(Constructor,protoProps,staticProps){return protoProps&&test_object_defineProperties(Constructor.prototype,protoProps),staticProps&&test_object_defineProperties(Constructor,staticProps),Constructor}(ElementEditorTO,[{key:"getPropsEditorTO",value:function getPropsEditorTO(){var _this=this;return test_object_async_to_generator((function(){return test_object_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step("Жду появления редактора пропсов",test_object_async_to_generator((function(){return test_object_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(0,dist.fm)((function(){return(0,dist.E3)(dist.nj.getByTestId("props-editor")).toBeVisible()}))];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2,new PropsEditorTO({canvasElement:dist.nj.getByLabelText("Редактирование элемента"),step:_this.step})]}}))}))()}},{key:"getElementRemoveTO",value:function getElementRemoveTO(){return new test_object.c({canvasElement:dist.nj.getByLabelText("Редактирование элемента"),step:this.step})}},{key:"isSaveButtonVisible",value:function isSaveButtonVisible(){var saveButton=dist.nj.queryByTestId("element-editor__save");return Boolean(saveButton)}},{key:"getTitle",value:function getTitle(){return test_object_async_to_generator((function(){return test_object_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,dist.nj.findByTestId("element-editor__title")];case 1:return[2,_state.sent().textContent]}}))}))()}},{key:"getErrorMessage",value:function getErrorMessage(){return dist.nj.getByTestId("element-editor__error").textContent}},{key:"clickClose",value:function clickClose(){var _this=this;return test_object_async_to_generator((function(){return test_object_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step('Кликаю на кнопку "Закрыть"',test_object_async_to_generator((function(){return test_object_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,dist.Q4.click(dist.nj.getByLabelText("Close"))];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"clickSave",value:function clickSave(){var _this=this;return test_object_async_to_generator((function(){return test_object_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step('Кликаю на кнопку "сохранить"',test_object_async_to_generator((function(){return test_object_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,dist.Q4.click(dist.nj.getByTestId("element-editor__save"))];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"isOpened",value:function isOpened(){return test_object_async_to_generator((function(){var dialog;return test_object_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,new Promise((function(resolve){return setTimeout(resolve,1e3)}))];case 1:return _state.sent(),dialog=dist.nj.queryByLabelText("Редактирование элемента"),[2,Boolean(dialog)]}}))}))()}}]),ElementEditorTO}()},"./components/element-remove/element-remove.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ElementRemove});var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/DeleteOutlined.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/popconfirm/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/antd/es/tooltip/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts");function ElementRemove(param){var element=param.element,onRemove=param.onRemove,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),queryClient=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.jE)(),_useMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.n)({mutationFn:function(){return api.elements.delete(element.id)},onSuccess:function(){queryClient.invalidateQueries({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.YT]}),antd__WEBPACK_IMPORTED_MODULE_4__.Ay.success(React.createElement("span",{"data-testid":"element-remove__success"},"Элемент “",element.component.name,"” успешно удален")),onRemove()},onError:function(error){antd__WEBPACK_IMPORTED_MODULE_4__.Ay.error(React.createElement("span",{"data-testid":"element-remove__error"},error.message))}}),deleteElement=_useMutation.mutate,isPending=_useMutation.isPending,confirmHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){deleteElement()}),[deleteElement]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Удалить элемент?",description:"Элемент “".concat(element.component.name,"” будет удален с концами"),okText:React.createElement("span",{"data-testid":"element-remove__confirm"},"Да"),cancelText:"Галя, отмена",onConfirm:confirmHandler},React.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.A,{title:"Удалить"},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{loading:isPending,icon:React.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.A,null),htmlType:"button","data-testid":"element-remove",shape:"circle",danger:!0,ghost:!0})))}ElementRemove.__docgenInfo={description:"",methods:[],displayName:"ElementRemove",props:{element:{required:!0,tsType:{name:"IElement"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./components/element-remove/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ElementRemoveTO});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var ElementRemoveTO=function(){function ElementRemoveTO(options){var _options_testId;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ElementRemoveTO),_define_property(this,"canvasElement",void 0),_define_property(this,"step",void 0),_define_property(this,"testId",void 0),this.canvasElement=options.canvasElement,this.step=options.step,this.testId=null!==(_options_testId=options.testId)&&void 0!==_options_testId?_options_testId:"element-remove"}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(ElementRemoveTO,[{key:"isConfirmationVisible",value:function isConfirmationVisible(){var _this=this;return _async_to_generator((function(){var element;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,new Promise((function(resolve){return setTimeout(resolve,1e3)}))];case 1:return _state.sent(),element=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(_this.canvasElement).queryByTestId("element-remove__confirm"),[2,Boolean(element)]}}))}))()}},{key:"clickRemove",value:function clickRemove(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step('Кликаю на кнопку "Удалить"',(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click((0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(_this.canvasElement).getByTestId(_this.testId))}))];case 1:return _state.sent(),[2]}}))}))()}},{key:"confirm",value:function confirm(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step("Подтверждаю удаление",_async_to_generator((function(){var confirm;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.findByTestId("element-remove__confirm")];case 1:return confirm=_state.sent(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(confirm)];case 2:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"getErrorMessage",value:function getErrorMessage(){return _storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.findByTestId("element-remove__error")}},{key:"getSuccessMessage",value:function getSuccessMessage(){return _storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.findByTestId("element-remove__success")}}]),ElementRemoveTO}()},"./components/prop-editor/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>PropEditorTO});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var PropEditorTO=function(){function PropEditorTO(param,testId){var canvasElement=param.canvasElement,step=param.step;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PropEditorTO),_define_property(this,"editorElement",void 0),_define_property(this,"component",void 0),_define_property(this,"testId",void 0),_define_property(this,"step",void 0),this.step=step,this.editorElement=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getByTestId(testId),this.component=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(this.editorElement),this.testId=testId}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PropEditorTO,[{key:"getPropertyName",value:function getPropertyName(){return this.component.getByTestId("".concat(this.testId,"__label"))}},{key:"getPropertyDescription",value:function getPropertyDescription(){return this.component.getByTestId("prop-editor__description")}},{key:"getInput",value:function getInput(){return this.component.getByTestId("prop-editor__input")}},{key:"getSwitcher",value:function getSwitcher(){return this.component.getByTestId("prop-editor__switcher")}},{key:"toggleSwitcher",value:function toggleSwitcher(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step("Переключаю свитчер",_async_to_generator((function(){var switcher;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return switcher=_this.getSwitcher(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"getValue",value:function getValue(){return"boolean"===this.editorElement.dataset.type?"true"===this.getSwitcher().ariaChecked:this.getInput().value}},{key:"setValue",value:function setValue(value){var _this=this;return _async_to_generator((function(){var switcher;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return"boolean"!==_this.editorElement.dataset.type?[3,5]:(switcher=_this.getSwitcher(),!0!==value||"false"!==switcher.ariaChecked?[3,2]:[4,_this.step("Привожу свитчер в чекнутое состояние",_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 1:return _state.sent(),[2]}}))})))]);case 1:_state.sent(),_state.label=2;case 2:return!1!==value||"true"!==switcher.ariaChecked?[3,4]:[4,_this.step("Привожу свитчер в нечекнутое состояние",_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 1:return _state.sent(),[2]}}))})))];case 3:_state.sent(),_state.label=4;case 4:return[3,7];case 5:return[4,_this.step("Ввожу значение в инпут",_async_to_generator((function(){var input;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return input=_this.getInput(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.clear(input)];case 1:return _state.sent(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(input,value)];case 2:return _state.sent(),[2]}}))})))];case 6:_state.sent(),_state.label=7;case 7:return[2]}}))}))()}}]),PropEditorTO}()},"./components/props-editor/props-editor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>PropsEditor});var _colibrijs_schema__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../schema/utils/get-properties-names.ts"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/form/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_prop_editor_prop_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/prop-editor/prop-editor.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function PropsEditor(param){var schema=param.schema,onChange=param.onChange,value=param.value,propertiesNames=(0,_colibrijs_schema__WEBPACK_IMPORTED_MODULE_2__.U)(schema),changeHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(key){return function(newValue){onChange(_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},value),_define_property({},key,newValue)))}}),[onChange,value]),getValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(propName){return value[propName]}),[value]),getProperty=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(propName){return schema.properties[propName]}),[schema.properties]);return React.createElement("div",{"data-testid":"props-editor"},React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A,{layout:"vertical"},propertiesNames.map((function(propName){return React.createElement(_prop_editor_prop_editor__WEBPACK_IMPORTED_MODULE_1__.v,{property:getProperty(propName),key:propName.toString(),name:propName.toString(),value:getValue(propName),testId:"props-editor__".concat(propName.toString()),onChange:changeHandler(propName)})}))))}PropsEditor.__docgenInfo={description:"",methods:[],displayName:"PropsEditor",props:{schema:{required:!0,tsType:{name:"intersection",raw:"ObjectProperty<T> & {\n  $schema: string;\n  $id: string;\n  title: string;\n}",elements:[{name:"signature",type:"object",raw:"{\n  type: 'object';\n  description?: string;\n  properties: {\n    // eslint-disable-next-line no-use-before-define -- по-другому никак\n    [K in keyof T]: Property<T[K]>;\n  };\n}",signature:{properties:[{key:"type",value:{name:"literal",value:"'object'",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"properties",value:{name:"signature",type:"object",raw:"{\n  // eslint-disable-next-line no-use-before-define -- по-другому никак\n  [K in keyof T]: Property<T[K]>;\n}",signature:{properties:[{key:{name:"T",required:!0},value:{name:"unknown"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{\n  $schema: string;\n  $id: string;\n  title: string;\n}",signature:{properties:[{key:"$schema",value:{name:"string",required:!0}},{key:"$id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}}]}}]},description:"JSON схема, которая описывает каким должен быть объект"},value:{required:!0,tsType:{name:"T"},description:"Объект со значением по умолчанию"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Функция, которая будет вызвана, когда пропсы поменяются"}}}}}]);