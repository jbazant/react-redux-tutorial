// TODO note that this file is kept here just for reference and should be deleted in final version
// also note that we have deleted all actions creators and "action type constants"
const initialState = fromJS({
  articles: ['item 1', 'item b'],
  form: { inputText: '', isOpen: false, isLoading: false },
});

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DELETE_ARTICLE:
      return state.deleteIn(['articles', payload.articleIndex]);
    case ADD_ARTICLE:
      return state.update('articles', (articles) => articles.push(payload.article));
    case OPEN_FORM:
      return state.setIn(['form', 'isOpen'], true);
    case CLOSE_FORM:
      return state.setIn(['form', 'isOpen'], false);
    case SET_LOADING:
      return state.setIn(['form', 'isLoading'], payload.isLoading);
    default:
      return state;
  }
}
