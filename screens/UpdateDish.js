import React from 'react'
import { useEffect, useState } from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
const upload = 'cloud-upload';
const checkmark = 'checkmark';
import MyDropDownPicker from '../components/dropdown'

const UpdateDishes = ({ navigation,route }) => {
  const { id, name:initialfoodName, Photo:initialfoodPhoto, Processing:initialfoodProcessing, ProcessingType:initialfoodProcessingType,
    Ingredients: initialfoodIngredients, Time:initialcookingTime, Feel:initialfeel, FoodRations:initialfoodRations,MealType:initialmealType } = route.params; 

    
    const [foodName, setFoodName] = useState(initialfoodName)
    const [foodPhoto, setFoodPhoto] = useState(initialfoodPhoto)
    const [foodProcessing, setFoodProcessing] = useState(initialfoodProcessing)
    const [foodProcessingType, setFoodProcessingType] = useState(initialfoodProcessingType)
    const [foodIngredients, setFoodIngredients] = useState(initialfoodIngredients)
    const [cookingTime, setCookingTime] = useState(initialcookingTime)
    const [feel, setFeel] = useState(initialfeel)
    const [foodRations, setFoodRations] = useState(initialfoodRations)
    const [mealType, setMealType] = useState(initialmealType)
    const [inputHeight, setInputHeight] = useState(80); // Độ cao mặc định của TextInput
    const [modal, setModal] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false);
    const [currentValue1, setCurrentValue1] = useState([]);
    const [isOpen2, setIsOpen2] = useState(false);
    const [currentValue2, setCurrentValue2] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState([]);

    const items1 = [
      { label: 'Sáng', value: 'Sáng' },
      { label: 'Trưa ', value: 'Trưa' },
      { label: 'Tối', value: 'Tối' },
    ]
    const items2 = [
      { label: '1 người', value: '1 người' },
      { label: '2 người ', value: '2 người' },
      { label: '3 người', value: '3 người' },
      { label: '4 người', value: '4 người' },
      { label: '5 người', value: '5 người' },
      { label: 'Trên 5', value: 'Trên 5 người' },
    ]
    const items = [
      { label: 'Chiên', value: 'Chiên' },
      { label: 'Xào', value: 'Xào' },
      { label: 'Luộc', value: 'Luộc' },
      { label: 'Hấp', value: 'Hấp' },
      { label: 'Nướng', value: 'Nướng' },
      { label: 'Kho', value: 'Kho' },
      { label: 'Ninh/ Hầm', value: 'Ninh/ Hầm' },
    ]
    useEffect(() => {
      // Set default values for dropdowns when component mounts
      setCurrentValue1(initialfoodProcessingType);
      setCurrentValue2(initialfoodRations);
      setCurrentValue(initialmealType);
    }, []);
  
