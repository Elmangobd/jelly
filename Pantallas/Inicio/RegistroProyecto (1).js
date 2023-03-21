import { StyleSheet, Text, TextInput, View, Image, Alert, TouchableOpacity } from 'react-native';
import React from 'react'
import { BtnProyecto, Caja} from '../componentes/Componentes.js';

const RegistroProyecto=({navigation})=>{
    return (
        <View style={styles.contenedor}>

            <Image source={require('../assets/logo2.png')} style={styles.banner}/>
            <Text style={styles.titulo}>Ingrese sus datos</Text>
            <TextInput placeholder='Ingrese su nombre' placeholderTextColor='rgb(225, 225, 225)' style={styles.cajas}/>
            <TextInput placeholder='Ingrese su Apellido Paterno' placeholderTextColor='rgb(225, 225, 225)' style={styles.cajas}/>
            <TextInput placeholder='Ingrese su Apellido Materno' placeholderTextColor='rgb(225, 225, 225)' style={styles.cajas}/>
            <TextInput placeholder='Ingrese su Email' placeholderTextColor='rgb(225, 225, 225)' style={styles.cajas}/>
            <TextInput placeholder='Cree un Nombre de Usuario' placeholderTextColor='rgb(225, 225, 225)' style={styles.cajas}/>
            <TextInput placeholder='Cree una Contraseña' placeholderTextColor='rgb(225, 225, 225)' style={[styles.cajas,{marginBottom:20}]}/>
            
            <BtnProyecto titulo={'Registrar'} color='black' funcion={()=>navigation.navigate('Login')}/>
                        

        </View>

    )
}

export default RegistroProyecto

const styles = StyleSheet.create({
    titulo:{
        fontWeight:'bold',
        fontSize:20,
        marginBottom:10,
    },
    texto:{
        fontWeight:'bold',
        fontSize:18
    },
    contenedor:{
        borderColor: '#000',
        boderWidth:1,
        flex:1,
        alignSelf:'stretch',
        alignItems:'center',
        backgroundColor:'#F5F5EF'
    },
    banner:{
        alignSelf:'center',
        height:50,
        width:260,
    },
    contenedorRedes:{
        flexDirection:'row',
        alignSelf:'center'
    },
    cajas:{
        width:270,
        height:50,
        borderWidth:1,
        borderColor:'white',
        borderRadius:7,
        fontSize:20,
        marginTop:15,
        marginHorizontal:15,
        marginBottom:10,
        paddingStart:15,
        backgroundColor:'white'
    }
})