/* eslint-disable prettier/prettier */
// Import libraries
import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/Header';

// Create component
const App = () => {
  return (
    <>
        <Header />
    </>
  );
};

//render component to screen
AppRegistry.registerComponent('cars', () => App);
