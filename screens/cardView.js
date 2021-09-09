import React,{useState} from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity} from 'react-native'
import {Ionicons , MaterialIcons} from 'react-native-vector-icons'
const {width, height} = Dimensions.get('screen')

const CardView = () => {
    const[data, setdata] = useState([
        {
            id:1,
            Img:'http://demo.spoonthemes.net/themes/adifier/wp-content/uploads/2018/02/adr-9-750x450.jpg', 
            type:'Vehicles',
            place:'Amsrwedam',
            title:'Scania R-SRS L-CLASS R450',
            price:'3,00,000 $'
        },
        {
            id:2,
            Img:"http://demo.spoonthemes.net/themes/adifier/wp-content/uploads/2018/02/adr-22-750x450.jpg",
            type:'Furniture',
            place:'Ostend',
            title : 'Indoor Furniture PE Wicker',
            price:'9000$'
        },
        {
            id:3,
            Img:"http://demo.spoonthemes.net/themes/adifier/wp-content/uploads/2018/02/adr-11-750x450.jpg",
            type:'Vehicles',
            place:'Sundsvall',
            title:'Polaris 600 Assault 144 Snow',
            price:'400$'
        },
        {
            id:4,
            Img:"https://www.apetogentleman.com/wp-content/uploads/2019/07/rolex-daytona-wrist-1160x677.jpg",
            type:'Electronics',
            place:'Berlin',
            title:'Fashion Luxury Men Date',
            price:'91$'
        },
        {
            id:5,
            Img:"https://i.pinimg.com/originals/29/af/b5/29afb5c4d00f435461a371155174843a.jpg",
            type:'Services',
            place:'Dortmund',
            title:'Move Quickly With High Load',
            price:'$1,600,000'
        },
        {
            id:6,
            Img:"https://fiafter50.com/wp-content/uploads/2019/12/FullSizeRender-1-scaled-e1577386678650-937x1024.jpeg",
            type:'Jobs',
            place:'London',
            title:'Trained Ballet Dancer',
            price:'Job Wanted'
        },
        {
            id:7,
            Img:"http://demo.spoonthemes.net/themes/adifier/wp-content/uploads/2018/02/adr-18-750x450.jpg",
            type:'Real State',
            place:'Paris',
            title:'Apartment In Spain For Sale',
            price:'Call for price'
        },
        {
            id:8,
            Img:"https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/img_0865.jpg?itok=HNOPTGwU",
            type:'Electronics',
            place:'vienna',
            title:'Customized Apple iMac 21.5″',
            price:'Buying'
        },
        {
            id:9,
            Img:"https://www.constructionworld.in/assets/uploads/6255f7864d62b17f6bddd46a0a6e11a9.jpg",
            type:'Electronics',
            place:'British Columbia',
            title:'New X5SW-1 2.4GHz 4CH 6',
            price:'Exchange'
        },
        {
            id:10,
            Img:"https://1.bp.blogspot.com/-YdDo7lcN4Js/WeENzNohFpI/AAAAAAAAIF0/or2j5gPiNb0W3wGitu-a6bXfbbrCS_gzgCLcBGAs/s1600/2019%2Baudi%2Br8.jpg",
            type:'Vehicles',
            place:'Paris',
            title:'2012 Audi R8 GT Spyder',
            price:'Gift'
        },

        
    ])
    return (
        <ScrollView style={styles.container}>
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item,index})=>(
                <View style={{width:width/2,height:height/2.5,margin:2,backgroundColor:'white',alignItems:'center',justifyContent:'center', elevation:10 ,borderRadius:10, marginVertical:20}} key={index}> 
                <Image 
                source={{uri:item.Img}}
                style={{width:width/2 , height:180, flex:1,borderTopRightRadius:10,borderTopLeftRadius:10}}
                />    
                <View style={styles.row}>
                        <Text style={styles.heading}>
                        <Ionicons name ='radio-button-on' size={16} color='grey'/>
                            {item.type}</Text>
                        
                        <Text style={[styles.heading ,{width:'50%', paddingLeft:10}]}> 
                        <Ionicons name ='location-outline' size={16} color='grey'/>
                        {item.place}</Text>
                </View>                    
                        <View style={styles.newRow}>
                            <Text style={styles.head2}>{item.title}</Text>
                        </View>


                        <View style={styles.likeRow}>
                        <View >
                        <Text style={{color:'#ea4a5f', fontSize:14, fontWeight:'bold'}}>{item.price}</Text>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{marginHorizontal:10}}>
                                <MaterialIcons name='loop' size={25} color='black'/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginRight:10}}>
                                <Ionicons name='heart-outline' size={23} color='black'/>
                            </TouchableOpacity>
                        </View>
                        </View>
                
                </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            />

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    row:{
        justifyContent:'space-between',
        flexDirection:"row",
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:4,
    },
    heading:{
        color:'grey'
    },
    newRow:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:8
    },
    head2:{
        fontWeight:"bold",
        fontSize:15
    },
    likeRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5,
        paddingHorizontal:10,
        width:'100%'
    }
})
export default CardView;
