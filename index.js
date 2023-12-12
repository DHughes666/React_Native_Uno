/* eslint-disable prettier/prettier */
// Import libraries
import React from 'react';
import {Text, AppRegistry} from 'react-native';

// Create component
const App = () => {
  return <Text>Hi there</Text>;
};

//render component to screen
AppRegistry.registerComponent('cars', () => App);
