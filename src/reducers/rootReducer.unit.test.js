// TODO note that this file is kept here just for reference and should be deleted in final version

describe('rootReducer', () => {

  it('should have correct initial state', () => {
    expect(rootReducer(undefined, { type: 'NULL_ACTION' })).toEqualImmutable(
      fromJS({
        articles: ['item 1', 'item b'],
        form: { inputText: '', isOpen: false, isLoading: false },
      })
    );
  });

  describe('deleteArticleByIndex', () => {
    it('should delete correct article', () => {
      const newState = rootReducer(undefined, deleteArticleByIndex(1));
      expect(newState.get('articles')).toEqualImmutable(fromJS(['item 1']));
    });

    it('should return new state', () => {
      const oldState = new Map({
        articles: new List(['a']),
      });

      const newState = rootReducer(oldState, deleteArticleByIndex(0));
      expect(newState).not.toBe(oldState);
    });
  });

  describe('addArticle', () => {
    it('should add article', () => {
      const newState = rootReducer(undefined, addArticle('item c'));

      expect(newState.get('articles')).toEqualImmutable(fromJS(['item 1', 'item b', 'item c']));
    });
  });

  describe('newArticleForm', () => {
    describe('OPEN_FORM action', () => {
      it('should open the form', () => {
        const newState = rootReducer(undefined, openNewArticlesForm());

        expect(newState.getIn(['form', 'isOpen'])).toBe(true);
      });
    });

    describe('CLOSE_FORM action', () => {
      it('should close the form', () => {
        const newState = rootReducer(fromJS({ form: { isOpen: true } }), closeNewArticlesForm());

        expect(newState.getIn(['form', 'isOpen'])).toBe(false);
      });
    });

    describe('SET_LOADING', () => {
      it('should set loading to true', () => {
        const newState = rootReducer(undefined, setLoading(true));

        expect(newState.getIn(['form', 'isLoading'])).toBe(true);
      });

      it('should set loading to false', () => {
        const newState = [setLoading(true), setLoading(false)].reduce(rootReducer, undefined);

        expect(newState.getIn(['form', 'isLoading'])).toBe(false);
      });
    });
  });
});
