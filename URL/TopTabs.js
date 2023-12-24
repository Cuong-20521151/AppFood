import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CacBanBep from '../screens/CacBanBep';
import StackHome from './StackHome';
import HomeScreen from '../screens/Home';

const TopTab = createMaterialTopTabNavigator();




const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      <View style={styles.searchContainer}>
        {/* Your TextInput here */}
        <TextInput
          style={styles.searchInput}
          placeholder='Gõ vào nguyên liệu hoặc món cần tìm'
        />
      </View>
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

const TopTabs = () => {
  return (
    <TopTab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      style={styles.topTab}
      
    >
      <TopTab.Screen
        name="Kho Cảm Hứng"
        component={HomeScreen}
        options={{ title: 'Kho Cảm Hứng' }}
      />
      <TopTab.Screen
        name="Các Bạn Bếp"
        component={CacBanBep}
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
});

export default TopTabs;