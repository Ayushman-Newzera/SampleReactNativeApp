// @flow

import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleImagePicker from './SimpleImagePicker';

/**
 *
 * @param {navigation} it is the navigation prop
 * @returns ProfilePictureInput Screen
 */
function ProfilePictureInput({navigation}) {
  /** Function to handle the navigation */
  const handleNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <SimpleImagePicker
        asyncKey="@profilePicture"
        handleNavigation={handleNavigation}
        title="Pick the image for your profile picture"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
});

export default ProfilePictureInput;
