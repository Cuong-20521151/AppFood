import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import CauHoiThuongGap from './settings/CauHoiThuongGap';
import ChinhSach from './settings/ChinhSach';
import DieuKhoan from './settings/DieuKhoan';
import HuongDan from './settings/HuongDan';
const CustomHeader = ({ navigation, route }) => {
  return (
    <View style={{ height: 100, elevation: 1, borderBottomWidth: 0, paddingTop: 30,paddingLeft:10,flexDirection: 'row', alignItems: 'center'  }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{}}>
          <Ionicons name="arrow-back" size={24} color="black" style={{ marginRight: 5 }} />
        </View>
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 24 }}>{route.name}</Text>
    </View>
  );
};
const Stack = createNativeStackNavigator();
const ProAuthStack = () => {
  return (
    
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          header: (props) => <CustomHeader {...props} />,
          headerShown: true,
        }}
      >
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Câu hỏi thường gặp" component={CauHoiThuongGap} options={{headerStyle: { paddingTop: 30 }}}/> 
        <Stack.Screen name="Chính sách" component={ChinhSach} options={{headerStyle: { paddingTop: 30 }}} />
        <Stack.Screen name="Điều khoản bảo mật" component={DieuKhoan} options={{headerStyle: { paddingTop: 30 }}} />
        <Stack.Screen name="Hướng dẫn" component={HuongDan} options={{headerStyle: { paddingTop: 30 }}} />
      </Stack.Navigator>
    
  )
}

export default ProAuthStack;