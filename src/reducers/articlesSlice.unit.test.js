import {
  addArticle,
  articlesReducer,
  closeForm,
  deleteArticle,
  openForm,
  setLoading,
} from './articlesSlice';

describe('articlesReducer', () => {
  it('should have correct initial state', () => {
    expect(articlesReducer(undefined, { type: 'NULL_ACTION' })).toEqual({
      items: ['item 1', 'item b'],
      form: { inputText: '', isOpen: false, isLoading: false },
    });
  });

  describe('deleteArticle', () => {
    it('should delete correct article', () => {
      const newState = articlesReducer(undefined, deleteArticle(1));
      expect(newState.items).toEqual(['item 1']);
    });

    it('should return new state', () => {
      const oldState = {
        items: ['a'],
      };

      const newState = articlesReducer(oldState, deleteArticle(0));
      expect(newState).not.toBe(oldState);
    });
  });

  describe('addArticle', () => {
    it('should add article', () => {
      const newState = articlesReducer(undefined, addArticle('item c'));

      expect(newState.items).toEqual(['item 1', 'item b', 'item c']);
    });
  });

  describe('form actions', () => {
    describe('openForm action', () => {
      it('should open the form', () => {
        const newState = articlesReducer(undefined, openForm());

        expect(newState.form.isOpen).toBe(true);
      });
    });

    describe('closeForm action', () => {
      it('should close the form', () => {
        const newState = articlesReducer({ form: { isOpen: true } }, closeForm());

        expect(newState.form.isOpen).toBe(false);
      });
    });

    describe('setLoading', () => {
      it('should set loading to true', () => {
        const newState = articlesReducer(undefined, setLoading(true));

        expect(newState.form.isLoading).toBe(true);
      });

      it('should set loading to false', () => {
        const newState = [setLoading(true), setLoading(false)].reduce(articlesReducer, undefined);

        expect(newState.form.isLoading).toBe(false);
      });
    });
  });
});
