import {shallow} from 'enzyme';
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import UselessTextInputMultiline from '../../src/utilities/TextInput';

describe('UselessTextInputMultiline', () => {
  it('TextInput should render correctly', () => {
    const component = shallow(<UselessTextInputMultiline />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  it('Checking the placeholder value of TextInput', () => {
    const wrapper = shallow(<UselessTextInputMultiline />);
    // console.log(wrapper.find('UselessTextInput').get(0).props.placeholder);
    expect(wrapper.find('UselessTextInput').get(0).props.placeholder).toBe(
      'Here goes your opinion!',
    );
  });

  it('TextInput should change according to the input', async () => {
    // const onChangeText = jest.fn();
    const wrapper = renderer.create(<UselessTextInputMultiline />);

    // const TextInput = wrapper.find('UselessTextInput').get(0);
    act(() => {
      wrapper.toJSON().children[0].props.onChangeText('hi');
    });

    expect(wrapper.toJSON().children[0].props.value).toBe('hi');

    // wrapper.update();
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // console.log(TextInput);
    // console.log(TextInput.props.onChangeText);
    // TextInput.props.onChangeText.simulate({value: 'newValue'});
    // wrapper.update();
    // console.log(TextInput);
    // TextInput.simulate('change', {target: {value: 'newValue'}});
    // console.log(TextInput.get(0));

    // TextInput.simulate('onChangeText', {target: {value: 'NewValue'}});
    // // expect(onChangeText).toHaveBeenCalledWith('NewValue');
    // expect(TextInput.props.value).toBe('NewValue');
  });
});
