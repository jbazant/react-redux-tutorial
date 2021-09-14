import { Button, Card, Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux'

export const SummaryCard = ({ setFormVisible }) => {
  const articlesCount = useSelector((state) => state.articles.length);
  return (
    <Card>
      <View style={styles.stats}>
        <Text>Articles: {articlesCount}</Text>
        <Text>Duplicates: 0</Text>
      </View>
      <Card.Divider />
      <Button title="Add article" onPress={() => setFormVisible(true)} />
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
