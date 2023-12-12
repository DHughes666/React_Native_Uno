/* eslint-disable prettier/prettier */
// Import libraries
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/Header';
import CarList from './src/components/CarList';

// Create component
const App = () => {
  return (
    <>
        <Header title={'Cars'}/>
        <CarList />
    </>
  );
};

//render component to screen
AppRegistry.registerComponent('cars', () => App);
