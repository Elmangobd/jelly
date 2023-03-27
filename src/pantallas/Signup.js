import { StyleSheet, Text, View, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Morado2 from '../../assets/f.png'
import { button1 } from '../common/button'
import { head1,head2,formgroup,label,input,link,link2,input1,errormessage } from '../common/formcss'

const Signup = ({navigation}) => {

  const [fdata, setFdata] = useState({
    name: '',
    namep: '',
    namem: '',
    email: '',
    password: '',
    cpassword: '',
  })

  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend =() =>{
   // console.log(fdata);
    if (fdata.name == '' ||
      fdata.namep == '' ||
      fdata.namem == '' ||
      fdata.email == '' ||
      fdata.password == '' ||
      fdata.cpassword == '' ) {
      setErrormsg('todos los campos son requeridos');
      return;
    }
    else {
      if (fdata.password != fdata.cpassword) {
        setErrormsg('La contraseña y Confirmar contraseña deben ser iguales');
        return;
      }
      else {
        fetch('http://192.168.5.27:8000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(fdata)
        })
        .then(res => res.json()).then(
          data => {
            //console.log(data);
            if(data.error){
              setErrormsg(data.error);
            }
            else{
              alert('cuenta creada con exito');
              navigation.navigate('welcome');
            }
        })
    }
  }
}

  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={Morado2}/>

      <View style={styles.container1}>
          <View style={styles.s1}></View>

          <ScrollView style={styles.s2}>
            <Text style={head1}>Crear una nueva cuenta</Text>

            <Text style={link2}> Ya tienes cuenta?&nbsp; 
              <Text style={link} onPress={() => navigation.navigate('Login')}
              >Inicia sesion</Text> 
            </Text>
            {
              errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
            }
            <View style={formgroup}>
              <Text style={label}>Nombre</Text>
              <TextInput style={input} placeholder="Ingresa tu nombre"
              onPressIn={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, name: text })}
              />
            </View>
            <View style={formgroup}>
              <Text style={label}>Apellido paterno</Text>
              <TextInput style={input} placeholder="Ingresa tu primer apellido"
              onPressIn={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, namep: text })}
              />
            </View>
            <View style={formgroup}>
              <Text style={label}>Apellido materno</Text>
              <TextInput style={input} placeholder="Ingresa tu segundo apellido"
              onPressIn={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, namem: text })}
              />
            </View>
            <View style={formgroup}>
              <Text style={label}>Email</Text>
              <TextInput style={input} placeholder="Ingresa tu correo"
              onPressIn={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, email: text })}
              />
            </View>
            <View style={formgroup}>
              <Text style={label}>Contraseña</Text>
              <TextInput style={input} placeholder="Ingresa tu contraseña"
              onPressIn={() => setErrormsg(null)}
              secureTextEntry={true}
              onChangeText={(text) => setFdata({ ...fdata, password: text })}
              />
            </View>
            <View style={formgroup}>
              <Text style={label}> Confirma contraseña</Text>
              <TextInput style={input} placeholder="Ingresa de nuevo tu contraseña"
              onPressIn={() => setErrormsg(null)}
              secureTextEntry={true}
              onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
              />
            </View>
            
            <TouchableOpacity
              onPress={() => {
               Sendtobackend();
              }}
            >
              <Text style={button1}
              >Registrarse</Text>
            </TouchableOpacity>
          </ScrollView>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      display: 'flex'

  },
  patternbg: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
  },
  container1: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
  },
  s1: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '15%',
  },
  small1: {
      color: '#fff',
      fontSize: 17,
  }
  ,
  h1: {
      fontSize: 30,
      color: '#fff',
  },
  s2: {
      display: 'flex',
      backgroundColor: '#fff',
      width: '100%',
      height: '90%',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 20,

  },
  formgroup: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginVertical: 10,
  },
  label: {
      fontSize: 17,
      color: '#000',
      marginLeft: 10,
      marginBottom: 5,
  },
  input: {
      backgroundColor: "#FFB0CC",
      borderRadius: 20,
      padding: 10,
  },
  fp: {
      display: 'flex',
      alignItems: 'flex-end',
      marginHorizontal: 10,
      marginVertical: 5,
  }
})