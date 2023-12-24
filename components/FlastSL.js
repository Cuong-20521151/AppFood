//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView,ImageBackground,Button,FlatList,TextInput } from 'react-native';


const FlatSL = ({row,data,columns,toggleExerciseSelection}) => {
  
  const itemsPerRow = 1;
  const rows = [];
  
  for (let i = 0; i < row; i += itemsPerRow) {
    rows.push(data.slice(i, i + itemsPerRow));
  }
  
  return (
    <FlatList
          scrollEnabled={false}
          data = {rows}
          showsHorizontalScrollIndicator={false}
          renderItem = { ({item}) => (
          <TouchableOpacity  style={styles.itemListThem} onPress={() => toggleExerciseSelection}>
          {item.map((rowData) => (
                    <View  key={rowData.id}>
                      <ImageBackground source={{uri:rowData.foodPhoto}} style={styles.postImageThem} imageStyle={{ borderRadius: 15}}> 
                        <Text style={styles.textListThem}>{rowData.foodName}</Text>
                      </ImageBackground>
                      
                    </View>
                  ))
                }
                </TouchableOpacity > 
            )}
            keyExtractor = {(item) => item.id}
            numColumns={columns}
          />
  );
}

const styles = StyleSheet.create({

  itemListThem:{
    flex: 1,
    height: 110,
    margin: 5,
  },
  postImageThem:{
    width:'100%',
    height:110,
    borderRadius:50
  },
  textListThem:{
    fontSize:12,
    marginTop:70,
    padding:10,
    color:'white',
  },
});
export default FlatSL