import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
// import '@react-native-image-picker';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {NativeModules} from 'react-native';
import 'react-native-gesture-handler/jestSetup';

/**
 * Configure enzyme
 */
configure({adapter: new Adapter()});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Mock the ImagePickerManager native module to allow us to unit test the JavaScript code
NativeModules.ImagePickerManager = {
  showImagePicker: jest.fn(),
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
};

// jest.mock('@react-native-image-picker', () => ({
//   showImagePicker: jest.fn(),
//   launchCamera: jest.fn(),
//   launchImageLibrary: jest.fn(),
// }));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
      useNavigation: jest.fn(),
      useIsFocused: jest.fn(),
      useFocusEffect: jest.fn(),
    }),
  };
});
