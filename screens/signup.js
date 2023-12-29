import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import CustomTextInput from "../components/CustomInputText";

const Signup = ({ navigation }) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSignUp = async () => {
    try {
      if ( !username || !password || !confPassword) {
        Alert.alert("Làm phiền bạn điền đủ các trường!");
        return;
      }
      if (password !== confPassword) {
        Alert.alert("Passwords do not match.");

        return;
      }
      // Additional password strength checks can be added here

      const response = await fetch("http://192.168.100.6:3000/api/Signup", {

      // Additional password strength checks can be added here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        Alert.alert("Chúc mừng! Bạn đã đăng ký thành công.");
        navigation.navigate("Login");
      } else {
        Alert.alert("Đăng ký thất bại. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      Alert.alert("Đã xảy ra lỗi trong quá trình đăng ký.");
    }
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Ionicons style={styles.icon} name = {"arrow-back"} color = {'#000'} size = {25}/>
      </TouchableOpacity>
      <View style={styles.appContainer}>
        <Image
          source={{
            uri:
              "https://5.imimg.com/data5/ANDROID/Default/2021/1/WP/TS/XB/27732288/product-jpeg.jpg",
          }}
          style={styles.logo}
        />
        <Text style={styles.appName}>Create New Account</Text>
      </View>
      <View style={styles.content}>
        
        <CustomTextInput
          name="user"
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <CustomTextInput
          name="lock"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <CustomTextInput
          name="lock"
          placeholder="Confirm Password"
          value={confPassword}
          onChangeText={(text) => setConfPassword(text)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button_login} onPress={handleSignUp}>
          <Text style={styles.text_login}>CREATE</Text>
        </TouchableOpacity>

        <View style={styles.sigup}>
          <Text style={styles.text_sigup}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.text_sigup_account}>Login now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#fff",
  },

  appContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  appName: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
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
    padding: 8,
    borderRadius: 8,
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  text_login: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  sigup: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text_sigup: {
    fontSize: 16,
  },
  text_sigup_account: {
    fontSize: 16,
    color: "#0000FF",
    paddingLeft: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'transparent', // Để nút không có màu nền
    zIndex: 1, // Để nút luôn nằm trên các thành phần khác
  },
});

export default Signup;