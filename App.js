import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/pantallas/Welcome';
import Login from './src/pantallas/Login';
import Signup from './src/pantallas/Signup';
export default function App() {
  return (
    <View style={styles.container}>
      {/*<Welcome/>*/}
      {/*<Login/>*/}
      <Signup/>
    </View>
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
