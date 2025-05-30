
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Aleatorios from './src/componentes/aleatorios';
import Caprutados from './src/componentes/capturados';
import Favoritos from './src/componentes/favoritos';
import Lista from './src/componentes/lista';
import Usuario from './src/componentes/usuario';
import Pokemon from './src/componentes/pokemon';
import { AppContext, AppProvider } from './src/context/AppContext';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ListaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

function FavoritosStack() {
  return (
  <Stack.Navigator>
  <Stack.Screen name="Favoritos" component={FavoritosStack} />
  <Stack.Screen name="Pokemon" component={Pokemon} />
  </Stack.Navigator>
  );
  }

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Lista" component={ListaStack} />
          <Tab.Screen name="Aleatorios" component={Aleatorios} />
          <Tab.Screen name="Capturados" component={Caprutados} />
          <Tab.Screen name="Favoritos" component={Favoritos} />
          <Tab.Screen name="Usuario" component={Usuario} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
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
