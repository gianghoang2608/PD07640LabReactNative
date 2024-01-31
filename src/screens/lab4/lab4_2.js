import React, { useState } from 'react';
import { RefreshControl, ScrollView,  StatusBar,  StyleSheet, Text, View, } from 'react-native';

const Lab4_2 = () => {
const [refresh,setRefesh] = useState(false);
const styleTypes = ['default', 'dark-content', 'light-content']
const [barStyle, setBarStyle] = useState(styleTypes[1]);

const pullMe = () =>{
    setRefesh(true);

    setTimeout(()  =>{
       setRefesh(false);
       setBarStyle[styleTypes[2]];
    },2000);
}


  return (

  
    <ScrollView
    style={styles.container}
      refreshControl={
        <RefreshControl refresh={refresh} 
        onRefresh={pullMe}/>
      }>
       <StatusBar 
       barStyle={barStyle}
       translucent
       backgroundColor={'transparent'}></StatusBar>
      <Text style={styles.text}>Kéo xuống </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
  },
  text: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default React.memo(Lab4_2);
