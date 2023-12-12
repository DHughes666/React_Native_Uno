/* eslint-disable prettier/prettier */
// Import libraries
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import CarList from './src/components/CarList';

// Create component
const App = () => {
  return (
    <View>
        <Header title={'Cars'}/>
        <CarList />
    </View>
  );
};

//render component to screen
AppRegistry.registerComponent('cars', () => App);
