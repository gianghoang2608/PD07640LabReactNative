import React from "react";
import { styles } from "./styles";
import { ImageBackground, Text, View } from "react-native";
import NewButton from "../../../components/button/button1/newButton";

const Main1 = () =>{
    return(
            <ImageBackground style={styles.image} source={require('../../../assets/background_lab5.jpg')}>
               <View style={{flex:1, justifyContent:'center',padding:20,alignItems:'flex-end'}}>
                <Text style={styles.text1}>
                    Discover world with us 
                </Text>
                <Text style={styles.text2} >
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                </Text>
                <NewButton style={{padding:100, }}></NewButton>
            </View>

            </ImageBackground>
         
 )};

 export default Main1;