import * as React from 'react';
import {Image, ScrollView,ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Btn} from '../../Componentes/Componentes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const localImage = require("../../assets/Fondos/Arauco-Blanco1.png")
const Principal=({navigation})=> {
  
  const regreso =()=>{
    navigation.navigate('welcome');
  }

  return (
    <View style={styles.container}>

        <ImageBackground source={localImage}  style={styles.image}>
          <View style={styles.encabezado}>
            <Btn img={require('../../assets/Logo/logo.png')} funcion={regreso} titulo={'    salir'}></Btn>
            <View style={styles.banner}>
             <Image source={require('../../assets/Logo/titulo.png')} style={styles.titulo} ></Image>
            </View>
          </View>
          <View style={{paddingHorizontal:28,paddingVertical:0,}}>
            <View style={styles.info}>
                <Text style={{fontSize: 20, color:'black',fontWeight:'600'}}> Bienvenido a Jelly-Delly </Text>
                <Text style={{fontSize: 15}}>Somos una empresa dedicada ala fabricacion de gelatinas, nuestra tienda es diferenciada de todas por la 
                      gran variedad de Productos con loss que contamos, te invito a dar una vistazo por nuestra apliacion  y 
                      conozcas mas de nosotros </Text>
                <Text></Text>
                <View >
                    <ScrollView  horizontal={true}>

                    <View style={styles.contenidoscroll}>
                      <View style={styles.imgescroll}>
                      <Image source={require('../../assets/Productos/1.png') }style={styles.productos}/>
                      </View>
                      <View style={styles.imgescroll}>
                      <Image source={require('../../assets/Productos/2.png') }style={styles.productos}/>
                      </View>
                      <View style={styles.imgescroll}>
                      <Image source={require('../../assets/Productos/3.png') }style={styles.productos}/>
                      </View>
                      <View style={styles.imgescroll}>
                      <Image source={require('../../assets/Productos/4.png') }style={styles.productos}/>
                      </View>
                      
                    </View>
                    </ScrollView>
                </View>
            </View>
          </View>
          


        </ImageBackground>
      
    </View>
  );
}

export default Principal

const styles = StyleSheet.create({

    container: {flex:1 },
    
    encabezado:{height:90,width:412, 
      paddingVertical:5, 
      paddingHorizontal:10, 
      backgroundColor:'white',
      //borderColor:'black',
      //borderWidth:2,
    },  
    menu:{alignSelf:'flex-start',
     width:50, height:50},
    banner:{
      
      paddingHorizontal:15,
      paddingVertical:15,
      position:'absolute',
      alignSelf:'flex-end',
      height:80,
      width:330
    },
    titulo:{
      borderColor:'white',
      borderWidth:2,
      borderRadius:50,
      height:50,
      width:300
    },
    
    info: {backgroundColor:'white',
     height:600,
      width:360,
      paddingHorizontal:30,
      paddingVertical:35,
      borderColor:'purple',borderWidth:2,
      borderRadius:50

    },
    
    contenidoscroll:{
      paddingHorizontal:0,
      paddingVertical:10,
      flexDirection: 'row'
    },
    imgescroll:{
      paddingVertical:40,paddingHorizontal:25,width:300, height:320, backgroundColor:'white'
    },
    productos:{
      height:250,
      width:250,
      borderRadius:50,
      borderColor:'purple',
      borderWidth:2
    },
    image:{ 
      flex:1
    },
      
    });