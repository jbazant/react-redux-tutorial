import { DELETE_ARTICLE } from '../constants/articles';
import { fromJS } from 'immutable';
import { CLOSE_FORM, OPEN_FORM } from '../constants/newArticleForm';

const initialState = fromJS({
  articles: ['item 1', 'item b'],
  form: { inputText: '', isOpen: false },
});

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DELETE_ARTICLE:
      return state.deleteIn(['articles', payload.articleIndex]);
    case OPEN_FORM:
      return state.setIn(['form', 'isOpen'], true);
    case CLOSE_FORM:
      return state.setIn(['form', 'isOpen'], false);
    default:
      return state;
  }
}
