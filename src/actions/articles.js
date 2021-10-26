import { DELETE_ARTICLE } from '../constants/articles';
import { CLOSE_FORM, OPEN_FORM } from '../constants/newArticleForm';

export const deleteArticleByIndex = (articleIndex) => ({
  type: DELETE_ARTICLE,
  payload: {
    articleIndex,
  },
});

export const openNewArticlesForm = () => ({
  type: OPEN_FORM,
});

export const closeNewArticlesForm = () => ({
  type: CLOSE_FORM,
});
