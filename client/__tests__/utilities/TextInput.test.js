import {shallow} from 'enzyme';
import React from 'react';
import UselessTextInputMultiline from '../../src/utilities/TextInput';

describe('UselessTextInputMultiline', () => {
  it('TextInput should render correctly', () => {
    const component = shallow(<UselessTextInputMultiline />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  it('Checking the placeholder value of TextInput', () => {
    const wrapper = shallow(<UselessTextInputMultiline />);
    expect(wrapper.find('UselessTextInput').get(0).props.placeholder).toBe(
      'Here goes your opinion!',
    );
  });

  // // currently, functionality of user opinion about the story is removed and thus this test is no longer required
  // // but have been kept for future references

  // it('TextInput should change according to the input', async () => {
  //   const wrapper = renderer.create(<UselessTextInputMultiline />);

  //   act(() => {
  //     wrapper.toJSON().children[0].props.onChangeText('hi');
  //   });

  //   expect(wrapper.toJSON().children[0].props.value).toBe('hi');
  // });
});
