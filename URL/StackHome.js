import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import TopTabs from './TopTabs';
import BaiViet from '../screens/BaiViet';
const Stack = createStackNavigator();

function StackHome() {
  return (
      <Stack.Navigator initialRouteName="HomeSrc">
        <Stack.Screen name="HomeSrc" component={TopTabs} options={{headerShown:false}}/>
        <Stack.Screen name="BaiViet" component={BaiViet} />
      </Stack.Navigator>
    
  );
}

export default StackHome;