// @flow

import React from 'react';
import {StyleSheet, View} from 'react-native';

const ProgressBar = ({progress}) => {
  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, {width: `${progress * 100}%`}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    height: 11,
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 50,
  },
  progressBar: {
    height: 9,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderRadius: 4,
    marginTop: -1,
  },
});

export default ProgressBar;
