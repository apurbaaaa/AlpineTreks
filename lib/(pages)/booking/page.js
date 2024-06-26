"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Page;
var _react = _interopRequireDefault(require("react"));
var _BreadCrumbs = _interopRequireDefault(require("@/components/common/BreadCrumbs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Page() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("section", {
    "data-anim": "fade",
    className: "mt-header pt-30 is-in-view"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "breadcrumbs mb-30 md:mb-15"
  }, /*#__PURE__*/_react["default"].createElement(_BreadCrumbs["default"], {
    homeElement: /*#__PURE__*/_react["default"].createElement("span", null, "Home"),
    containerClasses: "text-14 breadcrumb-text",
    listClasses: "",
    activeClasses: "active",
    capitalizeLinks: true
  })), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-30"
  }, "Booking Form"))), /*#__PURE__*/_react["default"].createElement("section", {
    "data-anim-wrap": "",
    className: "layout-pt-sm layout-pb-sm animated"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "data-anim-child": "fade",
    className: "col-lg-8 is-in-view"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 mt-30"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-24 md:text-24 fw-700"
  }, "Fill the form"), /*#__PURE__*/_react["default"].createElement("form", {
    action: "https://mountaintrekkingnepal.com/booking",
    method: "POST"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "hidden",
    name: "_token",
    value: "KHYDaLexKIuG5cSjK1k8ZOpHgwVOsW2E8eWarjEy",
    autoComplete: "off"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "hidden",
    name: "_method",
    value: "PUT"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row y-gap-30 contactForm pt-30"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "package",
    value: "Annapurna Base Camp Trek",
    readOnly: true,
    disabled: true
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "full_name",
    required: true
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "lh-1 text-16 text-light-1"
  }, "Full Name"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "email_address",
    required: true
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "lh-1 text-16 text-light-1"
  }, "Email"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "phone_number",
    required: true
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "lh-1 text-16 text-light-1"
  }, "Phone Number"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "address",
    required: true
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "lh-1 text-16 text-light-1"
  }, "Address"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "no_of_people",
    required: true
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "lh-1 text-16 text-light-1"
  }, "No of People"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-input"
  }, /*#__PURE__*/_react["default"].createElement("textarea", {
    name: "message",
    required: true,
    rows: "8"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "lh-1 text-16 text-light-1"
  }, "Text Message"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row y-gap-20 items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-auto d-flex"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    name: "accept",
    value: "I agree to tours Terms of Use and Privacy Policy.",
    required: true
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-14"
  }, "By proceeding with this booking, I agree to tours Terms of Use and Privacy Policy.")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "hidden",
    name: "package_price",
    value: "700"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "hidden",
    name: "package_date",
    value: "05 Sep 2024"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "hidden",
    name: "package_url",
    value: "https://mountaintrekkingnepal.com/package/annapurna-base-camp-trek"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-auto col-12"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "button -md -dark-1 bg-accent-1 text-white col-12"
  }, "Submit", /*#__PURE__*/_react["default"].createElement("i", {
    className: "icon-arrow-top-right text-16 ml-10"
  })))))))))))));
}