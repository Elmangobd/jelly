import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import patter from '../../assets/patter.png'
import { button1 } from '../common/button'
const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={patter}/>
      {/*<Text style={styles.head}>HOLA</Text>*/}
      <View style={styles.container1}>
            {/*<Text style={styles.head} > Welcome to</Text>*/}
           {/* <Image style={styles.logo} source={require('../../assets/jelly.png')}/>*/}
           <Text style={button1}>Login</Text>
           <Text style={button1}>Signup</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },
    patternbg:{
        position:'absolute',
        top:0,
        width:'100%',
        height:'100%',
        zIndex:-1,
    },
    head:{
      fontSize:30,
      colo:'#fff'
    },
    container1:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
    },
    logo:{

    },
    x:{
      minWidth:200,

    }
 
})