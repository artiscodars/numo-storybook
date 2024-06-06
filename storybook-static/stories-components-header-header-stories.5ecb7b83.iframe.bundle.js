(self.webpackChunkangular_latest=self.webpackChunkangular_latest||[]).push([[199],{"./src/stories/components/header/header.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".numo-header {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.numo-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.numo-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.numo-header button + button {\n  margin-left: 10px;\n}\n\n.numo-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/components/header/header.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>HeaderComponent});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_header_css_ngResource__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/header/header.css?ngResource"),_header_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_header_css_ngResource__WEBPACK_IMPORTED_MODULE_0__),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_elements_button_button_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/elements/button/button.component.ts");let HeaderComponent=class HeaderComponent{constructor(){this.user=null,this.onLogin=new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter,this.onLogout=new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter,this.onCreateAccount=new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter}static#_=this.propDecorators={user:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],onLogin:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output}],onLogout:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output}],onCreateAccount:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output}]}};HeaderComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({selector:"numo-header",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_elements_button_button_component__WEBPACK_IMPORTED_MODULE_1__.Q],template:'<header>\n    <div class="numo-header">\n      <div>\n        <svg\n          width="32"\n          height="32"\n          viewBox="0 0 32 32"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <g fill="none" fillRule="evenodd">\n            <path\n              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"\n              fill="#FFF"\n            />\n            <path\n              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"\n              fill="#555AB9"\n            />\n            <path\n              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"\n              fill="#91BAF8"\n            />\n          </g>\n        </svg>\n        <h1>Acme</h1>\n      </div>\n      <div>\n        <div *ngIf="user">\n          <span class="welcome">\n            Welcome, <b>{{ user.name }}</b\n            >!\n          </span>\n          <numo-button\n            *ngIf="user"\n            size="small"\n            (onClick)="onLogout.emit($event)"\n            label="Log out"\n          ></numo-button>\n        </div>\n        <div *ngIf="!user">\n          <numo-button\n            *ngIf="!user"\n            size="small"\n            class="margin-left"\n            (onClick)="onLogin.emit($event)"\n            label="Log in"\n          ></numo-button>\n          <numo-button\n            *ngIf="!user"\n            size="small"\n            [primary]="true"\n            class="margin-left"\n            (onClick)="onCreateAccount.emit($event)"\n            label="Sign up"\n          ></numo-button>\n        </div>\n      </div>\n    </div>\n  </header>',styles:[_header_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default()]})],HeaderComponent)},"./src/stories/elements/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ButtonComponent=class ButtonComponent{constructor(){this.primary=!1,this.size="medium",this.label="Button",this.onClick=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter}get classes(){return["font-sans","font-bold","rounded-full","cursor-pointer","inline-block","leading-none",this.primary?"text-white bg-black border-transparent":"text-gray-800 bg-transparent border border-gray-300",{small:"text-xs px-4 py-2",medium:"text-sm px-5 py-2.5",large:"text-base px-6 py-3"}[this.size]]}static#_=this.propDecorators={primary:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],backgroundColor:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]}};ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"numo-button",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],template:'\n    <button\n      type="button"\n      (click)="onClick.emit($event)"\n      [ngClass]="classes"\n      [ngStyle]="{ \'background-color\': backgroundColor }"\n    >\n      {{ label }}\n    </button>\n  '})],ButtonComponent)},"./src/stories/components/header/header.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/header/header.component.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"2. Components/Header",component:_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.l,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{onLogin:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),onLogout:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),onCreateAccount:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()}},LoggedIn={args:{user:{name:"Jane Doe"}}},LoggedOut={};LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:'{\n  args: {\n    user: {\n      name: "Jane Doe"\n    }\n  }\n}',...LoggedIn.parameters?.docs?.source}}},LoggedOut.parameters={...LoggedOut.parameters,docs:{...LoggedOut.parameters?.docs,source:{originalSource:"{}",...LoggedOut.parameters?.docs?.source}}};const __namedExportsOrder=["LoggedIn","LoggedOut"]},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);