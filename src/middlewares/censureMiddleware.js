export const censureMiddleware = (store) => (next) => (action) => {
  if (action?.payload?.article) {
      action.payload.article = action.payload.article.replace(/fuck/i, 'censored');
  }
  next(action);
};
