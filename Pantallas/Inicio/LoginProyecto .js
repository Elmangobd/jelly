import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity} from 'react-native';
import React from 'react'
import { BtnProyecto, BtnSinImg, Caja} from '../componentes/Componentes.js';

const LoginProyecto=({navigation})=>{
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedor2}>
                <Image source={require('../../assets/Logo/logo.png')}/>
            </View>
            <Image source={require('../../assets/Logo/logo.png')} style={styles.banner}/>
            <Text style={styles.titulo}>Iniciar Sesión</Text>
            
            <TextInput placeholder='Ingrese su usuario' placeholderTextColor='rgb(225, 225, 225)' style={styles.cajas}/>
            
            <TextInput placeholder='Ingrese su contraseña' placeholderTextColor='rgb(225, 225, 225)' style={[styles.cajas,{marginBottom:10}]}/>
            
            <BtnProyecto titulo={'Acceder'} color='black' funcion={()=>navigation.navigate('Nosotros')}/>

            <Text style={[styles.texto,{marginTop:10}]}>¿Aún no tienes cuenta?</Text>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Registro')}>
                <Text style={[{color:'#FFC93C'},{fontWeight:'600'}]}>Registrate...</Text>
            </TouchableOpacity> 

            <Text style={styles.texto}>¿Olvidaste la contraseña?</Text>

            
            <TouchableOpacity onPress={()=>navigation.navigate('Verificar Correo')}>
                <Text style={[{color:'#FFC93C'},{fontWeight:'600'}]}>Reestablecer Contraseña...</Text>
            </TouchableOpacity>

        </View>

    )
}


//stack
export default LoginProyecto

const styles = StyleSheet.create({
    btn:{
        fontSize:25,
        height:100
    },
    contenedor2:{
        
    },
    titulo:{
        fontWeight:'bold',
        fontSize:20,
    },
    texto:{
        fontWeight:'bold',
        fontSize:18
    },
    contenedor:{
        borderColor: 'white',
        boderWidth:1,
        flex:1,
        alignSelf:'stretch',
        alignItems:'center',
        backgroundColor:'#F5F5EF'
    },
    banner:{
        marginTop:10,
        alignSelf:'center',
        height:50,
        width:260,
        marginBottom:10
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
        marginTop:20,
        marginHorizontal:15,
        paddingStart:15,
        backgroundColor:'white',
        
    }
})