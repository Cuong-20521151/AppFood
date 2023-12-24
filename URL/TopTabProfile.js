import React,{useState} from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity,Image,Modal } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SaveBV from '../screens/SaveBV';
import LikeBV from '../screens/LikeBV';
import Icon from 'react-native-vector-icons/Ionicons'
import { useAuth } from '../screens/AuthContext';
import Profile from '../screens/Profile';

const TopTab = createMaterialTopTabNavigator();


const CustomTabBar = ({ state, descriptors, navigation }) => {
  const {setIsAuthenticated} = useAuth();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  
  return (
    <View style={styles.tabBar}>
      <View style={styles.Head}>
        <View style={styles.HeadUser}>
          <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFYUMxwjoJUgk-Bv9mwUGhi6uhAIKOfWZHw&usqp=CAU'}}
      style={styles.logo}></Image>
          <Text>Tên người dùng</Text>
        </View>
        <View style={styles.HeadIcon}>
          <TouchableOpacity >
            <Icon name={"settings"} size={25} color={"#000"}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMenuToggle}>
            <Text style={styles.Text3Cham}>⋮</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Modal hiển thị thông tin người dùng và tùy chọn đăng xuất */}
      {isMenuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={handleLogout}>
            <Text>Thông tin người dùng</Text>
            <Text style={styles.menuItem}>Đăng Xuất</Text>
          </TouchableOpacity>
          {/* Thêm các tùy chọn khác ở đây nếu cần */}
        </View>
      )}
      {/* Display tab names */}
      <View style={styles.tabNamesContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.title !== undefined ? options.title : route.name;
          const isFocused = state.index === index;

          return (
            <Text
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={[
                styles.tabText,
                {
                  borderBottomColor: isFocused ? 'orange' : 'black',
                  borderBottomWidth: isFocused ? 2 : 0,
                  paddingBottom: 5,
                },
              ]}
            >
              {label}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const TopTabProfile = () => {
  return (
    <TopTab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      style={styles.topTab}
      
    >
      <TopTab.Screen
        name="Món Đã Lưu"
        component={SaveBV}
        options={{ title: 'Kho Cảm Hứng' }}
      />
      <TopTab.Screen
        name="Món của tôi"
        component={LikeBV}
        options={{ title: 'Các Bạn Bếp' }}
      />
    </TopTab.Navigator>
  );
};

const styles = StyleSheet.create({
  topTab:{
    paddingTop:50,
    
  },
  tabBar: {
    height: 100,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  searchContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#DDDDDD',
    borderRadius: 15,
    paddingLeft: 15,
    height: 50,
  },
  tabNamesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabText: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  Head:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    margin:5
  },
  logo:{
    width:40,
    height:40,
    marginRight:10,
    borderRadius:50
  },
  HeadUser:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginLeft:15,
  },
  HeadIcon:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginRight:20
  },
  Text3Cham:{
    fontSize:30,
    marginLeft:25
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  menu: {
    position: 'absolute',
    top: 40, // Điều chỉnh vị trí hiển thị của menu khi nó hiển thị
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    zIndex: 999,
  },

  menuItem: {
    fontSize: 16,
    paddingVertical: 8,
  },
  
});

export default TopTabProfile;