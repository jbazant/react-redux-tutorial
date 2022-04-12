import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Base } from './src/components/Base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { MachinesProvider } from "./src/components/MachinesProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MachinesProvider>
          <Base />
          <StatusBar style="auto" />
        </MachinesProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
