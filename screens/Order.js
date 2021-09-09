import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Homee() {
    return (
        <View style={styles.home}>
            <Text style={{fontWeight:'bold', fontSize:25}}>O R D E R</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
