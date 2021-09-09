import React,{useState} from 'react'
import { View, Text ,StyleSheet, FlatList,ImageBackground, ScrollView, Dimensions} from 'react-native'
const{width,height} = Dimensions.get('screen')
const Location = () =>{
    const[data, setdata]=useState([
        {
            id:1,
            Img:'https://images.unsplash.com/photo-1520986606214-8b456906c813?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            title:'London',
            ad:'1 ad posted'
        },
        {
            id:2,
            Img:'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/2c/70.jpg',
            title:'Rome',
            ad:'1 ad posted'
        },
        {
            id:3,
            Img:'https://www.touropia.com/gfx/d/tourist-attractions-in-barcelona/montjuic.jpg',
            title:'Barcelona',
            ad:'1 ad posted'
        },
        {
            id:4,
            Img:'https://fs.buttercms.com/resize=height:600/quality=v:80/compress/r70ZlprpRaCT8KAAGUNr',
            title:'Los Angeles',
            ad:'1 ad posted'
        },
        {
            id:5,
            Img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2015%2F11%2F10-paris-social-niche1115.jpg',
            title:'Paris',
            ad:'2 ad posted'
        }
    ])
    return (
        <ScrollView>
            <FlatList
            data ={data}
            keyExtractor={item => item.id}
            renderItem={({item,index}) => (
                  
<ImageBackground source={{uri:item.Img}} style={{flex:1,marginVertical:4,alignSelf:'center',aspectRatio:1.76}} resizeMode='cover' key={index}>
                        <View style={{marginTop:'35%',marginBottom:10, marginHorizontal:10, backgroundColor:'rgba(0,0,0,0.6)', width:140,height:60, borderRadius:12,justifyContent:'center'}}>
                        <Text style={styles.locText}>{item.title}</Text>
                        <Text style={styles.locText2}>{item.ad}</Text>
                        </View>
                    
                    </ImageBackground>
          
            )}
            />
        </ScrollView>
    )
}


   

const styles = StyleSheet.create({
    locText:{
        paddingLeft:10,
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    locText2:{
        paddingLeft:10,
        fontWeight:'bold',
        color:'#d3d3d3',
        fontSize:16
    }
})
export default Location
