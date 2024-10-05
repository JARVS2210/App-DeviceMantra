import { StatusBar, StyleSheet, ScrollView, Text, View, SafeAreaView } from 'react-native';

import React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import TopTabs from './navigations/TopTabs';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TopTabs />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
