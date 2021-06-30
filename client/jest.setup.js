import {NativeModules} from 'react-native';
// Mock the ImagePickerManager native module to allow us to unit test the JavaScript code
NativeModules.ImagePickerManager = {
  // eslint-disable-next-line no-undef
  showImagePicker: jest.fn(),
  // eslint-disable-next-line no-undef
  launchCamera: jest.fn(),
  // eslint-disable-next-line no-undef
  launchImageLibrary: jest.fn(),
};

NativeModules.RNGestureHandlerModule = {
  // eslint-disable-next-line no-undef
  attachGestureHandler: jest.fn(),
  // eslint-disable-next-line no-undef
  createGestureHandler: jest.fn(),
  // eslint-disable-next-line no-undef
  dropGestureHandler: jest.fn(),
  // eslint-disable-next-line no-undef
  updateGestureHandler: jest.fn(),
  State: {},
  Directions: {},
};

// Reset the mocks before each test
global.beforeEach(() => {
  // eslint-disable-next-line no-undef
  jest.clearAllMocks();
});
