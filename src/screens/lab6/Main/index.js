import * as React from "react";
import { Button, View, Image, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

const CustomDrawerContent = ({ ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Header */}
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image style={{ borderRadius: 100, height: 100, width: 100, marginBottom: 20 }}
          source={require('../../../assets/user.jpg')} />
      </View>
      {/* Custom drawer items */}
      <DrawerItemList {...props} />
      <View style={{ alignItems: 'center', marginTop: 450 }}>
        <Text >Software version: 2.6.0</Text>
      </View>
    </DrawerContentScrollView>
  );
};

function HomeScreen({ navigation }) {
  const [name, setName] = React.useState('');

  const goToDetails = () => {
    navigation.navigate('Notifications', { name });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput style={{ width: 300, borderColor: '#03A5F0', borderWidth: 1, borderRadius: 5, marginBottom: 10}}
        placeholder="Nhập tên"
        value={name}
        onChangeText={setName}></TextInput>
      <Button
        onPress={goToDetails}
        title="Go to notifications"
      ></Button>
    </View>
  );
}

function NotificationsScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  }}>
      <Text style={{marginBottom:10,}}>{`Chào bạn, ${name}`}</Text>
      <Button onPress={() => navigation.goBack()} title="Go back Home"></Button>
    </View>
  );
}




const Drawer = createDrawerNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor: "#146EB4",
          drawerInactiveTintColor: "black",
        }}
        initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name='Notifications' component={NotificationsScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Main;
