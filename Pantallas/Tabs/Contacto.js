import  React,{useCallback} from 'react';
import {Image,ImageBackground, StyleSheet, Text, View, Linking,Alert, Button} from 'react-native';
import { color } from 'react-native-reanimated';
import {Btn} from '../../Componentes/Componentes';

const localImage = require("../../assets/Fondos/Arauco-Blanco1.png")

const supportedURL = 'https://google.com';


const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};




function Contacto({ navigation }) {

  const llamada = async()=>{
    await Linking.openURL("tel:7712676518");
  };
  const msg = async()=>{
    await Linking.openURL("sms:+527712676518?body=Hola me interesa conocer mas hacerca de sus productos");
  };
  const gmail = async()=>{
    await Linking.openURL("mailto:jesus.bta.01@gamil.com?subject=Hola me interesa conocer mas hacerca de sus productos&body=jesus ivan test");
  };
  const Watsapp = async()=>{
    await Linking.openURL("https://wa.me/7712676518?text=Hola me interesa conocer mas hacerca de sus productos");
  };
  const facebook = async()=>{
    await Linking.openURL("https://www.facebook.com/JellyDelly2022?mibextid=ZbWKwL");
  };
  const regreso =()=>{
    navigation.navigate('welcome');
  }
    return (
      
      <View style={styles.container}>
 
      <ImageBackground source={localImage}  style={styles.image}>
        <View style={styles.encabezado}>
          <Btn img={require('../../assets/Logo/logo.png')} funcion={regreso} titulo={'      salir'}></Btn>
          <View style={styles.banner}>
           <Image source={require('../../assets/Logo/titulo.png')} style={styles.titulo} ></Image>
          </View>
        </View>
        <View style={{paddingHorizontal:28,paddingVertical:0}}>
          <View style={styles.info}>
              <Text style={{paddingHorizontal:10, fontWeight:'800',fontSize: 25, color:'black'}}> Conoce mas sobre nosotros </Text>
              
             <View>
             <Text  style={{  fontWeight:'600',  fontSize: 30, paddingHorizontal:80, paddingVertical:25, position:'absolute', alignSelf:'flex-end'}} >Whatsapp</Text>
                 <Btn img={require('../../assets/Redes/whats.png') } funcion={Watsapp}></Btn>
                 
             </View>

             <View>
                <Text  style={{ fontWeight:'600',  fontSize: 30, paddingHorizontal:80, paddingVertical:25, position:'absolute', alignSelf:'flex-end'}} >facebook</Text> 
              <Btn img={require('../../assets/Redes/facebook.png')}   funcion={facebook}></Btn>
             </View>

             <View>
                <Text style={{  fontWeight:'600',  fontSize: 30, paddingHorizontal:100, paddingVertical:25, position:'absolute', alignSelf:'flex-end'}}>Gmail</Text>
              <Btn img={require('../../assets/Redes/email.png')} funcion={gmail} ></Btn>
             </View>
             
             <Text style={{paddingHorizontal:20,fontSize: 20,}}>Quieres ponerte en contacto con nosotros</Text>
             <View style={{height:50, width:300, backgroundColor:'white', paddingVertical:5}}>
             <Button title='SMS' onPress={msg} style={styles.botones}/>
             </View>
            <View style={{height:50, width:300,backgroundColor:'white',}}>
            <Button title='Llamada' onPress={llamada} style={styles.botones}/>
            </View>
             
             
             
          </View>
          
         
        </View>
        


      </ImageBackground>
    
  </View>
    );
}
  
  

export default Contacto


const styles = StyleSheet.create({

  container: {flex:1 },
  
  encabezado:{height:90,width:412, 
    paddingVertical:5, 
    paddingHorizontal:10, 
    backgroundColor:'#white',
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
  
  info: {backgroundColor:'#white',
   height:600,
    width:360,
    paddingHorizontal:30,
    paddingVertical:30,
    borderColor:'#640068f5',borderWidth:2,
    borderRadius:50
  },
  botones:{
  },
  image:{ 
    flex:1
  },
    
  });