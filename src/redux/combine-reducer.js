import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import counter from './counter/reducer'
import category from './category/reducer'
import featuredJob from './featuredJob/reducer'
import latestJob from './latestJob/reducer'
import auth from './auth/reducer'

const persistConfig = {
    key: 'root',
    storage
}

const combineReducer = combineReducers({
    counter,
    category,
    featuredJob,
    latestJob,
    auth,
})

const persistedReducer = persistReducer(persistConfig, combineReducer);

export default persistedReducer;