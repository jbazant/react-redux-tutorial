import { addArticle, articlesReducer, closeForm, deleteArticle, openForm, setLoading } from "./articlesSlice";

describe('articlesSlices', () => {
  it('should have correct initial state', () => {
    expect(articlesReducer(undefined, { type: 'NULL_ACTION' })).toStrictEqual({
      items: ['item 1', 'item b'],
      form: { inputText: '', isOpen: false, isLoading: false },
    });
  });

  describe('deleteArticleByIndex', () => {
    it('should delete correct article', () => {
      const nextState = articlesReducer(undefined, deleteArticle(1));
      expect(nextState.items).toEqual(['item 1']);
    });

    // note that this is here just for demonstration how immer takes care of it
    it('should return new state', () => {
      const oldState = {
        items: ['a'],
      };

      const nextState = articlesReducer(oldState, deleteArticle(0));
      expect(nextState).not.toBe(oldState);
    });
  });

  describe('addArticle', () => {
    it('should add article', () => {
      const nextState = articlesReducer(undefined, addArticle('item c'));

      expect(nextState.items).toEqual(['item 1', 'item b', 'item c']);
    });
  });

  describe('openForm', () => {
    it('should open the form', () => {
      const nextState = articlesReducer(undefined, openForm());

      expect(nextState.form.isOpen).toBe(true);
    });
  });

  describe('closeForm', () => {
    it('should close the form', () => {
      const nextState = articlesReducer({ form: { isOpen: true } }, closeForm());

      expect(nextState.form.isOpen).toBe(false);
    });
  });

  describe('setLoading', () => {
    it('should set loading to true', () => {
      const nextState = articlesReducer(undefined, setLoading(true));

      expect(nextState.form.isLoading).toBe(true);
    });

    it('should set loading to false', () => {
      const nextState = [setLoading(true), setLoading(false)].reduce(articlesReducer, undefined);

      expect(nextState.form.isLoading).toBe(false);
    });
  });
});
