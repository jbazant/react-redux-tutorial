import { take, put, call, apply, race, delay } from 'redux-saga/effects';
import { FIND_ARTICLE_ON_SERVER } from '../constants/newArticleForm';
import { closeNewArticlesForm, setLoading } from '../actions/newArticlesForm';
import { addArticle } from '../actions/articles';

export function* findArticleSaga() {
  while (true) {
    const {
      payload: { articlePrefix },
    } = yield take(FIND_ARTICLE_ON_SERVER);

    yield put(setLoading(true));
    const apiCall = call(
      fetch,
      `https://bazant.dev/tools/titles.php?prefix=${articlePrefix}&?sleep=0`,
      { method: 'GET' }
    );
    const { delayedResponse } = yield race({
      delayedResponse: delay(10000),
      response: apiCall,
    });
    if (delayedResponse) {
      console.warn('It takes longer than usual');
    }
    const response = yield apiCall;
    if (response) {
      const json = yield apply(response, response.json, []);
      yield put(addArticle(json.title));

      yield put(setLoading(false));
      yield put(closeNewArticlesForm());
    }
  }
}
