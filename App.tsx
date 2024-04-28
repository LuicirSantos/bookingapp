import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './src/routes/StackNavigation';
import { Provider } from 'react-redux';
import Store from './Store';

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <StackNavigation />
      </Provider>
    </>
  );
}


