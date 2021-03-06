var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _reactNative = require('react-native');
var _this = this,
  _jsxFileName =
    '/Users/ayushman/Desktop/SampleReactNativeApp1/client/src/utilities/ProgressBar.js';
var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress;
  return _react.default.createElement(
    _reactNative.View,
    {
      style: styles.progressContainer,
      __self: _this,
      __source: {fileName: _jsxFileName, lineNumber: 8, columnNumber: 5},
    },
    _react.default.createElement(_reactNative.View, {
      style: [styles.progressBar, {width: progress * 100 + '%'}],
      __self: _this,
      __source: {fileName: _jsxFileName, lineNumber: 9, columnNumber: 7},
    }),
  );
};
var styles = _reactNative.StyleSheet.create({
  progressContainer: {
    height: 11,
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 50,
  },
  progressBar: {
    height: 9,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderRadius: 4,
    marginTop: -1,
  },
});
var _default = ProgressBar;
exports.default = _default;
