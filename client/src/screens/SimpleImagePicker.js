// @flow

import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {COLORS, STYLES} from '../utilities/Styles';

export default function SimpleImagePicker(props) {
  //   const [imageSource, setImageSource] = useState(null);

  const storeData = async source => {
    try {
      const jsonValue = JSON.stringify(source);
      await AsyncStorage.setItem(props.asyncKey, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, async response => {
      // console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response.uri);
        let source = {uri: response.uri};
        storeData(source);
        props.handleNavigation();
      }
    });
  }

  return (
    <View
      style={[
        STYLES.flex,
        STYLES.centerContainer,
        {backgroundColor: COLORS.primaryDark},
      ]}>
      <Text style={[STYLES.title, {color: COLORS.primaryRed}]}>
        Simple Image Picker
      </Text>
      <TouchableOpacity
        onPress={selectImage}
        style={[
          STYLES.selectButtonContainer,
          {backgroundColor: COLORS.primaryLight},
        ]}>
        <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
      </TouchableOpacity>
    </View>
  );
}
