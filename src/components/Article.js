import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Article = ({ title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    borderBottomWidth: 1,
  },
});
