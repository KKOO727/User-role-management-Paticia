(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatable */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/datatable.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    headVariant: {
      type: String,
      "default": 'dark'
    },
    bordered: {
      type: Boolean,
      "default": true
    },
    small: {
      type: Boolean,
      "default": true
    },
    hover: {
      type: Boolean,
      "default": true
    },
    striped: {
      type: Boolean,
      "default": true
    },
    item: {
      type: Object,
      required: true
    },
    skip: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    as: {
      type: Object,
      "default": function _default() {
        return {
          key: 'key',
          value: 'value'
        };
      }
    },
    fields: {
      type: Array,
      "default": function _default() {
        return [{
          key: 'key',
          sortable: true,
          formatter: function formatter(v) {
            return Object(_datatable__WEBPACK_IMPORTED_MODULE_0__["startCase"])(v);
          }
        }, {
          key: 'value',
          sortable: true
        }];
      }
    }
  },
  methods: {
    obj2Table: _datatable__WEBPACK_IMPORTED_MODULE_0__["obj2Table"],
    startCase: _datatable__WEBPACK_IMPORTED_MODULE_0__["startCase"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    datatable: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatable */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/datatable.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    fields: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    datatable: Object,
    value: {
      type: String,
      "default": ""
    },
    custom_buttons: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  methods: {
    range: _datatable__WEBPACK_IMPORTED_MODULE_0__["range"],
    changeVisibility: _datatable__WEBPACK_IMPORTED_MODULE_0__["changeVisibility"],
    startCase: _datatable__WEBPACK_IMPORTED_MODULE_0__["startCase"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DtHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DtHeader */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue");
/* harmony import */ var _DtFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DtFooter */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DtHeader: _DtHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    DtFooter: _DtFooter__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    title: {
      type: String,
      "default": ""
    },
    fields: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    datatable: {
      type: Object,
      "default": function _default() {
        return {
          per_page: 10,
          current_page: 1,
          total: 0,
          from: 0,
          to: 0
        };
      }
    },
    value: {
      type: String,
      "default": ''
    },
    custom_buttons: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      ff: [],
      cbuttons: [1, 2, 3]
    };
  } // created() {
  //     setTimeout(() => {
  //         let context = this.$slots.table[0].context;
  //         this.ff = context.fields;
  //         this.cbuttons = context.custom_buttons;
  //
  //     }, 10);
  //
  // }

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".columns-dropdown .dropdown-menu {\n  padding: 0 !important;\n  border: 0 !important;\n}\n.columns-dropdown .list-group-item label {\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DtHeader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=template&id=2a31b0c9&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=template&id=2a31b0c9&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
    "b-table",
    _vm._b(
      {
        attrs: {
          items: _vm.obj2Table(_vm.item, _vm.skip, _vm.as),
          fields: _vm.fields,
          "head-variant": _vm.headVariant,
          bordered: _vm.bordered,
          small: _vm.small,
          hover: _vm.hover,
          striped: _vm.striped
        }
      },
      "b-table",
      _vm.$attrs,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=template&id=4f5ba8b6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=template&id=4f5ba8b6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col" },
      [
        _vm.datatable.to
          ? [
              _vm._v(
                "\n            Showing " +
                  _vm._s(_vm.datatable.from || 0) +
                  " to " +
                  _vm._s(_vm.datatable.to || 0) +
                  " = " +
                  _vm._s(
                    _vm.datatable.to - _vm.datatable.from + _vm.datatable.from
                  ) +
                  " items of\n            " +
                  _vm._s(_vm.datatable.total) +
                  " items.\n        "
              )
            ]
          : [_vm._v("No Items Found")]
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col" },
      [
        _c("b-pagination", {
          attrs: {
            align: "right",
            size: "sm",
            "total-rows": _vm.datatable.total,
            "per-page": _vm.datatable.per_page,
            "aria-controls": "datatable"
          },
          model: {
            value: _vm.datatable.current_page,
            callback: function($$v) {
              _vm.$set(_vm.datatable, "current_page", $$v)
            },
            expression: "datatable.current_page"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=template&id=0cf6e0d2&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=template&id=0cf6e0d2& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "input-group" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.datatable.per_page,
                expression: "datatable.per_page"
              }
            ],
            staticClass: "form-control",
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.datatable,
                  "per_page",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          _vm._l(_vm.range(), function(r) {
            return _c("option", { domProps: { value: r } }, [_vm._v(_vm._s(r))])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-5" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          placeholder: "Type and Hit Enter to Search the table, ESC to clear"
        },
        domProps: { value: _vm.value },
        on: {
          keydown: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
            ) {
              return null
            }
            return (function() {
              $event.target.value = ""
              _vm.$emit("input", "")
            })($event)
          },
          change: function($event) {
            _vm.datatable.current_page = 1
          },
          input: function($event) {
            return _vm.$emit("input", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-4 text-right" },
      [
        _c(
          "div",
          { staticClass: "btn-group" },
          _vm._l(_vm.custom_buttons, function(btn, btn_key) {
            return _vm.custom_buttons && _vm.custom_buttons.length
              ? _c(
                  "button",
                  {
                    key: btn_key,
                    staticClass: "btn",
                    class: btn.variant ? "btn-" + btn.variant : "btn-dark",
                    attrs: { type: "button" },
                    on: { click: btn.method }
                  },
                  [
                    btn.icon ? _c("i", { class: btn.icon }) : _vm._e(),
                    _vm._v(" " + _vm._s(btn.text) + "\n            ")
                  ]
                )
              : _vm._e()
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "b-dropdown",
          {
            staticClass: "columns-dropdown p-0",
            attrs: { text: "Columns", right: "", variant: "primary" }
          },
          [
            _c(
              "ul",
              { staticClass: "list-group" },
              _vm._l(_vm.fields, function(field, key) {
                return _c(
                  "li",
                  { key: key, staticClass: "list-group-item" },
                  [
                    _c(
                      "b-form-checkbox",
                      {
                        attrs: { value: true, "uncheched-value": false },
                        on: {
                          change: function($event) {
                            return _vm.changeVisibility(field, key)
                          }
                        },
                        model: {
                          value: field.visible,
                          callback: function($$v) {
                            _vm.$set(field, "visible", $$v)
                          },
                          expression: "field.visible"
                        }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.startCase(field.label || field.key)) +
                            "\n                    "
                        )
                      ]
                    )
                  ],
                  1
                )
              }),
              0
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Per Page")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=template&id=3b136834&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=template&id=3b136834&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    {
      attrs: { title: _vm.title },
      scopedSlots: _vm._u([
        {
          key: "header",
          fn: function() {
            return [
              _c("dt-header", {
                attrs: {
                  custom_buttons: _vm.custom_buttons,
                  datatable: _vm.datatable,
                  fields: _vm.fields,
                  value: _vm.value
                },
                on: {
                  input: function($event) {
                    return _vm.$emit("input", $event)
                  }
                }
              })
            ]
          },
          proxy: true
        },
        {
          key: "footer",
          fn: function() {
            return [_c("dt-footer", { attrs: { datatable: _vm.datatable } })]
          },
          proxy: true
        }
      ])
    },
    [_vm._v(" "), _vm._t("table")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue":
/*!****************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataView_vue_vue_type_template_id_2a31b0c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataView.vue?vue&type=template&id=2a31b0c9&scoped=true& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=template&id=2a31b0c9&scoped=true&");
/* harmony import */ var _DataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataView.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataView_vue_vue_type_template_id_2a31b0c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataView_vue_vue_type_template_id_2a31b0c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2a31b0c9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=template&id=2a31b0c9&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=template&id=2a31b0c9&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataView_vue_vue_type_template_id_2a31b0c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataView.vue?vue&type=template&id=2a31b0c9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue?vue&type=template&id=2a31b0c9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataView_vue_vue_type_template_id_2a31b0c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataView_vue_vue_type_template_id_2a31b0c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue":
/*!****************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DtFooter_vue_vue_type_template_id_4f5ba8b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DtFooter.vue?vue&type=template&id=4f5ba8b6&scoped=true& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=template&id=4f5ba8b6&scoped=true&");
/* harmony import */ var _DtFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DtFooter.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DtFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DtFooter_vue_vue_type_template_id_4f5ba8b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DtFooter_vue_vue_type_template_id_4f5ba8b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f5ba8b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DtFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DtFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DtFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=template&id=4f5ba8b6&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=template&id=4f5ba8b6&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DtFooter_vue_vue_type_template_id_4f5ba8b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DtFooter.vue?vue&type=template&id=4f5ba8b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue?vue&type=template&id=4f5ba8b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DtFooter_vue_vue_type_template_id_4f5ba8b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DtFooter_vue_vue_type_template_id_4f5ba8b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue":
/*!****************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DtHeader_vue_vue_type_template_id_0cf6e0d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DtHeader.vue?vue&type=template&id=0cf6e0d2& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=template&id=0cf6e0d2&");
/* harmony import */ var _DtHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DtHeader.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DtHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DtHeader.vue?vue&type=style&index=0&lang=scss& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DtHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DtHeader_vue_vue_type_template_id_0cf6e0d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DtHeader_vue_vue_type_template_id_0cf6e0d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DtHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DtHeader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=template&id=0cf6e0d2&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=template&id=0cf6e0d2& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_template_id_0cf6e0d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DtHeader.vue?vue&type=template&id=0cf6e0d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue?vue&type=template&id=0cf6e0d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_template_id_0cf6e0d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DtHeader_vue_vue_type_template_id_0cf6e0d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue":
/*!***************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DtTable_vue_vue_type_template_id_3b136834_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DtTable.vue?vue&type=template&id=3b136834&scoped=true& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=template&id=3b136834&scoped=true&");
/* harmony import */ var _DtTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DtTable.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DtTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DtTable_vue_vue_type_template_id_3b136834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DtTable_vue_vue_type_template_id_3b136834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b136834",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DtTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DtTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DtTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=template&id=3b136834&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=template&id=3b136834&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DtTable_vue_vue_type_template_id_3b136834_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DtTable.vue?vue&type=template&id=3b136834&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue?vue&type=template&id=3b136834&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DtTable_vue_vue_type_template_id_3b136834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DtTable_vue_vue_type_template_id_3b136834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/partials/datatable.js":
/*!****************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/partials/datatable.js ***!
  \****************************************************************************************/
/*! exports provided: compact, obj2Table, objToArrObj, changeVisibility, msgBox, range, isBoolean, isString, iniDatatableVisibility, initDatatableModalEvents, setColumns, isTrue, isArray, startCase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj2Table", function() { return obj2Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objToArrObj", function() { return objToArrObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeVisibility", function() { return changeVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgBox", function() { return msgBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iniDatatableVisibility", function() { return iniDatatableVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDatatableModalEvents", function() { return initDatatableModalEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumns", function() { return setColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrue", function() { return isTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startCase", function() { return startCase; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Remove null , undefined and empty elements from Array.
 * @param items Array
 * @returns {*}
 */
function compact(items) {
  return items.filter(function (item) {
    return item !== null && item !== undefined && "" !== (isString(item) ? item.trim() : item);
  });
}
/**
 * @example obj2Table(object, ['column1','column2'])
 * @param items Object of the Data
 * @param skip Array Columns to be skipped / rejected
 * @param as
 * @returns {Array}
 */

function obj2Table(items) {
  var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var as = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    key: 'key',
    value: 'value'
  };
  var output = [];

  for (var x in items) {
    if (!skip.includes(x)) {
      var ret = {};
      ret[as['key']] = x;
      ret[as['value']] = items[x];
      output.push(ret);
    }
  }

  return output;
}
/**
 * Object to Array of Objects Convertion
 * @param items
 * @param skip Array , Objects fields that needs to be skipped from output object
 * @param callback (key,value)=>{return {key:key, value: value}}
 * @returns {[]}
 */

function objToArrObj(items) {
  var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var output = [];

  for (var x in items) {
    if (!skip.includes(x)) {
      output.push(callback(x, items[x]));
    }
  }

  return output;
}
function changeVisibility(field, index) {
  if (typeof this.fields[index].thClass !== "string") {
    this.fields[index].thClass = '';
  }

  if (typeof this.fields[index].tdClass !== "string") {
    this.fields[index].tdClass = '';
  }

  if (field.visible) {
    this.fields[index].thClass += ' d-none';
    this.fields[index].tdClass += ' d-none';
  } else {
    this.fields[index].thClass = this.fields[index].thClass.replace('d-none', '').trim();
    this.fields[index].tdClass = this.fields[index].tdClass.replace('d-none', '').trim();
  }
}
function msgBox(data, duration, append) {
  this.$bvToast.toast(data.msg, {
    title: data.title,
    variant: data.type,
    autoHideDelay: duration || 3000,
    appendToast: append || false
  });
}
function range() {
  var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  return _toConsumableArray(Array(quantity).keys()).map(function (i) {
    return i * step + step;
  });
}
function isBoolean(value) {
  return value === true || value === false;
}
function isString(value) {
  return typeof value === "string";
}
/**
 * Initializng Datatable Columns Visibilty Toggle Feature
 * @param scope
 */

function iniDatatableVisibility(scope) {
  scope.fields.forEach(function (item) {
    if (!isBoolean(item.visible)) {
      scope.$set(item, 'visible', true);
    }

    if (isBoolean(item.visible) && !item.visible) {
      scope.$set(item, 'thClass', 'd-none');
      scope.$set(item, 'tdClass', 'd-none');
    }
  });
}
/**
 * What happens when dropdown hides
 * @param scope
 * @param callprev
 * @param prev_params
 * @param callback
 * @param params
 */

function initDatatableModalEvents(scope, callprev) {
  var prev_params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var callback = arguments.length > 3 ? arguments[3] : undefined;
  var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

  if (typeof callprev === "function") {
    callprev.apply(void 0, _toConsumableArray(prev_params));
  } else {
    scope.$root.$on('bv::modal::hidden', function (bvEvent, modalId) {
      if (modalId === 'addModal') {
        scope.form = {};
      } else if (modalId === 'viewModal') {
        scope.currentItem = {};
      }

      if (typeof callback === "function") {
        callback.apply(void 0, _toConsumableArray(params));
      }
    });
  }
}
function setColumns(scope) {
  return compact(scope.fields.map(function (item) {
    if (isBoolean(item.visible) && item.visible) {
      if (!isBoolean(item.searchable) || item.searchable) {
        return item.key;
      }
    }
  }));
}
function isTrue(value) {
  return isBoolean(value) && value;
}
function isArray(value) {
  return Array.isArray(value);
}
/**
 * Forked From : /node_modules/bootstrap-vue/esm/utils/startcase.js
 * Converts a string, including strings in camelCase or snake_case, into Start Case (a variant
 * of Title Case where all words start with a capital letter), it keeps original single quote
 * and hyphen in the word.
 *
 * Copyright (c) 2017 Compass (MIT)
 * https://github.com/UrbanCompass/to-start-case
 * @author Zhuoyuan Zhang <https://github.com/drawyan>
 * @author Wei Wang <https://github.com/onlywei>
 *
 *
 *   'management_companies' to 'Management Companies'
 *   'managementCompanies' to 'Management Companies'
 *   `hell's kitchen` to `Hell's Kitchen`
 *   `co-op` to `Co-op`
 *
 * @param {String} str
 * @returns {String}
 */
// Precompile regular expressions for performance

var RX_UNDERSCORE = /_/g;
var RX_LOWER_UPPER = /([a-z])([A-Z])/g;
var RX_START_SPACE_WORD = /(\s|^)(\w)/g;
function startCase(str) {
  return str.replace(RX_UNDERSCORE, ' ').replace(RX_LOWER_UPPER, function (str, $1, $2) {
    return $1 + ' ' + $2;
  }).replace(RX_START_SPACE_WORD, function (str, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: '',
      currentItem: {},
      datatable: {
        per_page: 10,
        current_page: 1,
        total: 0,
        from: 0,
        to: 0
      },
      fields: []
    };
  },
  mounted: function mounted() {
    iniDatatableVisibility(this);
    initDatatableModalEvents(this);
  },
  methods: {
    getItems: function getItems(ctx) {
      var _this = this;

      // console.log(ctx)
      return axios.post(this.api_url + "?page=" + (ctx.currentPage ? ctx.currentPage : 1), {
        per_page: this.datatable.per_page,
        orderBy: ctx.sortBy || 'id',
        order: isTrue(ctx.sortDesc) ? 'desc' : 'asc',
        filter: ctx.filter,
        columns: setColumns(this)
      }).then(function (res) {
        // console.log(res);
        _this.datatable.total = res.data.total;
        _this.datatable.from = res.data.from;
        _this.datatable.to = res.data.to;
        _this.datatable.current_page = res.data.current_page;
        return res.data.data;
      })["catch"](function (err) {
        console.log(err.response);
        return [];
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var callback_params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      axios.post(this.submit_url, this.form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        // console.log(res)
        _this2.$bvModal.hide('addModal');

        _this2.msgBox(res.data);

        _this2.$refs.datatable.refresh();

        if (callback) {
          callback.apply(void 0, _toConsumableArray(callback_params));
        }
      })["catch"](function (err) {
        _this2.msgBox(err.response);

        console.log(err.response);
      });
    },
    trash: function trash(id) {
      var _this3 = this;

      var datatable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'datatable';
      var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.$bvModal.msgBoxConfirm('Are you sure?').then(function (value) {
        if (value) {
          axios.post(url || _this3.trash_url, {
            id: id
          }).then(function (res) {
            _this3.msgBox(res.data);

            _this3.$refs[datatable].refresh();
          })["catch"](function (err) {
            _this3.msgBox(err.response);

            console.log(err.response);
          });
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    msgBox: msgBox,
    obj2Table: obj2Table,
    startCase: startCase
  }
});

/***/ })

}]);