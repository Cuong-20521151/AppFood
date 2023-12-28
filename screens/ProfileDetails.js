import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UserDetails = ({ navigation, route }) => {
  const { Users } = route.params;
  const [editedUser, setEditedUser] = useState({
    name: {
      firstname: Users.name.firstname,
      lastname: Users.name.lastname,
    },
    address: Users.address,
    email: Users.email,
    phone: Users.phone.toString(),
    // Add other fields if necessary
  });

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://192.168.100.6:3000/api/updateUser/${Users._id}`, {
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

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.upload_image} mode="contained"
          onPress={() => _uploadImage()}>
          <Icon name={foodPhoto == "" ? upload : checkmark} size={50}></Icon>
          <Text>Chọn ảnh</Text>
          {foodPhoto !== "" && (
          <Image source={{ uri: foodPhoto }} style={styles.image} />
          )}
        </TouchableOpacity> */}
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
});

export default UserDetails;