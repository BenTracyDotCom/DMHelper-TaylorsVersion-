import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/store';
import { Provider } from 'react-redux';

import Counter from './src/features/counter'

export default function App() {
  return (
    <Provider store={store}>
      <View className="my-auto mx-auto">
        <Text className="text-xl">CI/CD to the play store bay beeeee</Text>
        <StatusBar style="auto" />
        <Counter />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
