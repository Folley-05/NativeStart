import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

import AppRoot from './src/AppRoot'

export class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <StatusBar backgroundColor="#000" />
        <AppRoot />
      </View>
    )
  }
}

export default App

const styles=StyleSheet.create({
  app: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'red',
    backgroundColor: '#000'
  }
})


