import { DELETE_ARTICLE } from '../constants/articles';
import { fromJS } from "immutable";

const initialState = fromJS({
  articles: ['item 1', 'item b'],
});

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DELETE_ARTICLE:
      return state.deleteIn(['articles', payload.articleIndex]);

    default:
      return state;
  }
}
