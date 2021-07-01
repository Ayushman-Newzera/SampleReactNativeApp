// @flow

import React from 'react';
import {TextInput, View} from 'react-native';

const UselessTextInput = props => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={400}
    />
  );
};

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState();

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => {
          onChangeText(text);
        }}
        placeholder="Here goes your opinion!"
        value={value}
      />
    </View>
  );
};

export default UselessTextInputMultiline;
