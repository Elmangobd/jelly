import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Animated } from 'react-native';
import React, { useState } from 'react'

const Max_Header_Height = 200;
const Min_Header_Height = 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height

function Btn(props){

    return(
        
        <TouchableOpacity style={[styles.Cbtn,{backgroundColor:props.color}]} onPress={props.funcion} >
        <Image source={props.img} style={styles.img} onPress={props.funcion}/>
        <Text style={styles.texto}onPress={props.funcion}>{props.titulo} </Text>
        </TouchableOpacity>
    )
}


const Password=()=>{
    const[bandera, setbandera]=useState(true)


    return(
        <View style={styles.cpass}>
            <TouchableOpacity onPress={()=>setbandera(!bandera)}>
            <Image source={require('../assets/Fondos/fodoNaranja.jpg')} style={styles.logo}/>
            </TouchableOpacity>
            <TextInput placeholder='password' secureTextEntry={bandera}/>
        </View>
    )
}

export{Btn, Password}

const styles = StyleSheet.create({
    cpass:{
        flexDirection:'row',
        borderWidth: 'center',
        borderColor:'black',
        backgroundColor : '#22aa9999',
        borderRadius:7,
        paddingHorizontal:'5',
        alignContent:'stretch'
    },
    logo:{
        width:35,
        height:35,
        backgroundColor:'lightblue'
    },
    Cbtn:{
        paddingHorizontal:10,
        paddingVertical:5
    },
    texto:{
        fontSize:15,
        color:'#B2B1B9',
        fontWeight:'bold'
    },
    img:{
        height:60,
        width:60,
        borderRadius: 50
    },
    
})