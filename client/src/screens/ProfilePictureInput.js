// @flow

import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleImagePicker from './SimpleImagePicker';

function ProfilePictureInput({route, navigation}) {
  const handleNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <SimpleImagePicker
        asyncKey="@profilePicture"
        handleNavigation={handleNavigation}
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
