import { Button, Card, Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openNewArticlesForm } from '../actions/articles';

export const SummaryCard = () => {
  const articlesCount = useSelector((state) => state.get('articles').size);
  //const duplicatesCount = useSelector((state) => state.articles).reduce((duplicatesCount,title)=>{});
  const dispatch = useDispatch();
  return (
    <Card>
      <View style={styles.stats}>
        <Text>Articles: {articlesCount}</Text>
        <Text>Duplicates: 0</Text>
      </View>
      <Card.Divider />
      <Button title="Add article" onPress={() => dispatch(openNewArticlesForm())} />
    </Card>
  );
};

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
});
