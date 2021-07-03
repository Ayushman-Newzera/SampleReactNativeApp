// @flow

import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {COLORS, STYLES} from '../utilities/Styles';

/**
 *
 * @param {props} props
 * @returns Image Picker Screen
 */
export default function SimpleImagePicker(props) {
  const storeData = async source => {
    try {
      const jsonValue = JSON.stringify(source);
      await AsyncStorage.setItem(props.asyncKey, jsonValue);
    } catch (e) {}
  };

  /** Utility function for the image picker */
  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    /**
     * Function to pick the image from image picker and storing that in the async storage
     *  and then navigating back to the home screen
     */
    ImagePicker.showImagePicker(options, async response => {
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
        {props.title}
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
