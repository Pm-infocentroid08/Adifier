import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from './login';
import Homee from './Homee';
import support from './support';
import Order from './Order';
import video from './video';

//font
import {FontAwesome5} from '@expo/vector-icons'
import { color } from 'react-native-reanimated';
import Submit from './submit';



const Tab = createBottomTabNavigator();


export default function Bottom() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false ,tabBarActiveTintColor:'#e0a899'
      ,tabBarStyle:{height:45 , marginHorizontal:5 , marginBottom:5, borderRadius:13, borderWidth:0.8, borderColor:'grey', borderStyle:'dotted'}
      }}>
        <Tab.Screen name="Home" component={Homee} 
        options={{
          tabBarIcon:({color}) =>(
            <FontAwesome5 name = "home" size={20} color={color} style={{marginTop:"10%" }} />
          ),
          title:' '
        }}/>
        <Tab.Screen name = 'Order' component={Order}
        options={{
          tabBarIcon:({color}) => (
            <FontAwesome5 name="shopping-cart" size={20} color={color} style={{marginTop:'10%'}} />
          ),
          title:''
        }}/>
        <Tab.Screen name="login" component={login} 
        options={{
          tabBarIcon:({color}) => (
            <FontAwesome5 name ='users' size={20} color={color} style={{marginTop:'10%'}} />
          ),
          title:''
        }}/>
        <Tab.Screen name='support' component={support}
        options={{
          tabBarIcon:({color}) => (
            <FontAwesome5 name = 'hands-helping' size={20} color={color} style={{marginTop:'10%'}}/>
          ),
          title :''
        }}/> 
       
      </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});
