import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NewArticleForm } from './NewArticleForm';
import { SummaryCard } from './SummaryCard';
import { ArticlesCard } from './ArticlesCard';
import { useMachine } from '@xstate/react';
import { articlesFormMachine } from '../machines/articlesFormMachine';

export const Base = () => {
  //const [isFormVisible, setFormVisible] = useState(false);
  const [state, send] = useMachine(articlesFormMachine);
  const isFormVisible = state.matches('open');

  return (
    <SafeAreaView style={styles.container}>
      <ArticlesCard />
      <SummaryCard toggleVisible={() => send('TOGGLE_FORM_VISIBILITY')} />
      <NewArticleForm isVisible={isFormVisible} toggleVisible={() => send('TOGGLE_FORM_VISIBILITY')} />
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
