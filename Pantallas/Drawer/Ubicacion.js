import * as React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import MapView,{Marker,Polyline} from 'react-native-maps'
function Ubicacion() {
  const [origin, setorigin] = React.useState({
    latitude:21.1460656,
    longitude: -98.4114873,
  });
  const [destination, setdestination] = React.useState({
    latitude:21.1460656,
    longitude:-98.4114873,
  });
  return (
    <View style={styles.container}>
        <View style={{height:50, backgroundColor:'white',width:'100%'}}>
            <Text style={ {fontSize:20, paddingVertical:10, paddingHorizontal:30}}>Ubicacion de la tienda Jelly Delly</Text>
        </View>
        <MapView
        style={styles.mapa}
        initialRegion={{
          latitude:origin.latitude,
          longitude:origin.longitude,
          latitudeDelta:0.09,
          longitudeDelta:0.04
        }}
        >
          <Marker
          coordinate={origin}
          />
          <Marker
          coordinate={destination}
          />
          
        </MapView>
        
        
    </View>
  )
  
}

export default Ubicacion
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa:{
    height:'90%',
    width:'100%',

  }
});