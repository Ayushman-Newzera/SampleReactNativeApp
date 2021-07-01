import {MockedProvider} from '@apollo/client/testing';
// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {mount, shallow} from 'enzyme';
import React from 'react';
import ImagePicker from 'react-native-image-picker';
import wait from 'waait';
import SimpleImagePicker from '../../src/screens/SimpleImagePicker';

const options = {
  title: 'You can choose one image',
  maxWidth: 256,
  maxHeight: 256,
  storageOptions: {
    skipBackup: true,
  },
};

describe('UselessTextInputMultiline', () => {
  it('TextInput should render correctly', () => {
    const component = shallow(
      <MockedProvider>
        <SimpleImagePicker />
      </MockedProvider>,
    );
    // console.log(component.get(0).props.children);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  //   it('AsyncStorage should store when storeData is called', () => {
  //     // mockAsyncStorage.storeData = jest.fn();
  //     // // mockAsyncStorage.storeData('newData');
  //     // AsyncStorage.storeData = jest.fn();
  //     // AsyncStorage.storeData('newData');
  //     // const wrapper = shallow(
  //     //   <MockedProvider>
  //     //     <SimpleImagePicker />
  //     //   </MockedProvider>,
  //     // );
  //     // console.log(wrapper.get(0));
  //     // wrapper.update();
  //     // // expect(mockAsyncStorage.storeData).toHaveBeenCalledWith('newData');
  //     // expect(AsyncStorage.storeData).toHaveBeenCalledWith('newData');
  //   });

  describe('ImagePicker should work properly', () => {
    it('should console user cancelled when response.didCancel is true', async () => {
      const response = {
        didCancel: true,
        error: false,
        customButton: false,
        uri: 'hi',
      };

      console.log = jest.fn();

      ImagePicker.showImagePicker.mockImplementation((_, callback) =>
        callback(response),
      );

      const wrapper = mount(
        <MockedProvider>
          <SimpleImagePicker />
        </MockedProvider>,
      );
      // await wait(0);
      // wrapper.update();
      // console.log(wrapper.find('TouchableOpacity').length);
      const touchableOpacity = wrapper.find('TouchableOpacity').get(0);
      touchableOpacity.props.onPress();
      await wait(0);
      wrapper.update();
      expect(console.log).toHaveBeenCalledWith('User cancelled photo picker');
    });

    it('should console error when response.error is true', async () => {
      const response = {
        didCancel: false,
        error: 'Here is the error',
        customButton: false,
        uri: 'hi',
      };

      console.log = jest.fn();
      ImagePicker.showImagePicker.mockImplementation((_, callback) =>
        callback(response),
      );

      const wrapper = mount(
        <MockedProvider>
          <SimpleImagePicker />
        </MockedProvider>,
      );
      const touchableOpacity = wrapper.find('TouchableOpacity').get(0);
      touchableOpacity.props.onPress();
      await wait(0);
      wrapper.update();
      expect(console.log).toHaveBeenCalledWith(
        'ImagePicker Error: ',
        'Here is the error',
      );
      //   console.log(response);
    });

    it('should console custom button when response.customButton is truthy', async () => {
      const response = {
        didCancel: false,
        error: false,
        customButton: 'customButton',
        uri: 'hi',
      };
      console.log = jest.fn();

      ImagePicker.showImagePicker.mockImplementation((_, callback) =>
        callback(response),
      );

      const wrapper = mount(
        <MockedProvider>
          <SimpleImagePicker />
        </MockedProvider>,
      );
      const touchableOpacity = wrapper.find('TouchableOpacity').get(0);
      touchableOpacity.props.onPress();
      await wait(0);
      wrapper.update();
      expect(console.log).toHaveBeenCalledWith(
        'User tapped custom button: ',
        'customButton',
      );
    });

    it('should have selected the correct uri', async () => {
      const response = {
        didCancel: false,
        error: false,
        customButton: false,
        uri: 'hi',
      };

      console.log = jest.fn();

      ImagePicker.showImagePicker.mockImplementation((_, callback) =>
        callback(response),
      );

      const wrapper = mount(
        <MockedProvider>
          <SimpleImagePicker />
        </MockedProvider>,
      );
      const touchableOpacity = wrapper.find('TouchableOpacity').get(0);
      touchableOpacity.props.onPress();
      await wait(0);
      wrapper.update();
      expect(console.log).toHaveBeenCalledWith('hi');
    });
  });
});
