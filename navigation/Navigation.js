import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import First from '../components/First'
import Second from '../components/second/Second'
import Third from '../components/second/Third'

const Stack=createStackNavigator()

export class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="first" component={First} />
            <Stack.Screen name="second" component={Second} />
            <Stack.Screen name="third" component={Third} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigation
