var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=SimpleImagePicker;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _Styles=require("../utilities/Styles");var _reactNativeImagePicker=_interopRequireDefault(require("react-native-image-picker"));var _asyncStorage=_interopRequireDefault(require("@react-native-async-storage/async-storage"));var _jsxFileName="/Users/ayushman/Desktop/SampleReactNativeApp1/client/src/screens/SimpleImagePicker.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function SimpleImagePicker(props){var _useState=(0,_react.useState)(null),_useState2=(0,_slicedToArray2.default)(_useState,2),imageSource=_useState2[0],setImageSource=_useState2[1];var storeData=function storeData(source){var jsonValue;return _regenerator.default.async(function storeData$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;jsonValue=JSON.stringify(source);_context.next=4;return _regenerator.default.awrap(_asyncStorage.default.setItem(props.asyncKey,jsonValue));case 4:_context.next=8;break;case 6:_context.prev=6;_context.t0=_context["catch"](0);case 8:case"end":return _context.stop();}}},null,null,[[0,6]],Promise);};var getData=function getData(){var jsonValue;return _regenerator.default.async(function getData$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return _regenerator.default.awrap(_asyncStorage.default.getItem("@profilePicture"));case 3:jsonValue=_context2.sent;return _context2.abrupt("return",jsonValue!=null?JSON.parse(jsonValue):null);case 7:_context2.prev=7;_context2.t0=_context2["catch"](0);case 9:case"end":return _context2.stop();}}},null,null,[[0,7]],Promise);};function selectImage(){var options={title:'You can choose one image',maxWidth:256,maxHeight:256,storageOptions:{skipBackup:true}};_reactNativeImagePicker.default.showImagePicker(options,function _callee(response){var source;return _regenerator.default.async(function _callee$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(response.didCancel){console.log('User cancelled photo picker');_reactNative.Alert.alert('You did not select any image');}else if(response.error){console.log('ImagePicker Error: ',response.error);}else if(response.customButton){console.log('User tapped custom button: ',response.customButton);}else{source={uri:response.uri};console.log({source:source});storeData(source);props.handleNavigation();}case 1:case"end":return _context3.stop();}}},null,null,null,Promise);});}return _react.default.createElement(_reactNative.View,{style:[_Styles.STYLES.flex,_Styles.STYLES.centerContainer,{backgroundColor:_Styles.COLORS.primaryDark}],__self:this,__source:{fileName:_jsxFileName,lineNumber:68,columnNumber:9}},_react.default.createElement(_reactNative.Text,{style:[_Styles.STYLES.title,{color:_Styles.COLORS.primaryRed}],__self:this,__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:9}},"Simple Image Picker"),_react.default.createElement(_reactNative.TouchableOpacity,{onPress:selectImage,style:[_Styles.STYLES.selectButtonContainer,{backgroundColor:_Styles.COLORS.primaryLight}],__self:this,__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:9}},_react.default.createElement(_reactNative.Text,{style:_Styles.STYLES.selectButtonTitle,__self:this,__source:{fileName:_jsxFileName,lineNumber:86,columnNumber:13}},"Pick an image")));}