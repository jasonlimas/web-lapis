(self["webpackChunk"] = self["webpackChunk"] || []).push([["components-lightbox"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/lightbox.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/lightbox.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_easy_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-easy-lightbox */ "./node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.esm.min.js");
/* harmony import */ var _assets_sass_components_custom_lightbox_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/sass/components/custom-lightbox.scss */ "./resources/js/src/assets/sass/components/custom-lightbox.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'lightbox',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_3__.useMeta)({
      title: 'Lightbox'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var index = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var allControls = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var visible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      initData();
    });
    var initData = function initData() {
      if (allControls.value) {
        items.value = [{
          src: __webpack_require__(/*! @/assets/images/lightbox-1.jpg */ "./resources/js/src/assets/images/lightbox-1.jpg"),
          title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
          description: 'Photo: Samuel Rohl'
        }, {
          src: __webpack_require__(/*! @/assets/images/lightbox-8.jpeg */ "./resources/js/src/assets/images/lightbox-8.jpeg"),
          title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
          description: 'Photo: Samuel Rohl'
        }, {
          src: __webpack_require__(/*! @/assets/images/lightbox-3.jpeg */ "./resources/js/src/assets/images/lightbox-3.jpeg"),
          title: "Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.",
          description: 'Photo: Michael Hull'
        }, {
          src: __webpack_require__(/*! @/assets/images/lightbox-2.jpeg */ "./resources/js/src/assets/images/lightbox-2.jpeg"),
          thumb: __webpack_require__(/*! @/assets/images/lightbox-2.jpeg */ "./resources/js/src/assets/images/lightbox-2.jpeg"),
          title: 'This is dummy caption.',
          description: 'Photo: Folkert Gorter'
        }, {
          src: __webpack_require__(/*! @/assets/images/lightbox-14.jpeg */ "./resources/js/src/assets/images/lightbox-14.jpeg"),
          title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
          description: 'Photo: Thomas Lefebvre'
        }, {
          src: __webpack_require__(/*! @/assets/images/lightbox-15.jpeg */ "./resources/js/src/assets/images/lightbox-15.jpeg"),
          title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
          description: 'Photo: Thomas Lefebvre'
        }];
      } else {
        items.value = [{
          src: __webpack_require__(/*! @/assets/images/lightbox-1.jpg */ "./resources/js/src/assets/images/lightbox-1.jpg")
        }, {
          src: __webpack_require__(/*! @/assets/images/lightbox-8.jpeg */ "./resources/js/src/assets/images/lightbox-8.jpeg")
        }, {
          src: __webpack_require__(/*! @/assets/images/lightbox-3.jpeg */ "./resources/js/src/assets/images/lightbox-3.jpeg")
        }, {
          src: __webpack_require__(/*! @/assets/images/lightbox-2.jpeg */ "./resources/js/src/assets/images/lightbox-2.jpeg")
        }, {
          src: __webpack_require__(/*! @/assets/images/lightbox-14.jpeg */ "./resources/js/src/assets/images/lightbox-14.jpeg")
        }, {
          src: __webpack_require__(/*! @/assets/images/lightbox-15.jpeg */ "./resources/js/src/assets/images/lightbox-15.jpeg")
        }];
      }
    };
    var toggleCode = function toggleCode(name) {
      if (code_arr.value.includes(name)) {
        code_arr.value = code_arr.value.filter(function (d) {
          return d != name;
        });
      } else {
        code_arr.value.push(name);
      }
    };
    var __returned__ = {
      code_arr: code_arr,
      index: index,
      allControls: allControls,
      visible: visible,
      items: items,
      initData: initData,
      toggleCode: toggleCode,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get VueEasyLightbox() {
        return vue_easy_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"];
      },
      get useMeta() {
        return _composables_use_meta__WEBPACK_IMPORTED_MODULE_3__.useMeta;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/lightbox.vue?vue&type=template&id=43df83b4":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/lightbox.vue?vue&type=template&id=43df83b4 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "layout-px-spacing"
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
}, "Components")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Lightbox")])])])])])], -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://www.npmjs.com/package/vue-easy-lightbox\" class=\"text-info\"> https://www.npmjs.com/package/vue-easy-lightbox </a></div></div></div>", 1);
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-12 layout-spacing layout-top-spacing"
};
var _hoisted_6 = {
  "class": "statbox panel box box-shadow"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lightbox")])])], -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "panel-body"
};
var _hoisted_9 = {
  "class": "radio-info mb-4 custom-control custom-radio"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "rdo1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" All controls"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "caption, slideshow, thumbnails and fullscreen buttons, tap to toggle controls")], -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "radio-info mb-4 custom-control custom-radio"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "rdo2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Minimal"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "no caption, no slideshow, no thumbnails, no fullscreen, tap to close")], -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "demo-gallery"
};
var _hoisted_14 = ["onClick"];
var _hoisted_15 = ["src"];
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "clearfix"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.allControls = $event;
    }),
    type: "radio",
    "class": "custom-control-input",
    value: true,
    id: "rdo1",
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $setup.initData();
    })
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.allControls]]), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.allControls = $event;
    }),
    type: "radio",
    "class": "custom-control-input",
    value: false,
    id: "rdo2",
    onChange: _cache[3] || (_cache[3] = function ($event) {
      return $setup.initData();
    })
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.allControls]]), _hoisted_12])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["VueEasyLightbox"], {
    visible: $setup.visible,
    imgs: $setup.items,
    index: $setup.index,
    scrollDisabled: "",
    moveDisabled: "",
    loop: "",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      minimal: !$setup.allControls
    }),
    onHide: _cache[4] || (_cache[4] = function ($event) {
      $setup.index = null;
      $setup.visible = false;
    })
  }, null, 8 /* PROPS */, ["visible", "imgs", "index", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.items, function (item, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: i,
      href: "javascript:;",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("img-".concat(i + 1)),
      onClick: function onClick($event) {
        $setup.index = i;
        $setup.visible = true;
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: item.src,
      alt: "image-gallery"
    }, null, 8 /* PROPS */, _hoisted_15)], 10 /* CLASS, PROPS */, _hoisted_14);
  }), 128 /* KEYED_FRAGMENT */))]), _hoisted_16])])])])]);
}

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-1.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-1.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-1-288fd31634eceac740f5b15a41e4c51e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-14.jpeg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-14.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-14-e0023d7f5bb8c52f5f7b127c14181547.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-15.jpeg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-15.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-15-229153c205256cea21ce4ee7b0957184.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-2.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-2.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-2-f70f0b025fe23e6f6d33bbf85f154c83.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-3.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-3.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-3-36ae681041ecad857f106fc1db4ad72b.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-8.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-8.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-8-90d2e47bf1c35fb9893f6466dd03bce1.jpeg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/components/custom-lightbox.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/components/custom-lightbox.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.demo-gallery {\n  width: 100%;\n  height: auto;\n  float: left;\n}\n\n.demo-gallery a {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-touch-callout: none;\n  display: block;\n  float: left;\n  line-height: 0;\n}\n\n.demo-gallery a img {\n  width: 100%;\n  padding: 4px;\n  border-radius: 8px;\n}\n\n.demo-gallery .img-1 {\n  width: 33.333333%;\n}\n\n.demo-gallery .img-2 {\n  width: 33.333333%;\n}\n\n.demo-gallery .img-3 {\n  width: 33.333333%;\n}\n\n.demo-gallery .img-4 {\n  width: 66.666667%;\n}\n\n.demo-gallery .img-5 {\n  width: 33.333333%;\n}\n\n.demo-gallery .img-6 {\n  width: 33.333333%;\n}\n\n.demo-gallery .img-7 {\n  width: 33.333333%;\n}\n\n.demo-gallery figure {\n  display: none;\n}\n\n.vel-modal {\n  background-color: rgba(30, 30, 30, 0.9);\n}\n\n.vel-modal.minimal .vel-toolbar {\n  display: none;\n}\n\n.vel-modal .vel-toolbar {\n  top: 6px;\n  bottom: inherit;\n  right: 45px;\n  left: inherit;\n  transform: none;\n}\n\n.vel-modal .vel-img-title {\n  font-size: 13px;\n  line-height: 20px;\n  color: #ccc;\n  bottom: 30px;\n}\n\n.vel-modal .btn__close .vel-icon {\n  width: 24px;\n  height: 24px;\n}\n\n@media (max-width: 767px) {\n  .demo-gallery .img-1,\n  .demo-gallery .img-4,\n  .demo-gallery .img-7 {\n    width: 100% !important;\n  }\n  .demo-gallery .img-2,\n  .demo-gallery .img-3,\n  .demo-gallery .img-5,\n  .demo-gallery .img-6 {\n    width: 50% !important;\n  }\n}\n@media (max-width: 575px) {\n  .demo-gallery .img-1,\n  .demo-gallery .img-2,\n  .demo-gallery .img-3,\n  .demo-gallery .img-4,\n  .demo-gallery .img-5,\n  .demo-gallery .img-6,\n  .demo-gallery .img-7 {\n    width: 100% !important;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/components/custom-lightbox.scss":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/sass/components/custom-lightbox.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_custom_lightbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./custom-lightbox.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/components/custom-lightbox.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_custom_lightbox_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_custom_lightbox_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/components/lightbox.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/components/lightbox.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightbox_vue_vue_type_template_id_43df83b4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox.vue?vue&type=template&id=43df83b4 */ "./resources/js/src/views/components/lightbox.vue?vue&type=template&id=43df83b4");
/* harmony import */ var _lightbox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightbox.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/components/lightbox.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_lightbox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_lightbox_vue_vue_type_template_id_43df83b4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/components/lightbox.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/components/lightbox.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/lightbox.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_lightbox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_lightbox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lightbox.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/lightbox.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/components/lightbox.vue?vue&type=template&id=43df83b4":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/components/lightbox.vue?vue&type=template&id=43df83b4 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_lightbox_vue_vue_type_template_id_43df83b4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_lightbox_vue_vue_type_template_id_43df83b4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lightbox.vue?vue&type=template&id=43df83b4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/lightbox.vue?vue&type=template&id=43df83b4");


