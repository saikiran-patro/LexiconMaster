

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {H1, Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//bring all screens
import Home from './Screens/Home'
import Store from './Screens/Store'

const Stack = createStackNavigator();


const App=()=>{
  return (
    <ScrollView contentContainerStyle={{flex:1 }}>
        <StatusBar backgroundColor="#5EDFFF"/>
        
       <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
             <Stack.Screen name="Home" component={Home} options={{
                  headerStyle:{
                  backgroundColor:"#5EDFFF"
                          },
          title:'Lexicon Master',
          headerTitleStyle:{
            textAlign:"center",
            color:"#393B44"
          }
        }}>
        
        </Stack.Screen>
        <Stack.Screen name="Store" component={Store} options={{
          headerStyle:{
            backgroundColor:"#7868E6"
          },
          title:'Lexicon Master',
          headerTitleStyle:{
            textAlign:"center",
            color:"#EDEEF7"
          }
        }}>
        
        </Stack.Screen>
        
        </Stack.Navigator>
        
  
  
    </NavigationContainer>
    



    </ScrollView>
  )
}


export default App;
const styles = StyleSheet.create({

  header:{
    backgroundColor:"#7868E6",
    display:"flex",
    alignItems:"center",
    
    justifyContent:"center",
    paddingVertical:15
  }
})