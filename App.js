import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import BookTransactionScreen from 'Screens/BookTransactionScreen'
import SearchScreen from 'Screens/SearchScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {

  render(){
    return(
      <AppContainer/>
    )

  }
}

const TabNavigator = createBottomTabNavigator ({
  transaction : {Screen: BookTransactionScreen},
  search : {Screen: SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)