import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import FilesystemStorage from 'redux-persist-filesystem-storage'

import testReducer from './testReducer'

const persistConfig={
    key: 'brkp',
    storage: FilesystemStorage
}

const rootReducer=combineReducers({ test: testReducer })

const persistedReducer=persistReducer(persistConfig, rootReducer)

export const store=createStore(persistedReducer)
export const persistor=persistStore(store)