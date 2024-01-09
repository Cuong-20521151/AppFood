import React, { useState, useEffect } from "react";
import { RefreshControl } from "react-native";
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

const CacBanBep = ({ navigation }) => {
  const { userId, isAuthenticated } = useAuth();
  const [Dish, setDish] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [userList, setUserList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUserFlows = async () => {
    try {
      if (isAuthenticated) {
        const userFlowResponse = await axios.get(`http://192.168.88.128:3000/api/getFlows/${userId}`);
        setUserInfo(userFlowResponse.data.user);
        console.log('Flow:', userFlowResponse.data);
      }
    } catch (error) {
      if (error.response.status === 404) {
        // Handle 404 error
      } else {
        console.error('Undefined error:', error);
        // Handle other errors if needed
      }
    }finally {
      setRefreshing(false);
    }
  };
  useEffect(() => {
    fetchUserFlows();
  }, [userId, isAuthenticated]);

  const fetchUserPosts = async () => {
    try {
      const temp = [];
      const promises = userInfo.map(async (user) => {
        const userPostsResponse = await axios.get(`http://192.168.88.128:3000/api/postAllDish/${user.user_flow}`);
        const sortedPosts = userPostsResponse.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (sortedPosts.length > 0) {
          temp.push(sortedPosts[0]);
        }
      });
      await Promise.all(promises);
      setDish(temp);
    } catch (error) {
      console.error('Undefined error:', error);
    }
    finally {
      setRefreshing(false);
    }
  };
  useEffect(() => {
    if (userInfo.length > 0) {
      fetchUserPosts();
    }
  }, [userInfo]);

  const fetchUserList = async () => {
    try {
      const temp = [];
      const promises = userInfo.map(async (user) => {
        const userResponse = await axios.get(`http://192.168.88.128:3000/api/getUser/${user.user_flow}`);
        temp.push(...userResponse.data);
      });
      await Promise.all(promises);
      setUserList(temp);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    finally {
      setRefreshing(false);
    }
  };
  useEffect(() => {
    if (userInfo.length > 0) {
      fetchUserList();
    }
  }, [userInfo]);

  const handleNavigate = (data) => {
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
    navigation.navigate('Kho Cảm Hứng');
  };
  const onRefresh = () => {
    setRefreshing(true);
    fetchUserFlows();
    fetchUserPosts();
    fetchUserList();
  }



  return (
    <ScrollView style={styles.main}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }
    >
      {isAuthenticated ? (
        Dish.length > 0 ? (
          <>
            {userList.map((user, index) => (
              <View key={index} style={styles.userContainer}>
                <View style={styles.userInfo}>
                  <Image source={{ uri: user.userImage }} style={styles.userImage} />
                  <Text style={styles.username}>{user.username}</Text>
                </View>
                <View style={styles.postContainer}>
                  <Text style={styles.latestPostText}>Bài viết mới nhất:</Text>
                  <FlatSL
                    row={Dish.filter(item => item.userId === user._id).length}
                    data={Dish.filter(item => item.userId === user._id)}
                    toggleExerciseSelection={handleNavigate}
                  />
                </View>
              </View>
            ))}
          </>
        ) : (
          <Button onPress={handleHome} title="Trở lại Kho Cảm Hứng"></Button>
        )
      ) : (
        <Button onPress={handleHome} title="Trở lại Kho Cảm Hứng"></Button>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  userContainer: {
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postContainer: {
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  latestPostText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CacBanBep;