/***/ }),

/***/ "./node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.esm.min.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.esm.min.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function v(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===o&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}v(".vel-fade-enter-active,.vel-fade-leave-active{-webkit-transition:all .3s ease;transition:all .3s ease}.vel-fade-enter-from,.vel-fade-leave-to{opacity:0}.vel-img-swiper{position:relative;display:block}.vel-modal{z-index:9998;position:fixed;top:0;left:0;right:0;bottom:0;margin:0;background:rgba(0,0,0,.5)}.vel-img-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50% -50%);transform:translate(-50% -50%);-webkit-transition:.3s linear;transition:.3s linear;will-change:transform opacity}.vel-img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-width:80vw;max-height:80vh;display:block;position:relative;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out, -webkit-transform .3s ease-in-out;-webkit-box-shadow:0 5px 20px 2px rgba(0,0,0,.7);box-shadow:0 5px 20px 2px rgba(0,0,0,.7);background-color:rgba(0,0,0,.7)}@media (max-width:750px){.vel-img{max-width:85vw;max-height:95vh}}.vel-btns-wrapper .btn__close,.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;opacity:.6;font-size:32px;color:#fff;-webkit-transition:.15s linear;transition:.15s linear;-webkit-tap-highlight-color:transparent;outline:none}.vel-btns-wrapper .btn__close:hover,.vel-btns-wrapper .btn__next:hover,.vel-btns-wrapper .btn__prev:hover{opacity:1}.vel-btns-wrapper .btn__close.disable,.vel-btns-wrapper .btn__close.disable:hover,.vel-btns-wrapper .btn__next.disable,.vel-btns-wrapper .btn__next.disable:hover,.vel-btns-wrapper .btn__prev.disable,.vel-btns-wrapper .btn__prev.disable:hover{cursor:default;opacity:.2}.vel-btns-wrapper .btn__next{right:12px}.vel-btns-wrapper .btn__prev{left:12px}.vel-btns-wrapper .btn__close{top:24px;right:10px}@media (max-width:750px){.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{font-size:20px}.vel-btns-wrapper .btn__close{font-size:24px}.vel-btns-wrapper .btn__next{right:4px}.vel-btns-wrapper .btn__prev{left:4px}}.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:12px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{right:12px;left:auto}@media (max-width:750px){.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:4px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{right:4px;left:auto}}.vel-modal.is-rtl .vel-img-title{direction:rtl}");v('.vel-loading{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-loading .ring{display:inline-block;width:64px;height:64px}.vel-loading .ring:after{content:" ";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border-color:hsla(0,0%,100%,.7) transparent;border-style:solid;border-width:5px;-webkit-animation:ring 1.2s linear infinite;animation:ring 1.2s linear infinite}@-webkit-keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}');v(".vel-on-error{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-on-error .icon{font-size:80px;color:#aaa}");v(".vel-img-title{overflow:hidden;position:absolute;left:50%;bottom:60px;-webkit-transform:translate(-50%);transform:translate(-50%);max-width:80%;font-size:12px;line-height:1;text-align:center;text-overflow:ellipsis;color:#ccc;opacity:.8;white-space:nowrap;cursor:default;-webkit-transition:opacity .15s;transition:opacity .15s}.vel-img-title:hover{opacity:1}");v(".vel-icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}");v(".vel-toolbar{position:absolute;overflow:hidden;bottom:8px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);opacity:.9;display:-webkit-box;display:-ms-flexbox;display:flex;border-radius:4px;padding:0}.vel-toolbar,.vel-toolbar .toolbar-btn{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#2d2d2d}.vel-toolbar .toolbar-btn{-ms-flex-negative:0;flex-shrink:0;cursor:pointer;padding:6px 10px;font-size:20px;color:#fff;-webkit-tap-highlight-color:transparent;outline:none}.vel-toolbar .toolbar-btn:active,.vel-toolbar .toolbar-btn:hover{background-color:#3d3d3d}"),function(){if("undefined"!=typeof window){var e=window,t='<svg><symbol id="icon-rotate-right" viewBox="0 0 1024 1024"><path d="M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973z m282.559912-479.07185A509.887841 509.887841 0 0 0 511.99984 0.00032C229.215928 0.00032 0 229.216248 0 512.00016s229.215928 511.99984 511.99984 511.99984 511.99984-229.215928 511.99984-511.99984c0-3.743999-0.032-7.455998-0.128-11.167997-1.631999-11.295996-8.159997-27.103992-31.87199-27.103991-27.487991 0-31.67999 21.247993-32.03199 32.06399l0.032 4.127999a30.62399 30.62399 0 0 0 0.16 2.079999H959.9997c0 247.423923-200.575937 447.99986-447.99986 447.99986S63.99998 759.424083 63.99998 512.00016 264.575917 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 1 277.439913 96.22397l-94.91197 91.679971c-25.439992 24.607992-17.439995 44.991986 17.887994 45.599986l188.031942 3.295999a64.31998 64.31998 0 0 0 65.055979-62.84798l3.295999-188.127942C969.407697 15.040315 949.311703 5.792318 923.871711 30.368311l-87.999972 85.023973z" fill="" ></path></symbol><symbol id="icon-rotate-left" viewBox="0 0 1024 1024"><path d="M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973zM188.159941 115.392284A509.887841 509.887841 0 0 1 511.99984 0.00032c282.783912 0 511.99984 229.215928 511.99984 511.99984s-229.215928 511.99984-511.99984 511.99984S0 794.784072 0 512.00016c0-3.743999 0.032-7.455998 0.128-11.167997 1.631999-11.295996 8.159997-27.103992 31.87199-27.103991 27.487991 0 31.67999 21.247993 32.03199 32.06399L63.99998 509.920161a30.62399 30.62399 0 0 1-0.16 2.079999H63.99998c0 247.423923 200.575937 447.99986 447.99986 447.99986s447.99986-200.575937 447.99986-447.99986S759.423763 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 0-277.439913 96.22397l94.91197 91.679971c25.439992 24.607992 17.439995 44.991986-17.887994 45.599986L123.551961 300.800226a64.31998 64.31998 0 0 1-65.055979-62.84798l-3.295999-188.127942C54.591983 15.040315 74.687977 5.792318 100.127969 30.368311l87.999972 85.023973z" fill="" ></path></symbol><symbol id="icon-resize" viewBox="0 0 1024 1024"><path d="M456.036919 791.8108 270.553461 791.8108 460.818829 601.572038l-39.593763-39.567157L231.314785 751.915162l0.873903-183.953615c0-15.465227-12.515035-27.981285-27.981285-27.981285s-27.981285 12.515035-27.981285 27.981285l0 251.829516c0 8.3072 3.415796 14.975063 8.826016 19.564591 5.082762 5.192256 12.132318 8.416693 19.947308 8.416693l251.036453 0c15.46625 0 27.981285-12.514012 27.981285-27.981285C484.018204 804.325835 471.504192 791.8108 456.036919 791.8108zM838.945819 184.644347c-5.082762-5.191232-12.132318-8.416693-19.947308-8.416693L567.961034 176.227654c-15.46625 0-27.981285 12.515035-27.981285 27.981285 0 15.46625 12.514012 27.981285 27.981285 27.981285l185.483458 0L563.206754 422.427962l39.567157 39.567157 189.910281-189.910281-0.873903 183.953615c0 15.46625 12.514012 27.981285 27.981285 27.981285s27.981285-12.514012 27.981285-27.981285L847.772858 204.208938C847.771835 195.902762 844.356039 189.234899 838.945819 184.644347zM847.771835 64.303538 176.227142 64.303538c-61.809741 0-111.924115 50.115398-111.924115 111.924115l0 671.544693c0 61.809741 50.114374 111.924115 111.924115 111.924115l671.544693 0c61.809741 0 111.924115-50.114374 111.924115-111.924115l0-671.544693C959.69595 114.418936 909.581576 64.303538 847.771835 64.303538zM903.733381 847.772346c0 30.878265-25.056676 55.962569-55.962569 55.962569L176.227142 903.734916c-30.90487 0-55.962569-25.084305-55.962569-55.962569l0-671.544693c0-30.9325 25.056676-55.962569 55.962569-55.962569l671.544693 0c30.90487 0 55.962569 25.03007 55.962569 55.962569L903.734404 847.772346z"  ></path></symbol><symbol id="icon-img-broken" viewBox="0 0 1024 1024"><path d="M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m0 682.666667H213.333333v-195.413334l42.24 42.24 170.666667-170.666666 170.666667 170.666666 170.666666-170.24L810.666667 530.346667V810.666667z m0-401.493334l-43.093334-43.093333-170.666666 171.093333-170.666667-170.666666-170.666667 170.666666-42.24-42.666666V213.333333h597.333334v195.84z"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M246.121279 955.6957l438.050717-438.050717c2.822492-2.822492 2.822492-7.902977 0-11.289967L244.992282 67.175303c-6.77398-6.77398-10.725469-16.370452-10.725469-25.966924L234.266814 36.692393C234.266814 16.370452 250.637266 0 270.959206 0l4.515987 0c9.596472 0 19.192944 3.951488 25.966924 10.725469l478.694598 478.694598c12.418964 12.418964 12.418964 32.740904 0 45.159868l-477.565601 477.565601c-7.338479 7.338479-17.499449 11.854465-28.224917 11.854465l0 0c-22.015436 0-40.079383-18.063947-40.079383-40.079383l0 0C234.266814 973.759647 238.7828 963.598677 246.121279 955.6957z"  ></path></symbol><symbol id="icon-zoomin" viewBox="0 0 1024 1024"><path d="M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"  ></path><path d="M235.712 369.92h390.72v127.104H235.712z"  ></path><path d="M367.488 238.144h127.104v390.72H367.488z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M570.24 512l259.2 259.2-58.88 58.24L512 570.24l-261.12 261.12-58.24-58.24L453.76 512 194.56 252.8l58.24-58.24L512 453.76l261.12-261.12 58.24 58.24z"  ></path></symbol><symbol id="icon-zoomout" viewBox="0 0 1024 1024"><path d="M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"  ></path><path d="M235.712 369.92h390.72v127.104H235.712z"  ></path></symbol></svg>';!function(t){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(t,0);else{var o=function(){document.removeEventListener("DOMContentLoaded",o,!1),t()};document.addEventListener("DOMContentLoaded",o,!1)}else document.attachEvent&&(l=t,a=e.document,r=!1,(i=function(){try{a.documentElement.doScroll("left")}catch(e){return void setTimeout(i,50)}n()})(),a.onreadystatechange=function(){"complete"==a.readyState&&(a.onreadystatechange=null,n())});function n(){r||(r=!0,l())}var l,a,r,i}((function(){var e,o,n,l,a,r;(e=document.createElement("div")).innerHTML=t,t=null,(o=e.getElementsByTagName("svg")[0])&&(o.setAttribute("aria-hidden","true"),o.style.position="absolute",o.style.width=0,o.style.height=0,o.style.overflow="hidden",n=o,(l=document.body).firstChild?(a=n,(r=l.firstChild).parentNode.insertBefore(a,r)):l.appendChild(n))}))}}();const b=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"SvgIcon",props:{type:{type:String,default:""}},setup:e=>()=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg",{class:"vel-icon icon","aria-hidden":"true"},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("use",{"xlink:href":`#icon-${e.type}`},null)])}),m="undefined"!=typeof window,g=()=>{};let f=!1;if(m)try{const e={};Object.defineProperty(e,"passive",{get(){f=!0}}),window.addEventListener("test-passive",g,e)}catch(e){}const h=(e,t,o,n=!1)=>{m&&e.addEventListener(t,o,!!f&&{capture:!1,passive:n})},w=(e,t,o)=>{m&&e.removeEventListener(t,o)},y=e=>{e.preventDefault()},x=Object.prototype.toString,k=e=>t=>x.call(t).slice(8,-1)===e;function z(e){return k("Array")(e)}const _=e=>!!e&&k("String")(e);function M(e){return null!=e}const L=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"Toolbar",props:{zoomIn:{type:Function,default:g},zoomOut:{type:Function,default:g},rotateLeft:{type:Function,default:g},rotateRight:{type:Function,default:g},resize:{type:Function,default:g}},setup:e=>()=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"vel-toolbar"},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"toolbar-btn toolbar-btn__zoomin",onClick:e.zoomIn},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"zoomin"},null)]),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"toolbar-btn toolbar-btn__zoomout",onClick:e.zoomOut},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"zoomout"},null)]),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"toolbar-btn toolbar-btn__resize",onClick:e.resize},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"resize"},null)]),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"toolbar-btn toolbar-btn__rotate",onClick:e.rotateLeft},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"rotate-left"},null)]),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"toolbar-btn toolbar-btn__rotate",onClick:e.rotateRight},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"rotate-right"},null)])])}),S=()=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"vel-loading"},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"ring"},null)]),C=()=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"vel-on-error"},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"ring"},null),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"img-broken"},null)]),Y=(e,{slots:o})=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"vel-img-title"},[o.default?o.default():""]),D=m?window:global;let E=Date.now();function T(e){const t=Date.now(),o=Math.max(0,16-(t-E)),n=setTimeout(e,o);return E=t+o,n}function X(e){return(D.requestAnimationFrame||T).call(D,e)}function B(e){(D.cancelAnimationFrame||D.clearTimeout).call(D,e)}function O(e,t){const o=e.clientX-t.clientX,n=e.clientY-t.clientY;return Math.sqrt(o*o+n*n)}function A(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,vue__WEBPACK_IMPORTED_MODULE_0__.isVNode)(e)}function H(e){return(e=>!!e&&k("Object")(e))(e)&&_(e.src)}var I=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"VueEasyLightbox",props:{imgs:{type:[Array,String],default:()=>""},visible:{type:Boolean,default:!1},index:{type:Number,default:0},scrollDisabled:{type:Boolean,default:!0},escDisabled:{type:Boolean,default:!1},moveDisabled:{type:Boolean,default:!1},titleDisabled:{type:Boolean,default:!1},teleport:{type:[String,Object],default:null},swipeTolerance:{type:Number,default:50},loop:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1}},emits:["hide","on-error","on-prev","on-next","on-prev-click","on-next-click","on-index-change"],setup(e,{emit:p,slots:v}){const{imgRef:m,imgState:g,setImgSize:f}=(()=>{const e=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(),t=(0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({width:0,height:0,maxScale:1});return{imgRef:e,imgState:t,setImgSize:()=>{if(e.value){const{width:o,height:n,naturalWidth:l}=e.value;t.maxScale=l/o,t.width=o,t.height=n}}}})(),x=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0),k=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""),D=(0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({scale:1,lastScale:1,rotateDeg:0,top:0,left:0,initX:0,initY:0,lastX:0,lastY:0,touches:[]}),E=(0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({loadError:!1,loading:!1,dragging:!1,gesturing:!1,wheeling:!1}),T=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>z(e.imgs)?e.imgs.map((e=>"string"==typeof e?{src:e}:H(e)?e:void 0)).filter(M):_(e.imgs)?[{src:e.imgs}]:[])),I=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>{var e;return null===(e=T.value[x.value])||void 0===e?void 0:e.src})),R=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>{var e;return null===(e=T.value[x.value])||void 0===e?void 0:e.title})),j=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>({cursor:E.loadError?"default":e.moveDisabled?E.dragging?"grabbing":"grab":"move",top:`calc(50% + ${D.top}px)`,left:`calc(50% + ${D.left}px)`,transition:E.dragging||E.gesturing?"none":"",transform:`translate(-50%, -50%) scale(${D.scale}) rotate(${D.rotateDeg}deg)`}))),F=()=>{p("hide")},N=()=>{D.scale=1,D.lastScale=1,D.rotateDeg=0,D.top=0,D.left=0,E.loadError=!1,E.dragging=!1,E.loading=!0},$=(t,o)=>{const n=x.value;N(),x.value=t,T.value[x.value]===T.value[t]&&(0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)((()=>{E.loading=!1})),e.visible&&n!==t&&(o&&(z(o)?o.forEach((e=>{p(e,n,t)})):p(o,n,t)),p("on-index-change",n,t))},P=()=>{const t=x.value,o=e.loop?(t+1)%T.value.length:t+1;!e.loop&&o>T.value.length-1||$(o,["on-next","on-next-click"])},V=()=>{const t=x.value;let o=t-1;if(0===t){if(!e.loop)return;o=T.value.length-1}$(o,["on-prev","on-prev-click"])},q=e=>{Math.abs(1-e)<.05?e=1:Math.abs(g.maxScale-e)<.05&&(e=g.maxScale),D.lastScale=D.scale,D.scale=e},U=()=>{const e=D.scale+.12;e<3*g.maxScale&&q(e)},W=()=>{const e=D.scale-(D.scale<.7?.1:.12);e>.1&&q(e)},G=()=>{D.rotateDeg-=90},J=()=>{D.rotateDeg+=90},K=()=>{D.scale=1,D.top=0,D.left=0},Q=(t=0)=>!e.moveDisabled&&0===t,{onMouseDown:Z,onMouseMove:ee,onMouseUp:te}=((e,t,o)=>{let n,l=!1;return{onMouseDown:o=>{e.initX=e.lastX=o.clientX,e.initY=e.lastY=o.clientY,t.dragging=!0,l=!1,o.stopPropagation()},onMouseUp:e=>{o(e.button)&&B(n),t.dragging=!1,l=!1},onMouseMove:a=>{if(t.dragging)if(o(a.button)){if(l)return;l=!0,n=X((()=>{const{top:t,left:o,lastY:n,lastX:r}=e;e.top=t-n+a.clientY,e.left=o-r+a.clientX,e.lastX=a.clientX,e.lastY=a.clientY,l=!1}))}else e.lastX=a.clientX,e.lastY=a.clientY;a.stopPropagation()}}})(D,E,Q),{onTouchStart:oe,onTouchMove:ne,onTouchEnd:le}=((e,t,o,n)=>{let l,a=!1;return{onTouchStart:e=>{const{touches:n}=e;n.length>1?(o.gesturing=!0,t.touches=n):(t.initX=t.lastX=n[0].clientX,t.initY=t.lastY=n[0].clientY,o.dragging=!0),e.stopPropagation()},onTouchMove:r=>{if(a)return;const{touches:i}=r,{lastX:s,lastY:c,left:d,top:p,scale:u}=t;if(!o.gesturing&&o.dragging){if(!i[0])return;const{clientX:e,clientY:o}=i[0];n()?l=X((()=>{t.lastX=e,t.lastY=o,t.top=p-c+o,t.left=d-s+e,a=!1})):(t.lastX=e,t.lastY=o)}else o.gesturing&&t.touches.length>1&&i.length>1&&(l=X((()=>{const o=(O(t.touches[0],t.touches[1])-O(i[0],i[1]))/e.width;t.touches=i;const n=u-1.3*o;n>.5&&n<1.5*e.maxScale&&(t.scale=n),a=!1})))},onTouchEnd:()=>{B(l),o.dragging=!1,o.gesturing=!1,a=!1}}})(g,D,E,Q),ae=()=>{D.scale!==g.maxScale?(D.lastScale=D.scale,D.scale=g.maxScale):D.scale=D.lastScale},re=t=>{E.loadError||E.gesturing||E.loading||E.dragging||E.wheeling||!e.scrollDisabled||(E.wheeling=!0,setTimeout((()=>{E.wheeling=!1}),80),t.deltaY<0?U():W())},ie=t=>{const o=t;e.visible&&(!e.escDisabled&&"Escape"===o.key&&e.visible&&F(),"ArrowLeft"===o.key&&(e.rtl?P():V()),"ArrowRight"===o.key&&(e.rtl?V():P()))},se=()=>{f()},ce=()=>{E.loading=!1},de=e=>{E.loading=!1,E.loadError=!0,p("on-error",e)},pe=()=>{e.visible&&f()};(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((()=>e.index),(e=>{e<0||e>=T.value.length||$(e)})),(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((()=>E.dragging),((t,o)=>{const n=!t&&o;if(!Q()&&n){const t=D.lastX-D.initX,o=D.lastY-D.initY,n=e.swipeTolerance;Math.abs(t)>Math.abs(o)&&(t<-1*n?P():t>n&&V())}})),(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((()=>e.visible),(t=>{if(t){N();const t=T.value.length;if(0===t)return x.value=0,E.loading=!1,void (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)((()=>E.loadError=!0));x.value=e.index>=t?t-1:e.index<0?0:e.index,e.scrollDisabled&&ue()}else e.scrollDisabled&&ve()}));const ue=()=>{document&&(k.value=document.body.style.overflowY,document.body.style.overflowY="hidden")},ve=()=>{document&&(document.body.style.overflowY=k.value)};(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)((()=>{h(document,"keydown",ie),h(window,"resize",pe)})),(0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)((()=>{w(document,"keydown",ie),w(window,"resize",pe)}));const be=()=>E.loading?v.loading?v.loading({key:"loading"}):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(S,{key:"img-loading"},null):E.loadError?v.onerror?v.onerror({key:"onerror"}):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(C,{key:"img-on-error"},null):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"vel-img-wrapper",style:j.value,key:"img-wrapper"},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img",{ref:m,draggable:"false",class:"vel-img",src:I.value,onMousedown:Z,onMouseup:te,onMousemove:ee,onTouchstart:oe,onTouchmove:ne,onTouchend:le,onLoad:se,onDblclick:ae,onDragstart:e=>{e.preventDefault()}},null)]),me=()=>{if(v["prev-btn"])return v["prev-btn"]({prev:V});if(T.value.length<=1)return;const o=!e.loop&&x.value<=0;return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"btn__prev "+(o?"disable":""),onClick:V},[e.rtl?(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"next"},null):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"prev"},null)])},ge=()=>{if(v["next-btn"])return v["next-btn"]({next:P});if(T.value.length<=1)return;const o=!e.loop&&x.value>=T.value.length-1;return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"btn__next "+(o?"disable":""),onClick:P},[e.rtl?(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"prev"},null):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"next"},null)])},fe=()=>{if(R.value&&!e.titleDisabled&&!E.loading&&!E.loadError)return v.title?v.title():(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(Y,null,{default:()=>[R.value]})},he=()=>{let o;if(e.visible)return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{onTouchmove:y,class:["vel-modal",e.rtl?"is-rtl":""],onClick:(0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(F,["self"]),onWheel:re},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition,{name:"vel-fade",mode:"out-in"},A(o=be())?o:{default:()=>[o]}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img",{style:"display:none;",src:I.value,onError:de,onLoad:ce},null),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"vel-btns-wrapper"},[me(),ge(),fe(),v["close-btn"]?v["close-btn"]({close:F}):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div",{class:"btn__close",onClick:F},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(b,{type:"close"},null)]),v.toolbar?v.toolbar({toolbarMethods:{zoomIn:U,zoomOut:W,rotate:G,rotateLeft:G,rotateRight:J,resize:K},zoomIn:U,zoomOut:W,rotate:G,rotateLeft:G,rotateRight:J,resize:K}):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(L,{zoomIn:U,zoomOut:W,resize:K,rotateLeft:G,rotateRight:J},null)])])};return()=>{let o;if(e.teleport){let o;return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport,{to:e.teleport},{default:()=>[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition,{name:"vel-fade"},A(o=he())?o:{default:()=>[o]})]})}return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition,{name:"vel-fade"},A(o=he())?o:{default:()=>[o]})}}});const R=I;R.install=e=>{e.component(I.name,I)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (R);


/***/ })

}]);