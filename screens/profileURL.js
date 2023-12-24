import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import CauHoiThuongGap from './settings/CauHoiThuongGap';
import ChinhSach from './settings/ChinhSach';
import DieuKhoan from './settings/DieuKhoan';
import HuongDan from './settings/HuongDan';

const Stack = createNativeStackNavigator();
const ProAuthStack = () => {
  return (
    
      <Stack.Navigator
        initialRouteName="Profile"
        
      >
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="CauHoiThuongGap" component={CauHoiThuongGap} options={{headerStyle: { paddingTop: 30 }}}/> 
        <Stack.Screen name="ChinhSach" component={ChinhSach} options={{headerStyle: { paddingTop: 30 }}} />
        <Stack.Screen name="DieuKhoan" component={DieuKhoan} options={{headerStyle: { paddingTop: 30 }}} />
        <Stack.Screen name="HuongDan" component={HuongDan} options={{headerStyle: { paddingTop: 30 }}} />
      </Stack.Navigator>
    
  )
}

export default ProAuthStack;