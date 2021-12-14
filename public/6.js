(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_TypeHead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/TypeHead */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue");
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
    TypeHead: _partials_TypeHead__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    api_url: {
      type: String,
      "default": "/backend/users/search"
    },
    option_bind_to_html: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      form: {
        user: null,
        permissions: []
      },
      output: []
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      if (!this.form.user || !this.form.permissions.length) {
        alert("Please Fill the form currently");
        return false;
      }

      axios.post("/backend/users/abilities/check", this.form).then(function (res) {
        _this.output = res.data || [];
      })["catch"](function (err) {
        _this.output = [];
        console.log(err.response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=template&id=32c56a6a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=template&id=32c56a6a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "form",
        {
          on: {
            reset: function($event) {
              _vm.form = { user: null, permissions: [] }
            },
            submit: function($event) {
              $event.preventDefault()
              return _vm.onSubmit($event)
            }
          }
        },
        [
          _c(
            "b-card",
            {
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function() {
                    return [
                      _c("div", { staticClass: "text-right" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-dark",
                            attrs: { type: "reset" }
                          },
                          [_vm._v("Reset")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Submit")]
                        )
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Search Users" } },
                [
                  _c("type-head", {
                    attrs: {
                      api_url: "/backend/users/search",
                      placeholder: "Type and Search User",
                      formatter: function(item) {
                        return item.id + " # " + item.name + " | " + item.email
                      }
                    },
                    on: {
                      selected: function(item) {
                        return (_vm.form.user = item.id)
                      },
                      reset: function($event) {
                        _vm.form.user = null
                      }
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "option",
                        fn: function(item) {
                          return [
                            _c("div", {
                              domProps: {
                                innerHTML: _vm._s(
                                  item.id +
                                    " # " +
                                    item.name +
                                    " | " +
                                    item.email
                                )
                              }
                            })
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                { attrs: { label: "Search Permissions" } },
                [
                  _c("type-head", {
                    attrs: {
                      api_url: "/backend/permissions/search",
                      "clear-on-select": true,
                      placeholder: "Type and Search Permission",
                      formatter: function(item) {
                        return item.name
                      }
                    },
                    on: {
                      selected: function(item) {
                        if (
                          !_vm.form.permissions.filter(function(permission) {
                            return permission === item.name
                          }).length
                        ) {
                          _vm.form.permissions.push(item.name)
                        }
                      }
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "option",
                        fn: function(item) {
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(item.name) +
                                "\n                    "
                            )
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                _vm._l(_vm.form.permissions, function(permission, ukey) {
                  return _c(
                    "button",
                    {
                      key: ukey,
                      staticClass: "btn btn-sm btn-secondary m-1",
                      attrs: { title: "Click to Remove" },
                      on: {
                        click: function($event) {
                          return _vm.form.permissions.splice(ukey, 1)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(permission) +
                          "\n                    "
                      ),
                      _c("b-icon", { attrs: { icon: "x" } })
                    ],
                    1
                  )
                }),
                0
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.output.length
        ? _c("b-table-lite", {
            staticClass: "m-0",
            attrs: {
              small: "",
              bordered: "",
              striped: "",
              hover: "",
              "head-variant": "dark",
              items: _vm.output,
              fields: [
                { key: "permission", sortable: true },
                { key: "ability", sortable: true }
              ]
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserAbility_vue_vue_type_template_id_32c56a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAbility.vue?vue&type=template&id=32c56a6a&scoped=true& */ "./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=template&id=32c56a6a&scoped=true&");
/* harmony import */ var _UserAbility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAbility.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserAbility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserAbility_vue_vue_type_template_id_32c56a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserAbility_vue_vue_type_template_id_32c56a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "32c56a6a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAbility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserAbility.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAbility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=template&id=32c56a6a&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=template&id=32c56a6a&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAbility_vue_vue_type_template_id_32c56a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserAbility.vue?vue&type=template&id=32c56a6a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility.vue?vue&type=template&id=32c56a6a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAbility_vue_vue_type_template_id_32c56a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAbility_vue_vue_type_template_id_32c56a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);