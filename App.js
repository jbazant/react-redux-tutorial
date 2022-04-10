import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Base } from './src/components/Base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
          <Base />
          <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
