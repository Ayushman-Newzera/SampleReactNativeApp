import {MockedProvider} from '@apollo/client/testing';
// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {shallow} from 'enzyme';
import React from 'react';
import SimpleImagePicker from '../../src/screens/SimpleImagePicker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

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
  //     // mockAsyncStorage.storeData('newData');
  //     AsyncStorage.storeData = jest.fn();
  //     AsyncStorage.storeData('newData');
  //     const wrapper = shallow(
  //       <MockedProvider>
  //         <SimpleImagePicker />
  //       </MockedProvider>,
  //     );
  //     console.log(wrapper.get(0));
  //     wrapper.update();
  //     // expect(mockAsyncStorage.storeData).toHaveBeenCalledWith('newData');
  //     expect(AsyncStorage.storeData).toHaveBeenCalledWith('newData');
  //   });
});
