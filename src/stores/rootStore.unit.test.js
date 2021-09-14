import { rootStore } from './rootStore';

describe('rootStore', () => {
  it('should demonstrate basics', () => {
    rootStore.subscribe(() => console.log('REDUX IS WORKING'));

    expect(rootStore.getState()).toEqual({
      articles: ['item 1', 'item b'],
    });

    rootStore.dispatch({ type: 'UNKNOWN_ACTION' });
    expect(rootStore.getState()).toEqual({
      articles: ['item 1', 'item b'],
    });

    rootStore.dispatch({ type: 'KNOWN ACTION' });
    expect(rootStore.getState()).toEqual({});
  });
});
