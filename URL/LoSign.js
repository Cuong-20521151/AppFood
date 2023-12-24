import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/login";
import Signup from "../screens/signup";
import HomeScreen from "../screens/Home";
const St = createStackNavigator();

const LoSign=()=>{
  return (
    <St.Navigator>
      <St.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <St.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <St.Screen name="HomeSrc" component={HomeScreen} options={{ headerShown: false }} />      
    </St.Navigator> 
  )
}


export default LoSign;
