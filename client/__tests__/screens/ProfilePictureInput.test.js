import {shallow} from 'enzyme';
import React from 'react';
import ProfilePictureInput from '../../src/screens/ProfilePictureInput';

const createTestProps = props => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('UselessTextInputMultiline', () => {
  it('TextInput should render correctly', () => {
    const component = shallow(<ProfilePictureInput />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  describe('HandleNavigation function should work correctly', () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<ProfilePictureInput {...props} />);
    });

    it('HandleNavigation function should work correctly', async () => {
      const SimpleImagePicker = wrapper.find('SimpleImagePicker').get(0);
      await SimpleImagePicker.props.handleNavigation();
      expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
    });
  });
});
