import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Storage from './Storages';
import AddDishes from './AddDishes';
import UpdateDishes from './UpdateDish';


const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
      <Stack.Navigator  
      initialRouteName="Storage"
      >
        <Stack.Screen 
          name="Storage"
          component={Storage}
          options={{ header: () => null }} 
        />
        <Stack.Screen 
          name="AddDishes"
          component={AddDishes}
          options={{ header: () => null }} 
        />
        <Stack.Screen 
          name="UpdateDishes"
          component={UpdateDishes}
          options={{ header: () => null }} 
        />
      </Stack.Navigator>
  )
}

export default AuthStack