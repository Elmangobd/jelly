import { StyleSheet, Text, TextInput, View, Image, Alert, TouchableOpacity, Button } from 'react-native';
import React from 'react'
import { Btn, Caja} from '../componentes/Componentes.js';

const NosotrosProyecto=({navigation})=>{

    return (
        <View style={styles.contenedor}>
            <View style={styles.jelly_delly}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Image source={require('../assets/logo2-gigapixel.png')} style={styles.banner}/> 
            </TouchableOpacity>
            </View>
            <View style={styles.contenedor2}>

            <Text style={styles.titulo}>NOSOTROS</Text> 
            <View style={styles.contenedorTexto}>
                <Text style={[styles.texto,{textAlign:'justify'}]}>
                <Text style={[{color:'black'},{fontWeight:'900'}]}>JELLY-DELLY </Text>es una empresa dedicada a producir gelatinas, para su respectiva venta, 
                la cual, busca brindar éste producto innovador, creativo, con variedad de diseños, sabores
                nuevos y naturales, de manera que satisfaga el antojo de los clientes a través de éste 
                producto saludable, con una buena atención, trayendo consigo beneficio, satisfacción y 
                bienestar al consumidor final.
                </Text>
            </View>

            <Text style={styles.titulo}>VALORES</Text> 
            <View style={styles.contenedorTexto}>
                <Text style={[styles.texto,{textAlign:'justify'}]}>
                <Text style={[{color:'black'},{fontWeight:'900'}]}>Responsabilidad:</Text> La empresa cumple con el compromiso que tiene con cada cliente y lo hace de la mejor manera, es responsabilidad que el producto sea de calidad y llegue con bien al cliente.
                </Text>
                <Text style={[styles.texto,{textAlign:'justify'}]}>
                <Text style={[{color:'black'},{fontWeight:'900'}]}>Honestidad:</Text> Realizamos todas las operaciones con transparencia y rectitud.
                </Text>
                <Text style={[styles.texto,{textAlign:'justify'}]}>
                <Text style={[{color:'black'},{fontWeight:'900'}]}>Confianza:</Text> Cumplimos con lo prometido al ofrecer los productos y servicios a un precio justo y razonable.
                </Text>
                <Text style={[styles.texto,{textAlign:'justify'}]}>
                <Text style={[{color:'black'},{fontWeight:'900'}]}>Respeto:</Text> Lograr con amabilidad la atención al cliente, con una buena satisfacción.
                </Text>
                
            </View>
            
            <Text style={styles.titulo}>Contáctanos</Text>
            <Text style={[styles.texto,{textAlign:'justify'}]}>
            <Text style={[{color:'black'},{fontWeight:'900'}]}>Teléfono:</Text> 7713411218
            </Text>
            <Text style={[styles.texto,{textAlign:'justify'}]}>
            <Text style={[{color:'black'},{fontWeight:'900'}]}>Email:</Text> jelly_delly@gmail.com
            </Text>
            </View>
        </View>
    )
}

export default NosotrosProyecto

const styles = StyleSheet.create({
    tamañoBotones:{
        width:2,
        height:2
    },
    contenedorTexto:{
        marginLeft:20,
        marginRight:20,
        marginBottom:10
    },
    contenedor2:{
        flex:1,
        alignSelf:'stretch',
        alignItems:'center',
        marginTop:-70
    },
    jelly_delly:{
        flex:0.1,
        borderRadius:20,
        margin:10,
        marginTop:10,
        marginBottom:80
    },
    titulo:{
        color:'#FFC93C',
        fontWeight:'500',
        fontSize:30,
        marginBottom:10,
        
    },
    home:{
        borderRadius:50,
        borderColor:'#AA8B56',
        marginTop:20,
        height:100,
        width:100,
        alignSelf:'center',
    },
    texto:{
        color:'black',
        fontWeight:'normal',
        fontSize:15,
        
    },
    contenedor:{
        backgroundColor:'#F5F5EF',
        borderColor: '#000',
        boderWidth:1,
        flex:1,
        alignSelf:'stretch',
        alignItems:'center',

    },
    banner:{
        marginTop:15,
        alignSelf:'center',
        height:50,
        width:330,
        marginBottom:50
    },
    contenedorRedes:{
        flexDirection:'row',
        alignSelf:'center'
    },
    cajas:{
        width:270,
        height:50,
        borderWidth:2,
        backgroundColor:'#1F8A70',
        borderColor:'#bbb',
        borderRadius:7,
        borderBottomColor:'#BFDB38',
        fontSize:18,
        marginTop:20,
        marginHorizontal:15,
        marginBottom:15,
        paddingStart:15
    }
})