import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { loggerMiddleware } from '../middlewares/loggerMiddleware';
import { censureMiddleware } from '../middlewares/censureMiddleware';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from "../epics/rootEpic";

const epicMiddleware = createEpicMiddleware();

export const rootStore = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, epicMiddleware, censureMiddleware)
);

epicMiddleware.run(rootEpic);
