import {shallow} from 'enzyme';
import React from 'react';
import StoryScreen from '../../src/screens/StoryScreen';
import {MockedProvider} from '@apollo/client/testing';

/**
 * Used to create an object of props
 * @param {object} props Custom props that needs to pass
 * @returns Props to be passed to the component/screen
 */
const createStoryScreenProps = props => ({
  navigation: {
    navigate: jest.fn(),
    pop: jest.fn(),
  },
  route: {
    params: {
      stories,
      handleBorderActivity,
    },
  },
  ...props,
});

/**
 * Constants
 */
const stories = [
  {
    imageLink:
      'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
  },
];

const handleBorderActivity = () => {
  console.log('here');
};

describe('UselessTextInputMultiline', () => {
  it('TextInput should render correctly', () => {
    const props = createStoryScreenProps();
    const wrapper = shallow(
      <MockedProvider addTypename>
        <StoryScreen {...props} />
      </MockedProvider>,
    );

    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
