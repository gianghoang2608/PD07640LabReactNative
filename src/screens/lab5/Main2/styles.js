import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        flexDirection:'column',
    },
    header:{
        flex:5,
        backgroundColor:'#FCCC63',
        height:450,
    },
    body:{
        flex: 5,
        backgroundColor: 'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:70,

    },
    in:{
        flexDirection:'row',
        padding:30,
        
    },
    image:{
        height:40,
        width:40,
        
    },
    footer:{
        flex:1,
        backgroundColor:'#3B5998',  
        borderTopLeftRadius:20,
        borderTopRightRadius:20,  
        justifyContent:'center'
    },
   
});