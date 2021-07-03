// @flow

import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleImagePicker from './SimpleImagePicker';

/**
 *
 * @param {navigation} it is the prop to handle navigation
 * @returns StoryInput Screen
 */
function StoryInputScreen({navigation}) {
  /** Function to handle navigation */
  const handleNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <SimpleImagePicker
        asyncKey="@storyPicture"
        handleNavigation={handleNavigation}
        title="Pick the image for your story"
      />

      {/* currently we are not using the below functionality  */}

      {/* <UselessTextInputMultiline /> */}

      {/* <View style={styles.submitButton}>
        <Button title="Submit" onPress={() => navigation.navigate('Home')} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  buttonContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  lowerButton: {
    position: 'relative',
    marginLeft: 50,
  },
  submitButton: {
    position: 'relative',
    width: 150,
    marginTop: 50,
    marginLeft: 120,
    marginBottom: 50,
  },
});

export default StoryInputScreen;
