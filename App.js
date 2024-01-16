import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Launch from './src/screens/Launch';
import Campaign from './src/screens/Campaign';
import Encounter from './src/screens/Encounter';

import Counter from './src/features/counter'

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Scada: require("./assets/fonts/ScadaRegular400.ttf"),
    "Scada-Italic": require("./assets/fonts/ScadaItalic400.ttf"),
    "Scada-Bold": require("./assets/fonts/ScadaBold700.ttf"),
    "Scada-Bold-Italic": require("./assets/fonts/ScadaBoldItalic700.ttf"),
  });

  if(fontsLoaded){

    return (
      <Provider store={store}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Launch">
            <Stack.Screen
            name="Launch"
            component={Launch}
            />
            <Stack.Screen
            name="Campaign"
            component={Campaign}
            />
            <Stack.Screen
            name="Encounter"
            component={Encounter}
            />
          </Stack.Navigator>
          <View className="my-auto mx-auto">
            <Text className="text-xl">CI/CD to the play store bay beeeee</Text>
            <Counter />
          </View>
        </NavigationContainer>
      </Provider>
    );
  }
}

