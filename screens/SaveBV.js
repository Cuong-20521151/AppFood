import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { useAuth } from './AuthContext';
import FlatSL from '../components/FlastSL';

const SaveBV = ({ navigation }) => {
    const { userId,savedPosts, setSavedPosts } = useAuth();
    
    const [Dish, setDish] = useState([]);

    useEffect(() => {
        const fetchSavedPosts = async () => {
            try {
                const response = await axios.get(`http://192.168.88.128:3000/api/saved-posts/` + userId);
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
            const response = await axios.get(`http://192.168.88.128:3000/api/getAllDish/` + foodId);
            return response.data;
        } catch (error) {
            console.error('Error fetching posts by food_id:', error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const temp = [];
            for (const post of savedPosts) {
                const data = await fetchPostsByFoodId(post.food_id);
                temp.push(...data);
            }
            setDish(temp);
        };
        
        fetchData();
    }, [savedPosts]); // Update Dish khi savedPosts thay đổi

    const handleNavigate = (data) => {
        // Xử lý việc chuyển đến trang khác với dữ liệu `data`
        navigation.navigate('Bài Viết', { 
          id: data.id,
          name: data.name,
          Photo: data.Photo,
          Processing: data.Processing,
          Ingredients: data.Ingredients,
          Time: data.Time,
          Feel: data.Feel,
          FoodRations: data.FoodRations,
          UserId: data.UserId,
        });
      };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saved Posts</Text>
            {/* Hiển thị danh sách bài viết */}
            <FlatSL row={Dish.length} data={Dish} toggleExerciseSelection={handleNavigate}/>
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
});

export default SaveBV;