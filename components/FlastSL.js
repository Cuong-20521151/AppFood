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
          <TouchableOpacity   style={styles.itemListThem} key={`row_${Math.random().toString(36).substring(7)}`} >
          {item.map((rowData, index) => (
                    <TouchableOpacity  key={index.toString()} onPress={() => toggleExerciseSelection({
                      id: rowData._id,
                      name: rowData.foodName,
                      Photo: rowData.foodPhoto,
                      Processing: rowData.foodProcessing,
                      Ingredients: rowData.foodIngredients,
                      Time: rowData.cookingTime,
                      Feel: rowData.feel,
                      FoodRations: rowData.foodRations,
                      UserId: rowData.userId,
                    })}>
                      <ImageBackground source={{uri:rowData.foodPhoto}} style={styles.postImageThem} imageStyle={{ borderRadius: 15}}> 
                        <Text style={styles.textListThem}>{rowData.foodName}</Text>
                      </ImageBackground>
                      
                    </TouchableOpacity>
                  ))
                }
                </TouchableOpacity > 
            )}
            keyExtractor={(item, index) => index.toString()}
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