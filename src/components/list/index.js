import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";

const DATA = [
{
    id:'1',
    title:'DATA STRUCTURES',
    imageSource: require('../../assets/user.jpg'),
},
{
    id:'2',
    title:'JAVA',
    imageSource: require('../../assets/user.jpg'),
},
{
    id:'3',
    title:'C++',
    imageSource: require('../../assets/user.jpg'),
},
{
    id:'4',
    title:'JAVASCRIPT',
    imageSource: require('../../assets/user.jpg'),
},
{
    id:'5',
    title:'SQL',
    imageSource: require('../../assets/user.jpg'),
},
{
    id:'6',
    title:'STL',
    imageSource: require('../../assets/user.jpg'),
},
{
    id:'7',
    title:'STL',
    imageSource: require('../../assets/user.jpg'),
},
];

const Item =({title, imageSource}) =>{
    return(
        <View style={styles.item}>
            <Image source={imageSource} style ={styles.avatar}></Image>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};


const renderItem = ({ item }) => {
    return <Item imageSource={item.imageSource} title={item.title} />;
  };
  

const ListCourse = () => {
    return(
        <View style = {styles.container}>
            <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}>
            </FlatList>
        </View>
    );
};

export default React.memo(ListCourse);