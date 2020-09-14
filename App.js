import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import facebook from './screens/fb'
import instagram from './screens/Ig'

export default class App extends React.Component {
 render() {
  return (
    
     <AppContainer />
  
  );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  });
  const TabNavigator = createBottomTabNavigator({
    facebook:{screen:facebook},
    instagram:{screen:instagram},
  });
  const AppContainer = createAppContainer(TabNavigator)