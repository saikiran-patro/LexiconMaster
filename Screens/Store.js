import React,{useState,useEffect} from 'react';

import {StyleSheet,View,StatusBar,ScrollView} from 'react-native'
import SnackBar from 'react-native-snackbar-component'
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native'

import Snackbar from 'react-native-snackbar'
import {Fab,
    Text,
    Icon,
    List,
    Left,
    Button,
    ListItem,
    Body,
    Right,
    CheckBox,
    Title,
    H1,
    H3,
    H5,
    Subtitle,
    Container,
    Spinner,
} from 'native-base'
const Store = ()=>{
    const [mybook,SetmyBook]=useState([])
    const isFocused=useIsFocused()
    const getDictionary= async ()=>{
        const StoredVal= await AsyncStorage.getItem('@myDictionary')
        const PrevList= await JSON.parse(StoredVal)
        if(!PrevList){
            SetmyBook([])
        }
        else{
            SetmyBook(PrevList)
        }
    
    }
    useEffect(()=>{
        getDictionary()
    },[isFocused])

    

    return (
       <View style={styles.storeView}>
       {mybook.length===0?
        (
            <View style={styles.noWord}>
           <H3>No Words Found</H3>
           <Text>Please add words to your dictionary</Text>
           </View>
        
        
        
        ):(
            
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <H3>Your Dictionary</H3>
                <List>
                    {
                        mybook.map((myWord)=>(

                                <View key={myWord.id} style={styles.wordView}>
                                    <ListItem >
                                        <Left>
                                            <Button danger  >
                                                <Icon active name="trash" type="Entypo" ></Icon>
                                            </Button>
                                        
                                        
                                        
                                        </Left>
                                        <Body>

                                            <H3>{myWord.word}</H3>
                                            <Text>{myWord.definition}</Text>
                                            <Text>{myWord.pronunciation}</Text>
                                            
                                        
                                        
                                        </Body>
                                    
                                    
                                    
                                    
                                    
                                    </ListItem>                               
                                
                                </View>
                        ))
                    }
                
                
                
                </List>
            
            </ScrollView>

            
        )}
       
       
       
        </View>
        
    )
}
export default Store;

const styles = StyleSheet.create({



    storeView: {
        flex:1,
        backgroundColor:"#ECFCFF"
    },
    noWord:{
        display: "flex",
        flex:1,
        justifyContent:"center",
        alignItems: "center"

    },
    scrollContainer:{
        flexGrow:1,
        backgroundColor:"#ECFCFF"
    },
    wordView:{
        backgroundColor:"#A2DBFA",
        paddingVertical:40
    }
})