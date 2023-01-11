import {createStore, applyMiddleware, compose} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {rootReducer} from './reducers';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import {AppActions} from '.';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';


export const history = createBrowserHistory();
declare global {
  interface Window {
    _REDUX_DEVTOOLS_EXTENSION_COMPOSE_: any;
  }
}

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const composedEnhancers = composeEnhancers(
    applyMiddleware(
      thunk as ThunkMiddleware<AppState, AppActions>,
      routerMiddleware(history),
    ),
  );
  return createStore(persistedReducer, composedEnhancers);
};

const store = configureStore();
const persistor = persistStore(store);

export {store, persistor};

export type AppState = ReturnType<typeof persistedReducer>;