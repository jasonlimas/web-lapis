"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_invoices_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/invoices/index.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/invoices/index.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_apps_invoice_list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/apps/invoice-list.scss */ "./resources/js/src/assets/sass/apps/invoice-list.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'index',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta)({
      title: 'Invoice List'
    });
    var items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(['id', 'invoice', 'name', 'email', 'date', 'amount', 'status', 'actions']);
    var table_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      headings: {
        id: function id(h, row, index) {
          return '#';
        }
      },
      perPage: 10,
      perPageValues: [5, 10, 20, 50],
      skin: 'table table-hover',
      columnsClasses: {
        actions: 'actions text-center'
      },
      pagination: {
        nav: 'scroll',
        chunk: 5
      },
      texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:'
      },
      resizableColumns: false,
      sortable: ['invoice', 'name', 'email', 'date', 'amount', 'status'],
      sortIcon: {
        base: 'sort-icon-none',
        up: 'sort-icon-asc',
        down: 'sort-icon-desc'
      }
    });
    var selected_rows = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      bind_data();
    });

    var bind_data = function bind_data() {
      items.value = [{
        id: 1,
        invoice: '081451',
        thumb: 'profile-28.jpeg',
        name: 'Laurie Fox',
        email: 'lauriefox@company.com',
        date: '15 Dec 2020',
        amount: '2275.45',
        status: {
          key: 'Paid',
          "class": 'success'
        }
      }, {
        id: 2,
        invoice: '081452',
        thumb: 'profile-30.png',
        name: 'Alexander Gray',
        email: 'alexGray3188@gmail.com',
        date: '20 Dec 2020',
        amount: '1044.00',
        status: {
          key: 'Paid',
          "class": 'success'
        }
      }, {
        id: 3,
        invoice: '081681',
        thumb: 'profile-32.jpeg',
        name: 'James Taylor',
        email: 'jamestaylor468@gmail.com',
        date: '27 Dec 2020',
        amount: '20.00',
        status: {
          key: 'Pending',
          "class": 'danger'
        }
      }, {
        id: 4,
        invoice: '082693',
        thumb: 'profile-24.jpeg',
        name: 'Grace Roberts',
        email: 'graceRoberts@company.com',
        date: '31 Dec 2020',
        amount: '344.00',
        status: {
          key: 'Paid',
          "class": 'success'
        }
      }, {
        id: 5,
        invoice: '084743',
        thumb: 'profile-18.jpeg',
        name: 'Donna Rogers',
        email: 'donnaRogers@hotmail.com',
        date: '03 Jan 2021',
        amount: '405.15',
        status: {
          key: 'Paid',
          "class": 'success'
        }
      }, {
        id: 6,
        invoice: '086643',
        thumb: 'profile-11.jpeg',
        name: 'Amy Diaz',
        email: 'amy968@gmail.com',
        date: '14 Jan 2020',
        amount: '100.00',
        status: {
          key: 'Paid',
          "class": 'success'
        }
      }, {
        id: 7,
        invoice: '086773',
        thumb: 'profile-14.jpeg',
        name: 'Nia Hillyer',
        email: 'niahillyer666@comapny.com',
        date: '20 Jan 2021',
        amount: '59.21',
        status: {
          key: 'Pending',
          "class": 'danger'
        }
      }, {
        id: 8,
        invoice: '087916',
        thumb: 'profile-15.jpeg',
        name: 'Mary McDonald',
        email: 'maryDonald007@gamil.com',
        date: '25 Jan 2021',
        amount: '79.00',
        status: {
          key: 'Pending',
          "class": 'danger'
        }
      }, {
        id: 9,
        invoice: '089472',
        thumb: 'profile-1.jpeg',
        name: 'Andy King',
        email: 'kingandy07@company.com',
        date: '28 Jan 2021',
        amount: '149.00',
        status: {
          key: 'Paid',
          "class": 'success'
        }
      }, {
        id: 10,
        invoice: '091768',
        thumb: 'profile-7.jpeg',
        name: 'Vincent Carpenter',
        email: 'vincentcarpenter@gmail.com',
        date: '30 Jan 2021',
        amount: '400',
        status: {
          key: 'Paid',
          "class": 'success'
        }
      }, {
        id: 11,
        invoice: '095841',
        thumb: 'profile-8.jpeg',
        name: 'Kelly Young',
        email: 'youngkelly@hotmail.com',
        date: '06 Feb 2021',
        amount: '49.00',
        status: {
          key: 'Pending',
          "class": 'danger'
        }
      }, {
        id: 12,
        invoice: '098424',
        thumb: 'profile-12.jpeg',
        name: 'Alma Clarke',
        email: 'alma.clarke@gmail.com',
        date: '10 Feb 2021',
        amount: '234.40',
        status: {
          key: 'Paid',
          "class": 'success'
        }
      }];
    };

    var delete_row = function delete_row(item) {
      if (confirm('Are you sure want to delete selected row ?')) {
        if (item) {
          items.value = items.value.filter(function (d) {
            return d.id != item.id;
          });
        } else {
          items.value = items.value.filter(function (d) {
            return !selected_rows.value.includes(d.id);
          });
        }
      }
    }; //checkbox selection


    var selcted_row = function selcted_row(val) {
      selected_rows.value.push(val);
      return;
    };

    var __returned__ = {
      items: items,
      columns: columns,
      table_option: table_option,
      selected_rows: selected_rows,
      bind_data: bind_data,
      delete_row: delete_row,
      selcted_row: selcted_row,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      useMeta: _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/invoices/index.vue?vue&type=template&id=0cf26173":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/invoices/index.vue?vue&type=template&id=0cf26173 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "layout-px-spacing apps-invoice-list"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "navbar-nav flex-row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "page-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
  "class": "breadcrumb-one",
  "aria-label": "breadcrumb"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", {
  "class": "breadcrumb"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;"
}, "Apps")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Invoice List")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "row layout-top-spacing"
};
var _hoisted_4 = {
  "class": "col-xl-12 col-lg-12 col-sm-12 layout-spacing"
};
var _hoisted_5 = {
  "class": "panel br-6"
};
var _hoisted_6 = {
  "class": "custom-table"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-plus"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
})], -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tambah invoice ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-trash-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "3 6 5 6 21 6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "10",
  y1: "11",
  x2: "10",
  y2: "17"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "14",
  y1: "11",
  x2: "14",
  y2: "17"
})], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Hapus ");

