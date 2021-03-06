var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray'),
);
var _react = _interopRequireWildcard(require('react'));
var _reactNative = require('react-native');
var _ProgressBar = _interopRequireDefault(require('../utilities/ProgressBar'));
var _jsxFileName =
  '/Users/ayushman/Desktop/SampleReactNativeApp1/client/src/screens/StoryScreen.js';
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') {
    return null;
  }
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function StoryScreen(_ref) {
  var route = _ref.route,
    navigation = _ref.navigation;
  var _route$params = route.params,
    stories = _route$params.stories,
    handleBorderActivity = _route$params.handleBorderActivity;
  var userStories = stories.stories;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    curStory = _useState2[0],
    setCurStory = _useState2[1];
  var useProgress = function useProgress() {
    var maxTimeInSeconds =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      elapsedTime = _useState4[0],
      setElapsedTime = _useState4[1];
    var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      progress = _useState6[0],
      setProgress = _useState6[1];
    (0, _react.useEffect)(
      function () {
        var intervalId = setInterval(function () {
          if (progress < 1) {
            setElapsedTime(function (t) {
              return t + 0.164;
            });
          }
        }, 100);
        return function cleanup() {
          clearInterval(intervalId);
          handleBorderActivity.handleBorderActivity();
        };
      },
      [progress],
    );
    (0, _react.useEffect)(
      function () {
        if (elapsedTime / maxTimeInSeconds <= 1) {
          setProgress(elapsedTime / maxTimeInSeconds);
        } else {
          setProgress(1);
        }
      },
      [elapsedTime, maxTimeInSeconds],
    );
    return progress;
  };
  (0, _react.useEffect)(
    function () {
      var interval = setInterval(function () {
        var newStory = 0;
        if (curStory !== userStories.length - 1) {
          newStory = curStory + 1;
          setCurStory(newStory);
        } else {
          setCurStory(0);
          navigation.navigate('Home');
        }
      }, 5000);
      return function cleanup() {
        clearInterval(interval);
      };
    },
    [curStory, navigation, userStories.length],
  );
  var progress = useProgress();
  return _react.default.createElement(
    _reactNative.View,
    {
      style: styles.container,
      __self: this,
      __source: {fileName: _jsxFileName, lineNumber: 61, columnNumber: 5},
    },
    _react.default.createElement(_ProgressBar.default, {
      progress: progress,
      __self: this,
      __source: {fileName: _jsxFileName, lineNumber: 62, columnNumber: 7},
    }),
    _react.default.createElement(_reactNative.Image, {
      style: styles.image,
      source: {uri: userStories[curStory].imageLink},
      __self: this,
      __source: {fileName: _jsxFileName, lineNumber: 63, columnNumber: 7},
    }),
    _react.default.createElement(
      _reactNative.View,
      {
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 67, columnNumber: 7},
      },
      _react.default.createElement(
        _reactNative.Text,
        {
          style: styles.Headline,
          __self: this,
          __source: {fileName: _jsxFileName, lineNumber: 68, columnNumber: 9},
        },
        'Headline of the story.',
      ),
    ),
    _react.default.createElement(
      _reactNative.View,
      {
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 70, columnNumber: 7},
      },
      _react.default.createElement(
        _reactNative.Text,
        {
          style: styles.opinion,
          __self: this,
          __source: {fileName: _jsxFileName, lineNumber: 71, columnNumber: 9},
        },
        'User opinion regarding the news.',
      ),
    ),
  );
}
var styles = _reactNative.StyleSheet.create({
  container: {flex: 1, backgroundColor: '#264d73', alignItems: 'center'},
  image: {marginTop: 50, height: 200, width: 300, borderRadius: 20},
  Headline: {marginTop: 20, fontSize: 15, color: 'white'},
  opinion: {
    marginTop: 50,
    fontSize: 30,
    width: 300,
    color: 'white',
    textAlign: 'center',
  },
});
var _default = StoryScreen;
exports.default = _default;
