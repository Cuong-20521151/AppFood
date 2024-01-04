import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, ImageBackground, Image, Button, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, Alert,RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { Rating, AirbnbRating } from 'react-native-ratings';
const send = 'send';

const BaiViet = ({ navigation, route }) => {

  const { id: initial_id, name: initialfoodName, Photo: initialfoodPhoto, Processing: initialfoodProcessing,
    Ingredients: initialfoodIngredients, Time: initialcookingTime, Feel: initialfeel, FoodRations: initialfoodRations,
    UserId: initialuserId } = route.params;

  const [dscmt, getdscmt] = useState([])
  const [inputHeight, setInputHeight] = useState(80);
  const [cmt, setCmt] = useState("")
  const [food_id, setFood_id] = useState(initial_id)
  const [foodName, setFoodName] = useState(initialfoodName)
  const [foodPhoto, setFoodPhoto] = useState(initialfoodPhoto)
  const [foodProcessing, setFoodProcessing] = useState(initialfoodProcessing)
  const [foodIngredients, setFoodIngredients] = useState(initialfoodIngredients)
  const [cookingTime, setCookingTime] = useState(initialcookingTime)
  const [UserId, setUserId] = useState(initialuserId)
  const [feel, setFeel] = useState(initialfeel)
  const [foodRations, setFoodRations] = useState(initialfoodRations)
  const [dsuser, getuser] = useState([]);
  const [userName, setUserName] = useState('');
  const [ratingValue, setRatingValue] = useState();
  const [dsrating, getrating] = useState([]);
  const [totalRatings, setTotalRatings] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [userHasRated, setUserHasRated] = useState(false);
  const [dataChanged, setDataChanged] = useState(true);
  const [userImage, setUserImage] = useState('');
  const [userImageNow, setUserImageNow] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const { userId, isAuthenticated, refreshData, setRefreshData } = useAuth();

  const _submitCmt = () => {
    if (isAuthenticated) {
      // UserId đã được xác thực, thực hiện gửi comment
      fetch("http://192.168.88.128:3000/api/postCmt", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cmt: cmt,
          food_id: route.params.id,
          userId: userId,
        })
      }).then(res => res.json())
        .then(data => {
          console.log(data);
          setCmt("");
          setDataChanged(true);
        }).catch(err => {
          console.log("error", err);
        });
    } else {
      // UserId chưa được xác thực, điều hướng đến màn hình đăng nhập
      navigation.navigate('LoSign');
    }
  }

  const _submitRating = (rating) => {
    if (isAuthenticated && rating !== undefined) {
      // UserId đã được xác thực, thực hiện gửi comment

      fetch("http://192.168.88.128:3000/api/postRating", {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ratings: rating,
          food_id: route.params.id,
          userId: userId,
        })
      }).then(res => res.json())
        .then(data => {
          console.log(data);
          setDataChanged(true);
        }).catch(err => {
          console.log("error", err);
        });
    } else {
      // UserId chưa được xác thực, điều hướng đến màn hình đăng nhập
      navigation.navigate('LoSign');
    }
  }


  const getdscomment = async () => {
    try {
      const response = await axios.get(
        'http://192.168.88.128:3000/api/getAllCmt');
      const filteredComments = response.data.filter(comment => comment.food_id === route.params.id);
      getdscmt(filteredComments);
    } catch (error) {
      // handle err
      // alert(error.message);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getdsrating(), getdscomment()]);
      setDataChanged(false);
    };

    fetchData();
  }, [dataChanged]);

  useEffect(() => {
    const updateData = async () => {
      await Promise.all([getdsrating(), getdscomment()]);
      setDataChanged(false);
    };

    if (dataChanged) {
      const intervalId = setInterval(updateData, 500);

      return () => clearInterval(intervalId);
    }
  }, [dataChanged]);


  const handleContentSizeChange = (contentWidth, contentHeight) => {
    // Thiết lập độ cao của TextInput dựa trên chiều cao nội dung mới
    setInputHeight(contentHeight);
  };

  const getdsuser = async () => {
    try {
      const response = await axios.get(
        'http://192.168.88.128:3000/api/getUser');
      getuser(response.data);
    } catch (error) {
      // handle err
      // alert(error.message);
    } finally {
      setRefreshing(false);
    }
  };
  useEffect(() => {
    getdsuser();
  }, []);

  const getdsrating = async () => {
    try {
      const response = await axios.get(
        'http://192.168.88.128:3000/api/getAllRating');
      getrating(response.data);
    } catch (error) {
      // handle err
      // alert(error.message);
    } finally {
      setRefreshing(false);
    }
  };
  useEffect(() => {
    getdsrating();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getdsrating();
    getdsuser();
    getdscomment();
  }

  useEffect(() => {
    // Bước 1: Lọc Ratings Theo food_id
    const filteredRatings = dsrating.filter(rating => rating.food_id === route.params.id);

    // Bước 2: Tính Số Lượng Ratings và Giá Trị Trung Bình
    const ratingsCount = filteredRatings.length;
    const totalRating = ratingsCount > 0 ? filteredRatings.reduce((sum, rating) => sum + rating.ratings, 0) : 0;
    const newAverageRating = ratingsCount > 0 ? totalRating / ratingsCount : 0;

    // Cập nhật state với số lượng và giá trị trung bình mới
    setTotalRatings(ratingsCount);
    setAverageRating(parseFloat(newAverageRating.toFixed(1)));

    // Kiểm tra xem người dùng đã đánh giá bài viết chưa
    const hasUserRated = userId[0] && filteredRatings.some(rating => rating.userId === userId);
    // Cập nhật trạng thái đánh giá của người dùng
    setUserHasRated(hasUserRated && userId[0]);
    // Kiểm tra nếu người dùng đã đánh giá thì cập nhật aveRating
    if (hasUserRated) {
      updateAveRating(newAverageRating);
    }
  }, [dsrating, route.params.id, userId]);



  useEffect(() => {
    const user = dsuser.find(item => item._id === initialuserId);
    setUserName(user ? user.name : '');
    setUserImage(user ? user.userImage : '');
  }, [dsuser, initialuserId]);

  useEffect(() => {
    const user = dsuser.find(item => item._id === userId);
    setUserImageNow(user ? user.userImage : '');
  }, [dsuser, userId]);


  const mergeUserAndComments = (dsuser, dscmt) => {
    return dscmt.map(item => {
      const user = dsuser.find(u => u._id === item.userId);
      return {
        ...item,
        user: user || { userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU', name: 'Unknown User' }
      };
    });
  };

  // Inside your BaiViet component, use the function
  const mergedComments = mergeUserAndComments(dsuser, dscmt);


  const handleRatingSubmit = (rating) => {
    // Set the rating value in the state

    // Log the rating value
    console.log("Rating value:", rating);
    Alert.alert(
      'Xác nhận đánh giá',
      `Bạn có muốn đánh giá món này với ${rating} sao không?`,
      [
        {
          text: 'Đóng',
          style: 'cancel',
        },
        {
          text: 'Đăng',
          onPress: () => {
            _submitRating(rating);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateAveRating = async (newAverageRating) => {
    try {

      const response = await fetch(`http://192.168.88.128:3000/api/updateAveRating/` + route.params.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          aveRating: newAverageRating,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Server Response:', data);
    } catch (error) {
      console.error('Error updating data:', error.message);
    }
  };

  const handleSaveDish = async (postId, postUserId) => {
    if (isAuthenticated) {
      // Kiểm tra nếu userId của người đăng nhập khác với userId của bài viết
      if (userId !== postUserId) {
        try {
          const response = await axios.post('http://192.168.88.128:3000/api/postSaveDish', {
            food_id: postId,
            userId: userId,
          });
          console.log('Trạng thái lưu:', response.data);
          // Cập nhật trạng thái giao diện sau khi lưu thành công hoặc xóa thành công
          // Ví dụ: Hiển thị thông báo, cập nhật state, v.v.
          setRefreshData(!refreshData); // Khi lưu thành công, kích hoạt việc tải lại dữ liệu
        } catch (error) {
          console.error('Lỗi khi lưu bài viết:', error.message);
        }
      } else {
        // Người dùng đang cố gắng lưu bài viết của chính họ
        console.log('Không thể lưu bài viết của chính bạn');
        Alert.alert('Không thể lưu bài viết của chính bạn');
        // Hiển thị thông báo hoặc thực hiện hành động phù hợp
      }
    } else {
      // Người dùng chưa đăng nhập, điều hướng đến màn hình đăng nhập
      navigation.navigate('LoSign');
      // Hiển thị thông báo yêu cầu đăng nhập nếu cần
    }
  };
  const handleUserPress = (UserId) => {
    navigation.navigate('UserInfo', { UserId: UserId }); // Chuyển hướng đến màn hình UserInfo và truyền userId
  };
  return (
    <ScrollView style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.content}>
        <Text style={styles.textH3}>{foodName}</Text>
        <Image source={{ uri: foodPhoto }} style={styles.imageFood} />
        <View>
          <View style={styles.post}>
            <View style={styles.headerPost}>
              <View style={styles.postHead}>
                {userImage ? (
                  <Image style={styles.image} source={{ uri: userImage }} />
                ) : (
                  <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU' }} />
                )}
                <TouchableOpacity onPress={() => handleUserPress(UserId)}>
                  <Text style={styles.text}>{userName && userName.lastname} {userName && userName.firstname}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleSaveDish(food_id,UserId)}>
          <Text style={styles.textButton}> <Icon style={styles.iconButton} name={"bookmark-outline"} color={'#000'} size={15} /> Lưu</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine}></View>
        <View>
          <Text style={styles.textH3}>Tại sao nên nấu món này:</Text>
          <Text style={styles.textH5NL}>{feel}</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
          <Text style={styles.textH3}>Nguyên Liệu</Text>
          <Text style={styles.textH5NL}>{foodIngredients}</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
          <Text style={styles.textH3}>Cách Làm</Text>
          <View style={styles.contentMake}>
            <Text style={styles.textH5}>{foodProcessing}</Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>

        <View style={styles.horizontalLine}></View>
        <View>
          <View style={styles.headCooksnap}>
            <Text style={styles.textH3}> <Icon style={styles.icon} name={"bookmark-outline"} color={'#000'} size={15} /> Cooksnap</Text>
          </View>
          <Text style={styles.textH5}>Bạn đã làm theo món này phải không? Hãy chia sẻ hình món bạn đã nấu nhé!</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Gửi cooksnap</Text>
          </TouchableOpacity>
          <Text style={styles.texth6}>Tìm hiểu thêm vào cooksnap</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.rating}>
          <View>
            <View style={styles.rating_cl1}>
              <Text style={styles.textrating}>{averageRating}/({totalRatings})</Text>
            </View>
            <View style={styles.airbnbRating}>
              <AirbnbRating
                count={5}
                reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                defaultRating={averageRating}
                size={14}
                showRating={false}
                isDisabled
              />
            </View>
          </View>
        </View>
        {!userHasRated && (
          <AirbnbRating
            count={5}
            reviews={["Tệ", "Kém", "Bình thường", "OK", "Tốt", "Hmm...", "Rất tốt", "Wow", "Tuyệt vời", "Không tin được", "Chúa ơi"]}
            defaultRating={5}
            size={25}
            showRating={true}
            onFinishRating={(rating) => handleRatingSubmit(rating)}
          />
        )}

        <View>
          <Text style={styles.textH3}>Bình Luận</Text>

          <View style={styles.comment}>
            <FlatList
              scrollEnabled={false}
              data={mergedComments}
              renderItem={({ item }) => (
                <View style={styles.ListCmt}>
                  <Image style={styles.image} source={{ uri: item.user.userImage }} />
                  <Text style={styles.CmtName}>{`${item.user.name.lastname} ${item.user.name.firstname}`}</Text>
                  <Text style={styles.textcmt}>{item.cmt}</Text>
                </View>
              )}
            />
          </View>

          <View style={styles.comment}>
            {isAuthenticated ? (
              <Image
                style={styles.image}
                source={{
                  uri: userImageNow ? userImageNow : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU'
                }}
              />
            ) : (
              <Image
                style={styles.image}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU' }}
              />
            )}

            <TextInput
              placeholder="Thêm bình luận"
              style={[styles.textInput, { height: Math.max(40, inputHeight) }]}
              textAlignVertical="top"
              multiline
              numberOfLines={1}
              onContentSizeChange={(e) =>
                handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
              }
              onChangeText={text => setCmt(text)}
              value={cmt}
            />
            <TouchableOpacity style={styles.IconInput}
              onPress={() => _submitCmt()}
            >
              <Icon name={send} size={25}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginLeft: 5,
    marginTop: 5,
  },

  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,

  },
  textH3: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 15,
  },
  textH5: {
    marginBottom: 10,
  },
  textH5NL: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderStyle: 'dotted',
  },
  postHead: {
    flexDirection: "row",
    marginLeft: 5,
  },
  button: {
    backgroundColor: "lightblue",
    height: 30,
    padding: 5,
    borderRadius: 5,
    margin: 8
  },
  textButton: {
    fontSize: 15,
    marginLeft: 140,
  },
  iconButton: {
    marginTop: 2,
  },
  contentMake: {
    flexDirection: "row",
    padding: 5,

  },
  numberText: {
    backgroundColor: "black",
    color: "white",
    fontSize: 12,
    margin: 5,
    paddingBottom: 7,
    paddingLeft: 5,
    paddingRight: 5,
    width: 25,
    height: 20,
    borderRadius: 50,
  },
  headCooksnap: {
    flexDirection: "row",
  },
  texth6: {
    fontSize: 12,
    textDecorationLine: 'underline',
    textAlign: "center",
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: 5,
  },
  textInput: {
    width: 250,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,

  },
  comment: {
    flexDirection: "row",
    marginLeft: 5,
  },
  imageFood: {
    height: 220,
    width: 330,
    marginLeft: 20,
    borderRadius: 20,
    marginBottom: 15,
  },
  IconInput: {
    justifyContent: "center",
    paddingBottom: 10,
  },
  textcmt: {
    fontSize: 16,
  },
  ListCmt: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 5,
  },
  CmtName: {
    fontWeight: "bold",
    paddingRight: 10,
    fontSize: 16,
  },
  //rating
  rating: {
    flexDirection: 'row',
  },
  rating_cl1: {
    marginBottom: 5,
    paddingLeft: 10,
  },
  airbnbRating: {
    marginTop: 5,
  },
  textrating: {
    fontSize: 16,
  }
});
export default BaiViet