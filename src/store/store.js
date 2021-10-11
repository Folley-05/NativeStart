import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { userReducer } from './reducers'

const persistConfig={
    key: 'root',
    storage: AsyncStorage
}

const rootReducer=combineReducers({userReducer})

const persistedReducer=persistReducer(persistConfig, rootReducer)

const store=createStore(persistedReducer)
let persistor=persistStore(store)

export {store, persistor}