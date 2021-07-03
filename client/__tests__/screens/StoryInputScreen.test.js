import {shallow} from 'enzyme';
import React from 'react';
import StoryInputScreen from '../../src/screens/StoryInputScreen';

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

/** Following are the tests for StoryInputScreen */
describe('StoryInputScreen', () => {
  /** Snapshot Testing */
  it('Component should render correctly', () => {
    const component = shallow(<StoryInputScreen />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  /** Navigation should be handled properly */
  it('HandleNavigation function should work correctly', async () => {
    let props = createTestProps({});
    let wrapper = shallow(<StoryInputScreen {...props} />);
    const SimpleImagePicker = wrapper.find('SimpleImagePicker').get(0);
    await SimpleImagePicker.props.handleNavigation();
    expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
  });
});
