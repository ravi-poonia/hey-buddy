import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import * as types from './actions/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: ['feed'],
};

const appReducer = combineReducers(reducer);

const rootReducer = (state, action) => {
  if (action.type === types.LOG_OUT_FULFILLED) {
    state = {};
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, promise));

let persistor = persistStore(store);

export { store, persistor };
