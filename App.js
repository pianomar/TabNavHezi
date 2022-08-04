import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/AppNavigator';
export default function App() {
  
  setupFonts();

  return (
    <AppNavigator />
  );
}

function setupFonts() {
  const [loaded] = useFonts({
    Quicksand: require('./assets/fonts/Quicksand-Regular.ttf'),
    QuicksandBold: require('./assets/fonts/Quicksand-Bold.ttf'),
  });

  if (!loaded) return <AppLoading />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
