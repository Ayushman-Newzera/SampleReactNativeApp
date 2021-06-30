// @flow

import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import UselessTextInputMultiline from '../utilities/TextInput';
import SimpleImagePicker from './SimpleImagePicker';

function StoryInputScreen({navigation}) {
  // useEffect(() => {
  //   navigation.pop();
  // }, [navigation]);

  const handleNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <SimpleImagePicker
        asyncKey="@storyPicture"
        handleNavigation={handleNavigation}
      />

      <UselessTextInputMultiline />

      <View style={styles.submitButton}>
        <Button title="Submit" onPress={() => navigation.navigate('Home')} />
      </View>
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
