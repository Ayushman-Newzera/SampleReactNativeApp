var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _reactNative = require('react-native');
var _TextInput = _interopRequireDefault(require('../utilities/TextInput'));
var _SimpleImagePicker = _interopRequireDefault(require('./SimpleImagePicker'));
var _jsxFileName =
  '/Users/ayushman/Desktop/SampleReactNativeApp1/client/src/screens/StoryInputScreen.js';
function StoryInputScreen(_ref) {
  var navigation = _ref.navigation;
  var handleNavigation = function handleNavigation() {
    navigation.navigate('Home');
  };
  return _react.default.createElement(
    _reactNative.View,
    {
      style: styles.container,
      __self: this,
      __source: {fileName: _jsxFileName, lineNumber: 18, columnNumber: 5},
    },
    _react.default.createElement(_SimpleImagePicker.default, {
      asyncKey: '@storyPicture',
      handleNavigation: handleNavigation,
      __self: this,
      __source: {fileName: _jsxFileName, lineNumber: 19, columnNumber: 7},
    }),
    _react.default.createElement(_TextInput.default, {
      __self: this,
      __source: {fileName: _jsxFileName, lineNumber: 24, columnNumber: 7},
    }),
    _react.default.createElement(
      _reactNative.View,
      {
        style: styles.submitButton,
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 26, columnNumber: 7},
      },
      _react.default.createElement(_reactNative.Button, {
        title: 'Submit',
        onPress: function onPress() {
          return navigation.navigate('Home');
        },
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 27, columnNumber: 9},
      }),
    ),
  );
}
var styles = _reactNative.StyleSheet.create({
  container: {position: 'relative', flex: 1},
  buttonContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  lowerButton: {position: 'relative', marginLeft: 50},
  submitButton: {
    position: 'relative',
    width: 150,
    marginTop: 50,
    marginLeft: 120,
    marginBottom: 50,
  },
});
var _default = StoryInputScreen;
exports.default = _default;
