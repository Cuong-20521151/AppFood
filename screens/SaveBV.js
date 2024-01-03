import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, RefreshControl,TouchableOpacity,ImageBackground,Image } from 'react-native';
import axios from 'axios';
import { useAuth } from './AuthContext';
import FlatSL from '../components/FlastSL';

const SaveBV = ({ navigation }) => {
  const { userId, savedPosts, setSavedPosts } = useAuth();
  const [Dish, setDish] = useState([]);

  useEffect(() => {
    const fetchSavedPosts = async () => {
      try {
        const response = await axios.get(`http://192.168.183.46:3000/api/saved-posts/${userId}`);
        setSavedPosts(response.data.savedPosts);
      } catch (error) {
        if (error.response.status === 404) {
            
          // Hiển thị thông báo cho người dùng rằng đường dẫn không tồn tại
      } else {
          console.error('Lỗi không xác định:', error);
          // Xử lý các trường hợp lỗi khác nếu cần thiết
      }
      }
    };

    fetchSavedPosts();
  }, [userId]);

  useEffect(() => {
    const fetchDishData = async () => {
      try {
        const temp = [];
        for (const post of savedPosts) {
          const response = await axios.get(`http://192.168.183.46:3000/api/getAllDish/${post.food_id}`);
          temp.push(...response.data);
        }
        setDish(temp);
      } catch (error) {
        if (error.response.status === 404) {
            
          // Hiển thị thông báo cho người dùng rằng đường dẫn không tồn tại
      } else {
          console.error('Lỗi không xác định:', error);
          // Xử lý các trường hợp lỗi khác nếu cần thiết
      }
      }
    };

    fetchDishData();
  }, [savedPosts]);

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Saved Posts</Text>
          {/* Hiển thị danh sách bài viết */}
          <ScrollView>
              {
                  Dish.map((Post, index) => (
                      <TouchableOpacity style={styles.post} key={`post_${index}`} onPress={() => navigation.navigate('Bài Viết', {
                          id: Post._id,
                          name: Post.foodName,
                          Photo: Post.foodPhoto,
                          Processing: Post.foodProcessing,
                          Ingredients: Post.foodIngredients,
                          Time: Post.cookingTime,
                          Feel: Post.feel,
                          FoodRations: Post.foodRations,
                          UserId: Post.userId,
                      })}>
                          <View style={styles.headerPost}>
                              <ImageBackground source={{ uri: Post.foodPhoto }} style={styles.postImage} imageStyle={styles.postImage}>
                                  <View style={styles.postFooter}>
                                    <Text style={styles.postText}>{Post.foodName}</Text>
                                </View>
                              </ImageBackground>
                          </View>
                      </TouchableOpacity>
                  ))
              }
          </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    post: {
        marginLeft: 5,
        width: 300,
        height: 200,
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 5
    },
    postImage: {
    width: '100%',
    height: 200,
    borderRadius: 50
    },
    projectImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        margin: 5,
    },
    text: {
    color: 'white',
    fontSize: 15,
    },
    postText: {
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
    },
    postImage: {
        width: '100%',
        height: 200, // Chiều cao có thể điều chỉnh tùy theo yêu cầu của bạn
        borderRadius: 15,
        overflow: 'hidden', // Cắt bỏ phần vượt quá kích thước của ImageBackground
    },
    postFooter: {
        position: 'absolute',
        bottom: 0, // Có thể điều chỉnh khoảng cách với bottom tùy ý
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu nền cho phần footer
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

});

export default SaveBV;