const updateData = async () => {
  try {
    const response = await fetch(`http://192.168.88.128:3000/api/update/`+route.params.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foodName: foodName,
        foodPhoto: foodPhoto,
        foodProcessing: foodProcessing,
        foodIngredients: foodIngredients,
        cookingTime: cookingTime,
        feel: feel,
        foodRations: currentValue2,
        foodProcessingType: currentValue,
        mealType: currentValue1,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Server Response:', data);
    navigation.goBack();
  } catch (error) {
    console.error('Error updating data:', error.message);
  }
};

  const _uploadImage = async () => {
    const options = {
      base64: true,
      quality: 1,
    }
    const file = await ImagePicker.launchImageLibraryAsync(options)
    if (!file.canceled) {
      handleUpdata(file.assets[0])
    }
  }


  const _takePhoto = async () => {
    const options = {
      base64: true,
      quality: 1,
    }
    const file = await ImagePicker.launchCameraAsync(options)
    if (!file.canceled) {
      handleUpdata(file.assets[0])
    }
  }

  const handleUpdata = async (image) => {
    const data = new FormData()
    data.append('file', `data:image/jpg;base64,${image.base64}`)
    data.append('api_key', '245216386178123')
    data.append("upload_preset", "foodPhotos")
    data.append("folder", "FoodIE307")
    data.append("cloud_name", "dndvr8ko9")
    const res = await fetch("https://api.cloudinary.com/v1_1/dndvr8ko9/image/upload", {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
    const picture_url = (await res.json()).secure_url
    setFoodPhoto(picture_url)
    setModal(false)
  }

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    // Thiết lập độ cao của TextInput dựa trên chiều cao nội dung mới
    setInputHeight(contentHeight);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='chevron-back-outline' style={{ fontSize: 40, paddingLeft: 10 }} />
        </TouchableOpacity>
        <View style={styles.pushFood}>
          <TouchableOpacity onPress={() => updateData()}>
            <Text style={styles.text_pushFood}>Lên Sóng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.introduce}>
        <TouchableOpacity style={styles.upload_image} mode="contained"
          onPress={() => _uploadImage()}>
          <Icon name={foodPhoto == "" ? upload : checkmark} size={50}></Icon>
          <Text>Chọn ảnh</Text>
          {foodPhoto !== "" && (
          <Image source={{ uri: foodPhoto }} style={styles.image} />
          )}
        </TouchableOpacity>

        <TextInput placeholder='Tên món ăn' style={styles.input_name} onChangeText={text => setFoodName(text)} >
          {foodName}
        </TextInput>
        <TextInput placeholder='Cảm nghĩ về món ăn!Tại sao lại muốn ăn món ăn này?...'
          style={[styles.input_Ingredient, { height: Math.max(80, inputHeight) }]}
          multiline
          numberOfLines={1}
          onContentSizeChange={(e) =>
            handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
          }
          onChangeText={text => setFeel(text)}
        >{feel}</TextInput>
                <View style={styles.Ration}>
          <Text style={styles.text_Ration}>Bữa ăn phù hợp</Text>
          <View style={{ marginLeft: 15, marginRight: 201 }}>
            <MyDropDownPicker
              items={items1}
              isOpen={isOpen1}
              setIsOpen={setIsOpen1}
              currentValue={currentValue1}
              setCurrentValue={setCurrentValue1}
              dropDownDirection="TOP"
              placeholder={mealType}
            />
          </View>
        </View>
        <View style={styles.Ration}>
          <Text style={styles.text_Ration}>Khẩu phần</Text>
          <View style={{ marginLeft: 55, marginRight: 161 }}>
            <MyDropDownPicker
              items={items2}
              isOpen={isOpen2}
              setIsOpen={setIsOpen2}
              currentValue={currentValue2}
              setCurrentValue={setCurrentValue2}
              dropDownDirection="BOTTOM"
              placeholder={foodRations}
            />
          </View>
        </View>
        <View style={styles.Ration}>
          <Text style={styles.text_Ration}>Thời gian nấu</Text>
          <TextInput placeholder='1 giờ 30 phút' style={styles.input_Ration}
            onChangeText={text => setCookingTime(text)} >{cookingTime}</TextInput>
        </View>
      </View>
      <View style={styles.introduce}>
        <Text style={styles.Ingredient}>Nguyên liệu</Text>
        <View style={styles.Ingredient_items}>
          <TextInput placeholder='250g bột' style={[styles.input_Ingredient, { height: Math.max(80, inputHeight) }]}
            multiline
            numberOfLines={1}
            onContentSizeChange={(e) =>
              handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
            }
            onChangeText={text => setFoodIngredients(text)}
          >{foodIngredients}</TextInput>
        </View>
      </View>
      <View style={styles.introduce}>
      <View style={styles.Ration}>
          <Text style={styles.text_Ration}>Cách chế biến</Text>
          <View style={{ marginLeft: 25, marginRight: 190 }}>
            <MyDropDownPicker
              items={items}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              currentValue={currentValue}
              setCurrentValue={setCurrentValue}
              dropDownDirection="BOTTOM"
              placeholder={foodProcessingType}
            />
          </View>
        </View>
        <Text style={styles.Ingredient}>Cách làm</Text>
        <View style={styles.Ingredient_items}>
          <TextInput placeholder='Bước 1' style={[styles.input_Ingredient, { height: Math.max(80, inputHeight) }]}
            multiline
            numberOfLines={1}
            onContentSizeChange={(e) =>
              handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
            }
            onChangeText={text => setFoodProcessing(text)}
          >{foodProcessing}</TextInput>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    backgroundColor: '#FFFF',
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 15,
  },
  pushFood: {
    marginLeft: 220,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    backgroundColor: '#B8B8B8',
    borderRadius: 10,
  },
  text_pushFood: {
    fontSize: 18,
  },
  upload_image: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  input_name: {
    backgroundColor: '#A2CD5A',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
  },
  introduce: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    marginBottom: 15,
  },
  Ration: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    marginLeft: 25,
    marginBottom: 5,
    paddingRight: 25,

  },
  text_Ration: {
    fontSize: 18,
  },
  dropDownPicker: {
  },
  input_Ration: {
    paddingLeft: 20,
    backgroundColor: '#A2CD5A',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    width: 200,
    marginBottom: 40,
  },
  Ingredient: {
    fontSize: 18,
    marginLeft: 25,
    marginTop: 10,
  },
  Ingredient_items: {
    marginTop: 15,
  },
  input_Ingredient: {
    marginTop: 5,
    marginLeft: 25,
    marginBottom: 20,
    paddingLeft: 20,
    backgroundColor: '#A2CD5A',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    width: 343,
    fontSize: 18,
  },
  add_Ingredient: {
    marginTop: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
})
export default UpdateDishes