import { Button, Card, Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useXState } from "../hooks/useXState";

export const SummaryCard = () => {
  const [current] = useXState('articlesService')
  const [_, send] = useXState('articlesFormService');

  return (
    <Card>
      <View style={styles.stats}>
        <Text>Articles: {current.context.articles.length}</Text>
        <Text>Duplicates: 0</Text>
      </View>
      <Card.Divider />
      <Button title="Add article" onPress={() => {
        send('TOGGLE_FORM_VISIBILITY')
      }} />
    </Card>
  );
}

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
});
