import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/articles';
import { fromJS } from 'immutable';
import { CLOSE_FORM, OPEN_FORM, SET_LOADING } from '../constants/newArticleForm';

const initialState = fromJS({
  articles: ['item 1', 'item b'],
  form: { inputText: '', isOpen: false, isLoading: false },
});

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DELETE_ARTICLE:
      return state.deleteIn(['articles', payload.articleIndex]);
    case ADD_ARTICLE:
      return state.update('articles', (articles) => articles.push(payload.article));
    case OPEN_FORM:
      return state.setIn(['form', 'isOpen'], true);
    case CLOSE_FORM:
      return state.setIn(['form', 'isOpen'], false);
    case SET_LOADING:
      return state.setIn(['form', 'isLoading'], payload.isLoading);
    default:
      return state;
  }
}
