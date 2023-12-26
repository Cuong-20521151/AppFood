import React from 'react'
import {
    Text, View, Button, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Alert,
    RefreshControl, ActivityIndicator
} from 'react-native';
import { useAuth } from './AuthContext';
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
const trash_outline = 'trash-outline';
const pencil_outline = 'pencil-outline';
const postdata = [
    {
        id: 1,
        menuImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueae2dB4D2UU5FxZmTTyGBr6MTKqmTfGD5g&usqp=CAU',
        menuImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueae2dB4D2UU5FxZmTTyGBr6MTKqmTfGD5g&usqp=CAU',
        menuImage3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueae2dB4D2UU5FxZmTTyGBr6MTKqmTfGD5g&usqp=CAU',
        name: 'Vui Tiệc Tại Gia',
        times: '6 thg 11 - 4 thg 12',
        number_of_dishes: '16 món lên sóng',
        nameFood1: 'tom hum aaa aaa aaaa aaaa',
        nameFood2: 'tom hum',
        nameFood3: 'tom hum',

    },
    {
        id: 2,
        menuImage1: 'https://chuphinhmonan.com/wp-content/uploads/2017/03/dakgalbi-1-2.jpg',
        menuImage2: 'https://chuphinhmonan.com/wp-content/uploads/2017/03/dakgalbi-1-2.jpg',
        menuImage3: 'https://chuphinhmonan.com/wp-content/uploads/2017/03/dakgalbi-1-2.jpg',
        name: 'Vui Tiệc Tại Gia',
        times: '6 thg 11 - 4 thg 12',
        number_of_dishes: '16 món lên sóng',
        nameFood1: 'bào ngư',
        nameFood2: 'bào ngư',
        nameFood3: 'bào ngư',
    },
    {
        id: 3,
        menuImage1: 'https://assets.unileversolutions.com/v1/1187507.jpg',
        menuImage2: 'https://assets.unileversolutions.com/v1/1187507.jpg',
        menuImage3: 'https://assets.unileversolutions.com/v1/1187507.jpg',
        name: 'Vây cá',
    },
]
const renderImage = ({ item }) => (
    <View style={styles.ImageContainer}>
        <Text style={styles.text_name}>{item.name}</Text>
        <Text style={styles.text_times}>{item.times}</Text>
        <Text style={styles.text_number_of_dishes}>{item.number_of_dishes}</Text>
        <View style={styles.food}>
            <View style={styles.food_item}>
                <Image source={{ uri: item.menuImage1 }} style={styles.Image} />
                <Text style={styles.text_nameFood}>{item.nameFood1}</Text>
            </View>
            <View style={styles.food_item}>
                <Image source={{ uri: item.menuImage2 }} style={styles.Image} />
                <Text style={styles.text_nameFood}>{item.nameFood2}</Text>
            </View>
            <View style={styles.food_item}>
                <Image source={{ uri: item.menuImage3 }} style={styles.Image} />
                <Text style={styles.text_nameFood}>{item.nameFood3}</Text>
            </View>
        </View>
    </View>

)

