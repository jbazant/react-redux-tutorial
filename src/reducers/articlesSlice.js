import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: ['item 1', 'item b'],
  form: { inputText: '', isOpen: false, isLoading: false },
}

export const findArticleOnServer = createAsyncThunk('articles/findOnServer', async (articlePrefix, thunkAPI) => {
  const response = await fetch(`https://bazant.dev/tools/titles.php?prefix=${articlePrefix}`, {
    method: 'GET',
  });
  const { title } = await response.json();

  // note that we can also dispatch actions here
  thunkAPI.dispatch(closeForm());
  return title;
});

const isPendingAction = ({ type }) => type.endsWith('/pending');
const isFinalAction = ({ type }) => type.endsWith('/fulfilled') || type.endsWith('/rejected');

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    deleteArticle: (state, { payload }) => {
      state.items.splice(payload)
    },
    addArticle: (state, { payload }) => {
      state.items.push(payload);
    },
    openForm: state => {
      state.form.isOpen = true;
    },
    closeForm: state => {
      state.form.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findArticleOnServer.fulfilled, (state, { payload }) => {
      state.items.push(payload);
      // this can be done here, or inside the thunk, or using matcher...
      //state.form.isOpen = false;
    })
    builder.addMatcher(isPendingAction, (state) => {
      state.form.isLoading = true;
    })
    builder.addMatcher(isFinalAction, (state) => {
      state.form.isLoading = false;
    })
  },
});

export const { deleteArticle, addArticle, openForm, closeForm } = articlesSlice.actions;

export const articlesReducer = articlesSlice.reducer
