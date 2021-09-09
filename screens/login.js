import React from 'react'
import { View, Text ,ScrollView,KeyboardAvoidingView,TextInput,TouchableOpacity, StyleSheet, Platform} from 'react-native'
import {Entypo,Ionicons} from 'react-native-vector-icons'
const login=({navigation}) => {
    return (

        <View style={styles.back}>
            <Text style={styles.log}>log in</Text>
            <ScrollView>
                <View  style={styles.user}>
                    <Text style={styles.headUser}>Username / Email *</Text>

                    <TextInput style={styles.userInpt} placeholder='Enter Username of Email' placeholderTextColor='#d3d3d3'/>
                </View>
                <View style={styles.user}>
                    <Text style={styles.headUser}>Password *</Text>

                    <TextInput style={styles.userInpt} placeholder='Enter your Password' placeholderTextColor='#d3d3d3'/>
                </View>
                <View style={styles.Lgn}>
                    <TouchableOpacity style={styles.btnLgn}>
                        <Text style={styles.txtBtn}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.headUser,{alignSelf:'center', paddingLeft:0,marginVertical:15}]}>
                    <Text style={styles.with}>Forgotten your password?</Text>
                </View>
            
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingHorizontal:20,marginTop:30,}}> 
                    <View style={styles.line} />
                    <Text>OR</Text>
                    <View style={styles.line}/>
                </View>
                <View style={[styles.headUser,{alignSelf:'center',paddingLeft:0,marginVertical:25}]}>
                <Text style={styles.with}>Sign In With</Text>
                </View>

                <View style={{flexDirection:'row' , justifyContent:'space-between', marginHorizontal:50, marginVertical:20}}>
                    <TouchableOpacity style={styles.lastBtn} >
                        <Entypo name='facebook' size={25} color='blue'/>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.lastBtn}>
                        <Ionicons name="logo-google" size={25} color='black'/>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.lastBtn}>
                        <Ionicons name='ios-logo-twitter' size={25} color='#87CEFA'/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('register')}}>
                    <Text style={styles.lstlinelog}>Don't have an account? Create one here.</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default login;
const styles = StyleSheet.create({

    back:{
        flex:1,
        backgroundColor:'white',
        paddingTop:30,
        marginTop:Platform.OS==='android' ? 30 : 40
    },
    log:{
        fontWeight : 'bold',
        fontSize : 35,
        padding: 15,
        marginHorizontal:10 ,
        letterSpacing:2
    },
    user:{
        padding:15,
    },
    headUser:{
        fontWeight:'bold',
        fontSize:20,
        color:'#404040',
        paddingLeft:20
    },
    userInpt:{
        borderColor : '#bebebe',
        height:40,
        paddingLeft:15,
        borderWidth:1,
        borderRadius:10,
        marginTop:20,
        fontWeight:'bold',
        fontSize:15 ,
        marginHorizontal:10       
    },
    
    Lgn:{
        marginTop:25
    },
    btnLgn:{
        backgroundColor:'#7E7E7E',
        fontWeight:'bold',
        height:40,
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 22,
        elevation:12,
        
    },
    txtBtn:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        letterSpacing:1        
    },
    line:{
        width:'30%',
        height:1,
        backgroundColor:'black',

    },
    with:{
        fontWeight:'bold',
        fontSize:16
    },
    lastBtn:{
        height:60,
        width:60,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ECECEC'
    },
    lstlinelog:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16,
        color:'grey',
        marginVertical:10
    }
})