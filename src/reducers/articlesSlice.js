import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const findArticleOnServer = createAsyncThunk(
  'articles/findOnServer',
  async (articlePrefix, thunkAPI) => {
    const response = await fetch(`https://bazant.dev/tools/titles.php?prefix=${articlePrefix}`, {
      method: 'GET',
    });
    const { title } = await response.json();
    return title;
  }
);

const isPendingAction = ({ type }) => type.endsWith('/pending');
const isFinalAction = ({ type }) => type.endsWith('/fulfilled') || type.endsWith('/rejected');

const initialState = {
  items: ['item 1', 'item b'],
  form: { inputText: '', isOpen: false, isLoading: false },
};

// TODO 05-toolkit - write reducers https://redux-toolkit.js.org/api/createSlice
export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    deleteArticle: (state, action) => {
      state.items.splice(action.payload);
    },
    addArticle: (state, action) => {
      state.items.push(action.payload);
    },
    openForm: (state) => {
      state.form.isOpen = true;
    },
    closeForm: (state) => {
      state.form.isOpen = false;
    },
    setLoading: (state, action) => {
      state.form.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(findArticleOnServer.pending, (state) => {
    //   state.form.isLoading = true;
    // });
    builder.addCase(findArticleOnServer.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.form.isOpen = false;
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.form.isLoading = true;
    });
    builder.addMatcher(isFinalAction, (state) => {
      state.form.isLoading = false;
    });
  },
});

export const { deleteArticle, addArticle, openForm, closeForm, setLoading } = articlesSlice.actions;

export const articlesReducer = articlesSlice.reducer;
