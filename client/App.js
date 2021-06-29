/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ProfilePictureInput from './src/screens/ProfilePictureInput';
import StoryInputScreen from './src/screens/StoryInputScreen';
import StoryScreen from './src/screens/StoryScreen';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.35:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// 192.168.1.35

const Stack = createStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Stories" component={StoryScreen} />
          <Stack.Screen name="Stories Input" component={StoryInputScreen} />
          <Stack.Screen name="Profile Input" component={ProfilePictureInput} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;