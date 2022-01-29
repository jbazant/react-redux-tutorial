import { Button, Card, Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openForm } from "../reducers/articlesSlice";

export const SummaryCard = () => {
  const articlesCount = useSelector((state) => state.articles.items.size);
  const dispatch = useDispatch();
  return (
    <Card>
      <View style={styles.stats}>
        <Text>Articles: {articlesCount}</Text>
        <Text>Duplicates: 0</Text>
      </View>
      <Card.Divider />
      <Button title="Add article" onPress={() => dispatch(openForm())} />
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
