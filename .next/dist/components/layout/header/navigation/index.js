"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Sam/Code/durham-stoves-fireplaces-next/components/layout/header/navigation/index.js";


var Navigation = function (_Component) {
  (0, _inherits3.default)(Navigation, _Component);

  function Navigation() {
    (0, _classCallCheck3.default)(this, Navigation);

    return (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).apply(this, arguments));
  }

  (0, _createClass3.default)(Navigation, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement("a", { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, "Home")), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement("a", { href: "/products", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, "Products")), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement("a", { href: "/about", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "About")), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement("a", { href: "/contact", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "Contact")), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement("a", { href: "/location", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Location"))));
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = Navigation;