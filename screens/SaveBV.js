import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { useAuth } from './AuthContext';
import FlatSL from '../components/FlastSL';

const SaveBV = ({ navigation }) => {
    const { userId } = useAuth();
    const [savedPosts, setSavedPosts] = useState([]);
    const [tempDish, setTempDish] = useState([]); // Sử dụng state tạm thời để lưu trữ dữ liệu mới
    const [Dish, setDish] = useState([]);
    
    useEffect(() => {
        const fetchSavedPosts = async () => {
            try {
                const response = await axios.get(`http://192.168.146.46:3000/api/saved-posts/${userId}`);
                setSavedPosts(response.data.savedPosts);
            } catch (error) {
                console.error('Error fetching saved posts:', error);
            }
        };

        fetchSavedPosts();
    }, [userId]);
    
    const fetchPostsByFoodId = async (foodId) => {
        try {
            const response = await axios.get(`http://192.168.146.46:3000/api/getAllDish?food_id=${foodId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching posts by food_id:', error);
            return [];
        }
    };

    useEffect(() => {
        // Tạo một mảng tạm thời để lưu trữ dữ liệu mới từ fetchPostsByFoodId
        const temp = [];
        const fetchData = async () => {
            for (const post of savedPosts) {
                const data = await fetchPostsByFoodId(post.food_id);
                temp.push(...data);
            }
            setTempDish(temp);
        };
        fetchData();
    }, [savedPosts]);

    useEffect(() => {
        // Cập nhật state Dish từ dữ liệu tạm thời sau khi đã lấy đủ dữ liệu mới
        setDish(tempDish);
    }, [tempDish]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saved Posts</Text>
            <FlatSL row={"2"} data={Dish} columns={"2"} />
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