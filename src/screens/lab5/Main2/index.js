  import React,{useState} from "react";
  import { styles } from "./styles";
  import { Image, ImageBackground, Text, View,TouchableOpacity } from "react-native";
  import Button2 from "../../../components/button/button2";

  const Main2 =() => {

      const [heartSize, setHeartSize] = useState(30); // Kích thước khởi tạo

      const handleHeartPress = () => {
        // Khi người dùng nhấn vào, thay đổi kích thước
        setHeartSize(heartSize === 30 ? 50 : 30); // Đổi kích thước giữa 30 và 50
      };
    
    return(
      <View style = {styles.container}>

          <ImageBackground
          source={require('../../../assets/hoian.jpg')} 
          style={[styles.header,]}>
              <Text 
              style={{padding:30,fontSize:30,color:'white', fontWeight:'bold',}}>
                  Phố Cổ Hội An</Text>
          </ImageBackground>
          <TouchableOpacity    onPress={handleHeartPress}>
          <Image
            source={require('../../../assets/heart.png')}
            style={{  width: heartSize, height: heartSize, left:330, top:70}}
          />
        </TouchableOpacity>        
        <View style={[styles.body,]}>
              <View style={styles.in}>
              <Image style={styles.image} source={require('../../../assets/location.png')}></Image>
              <Text style={{ fontSize:27,color:'#4267b2', fontWeight:'bold'}}>Quảng Nam</Text>
              </View>
              <View style={{paddingLeft:30,}}>
                  <Text style={{fontWeight:'bold', fontSize:20,color:'#000000',}}>Thông tin chuyến đi</Text>
                  <Text style={{paddingRight:10, marginTop:10 }}>
                  Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về  phía Nam. 
                  </Text>
              </View>
          </View>

          <View style={[styles.footer,]}>
              <View style={{flexDirection:'row', padding:25,}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10}}>100$ </Text>
              <Text style={{fontSize:20,color:'white',marginTop:10, marginRight:100}}>/Ngày</Text>
              <Button2   title={"Đặt ngay"}></Button2>
              </View>
          </View>
      </View>
  )};

  export default React.memo(Main2);