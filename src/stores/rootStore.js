import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { loggerMiddleware } from '../middlewares/loggerMiddleware';
import { censureMiddleware } from '../middlewares/censureMiddleware';

export const rootStore = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, censureMiddleware)
);
