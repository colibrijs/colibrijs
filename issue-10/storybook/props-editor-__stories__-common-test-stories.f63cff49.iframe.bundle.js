"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[196,520],{"./components/props-editor/__stories__/common.test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangeEvent:()=>ChangeEvent,DefaultValues:()=>DefaultValues,LabelFields:()=>LabelFields,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_props_editor_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/props-editor/__stories__/props-editor.stories.tsx"),_schema_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/props-editor/__stories__/schema.json"),_utils_get_properties_names__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/props-editor/utils/get-properties-names.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_props_editor_stories__WEBPACK_IMPORTED_MODULE_1__.default),{title:"PropsEditor/tests/callbacks"});var _ref,ChangeEvent={name:"При изменении поля, происходит вызов onChange с нужными данными",play:(_ref=_async_to_generator((function(param){var args,canvasElement,step,getAllByTestId,inputs,firstInput;return _ts_generator(this,(function(_state){switch(_state.label){case 0:if(args=param.args,canvasElement=param.canvasElement,step=param.step,getAllByTestId=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getAllByTestId,inputs=getAllByTestId("props-editor__input"),!(firstInput=inputs[0]))throw Error("Не найден инпут");return[4,step('Вводим слово "Кек" в первый инпут',_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(firstInput,"Кек")];case 1:return[2,_state.sent()]}}))})))];case 1:return _state.sent(),[4,step("Проверем, что пропс onChange был вызван с корректными данными",_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(args.onChange).toHaveBeenCalledWith({name:"Кек",surname:""})];case 1:return _state.sent(),[2]}}))})))];case 2:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})},LabelFields={name:"При передаче схемы, отрисовываются корректные поля с лейблами",play:function(){var _ref=_async_to_generator((function(param){var args,canvasElement,step,getAllByTestId,items,keys;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return args=param.args,canvasElement=param.canvasElement,step=param.step,getAllByTestId=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getAllByTestId,items=getAllByTestId("props-editor__item"),keys=(0,_utils_get_properties_names__WEBPACK_IMPORTED_MODULE_3__.U)(args.schema),[4,step("Ищем все поля и убеждаемся что лейблы соответствуют тем, что в схеме",(function(){items.forEach((function(item,index){var _label_textContent,getByTestId=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(item).getByTestId,label=getByTestId("props-editor__label"),labelText=null==label||null===(_label_textContent=label.textContent)||void 0===_label_textContent?void 0:_label_textContent.trim(),input=getByTestId("props-editor__input");(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(labelText).toBe(keys[index]),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(input).toBeInTheDocument()}))}))];case 1:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},DefaultValues={name:"При передаче value, подставляются корректные данные",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),schema:JSON.stringify(_schema_json__WEBPACK_IMPORTED_MODULE_2__,null,2),value:{name:"Ivan",surname:"Ivanych"}},play:function(){var _ref=_async_to_generator((function(param){var args,canvasElement,step,getAllByTestId,items,keys;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return args=param.args,canvasElement=param.canvasElement,step=param.step,getAllByTestId=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getAllByTestId,items=getAllByTestId("props-editor__item"),keys=(0,_utils_get_properties_names__WEBPACK_IMPORTED_MODULE_3__.U)(args.schema),[4,step("Ищем все поля и убеждаемся что значения соответствуют тем, что в пропсе",(function(){items.forEach((function(item,index){var input=(0,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(item).getByTestId)("props-editor__input"),keyName=keys[index];if(!keyName)throw Error("Не найден ключ с таким индексом");(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(input.value).toBe(args.value[keyName])}))}))];case 1:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["ChangeEvent","LabelFields","DefaultValues"]},"./components/props-editor/__stories__/props-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>props_editor_stories});var dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),schema=__webpack_require__("./components/props-editor/__stories__/schema.json"),es_form=__webpack_require__("../../node_modules/antd/es/form/index.js"),input=__webpack_require__("../../node_modules/antd/es/input/index.js"),get_properties_names=__webpack_require__("./components/props-editor/utils/get-properties-names.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function PropsEditor(param){var schema=param.schema,onChange=param.onChange,value=param.value,propertiesNames=(0,get_properties_names.U)(schema),getChangeHandler=(0,react.useCallback)((function(key){return function(event){var newValue=event.target.value;onChange(_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},value),_define_property({},key,newValue)))}}),[onChange,value]);return react.createElement(es_form.A,{layout:"vertical"},propertiesNames.map((function(propName){return react.createElement(es_form.A.Item,{key:propName,label:react.createElement("span",{"data-testid":"props-editor__label"},propName),"data-testid":"props-editor__item"},react.createElement(input.A,{value:value[propName],"data-testid":"props-editor__input",onChange:getChangeHandler(propName)}))})))}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}PropsEditor.__docgenInfo={description:"",methods:[],displayName:"PropsEditor",props:{schema:{required:!0,tsType:{name:"string"},description:"JSON схема, которая описывает каким должен быть объект"},value:{required:!0,tsType:{name:"T"},description:"Объект со значением по умолчанию"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Функция, которая будет вызвана, когда пропсы поменяются"}}};var styles={maxWidth:"450px"};const props_editor_stories={component:Default,title:"PropsEditor",args:{onChange:(0,dist.fn)(),schema:JSON.stringify(schema,null,2),value:{name:"",surname:""}},decorators:[function(Story){return react.createElement("div",{style:styles},react.createElement(Story,null))}]};function Default(param){var value=param.value,_$schema=param.schema,onChange=param.onChange,_useState=_sliced_to_array((0,react.useState)(value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react.useCallback)((function(newValue){onChange(newValue),setCurrentValue(newValue)}),[onChange]);return react.createElement(PropsEditor,{value:currentValue,schema:_$schema,onChange:changeHandler})}Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default<T extends Record<string, string>>({\n  value,\n  schema,\n  onChange\n}: Props<T>) {\n  const [currentValue, setCurrentValue] = useState(value);\n  const changeHandler = useCallback((newValue: T) => {\n    onChange(newValue);\n    setCurrentValue(newValue);\n  }, [onChange]);\n  return <PropsEditor value={currentValue} schema={schema} onChange={changeHandler} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/props-editor/utils/get-properties-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getPropertiesNames(jsonSchema){var schema=JSON.parse(jsonSchema);return Object.keys(schema.properties)}__webpack_require__.d(__webpack_exports__,{U:()=>getPropertiesNames})},"./components/props-editor/__stories__/schema.json":module=>{module.exports=JSON.parse('{"title":"scheme","description":"Props scheme","type":"object","properties":{"name":{"description":"Your name","type":"string"},"surname":{"description":"Your surname","type":"string"}}}')}}]);