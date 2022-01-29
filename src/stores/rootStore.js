import { loggerMiddleware } from '../middlewares/loggerMiddleware';
import { censureMiddleware } from '../middlewares/censureMiddleware';
import { configureStore } from '@reduxjs/toolkit';
import { articlesReducer } from '../reducers/articlesSlice';

export const rootStore = configureStore({
  reducer: { articles: articlesReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([loggerMiddleware, censureMiddleware]),
});
