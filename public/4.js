(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    password_enabled: {
      type: Boolean,
      "default": true
    },
    submit_url: {
      type: String,
      "default": null
    },
    search_url: {
      type: String,
      "default": "/backend/roles/search"
    },
    data_url: {
      type: String,
      "default": "/backend/users/data"
    },
    value: {
      type: Object,
      "default": function _default() {
        return {
          id: null
        };
      }
    },
    hide_submit: {
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.form = JSON.parse(JSON.stringify(this.value));

    if (!this.form.roles) {
      this.$set(this.form, "roles", []);
    }

    axios.post(this.data_url, {
      roles: this.roles.length <= 0 ? ["id", "name"] : false,
      permissions: this.permissions.length <= 0 ? ["id", "name"] : false,
      direct_permissions: this.form.id || false
    }).then(function (res) {
      // console.log(res)
      if (res.data.roles) {
        _this.roles = (res.data.roles || []).map(function (item) {
          return item.name;
        });
      }

      if (res.data.permissions) {
        _this.permissions = (res.data.permissions || []).map(function (item) {
          return item.name;
        });
      }

      if (res.data.direct_permissions) {
        _this.$set(_this.form, "direct_permissions", res.data.direct_permissions);
      } else {
        _this.form.direct_permissions = [];
      }
    })["catch"](function (err) {
      console.log(err.response);

      _this.$emit("error", err.response);
    });
  },
  watch: {
    form: {
      handler: function handler(value) {
        this.$emit('input', value);
      },
      deep: true
    }
  },
  data: function data() {
    return {
      temp_role: null,
      form: {},
      roles: [],
      permissions: [],
      direct_permissions: []
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      axios.post(this.submit_url, this.form).then(function (res) {
        _this2.$emit('created', res.data);
      })["catch"](function (err) {
        _this2.$emit('error', err.response);

        console.log(err.response.data); // this.$emit('error',res)
      });
    },
    hitSubmit: function hitSubmit() {
      this.$refs.submitBtn.click();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_DtHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/DtHeader */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtHeader.vue");
/* harmony import */ var _partials_DtFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/DtFooter */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue");
/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add */ "./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue");
/* harmony import */ var _partials_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/datatable */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/datatable.js");
/* harmony import */ var _partials_DtTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/DtTable */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtTable.vue");
/* harmony import */ var _partials_DataView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partials/DataView */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DataView.vue");
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
  name: "UsersList",
  components: {
    DtHeader: _partials_DtHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    DtFooter: _partials_DtFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    AddItem: _Add__WEBPACK_IMPORTED_MODULE_2__["default"],
    DtTable: _partials_DtTable__WEBPACK_IMPORTED_MODULE_4__["default"],
    DataView: _partials_DataView__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mixins: [_partials_datatable__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    password_enabled: {
      type: Boolean,
      "default": true
    },
    title: {
      type: String,
      "default": ''
    },
    api_url: {
      type: String,
      "default": "/backend/users/list"
    },
    trash_url: {
      type: String,
      "default": "/backend/users/delete"
    },
    submit_url: {
      type: String,
      "default": "/backend/users/store"
    },
    add_modal_title: {
      type: String,
      "default": 'Add / Edit User'
    },
    view_modal_title: {
      type: String,
      "default": 'View User'
    },
    custom_buttons: {
      type: Array,
      "default": function _default() {
        var _this = this;

        return [{
          text: 'Add',
          method: function method() {
            _this.$bvModal.show("addModal");
          }
        }];
      }
    }
  },
  data: function data() {
    return {
      form: {},
      fields: [{
        key: 'id',
        sortable: true
      }, {
        key: 'name',
        sortable: true
      }, {
        key: 'email',
        sortable: true
      }, {
        key: 'created_at',
        sortable: true
      }, {
        key: 'updated_at',
        sortable: true
      }, {
        key: 'action',
        sortable: false,
        searchable: false,
        thClass: 'text-right',
        tdClass: 'text-right'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-control-w-25 .custom-control {\n  min-width: 20%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=template&id=69eacad7&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=template&id=69eacad7& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-md-4" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.onSubmit($event)
            }
          }
        },
        [
          _c(
            "b-form-group",
            { attrs: { label: "Name *" } },
            [
              _c("b-form-input", {
                attrs: { placeholder: "Name", required: true },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { label: "Email" } },
            [
              _c("b-form-input", {
                attrs: {
                  type: "email",
                  placeholder: "Email Address",
                  required: true
                },
                model: {
                  value: _vm.form.email,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "email", $$v)
                  },
                  expression: "form.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          !_vm.form.id || (_vm.form.id && _vm.password_enabled)
            ? _c(
                "b-form-group",
                { attrs: { label: "Password " + (!_vm.form.id ? "*" : "") } },
                [
                  _c("b-form-input", {
                    attrs: {
                      type: "password",
                      autocomplete: "off",
                      name: "password",
                      required: !_vm.form.id
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { label: "Roles *" } },
            [
              _c(
                "b-form-select",
                {
                  attrs: { required: true, options: _vm.roles },
                  on: {
                    input: function(role) {
                      if (role && _vm.form.roles.indexOf(role) < 0) {
                        _vm.form.roles.push(role)
                      }
                    }
                  },
                  model: {
                    value: _vm.temp_role,
                    callback: function($$v) {
                      _vm.temp_role = $$v
                    },
                    expression: "temp_role"
                  }
                },
                [
                  _c("b-form-select-option", { attrs: { value: null } }, [
                    _vm._v("Please select an option")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.form.roles, function(role, key) {
                return _c(
                  "b-button",
                  {
                    key: key,
                    staticClass: "m-1",
                    attrs: { size: "sm", title: "Click to Remove" },
                    on: {
                      click: function() {
                        if (_vm.temp_role == _vm.form.roles[key]) {
                          _vm.temp_role = null
                        }
                        _vm.form.roles.splice(key, 1)
                      }
                    }
                  },
                  [
                    _c("b-icon-x"),
                    _vm._v(
                      "\n                    " +
                        _vm._s(role) +
                        "\n                "
                    )
                  ],
                  1
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              ref: "submitBtn",
              attrs: {
                variant: "primary",
                hidden: _vm.hide_submit,
                block: "",
                type: "submit"
              }
            },
            [_vm._v("SUBMIT")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-8" },
      [
        _c(
          "b-card",
          { attrs: { header: "Direct Permissions" } },
          [
            _c("b-form-checkbox-group", {
              staticClass: "custom-control-w-25",
              attrs: { options: _vm.permissions },
              model: {
                value: _vm.form.direct_permissions,
                callback: function($$v) {
                  _vm.$set(_vm.form, "direct_permissions", $$v)
                },
                expression: "form.direct_permissions"
              }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=template&id=6fed0fd8&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=template&id=6fed0fd8& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c("dt-table", {
        attrs: {
          title: _vm.title,
          fields: _vm.fields,
          datatable: _vm.datatable,
          custom_buttons: _vm.custom_buttons
        },
        scopedSlots: _vm._u([
          {
            key: "table",
            fn: function() {
              return [
                _c("b-table", {
                  ref: "datatable",
                  attrs: {
                    variant: "primary",
                    responsive: "md",
                    hover: "",
                    bordered: "",
                    small: "",
                    striped: "",
                    "head-variant": "dark",
                    items: _vm.getItems,
                    fields: _vm.fields,
                    id: "datatable",
                    filter: _vm.search,
                    "per-page": _vm.datatable.per_page,
                    "current-page": _vm.datatable.current_page
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "cell(action)",
                      fn: function(row) {
                        return [
                          _c(
                            "b-button-group",
                            { attrs: { size: "sm" } },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-modal",
                                      rawName: "v-b-modal.viewModal",
                                      modifiers: { viewModal: true }
                                    }
                                  ],
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function() {
                                      _vm.currentItem = JSON.parse(
                                        JSON.stringify(row.item)
                                      )
                                      _vm.currentItem.roles = _vm.currentItem.roles.map(
                                        function(item) {
                                          return item.name
                                        }
                                      )
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-eye" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-modal",
                                      rawName: "v-b-modal.addModal",
                                      modifiers: { addModal: true }
                                    }
                                  ],
                                  attrs: { variant: "warning" },
                                  on: {
                                    click: function() {
                                      _vm.form = JSON.parse(
                                        JSON.stringify(row.item)
                                      )
                                      _vm.form.roles = _vm.form.roles.map(
                                        function(item) {
                                          return item.name
                                        }
                                      )
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-edit" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "danger" },
                                  on: {
                                    click: function($event) {
                                      return _vm.trash(row.item.id)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-trash" })]
                              )
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                })
              ]
            },
            proxy: true
          }
        ]),
        model: {
          value: _vm.search,
          callback: function($$v) {
            _vm.search = $$v
          },
          expression: "search"
        }
      }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "addModal",
            title: _vm.add_modal_title,
            size: "xl",
            "header-bg-variant": "dark",
            "header-text-variant": "light"
          },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var close = ref.close
                return [
                  _c(
                    "b-button-group",
                    { staticClass: "float-right" },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.$refs.ItemAdd.hitSubmit()
                            }
                          }
                        },
                        [_vm._v("SUBMIT")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          on: {
                            click: function($event) {
                              return close()
                            }
                          }
                        },
                        [_vm._v("Close")]
                      )
                    ],
                    1
                  )
                ]
              }
            }
          ])
        },
        [
          _c("add-item", {
            ref: "ItemAdd",
            attrs: {
              hide_submit: true,
              submit_url: _vm.submit_url,
              password_enabled: _vm.password_enabled
            },
            on: {
              created: function(v) {
                _vm.$refs.datatable.refresh()
                _vm.$bvModal.hide("addModal")
                _vm.msgBox(v)
              },
              error: function(v) {
                return _vm.msgBox(v.data)
              }
            },
            model: {
              value: _vm.form,
              callback: function($$v) {
                _vm.form = $$v
              },
              expression: "form"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "viewModal",
            title: _vm.view_modal_title,
            size: "lg",
            "header-bg-variant": "dark",
            "header-text-variant": "light",
            "no-body": ""
          }
        },
        [
          _c("data-view", {
            attrs: {
              item: _vm.currentItem,
              fields: [
                {
                  key: "key",
                  sortable: true,
                  formatter: function(v) {
                    return _vm.startCase(v)
                  }
                },
                {
                  key: "value",
                  sortable: true,
                  formatter: function(data, key, row) {
                    if (
                      (row.key === "created_at" || key === "updated_at") &&
                      data
                    ) {
                      return data //apply date formats here using moment, dayjs, fetcha etc
                    } else if (
                      row.key === "roles" &&
                      data &&
                      Array.isArray(data)
                    ) {
                      return data.join(", ")
                    } else if (
                      row.key === "permissions" &&
                      data &&
                      Array.isArray(data)
                    ) {
                      return data
                        .map(function(item) {
                          return _vm.startCase(item.name)
                        })
                        .join(", ")
                    }
                    return data
                  }
                }
              ]
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue":
/*!********************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_69eacad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=69eacad7& */ "./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=template&id=69eacad7&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&lang=scss& */ "./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_69eacad7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_69eacad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=template&id=69eacad7&":
/*!***************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=template&id=69eacad7& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_69eacad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=69eacad7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/Add.vue?vue&type=template&id=69eacad7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_69eacad7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_69eacad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue":
/*!*********************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_6fed0fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=6fed0fd8& */ "./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=template&id=6fed0fd8&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_6fed0fd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_6fed0fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/users/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=template&id=6fed0fd8&":
/*!****************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=template&id=6fed0fd8& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6fed0fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=6fed0fd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/users/List.vue?vue&type=template&id=6fed0fd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6fed0fd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6fed0fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);