var _hoisted_11 = [_hoisted_9, _hoisted_10];
var _hoisted_12 = {
  "class": "checkbox-outline-primary custom-control custom-checkbox"
};
var _hoisted_13 = ["id", "onChange"];
var _hoisted_14 = ["for"];
var _hoisted_15 = {
  "class": "inv-number"
};
var _hoisted_16 = {
  "class": "d-flex"
};
var _hoisted_17 = {
  "class": "align-self-center mb-0 admin-name"
};
var _hoisted_18 = {
  "class": "inv-date"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-calendar"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "16",
  y1: "2",
  x2: "16",
  y2: "6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "8",
  y1: "2",
  x2: "8",
  y2: "6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "3",
  y1: "10",
  x2: "21",
  y2: "10"
})], -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "mb-4 me-2 custom-dropdown dropdown btn-group"
};
var _hoisted_21 = {
  "class": "btn dropdown-toggle btn-icon-only",
  href: "#",
  role: "button",
  id: "pendingTask",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_22 = {
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    "width": "24px",
    "height": "24px"
  },
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-more-horizontal"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "1"
}, null, -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "19",
  cy: "12",
  r: "1"
}, null, -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "5",
  cy: "12",
  r: "1"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = [_hoisted_23, _hoisted_24, _hoisted_25];
var _hoisted_27 = {
  "class": "dropdown-menu dropdown-menu-end",
  "aria-labelledby": "pendingTask"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-edit-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12 20h9"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
})], -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ");

var _hoisted_30 = ["onClick"];

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-trash"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "3 6 5 6 21 6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
})], -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ");

