import {MockedProvider} from '@apollo/client/testing';
import {mount, shallow} from 'enzyme';
import React from 'react';
import ImagePicker from 'react-native-image-picker';
import wait from 'waait';
import SimpleImagePicker from '../../src/screens/SimpleImagePicker';

/**
 * Following are the tests for SimpleImagePicker Screen
 */
describe('UselessTextInputMultiline', () => {
  /** Snapshot Testing */
  it('Component should render correctly', () => {
    const component = shallow(
      <MockedProvider>
        <SimpleImagePicker />
      </MockedProvider>,
    );

    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  /** Image should be picked correctly with the help of image picker */
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

      const touchableOpacity = wrapper.find('TouchableOpacity').get(0);
      touchableOpacity.props.onPress();
      await wait(0);
      wrapper.update();
      expect(console.log).toHaveBeenCalledWith('User cancelled photo picker');
    });

    /** Error should be consoled when the image picker is unable to pick the image */
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
    });

    /** Custom button should be consoled when the customButton property is truthy */
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

    /** Correct image uri should be selected by the image picker */
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
