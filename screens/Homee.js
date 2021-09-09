import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,Image ,ScrollView,Dimensions, Platform} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {Entypo,MaterialCommunityIcons} from 'react-native-vector-icons'
import ScrollBar from './scrollBar'
import CardView from './cardView'
import Location from './Location'
const {width,height} =Dimensions.get('screen');
export default function Homee({navigation}) {
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
           <ScrollView style={styles.home}>
            <ImageBackground source={{uri:'https://zdblogs.zohocorp.com/commerce/insights/sites/commerce/insights/files/2020-11/1720_s.jpg'}} resizeMode='cover' style= {styles.image}>
                <View style={{
                    flex:1,
                    backgroundColor:'rgba(0,0,0,0.4)'
                }}>
                    
                
         
         <Text style={[styles.head ,{letterSpacing:1}]}>All You Need Is Here & Classified</Text>
         <Text style={styles.foot}>Browse from more than 15,000,000 adverts while new ones come on daily bassis</Text>
         <View style={[styles.cent,{marginTop:90}]}>
             <TextInput style={styles.searchFor} placeholder='Search for....' placeholderTextColor='#a9a9a9'/>
             <TextInput style={styles.searchFor} placeholder='Located in....' placeholderTextColor='#a9a9a9'/>
             
         </View>
         <View style={styles.cent}>
             <TextInput style={styles.searchFor} placeholder='In Category....'placeholderTextColor='#a9a9a9'/>
             
             <TouchableOpacity style={[styles.searchFor,{ backgroundColor:'#ea4a5f' , fontSize:20,justifyContent:'center',alignItems:'center', borderWidth:0},styles.shadow]} >
                 <Text style= {{fontWeight:'bold',color:'white',fontSize:14 , letterSpacing:1}}>SEARCH</Text>
             </TouchableOpacity>
         </View>
         </View>
     </ImageBackground>
     <ScrollBar/>
    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:50 , marginVertical:25}}>
        <TouchableOpacity style={styles.btnLatest}>
            <Text style={{color:'white',fontWeight:"bold",fontSize:14 , letterSpacing:1}}>Latest ads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEnd}>
            <Text style={{color:'black',fontWeight:"bold",fontSize:14 , letterSpacing:1}}>Ending soon</Text>
        </TouchableOpacity>
     </View>
     <View style={{flex:1}}>
     <CardView/>
     </View>
     <View>
         <ImageBackground source={{uri:"https://c1.wallpaperflare.com/preview/588/656/14/programming-open-space-concentration-swivel-chair.jpg"}} style={{width:'100%', height:height*0.4,marginVertical:15}}>
         <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.4)'}}>
             <Text style={{fontWeight:'bold', fontSize:25, color:'white', marginTop:10,marginLeft:10, letterSpacing:1, marginVertical:10}}>Register & Benefit</Text>
             <Text style={styles.imgText}>Participate in auctions</Text>
             <Text style={styles.imgText}>Submit your ads</Text>
             <Text style={styles.imgText}>Promote your ads</Text>
             <Text style={styles.imgText}>Get reviewed to become noticeable</Text>
             <Text style={styles.imgText}>Save favorite ads</Text>
             <Text style={styles.imgText}>And more</Text>
           
             <View>
                 <TouchableOpacity style={{backgroundColor:"#ea4a5f" , height:35, width:120, borderRadius:10, justifyContent:'center',alignItems:'center' ,marginVertical:15 , elevation:10, marginLeft:10}}>
                     <Text style={{color:'white', letterSpacing:1, fontWeight:'bold', fontSize:12}}>HOW IT WORKS</Text>
                 </TouchableOpacity>
            </View>  
            </View>   
        </ImageBackground>
     </View>
     <View>
         <Text style={{fontSize:24,fontWeight:'bold',letterSpacing:1,alignItems:'center',textAlign:'center', marginVertical:14}}>Popular Locations</Text>
         <Text style={{fontWeight:'bold',fontSize:15,color:'grey', textAlign:"center", marginVertical:10}}>Check out ads from our members located in popular locations

</Text>
     </View>
     <Location/>
   
            </ScrollView>
                
            </View>  
       
    )
}

const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'white'
    },
    image:{
        width:"100%",
        height:height*0.46,
        flex:1,
    },
    hBox:{
        width:40,height:40,borderRadius:25,
        alignItems:'center',justifyContent:'center',borderWidth:0.8
    },
    head :{
        color:'white',
        fontWeight :'bold',
        fontSize : 20,
        marginTop:'18%',
        textAlign:'center',
    },
    foot:{
        color:'white',
        marginTop:15,
        fontSize:14,
        textAlign:'center',
        fontWeight:'200',
        marginHorizontal:15,
    },
    cent:{
        marginVertical:4,
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:20,

    },
    searchFor:{
        color:'#001515',
        fontSize:16,
        paddingHorizontal:8,
        backgroundColor:'white',
        borderRadius:6,
        height:40,
        flex:1,
        marginHorizontal:5,
        paddingLeft:15
    },
    
    cent2:{
        marginVertical:5,
        flexDirection:'row',
        marginHorizontal:20,
        justifyContent:'space-between'
    },
    line2:{
        color:'#001515',
        fontWeight:'bold',
        fontSize:20,
        paddingHorizontal:8,
        backgroundColor:'white',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:6,
        height:55,
        width:160,
    },
   shadow:{
       elevation:25,
       shadowColor:'black',
       shadowOffset:{width:0, height:2},
       shadowOpacity:0.6,
       shadowRadius:3.85
   },
   btnLatest:{
       backgroundColor:'#ea4a5f',
       elevation:12,
       height:42,
       width:120,
       borderRadius:10,
       justifyContent:'center',
       alignItems:'center'
   },
   btnEnd:{
       backgroundColor:'white',
       elevation:12,
       height:42,
       width:120,
       borderRadius:10,
       justifyContent:'center',
       alignItems:'center'
   },
   imgText:{
       marginVertical:4,
       fontWeight :'bold',
       fontSize:15,
       marginLeft:10,
       color:'white'
   }

})

