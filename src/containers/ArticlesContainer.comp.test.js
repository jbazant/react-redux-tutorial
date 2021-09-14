import React from 'react';
import { render } from '@testing-library/react-native';
import { ArticlesContainer } from './ArticlesContainer';
import { Provider } from 'react-redux';
import { rootStore } from '../stores/rootStore';

describe('ArticlesContainer', () => {
  it('should render data', () => {
    const { getByText } = render(<ArticlesContainer />, {
      wrapper: ({ children }) => <Provider store={rootStore}>{children}</Provider>,
    });

    expect(getByText('item 1')).toBeTruthy();
    expect(getByText('item b')).toBeTruthy();
  });
});
