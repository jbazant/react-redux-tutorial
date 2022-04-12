import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NewArticleForm } from './NewArticleForm';
import { SummaryCard } from './SummaryCard';
import { ArticlesCard } from './ArticlesCard';

export const Base = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ArticlesCard />
      <SummaryCard />
      <NewArticleForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    justifyContent: 'space-between',
  },
});
