import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet,Image,TouchableOpacity, Alert } from 'react-native';
import FlatSL from '../components/FlastSL'; // Chỉnh sửa đường dẫn đến component FlatSL
import axios from 'axios';
import { useAuth } from './AuthContext';

const UserInfo = ({ navigation,route }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userPostsCount, setUserPostsCount] = useState(null);
    const [allDish, setAllDish] = useState([]);
    const UserId = route.params.UserId; // Truy cập UserId từ các params của route
    const [loading, setLoading] = useState(true);
    const {userId,isAuthenticated} = useAuth();
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userResponse = await axios.get(`http://192.168.183.46:3000/api/user-info/${UserId}`);
                const { user, userPostsCount } = userResponse.data;
                setUserInfo(user);
                setUserPostsCount(userPostsCount);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user info:', error);
                setLoading(false);
            }
        };

        fetchUserInfo();
        
    }, [UserId]);

    useEffect(() => {
        const fetchPostsByUserId = async () => {
            try {
                const response = await axios.get(`http://192.168.183.46:3000/api/postAllDish/${UserId}`);
                setAllDish(response.data); // Thiết lập dữ liệu allDish từ phản hồi
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts by UserId:', error);
                setLoading(false);
            }
        };

        fetchPostsByUserId();
    }, [UserId]);

    const handleFlow = async () => {
        if (!isAuthenticated) {
            // If not authenticated, navigate the user to the login page
            navigation.navigate('Login');
            return;
        }
    
        // Check if the current authenticated user and the profile being viewed are the same
        if (userId === UserId) {
            // If they are the same, display a message or prevent the follow action
            console.log('Cannot follow yourself.');
            Alert.alert('Bạn không thể tự theo dõi bản thân!')
            return;
        }
    
        try {
            const response = await axios.post(
                'http://192.168.183.46:3000/api/flows',
                { user_flow: UserId , userId: userId }
            );
            // Handle the response as needed, maybe update state or show a message
            console.log('Flow response:', response.data);
        } catch (error) {
            console.error('Error flowing:', error);
            // Handle error scenarios, show an error message, etc.
        }
    };
    
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    const categorizedDishes = {};
    allDish.forEach(dish => {
        if (!categorizedDishes[dish.mealType]) {
            categorizedDishes[dish.mealType] = [dish];
        } else {
            categorizedDishes[dish.mealType].push(dish);
        }
    });
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
        <ScrollView style={styles.container}>
            <View style={styles.userHead}>
              {userInfo && (
                  <View style={styles.userInfoContainer}>
                      <Image source={
                        userInfo.userImage
                        ? { uri: userInfo.userImage }
                        : { uri: 'https://5.imimg.com/data5/ANDROID/Default/2021/1/WP/TS/XB/27732288/product-jpeg.jpg' }} 
                        style={styles.logo} 
                      />
                      <View>
                        <Text style={styles.userInfoText}>{userInfo.name.firstname} {userInfo.name.lastname}</Text>
                        <Text style={styles.userInfoText}>Email: {userInfo.email}</Text>
                      </View>
                      {/* Hiển thị các thông tin khác của người dùng */}
                      
                  </View>
              )}
              <TouchableOpacity
                  style={styles.flowButton}
                  
                      // Xử lý logic khi nhấn nút "Flow" ở đây
                  onPress={handleFlow}
                
              >
                  <Text style={styles.flowButtonText}>Flow</Text>
              </TouchableOpacity>
            </View>

            
            <Text style={styles.TotDissh}>Tổng số bài viết đã đăng: {userPostsCount}</Text>
            
            {Object.keys(categorizedDishes).map(mealType => (
                <View key={mealType} style={styles.mealTypeContainer}>
                    <Text style={styles.mealTypeText}>{mealType}</Text>
                    <FlatSL
                        row={categorizedDishes[mealType].length}
                        data={categorizedDishes[mealType]}
                        toggleExerciseSelection={handleNavigate}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 20,
        marginBottom: 10,
    },
    userInfoContainer: {
        flexDirection:"row",
    },
    userInfoText: {
        fontSize: 15,
    },
    mealTypeContainer: {
        marginBottom: 20,
    },
    mealTypeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    logo:{
      width:40,
      height:40,
      marginRight:10,
      borderRadius:50
    },
    TotDissh: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    flowButton: {
      backgroundColor: '#007bff',
      borderRadius: 5,
      paddingVertical: 10,
      alignItems: 'center',
      marginTop: 20,
    },
    flowButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userHead:{
      borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        marginBottom: 15,
    },
});

export default UserInfo;
