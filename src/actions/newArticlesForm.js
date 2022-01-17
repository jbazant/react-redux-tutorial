import {
  CLOSE_FORM,
  FIND_ARTICLE_ON_SERVER,
  OPEN_FORM,
  SET_LOADING,
} from '../constants/newArticleForm';

export const openNewArticlesForm = () => ({
  type: OPEN_FORM,
});

export const closeNewArticlesForm = () => ({
  type: CLOSE_FORM,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: { isLoading },
});

export const findArticleOnServer = (articlePrefix) => ({
  type: FIND_ARTICLE_ON_SERVER,
  payload: { articlePrefix },
});
