import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  Image,
  Text,
  
} from "react-native";
import axios from 'axios';
import { useAuth } from './AuthContext';
import FlatSL from '../components/FlastSL';

const CacBanBep = ({navigation}) => {
    const { userId, isAuthenticated } = useAuth();
    const [flowPosts, setFlowPosts] = useState([]);
    const [Dish, setDish] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    //lấy user_flow từ userId
    useEffect(() => {
      const fetchSavedPosts = async () => {
          try {
              const response = await axios.get(`http://192.168.54.46:3000/api/getFlows/` + userId);
              setFlowPosts(response.data.flowPosts);
              console.log(response.data);
          } catch (error) {
              console.error('Error fetching saved posts:', error);
          }
      };

      if (isAuthenticated) {
          fetchSavedPosts();
      }
  }, [userId, isAuthenticated]);

    const fetchPostsByFoodId = async (user_flow) => {
        try {
            const response = await axios.get(`http://192.168.54.46:3000/api/postAllDish/${user_flow}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching posts by food_id:', error);
            return [];
        }
    };
    // lấy bài viết đã đăng của user_flow
    useEffect(() => {
      const fetchData = async () => {
        const temp = [];
        for (const post of flowPosts) {
          const data = await fetchPostsByFoodId(post.user_flow);
          temp.push(...data);
        }
        // Sắp xếp danh sách theo ngày đăng từ mới đến cũ
        temp.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // Lấy bài viết mới nhất (phần tử đầu tiên trong danh sách sau khi đã sắp xếp)
        const latestPost = temp.length > 0 ? [temp[0]] : [];
        setDish(latestPost);
      };
      fetchData();
    }, [flowPosts]); // Update Dish khi flowPosts thay đổi

    const fetchUserFlowInfo = async (userFlowId) => {
      try {
        const response = await axios.get(`http://192.168.54.46:3000/api/user-info/${userFlowId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching user flow info:', error);
        return {};
      }
    };
    
    // Sử dụng fetchUserFlowInfo để lấy thông tin user_flow

    useEffect(() => {
      const fetchData = async () => {
        const temp = [];
        for (const post of flowPosts) {
          const userFlowInfo = await fetchUserFlowInfo(post.user_flow);
          temp.push(userFlowInfo);
        }
        console.log('User Flow Information:', temp);
        
        // Cập nhật state userInfo với temp
        setUserInfo(temp);
      };
      
      fetchData();
    }, [flowPosts]);

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
  const handleHome = () => {
    navigation.navigate('Kho Cảm Hứng')
  }
  return (
    <ScrollView style={styles.main}>
      {isAuthenticated ? ( // Kiểm tra nếu đã đăng nhập
        
        Dish.length > 0 ? ( // Kiểm tra nếu Dish có dữ liệu
          <FlatSL row={Dish.length} data={Dish} toggleExerciseSelection={handleNavigate} />
        ) : (
          <Button onPress={handleHome} title="Trở lại Kho Cảm Hứng"></Button>
        )
      ) : (
        <Button onPress={handleHome} title="Trở lại Kho Cảm Hứng"></Button>
      )}
    </ScrollView>
  )
}
const styles = StyleSheet.create ({
    main:{
        marginTop:20,
        marginLeft:10,
        marginRight:10,
    }
})
export default CacBanBep