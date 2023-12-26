import React from 'react'
import { useEffect, useState } from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';
import MyDropDownPicker from '../components/dropdown'
import axios from 'axios';
const upload = 'cloud-upload';
const checkmark = 'checkmark';

const AddDishes = ({ navigation }) => {
  const [foodName, setFoodName] = useState("")
  const [foodPhoto, setFoodPhoto] = useState('')
  const [foodProcessing, setFoodProcessing] = useState("")
  const [foodProcessingType, setFoodProcessingType] = useState("")
  const [foodIngredients, setFoodIngredients] = useState("")
  const [cookingTime, setCookingTime] = useState("")
  const [feel, setFeel] = useState("")
  const [foodRations, setFoodRations] = useState("")
  const [mealType, setMealType] = useState("")
  const [inputHeight, setInputHeight] = useState(80); // Độ cao mặc định của TextInput
  const [modal, setModal] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false);
  const [currentValue1, setCurrentValue1] = useState([]);
  const [isOpen2, setIsOpen2] = useState(false);
  const [currentValue2, setCurrentValue2] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);

  const items1 = [
    { label: 'Bữa Sáng', value: 'Bữa Sáng' },
    { label: 'Bữa Trưa ', value: 'Bữa Trưa' },
    { label: 'Bữa Tối', value: 'Bữa Tối' },
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

  const _submitData = () => {
    fetch("http://192.168.88.128:3000/api/postDish", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        foodName: foodName,
        foodPhoto: foodPhoto,
        foodProcessing: foodProcessing,
        foodIngredients: foodIngredients,
        cookingTime: cookingTime,
        feel: feel,
        foodRations: currentValue2[0],
        mealType: currentValue1[0],
        foodProcessingType: currentValue[0],
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        navigation.goBack();
      }).catch(err => {
        console.log("error", err)
      })
  }

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


  const AlertDelete = (id) =>

    Alert.alert(
      "Cảnh báo",
      "Bạn có muốn xóa món ăn không?",
      [
        {
          text: "Không",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Có", onPress: () => handleDelete(id) }
      ],
      { cancelable: false }
    );


  const handleDelete = async (id) => {
    const data = await axios.delete('http://192.168.88.128:3000/api/delete/' + id)

    if (data.data.success) {
      getapiloaihoa()
      alert(data.data.message)
    }
  }
  const handleContentSizeChange = (contentWidth, contentHeight) => {
    // Thiết lập độ cao của TextInput dựa trên chiều cao nội dung mới
    setInputHeight(contentHeight);
  };
  return (
    <ScrollView style={styles.container}
      nestedScrollEnabled={true}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='chevron-back-outline' style={{ fontSize: 40, paddingLeft: 10 }} />
        </TouchableOpacity>
        <View style={styles.pushFood}>
          <TouchableOpacity onPress={() => _submitData()}>
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

        <TextInput placeholder='Tên món ăn' style={styles.input_name} onChangeText={text => setFoodName(text)} />
        <TextInput placeholder='Cảm nghĩ về món ăn!Tại sao lại muốn ăn món ăn này?...'
          style={[styles.input_Ingredient, { height: Math.max(80, inputHeight) }]}
          multiline
          numberOfLines={1}
          onContentSizeChange={(e) =>
            handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
          }
          onChangeText={text => setFeel(text)}
        />
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
              placeholder="Chọn bữa ăn"
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
              placeholder="Chọn khẩu phần"
            />
          </View>
        </View>
        <View style={styles.Ration}>
          <Text style={styles.text_Ration}>Thời gian nấu</Text>
          <TextInput placeholder='1 giờ 30 phút' style={styles.input_Ration}
            onChangeText={text => setCookingTime(text)} />
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
          />
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
              placeholder="Chọn cách chế biến"
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
          />
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
export default AddDishes