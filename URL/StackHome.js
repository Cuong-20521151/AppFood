import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import TopTabs from './TopTabs';
import BaiViet from '../screens/BaiViet';
import SearchMeal from '../screens/SearchMeal';
import SearchProcessing from '../screens/SearchProcessing';
import LoSign from '../URL/LoSign';
import Signup from '../screens/signup';
import Login from '../screens/login';
const Stack = createStackNavigator();
const CustomHeader = ({ navigation, route }) => {
  return (
    <View style={{ height: 100,  elevation: 1, borderBottomWidth: 0  ,paddingTop:30, paddingLeft:10,flexDirection: 'row', alignItems: 'center'  }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View>
          <Ionicons name="arrow-back" size={24} color="black" style={{ marginRight: 5 }} />
        </View>
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', color: 'black', fontSize:24 }}>{route.name}</Text>
    </View>
  );
};
function StackHome() {
  return (
    <Stack.Navigator initialRouteName="HomeSrc"
      screenOptions={{
        headerStyle: {
          height: 180, // Margin top cho header

        },
        headerShown: true,
      }}
    >
      <Stack.Screen name="HomeSrc" component={TopTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Bài Viết" component={BaiViet} options={{
        headerStyle: {
          height: 100,
        },
      }} />
      <Stack.Screen name="SearchMeal" component={SearchMeal} options={{ headerShown: false }} />
      <Stack.Screen name="SearchProcessing" component={SearchProcessing} options={{ headerShown: false }} />
      <Stack.Screen name="LoSign" component={LoSign} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}

export default StackHome;