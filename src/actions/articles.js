import { DELETE_ARTICLE } from '../constants/articles';

export const deleteArticleByIndex = (articleIndex) => ({
  type: DELETE_ARTICLE,
  payload: {
    articleIndex,
  },
});
