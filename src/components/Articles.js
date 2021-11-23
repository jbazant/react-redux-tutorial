import * as React from 'react';
import { FlatList } from 'react-native';
import { Article } from './Article';

export const Articles = ({ data, deleteArticleByIndex }) => (
  <FlatList
    data={data}
    renderItem={({ item: { title, index } }) => (
      <Article title={title} index={index} deleteArticleByIndex={deleteArticleByIndex} />
    )}
  />
);
