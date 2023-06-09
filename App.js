import Welcome from './src/pantallas/Welcome';
import Login from './src/pantallas/Login';
import Signup from './src/pantallas/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { StyleSheet, Text, View, useWindowDimensions  } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Principal from './Pantallas/Tabs/Principal';

import Contacto from './Pantallas/Tabs/Contacto';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Ubicacion from './Pantallas/Drawer/Ubicacion';
import Perfil from './Pantallas/Drawer/Perfil';
import CustomDrawer from './Componentes/CustomDrawer';
import GelatinaFresa from './Pantallas/Stack/GelatinaFresa';
import GelatinaFrutosRojos from './Pantallas/Stack/GelatinaFrutosRojos';
import Tienda from './Pantallas/Stack/Tienda'
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


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
      <Stack.Screen name="Homepage" component={MyDrawer}
      options={
        {
          headerShown: false
        }
        
      } />
      <Stack.Screen name="Tienda" component={Tienda}
      options={
        {
          headerShown: false
        }
        
      } />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

function MyDrawer() {

  return (

    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#640068f5',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen name="Inicio" component={MyTabs} 
       options={{
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={22} color={color} />
        ),
      }}/>
      <Drawer.Screen name="Perfil IOT" component={Perfil} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="person-outline" size={22} color={color} />
        ),
      }}/>
      <Drawer.Screen name="Ubicacion" component={Ubicacion} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
        ),
      }}/>
    </Drawer.Navigator>
  );
}



const Stack = createNativeStackNavigator();
function MyTabs() {
  return (
    
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarStyle: {backgroundColor: '#640068f5'},
      tabBarInactiveTintColor: '#fff',
      tabBarActiveTintColor: 'yellow',
    }}>
        <Tab.Screen name="Principal" component={Principal} 
        options={
          {
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />),
          }}/>
        <Tab.Screen name="Tienda" component={Tienda}
        options={
          {
            tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="candy-cane" size={24} color={color} />),
          }}/>
        <Tab.Screen name="Contacto" component={Contacto}
        options={
          {
            tabBarIcon: ({ color, size }) => (
            <AntDesign name="contacts" size={24} color={color} />),
          }} />
    </Tab.Navigator>
  );
}

const Stack2 = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack2.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack2.Screen name="Productos" component={Productos} />
      <Stack2.Screen name="Gelatina de Fresa" component={GelatinaFresa} />
      <Stack2.Screen name="Gelatina de Frutos rojos" component={GelatinaFrutosRojos} />
    </Stack2.Navigator>
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
