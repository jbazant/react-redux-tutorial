import { rootReducer } from './rootReducer';
import {
  closeNewArticlesForm,
  deleteArticleByIndex,
  openNewArticlesForm,
} from '../actions/articles';
import { fromJS, List, Map } from 'immutable';
import * as matchers from 'jest-immutable-matchers';

describe('rootReducer', () => {
  beforeEach(function () {
    expect.extend(matchers);
  });

  it('should have correct initial state', () => {
    expect(rootReducer(undefined, { type: 'NULL_ACTION' })).toEqualImmutable(
      fromJS({
        articles: ['item 1', 'item b'],
        form: { inputText: '', isOpen: false },
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

  describe('newArticleForm', () => {
    describe('OPEN_FORM action', () => {
      it('should open the form', () => {
        const newState = rootReducer(undefined, openNewArticlesForm());

        expect(newState.getIn(['form', 'isOpen'])).toBe(true);
      });

      it('should close the form', () => {
        const newState = rootReducer(fromJS({ form: { isOpen: true } }), closeNewArticlesForm());

        expect(newState.getIn(['form', 'isOpen'])).toBe(false);
      });
    });
  });
});
