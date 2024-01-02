import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, RefreshControl,TouchableOpacity,ImageBackground,Image } from 'react-native';
import axios from 'axios';
import { useAuth } from './AuthContext';
import FlatSL from '../components/FlastSL';

const SaveBV = ({ navigation }) => {
    const { userId,savedPosts, setSavedPosts } = useAuth();
    const [refreshing, setRefreshing] = useState(false);
    const [Dish, setDish] = useState([]);

    // fetchData function để fetch dữ liệu mới
    const fetchData = async () => {
        const temp = [];
        for (const post of savedPosts) {
            const data = await fetchPostsByFoodId(post.food_id);
            temp.push(...data);
        }
        setDish(temp);
    };
    
    useEffect(() => {
        const fetchSavedPosts = async () => {
            try {
                const response = await axios.get(`http://192.168.155.46:3000/api/saved-posts/` + userId);
                setSavedPosts(response.data.savedPosts);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching saved posts:', error);
            }
        };

        fetchSavedPosts();
    }, [userId]);

    const fetchPostsByFoodId = async (foodId) => {
        try {
            const response = await axios.get(`http://192.168.155.46:3000/api/getAllDish/${foodId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching posts by food_id:', error);
            return [];
        }
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchData().then(() => setRefreshing(false));
    }, [refreshing]);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saved Posts</Text>
            {/* Hiển thị danh sách bài viết */}
            <ScrollView 
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
            >

                  {
                    Dish.map((Post, index) => (
                      <TouchableOpacity style={styles.post} key={`post_${index}`} onPress={() => navigation.navigate('Bài Viết',
                        {
                          id: Post._id, name: Post.foodName, Photo: Post.foodPhoto, Processing: Post.foodProcessing,
                          Ingredients: Post.foodIngredients, Time: Post.cookingTime, Feel: Post.feel, FoodRations: Post.foodRations, UserId: Post.userId,

                        })}>

                        <View style={styles.headerPost}>
                          <ImageBackground source={{ uri: Post.foodPhoto }} style={styles.postImage} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                            <View style={styles.postHead}>
                              {Post.user && Post.user.userImage && Post.user.userImage.trim() !== '' ? (
                                <Image source={{ uri: Post.user.userImage }} style={styles.projectImage} />
                              ) : (
                                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFYUMxwjoJUgk-Bv9mwUGhi6uhAIKOfWZHw&usqp=CAU' }} style={styles.projectImage} />
                              )}
                              <Text style={styles.text}>{Post.user && Post.user.name
                                ? `${Post.user.name.lastname} ${Post.user.name.firstname}`
                                : 'Unknown User'}</Text>
                            </View>
                            <Text style={styles.postText}>{Post.foodName}</Text>
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
        height: 250,
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

});

export default SaveBV;