var _hoisted_33 = [_hoisted_31, _hoisted_32];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_v_client_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-client-table");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_client_table, {
    data: $setup.items,
    columns: $setup.columns,
    options: $setup.table_option
  }, {
    beforeFilter: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps/invoice/add",
        "class": "btn me-2 btn-primary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_7, _hoisted_8];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn ml-2 btn-danger",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $setup.delete_row();
        })
      }, _hoisted_11)];
    }),
    id: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        variant: "primary",
        type: "checkbox",
        "class": "custom-control-input",
        id: 'chk' + props.row.id,
        onChange: function onChange($event) {
          return $setup.selcted_row(props.row.id);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": "custom-control-label",
        "for": 'chk' + props.row.id
      }, null, 8
      /* PROPS */
      , _hoisted_14)])];
    }),
    invoice: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps/invoice/preview"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, "#" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.invoice), 1
          /* TEXT */
          )];
        }),
        _: 2
        /* DYNAMIC */

      }, 1024
      /* DYNAMIC_SLOTS */
      )];
    }),
    name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.name), 1
      /* TEXT */
      )])];
    }),
    date: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.date), 1
      /* TEXT */
      )])];
    }),
    amount: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.amount), 1
      /* TEXT */
      )];
    }),
    status: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge inv-status", 'badge-' + props.row.status["class"]])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.status.key), 3
      /* TEXT, CLASS */
      )];
    }),
    actions: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_21, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_22, _hoisted_26))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        href: "javascript:void(0);",
        to: "/apps/invoice/edit",
        "class": "dropdown-item action-edit"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_28, _hoisted_29];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "javascript:void(0);",
        onClick: function onClick($event) {
          return $setup.delete_row(props.row);
        },
        "class": "dropdown-item action-delete"
      }, _hoisted_33, 8
      /* PROPS */
      , _hoisted_30)])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["data", "columns", "options"])])])])])]);
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/invoice-list.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/invoice-list.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.apps-invoice-list {\n  /* \n      Inv List Bottom Section\n  */\n}\n\n.apps-invoice-list .widget-content-area,\n.apps-invoice-list .dataTables_wrapper {\n  padding: 0;\n}\n\n.apps-invoice-list div.dataTables_wrapper button:hover {\n  transform: none;\n}\n\n.apps-invoice-list .inv-list-top-section {\n  margin: 20px 21px 20px 21px;\n}\n\n.apps-invoice-list div.dataTables_wrapper div.dataTables_length {\n  align-self: center;\n}\n\n.apps-invoice-list div.dataTables_wrapper div.dataTables_length label {\n  margin-bottom: 0;\n  margin-right: 15px;\n}\n\n.apps-invoice-list .dataTables_wrapper .dataTables_length select.form-control {\n  margin: 0;\n}\n\n.apps-invoice-list div.dataTables_wrapper div.dataTables_filter {\n  align-self: center;\n}\n\n.apps-invoice-list div.dataTables_wrapper div.dataTables_filter svg {\n  top: 5px;\n}\n\n.apps-invoice-list div.dataTables_wrapper div.dataTables_filter label {\n  margin: 0;\n  margin-right: 15px;\n}\n\n.apps-invoice-list div.dataTables_wrapper div.dataTables_filter input {\n  margin: 0;\n}\n\n.apps-invoice-list .table-responsive {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.apps-invoice-list table.dataTable {\n  margin: 0 !important;\n}\n\n.apps-invoice-list .table > thead {\n  border-top: none;\n  border-bottom: none;\n}\n\n.apps-invoice-list .table > thead > tr > th {\n  text-transform: initial;\n  font-weight: 600;\n  border-top: none;\n  background: rgba(186, 231, 255, 0.34);\n  border-right: none;\n  border-left: none;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n  transition: all 0.1s ease;\n  padding: 10px 21px 10px 21px;\n  color: #515365;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 1px;\n  white-space: nowrap;\n}\n\n.apps-invoice-list .table > thead > tr > th:first-child:before, .apps-invoice-list .table > thead > tr > th:first-child:after {\n  display: none;\n}\n\n.apps-invoice-list .table > thead > tr > th:last-child:before, .apps-invoice-list .table > thead > tr > th:last-child:after {\n  display: none;\n}\n\n.apps-invoice-list .table > tbody:before {\n  display: none;\n}\n\n.apps-invoice-list .table > tbody > tr > td {\n  padding: 0;\n  padding: 10px 21px 10px 21px;\n  color: #515365;\n  letter-spacing: normal;\n  white-space: nowrap;\n}\n\n.apps-invoice-list .table > tbody > tr > td:first-child {\n  border-top-left-radius: 6px;\n}\n\n.apps-invoice-list .table > tbody > tr > td .inv-number {\n  color: #805dca;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: left;\n}\n\n.apps-invoice-list .table > tbody > tr > td .user-name {\n  color: #515365;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.14px;\n  margin-bottom: 0;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: break-word;\n}\n\n.apps-invoice-list .table > tbody > tr > td .inv-email {\n  color: #515365;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.14px;\n  margin-bottom: 0;\n  margin-top: 0;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: break-word;\n}\n\n.apps-invoice-list .table > tbody > tr > td .inv-email svg {\n  width: 17px;\n  height: 17px;\n  vertical-align: text-bottom;\n  color: #805dca;\n  fill: #f3effc;\n  stroke-width: 1.5;\n}\n\n.apps-invoice-list .table > tbody > tr > td .inv-date svg {\n  width: 17px;\n  height: 17px;\n  vertical-align: text-top;\n  color: #1abc9c;\n  fill: #ddf5f0;\n  stroke-width: 1.5;\n}\n\n.apps-invoice-list .table > tbody > tr > td .inv-status {\n  font-weight: 500;\n  letter-spacing: 0.14px;\n  padding: 0.3rem 0.5rem;\n  text-align: center;\n  box-shadow: none;\n  transform: none;\n}\n\n.apps-invoice-list .table > tbody > tr > td .inv-status.badge-success {\n  background-color: #ddf5f0;\n  color: #1abc9c;\n}\n\n.apps-invoice-list .table > tbody > tr > td .inv-status.badge-danger {\n  color: #e7515a;\n  background-color: #fff5f5;\n}\n\n.apps-invoice-list .table > tbody > tr > td .dropdown .dropdown-toggle svg {\n  stroke-width: 1px;\n}\n\n.apps-invoice-list .table > tbody > tr > td .dropdown.show .dropdown-toggle svg {\n  stroke-width: 1px;\n  color: #7367f0;\n}\n\n.apps-invoice-list .table > tbody > tr > td .dropdown .dropdown-menu {\n  padding: 9px !important;\n}\n\n.apps-invoice-list .table > tbody > tr > td .dropdown .dropdown-menu a.dropdown-item {\n  background: #e7f7ff;\n  padding: 6px 11px;\n}\n\n.apps-invoice-list .table > tbody > tr > td .dropdown .dropdown-menu a.dropdown-item svg {\n  width: 16px;\n  height: 16px;\n  margin-right: 7px;\n  vertical-align: text-top;\n}\n\n.apps-invoice-list .table > tbody > tr > td .dropdown .dropdown-menu a.dropdown-item.action-edit {\n  background: #e7f7ff;\n  color: #2196f3;\n  margin-bottom: 7px;\n}\n\n.apps-invoice-list .table > tbody > tr > td .dropdown .dropdown-menu a.dropdown-item.action-edit svg {\n  color: #2196f3;\n}\n\n.apps-invoice-list .table > tbody > tr > td .dropdown .dropdown-menu a.dropdown-item.action-delete {\n  background: #fff5f5;\n  color: #e7515a;\n}\n\n.apps-invoice-list .table > tbody > tr > td .dropdown .dropdown-menu a.dropdown-item.action-delete svg {\n  color: #e7515a;\n}\n\n.apps-invoice-list .inv-list-bottom-section {\n  padding: 15px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/apps/invoice-list.scss":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/sass/apps/invoice-list.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_invoice_list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./invoice-list.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/invoice-list.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_invoice_list_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_invoice_list_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/invoices/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/invoices/index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_0cf26173__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0cf26173 */ "./resources/js/src/views/invoices/index.vue?vue&type=template&id=0cf26173");
/* harmony import */ var _index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/invoices/index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_web_lapis_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_web_lapis_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_0cf26173__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/invoices/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/invoices/index.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/invoices/index.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/invoices/index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/invoices/index.vue?vue&type=template&id=0cf26173":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/invoices/index.vue?vue&type=template&id=0cf26173 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_0cf26173__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_0cf26173__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=0cf26173 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/invoices/index.vue?vue&type=template&id=0cf26173");


/***/ })

}]);