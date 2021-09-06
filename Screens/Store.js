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
    H2,
    Subtitle,
    Container,
    Spinner,
} from 'native-base'
const Store = ()=>{
    const [mybook,SetmyBook]=useState([])
    const isFocused=useIsFocused()
    const colors= ["#B2FCFF","#F5CEBE","#B8B5FF","#F2A07B","#DEEDF0","#FFF76A","#DDFFBC","#98DED9","#FFBCBC","#FCECDD","#B9FFFC"]
    const deleteWord= async (id)=>{
        //
       const newList= mybook.filter((Word)=>{
         return Word.id !== id;
   
        })
        await AsyncStorage.setItem('@myDictionary', JSON.stringify(newList))
        SetmyBook(newList)
      }
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
                  
                <List>
                    {
                        mybook.map((myWord)=>(

                                <View key={myWord.id} style={{backgroundColor:colors[Math.floor(Math.random()*colors.length)],paddingVertical:40,margin:10,borderRadius:15}}>
                                    <ListItem >
                                        <Body>
                                            <View style={{alignItems: "center"}}>
                                            <Text style={{fontSize:23,color:"#1E3163",marginBottom:15,fontFamily:"FredokaOne-Regular"}}>{myWord.word}</Text>
                                            </View>
                                            
                                            <View style={styles.mainView}>
                                                <Icon style={{fontSize: 25, color: "#314E52"}} name="book-open" type="Feather" ></Icon>
                                                <Text style={{marginLeft:14,fontSize:18,fontWeight:"bold"}}>Definition:</Text>
                                            </View>
                                            <Text style={{marginLeft:35,fontSize:18,color:"#162447",fontFamily:"FredokaOne-Regular",marginTop:12,marginBottom:10}}>{myWord.definition}</Text>
             
                                            <View style={styles.mainView}>
                                                <Icon active name="microphone-alt" type="FontAwesome5" style={{fontSize: 25, color: "#314E52"}}></Icon>
                                                <Text style={{marginLeft:15,fontSize:18,fontWeight:"bold"}}>Pronunciation:</Text>
                                                <Text style={{marginLeft:15,fontSize:18,color:"#162447",fontFamily:"FredokaOne-Regular"}}>{myWord.pronunciation}</Text>
                                            </View>
             
                                            <View style={{display:"flex",marginTop:20}}>
                                               <Button rounded size="xs" style={{backgroundColor:"#C72C41"}} onPress={()=>deleteWord(myWord.id)}>
                                                    <Icon active name="trash" type="FontAwesome5" style={{fontSize: 25, color: "#EEEEEE"}}></Icon> 
                                                    <Text >Delete</Text>                                      
        
                                               </Button>
                                            
                                            
                                            </View>
                                        
                                        
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
    
    mainView:{
        marginTop:5,
        display: "flex",
        flexDirection: "row",
        flexWrap:"wrap"


    }
})