import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { loggerMiddleware } from '../middlewares/loggerMiddleware';
import { censureMiddleware } from '../middlewares/censureMiddleware';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const rootStore = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, sagaMiddleware, censureMiddleware)
);
