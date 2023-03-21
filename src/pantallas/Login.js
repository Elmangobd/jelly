import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Morado2 from '../../assets/Morado2.png'
import logo from '../../assets/gel.png'
import { button1 } from '../common/button'
import { head1,head2,formgroup,label,input,link,link2,errormessage } from '../common/formcss'

const Login = ({navigation}) => {
  const [fdata, setFdata] = useState({
    email: '',
    password: ''
}) 

const [errormsg, setErrormsg] = useState(null);

const Sendtobackend = () => {
  // console.log(fdata);
  if (fdata.email == '' || fdata.password == '') {
    setErrormsg('todos los campos son requeridos');
    return;
  }
  else {
    fetch('http://192.168.5.8:3000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
    })
        .then(res => res.json()).then(
            data => {
                // console.log(data);
                if (data.error) {
                    setErrormsg(data.error);
                }
                else {
                    alert('inicio de sesion aprovado');
                    navigation.navigate('Homepage');
                }
            }
        )
}

}

  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={Morado2}/>

      <View style={styles.container1}>
          <View style={styles.s1}>
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.h1} onPress={() => navigation.navigate('welcome')}>Jelly delly</Text>
            <Text style={styles.small1}>equipo </Text>
          </View>

          <View style={styles.s2}>
            <Text style={head1}>inicio de secion</Text>
            <Text style={head2}>registrate para continuar</Text>
            {
              errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
            }
            <View style={formgroup}>
              <Text style={label}>Email</Text>
              <TextInput style={input}
              placeholder="ingresa tu email"
              onPressIn={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, email: text })}
              />
            </View>

            <View style={formgroup}>
              <Text style={label}>Password</Text>
              <TextInput style={input}
              placeholder="ingresa tu  password"
              secureTextEntry={true}
              onChangeText={(text) => setFdata({ ...fdata, password: text })}
              onPressIn={() => setErrormsg(null)}
              />
            </View >

            <View style={styles.fp}>
              <Text style={link}>olvidaste la contraseña</Text>
            </View>

            <Text style={button1}
            onPress={() => Sendtobackend()}
            > Login</Text>

            <Text style={link2}> no tienes cuenta?&nbsp;
              <Text style={link} onPress={() => navigation.navigate('Signup')}
              >Crea una nueva</Text> 
            </Text>

          </View>
      </View>
    </View>
  )
}

export default Login

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
  height:'45%'
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
  height:'60%',
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
},
logo:{
  
},
})