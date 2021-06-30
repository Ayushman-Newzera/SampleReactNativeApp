var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;
var _regenerator = _interopRequireDefault(
  require('@babel/runtime/regenerator'),
);
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray'),
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray'),
);
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteralLoose'),
);
var _client = require('@apollo/client');
var _asyncStorage = _interopRequireDefault(
  require('@react-native-async-storage/async-storage'),
);
var _native = require('@react-navigation/native');
var _react = _interopRequireWildcard(require('react'));
var _reactNative = require('react-native');
var _templateObject,
  _templateObject2,
  _jsxFileName =
    '/Users/ayushman/Desktop/SampleReactNativeApp1/client/src/screens/HomeScreen.js';
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
var USER_DETAILS = (0, _client.gql)(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteralLoose2.default)([
      '\n  query UserDetails {\n    getUserDetails {\n      name\n      bio\n      profileImageLink\n    }\n  }\n',
    ])),
);
var UPDATE_PROFILE = (0, _client.gql)(
  _templateObject2 ||
    (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)([
      '\n  mutation UpdateProfileMutation($profileImageLink: String!) {\n    addProfilePicture(profileImageLink: $profileImageLink)\n  }\n',
    ])),
);
function HomeScreen(_ref) {
  var navigation = _ref.navigation;
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    borderActive = _useState2[0],
    setBorderActive = _useState2[1];
  var anonymousImage = {
    uri: 'https://image.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-260nw-1018631086.jpg',
  };
  var _useState3 = (0, _react.useState)(anonymousImage),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    profilePicture = _useState4[0],
    setProfilePicture = _useState4[1];
  var _useState5 = (0, _react.useState)([
      {
        imageLink:
          'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
      },
    ]),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    stories = _useState6[0],
    setStories = _useState6[1];
  var _useQuery = (0, _client.useQuery)(USER_DETAILS),
    loading = _useQuery.loading,
    error = _useQuery.error,
    data = _useQuery.data;
  var _useMutation = (0, _client.useMutation)(UPDATE_PROFILE),
    _useMutation2 = (0, _slicedToArray2.default)(_useMutation, 1),
    addProfileImageLink = _useMutation2[0];
  var isFocused = (0, _native.useIsFocused)();
  var handleBorderActivity = function handleBorderActivity() {
    setBorderActive(false);
  };
  (0, _react.useEffect)(
    function () {
      getDataProfile();
      getDataStory();
    },
    [isFocused],
  );
  var buttonClickedHandler = function buttonClickedHandler() {
    navigation.navigate('Stories Input');
  };
  var getDataProfile = function getDataProfile() {
    var jsonValue;
    return _regenerator.default.async(
      function getDataProfile$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _regenerator.default.awrap(
                _asyncStorage.default.getItem('@profilePicture'),
              );
            case 3:
              jsonValue = _context.sent;
              if (!(jsonValue != null && jsonValue !== undefined)) {
                _context.next = 9;
                break;
              }
              _context.next = 7;
              return _regenerator.default.awrap(
                addProfileImageLink({
                  variables: {
                    profileImageLink: JSON.stringify(JSON.parse(jsonValue)),
                  },
                })
                  .then(function (res) {
                    setProfilePicture(JSON.parse(res.data.addProfilePicture));
                  })
                  .catch(function (error) {
                    console.log('???', error);
                  }),
              );
            case 7:
              _context.next = 10;
              break;
            case 9:
              setProfilePicture(anonymousImage);
            case 10:
              _context.next = 15;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context.catch(0);
              console.log('error while getDataProfile', _context.t0);
            case 15:
            case 'end':
              return _context.stop();
          }
        }
      },
      null,
      null,
      [[0, 12]],
      Promise,
    );
  };
  var getDataStory = function getDataStory() {
    var jsonValue, value, val;
    return _regenerator.default.async(
      function getDataStory$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _regenerator.default.awrap(
                _asyncStorage.default.getItem('@storyPicture'),
              );
            case 3:
              jsonValue = _context2.sent;
              if (jsonValue != null && jsonValue !== undefined) {
                value = JSON.parse(jsonValue).uri;
                val = 0;
                stories.map(function (item) {
                  if (item.imageLink === value) {
                    val += 1;
                  }
                });
                if (val == 0) {
                  setStories(function (prev) {
                    return [].concat((0, _toConsumableArray2.default)(prev), [
                      {imageLink: value},
                    ]);
                  });
                  setBorderActive(true);
                }
              }
              _context2.next = 10;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2.catch(0);
              console.log('error while getDataStory', _context2.t0);
            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      },
      null,
      null,
      [[0, 7]],
      Promise,
    );
  };
  if (loading) {
    return _react.default.createElement(
      _reactNative.Text,
      {
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 125, columnNumber: 12},
      },
      "'Loading...'",
    );
  }
  if (error) {
    return _react.default.createElement(
      _reactNative.Text,
      {
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 128, columnNumber: 12},
      },
      '`Error! WTF is $',
      error.message,
      '`',
    );
  }
  return _react.default.createElement(
    _reactNative.View,
    {
      style: {flex: 1, alignItems: 'center', justifyContent: 'center'},
      __self: this,
      __source: {fileName: _jsxFileName, lineNumber: 134, columnNumber: 5},
    },
    _react.default.createElement(
      _reactNative.View,
      {
        style: styles.profileContainer,
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 135, columnNumber: 7},
      },
      _react.default.createElement(
        _reactNative.TouchableOpacity,
        {
          onPress: function onPress() {
            navigation.navigate('Stories', {
              stories: {stories: stories},
              handleBorderActivity: {
                handleBorderActivity: handleBorderActivity,
              },
            });
          },
          onLongPress: function onLongPress() {
            navigation.navigate('Profile Input');
          },
          style: styles.profile,
          __self: this,
          __source: {fileName: _jsxFileName, lineNumber: 136, columnNumber: 9},
        },
        _react.default.createElement(_reactNative.Image, {
          style: [
            styles.container,
            {borderColor: borderActive ? '#FAD02C' : 'grey'},
          ],
          source: profilePicture,
          __self: this,
          __source: {fileName: _jsxFileName, lineNumber: 147, columnNumber: 11},
        }),
      ),
      _react.default.createElement(
        _reactNative.View,
        {
          style: styles.roundButton,
          __self: this,
          __source: {fileName: _jsxFileName, lineNumber: 157, columnNumber: 9},
        },
        _react.default.createElement(
          _reactNative.TouchableOpacity,
          {
            onPress: buttonClickedHandler,
            style: styles.roundButton1,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 11,
            },
          },
          _react.default.createElement(
            _reactNative.View,
            {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 13,
              },
            },
            _react.default.createElement(
              _reactNative.Text,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 15,
                },
              },
              '+',
            ),
          ),
        ),
      ),
    ),
    _react.default.createElement(
      _reactNative.View,
      {
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 168, columnNumber: 7},
      },
      _react.default.createElement(
        _reactNative.Text,
        {
          __self: this,
          __source: {fileName: _jsxFileName, lineNumber: 169, columnNumber: 9},
        },
        data.getUserDetails.name,
      ),
    ),
    _react.default.createElement(
      _reactNative.View,
      {
        style: styles.bio,
        __self: this,
        __source: {fileName: _jsxFileName, lineNumber: 171, columnNumber: 7},
      },
      _react.default.createElement(
        _reactNative.Text,
        {
          __self: this,
          __source: {fileName: _jsxFileName, lineNumber: 172, columnNumber: 9},
        },
        data.getUserDetails.bio,
      ),
    ),
  );
}
var styles = _reactNative.StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: '#FAD02C',
    borderWidth: 5,
    marginBottom: 50,
    alignItems: 'center',
  },
  image: {height: 200, width: 200},
  roundButton: {justifyContent: 'center', alignItems: 'center'},
  roundButton1: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'orange',
    position: 'relative',
    marginTop: 70,
    marginRight: 100,
  },
  profileContainer: {flexDirection: 'row', position: 'relative'},
  profile: {flex: 1, position: 'relative', marginLeft: 96},
  bio: {justifyContent: 'center', alignItems: 'center'},
});
var _default = HomeScreen;
exports.default = _default;
