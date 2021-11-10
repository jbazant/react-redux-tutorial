import { CLOSE_FORM, OPEN_FORM, SET_LOADING } from '../constants/newArticleForm';

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
