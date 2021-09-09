import React from 'react'
import { StyleSheet, Text, TextInput, View ,CheckBox, TouchableOpacity ,ScrollView, Platform} from 'react-native'
import{Entypo , Ionicons} from 'react-native-vector-icons'
export default function register({navigation}) {
    return (
        <View style={styles.backg}>
            <Text style={[styles.headlin,{letterSpacing:2}]}>Register</Text>
            <ScrollView>
                <View style={styles.space}>
                    <Text style={styles.heading}> Username *</Text>
                    <TextInput  style={styles.allEntery} placeholder='Enter your name' placeholderTextColor='#d3d3d3'/>
                </View>

                <View style={styles.space}>
                    <Text style={styles.heading}>Email *</Text>
                    <TextInput style={styles.allEntery} placeholder = 'eg. xyz@gmail.com' placeholderTextColor='#d3d3d3'/>
                </View>

                <View style={styles.space}>
                    <Text style={styles.heading}>Password *</Text>
                    <TextInput style={styles.allEntery} placeholder='Enter your password'  placeholderTextColor="#d3d3d3" />
                </View>

                <View style={styles.space}>
                    <Text style={styles.heading}>Repeat password *</Text>
                    <TextInput style={styles.allEntery} placeholder='Enter your password again' placeholderTextColor="#d3d3d3"/>
                </View>
             
            <View style={{flexDirection:'row',marginVertical:25 , marginHorizontal:13}}>
                <CheckBox  style={{alignSelf:'center'}}/>
                <Text style={{fontWeight:'bold', fontSize:18}}>I agree to terms & conditions</Text>
            </View>
            <TouchableOpacity style={styles.btnRgs} >
                <Text style={{color:'white',fontWeight:'bold', fontSize:15, letterSpacing:2}}>REGISTER</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center', marginVertical:20 }}>
                <View style={styles.line} />
                    <Text>OR</Text>
                <View style={styles.line}/>
            </View>

            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>Sign In With</Text>
            </View>

            <View style={{flexDirection:'row' , justifyContent:'space-between', marginHorizontal:50, marginVertical:20}}>
                <TouchableOpacity style={styles.navBtn}>
                    <Entypo name ='facebook' size={25} color='blue'/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navBtn}>
                    <Ionicons name='logo-google' size={25} color='black'/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navBtn}>
                    <Ionicons name='ios-logo-twitter' size={25} color='#87CEFA'/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.pagelog} onPress={()=> {navigation.navigate('login')}}>
                <Text style={{fontWeight:'bold', fontSize:18 ,color:'grey', marginVertical:15 }}>Already have an account? Login here.</Text>
            </TouchableOpacity>
            </ScrollView>   
        </View>
        
    )
}

const styles = StyleSheet.create({
    backg:{
        flex : 1,
        backgroundColor:'white',
        marginTop:Platform.OS==='android' ? 30: 40
    
    },
    headlin:{
        fontWeight:'bold',
        fontSize:32,
        padding:15,
        marginHorizontal:5,
    },
    space:{
        paddingHorizontal:10
    },
    heading:{
        marginTop:15,
        fontWeight:'bold',
        fontSize:18,
        color:'#404040',
        paddingHorizontal:5

    },
    allEntery:{
        borderColor:'#bebebe',
        height:40,
        paddingLeft:15,
        borderWidth:1,
        borderRadius:10,
        marginTop:15,
        fontWeight:'bold',
        fontSize:15,
        marginHorizontal:10,

    },
    btnRgs:{
        backgroundColor:'#7E7E7E',
        justifyContent:'center',
        alignItems:'center',
        height:35,
        borderRadius:18,
        marginHorizontal:22,
        fontWeight:'bold'
    },
    line:{
       width:'34%',
       height:1,
       backgroundColor:'black'

    },
    navBtn:{
        height:60,
        width:60,
        borderRadius:20,
        backgroundColor:'#ECECEC',
        justifyContent:'center',
        alignItems:'center'

    },
    pagelog:{
        justifyContent:'center',
        alignItems:'center'
    }

   

})
