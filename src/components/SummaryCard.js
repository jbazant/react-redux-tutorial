import { Button, Card, Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import React from 'react';

export const SummaryCard = ({setFormVisible}) => (
  <Card>
    <View style={styles.stats}>
      <Text>Articles: 2</Text>
      <Text>Duplicates: 0</Text>
    </View>
    <Card.Divider />
    <Button title="Add article" onPress={() => setFormVisible(true)} />
  </Card>
);

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
});
