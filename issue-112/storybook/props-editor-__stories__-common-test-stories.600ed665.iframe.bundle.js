"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[8196,6520],{"./components/props-editor/__stories__/common.test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangeEvent:()=>ChangeEvent,DefaultValues:()=>DefaultValues,Description:()=>Description,LabelFields:()=>LabelFields,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_props_editor_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/props-editor/__stories__/props-editor.stories.tsx"),_schema__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/props-editor/__stories__/schema.ts"),_prop_editor_test_object__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/prop-editor/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_props_editor_stories__WEBPACK_IMPORTED_MODULE_1__.default),{title:"PropsEditor/tests/common"});var _ref,ChangeEvent={name:"При изменении поля, происходит вызов onChange с введенными данными",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),schema:_schema__WEBPACK_IMPORTED_MODULE_2__.w,value:{name:"",age:229}},play:(_ref=_async_to_generator((function(param){var args,canvasElement,step,nameEditorTO,nameInput;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return args=param.args,canvasElement=param.canvasElement,step=param.step,nameEditorTO=new _prop_editor_test_object__WEBPACK_IMPORTED_MODULE_3__.U({canvasElement,step},"props-editor__name"),nameInput=nameEditorTO.getInput(),[4,step('Вводим слово "Кек" в первый инпут',_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(nameInput,"Кек")];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[4,step("Проверем, что пропс onChange был вызван с введенными данными",_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(args.onChange).toHaveBeenCalledWith({name:"Кек",age:229})];case 1:return _state.sent(),[2]}}))})))];case 2:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})},LabelFields={name:"При передаче схемы, отрисовываются поля с лейблами из JSON-схемы",play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,nameEditorTO,ageEditorTO,isBaldEditorTO;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,nameEditorTO=new _prop_editor_test_object__WEBPACK_IMPORTED_MODULE_3__.U({canvasElement,step},"props-editor__name"),ageEditorTO=new _prop_editor_test_object__WEBPACK_IMPORTED_MODULE_3__.U({canvasElement,step},"props-editor__age"),isBaldEditorTO=new _prop_editor_test_object__WEBPACK_IMPORTED_MODULE_3__.U({canvasElement,step},"props-editor__isBald"),[4,step("Ищем все поля и убеждаемся что лейблы соответствуют тем, что в схеме",(function(){var nameLabel=nameEditorTO.getPropertyName(),ageLabel=ageEditorTO.getPropertyName(),isBaldLabel=isBaldEditorTO.getPropertyName();(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(nameLabel).toHaveTextContent("name"),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(ageLabel).toHaveTextContent("age"),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(isBaldLabel).toHaveTextContent("isBald")}))];case 1:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},DefaultValues={name:"По умолчанию отображаются значения из value",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),schema:_schema__WEBPACK_IMPORTED_MODULE_2__.w,value:{name:"Ivan",age:227}},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,nameEditorTO,ageEditorTO;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,nameEditorTO=new _prop_editor_test_object__WEBPACK_IMPORTED_MODULE_3__.U({canvasElement,step},"props-editor__name"),ageEditorTO=new _prop_editor_test_object__WEBPACK_IMPORTED_MODULE_3__.U({canvasElement,step},"props-editor__age"),[4,step("Ищем все поля и убеждаемся что значения соответствуют тем, что в пропсе",(function(){var nameInput=nameEditorTO.getInput(),ageInput=ageEditorTO.getInput();(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(nameInput).toHaveValue("Ivan"),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(ageInput).toHaveValue(227)}))];case 1:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},Description={name:"При передаче схемы, отрисовываются поля с описанием свойства из JSON-схемы",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),schema:_schema__WEBPACK_IMPORTED_MODULE_2__.w,value:{name:"Ivan",age:1488}},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,nameEditorTO,ageEditorTO;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,nameEditorTO=new _prop_editor_test_object__WEBPACK_IMPORTED_MODULE_3__.U({canvasElement,step},"props-editor__name"),ageEditorTO=new _prop_editor_test_object__WEBPACK_IMPORTED_MODULE_3__.U({canvasElement,step},"props-editor__age"),[4,step("Ищем все поля и убеждаемся описание соответствуют тем, что в схеме",(function(){var nameDescription=nameEditorTO.getPropertyDescription(),ageDescription=ageEditorTO.getPropertyDescription();(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(nameDescription).toHaveTextContent("Your name"),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(ageDescription).toHaveTextContent("Your age")}))];case 1:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["ChangeEvent","LabelFields","DefaultValues","Description"]},"./components/props-editor/__stories__/props-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>props_editor_stories});var dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),schema=__webpack_require__("./components/props-editor/__stories__/schema.ts"),sidebar_decorator=__webpack_require__("./components/layout/sidebar-decorator.tsx"),get_properties_names=__webpack_require__("../schema/utils/get-properties-names.ts"),es_form=__webpack_require__("../../node_modules/antd/es/form/index.js"),prop_editor=__webpack_require__("./components/prop-editor/prop-editor.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function PropsEditor(param){var schema=param.schema,onChange=param.onChange,value=param.value,propertiesNames=(0,get_properties_names.U)(schema),changeHandler=(0,react.useCallback)((function(key){return function(newValue){onChange(_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},value),_define_property({},key,newValue)))}}),[onChange,value]),getValue=(0,react.useCallback)((function(propName){return value[propName]}),[value]),getProperty=(0,react.useCallback)((function(propName){return schema.properties[propName]}),[schema.properties]);return React.createElement(es_form.A,{layout:"vertical"},propertiesNames.map((function(propName){return React.createElement(prop_editor.v,{property:getProperty(propName),key:propName.toString(),name:propName.toString(),value:getValue(propName),testId:"props-editor__".concat(propName.toString()),onChange:changeHandler(propName)})})))}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}PropsEditor.__docgenInfo={description:"",methods:[],displayName:"PropsEditor",props:{schema:{required:!0,tsType:{name:"intersection",raw:"ObjectProperty<T> & {\n  $schema: string;\n  $id: string;\n  title: string;\n}",elements:[{name:"signature",type:"object",raw:"{\n  type: 'object';\n  description?: string;\n  properties: {\n    // eslint-disable-next-line no-use-before-define -- по-другому никак\n    [K in keyof T]: Property<T[K]>;\n  };\n}",signature:{properties:[{key:"type",value:{name:"literal",value:"'object'",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"properties",value:{name:"signature",type:"object",raw:"{\n  // eslint-disable-next-line no-use-before-define -- по-другому никак\n  [K in keyof T]: Property<T[K]>;\n}",signature:{properties:[{key:{name:"T",required:!0},value:{name:"unknown"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{\n  $schema: string;\n  $id: string;\n  title: string;\n}",signature:{properties:[{key:"$schema",value:{name:"string",required:!0}},{key:"$id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}}]}}]},description:"JSON схема, которая описывает каким должен быть объект"},value:{required:!0,tsType:{name:"T"},description:"Объект со значением по умолчанию"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Функция, которая будет вызвана, когда пропсы поменяются"}}};const props_editor_stories={component:Default,title:"PropsEditor",args:{onChange:(0,dist.fn)(),schema:schema.w,value:{name:"Kekich",age:228,isBald:!0}},decorators:[sidebar_decorator.u]};function Default(param){var value=param.value,_$schema=param.schema,onChange=param.onChange,_useState=_sliced_to_array((0,react.useState)(value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react.useCallback)((function(newValue){onChange(newValue),setCurrentValue(newValue)}),[onChange]);return React.createElement(PropsEditor,{value:currentValue,schema:_$schema,onChange:changeHandler})}Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default<T extends object>({\n  value,\n  schema,\n  onChange\n}: Props<T>) {\n  const [currentValue, setCurrentValue] = useState(value);\n  const changeHandler = useCallback((newValue: T) => {\n    onChange(newValue);\n    setCurrentValue(newValue);\n  }, [onChange]);\n  return <PropsEditor value={currentValue} schema={schema} onChange={changeHandler} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/prop-editor/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>PropEditorTO});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var PropEditorTO=function(){function PropEditorTO(param,testId){var canvasElement=param.canvasElement,step=param.step;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PropEditorTO),_define_property(this,"editorElement",void 0),_define_property(this,"component",void 0),_define_property(this,"testId",void 0),_define_property(this,"step",void 0),this.step=step,this.editorElement=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getByTestId(testId),this.component=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(this.editorElement),this.testId=testId}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PropEditorTO,[{key:"getPropertyName",value:function getPropertyName(){return this.component.getByTestId("".concat(this.testId,"__label"))}},{key:"getPropertyDescription",value:function getPropertyDescription(){return this.component.getByTestId("prop-editor__description")}},{key:"getInput",value:function getInput(){return this.component.getByTestId("prop-editor__input")}},{key:"getSwitcher",value:function getSwitcher(){return this.component.getByTestId("prop-editor__switcher")}},{key:"toggleSwitcher",value:function toggleSwitcher(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step("Переключаю свитчер",_async_to_generator((function(){var switcher;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return switcher=_this.getSwitcher(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"getValue",value:function getValue(){return"boolean"===this.editorElement.dataset.type?"true"===this.getSwitcher().ariaChecked:this.getInput().value}},{key:"setValue",value:function setValue(value){var _this=this;return _async_to_generator((function(){var switcher;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return"boolean"!==_this.editorElement.dataset.type?[3,5]:(switcher=_this.getSwitcher(),!0!==value||"false"!==switcher.ariaChecked?[3,2]:[4,_this.step("Привожу свитчер в чекнутое состояние",_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 1:return _state.sent(),[2]}}))})))]);case 1:_state.sent(),_state.label=2;case 2:return!1!==value||"true"!==switcher.ariaChecked?[3,4]:[4,_this.step("Привожу свитчер в нечекнутое состояние",_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 1:return _state.sent(),[2]}}))})))];case 3:_state.sent(),_state.label=4;case 4:return[3,7];case 5:return[4,_this.step("Ввожу значение в инпут",_async_to_generator((function(){var input;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return input=_this.getInput(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(input,value)];case 1:return _state.sent(),[2]}}))})))];case 6:_state.sent(),_state.label=7;case 7:return[2]}}))}))()}}]),PropEditorTO}()},"./components/props-editor/__stories__/schema.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>schema});var schema={$schema:"https://json-schema.org/draft/2020-12/schema",$id:"user",title:"User",type:"object",properties:{name:{description:"Your name",type:"string"},age:{description:"Your age",type:"number"},isBald:{description:"Your hair availability",type:"boolean"}}}}}]);