"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[942],{"./components/prop-editor/__stories__/prop-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ObjectExampleStory:()=>ObjectExampleStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/layout/sidebar-decorator.tsx"),_prop_editor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/prop-editor/prop-editor.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={component:Default,title:"PropEditor",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),property:{type:"string",description:"description"},value:"some valuev",name:"name",testId:"prop-editor"},decorators:[_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__.u]};function Default(param){var name=param.name,value=param.value,property=param.property,_param_testId=param.testId,testId=void 0===_param_testId?"prop-editor":_param_testId,onChange=param.onChange,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(newValue){onChange(newValue),setCurrentValue(newValue)}),[onChange]);return React.createElement(_prop_editor__WEBPACK_IMPORTED_MODULE_3__.v,{name,testId,value:currentValue,property,onChange:changeHandler})}var ObjectExampleStory={render:function render(args){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(args.value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(newValue){args.onChange(newValue),setCurrentValue(newValue)}),[args]);return React.createElement(_prop_editor__WEBPACK_IMPORTED_MODULE_3__.v,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args),{value:currentValue,onChange:changeHandler}))},args:{name:"objectName",value:{age:228,name:"kek",obj:{isBald:!0}},property:{type:"object",description:"kek",properties:{age:{type:"number",description:"its a number"},name:{type:"string",description:"its a string"},obj:{type:"object",description:"its an object",properties:{isBald:{type:"boolean",description:"its a boolean"}}}}},onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default<T>({\n  name,\n  value,\n  property,\n  testId = 'prop-editor',\n  onChange\n}: BaseProps<T>) {\n  const [currentValue, setCurrentValue] = useState(value);\n  const changeHandler = useCallback((newValue: T) => {\n    onChange(newValue);\n    setCurrentValue(newValue);\n  }, [onChange]);\n  return <PropEditor name={name} testId={testId} value={currentValue} property={property} onChange={changeHandler} />;\n}",...Default.parameters?.docs?.source}}},ObjectExampleStory.parameters={...ObjectExampleStory.parameters,docs:{...ObjectExampleStory.parameters?.docs,source:{originalSource:"{\n  render: function <T>(args: BaseProps<T>) {\n    const [currentValue, setCurrentValue] = useState(args.value);\n    const changeHandler = useCallback((newValue: T) => {\n      args.onChange(newValue);\n      setCurrentValue(newValue);\n    }, [args]);\n    return <PropEditor {...args} value={currentValue} onChange={changeHandler} />;\n  },\n  args: {\n    name: 'objectName',\n    value: {\n      age: 228,\n      name: 'kek',\n      obj: {\n        isBald: true\n      }\n    },\n    property: {\n      type: 'object',\n      description: 'kek',\n      properties: {\n        age: {\n          type: 'number',\n          description: 'its a number'\n        },\n        name: {\n          type: 'string',\n          description: 'its a string'\n        },\n        obj: {\n          type: 'object',\n          description: 'its an object',\n          properties: {\n            isBald: {\n              type: 'boolean',\n              description: 'its a boolean'\n            }\n          }\n        }\n      }\n    },\n    onChange: fn()\n  }\n}",...ObjectExampleStory.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ObjectExampleStory"]}}]);