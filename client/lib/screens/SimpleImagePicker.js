var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = SimpleImagePicker;
var _regenerator = _interopRequireDefault(
  require('@babel/runtime/regenerator'),
);
var _asyncStorage = _interopRequireDefault(
  require('@react-native-async-storage/async-storage'),
);
var _react = _interopRequireDefault(require('react'));
var _reactNative = require('react-native');
var _reactNativeImagePicker = _interopRequireDefault(
  require('react-native-image-picker'),
);
var _Styles = require('../utilities/Styles');
var _jsxFileName =
  '/Users/ayushman/Desktop/SampleReactNativeApp1/client/src/screens/SimpleImagePicker.js';
function SimpleImagePicker(props) {
  var storeData = function storeData(source) {
    var jsonValue;
    return _regenerator.default.async(
      function storeData$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.prev = 0;
              jsonValue = JSON.stringify(source);
              _context.next = 4;
              return _regenerator.default.awrap(
                _asyncStorage.default.setItem(props.asyncKey, jsonValue),
              );
            case 4:
              _context.next = 8;
              break;
            case 6:
              _context.prev = 6;
              _context.t0 = _context.catch(0);
            case 8:
            case 'end':
              return _context.stop();
          }
        }
      },
      null,
      null,
      [[0, 6]],
      Promise,
    );
  };
  function selectImage() {
    var options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {skipBackup: true},
    };
    _reactNativeImagePicker.default.showImagePicker(
      options,
      function _callee(response) {
        var source;
        return _regenerator.default.async(
          function _callee$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  if (response.didCancel) {
                    console.log('User cancelled photo picker');
                    _reactNative.Alert.alert('You did not select any image');
                  } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                  } else if (response.customButton) {
                    console.log(
                      'User tapped custom button: ',
                      response.customButton,
                    );
                  } else {
                    source = {uri: response.uri};
                    storeData(source);
                    props.handleNavigation();
                  }
                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          null,
          null,
          null,
          Promise,
        );
      },
    );
  }
  return _react.default.createElement(
    _reactNative.View,
    {
      style: [
        _Styles.STYLES.flex,
        _Styles.STYLES.centerContainer,
        {backgroundColor: _Styles.COLORS.primaryDark},
      ],
      __self: this,
      __source: {fileName: _jsxFileName, lineNumber: 51, columnNumber: 5},
    },
    _react.default.createElement(
      _reactNative.Text,
      {
        style: [_Styles.STYLES.title, {color: _Styles.COLORS.primaryRed}],
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 57, columnNumber: 7},
      },
      'Simple Image Picker',
    ),
    _react.default.createElement(
      _reactNative.TouchableOpacity,
      {
        onPress: selectImage,
        style: [
          _Styles.STYLES.selectButtonContainer,
          {backgroundColor: _Styles.COLORS.primaryLight},
        ],
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 60, columnNumber: 7},
      },
      _react.default.createElement(
        _reactNative.Text,
        {
          style: _Styles.STYLES.selectButtonTitle,
          __self: this,
          __source: {fileName: _jsxFileName, lineNumber: 66, columnNumber: 9},
        },
        'Pick an image',
      ),
    ),
  );
}
