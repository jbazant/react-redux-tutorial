import {ADD_ARTICLE, DELETE_ARTICLE} from '../constants/articles';

export const deleteArticleByIndex = (articleIndex) => ({
  type: DELETE_ARTICLE,
  payload: {
    articleIndex,
  },
});

export const addArticle = (article) => ({
  type: ADD_ARTICLE,
  payload: {
    article
  }
})
