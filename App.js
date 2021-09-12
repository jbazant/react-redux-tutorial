import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { Base } from './src/components/Base';
import { rootStore } from './src/stores/rootStore';

export default function App() {
  return (
    <Provider store={rootStore}>
      <Base />
      <StatusBar style="auto" />
    </Provider>
  );
}
