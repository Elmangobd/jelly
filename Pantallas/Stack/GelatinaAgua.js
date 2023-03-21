import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
function GelatinaAgua() {
  return (
    <View style={styles.container}>
        <Text>agua</Text>
    </View>
  )
}

export default GelatinaAgua
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });