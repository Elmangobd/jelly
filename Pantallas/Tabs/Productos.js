import * as React from 'react';
import {Image, ScrollView,ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Btn} from '../../Componentes/Componentes';

const localImage = require("../../assets/Fondos/Arauco-Blanco1.png")
function Productos({ navigation }) {
  const regreso =()=>{
    navigation.navigate('welcome');
  }

    return (
      <View style={styles.container}>

        <ImageBackground source={localImage}  style={styles.image}>
          <View style={styles.encabezado}>
            <Btn img={require('../../assets/Logo/logo.png')} funcion={regreso} titulo={'      salir'} ></Btn>
            <View style={styles.banner}>
             <Image source={require('../../assets/Logo/titulo.png')} style={styles.titulo} ></Image>
            </View>
          </View>
          <View style={{paddingHorizontal:28,paddingVertical:0}}>
            <View style={styles.info}>
                <View>
                    <ScrollView  >

                    <View style={styles.contenidoscroll}>
                      <TouchableOpacity  onPress={()=>navigation.navigate('Gelatina de Fresa')}>
                        <View style={{width:400, height:120, backgroundColor:'white'}}>
                            <View>
                              <Text style={{fontSize: 20, color:'black', position:'absolute',paddingVertical:40,paddingHorizontal:120}}>Gelatina de Fresa</Text>
                            </View>
                            <View>
                             <Image source={require('../../assets/Productos/fresa.jpg') }style={styles.productos}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={()=>navigation.navigate('Gelatina de Fresa')}>
                        <View style={{width:400, height:120, backgroundColor:'white'}}>
                            <View>
                              <Text style={{fontSize: 20, color:'black', position:'absolute',paddingVertical:40,paddingHorizontal:120}}>Gelatina De Agua</Text>
                            </View>
                            <View>
                            <Image source={require('../../assets/Productos/2.png') }style={styles.productos}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={()=>navigation.navigate('Gelatina de Fresa')}>
                        <View style={{width:400, height:120, backgroundColor:'white'}}>
                            <View>
                              <Text style={{fontSize: 20, color:'black', position:'absolute',paddingVertical:40,paddingHorizontal:120}}>Gelatina De Frutos Rojos</Text>
                            </View>
                            <View>
                              <Image source={require('../../assets/Productos/3.png') }style={styles.productos}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={()=>navigation.navigate('Gelatina de Fresa')}>
                        <View style={{width:400, height:120, backgroundColor:'white'}}>
                            <View>
                              <Text style={{fontSize: 20, color:'black', position:'absolute',paddingVertical:40,paddingHorizontal:120}}>Gelatina De Yogurt</Text>
                            </View>
                            <View>
                              <Image source={require('../../assets/Productos/4.png') }style={styles.productos}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={()=>navigation.navigate('Gelatina de Fresa')}>
                        <View style={{width:400, height:120, backgroundColor:'white'}}>
                            <View>
                              <Text style={{fontSize: 20, color:'black', position:'absolute',paddingVertical:40,paddingHorizontal:120}}>Gelatina De Merengue</Text>
                            </View>
                            <View>
                              <Image source={require('../../assets/Productos/1.png') }style={styles.productos}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={()=>navigation.navigate('Gelatina de Fresa')}>
                        <View style={{width:400, height:120, backgroundColor:'white'}}>
                            <View>
                              <Text style={{fontSize: 20, color:'black', position:'absolute',paddingVertical:40,paddingHorizontal:120}}>Gelatina De Mango</Text>
                            </View>
                            <View>
                              <Image source={require('../../assets/Productos/mango.jpg') }style={styles.productos}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={()=>navigation.navigate('Gelatina de Fresa')}>
                        <View style={{width:400, height:120, backgroundColor:'white'}}>
                            <View>
                              <Text style={{fontSize: 20, color:'black', position:'absolute',paddingVertical:40,paddingHorizontal:120}}>Gelatina De Agua</Text>
                            </View>
                            <View>
                            <Image source={require('../../assets/Productos/2.png') }style={styles.productos}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={()=>navigation.navigate('Gelatina de Fresa')}>
                        <View style={{width:400, height:120, backgroundColor:'white'}}>
                            <View>
                              <Text style={{fontSize: 20, color:'black', position:'absolute',paddingVertical:40,paddingHorizontal:120}}>Gelatina De Agua</Text>
                            </View>
                            <View>
                            <Image source={require('../../assets/Productos/2.png') }style={styles.productos}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={()=>navigation.navigate('Gelatina de Fresa')}>
                        <View style={{width:400, height:120, backgroundColor:'white'}}>
                            <View>
                              <Text style={{fontSize: 20, color:'black', position:'absolute',paddingVertical:40,paddingHorizontal:120}}>Gelatina De Agua</Text>
                            </View>
                            <View>
                            <Image source={require('../../assets/Productos/2.png') }style={styles.productos}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={()=>navigation.navigate('Gelatina de Fresa')}>
                        <View style={{width:400, height:120, backgroundColor:'white'}}>
                            <View>
                              <Text style={{fontSize: 20, color:'black', position:'absolute',paddingVertical:40,paddingHorizontal:120}}>Gelatina De Agua</Text>
                            </View>
                            <View>
                            <Image source={require('../../assets/Productos/2.png') }style={styles.productos}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                      
                    </View>
                    </ScrollView>
                </View>
            </View>
          </View>
          


        </ImageBackground>
      
    </View>
    );
}
  

export default Productos

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
      paddingVertical:30,
      borderColor:'black',
      borderWidth:2,
      borderRadius:50
    },
    
    contenidoscroll:{
      paddingHorizontal:0,
      paddingVertical:10
    },
    productos:{
      height:100,
      width:100,
      borderRadius:20
      
      
    },
    image:{ 
      flex:1
    },
      
    });