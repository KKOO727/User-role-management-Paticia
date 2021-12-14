(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Users: _Users__WEBPACK_IMPORTED_MODULE_1__["default"],
    Roles: _Roles__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    submit_url: {
      type: String,
      "default": null
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
    this.form = JSON.parse(JSON.stringify(this.value));
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
      url: null,
      form: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      axios.post(this.submit_url, this.form).then(function (res) {
        _this.$emit('created', res.data);
      })["catch"](function (err) {
        _this.$emit('error', err.response);

        console.log(err.response.data); // this.$emit('error',res)
      });
    },
    hitSubmit: function hitSubmit() {
      this.$refs.submitBtn.click();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue");
/* harmony import */ var _partials_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/datatable */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/datatable.js");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue");
/* harmony import */ var _Roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Roles */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PermissionsList",
  props: {
    title: {
      type: String,
      "default": ''
    },
    debounce: {
      type: Number,
      "default": 300
    },
    api_url: {
      type: String,
      "default": "/backend/permissions/list"
    },
    trash_url: {
      type: String,
      "default": "/backend/permissions/delete"
    },
    submit_url: {
      type: String,
      "default": "/backend/permissions/store"
    },
    add_modal_title: {
      type: String,
      "default": 'Add / Edit Permission'
    },
    view_modal_title: {
      type: String,
      "default": 'View Permission'
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
  components: {
    DataView: _partials_DataView__WEBPACK_IMPORTED_MODULE_5__["default"],
    DtTable: _partials_DtTable__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddItem: _Add__WEBPACK_IMPORTED_MODULE_0__["default"],
    Users: _Users__WEBPACK_IMPORTED_MODULE_2__["default"],
    Roles: _Roles__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_partials_datatable__WEBPACK_IMPORTED_MODULE_1__["default"]],
  mounted: function mounted() {
    var _this2 = this;

    this.$root.$on('bv::modal::hidden', function (bvEvent, modalId) {
      if (modalId === 'addModal') {
        _this2.form = {};
      } else if (modalId === 'viewModal') {
        _this2.currentItem = {};
      }
    });
  },
  data: function data() {
    return {
      _: null,
      form: {},
      fields: [{
        key: 'id',
        sortable: true,
        visible: true
      }, {
        key: 'name',
        sortable: true,
        visible: true
      }, {
        key: 'guard_name',
        sortable: true,
        visible: true,
        label: "Guard"
      }, {
        key: 'description',
        sortable: true,
        visible: true
      }, {
        key: 'created_at',
        sortable: true,
        visible: true
      }, {
        key: 'updated_at',
        sortable: true,
        visible: true
      }, {
        key: 'action',
        sortable: false,
        searchable: false,
        thClass: 'text-right',
        tdClass: 'text-right'
      }]
    };
  },
  created: function created() {
    this._ = window._;
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_DtFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/DtFooter */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue");
/* harmony import */ var _partials_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/datatable */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/datatable.js");
/* harmony import */ var _partials_TypeHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/TypeHead */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TypeHead: _partials_TypeHead__WEBPACK_IMPORTED_MODULE_2__["default"],
    DtFooter: _partials_DtFooter__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    title: {
      type: String,
      "default": ''
    },
    api_url: {
      type: String,
      "default": "/backend/permissions/roles"
    },
    trash_url: {
      type: String,
      "default": "/backend/permissions/revokePermissionToRole"
    },
    permission_id: {
      type: Number,
      "default": 0,
      required: true
    },
    disable_action: {
      type: Boolean,
      "default": false
    }
  },
  // mixins: [Datatable],
  data: function data() {
    return {
      _: null,
      form: {},
      fields: [{
        key: 'id',
        sortable: true,
        visible: true
      }, {
        key: 'name',
        sortable: true,
        visible: true
      }, {
        key: 'description',
        sortable: true,
        visible: true
      }, {
        key: 'action',
        sortable: false,
        searchable: false,
        thClass: {
          'text-right': true,
          "d-none": this.disable_action
        },
        tdClass: {
          'text-right': true,
          "d-none": this.disable_action
        }
      }],
      datatable: {
        per_page: 10,
        current_page: 1,
        total: 0,
        from: 0,
        to: 0
      }
    };
  },
  created: function created() {
    this._ = window._;
  },
  methods: {
    refresh: function refresh() {
      this.$refs.datatable.refresh();
    },
    searchRoles: function searchRoles(search) {
      return axios.post("/backend/roles/search", {
        search: search
      });
    },
    getItems: function getItems(ctx) {
      var _this = this;

      // console.log(ctx)
      var columns = [];

      if (ctx.filter) {
        for (var x in this.fields) {
          if (_.isBoolean(this.fields[x].visible) && this.fields[x].visible) {
            if (!_.isBoolean(this.fields[x].searchable) || this.fields[x].searchable) {
              columns.push(this.fields[x].key);
            }
          }
        }
      }

      if (!this.permission_id) {
        return [];
      }

      return axios.post(this.api_url + "?page=" + (ctx.currentPage ? ctx.currentPage : 1), {
        per_page: this.datatable.per_page,
        orderBy: ctx.sortBy,
        order: ctx.sortDesc ? 'desc' : 'asc',
        filter: ctx.filter,
        columns: columns,
        permission_id: this.permission_id
      }).then(function (res) {
        // console.log(res.data);
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
    assigneRoleToPermission: function assigneRoleToPermission(role) {
      var _this2 = this;

      console.log({
        permission_id: this.permission_id,
        role_id: role.id
      });
      axios.post("/backend/permissions/assignRoleToPermission", {
        permission_id: this.permission_id,
        role_id: role.id
      }).then(function (res) {
        _this2.msgBox(res.data);

        _this2.refresh();
      })["catch"](function (err) {
        _this2.msgBox(err.response.data);

        console.log(err.response);
      });
    },
    detach: function detach(id) {
      var _this3 = this;

      this.$bvModal.msgBoxConfirm('Are you sure?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: false,
        headerBgVariant: 'dark',
        headerTextVariant: 'light'
      }).then(function (value) {
        if (value) {
          axios.post(_this3.trash_url, {
            permission_id: _this3.permission_id,
            role_id: id
          }).then(function (res) {
            console.log(res);

            _this3.msgBox(res.data);

            _this3.$refs.datatable.refresh();
          })["catch"](function (err) {
            _this3.msgBox(err.response);

            console.log(err.response);
          });
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    msgBox: _partials_datatable__WEBPACK_IMPORTED_MODULE_1__["msgBox"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_DtFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/DtFooter */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/DtFooter.vue");
/* harmony import */ var _partials_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/datatable */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/datatable.js");
/* harmony import */ var _partials_TypeHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/TypeHead */ "./resources/wovosoft/laravel-permissions/js/src/components/partials/TypeHead.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TypeHead: _partials_TypeHead__WEBPACK_IMPORTED_MODULE_2__["default"],
    DtFooter: _partials_DtFooter__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    title: {
      type: String,
      "default": ''
    },
    api_url: {
      type: String,
      "default": "/backend/permissions/users"
    },
    trash_url: {
      type: String,
      "default": "/backend/permissions/revokePermissionToUser"
    },
    permission_id: {
      type: Number,
      "default": 0,
      required: true
    },
    disable_action: {
      type: Boolean,
      "default": false
    }
  },
  // mixins: [Datatable],
  data: function data() {
    return {
      _: null,
      form: {},
      fields: [{
        key: 'id',
        sortable: true,
        visible: true
      }, {
        key: 'name',
        sortable: true,
        visible: true
      }, {
        key: 'email',
        sortable: true,
        visible: true
      }, {
        key: 'action',
        sortable: false,
        searchable: false,
        thClass: {
          'text-right': true,
          "d-none": this.disable_action
        },
        tdClass: {
          'text-right': true,
          "d-none": this.disable_action
        }
      }],
      datatable: {
        per_page: 10,
        current_page: 1,
        total: 0,
        from: 0,
        to: 0
      }
    };
  },
  created: function created() {
    this._ = window._;
  },
  methods: {
    refresh: function refresh() {
      this.$refs.datatable.refresh();
    },
    searchUsers: function searchUsers(search) {
      return axios.post("/backend/users/search", {
        search: search
      });
    },
    assigneUserToPermission: function assigneUserToPermission(user) {
      var _this = this;

      axios.post("/backend/permissions/assignUserToPermission", {
        permission_id: this.permission_id,
        user_id: user.id
      }).then(function (res) {
        _this.msgBox(res.data);

        _this.refresh();
      })["catch"](function (err) {
        _this.msgBox(err.response.data);

        console.log(err.response);
      });
    },
    getItems: function getItems(ctx) {
      var _this2 = this;

      // console.log(ctx)
      if (!this.permission_id) {
        return [];
      }

      return axios.post(this.api_url + "?page=" + (ctx.currentPage ? ctx.currentPage : 1), {
        per_page: this.datatable.per_page,
        orderBy: ctx.sortBy,
        order: ctx.sortDesc ? 'desc' : 'asc',
        filter: ctx.filter,
        columns: Object(_partials_datatable__WEBPACK_IMPORTED_MODULE_1__["setColumns"])(this),
        permission_id: this.permission_id
      }).then(function (res) {
        // console.log(res.data);
        _this2.datatable.total = res.data.total;
        _this2.datatable.from = res.data.from;
        _this2.datatable.to = res.data.to;
        _this2.datatable.current_page = res.data.current_page;
        return res.data.data;
      })["catch"](function (err) {
        console.log(err.response);
        return [];
      });
    },
    detach: function detach(id) {
      var _this3 = this;

      this.$bvModal.msgBoxConfirm('Are you sure?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: false,
        headerBgVariant: 'dark',
        headerTextVariant: 'light'
      }).then(function (value) {
        if (value) {
          axios.post(_this3.trash_url, {
            permission_id: _this3.permission_id,
            user_id: id
          }).then(function (res) {
            console.log(res);

            _this3.msgBox(res.data);

            _this3.$refs.datatable.refresh();
          })["catch"](function (err) {
            _this3.msgBox(err.response);

            console.log(err.response);
          });
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    msgBox: _partials_datatable__WEBPACK_IMPORTED_MODULE_1__["msgBox"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=template&id=b9d9a4da&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=template&id=b9d9a4da& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col" }, [
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
            { attrs: { label: "Guard Name" } },
            [
              _c("b-form-input", {
                attrs: { placeholder: "Guard Name" },
                model: {
                  value: _vm.form.guard_name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "guard_name", $$v)
                  },
                  expression: "form.guard_name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { label: "Description" } },
            [
              _c("b-form-textarea", {
                attrs: { rows: 7, placeholder: "Description" },
                model: {
                  value: _vm.form.description,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "description", $$v)
                  },
                  expression: "form.description"
                }
              })
            ],
            1
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
    _vm.form.id
      ? _c(
          "div",
          { staticClass: "col-md-8" },
          [
            _c("roles", {
              attrs: { title: "Assigned Roles", permission_id: _vm.form.id }
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("users", {
              attrs: { title: "Assigned Users", permission_id: _vm.form.id }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=template&id=5bd1049c&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=template&id=5bd1049c& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
                                    click: function($event) {
                                      _vm.currentItem = row.item
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
                                    click: function($event) {
                                      _vm.form = JSON.parse(
                                        JSON.stringify(row.item)
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
            "header-text-variant": "light",
            lazy: ""
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
            attrs: { hide_submit: true, submit_url: _vm.submit_url },
            on: {
              created: function(v) {
                _vm.$refs.datatable.refresh()
                _vm.$bvModal.hide("addModal")
                _vm.msgBox(v)
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
            "no-body": "",
            lazy: ""
          }
        },
        [
          _c("data-view", { attrs: { item: _vm.currentItem } }),
          _vm._v(" "),
          _c("roles", {
            attrs: {
              title: "Assigned Roles",
              permission_id: _vm.currentItem.id
            }
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("users", {
            attrs: {
              title: "Assigned Users",
              permission_id: _vm.currentItem.id
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=template&id=7ef8872f&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=template&id=7ef8872f& ***!
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
      _c(
        "b-card",
        {
          attrs: { "no-body": "" },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("h4", { staticClass: "p-0 m-0" }, [
                        _vm._v(_vm._s(_vm.title))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col" },
                      [
                        _c("type-head", {
                          attrs: {
                            "search-items": _vm.searchRoles,
                            autocomplete: "off",
                            placeholder: "Search & Assign Roles"
                          },
                          on: { selected: _vm.assigneRoleToPermission },
                          scopedSlots: _vm._u([
                            {
                              key: "option",
                              fn: function(item) {
                                return [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(item.id) +
                                      " # " +
                                      _vm._s(item.name) +
                                      "\n                        "
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c("dt-footer", { attrs: { datatable: _vm.datatable } })
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("b-table", {
            ref: "datatable",
            staticClass: "m-0 border-0",
            attrs: {
              variant: "primary",
              hover: "",
              bordered: "",
              small: "",
              striped: "",
              "head-variant": "dark",
              items: _vm.getItems,
              fields: _vm.fields,
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
                            attrs: { variant: "danger", title: "Revoke Role" },
                            on: {
                              click: function($event) {
                                return _vm.detach(row.item.id)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-trash" }),
                            _vm._v(" Detach\n                    ")
                          ]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=template&id=7f2de8fa&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=template&id=7f2de8fa& ***!
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
      _c(
        "b-card",
        {
          attrs: { "no-body": "" },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("h4", { staticClass: "p-0 m-0" }, [
                        _vm._v(_vm._s(_vm.title))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col" },
                      [
                        _c("type-head", {
                          attrs: {
                            "search-items": _vm.searchUsers,
                            autocomplete: "off",
                            placeholder: "Search & Assign Users"
                          },
                          on: { selected: _vm.assigneUserToPermission },
                          scopedSlots: _vm._u([
                            {
                              key: "option",
                              fn: function(item) {
                                return [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(item.id) +
                                      " # " +
                                      _vm._s(item.name) +
                                      " | " +
                                      _vm._s(item.email) +
                                      "\n                        "
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c("dt-footer", { attrs: { datatable: _vm.datatable } })
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("b-table", {
            ref: "datatable",
            staticClass: "m-0 border-0",
            attrs: {
              variant: "primary",
              hover: "",
              bordered: "",
              small: "",
              striped: "",
              "head-variant": "dark",
              items: _vm.getItems,
              fields: _vm.fields,
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
                            attrs: { variant: "danger", title: "Revoke User" },
                            on: {
                              click: function($event) {
                                return _vm.detach(row.item.id)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-trash" }),
                            _vm._v(" Detach\n                    ")
                          ]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
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

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue":
/*!**************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_b9d9a4da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=b9d9a4da& */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=template&id=b9d9a4da&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_b9d9a4da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_b9d9a4da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=template&id=b9d9a4da&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=template&id=b9d9a4da& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_b9d9a4da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=b9d9a4da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Add.vue?vue&type=template&id=b9d9a4da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_b9d9a4da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_b9d9a4da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue":
/*!***************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_5bd1049c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=5bd1049c& */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=template&id=5bd1049c&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_5bd1049c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_5bd1049c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=template&id=5bd1049c&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=template&id=5bd1049c& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_5bd1049c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=5bd1049c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/List.vue?vue&type=template&id=5bd1049c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_5bd1049c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_5bd1049c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue":
/*!****************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Roles_vue_vue_type_template_id_7ef8872f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles.vue?vue&type=template&id=7ef8872f& */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=template&id=7ef8872f&");
/* harmony import */ var _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Roles_vue_vue_type_template_id_7ef8872f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Roles_vue_vue_type_template_id_7ef8872f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=template&id=7ef8872f&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=template&id=7ef8872f& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_7ef8872f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=template&id=7ef8872f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Roles.vue?vue&type=template&id=7ef8872f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_7ef8872f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_7ef8872f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue":
/*!****************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_7f2de8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=7f2de8fa& */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=template&id=7f2de8fa&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_7f2de8fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_7f2de8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=template&id=7f2de8fa&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=template&id=7f2de8fa& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_7f2de8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=7f2de8fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/wovosoft/laravel-permissions/js/src/components/permissions/Users.vue?vue&type=template&id=7f2de8fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_7f2de8fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_7f2de8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);