// SignUp.js
import React  from "react";
import { KeyboardAvoidingView, StyleSheet, ScrollView} from "react-native";
import { Text, View ,Image} from "react-native";

import InputLogin from "../../components/InputLogin";
import Seperator from "../../components/Seperator";
import GoogleLogin from "../../components/GoogleLogin";


const Signin = () => {
    const onSignIn = ()=>{
      console.log('Test Sign in');
    }
  return (
    <View style={styles.container}>
    <KeyboardAvoidingView
    behavior={Platform.OS ==='ios' ? 'padding' : 'height'}>
    <ScrollView >
        <Text style={{fontWeight:'bold', fontSize:30,marginBottom:10,}}>Hi Welcome Back!</Text>
        <Image style={styles.image}  source={require('../../assets/icon_Welcome.png')}></Image>
      <InputLogin label="Email" placeholder="example@gmail.com" />
      <InputLogin isPassword label="Password" placeholder="********" />
      <View  style = {{alignItems:'center'}}>
        <Seperator text= "Or sign up with"></Seperator>
        <GoogleLogin></GoogleLogin>
        </View>
        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            Sign Up
          </Text>
        </Text>
        </ScrollView>
        </KeyboardAvoidingView>
        </View>
  );
};


const styles = StyleSheet.create({
    container: {
        padding:30,
       marginTop:50,
    },
    
    footerText: {
        color: '#4267b2',
        paddingBottom: 30,
        textAlign:'center',
    },
    footerLink:{
        fontWeight:'bold',
    },
    image:{
      width:350,
      height:150,
    },
});

export default Signin;
