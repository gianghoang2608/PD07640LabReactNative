import React from 'react';
import {View,Button,Alert} from 'react-native';


const NewButton = () => {
    return(
        <View>
            <Button 
            color="#444444"
            title='Press me'
            onPress={() => Alert.alert('Simple Button Pressed')}>
            </Button>
        </View>   
    );
};
  export default NewButton;