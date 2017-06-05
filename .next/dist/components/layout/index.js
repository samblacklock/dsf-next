'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('./header/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./footer/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Sam/Code/durham-stoves-fireplaces-next/components/layout/index.js';


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout(_ref) {
    var children = _ref.children,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? 'Durham Stoves and Fires' : _ref$title;

    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this));

    _this.children = children;
    _this.title = title;
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('site-content', {
        'data-jsx': 987455641,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 987455641,
        css: 'h1[data-jsx="987455641"] {color: blue;}\n/*@ sourceURL=components/layout/index.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TYW0vQ29kZS9kdXJoYW0tc3RvdmVzLWZpcmVwbGFjZXMtbmV4dC9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsImNvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CYywwQkFDWSxZQUNmLENBQUE7QUNuQlgsMkNBQTJDIiwiZmlsZSI6InRvLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaW5kZXgnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9pbmRleCc7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgY2hpbGRyZW4sIHRpdGxlID0gJ0R1cmhhbSBTdG92ZXMgYW5kIEZpcmVzJyB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2l0ZS1jb250ZW50PlxuICAgICAgICA8c3R5bGUganN4PiB7YFxuICAgICAgICAgICRjb2xvcjogYmx1ZTtcblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+eyB0aGlzLnRpdGxlIH08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9pbmRleC5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgIDxtYWluLWNvbnRlbnQ+XG4gICAgICAgICAgPGgxPmJ1bXNleDwvaDE+XG4gICAgICAgICAgeyB0aGlzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9tYWluLWNvbnRlbnQ+XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9zaXRlLWNvbnRlbnQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsIiRjb2xvcjogYmx1ZTtoMVtkYXRhLWpzeD1cIjk4NzQ1NTY0MVwiXSB7Y29sb3I6ICRjb2xvcjt9XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1OdmJYQnZibVZ1ZEhNdmJHRjViM1YwTDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVdkQ2NVSXNRVUZEUlN4aFFVVlVMREJDUVVOWkxHTkJRMllpTENKbWFXeGxJam9pWTI5dGNHOXVaVzUwY3k5c1lYbHZkWFF2YVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwxTmhiUzlEYjJSbEwyUjFjbWhoYlMxemRHOTJaWE10Wm1seVpYQnNZV05sY3kxdVpYaDBJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnUTI5dGNHOXVaVzUwSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJRXhwYm1zZ1puSnZiU0FuYm1WNGRDOXNhVzVySjF4dWFXMXdiM0owSUVobFlXUWdabkp2YlNBbmJtVjRkQzlvWldGa0oxeHVhVzF3YjNKMElFaGxZV1JsY2lCbWNtOXRJQ2N1TDJobFlXUmxjaTlwYm1SbGVDYzdYRzVwYlhCdmNuUWdSbTl2ZEdWeUlHWnliMjBnSnk0dlptOXZkR1Z5TDJsdVpHVjRKenRjYmx4dVkyeGhjM01nVEdGNWIzVjBJR1Y0ZEdWdVpITWdRMjl0Y0c5dVpXNTBJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9leUJqYUdsc1pISmxiaXdnZEdsMGJHVWdQU0FuUkhWeWFHRnRJRk4wYjNabGN5QmhibVFnUm1seVpYTW5JSDBwSUh0Y2JpQWdJQ0J6ZFhCbGNpZ3BPMXh1SUNBZ0lIUm9hWE11WTJocGJHUnlaVzRnUFNCamFHbHNaSEpsYmp0Y2JpQWdJQ0IwYUdsekxuUnBkR3hsSUQwZ2RHbDBiR1U3WEc0Z0lIMWNibHh1SUNCeVpXNWtaWElvS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJRHh6YVhSbExXTnZiblJsYm5RK1hHNGdJQ0FnSUNBZ0lEeHpkSGxzWlNCcWMzZytJSHRnWEc0Z0lDQWdJQ0FnSUNBZ0pHTnZiRzl5T2lCaWJIVmxPMXh1WEc0Z0lDQWdJQ0FnSUNBZ2FERWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0k2SUNSamIyeHZjanRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHQjlYRzRnSUNBZ0lDQWdJRHd2YzNSNWJHVStYRzRnSUNBZ0lDQWdJRHhJWldGa1BseHVJQ0FnSUNBZ0lDQWdJRHgwYVhSc1pUNTdJSFJvYVhNdWRHbDBiR1VnZlR3dmRHbDBiR1UrWEc0Z0lDQWdJQ0FnSUNBZ1BHMWxkR0VnWTJoaGNsTmxkRDBuZFhSbUxUZ25JQzgrWEc0Z0lDQWdJQ0FnSUNBZ1BHMWxkR0VnYm1GdFpUMG5kbWxsZDNCdmNuUW5JR052Ym5SbGJuUTlKMmx1YVhScFlXd3RjMk5oYkdVOU1TNHdMQ0IzYVdSMGFEMWtaWFpwWTJVdGQybGtkR2duSUM4K1hHNGdJQ0FnSUNBZ0lDQWdQR3hwYm1zZ2NtVnNQVndpYzNSNWJHVnphR1ZsZEZ3aUlHaHlaV1k5WENJdmMzUmhkR2xqTDJsdVpHVjRMbU56YzF3aUlDOCtYRzRnSUNBZ0lDQWdJRHd2U0dWaFpENWNibHh1SUNBZ0lDQWdJQ0E4U0dWaFpHVnlJQzgrWEc1Y2JpQWdJQ0FnSUNBZ1BHMWhhVzR0WTI5dWRHVnVkRDVjYmlBZ0lDQWdJQ0FnSUNBOGFERStZblZ0YzJWNFBDOW9NVDVjYmlBZ0lDQWdJQ0FnSUNCN0lIUm9hWE11WTJocGJHUnlaVzRnZlZ4dUlDQWdJQ0FnSUNBOEwyMWhhVzR0WTI5dWRHVnVkRDVjYmx4dUlDQWdJQ0FnSUNBOFJtOXZkR1Z5SUM4K1hHNGdJQ0FnSUNBOEwzTnBkR1V0WTI5dWRHVnVkRDVjYmlBZ0lDQXBYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdUR0Y1YjNWME8xeHVJbDE5ICovXG4vKkAgc291cmNlVVJMPWNvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzICovIl19 */'
      }), _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 987455641,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.title), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 987455641,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 987455641,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/index.css', 'data-jsx': 987455641,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement(_index2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('main-content', {
        'data-jsx': 987455641,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('h1', {
        'data-jsx': 987455641,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'bumsex'), this.children), _react2.default.createElement(_index4.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;