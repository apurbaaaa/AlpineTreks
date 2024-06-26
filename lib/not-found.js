"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotFound;
exports.metadata = void 0;
var _image = _interopRequireDefault(require("next/image"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var metadata = exports.metadata = {
  title: "Not found",
  description: "Error 404"
};
function NotFound() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "nopage mt-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row y-gap-30 justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-6"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    width: "629",
    height: "481",
    src: "/img/404/1.svg",
    alt: "image"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-5 col-lg-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "nopage__content pr-30 lg:pr-0"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "40", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-accent-1"
  }, "4")), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-30 md:text-24 fw-700"
  }, "Oops! It looks like you're lost."), /*#__PURE__*/_react["default"].createElement("p", null, "The page you're looking for isn't available. Try to search again or use the go to."), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button -md -dark-1 bg-accent-1 text-white mt-25"
  }, "Go back to homepage", /*#__PURE__*/_react["default"].createElement("i", {
    className: "icon-arrow-top-right ml-10"
  })))))))));
}