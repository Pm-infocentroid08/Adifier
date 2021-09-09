import React from 'react'
import { StyleSheet, Text, View,Dimensions,TouchableOpacity, TextInput,ScrollView} from 'react-native'
import MapView from 'react-native-maps';
import {Entypo,MaterialCommunityIcons} from 'react-native-vector-icons'
const {width,height} =Dimensions.get('screen');

const mapDarkStyle=[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ];
 
  const mapS=[
    {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8ec3b9"
          }
        ]
      },
  ];
export default function Support({navigation}) {
    return (
        
        <View style={styles.home}>
             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width: width,pddiing:10,paddingVertical:10,
            backgroundColor:'transparent',paddingHorizontal:10,marginTop :Platform.OS==='android'? 40: 40 }}>
                <TouchableOpacity style={styles.hBox}
                onPress={()=>{navigation.openDrawer();}}>
                    <Entypo name='menu' size={25} color='black'/>
                </TouchableOpacity>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Adifier</Text>
                <TouchableOpacity style={styles.hBox}
                onPress={()=>navigation.navigate('submit')}>
                    <MaterialCommunityIcons name='shape-square-plus' size={25} color='black'/>
                </TouchableOpacity>
               </View>
        <ScrollView>
            <MapView 
            showsUserLocation={true}
            customMapStyle={mapDarkStyle}
            region={{
                latitude:22.702730,
                longitude:75.871857,
                latitudeDelta:0.0022,
                longitudeDelta:0.0095
            }}
            style={styles.map} 
            mapType={'standard'}/>
           
            <View style={{elevation:10,backgroundColor:'white',margin:10 , borderRadius:10}}>
                <Text style={{fontSize:22 ,fontWeight:'bold',alignSelf:'center',marginVertical:20,letterSpacing:1.5}}>Send Us A Message</Text>
                <View>
                <Text style={{fontSize:18, fontWeight:'bold',marginHorizontal:15, marginVertical:20 , marginVertical:20}}>Your Name *</Text>
                <TextInput  style={{fontWeight:'bold', color:'black', fontSize:16,marginHorizontal:15 , borderColor:'grey',borderWidth:0.5,height:40,width:'90%',borderRadius:8 }}/>
                </View>
                <View>
                <Text style={{fontSize:18, fontWeight:'bold',marginHorizontal:15, marginVertical:20,marginVertical:20}}>Your Email *</Text>
                <TextInput  style={{fontWeight:'bold', color:'black', fontSize:16,marginHorizontal:15 , borderColor:'grey',borderWidth:0.5,height:40,width:'90%',borderRadius:8 }}/>
                </View>
                <View>
                <Text style={{fontSize:18, fontWeight:'bold',marginHorizontal:15, marginVertical:20,marginVertical:20}}>Message Subject *</Text>
                <TextInput  style={{fontWeight:'bold', color:'black', fontSize:16,marginHorizontal:15 , borderColor:'grey',borderWidth:0.5,height:40,width:'90%',borderRadius:8 }}/>
                </View>
                <View>
                <Text style={{fontSize:18, fontWeight:'bold',marginHorizontal:15, marginVertical:20,marginVertical:20}}>Your Message *</Text>
                <TextInput  style={{fontWeight:'bold', color:'black', fontSize:16,marginHorizontal:15 , borderColor:'grey',borderWidth:0.5,height:120,width:'90%',borderRadius:8 }}/>
                </View>
                <View style={{marginVertical:35 ,paddingHorizontal:20}}>
                    <TouchableOpacity style={{backgroundColor:"#ea4a5f",height:40,borderRadius:10,alignSelf:'flex-end',justifyContent:'center',
                alignItems:'center',paddingHorizontal:15}}>
                        <Text style={{color:'white',fontWeight:'bold',alignSelf:'center',letterSpacing:1}}>SEND MESSAGE</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        </ScrollView>
       </View>
    )
}

const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    map: {
        width: "100%",
        height: height*0.42,
        backgroundColor:'black'
      },
})
