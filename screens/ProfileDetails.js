import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';
const upload = 'cloud-upload';
const checkmark = 'checkmark';

const UserDetails = ({ navigation, route }) => {
  const { Users } = route.params;
  const [userImage, setuserImage] = useState(Users.userImage)
  const [editedUser, setEditedUser] = useState({
    name: {
      firstname: Users.name.firstname,
      lastname: Users.name.lastname,
    },
    address: Users.address,
    email: Users.email,
    phone: Users.phone.toString(),
    userImage: Users.userImage,
    // Add other fields if necessary
  });

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://192.168.19.46:3000/api/updateUser/${Users._id}`, {
        method: 'PATCH', // or 'PATCH' depending on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            name: {
              firstname: editedUser.name.firstname,
              lastname: editedUser.name.lastname,
            },
            address: editedUser.address,
            email: editedUser.email,
            phone: editedUser.phone.toString(),
            userImage: userImage,
          }
        ),
      });

      if (response.ok) {
        // Handle successful update
        console.log('User information updated successfully');
      } else {
        // Log additional information about the response for debugging
        console.error('Failed to update user information:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error updating user information:', error);
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
    setuserImage(picture_url)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.upload_image} mode="contained"
          onPress={() => _uploadImage()}>
          <Icon name={userImage == "" ? upload : checkmark} size={50}></Icon>
          <Text>Chọn ảnh</Text>
          {userImage !== "" && (
          <Image source={{ uri: userImage }} style={styles.image} />
          )}
        </TouchableOpacity>
      <Text style={styles.label}>Firstname:</Text>
      <TextInput
        style={styles.input}
        value={editedUser.name.firstname}
        onChangeText={(text) => setEditedUser({ ...editedUser, name: { ...editedUser.name, firstname: text } })}
      />
      <Text style={styles.label}>Lastname:</Text>
      <TextInput
        style={styles.input}
        value={editedUser.name.lastname}
        onChangeText={(text) => setEditedUser({ ...editedUser, name: { ...editedUser.name, lastname: text } })}
      />
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={editedUser.address}
        onChangeText={(text) => setEditedUser({ ...editedUser, address: text })}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={editedUser.email}
        onChangeText={(text) => setEditedUser({ ...editedUser, email: text })}
      />

      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={styles.input}
        value={editedUser.phone}
        onChangeText={(text) => setEditedUser({ ...editedUser, phone: text })}
      />

      {/* Add other input fields as needed for other user details */}

      <Button title="Cập nhật" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop:10
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  upload_image: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default UserDetails;