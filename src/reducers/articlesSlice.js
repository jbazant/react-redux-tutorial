import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: ['item 1', 'item b'],
  form: { inputText: '', isOpen: false, isLoading: false },
}

// TODO 05-toolkit - write reducers https://redux-toolkit.js.org/api/createSlice
export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    deleteArticle: state => {},
    addArticle: state => {},
    openForm: state => {},
    closeForm: state => {},
    setLoading: state => {},
  }
});

export const {deleteArticle, addArticle, openForm, closeForm, setLoading} = articlesSlice.actions;

export const  articlesReducer = articlesSlice.reducer

// todo 05-toolkit this is an old code kept for reference
// you will need it when creating asyncThunk
const getFromServer = async (url, dispatch) => {
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

const findArticleOnServer = (articlePrefix) => async (dispatch) => {
  const { title } = await getFromServer(
    `https://bazant.dev/tools/titles.php?prefix=${articlePrefix}`,
    dispatch
  );
  dispatch(addArticle(title));
  dispatch(closeNewArticlesForm());
};
