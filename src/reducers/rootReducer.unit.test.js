import { rootReducer } from './rootReducer';
import { deleteArticleByIndex } from '../actions/articles';
import { fromJS, List, Map } from "immutable";
import * as matchers from 'jest-immutable-matchers';

describe('rootReducer', () => {
  beforeEach(function () {
    expect.extend(matchers);
  });

  it('should have correct initial state', () => {
    expect(rootReducer(undefined, { type: 'NULL_ACTION' })).toEqualImmutable(fromJS({
      articles: ['item 1', 'item b'],
    }));
  });

  describe('deleteArticleByIndex', () => {
    it('should delete correct article', () => {
      const newState = rootReducer(undefined, deleteArticleByIndex(1));
      expect(newState).toEqualImmutable(fromJS({
        articles: ['item 1'],
      }));
    });

    it('should return new state', () => {
      const oldState = new Map({
        articles: new List(['a']),
      });

      const newState = rootReducer(oldState, deleteArticleByIndex(0));
      expect(newState).not.toBe(oldState);
    });
  });
});
