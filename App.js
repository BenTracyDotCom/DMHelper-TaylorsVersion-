import { StatusBar } from 'expo-status-bar';
import { store } from './src/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import PrefsButton from "./src/features/preferences/PrefsButton";
import Launch from './src/screens/Launch';
import Home from './src/screens/Home';
import Spells from './src/screens/Spells';
import Spell from './src/screens/Spell';
import Encounter from './src/screens/Encounter';
import EncounterBuilder from './src/screens/EncounterBuilder';
import Campaign from './src/screens/Campaign';
import Initiative from './src/screens/Initiative';
import Monsters from './src/screens/Monsters.jsx'
import Monster from './src/screens/Monster.jsx'
import Debug from './src/screens/Debug';

import Equipments from "./src/screens/Equipments.jsx";
import Equipment from "./src/screens/Equipment.jsx";

import Weapons from "./src/screens/Weapons.jsx";
import Weapon from "./src/screens/Weapon.jsx";

import MagicItems from "./src/screens/MagicItems.jsx";
import MagicItem from "./src/screens/MagicItem.jsx";

import MonsterAdding from "./src/screens/MonsterAdding.jsx";
import Preferences from "./src/features/preferences/Preferences";

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
      <Preferences />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Launch">
          <Stack.Screen
            name="Launch"
            component={Launch}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Spells"
            component={Spells}
          />
          <Stack.Screen
            name="Spell"
            component={Spell}
          />
          <Stack.Screen
            name="Monsters"
            component={Monsters}
          />
          <Stack.Screen
            name="Initiative"
            component={Initiative}
            options={{ title: 'Roll initiative!' }}
          />
          <Stack.Screen
            name="MonsterAdding"
            component={MonsterAdding}
          />
          <Stack.Screen
            name="Monster"
            component={Monster}
          />
          <Stack.Screen
            name="Encounter"
            component={gestureHandlerRootHOC(Encounter)}
          />
          <Stack.Screen
            name="EncounterBuilder"
            component={EncounterBuilder}
            options={{
              title: "Build an Encounter",
            }}
          />
          <Stack.Screen
            name="Campaign"
            component={Campaign}
            options={({ route }) => ({
              title: route.params.name,
              headerRight: () => <PrefsButton />,
            })}
          />
          <Stack.Screen name="Equipments" component={Equipments} />
          <Stack.Screen name="Equipment" component={Equipment} />
          <Stack.Screen name="Debug" component={Debug} />
          <Stack.Screen name="Weapons" component={Weapons} />
          <Stack.Screen name="Weapon" component={Weapon} />
          <Stack.Screen name="MagicItems" component={MagicItems} />
          <Stack.Screen name="MagicItem" component={MagicItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    );
  }
}

