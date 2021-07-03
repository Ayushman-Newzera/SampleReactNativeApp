import {MockedProvider} from '@apollo/client/testing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {mount} from 'enzyme';
import React from 'react';
import HomeScreen, {
  UPDATE_PROFILE,
  USER_DETAILS,
} from '../../src/screens/HomeScreen';
const wait = require('waait');

/** Variable to keep a track of the mutation error */
let mutationError = true;

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

/** Following are the mocks for the getUserDetails query and updateProfilePicture mutation */
const mocks = [
  {
    request: {
      query: USER_DETAILS,
    },
    result: {
      data: {
        getUserDetails: {
          id: 1,
          name: 'Byoung ho',
          bio: 'Photographer',
          profileImageLink:
            '{"uri":"file:///storage/emulated/0/Pictures/image-60611026-7ced-499c-972a-fb945c72120f.jpg"}',
        },
      },
    },
  },
  {
    request: {
      query: UPDATE_PROFILE,
      variables: {
        profileImageLink:
          '{"uri":"file:///storage/emulated/0/Pictures/image-820516d8-2143-4614-8c60-fb9862e6587a.jpg"}',
      },
    },
    result: () => {
      mutationError = false;
      return {
        data: {
          addProfilePicture:
            '{"uri":"file:///storage/emulated/0/Pictures/image-820516d8-2143-4614-8c60-fb9862e6587a.jpg"}',
        },
      };
    },
  },
];

/** Following are the tests for the Home Screen */
describe('HomeScreen', () => {
  /** Initially the screen should render the loading text */
  it('should render loading state initially', () => {
    const props = createTestProps({});
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <HomeScreen {...props} />
      </MockedProvider>,
    );

    expect(wrapper.text()).toBe('Loading...');
  });

  /** Once the loading is done, the screen should render the data */
  it('should render data after loading', async () => {
    const props = createTestProps({});
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen {...props} />
      </MockedProvider>,
    );

    await wait(0);
    wrapper.update();

    expect(wrapper.get(0)).toMatchSnapshot();

    expect(wrapper.text()[0]).toBe('+');
  });

  /**
   * If there is error while fetching the data from the server,
   * then the error message should be rendered on the screen
   */
  it('error part for query, should show error UI', async () => {
    const props = createTestProps({});

    const userDetailsMock = [
      {
        request: {
          query: USER_DETAILS,
        },
        error: new Error('here goes the error'),
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={userDetailsMock} addTypename={false}>
        <HomeScreen {...props} />
      </MockedProvider>,
    );

    await wait(0);
    wrapper.update();

    expect(wrapper.text()).toBe('`Error! WTF is $here goes the error`');
  });

  /**
   * If there is error while updating the profile picture,
   * then console should log the error
   */
  it('error part for mutation, should console log error', async () => {
    // console.log = jest.fn();
    AsyncStorage.getItem = jest.fn();
    useIsFocused.mockImplementation(() => true);

    AsyncStorage.getItem.mockImplementation(arg => {
      if (arg === '@profilePicture') {
        return '{"uri":"file:///storage/emulated/0/Pictures/image-820516d8-2143-4614-8c60-fb9862e6587a.jpg"}';
      } else if (arg === '@storyPicture') {
        return '{"uri":"file:///storage/emulated/0/Pictures/image-60611026-7ced-499c-972a-fb945c72120f.jpg"}';
      }
    });

    JSON.stringify = jest.fn();
    JSON.stringify.mockImplementation(
      () =>
        '{"uri":"file:///storage/emulated/0/Pictures/image-820516d8-2143-4614-8c60-fb9862e6587a.jpg"}',
    );

    const props = createTestProps({});
    const updateProfileMock = [
      {
        request: {
          query: USER_DETAILS,
        },
        result: {
          data: {
            getUserDetails: {
              id: 1,
              name: 'Byoung ho',
              bio: 'Photographer',
              profileImageLink:
                '{"uri":"file:///storage/emulated/0/Pictures/image-60611026-7ced-499c-972a-fb945c72120f.jpg"}',
            },
          },
        },
      },
      {
        request: {
          query: UPDATE_PROFILE,
          variables: {
            profileImageLink:
              '{"uri":"file:///storage/emulated/0/Pictures/image-820516d8-2143-4614-8c60-fb9862e6587a.jpg"}',
          },
        },
        error: {
          message: 'error for update profile mutation',
        },
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={updateProfileMock} addTypename={false}>
        <HomeScreen {...props} />
      </MockedProvider>,
    );

    await wait(1000);
    wrapper.update();
    expect(mutationError).toBe(true);
  });

  /** Navigation should be handled correctly */
  it('should handle navigation correctly', async () => {
    const props = createTestProps({});
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen {...props} />
      </MockedProvider>,
    );

    await wait(0);
    wrapper.update();

    const touchableOpacity1 = wrapper.find('TouchableOpacity').get(0);
    touchableOpacity1.props.onPress();
    wrapper.update();
    expect(props.navigation.navigate).toHaveBeenCalledTimes(1);

    touchableOpacity1.props.onLongPress();
    wrapper.update();
    expect(props.navigation.navigate).toHaveBeenCalledWith('Profile Input');

    const touchableOpacity2 = wrapper.find('TouchableOpacity').get(1);
    touchableOpacity2.props.onPress();
    wrapper.update();
    expect(props.navigation.navigate).toHaveBeenCalledWith('Stories Input');
  });

  /**
   * Should fetch correct data from the server for both the getUserDetails query
   * and updateProfilePicture mutation.
   */
  it('getDataStory and getDataStory should work correctly', async () => {
    AsyncStorage.getItem = jest.fn();

    useIsFocused.mockImplementation(() => true);

    AsyncStorage.getItem.mockImplementation(arg => {
      if (arg === '@profilePicture') {
        return '{"uri":"file:///storage/emulated/0/Pictures/image-820516d8-2143-4614-8c60-fb9862e6587a.jpg"}';
      } else if (arg === '@storyPicture') {
        return '{"uri":"file:///storage/emulated/0/Pictures/image-60611026-7ced-499c-972a-fb945c72120f.jpg"}';
      }
    });

    JSON.stringify = jest.fn();
    JSON.stringify.mockImplementation(
      () =>
        '{"uri":"file:///storage/emulated/0/Pictures/image-820516d8-2143-4614-8c60-fb9862e6587a.jpg"}',
    );

    const props = createTestProps({});
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen {...props} />
      </MockedProvider>,
    );

    await wait(100);
    wrapper.update();
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('@profilePicture');
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('@storyPicture');
  });

  /** Stories should not contain same images */
  it('stories should not contain same image', async () => {
    AsyncStorage.getItem = jest.fn();

    useIsFocused.mockImplementation(() => true);

    AsyncStorage.getItem.mockImplementation(arg => {
      if (arg === '@profilePicture') {
        return '{"uri":"file:///storage/emulated/0/Pictures/image-820516d8-2143-4614-8c60-fb9862e6587a.jpg"}';
      } else if (arg === '@storyPicture') {
        return '{"uri":"https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"}';
      }
    });

    JSON.stringify = jest.fn();
    JSON.stringify.mockImplementation(
      () =>
        '{"uri":"file:///storage/emulated/0/Pictures/image-820516d8-2143-4614-8c60-fb9862e6587a.jpg"}',
    );

    const props = createTestProps({});
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen {...props} />
      </MockedProvider>,
    );

    await wait(100);
    wrapper.update();
  });
});
