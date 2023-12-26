import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import axios from 'axios';

const UserProfile = ({ navigation,route }) => {
  const { id, firstname:initialfirstname, lastname:initiallastname, address:initialaddress, 
    email: initialemail, phone:initialphone} = route.params; 
  const [user, setUser] = useState({
    name_id: '',
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: ''
    },
    address: '',
    phone: 0
  });

  const updateData = async () => {
    try {
      const response = await fetch(`http://192.168.88.128:3000/api/updateUser/`+route.params.id, {
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
          foodRations: foodRations,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Server Response:', data);
      navigation.navigate("Storages");
    } catch (error) {
      console.error('Error updating data:', error.message);
    }
  };

  const handleInputChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    // Gửi dữ liệu thông tin người dùng đã chỉnh sửa lên server
    axios.put('http://your-api-url/user/update', user) // Thay đổi URL API tương ứng
      .then(response => {
        console.log('User information updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating user information:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={user.name.firstname}
        onChangeText={value => handleInputChange('name', { ...user.name, firstname: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={user.name.lastname}
        onChangeText={value => handleInputChange('name', { ...user.name, lastname: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={user.username}
        onChangeText={value => handleInputChange('username', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={value => handleInputChange('email', value)}
      />
      {/* Add other fields like address, phone, etc. */}
      <Button title="Update" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UserProfile;