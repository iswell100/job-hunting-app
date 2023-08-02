import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import counter from './counter/reducer'
import category from './category/reducer'

const persistConfig = {
    key: 'root',
    storage
}

const combineReducer = combineReducers({
    counter,
    category
})

const persistedReducer = persistReducer(persistConfig, combineReducer);

export default persistedReducer;