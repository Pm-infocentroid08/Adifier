// In App.js in a new project

import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import register from './screens/register';
import login from './screens/login';
import Bottom  from './screens/bottomNav';
import CardView from './screens/cardView';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Submit from './screens/submit';

const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <Stack.Navigator>
    <Stack.Screen name = 'home' component={Bottom}
    options={{
      headerShown:false
    }}/>
     <Stack.Screen name = 'register' component={register}
    options={{
      headerShown:false
    }}/>
      <Stack.Screen name = 'submit' component={Submit}
    options={{
      headerShown:false
    }}/>
      </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();
function App() {
  return (

    <NavigationContainer>
     <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;