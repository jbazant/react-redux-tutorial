import { rootReducer } from './rootReducer';
import { deleteArticleByIndex } from '../actions/articles';

describe('rootReducer', () => {
  it('should have correct initial state', () => {
    expect(rootReducer(undefined, { type: 'NULL_ACTION' })).toEqual({
      articles: ['item 1', 'item b'],
    });
  });

  describe('deleteArticleByIndex', () => {
    it('should delete correct article', () => {
      const newState = rootReducer(undefined, deleteArticleByIndex(1));
      expect(newState).toEqual({
        articles: ['item 1'],
      });
    });

    it('should return new state', () => {
      const oldState = {
        articles: ['a'],
      };

      const newState = rootReducer(oldState, deleteArticleByIndex(0));
      expect(newState).not.toBe(oldState);
    });
  });
});
