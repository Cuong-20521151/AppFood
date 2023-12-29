import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import CustomTextInput from "../components/CustomInputText";

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSignUp = async () => {
    try {
      if (firstName === "") {
        Alert.alert("Vui lòng nhập tên của bạn!");
        return;
      }
      if (username === "") {
        Alert.alert("Vui lòng nhập tên đăng nhập của bạn!");
        return;
      }
      if (password !== confPassword) {
        Alert.alert("Vui lòng nhập đúng mật khẩu!");
        return;
      }

      const response = await fetch("http://192.168.100.6:3000/api/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:{
            firstname: firstName,
            lastname: lastName,
          },
          username: username,
          password: password,
          // userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU",
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        Alert.alert("Chúc mừng bạn đã đăng ký thành công!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Đăng ký không thành công. Vui lòng thử lại sau!");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      Alert.alert("Lỗi xảy ra khi đăng ký!");
    }
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.appContainer}>
        <Image
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFYUMxwjoJUgk-Bv9mwUGhi6uhAIKOfWZHw&usqp=CAU",
          }}
          style={styles.logo}
        />
        <Text style={styles.appName}>Create New Account</Text>
      </View>
      <View style={styles.content}>
        <CustomTextInput
          name="user"
          placeholder="Enter Firstname"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <CustomTextInput
          name="user"
          placeholder="Enter Lastname"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
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
});

export default Signup;