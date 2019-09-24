import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import font from 'expo';

import HomeScreen from "./screens/HomeScreen"
import SelectScreen from "./screens/SelectScreen"
import ResultScreen from "./screens/ResultScreen"



//app navigator
const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Select: {screen: SelectScreen},
  Result: {screen: ResultScreen}


},
  {
    initialRouteName: "Home"
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component{

  render(){
    return <AppContainer/>
  }
}
