import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import patter from '../../assets/patter.png'
import logo from '../../assets/jelly.png'
import { button1 } from '../common/button'
import { head1,head2,formgroup,label,input,link,link2,input1 } from '../common/formcss'

const Signup = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={patter}/>

      <View style={styles.container1}>
          <View style={styles.s1}>
            
          </View>

          <View style={styles.s2}>
            <Text style={head1}>create una nueva cuenta</Text>
            <Text style={link2}> ya tienes cuenta?&nbsp; 
              <Text style={link}>inicia sesion</Text> 
            </Text>
            <View style={formgroup}>
              <Text style={label}>Nombre</Text>
              <TextInput style={input} placeholder="Ingresa tu nombre"/>
            </View>
            <View style={formgroup}>
              <Text style={label}>apellido paterno</Text>
              <TextInput style={input} placeholder="Ingresa tu primer apellido"/>
            </View>
            <View style={formgroup}>
              <Text style={label}>apellido materno</Text>
              <TextInput style={input} placeholder="Ingresa tu segundo apellido"/>
            </View>
            <View style={formgroup}>
              <Text style={label}>Email</Text>
              <TextInput style={input} placeholder="Ingresa tu correo"/>
            </View>
            <View style={formgroup}>
              <Text style={label}>contraseña</Text>
              <TextInput style={input} placeholder="Ingresa tu contraseña"/>
            </View>
            <View style={formgroup}>
              <Text style={label}> confirma contraseña</Text>
              <TextInput style={input} placeholder="Ingresa de nuevo tu contraseña"/>
            </View>
            
            <Text style={button1}> registarte</Text>
          </View>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    display:'flex'
},
patternbg:{
    position:'absolute',
    top:0,
    width:'100%',
    height:'100%',
    zIndex:-1,
},
container1:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  height:'100%',
  width:'100%'

},
s1:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  height:'20%'
},
small1:{
  color:'#fff',
  fontSize:17,
},
h1:{
  color:'#fff',
  fontSize:30,
},
s2:{
  display:'flex',
  backgroundColor:'#fff',
  width:'100%',
  height:'90%',
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  padding:20,
},
formgroup:{
  display:'flex',
  flexDirection:'column',
  width:'100%',
  marginVertical:10,
},
label:{
  fontSize:17,
  color:'#000',
  marginLeft:10,
  marginBottom:5,
},
input:{
  backgroundColor:'#FFB0CC',
  borderRadius:20,
  padding:10,

},
fp:{
  display:'flex',
  alignItems:'flex-end',
  marginHorizontal:10,
  marginVertical:10
}
})