const Storages = ({ navigation }) => {
    const [dsthucdon, getdstd] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [totalDishes, setTotalDishes] = useState(0);
    const [mealTypeCounts, setMealTypeCounts] = useState({});
    const [foodProcessingTypeCounts, setFoodProcessingTypeCounts] = useState({});
    const {userId} = useAuth()
    // console.log(userId)
    const getapithucdon = async () => {
        try {
            const response = await axios.get(
                'http://192.168.88.128:3000/api/getUserDish/'+ userId);
            getdstd(response.data);
        } catch (error) {
            // handle err
            // alert(error.message);
        } finally {
            setRefreshing(false); // Dừng hiệu ứng làm mới sau khi dữ liệu đã được lấy xong
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            await getapithucdon();
            // Gọi hàm getapithucdon() sau mỗi 0.5 giây (500 milliseconds)
            const intervalId = setInterval(async () => {
                await getapithucdon();
            }, 500);

            // Clear interval khi component unmount
            return () => clearInterval(intervalId);
        };

        fetchData();
    }, []); // Chú ý truyền mảng rỗng để useEffect chỉ chạy một lần khi component mount

    useEffect(() => {
        setTotalDishes(dsthucdon.length);
    }, [dsthucdon]);

    useEffect(() => {
        // Tính số lượng món cho từng loại mealType
        const counts = {};
        dsthucdon.forEach(item => {
            const mealType = item.mealType;
            counts[mealType] = (counts[mealType] || 0) + 1;
        });
        setMealTypeCounts(counts);
    }, [dsthucdon]);
    useEffect(() => {
        // Tính số lượng món cho từng loại foodProcessingType
        const counts = {};
        dsthucdon.forEach(item => {
            const foodProcessingType = item.foodProcessingType;
            counts[foodProcessingType] = (counts[foodProcessingType] || 0) + 1;
        });
        setFoodProcessingTypeCounts(counts);
    }, [dsthucdon]);

    const AlertDelete = (id) =>

        Alert.alert(
            "Cảnh báo",
            "Bạn có muốn xóa món ăn không?",
            [
                {
                    text: "Không",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Có", onPress: () => handleDelete(id) }
            ],
            { cancelable: false }
        );


    const handleDelete = async (id) => {
        const data = await axios.delete('http://192.168.88.128:3000/api/delete/' + id)
        if (data.data.success) {
            getapithucdon();
            alert(data.data.message)
        }
    }

    const onRefresh = () => {
        setRefreshing(true);
        getapithucdon();
    }

    const [numColumns, setNumColumns] = useState(3); // Set the initial number of columns

    const handleNumColumnsChange = newNumColumns => {
        // You might have a function to change the number of columns
        setNumColumns(newNumColumns);
    };
    const numberOfItemsToShow = 3;
    return (
        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <View style={styles.titler_container}>
                <Image source={{ uri: 'https://5.imimg.com/data5/ANDROID/Default/2021/1/WP/TS/XB/27732288/product-jpeg.jpg' }} style={styles.logo} />
                <Text style={styles.text_title}>Lưu trữ ghi chú vào bếp của bạn</Text>
                <View>
                    <TouchableOpacity style={styles.add_items} onPress={() => navigation.navigate('AddDishes')}>
                        <Text style={styles.text_add_items}>Món mới</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")}>
                    <Text style={styles.text_login_account}>Đăng nhập tài khoản</Text>
                </TouchableOpacity>
            <View>
                <Text style={styles.text_item}>Món ăn của tôi </Text>
                <Text style={styles.text_item}>Tổng số món ăn: {totalDishes}</Text>
                <View style={styles.column}>
                    <View>
                        <Text style={styles.text_item}>Loại bữa ăn</Text>
                        {Object.keys(mealTypeCounts).map((mealType, index) => (
                            <View key={index} style={styles.mealTypeCountContainer}>
                                <Text style={styles.mealTypeCountText}>{mealType}: {mealTypeCounts[mealType]}</Text>
                            </View>
                        ))}
                    </View>
                    <View>
                        <Text style={styles.text_item}>Loại chế biến</Text>
                        <FlatList
                           scrollEnabled={false}
                            data={Object.keys(foodProcessingTypeCounts)}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View key={item} style={styles.mealTypeCountContainer}>
                                    <Text style={styles.mealTypeCountText}>
                                        {item}: {foodProcessingTypeCounts[item]}
                                    </Text>
                                </View>
                            )}
                            numColumns={2}
                        />
                    </View>
                </View>

                <FlatList
                    style={styles.myFood}
                    scrollEnabled={false}
                    data={dsthucdon.slice().reverse()}
                    numColumns={numColumns}
                    key={`flatlist_key_${numColumns}`}
                    renderItem={({ item }) => (
                        <View style={styles.item_myFood}>
                            <TouchableOpacity onPress={() => navigation.navigate('BaiViet',
                                {
                                    id: item._id, name: item.foodName, Photo: item.foodPhoto, Processing: item.foodProcessing,
                                    Ingredients: item.foodIngredients, Time: item.cookingTime, Feel: item.feel, FoodRations: item.foodRations
                                })}>
                                <Image source={{ uri: item.foodPhoto }} style={styles.Image_myFood} />
                            </TouchableOpacity>
                            <View style={styles.manageFood}>
                                <TouchableOpacity style={styles.dl_manageFood} onPress={() => AlertDelete(item._id)}>
                                    <Icon name={trash_outline} size={20}></Icon>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.edit_manageFood} onPress={() => navigation.navigate('UpdateDishes',
                                    {
                                        id: item._id, name: item.foodName, Photo: item.foodPhoto, Processing: item.foodProcessing, ProcessingType: item.foodProcessingType,
                                        Ingredients: item.foodIngredients, Time: item.cookingTime, Feel: item.feel, FoodRations: item.foodRations, MealType: item.mealType
                                    })}>
                                    <Icon name={pencil_outline} size={20}></Icon>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.text_foodName}>{item.foodName}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <View>
                <Text style={styles.text_item}>Tham gia thử thách vào bếp </Text>
                <FlatList
                    initialNumToRender={3}
                    data={postdata.slice(0, numberOfItemsToShow)}
                    style={styles.flatList}

                    renderItem={renderImage}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
    },
    titler_container: {
        paddingTop: 50,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    text_title: {
        paddingTop: 10,
        fontSize: 22,
        marginBottom: 10,
    },
    add_items: {
        backgroundColor: '#FFA500',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    text_add_items: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    text_item: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 5,
    },
    column: {
        flex: 1,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    mealTypeCountContainer: {
        backgroundColor: '#BBBBBB',
        marginVertical: 5,
        marginLeft: 15,
        borderRadius: 8,
    },
    mealTypeCountText: {
        fontSize: 16,
        fontWeight: 'bold',
        width:100,
        paddingLeft:2,
    },

    myFood: {
        marginLeft: 15,
        marginRight: 10,
        paddingTop: 10,
        paddingLeft: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    Image_myFood: {
        height: 110,
        width: 110,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,

    },
    item_myFood: {
        marginRight: 10,
        marginBottom: 15,
        backgroundColor: '#EEEEEE',
        borderRadius: 8,
        paddingBottom: 6,
    },
    manageFood: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    dl_manageFood: {
        backgroundColor: '#FFFFFF',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 13,
    },
    edit_manageFood: {
        backgroundColor: '#FFFFFF',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 13,
        paddingRight: 20,
    },
    text_foodName: {
        fontSize: 15,
        paddingLeft: 6,
        paddingTop: 5,
        paddingRight: 7,
        fontWeight: 'bold',
        width: 112,
    },
    flatList: {
        height: 475,
        marginLeft: 15,
    },
    ImageContainer: {
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        height: '60%',
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 7,
        paddingBottom: 10,
    },
    text_name: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 8,
        paddingTop: 10,
        paddingBottom: 15,
    },
    text_times: {
        paddingLeft: 8,
        paddingBottom: 7,
    },
    text_number_of_dishes: {
        paddingLeft: 8,
        paddingBottom: 5,
    },
    food: {
        flexDirection: 'row',
    },
    food_item: {
        backgroundColor: '#EEEEEE',
        marginRight: 4,
        marginLeft: 4,
        paddingBottom: 10,
        borderRadius: 7,
        width: 100,
    },
    text_nameFood: {
        paddingLeft: 7,
        paddingRight: 7,
        fontSize: 14,
        fontWeight: 'bold',
    },
    Image: {
        height: 100,
        width: 100,
        borderRadius: 8,
        marginBottom: 10,
    },
})
export default Storages