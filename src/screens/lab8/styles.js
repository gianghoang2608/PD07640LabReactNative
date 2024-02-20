import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#B0E0E0',
        borderRadius: 4,
        padding: 16,
        margin: 10,
    },
    containerText: {
        padding: 10,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonNew: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingVertical: 5,
        marginHorizontal: 8,
        backgroundColor: 'tomato',
        marginBottom: 12,
        marginTop: 12,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
    },
    birthday: {
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: 'tomato',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginHorizontal: 8,
        borderRadius: 8,
    },
    buttonText:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // model styles
    modelContent:{
        backgroundColor:'white',
        padding: 15,
        marginTop: 100,
        borderRadius: 8,
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    buttonGroup:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button:{
        backgroundColor: 'tomato',
        padding: 8,
        borderRadius: 4,
        marginLeft: 8,
    },
    buttonText:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});