/* eslint-disable import/prefer-default-export */
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from 'src/reducers';
import { ENABLE_REDUX_LOGGER } from 'src/config';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export function configureStore(preloadedState = {}) {

  const persistConfig = {
    key: 'GET_ORACLES',
    storage: storage,
    whitelist: ['oraclereducer']
  }

  const pReducer = persistReducer(persistConfig, rootReducer);

  const loggerMiddleware = createLogger();

  const middlewares = [thunkMiddleware];

  if (ENABLE_REDUX_LOGGER) {
    middlewares.push(loggerMiddleware);
  }

  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(pReducer, preloadedState, composedEnhancers);

  persistStore(store);

  return store
    

}
