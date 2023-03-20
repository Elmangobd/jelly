import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/pantallas/Welcome';
import Login from './src/pantallas/Login';
import Signup from './src/pantallas/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={Welcome}
      options={
        {
          headerShown: false
        }
      } />
      <Stack.Screen name="Login" component={Login}
      options={
        {
          headerShown: false
        }
      }  />
      <Stack.Screen name="Signup" component={Signup}
      options={
        {
          headerShown: false
        }
      }  />
    </Stack.Navigator>
  </NavigationContainer>

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
