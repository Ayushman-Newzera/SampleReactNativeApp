import {shallow} from 'enzyme';
import React from 'react';
import ProfilePictureInput from '../../src/screens/ProfilePictureInput';

/**
 * Used to create an object of props
 * @param {object} props Custom props that needs to pass
 * @returns Props to be passed to the component/screen
 */
const createTestProps = props => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

/** Following are the tests for ProfilePictureInput Screen */
describe('ProfilePictureInput Screen', () => {
  /** Snapshot testing */
  it('Component should render correctly', () => {
    const component = shallow(<ProfilePictureInput />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  /** Navigation should be handled correctly */
  it('HandleNavigation function should work correctly', async () => {
    let props = createTestProps({});
    let wrapper = shallow(<ProfilePictureInput {...props} />);
    const SimpleImagePicker = wrapper.find('SimpleImagePicker').get(0);
    await SimpleImagePicker.props.handleNavigation();
    expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
  });
});
