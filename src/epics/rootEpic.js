import { combineEpics } from 'redux-observable';
import { findArticleEpic } from "./findArticleEpic";

export const rootEpic = combineEpics(
  findArticleEpic
);
