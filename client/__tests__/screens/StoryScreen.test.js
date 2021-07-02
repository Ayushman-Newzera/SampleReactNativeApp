import {MockedProvider} from '@apollo/client/testing';
import {mount} from 'enzyme';
import React from 'react';
import StoryScreen from '../../src/screens/StoryScreen';

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
      stories: {stories},
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
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcars&psig=AOvVaw2tJrsSDJK_jfSHbgnx7FiX&ust=1625234888760000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCPDqrPOFwvECFQAAAAAdAAAAABAM',
  },
];

const handleBorderActivity = {
  handleBorderActivity: () => {
    // console.log('here');
  },
};

describe('UselessTextInputMultiline', () => {
  it('TextInput should render correctly', () => {
    const props = createStoryScreenProps();
    const wrapper = mount(
      <MockedProvider addTypename>
        <StoryScreen {...props} />
      </MockedProvider>,
    );

    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('useEffect and Timeout should work correctly', () => {
    jest.useFakeTimers();

    const props = createStoryScreenProps();
    const wrapper = mount(
      <MockedProvider addTypename>
        <StoryScreen {...props} />
      </MockedProvider>,
    );

    jest.advanceTimersByTime(6000);

    wrapper.update();

    expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
    wrapper.unmount();
  });

  it('If and else of useEffect should be working correctly', () => {
    jest.useFakeTimers();

    const props = createStoryScreenProps();
    props.route.params.stories = {
      stories: [
        {
          imageLink:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcars&psig=AOvVaw2tJrsSDJK_jfSHbgnx7FiX&ust=1625234888760000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCPDqrPOFwvECFQAAAAAdAAAAABAM',
        },
        {
          imageLink:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcars&psig=AOvVaw2tJrsSDJK_jfSHbgnx7FiX&ust=1625234888760000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCPDqrPOFwvECFQAAAAAdAAAAABAM',
        },
      ],
    };
    const wrapper = mount(
      <MockedProvider addTypename>
        <StoryScreen {...props} />
      </MockedProvider>,
    );

    jest.advanceTimersByTime(6000);

    wrapper.update();

    wrapper.unmount();
  });
});
