import * as React from 'react';
import { FlatList } from 'react-native';
import { Article } from './Article';

export const Articles = () => (
  <FlatList
    data={[
      { key: 'a', title: 'item 1' },
      { key: 'b', title: 'item 2' },
    ]}
    renderItem={({item: {title}}) => <Article title={title} />}
  />
);
