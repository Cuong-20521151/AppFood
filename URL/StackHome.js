import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import TopTabs from './TopTabs';
import BaiViet from '../screens/BaiViet';
import SearchMeal from '../screens/SearchMeal';
import SearchProcessing from '../screens/SearchProcessing';
import LoSign from '../URL/LoSign';
const Stack = createStackNavigator();

function StackHome() {
  return (
      <Stack.Navigator initialRouteName="HomeSrc">
        <Stack.Screen name="HomeSrc" component={TopTabs} options={{headerShown:false}}/>
        <Stack.Screen name="BaiViet" component={BaiViet} />
        <Stack.Screen name="SearchMeal" component={SearchMeal} options={{headerShown:false}}/>
        <Stack.Screen name="SearchProcessing" component={SearchProcessing} options={{headerShown:false}}/>
        <Stack.Screen name="LoSign" component={LoSign} options={{headerShown:false}}/>
      </Stack.Navigator>
    
  );
}

export default StackHome;