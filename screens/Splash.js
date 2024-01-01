import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main'); // Thay thế 'Main' bằng tên màn hình chính của ứng dụng sau khi Splash Screen kết thúc
    }, 3000); // Thời gian hiển thị Splash Screen (3000 milliseconds = 3 seconds)

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Hiển thị hình ảnh hoặc logo của Splash Screen */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/Screenshot2023-12-30120605.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCC99', // Màu cam nhạt
  },
  logoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100, // Làm tròn hình ảnh
    overflow: 'hidden', // Ẩn các phần tử vượt quá phạm vi của container
    backgroundColor: '#FFFFFF', // Màu nền trắng cho hình tròn
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
