import {shallow} from 'enzyme';
import React from 'react';
import StoryInputScreen from '../../src/screens/StoryInputScreen';

const createTestProps = props => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('UselessTextInputMultiline', () => {
  it('TextInput should render correctly', () => {
    const component = shallow(<StoryInputScreen />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  describe('rendering', () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<StoryInputScreen {...props} />);
    });

    it('should render a <View /> and go back to HomeScreen', async () => {
      //   console.log(wrapper.find('Button').get(0));
      const Button = wrapper.find('Button').get(0);
      await Button.props.onPress();
      wrapper.update();
      expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
    });
  });

  describe('HandleNavigation function should work correctly', () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<StoryInputScreen {...props} />);
    });

    it('HandleNavigation function should work correctly', async () => {
      const SimpleImagePicker = wrapper.find('SimpleImagePicker').get(0);
      await SimpleImagePicker.props.handleNavigation();
      expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
    });
  });
});
