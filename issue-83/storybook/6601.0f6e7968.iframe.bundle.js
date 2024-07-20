"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[6601],{"./components/element-add/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>ElementAddTO});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var ElementAddTO=function(){function ElementAddTO(options){var _options_testId;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ElementAddTO),_define_property(this,"step",void 0),_define_property(this,"testId",void 0),_define_property(this,"_root",null),this.step=options.step,this.testId=null!==(_options_testId=options.testId)&&void 0!==_options_testId?_options_testId:"element-add"}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(ElementAddTO,[{key:"root",get:function get(){return this._root||(this._root=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.getByTestId(this.testId))),this._root}},{key:"select",get:function get(){return this.root.getByTestId("element-add__select")}},{key:"isVisible",value:function isVisible(){var timeout=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,_this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){return _storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.queryByTestId(_this.testId)?[2,!0]:timeout<=0?[2,!1]:[2,_this.isVisible(timeout-50)]}))}))()}},{key:"clickOnComponentsSelect",value:function clickOnComponentsSelect(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step("Кликаю на select с выбором компонента",_async_to_generator((function(){var input;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return input=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(_this.select).getByRole("combobox"),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(input)];case 1:return _state.sent(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard("[Space]")];case 2:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"getComponentsOptions",value:function getComponentsOptions(){return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.findAllByTestId("component-option")];case 1:return[2,_state.sent().map((function(option){return{text:option.textContent,value:option.getAttribute("data-value")}}))]}}))}))()}},{key:"getSelectedComponentId",value:function getSelectedComponentId(){var rawValue=this.select.getAttribute("data-value");return"null"===rawValue?null:rawValue}},{key:"selectComponent",value:function selectComponent(componentId){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.clickOnComponentsSelect()];case 1:return _state.sent(),[4,_this.step('Выбираю компонент с id "'.concat(componentId,'"'),_async_to_generator((function(){var optionsElements,option;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.findAllByTestId("component-option")];case 1:if(optionsElements=_state.sent(),!(option=optionsElements.find((function(option){return option.getAttribute("data-value")===componentId}))))throw new Error("Не существует опшина с значением ".concat(componentId));return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(option)];case 2:return _state.sent(),[2]}}))})))];case 2:return _state.sent(),[2]}}))}))()}},{key:"waitForComponentsLoading",value:function waitForComponentsLoading(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step("Ожидаю загрузки компонентов",_async_to_generator((function(){var maybeLoadingIcon;return _ts_generator(this,(function(_state){return maybeLoadingIcon=_this.select.querySelector('[role="img"][aria-label="loading"]'),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.n8)(maybeLoadingIcon,{timeout:5e3}),[2]}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"findPropsElement",value:function findPropsElement(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){return[2,_this.root.findByTestId("element-add__props")]}))}))()}},{key:"clickAdd",value:function clickAdd(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step('Кликаю по кнопке "Добавить"',_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(_this.root.getByTestId("element-add__submit"))];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"clickClose",value:function clickClose(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step("Кликаю по кнопке с крестиком, закрывающим модалку",_async_to_generator((function(){var closeButton;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return closeButton=_this.root.getByRole("button",{name:"Close"}),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(closeButton)];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}}]),ElementAddTO}()}}]);