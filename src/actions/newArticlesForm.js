import { CLOSE_FORM, OPEN_FORM, SET_LOADING } from '../constants/newArticleForm';
import { addArticle } from './articles';

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

export const getFromServer = async (url, dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    return await response.json();
  } catch (e) {
  } finally {
    dispatch(setLoading(false));
  }
};
// TODO rewrite with sagas
export const findArticleOnServer = (articlePrefix) => async (dispatch) => {
  const { title } = await getFromServer(
    `https://bazant.dev/tools/titles.php?prefix=${articlePrefix}`,
    dispatch
  );
  dispatch(addArticle(title));
  dispatch(closeNewArticlesForm());
};
