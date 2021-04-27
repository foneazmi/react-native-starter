import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalReducer} from '@reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const globalPersistConfig = {
  key: 'globalReducer',
  storage: AsyncStorage,
  blacklist: ['loading'],
};

const rootReducer = combineReducers({
  defaultReducer: () => [],
  globalReducer: persistReducer(globalPersistConfig, globalReducer),
});

const reducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
export const persistor = persistStore(store);
