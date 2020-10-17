
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookTransactionScreen from './Screens /BookTransactionScreens';
import SearchScreen from './Screens /SearchScreen';
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}
const tabnavigater=createBottomTabNavigator({
  transaction:{screen:BookTransactionScreen},
  search: {screen:SearchScreen},
})
const AppContainer=createAppContainer(tabnavigater)