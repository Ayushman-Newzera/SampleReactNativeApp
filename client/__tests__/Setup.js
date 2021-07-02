import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {NativeModules} from 'react-native';
import 'react-native-gesture-handler/jestSetup';

/**
 * Configure enzyme
 */
configure({adapter: new Adapter()});
global.console.error = jest.fn();

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Mock the ImagePickerManager native module to allow us to unit test the JavaScript code
NativeModules.ImagePickerManager = {
  showImagePicker: jest.fn(),
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
};

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useIsFocused: jest.fn(),
  };
});
