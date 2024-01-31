import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop:20,
        padding:2,
        justifyContent:'space-between',
    },
    item:{
        flexDirection: 'row', // Chia item thành hàng ngang
        alignItems: 'center', // Canh chỉnh các phần tử theo chiều dọc  
        borderRadius: 10,
        backgroundColor:'white',
        padding:20,
        marginHorizontal:16,
        marginVertical:5,
        borderWidth: 0.5,  // Độ dày của đường border
        borderColor: '#F2F2F2',  // Màu sắc của đường border
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:50,
    },
    text:{
      marginLeft:30,
      textAlign:'center',
      fontWeight:'bold',
      fontSize:10,
    },
});