// npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
import React,{useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import Search from './Search';
import AuthStack from './authStack';
import TopTabs from '../URL/TopTabs';
import ProAuthStack from './profileURL';
import StackHome from '../URL/StackHome';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';
import LoSign from '../URL/LoSign';
import Login from './login';
import TopTabProfile from '../URL/TopTabProfile';
import UserDetails from './ProfileDetails';
import BaiViet from '../screens/BaiViet';
function Pro(){
  const St = createStackNavigator ();
  return(
    <St.Navigator initialRouteName="ProAuthStackSrc">
      <St.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
      <St.Screen name="ProAuthStackSrc" component={ProAuthStack} options={{ headerShown: false }} />    
    </St.Navigator> 
  )
};
function TopTab(){
  const St = createStackNavigator ();
  return(
    <St.Navigator initialRouteName="TopTabProfile" 
      screenOptions={{
        headerStyle: {
          height: 100, // Margin top cho header
          
        },
        headerShown: true,
      }}
    >
      <St.Screen name="Cập nhật thông tin" component={UserDetails} options={{ headerShown: true}} />
      <St.Screen name="TopTabProfile" component={TopTabProfile} options={{ headerShown: false }} />  
      <St.Screen name="Cài đặt" component={ProAuthStack} options={{ headerShown: true }} />   
      <St.Screen name="Bài Viết" component={BaiViet} options={{ headerShown: true }}/>
    </St.Navigator> 
  )
};
const Main = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      if (!isAuthenticated) {
        // Nếu người dùng chưa xác thực, hãy chuyển hướng đến màn hình đăng nhập
        navigation.navigate('LoSign');
        e.preventDefault(); // Ngăn chặn điều hướng mặc định của tab
      }
    });

    return unsubscribe;
  }, [navigation, isAuthenticated]);


 
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
            size = focused ? 28 : 28
            color = focused ? '#4190f4' : '#808080'
          } else if (route.name === 'Search') {
            iconName = 'search'
            size = focused ? 28 : 28
            color = focused ? '#4190f4' : '#808080'
          } else if (route.name === 'Storages') {
            iconName = 'plus-circle'
            size = focused ? 28 : 28
            color = focused ? '#4190f4' : '#808080'
          } else if (route.name === 'ProfileScreen') {
            iconName = 'user'
            size = focused ? 28 : 28
            color = focused ? '#4190f4' : '#808080'
          }
          return (
            
            <Icon
              name={iconName}
              color={color}
              size={size}
            />
          )
        },
        tabBarLabelStyle: { fontSize: 12},
        // tabBarLabelStyle: { fontSize: 15,opacity: 0 },
      })
      }
    >
      <Tab.Screen name="Home" component={StackHome} options={{ header: () => null }} />
      <Tab.Screen name="Search" component={Search} options={{ header: () => null }} />
      <Tab.Screen
        name="Storages"
        component={isAuthenticated ? AuthStack : LoSign} // Không render gì cả nếu chưa xác thực
        options={{ header: () => null }}
      />
      <Tab.Screen name="ProfileScreen" component={isAuthenticated ? TopTab : Pro} options={{ header: () => null }} />
      
    </Tab.Navigator>
  );
}
export default Main
//123