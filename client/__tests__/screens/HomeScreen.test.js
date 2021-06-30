import {MockedProvider} from '@apollo/client/testing';
import {shallow} from 'enzyme';
import React from 'react';
import HomeScreen, {USER_DETAILS} from '../../src/screens/HomeScreen';

const createTestProps = props => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

const UserDetailsMocks = [
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
];

describe('HomeScreen', () => {
  it('HomeScreen should render correctly', () => {
    const component = shallow(
      <MockedProvider addTypename>
        <HomeScreen />
      </MockedProvider>,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  describe('Navigation function should work correctly', () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(
        <MockedProvider addTypename>
          <HomeScreen {...props} />
        </MockedProvider>,
      );
    });

    // it('HandleNavigation function should work correctly', () => {
    //   //   const TouchableOpacity = wrapper.find('TouchableOpacity');
    //   //   console.log(TouchableOpacity.debug());
    //   console.log(wrapper.get(0).props.children);
    //   //   await SimpleImagePicker.props.handleNavigation();
    //   //   expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
    // });
  });

  it('should render loading state initially', () => {
    const props = createTestProps({});
    const wrapper = shallow(
      <MockedProvider mocks={[]}>
        <HomeScreen {...props} />
      </MockedProvider>,
    );

    console.log(wrapper.get(0).props.children);

    // const tree = component.toJSON();
    // expect(tree.children).toContain('Loading...');
  });

  //   it('should render the user details correctly', async () => {
  //     const props = createTestProps({});
  //     const wrapper = shallow(
  //       <MockedProvider mocks={[UserDetailsMocks]} addTypename={false}>
  //         <HomeScreen {...props} />
  //       </MockedProvider>,
  //     );

  //     // Wait for sometime for Contact mutation to execute
  //     await new Promise(resolve => setTimeout(resolve, 100));
  //     wrapper.update();

  //     console.log(wrapper.get(0));
  //   });
});
