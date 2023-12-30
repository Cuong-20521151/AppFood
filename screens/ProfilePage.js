import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useAuth } from './AuthContext';

const UserInfo = ({ route }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userPostsCount, setUserPostsCount] = useState(null);
    const userId = route.params.userId; // Access userId from the route params
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userResponse = await axios.get(`http://192.168.54.46:3000/api/user-info/`+userId);
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
  }, [userId]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <Text>User Information</Text>
      {userInfo && (
        <View>
          <Text>Username: {userInfo.username}</Text>
          <Text>Email: {userInfo.email}</Text>
          {/* Hiển thị các thông tin khác của người dùng */}
        </View>
      )}

      <Text>User Posts</Text>
      <Text>Total Posts: {userPostsCount}</Text>
      {/* Hiển thị thông tin số lượng bài viết đã đăng của người dùng */}
    </View>
  );
};

export default UserInfo;