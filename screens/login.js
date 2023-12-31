import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TouchableOpacity,
  
} from "react-native";
import { useAuth } from "./AuthContext"; 
import CustomTextInput from "../components/CustomInputText";

import Icon from 'react-native-vector-icons/Ionicons'
const Login = ({navigation}) => {
  const {username, password, setCredentials, setIsAuthenticated,setUserId} = useAuth()
  
  const handleLogin = async () => {
    
    fetch('http://192.168.88.128:3000/api/getUser')
      .then((res) => res.json())
      .then((json) => {
        const foundUser = json.find(user => user.username === username && user.password === password);
        const Id = json.filter(item=>item.username === username && item.password === password).map(item => ({
          _id: item._id,
        }));
        if (foundUser) {
          // Thực hiện các hành động cần thiết khi xác minh đăng nhập thành công
          setIsAuthenticated(true);
          console.log(Id[0]?._id);
          setUserId(Id[0]?._id);
          navigation.navigate("HomeSrc")
        } else {
          Alert.alert('Sai tài khoản hoặc mật khẩu');
        }
      })
      .catch((error) => console.error(error));
  };
  const handleSignUp = () => {
    navigation.navigate("Signup")
  }

  const handleForgotPassword = () => {
    // Do something when the user forgets their password
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Icon style={styles.icon} name = {"close"} color = {'#000'} size = {25}/>
      </TouchableOpacity>
      <View style={styles.appContainer}>
      <Image source={{uri:'https://5.imimg.com/data5/ANDROID/Default/2021/1/WP/TS/XB/27732288/product-jpeg.jpg'}}
      style={styles.logo}/>
      <Text style={styles.appName}>AppFood</Text>
      </View>
      
      <View style={styles.content}>
        <CustomTextInput
          name = 'user'
          placeholder="Tài khoản"
          value={username}
          onChangeText={(value) => setCredentials(value, password)}
        />
        <CustomTextInput
          name = 'lock'
          placeholder="Mật khẩu"
          value={password}
          onChangeText={(value) => setCredentials(username,value)}
          secureTextEntry={true}
        />
        
        
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
          <TouchableOpacity
          style={styles.button_login}
          onPress={handleLogin}
        >
          <Text style={styles.text_login}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <View style={styles.title_sigup}>
        <Text style={styles.text_title_sigup}>Đăng nhập với</Text>
        </View>
        <View style={styles.mxh}>
          <Image source={{uri:'https://anh.eva.vn/upload/4-2016/images/2016-11-30/1480494815-facebook-sao-viet.png'}}
          style={styles.Image_mxh}/>
          <Image source={{uri:'https://img.idesign.vn/2023/02/idesign_logogg_1.jpg'}}
          style={styles.Image_mxh}/>
        </View>
        <View style={styles.sigup}>
          <Text style={styles.text_sigup}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.text_sigup_account}>Đăng ký tại đây</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:150,
    flex: 1,
    backgroundColor: "#fff",
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'transparent', // Để nút không có màu nền
    zIndex: 1, // Để nút luôn nằm trên các thành phần khác
  },
  appContainer:{  
      alignItems: 'center',
      justifyContent: 'center',
    },
  appName:{
      paddingTop:5,
      paddingBottom:5,
      fontSize:30,
      fontWeight:'bold',
      color:'#000',
    },
  logo: {
      width: 100,
      height: 100,
      borderRadius: 60,
    },
  content: {
    
    padding: 20,
  },
  
  button_login: {
    backgroundColor: "#ff9800",
    padding:8,
    borderRadius:8,
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: 'center',
  },
  text_login:{
    fontSize: 18,
    color: "#FFFFFF",
  },
  forgotPassword: {
    textAlign: 'right',
    marginLeft:150,
    marginBottom:20,
    
  },
  forgotPasswordText: {
    fontSize: 16,
    textAlign:'right',
    color: "#FF00FF",
  },
  title_sigup:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_title_sigup:{
    paddingTop:10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  mxh:{
    flexDirection:'row',
    marginTop:30,
    justifyContent: 'space-between',
    marginLeft:80,
    marginRight:90,
    
  },
  Image_mxh: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft:15,
    marginRight:10,
  },
  sigup:{
    flexDirection:'row',
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_sigup:{
    fontSize: 16,
  },
  text_sigup_account:{
    fontSize: 16,
    color: "#0000FF",
    paddingLeft:5,
  },
  text:{
    textAlign:"center",
    fontSize:15,
    fontWeight:500,
    marginBottom:10
  }
  
});

export default Login;