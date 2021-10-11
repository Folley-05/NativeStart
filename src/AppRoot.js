import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from './store/store'
import Navigation from './navigation/Navigation'

export class AppRoot extends Component {
    
    render() {
        // let persistor=persistStore(store)
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation />
                </PersistGate>
            </Provider>
        )
    }
}

export default AppRoot

const styles=StyleSheet.create({
    appRoot: {
        flex: 1,
    }
})
