import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NewArticleForm } from './NewArticleForm';
import { SummaryCard } from "./SummaryCard";
import { ArticlesCard } from "./ArticlesCard";

export const Base = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ArticlesCard />
      <SummaryCard setFormVisible={setFormVisible} />
      <NewArticleForm isVisible={isFormVisible} setVisible={setFormVisible} />
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
