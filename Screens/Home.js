import React,{useState,useEffect} from "react";

import {StyleSheet,View,StatusBar,ScrollView} from 'react-native'
import SnackBar from 'react-native-snackbar-component'
import LinearGradient from 'react-native-linear-gradient';
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
    Subtitle,
    Container,
    Spinner,
} from 'native-base'
import IconAntDesign  from 'react-native-vector-icons/FontAwesome5'
import Axios from 'axios';
import { set } from "react-native-reanimated";
const Home = ()=>{
   const [details,setDetails] =useState([{word:'' }])
   const [flag,setFlag]=useState(0)
   
   const newWord=async ()=>{
       try{
            const {data}=await Axios.get('https://random-words-api.vercel.app/word');
            
            

            setDetails(data)
            setFlag(0)

            

       }
       catch(error){
           setFlag(1)
        
           console.log(error)
           
       }
   }
   useEffect(()=>{
    newWord();
    },[])

    if(flag){

        console.log(flag);
        return(

        <View  style={styles.container}>
            <StatusBar backgroundColor={"#5EDFFF"}/>
            <Container style={styles.container}>
      
                <Spinner  color="#5EDFFF" accessibilityLabel="Loading posts" />
                <Button rounded onPress={newWord} style={{backgroundColor:"#5EDFFF",paddingHorizontal:30,paddingVertical:15}}><Text style={{color:"#393B44"}}>Reload App</Text></Button>
            </Container>
            <SnackBar visible={true} textMessage="Please check your internet connection and reload the app" backgroundColor="#DA0037" messageColor="#EDEEF7"></SnackBar>
        </View>
      
        )
    }

    
        
    return (
         

         <View style={styles.container}>
         <ScrollView >
            
             <View style={{alignItems: "center"}}>
             <Text style={{fontSize:35,color:"#393B44",marginTop:15,marginBottom:25,fontFamily:"BebasNeue-Regular"}}>Your New Word for the day</Text>
             
             
             <Text style={{fontSize:30,color:"#1E3163",marginBottom:30,fontFamily:"FredokaOne-Regular"}}>{details[0].word}</Text>
             </View>
             <View style={styles.mainView}>
             <Icon active name="book-open" type="Feather" color="#7868E6"></Icon>
             <Text style={{marginLeft:15,fontSize:22,fontWeight:"bold"}}>Definition:</Text>
             </View>
             <Text style={{marginLeft:25,fontSize:19,color:"#4B6587",fontFamily:"FredokaOne-Regular",marginTop:15}}>{details[0].definition}</Text>
             
             <View style={styles.mainView}>
             <Icon active name="microphone-alt" type="FontAwesome5" color="#7868E6"></Icon>
             <Text style={{marginLeft:15,fontSize:22,fontWeight:"bold"}}>Pronunciation:</Text>
             <Text style={{marginLeft:15,fontSize:20,color:"#4B6587",fontFamily:"FredokaOne-Regular"}}>{details[0].pronunciation}</Text>
             </View>
             <View style={{display: "flex",flexDirection: "row",justifyContent:"center",marginTop:40}}>
                <Button  rounded style={{backgroundColor:"#80ED99",paddingHorizontal:25}} >
                        <Text style={{color:"#012443"}}>Save</Text>
                </Button>
            </View> 

             <View style={styles.bottomView}>
                  <Button rounded style={{marginRight:10,backgroundColor:"#035397",paddingHorizontal:15}}>
                       <Text>My Book</Text>
                  </Button>
                  <Button rounded style={{marginRight:10,backgroundColor:"#5EDFFF",paddingHorizontal:15}} onPress={newWord}>
                        <Text style={{color:"#394867"}}>New Word</Text>
                  </Button>
                  
             </View>
            

    
         </ScrollView>
         </View>
    )
}
export default Home;

const styles = StyleSheet.create({



    container: {

        backgroundColor:"#ECFCFF",
        flex:1,
    
        


    },
    mainView:{
        marginTop:20,
        display: "flex",
        flexDirection: "row",
        flexWrap:"wrap"


    },
    bottomView:{

        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        marginTop:40

    }
    
})