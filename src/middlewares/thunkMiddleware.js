export const thunkMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    typeof action === 'function' ? action(dispatch, getState) : next(action);
  }
