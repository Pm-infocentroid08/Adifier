import React,{useState} from 'react'
import { View, Text , TouchableOpacity,Dimensions,StyleSheet, ScrollView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import{AntDesign} from 'react-native-vector-icons'
import {Entypo,MaterialCommunityIcons} from 'react-native-vector-icons'
const {width,height} =Dimensions.get('screen');
const Submit = ({navigation}) => {
    const [isVisible,setIsVisible]=useState(false);
    const[data,setdata]=useState([
        {
            id:1,
            title:'Bronze',
            price:'$11.99',
            subTitle:'*VAT included',
            discp:'Purchase this package and extend your subscription by 30 days',
        },
        {
            id:2,
            title:'Silver',
            price:'$23.99',
            subTitle:'Purchase this package and extend your subscription by 90 days',
        },
        {
            id:3,
            title:'Gold',
            price:'$47.99',
            subTitle:'*VAT included',
            discp:'Purchase this package and extend your subscription by 180 days',
        },
        {
            id:4,
            title:'Platinum',
            price:'$71.99',
            subTitle:'*VAT included',
            discp:'Purchase this package and extend your subscription by 360 days',
        },
    ])

    if(isVisible){
        return(
            <View>
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
               <TouchableOpacity style={{backgroundColor:'white',height:250,width:'90%',elevation:10,borderRadius:10,marginVertical:20,alignSelf:'center', alignItems:'center'}}
        onPress={()=>setIsVisible(!isVisible)}>
           <ScrollView>
               <FlatList
             
               />
                
           </ScrollView>
        </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
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
        <TouchableOpacity style={{backgroundColor:'white',height:250,width:'90%',elevation:10,borderRadius:10,marginVertical:20,alignSelf:'center', alignItems:'center'}}
        onPress={()=>setIsVisible(!isVisible)}>

            <View style={{marginVertical:20}}>
                <AntDesign name='pluscircleo' size={95}  color='grey'/>
            </View>
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center', paddingHorizontal:18,marginVertical:20}}>Your Subscription Has Expired ,Please Renew It </Text>
        </TouchableOpacity>
        </View>
    )
}

export default Submit;
const styles = StyleSheet.create({
    
});
