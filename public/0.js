(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Events
 *      1. @items  Returns the list of items fetched by Promise "searchItems"
 *      2. @selected Returns the selected item by enter or click event
 *      3. @dropdownHidden Triggers when the dropdown below the input box is hidden
 *      4. @dropdownShown Triggers when the dropdown is shown
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  inheritAttrs: false,
  props: {
    closeOnSelect: {
      type: Boolean,
      "default": true
    },
    clearOnSelect: {
      type: Boolean,
      "default": false
    },
    resetOnSelect: {
      type: Boolean,
      "default": false
    },
    search: {
      type: String,
      "default": ''
    },

    /**
     * It should return a promise, that fetches data from remote server.
     */
    searchItems: {
      type: Function
    },
    api_url: {
      type: String,
      "default": ""
    },
    placeholder: {
      type: String,
      "default": "Type and Search"
    },
    formatter: {
      type: Function,
      "default": function _default(option) {
        return "".concat(option.text || option.name || JSON.stringify(option));
      }
    }
  },
  data: function data() {
    return {
      show_dropdown: false,
      current_position: 0,
      items: [],
      search_value: this.search
    };
  },
  methods: {
    enterPressed: function enterPressed() {
      if (this.show_dropdown) {
        this.$emit('selected', this.items[this.current_position]);
        this.search_value = this.clearOnSelect ? "" : this.formatter(this.items[this.current_position]);

        if (this.closeOnSelect) {
          this.show_dropdown = false;
        }

        if (this.resetOnSelect) {
          this.items = [];
        }
      }
    },
    itemClicked: function itemClicked(item) {
      this.search_value = this.clearOnSelect ? "" : this.formatter(item);

      if (this.resetOnSelect) {
        this.items = [];
      }

      this.$emit('selected', item);
    },
    getList: function getList(e) {
      var _this = this;

      var q = null;

      if (this.api_url !== "") {
        q = axios.post(this.api_url, {
          search: e.target.value
        });
      } else {
        q = this.searchItems(e.target.value);
      }

      if (q) {
        q.then(function (res) {
          _this.items = res.data || [];

          _this.$emit("items", res.data || []);
        })["catch"](function (err) {
          _this.items = [];

          _this.$emit("items", []);

          console.error(err.response);
        });
      }
    },
    hideDropdown: function hideDropdown() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.show_dropdown = false;
      }, 300);
      this.current_position = 0;
      this.$emit("dropdownHidden", true);
    },
    changePosition: function changePosition(ev, type) {
      if (type === "down" && this.current_position > this.items.length - 1) {
        this.current_position = this.current_position + 1;
        console.log("down");
      } else if (type === "up" && this.current_position > 0) {
        this.current_position = this.current_position - 1;
        console.log("up");
      }
    },
    fixPosition: function fixPosition(index) {
      if (this.$refs.ddown_typehead) {
        var items = this.$refs.ddown_typehead.$el.querySelectorAll(".ddown-item");

        if (items.length) {
          items[index || this.current_position].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.scrollable-dropdown {\n    max-height: 300px;\n    overflow-y: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TypeHead.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=template&id=de3f83d8&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=template&id=de3f83d8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "input-group" }, [
        _c(
          "input",
          _vm._b(
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search_value,
                  expression: "search_value"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: _vm.placeholder },
              domProps: { value: _vm.search_value },
              on: {
                focusin: function($event) {
                  ;(_vm.show_dropdown = true), _vm.$emit("dropdownShown", true)
                },
                focusout: _vm.hideDropdown,
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search_value = $event.target.value
                  },
                  _vm.getList
                ],
                keypress: function() {
                  if (!_vm.show_dropdown) {
                    _vm.show_dropdown = true
                  }
                },
                keydown: [
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    $event.preventDefault()
                    return _vm.enterPressed($event)
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "down", 40, $event.key, [
                        "Down",
                        "ArrowDown"
                      ])
                    ) {
                      return null
                    }
                    ;(_vm.current_position =
                      _vm.current_position < _vm.items.length - 1
                        ? _vm.current_position + 1
                        : _vm.items.length > 0
                        ? _vm.items.length - 1
                        : 0),
                      _vm.fixPosition(_vm.current_position)
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "up", 38, $event.key, [
                        "Up",
                        "ArrowUp"
                      ])
                    ) {
                      return null
                    }
                    ;(_vm.current_position =
                      _vm.current_position > 0 ? _vm.current_position - 1 : 0),
                      _vm.fixPosition(_vm.current_position)
                  }
                ]
              }
            },
            "input",
            _vm.$attrs,
            false
          )
        ),
        _vm._v(" "),
        _c("div", { staticClass: "input-group-append" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-secondary",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  ;(_vm.search_value = ""), _vm.$emit("reset")
                }
              }
            },
            [_vm._v("X")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm.show_dropdown && _vm.items.length
        ? _c(
            "b-dropdown",
            {
              ref: "ddown_typehead",
              staticClass: "w-100",
              staticStyle: { top: "-15px" },
              attrs: {
                "menu-class": {
                  show: _vm.show_dropdown,
                  "w-100": true,
                  "scrollable-dropdown": true
                },
                "toggle-class": "d-none"
              }
            },
            _vm._l(_vm.items, function(item, item_key) {
              return _c(
                "b-dropdown-item",
                {
                  key: item_key,
                  class: {
                    "bg-light": _vm.current_position === item_key,
                    "ddown-item": true
                  },
                  staticStyle: { cursor: "pointer" },
                  on: {
                    click: function($event) {
                      return _vm.itemClicked(item)
                    }
                  }
                },
                [
                  _vm._t(
                    "option",
                    [
                      _vm._v(
                        "\n                " + _vm._s(item) + "}\n            "
                      )
                    ],
                    null,
                    item
                  )
                ],
                2
              )
            }),
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue":
/*!****************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TypeHead_vue_vue_type_template_id_de3f83d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypeHead.vue?vue&type=template&id=de3f83d8& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=template&id=de3f83d8&");
/* harmony import */ var _TypeHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypeHead.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TypeHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TypeHead.vue?vue&type=style&index=0&lang=css& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TypeHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TypeHead_vue_vue_type_template_id_de3f83d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TypeHead_vue_vue_type_template_id_de3f83d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TypeHead.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TypeHead.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=template&id=de3f83d8&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=template&id=de3f83d8& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_template_id_de3f83d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TypeHead.vue?vue&type=template&id=de3f83d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue?vue&type=template&id=de3f83d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_template_id_de3f83d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeHead_vue_vue_type_template_id_de3f83d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);