import * as React from 'react';
import { FlatList } from 'react-native';
import { Article } from './Article';
import { useXState } from "../hooks/useXState";

export const Articles = () => {
  const [current] = useXState('articlesService')
  return (
    <FlatList
      data={current.context.articles}
      renderItem={({ item: { title } }) => <Article title={title}/>}
    />
  );
}
