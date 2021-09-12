import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Articles } from './Articles';

export const Base = () => (
  <SafeAreaView style={styles.container}>
    <Text>Yay!</Text>
    <Articles />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
