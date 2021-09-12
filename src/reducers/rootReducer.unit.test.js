import { rootReducer } from "./rootReducer";

describe('rootReducer', () => {
  it('should have correct initial state', () => {
    expect(rootReducer(undefined, {type: 'NULL_ACTION'})).toEqual({
      articles: ['item 1', 'item b'],
    })
  });
});
