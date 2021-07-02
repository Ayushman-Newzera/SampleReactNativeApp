// @flow

import {gql, useMutation, useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {client} from '../../App';

export const USER_DETAILS = gql`
  query UserDetails {
    getUserDetails {
      name
      bio
      profileImageLink
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfileMutation($profileImageLink: String) {
    addProfilePicture(profileImageLink: $profileImageLink)
  }
`;

// type HomeScreenNavigationProp = StackNavigationProp<{Home: undefined}, 'Home'>;

// type HomeScreenProps = {
//   navigation: HomeScreenNavigationProp,
// };

// type HomeScreenProps = {
//   navigation: PropTypes.object,
// };

function HomeScreen({navigation}) {
  // const {navigation} = props;
  const [borderActive, setBorderActive] = useState(true);

  const anonymousImage = {
    uri: 'https://image.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-260nw-1018631086.jpg',
  };

  const [profilePicture, setProfilePicture] = useState(anonymousImage);

  const [stories, setStories] = useState([
    {
      imageLink:
        'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
    },
  ]);

  const {loading, error, data} = useQuery(USER_DETAILS);

  const [addProfileImageLink] = useMutation(UPDATE_PROFILE); // Hooks should not be rendered conditionally

  const isFocused = useIsFocused();

  const handleBorderActivity = () => {
    setBorderActive(false);
  };

  useEffect(() => {
    getDataProfile();
    getDataStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const buttonClickedHandler = () => {
    navigation.navigate('Stories Input');
  };

  const getDataProfile = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@profilePicture');

      if (jsonValue != null && jsonValue !== undefined) {
        // console.log('string', JSON.stringify(JSON.parse(jsonValue)));
        await addProfileImageLink({
          variables: {
            profileImageLink: JSON.stringify(JSON.parse(jsonValue)),
          },
        })
          .then(res => {
            setProfilePicture(JSON.parse(res.data.addProfilePicture));
          })
          // eslint-disable-next-line no-shadow
          .catch(error => {
            console.log(error);
          });
      } else {
        setProfilePicture(anonymousImage);
      }
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const getDataStory = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storyPicture');

      if (jsonValue != null && jsonValue !== undefined) {
        const value = JSON.parse(jsonValue).uri;
        let val = 0;
        stories.map(item => {
          if (item.imageLink === value) {
            val += 1;
          }
        });
        // eslint-disable-next-line eqeqeq
        if (val == 0) {
          setStories(prev => [...prev, {imageLink: value}]);
          setBorderActive(true);
        }
      }
      // return jsonValue != null ? jsonValue : null;
    } catch (e) {
      // error reading value
    }
  };

  // useEffect(() => {
  //   console.log(loading, error, data);
  // }, [loading, error, data]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>`Error! WTF is ${error.message}`</Text>;
  }

  return (
    // <ApolloProvider client={client}>
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Stories', {
              stories: {stories},
              handleBorderActivity: {handleBorderActivity},
            });
          }}
          onLongPress={() => {
            navigation.navigate('Profile Input');
          }}
          style={styles.profile}>
          <Image
            style={[
              styles.container,
              // eslint-disable-next-line react-native/no-inline-styles
              {borderColor: borderActive ? '#FAD02C' : 'grey'},
            ]}
            source={profilePicture}
          />
        </TouchableOpacity>

        <View style={styles.roundButton}>
          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}>
            <View>
              <Text>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text>{data.getUserDetails.name}</Text>
      </View>
      <View style={styles.bio}>
        <Text>{data.getUserDetails.bio}</Text>
      </View>
    </View>
    // </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: '#FAD02C',
    borderWidth: 5,
    marginBottom: 50,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  roundButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'orange',
    position: 'relative',
    marginTop: 70,
    marginRight: 100,
  },
  profileContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  profile: {
    flex: 1,
    position: 'relative',
    marginLeft: 96,
  },
  bio: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// HomeScreen.PropTypes = {
//   navigation: PropTypes.array,
// };

export default HomeScreen;
