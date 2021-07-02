// // currently functionality of user opinion about the story is removed and thus this component is no longer required

// // @flow

// import React from 'react';
// import {StyleSheet, TextInput, View} from 'react-native';

// const UselessTextInput = props => {
//   return (
//     <TextInput
//       {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//       editable
//       maxLength={400}
//     />
//   );
// };

// const UselessTextInputMultiline = () => {
//   const [value, onChangeText] = React.useState();

//   return (
//     <View
//       // eslint-disable-next-line react-native/no-inline-styles
//       style={[styles.container, {borderColor: value}]}>
//       <UselessTextInput
//         multiline
//         numberOfLines={4}
//         onChangeText={text => {
//           onChangeText(text);
//         }}
//         placeholder="Here goes your opinion!"
//         value={value}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     borderBottomColor: '#000000',
//     borderBottomWidth: 1,
//   },
// });

// export default UselessTextInputMultiline;
