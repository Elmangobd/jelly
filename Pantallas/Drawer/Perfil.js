import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Perfil = () => {
  return (
    <View style={styles.container}>
        <WebView source={{ uri: 'http://dispensadora.jellydellyuthh.com/Code.php' }} />
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})