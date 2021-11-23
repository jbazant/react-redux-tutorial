import { all } from 'redux-saga/effects';
import { findArticleSaga } from './findArticleSaga';

export function* rootSaga() {
  yield all([findArticleSaga()]);
}
