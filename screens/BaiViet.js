import React, { useState,useEffect } from 'react';
import { Text, TextInput, View, ImageBackground, Image, Button, ScrollView ,TouchableOpacity, SafeAreaView, StyleSheet,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useAuth } from './AuthContext';
const send = 'send';

const BaiViet=({navigation,route}) =>{

  const { id, name:initialfoodName, Photo:initialfoodPhoto, Processing:initialfoodProcessing, 
    Ingredients: initialfoodIngredients, Time:initialcookingTime, Feel:initialfeel, FoodRations:initialfoodRations,
    UserId:initialuserId } = route.params;

  const [dscmt, getdscmt] = useState([])
  const [inputHeight, setInputHeight] = useState(80); 
  const [cmt, setCmt] = useState("")
  const [food_id, setFood_id] = useState('') 
  const [foodName, setFoodName] = useState(initialfoodName)
  const [foodPhoto, setFoodPhoto] = useState(initialfoodPhoto)
  const [foodProcessing, setFoodProcessing] = useState(initialfoodProcessing)
  const [foodIngredients, setFoodIngredients] = useState(initialfoodIngredients)
  const [cookingTime, setCookingTime] = useState(initialcookingTime)
  const [feel, setFeel] = useState(initialfeel)
  const [foodRations, setFoodRations] = useState(initialfoodRations)
  const [dsuser, getuser] = useState([]);
  const [userName, setUserName] = useState('');
  const {userId} = useAuth()
  const _submitCmt = () => {
    if (userId[0]) {
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
        }).catch(err => {
          console.log("error", err);
        });
        navigation.navigate('BaiViet');
    }else{
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
    }
};
useEffect(() => {
  const fetchData = async () => {
    await getdscomment();
    // Gọi hàm getapithucdon() sau mỗi 0.5 giây (500 milliseconds)
    const intervalId = setInterval(async () => {
      await getdscomment();
    }, 500);

    // Clear interval khi component unmount
    return () => clearInterval(intervalId);
  };

  fetchData();
}, []); // Chú ý truyền mảng rỗng để useEffect chỉ chạy một lần khi component mount
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
    }
};
useEffect(() => {
  getdsuser();
}, []);

useEffect(() => {
  const user = dsuser.find(item => item._id === initialuserId);
  setUserName(user ? user.name : '');
}, [dsuser, initialuserId]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textH3}>{foodName}</Text>
        <Image source={{ uri: foodPhoto }} style={styles.imageFood} />
        <View>
              <View style={styles.post}>
                <View style={styles.headerPost}>
                    <View style={styles.postHead}>  
                    <Image style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU'}}/>
                    <Text style={styles.text}>{userName && userName.lastname} {userName && userName.firstname}</Text>
                    </View>
                </View>
              </View>
        </View>
        <TouchableOpacity style={styles.button}>
          
          <Text style={styles.textButton}> <Icon style={styles.iconButton} name={"bookmark-outline"} color={'#000'} size={15} /> Lưu</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine}></View>
        <View>
          <Text style={styles.textH3}>Nguyên Liệu</Text>
          <Text style = {styles.textH5NL}>{foodIngredients}</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
          <Text style={styles.textH3}>Cách Làm</Text>
          <View style={styles.contentMake}>
            <Text style={styles.textH5}>{foodProcessing}</Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
          <View>
            <Text style={styles.textH3}>Thông tin người dùng</Text>
          </View>
        </View>
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
        <View>
            <Text style={styles.textH3}>Bình Luận</Text>

            <View style={styles.comment}>
              <FlatList
                  scrollEnabled={false}
                  data = {dscmt}
                  renderItem = { ({item}) => (
                      <View  style={styles.ListCmt} >
                            <Image style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU'}}/> 
                            <Text style={styles.CmtName}>Le Quoc Dung</Text> 
                            <Text style={styles.textcmt}>{item.cmt}</Text>
                      </View> 
                  )}
       />
            </View>

            <View style={styles.comment}>
              <Image style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU'}}/>
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
              />
              <TouchableOpacity style={styles.IconInput}
              onPress={() => _submitCmt()}
              >
              <Icon name={send} size={25}></Icon>
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
              <Text style={styles.textH3}>Món mới của Meo</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginLeft:5,
    marginTop:5,
  },
  
  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
    
  },
  textH3:{
    fontSize:20,
    fontWeight:"500",
    marginBottom:15,
  },
  textH5:{
    marginBottom:10,
  },
  textH5NL:{
    marginBottom:10,
    paddingBottom:10,
    borderBottomWidth:2,
    borderStyle: 'dotted',
  },
  postHead:{
    flexDirection:"row",
    marginLeft:5,
  },
  button:{
    backgroundColor:"lightblue",
    height:30,
    padding:5,
    borderRadius:5,
    margin:8
  },
  textButton:{
    fontSize:15,
    marginLeft:140,
  },
  iconButton:{
    marginTop:2,
  },
  contentMake:{
    flexDirection:"row",
    padding: 5,

  },
  numberText:{
    backgroundColor:"black",
    color:"white",
    fontSize:12,
    margin:5,
    paddingBottom:7,
    paddingLeft:5,
    paddingRight:5,
    width:25,
    height:20,
    borderRadius:50,
  },
  headCooksnap:{
    flexDirection:"row",
  },
  texth6:{
    fontSize:12,
    textDecorationLine: 'underline',
    textAlign:"center",
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
    borderRadius:50,
    marginRight:5,
  },
  textInput:{
    width: 250,
    borderColor:'black',
    borderWidth:1,
    padding: 10,
    marginBottom:10,
    marginLeft:5,
    marginRight:5,
    borderRadius:15,
    
  },
  comment:{
    flexDirection:"row",
    marginLeft:5,
  },
  imageFood: {
    height: 220,
    width: 330,
    marginLeft:20,
    borderRadius:20,
    marginBottom:15,
  },
  IconInput:{
    justifyContent:"center",
    paddingBottom:10,
  },
  textcmt:{
    fontSize:16,
  },
  ListCmt:{
    flexDirection: 'row',
    marginBottom:10,
    marginTop:5,
  },
  CmtName:{
    fontWeight:"bold",
    paddingRight:10,
    fontSize:16,
  },
});
export default BaiViet