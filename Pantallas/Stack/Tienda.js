import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet ,ScrollView,SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {Btn} from '../../Componentes/Componentes';

const App = (navigation) => {
    const regreso =()=>{
        navigation.navigate('welcome');
    }

    const [products,setProducts]=useState(null)

  const getMovies = async () => {
    try {
      const response = await fetch('http://192.168.5.27:8000/api/products');
      const data = await response.json()
      setProducts(data)
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies()
    setInterval(()=>{
        getMovies()
        }, 1000)
  }, []);

  const productos=({item})=>(
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.card}>
                <View style={{marginTop:20, width:'80%', height:'80%'}}>
                    <Text style={{color:'white',paddingLeft:30}}>
                        {item.imagen}</Text>

                    <Text style={{color:'white',paddingLeft:30,fontSize:19}}>
                    <Text>Nombre del producto : </Text>
                    {item.nombre}</Text>

                    <Text style={{color:'white',paddingLeft:30,fontSize:19}}>
                        <Text>descripcion : </Text>
                        {item.descripcion}</Text>

                    <Text style={{color:'white',paddingLeft:30,fontSize:19}} >
                        <Text>Precio : </Text>
                        {item.precio} </Text>

                    <Text style={{color:'white',paddingLeft:30,fontSize:19}} >
                        <Text>stock :
                        </Text>{item.stock} </Text>

                </View>
            </View>
        </ScrollView>
    </View>
)

  return (
    <SafeAreaView style={{marginBottom:0, backgroundColor:'white', height:'100%'}}>
        <View style={styles.encabezado}>
            <Btn img={require('../../assets/Logo/logo.png')} funcion={regreso} titulo={'      salir'} ></Btn>
            <View style={styles.banner}>
             <Image source={require('../../assets/Logo/titulo.png')} style={styles.titulo} ></Image>
            </View>
          </View>
        <FlatList 
            data={products}
            renderItem={productos}
        />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    card:{
        marginTop:25,
        backgroundColor:'purple',
        marginLeft:'13%',
        height:400,
        width:300,
        borderRadius:23,
        marginBottom:30
    },
    imagen:{
        marginTop:'5%',
        marginLeft:'10%',
        width:'80%',
        height:'50%',
        borderRadius: '6%'
    },
    button:{
        backgroundColor:'green',
        borderRadius:30,
        padding:'4%',
        marginLeft:'15%',
        margin:'5%',
        width:'70%',
        height:'23%',
    },
    descri:{
        marginLeft:18,
        marginBottom:6,        
        color:'white',
        paddingLeft: 15,
        marginVertical: '2%' 
    },
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
})