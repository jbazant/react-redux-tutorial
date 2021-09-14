import { DELETE_ARTICLE } from '../constants/articles';

const initialState = {
  articles: ['item 1', 'item b'],
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((_, index) => index !== payload.articleIndex),
      };

    default:
      return state;
  }
}
