import React from "react";
import { styles } from "./styles";
import { Image, TouchableOpacity } from "react-native";


const GoogleLogin = ( ) => {
    const handleGoogleLogin = async () => {
        console.log('Test google login');
    };

    return( 
        <TouchableOpacity
         activeOpacity={0.6}
         onPress={handleGoogleLogin}
         style={styles.container}
        >
        <Image style={styles.image} source={require('../../assets/google.png')}></Image>
        </TouchableOpacity>
    );
};

export default React.memo(GoogleLogin);