import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Base } from './src/components/Base';
import { rootStore } from './src/stores/rootStore';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StoreProvider store={rootStore}>
          <Base />
          <StatusBar style="auto" />
        </StoreProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
