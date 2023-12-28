import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';
import FlatSL from '../components/FlastSL';
import { AirbnbRating } from 'react-native-ratings';
import { useAuth } from './AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
const iconName = 'bookmark-outline';

const Search = ({ navigation }) => {
  const { userId, isAuthenticated, refreshData,
    setRefreshData } = useAuth();
  const [dsthucdon, getdstd] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [dsuser, getuser] = useState([]);
  const [combinedData, setCombinedData] = useState([]);


  const getapithucdon = async () => {
    try {
      const response = await axios.get('http://192.168.100.6:3000/api/getAllDish');
      getdstd(response.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    getapithucdon();
  }, []);

  const getdsuser = async () => {
    try {
      const response = await axios.get(
        'http://192.168.100.6:3000/api/getUser');
      getuser(response.data);
    } catch (error) {
      // handle err
      // alert(error.message);
    }
  };
  useEffect(() => {
    getdsuser();
  }, []);

  const combineData = () => {
    // Kết hợp dữ liệu từ dsuser và dsthucdon khi userId trùng nhau
    const combinedData = dsthucdon.map(post => {
      const user = dsuser.find(user => user._id === post.userId);
      return { ...post, user };
    });

    setCombinedData(combinedData);
  };

  useEffect(() => {
    combineData();
  }, [dsuser, dsthucdon]);

  const handleSaveDish = async (postId) => {
    if (isAuthenticated) {
      try {
        const response = await axios.post('http://192.168.100.6:3000/api/postSaveDish', {
          food_id: postId,
          userId: userId,
        });
        console.log('Trạng thái lưu:', response.data);
        // Cập nhật trạng thái giao diện sau khi lưu thành công hoặc xóa thành công
        // Ví dụ: Hiển thị thông báo, cập nhật state, v.v.
        setRefreshData(!refreshData); // Khi lưu thành công, kích hoạt việc tải lại dữ liệu
      } catch (error) {
        console.error('Lỗi khi lưu bài viết:', error.message);
        // Xử lý thông báo lỗi nếu cần
      }
    } else {
      // Người dùng chưa đăng nhập, điều hướng đến màn hình đăng nhập
      navigation.navigate('LoSign');
      // Hiển thị thông báo yêu cầu đăng nhập nếu cần
    }
  };


  const filterData = (item) => {
    if (searchInput === "") {
      return null;
    }
    if (item.foodName.toLowerCase().includes(searchInput.toLowerCase())) {
      return (
        <TouchableOpacity style={styles.postNew} onPress={() => navigation.navigate('Bài Viết',
          {
            id: item._id, name: item.foodName, Photo: item.foodPhoto, Processing: item.foodProcessing,
            Ingredients: item.foodIngredients, Time: item.cookingTime, Feel: item.feel, FoodRations: item.foodRations
          })}>

          <View style={styles.headerPostNew}>
            <Image source={{ uri: item.foodPhoto }} style={styles.postImageNew}>
            </Image>
            <View style={styles.postHeadNew}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjuAlP67tv7QzTpcc--fy9UnBSM3JszDFCw&usqp=CAU' }} style={styles.projectImage}></Image>
              <Text style={styles.textNew}>{item.user && item.user.name
                ? `${item.user.name.lastname} ${item.user.name.firstname}`
                : 'Unknown User'}</Text>
            </View>
            <Text style={styles.postTextNew}>{item.foodName}</Text>

          </View>
          <View style={styles.interactiveContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleSaveDish(Post._id)} >
              <Icon style={styles.icon} name={iconName} color={'#000'} size={15} />
              <Text style={styles.textButton}>Lưu</Text>
            </TouchableOpacity>
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
              defaultRating={item.aveRating}
              size={14}
              showRating={false}
              isDisabled
            />
          </View>


        </TouchableOpacity>
      );
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          placeholder="Gõ vào món ăn cần tìm"
          onChangeText={text => setSearchInput(text)}
        />
      </View>
      <FlatList
        style={styles.myFood}
        scrollEnabled={false}
        data={combinedData}
        renderItem={({ item, index }) => filterData(item)}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.textHeadList}>Khám phá xem thứ gì đang trong mùa nào!</Text>

          <View style={styles.row}>

            <FlatList
              data={combinedData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.itemListDiscover} >
                  <ImageBackground source={{ uri: item.foodPhoto }} style={styles.postImageThem} imageStyle={{ borderRadius: 15 }}>
                    <Text style={styles.textListThem}>{item.foodName}</Text>
                  </ImageBackground>

                  <FlatSL row={"3"} data={dsthucdon} columns={"3"} />
                </TouchableOpacity >
              )}
              keyExtractor={(item) => item._id.toString()}
            />

          </View>

          <TouchableOpacity style={styles.buttonTBN}>
            <Text>Món ăn ngẫu nhiên</Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#DDDDDD',
  },
  search: {
    backgroundColor: '#FFFFFF',
    height: 80,
  },
  searchInput: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#DDDDDD',
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 20,
    height: 50,
  },
  selectedDishImage: {
    height: 200,
    width: '100%',
    borderRadius: 8,
  },
  content: {
    marginBottom: 10
  },
  textHeadList: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 5,
  },
  itemListDiscover: {
    flex: 1,
    width: 300,
    height: 220,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10
  },
  postImageThem: {
    width: '100%',
    height: 110,
    borderRadius: 50
  },
  textListThem: {
    fontSize: 12,
    marginTop: 70,
    padding: 10,
    color: 'white',
  },
  buttonTBN: {
    flexDirection: 'row',
    backgroundColor: "lightblue",
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
    height: 30,
    paddingLeft: 80,
    marginLeft: 15,
  },

  // search
  myFood: {
    marginLeft: 25,
  },
  postImageNew: {
    width: 160,
    height: 120,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  postNew: {
    width: 160,
    height: 250,
    borderRadius: 15,
    marginRight: 5,
    backgroundColor: "#fff",
    marginBottom: 5,
    marginRight: 15,
    marginTop:10,
  },
  headerPostNew: {
    width: 250,
    height: 200,
  },
  postHeadNew: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  postHeadNew: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  postTextNew: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
    width: 150,
  },
  textNew: {
    fontSize: 14,
    width: 120,
  },
  interactiveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 6,
    paddingTop: 5,
    marginRight:24,
  },
  projectImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginBottom: 5,
    marginLeft: 5,
    marginTop: 5,
  },

});

export default Search;