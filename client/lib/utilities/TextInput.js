var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray'),
);
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends'),
);
var _react = _interopRequireDefault(require('react'));
var _reactNative = require('react-native');
var _this = this,
  _jsxFileName =
    '/Users/ayushman/Desktop/SampleReactNativeApp1/client/src/utilities/TextInput.js';
var UselessTextInput = function UselessTextInput(props) {
  return _react.default.createElement(
    _reactNative.TextInput,
    (0, _extends2.default)({}, props, {
      editable: true,
      maxLength: 400,
      __self: _this,
      __source: {fileName: _jsxFileName, lineNumber: 8, columnNumber: 5},
    }),
  );
};
var UselessTextInputMultiline = function UselessTextInputMultiline() {
  var _React$useState = _react.default.useState('sdfkjd'),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    value = _React$useState2[0],
    _onChangeText = _React$useState2[1];
  return _react.default.createElement(
    _reactNative.View,
    {
      style: {
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      },
      __self: _this,
      __source: {fileName: _jsxFileName, lineNumber: 20, columnNumber: 5},
    },
    _react.default.createElement(UselessTextInput, {
      multiline: true,
      numberOfLines: 4,
      onChangeText: function onChangeText(text) {
        return _onChangeText(text);
      },
      placeholder: 'Here goes your opinion!',
      value: value,
      __self: _this,
      __source: {fileName: _jsxFileName, lineNumber: 27, columnNumber: 7},
    }),
  );
};
var _default = UselessTextInputMultiline;
exports.default = _default;
