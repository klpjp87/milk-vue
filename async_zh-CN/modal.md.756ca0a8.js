webpackJsonp([35],{

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(439);

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bfdd77ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_modal_md__ = __webpack_require__(440);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bfdd77ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_modal_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',[_vm._v("Modal 对话框")]),_vm._v(" "),_c('p',[_vm._v("在用户执行某些动作之后告知用户并承载相关操作")]),_vm._v(" "),_c('h3',[_vm._v("使用指南")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Modal } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\n")])]),_vm._v(" "),_c('h3',[_vm._v("代码演示")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"demo-block\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"m15\"")]),_vm._v(">")]),_vm._v("Alert"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modal('basic Modal', '这是内容')\"")]),_vm._v(">")]),_vm._v("Alert"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"m15\"")]),_vm._v(">")]),_vm._v("Confirm"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modal('关闭', '确认关闭？', 'confirm')\"")]),_vm._v(">")]),_vm._v("Confirm"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"m15\"")]),_vm._v(">")]),_vm._v("propmt"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modalPropmt\"")]),_vm._v(">")]),_vm._v("Propmt"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"m15\"")]),_vm._v(">")]),_vm._v("Popup"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"popup\"")]),_vm._v(">")]),_vm._v("Popup"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"m15\"")]),_vm._v(">")]),_vm._v("自定义按钮文字"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modalDiy\"")]),_vm._v(">")]),_vm._v("自定义按钮文字"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"m15\"")]),_vm._v(">")]),_vm._v("多个按钮"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modalBtns\"")]),_vm._v(">")]),_vm._v("多个按钮"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n\n")])])]),_vm._v(" "),_c('h3',[_vm._v("基础 Modal")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-js"}},[_vm._v("Modal({\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Title'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'这是内容'")]),_vm._v("\n})\n")])]),_vm._v(" "),_c('h3',[_vm._v("Confirm")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-js"}},[_vm._v("Modal.confirm({\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'关闭'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'确认关闭？'")]),_vm._v("\n})\n")])]),_vm._v(" "),_c('h3',[_vm._v("Propmt")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-js"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" vm = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(";\nModal.confirm({\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Title'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Propmt message'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("promptRender")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-function"}},[_vm._v("("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("h")]),_vm._v(") =>")]),_vm._v(" h("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(", {"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'propmt-input'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("on")]),_vm._v(": {"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("input")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v(" ("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("e")]),_vm._v(") ")]),_vm._v("{vm.prompt = e.target.value}}}),\n})\n")])]),_vm._v(" "),_c('h3',[_vm._v("Popup")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-js"}},[_vm._v("Modal.popup({\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'详细信息'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("popupRender")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("h")]),_vm._v(" =>")]),_vm._v(" h("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'v-list'")]),_vm._v(", [\n    h("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'v-list-item'")]),_vm._v(", ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'名称'")]),_vm._v("]),\n    h("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'v-list-item'")]),_vm._v(", ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'代码'")]),_vm._v("]),\n    h("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'v-list-item'")]),_vm._v(", ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'价格'")]),_vm._v("])\n  ])\n}).then("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v(" ("),_c('span',{attrs:{"class":"hljs-params"}}),_vm._v(") ")]),_vm._v("{\n  "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'confirm'")]),_vm._v(")\n})\n")])]),_vm._v(" "),_c('h3',[_vm._v("自定义按钮文字")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-js"}},[_vm._v("Modal.confirm({\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'关闭'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'确认关闭？'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("confirmText")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'关闭'")]),_vm._v("\n})\n")])]),_vm._v(" "),_c('h3',[_vm._v("多个按钮")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-js"}},[_vm._v("Modal.confirm({\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'提示'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'多个按钮'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("btns")]),_vm._v(": [{\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'按钮一'")]),_vm._v(",\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v(" ("),_c('span',{attrs:{"class":"hljs-params"}}),_vm._v(") ")]),_vm._v("{\n      "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'按钮一'")]),_vm._v(")\n    }\n  }, {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'按钮二'")]),_vm._v(",\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v(" ("),_c('span',{attrs:{"class":"hljs-params"}}),_vm._v(") ")]),_vm._v("{\n      "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'按钮二'")]),_vm._v(")\n    }\n  }, {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'按钮三'")]),_vm._v(",\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v(" ("),_c('span',{attrs:{"class":"hljs-params"}}),_vm._v(") ")]),_vm._v("{\n      "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log(按钮三)\n    }\n  }]\n})\n")])]),_vm._v(" "),_c('h3',[_vm._v("事件处理")]),_vm._v(" "),_c('p',[_vm._v("内部使用Promise来处理confirm和cancle事件，confirm事件使用.then捕获，cancle事件使用.catch捕获，如果存在没有捕获的错误，会在控制台中提示。")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-js"}},[_vm._v("\nModal.confirm({\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'关闭'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'确认关闭？'")]),_vm._v(",\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("confirmText")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'关闭'")]),_vm._v("\n}).then("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'confirm'")]),_vm._v(")\n}).catch("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'cancle'")]),_vm._v(")\n})\n")])]),_vm._v(" "),_c('h3',[_vm._v("Function")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("方法名")]),_vm._v(" "),_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("返回值")]),_vm._v(" "),_c('th',[_vm._v("介绍")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("Modal")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("options")])]),_vm._v(" "),_c('td',[_vm._v("Modal 实例")]),_vm._v(" "),_c('td',[_vm._v("展示提示信息")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Modal.confirm")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("options")])]),_vm._v(" "),_c('td',[_vm._v("Modal 实例")]),_vm._v(" "),_c('td',[_vm._v("展示confirm提示信息")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Modal.popup")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("options")])]),_vm._v(" "),_c('td',[_vm._v("Modal 实例")]),_vm._v(" "),_c('td',[_vm._v("展示popup提示信息")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Modal.clear")]),_vm._v(" "),_c('td'),_vm._v(" "),_c('td'),_vm._v(" "),_c('td',[_vm._v("关闭提示")])])])]),_vm._v(" "),_c('h3',[_vm._v("API")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")]),_vm._v(" "),_c('th',[_vm._v("可选值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("type")]),_vm._v(" "),_c('td',[_vm._v("提示类型")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("basic")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("basic")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("confirm")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("popup")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("title")]),_vm._v(" "),_c('td',[_vm._v("标题")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("''")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("message")]),_vm._v(" "),_c('td',[_vm._v("内容")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("''")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("promptRender")]),_vm._v(" "),_c('td',[_vm._v("渲染Propmt对话框，只在Modal.confirm中使用")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Function")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("popupRender")]),_vm._v(" "),_c('td',[_vm._v("渲染Popup对话框，只在Modal.popup中使用")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Function")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("confirmText")]),_vm._v(" "),_c('td',[_vm._v("确认按钮文字")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("确定")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("cancleText")]),_vm._v(" "),_c('td',[_vm._v("取消按钮文字")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("取消")])]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("btns")]),_vm._v(" "),_c('td',[_vm._v("按钮组,用来创建多按钮 Modal")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Array")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("forbidClick")]),_vm._v(" "),_c('td',[_vm._v("禁止背景点击")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td',[_vm._v("-")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});