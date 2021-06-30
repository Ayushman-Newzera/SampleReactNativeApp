var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _reactNative = require('react-native');
var _SimpleImagePicker = _interopRequireDefault(require('./SimpleImagePicker'));
var _jsxFileName =
  '/Users/ayushman/Desktop/SampleReactNativeApp1/client/src/screens/ProfilePictureInput.js';
function ProfilePictureInput(_ref) {
  var route = _ref.route,
    navigation = _ref.navigation;
  var handleNavigation = function handleNavigation() {
    navigation.navigate('Home');
  };
  return _react.default.createElement(
    _reactNative.View,
    {
      style: styles.container,
      __self: this,
      __source: {fileName: _jsxFileName, lineNumber: 13, columnNumber: 5},
    },
    _react.default.createElement(_SimpleImagePicker.default, {
      asyncKey: '@profilePicture',
      handleNavigation: handleNavigation,
      __self: this,
      __source: {fileName: _jsxFileName, lineNumber: 14, columnNumber: 7},
    }),
  );
}
var styles = _reactNative.StyleSheet.create({
  container: {position: 'relative', flex: 1},
});
var _default = ProfilePictureInput;
exports.default = _default;
