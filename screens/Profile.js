import React from 'react'
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from './AuthContext';


const Profile = ({navigation}) => {
    const {isAuthenticated} = useAuth();
    return (
        <View style={styles.container}>
            {
                isAuthenticated ? (
                    <Text style={styles.NoText}></Text>
                    
                ) : (
                    <View style={styles.login_account}>
                        <Image source={{ uri: 'https://5.imimg.com/data5/ANDROID/Default/2021/1/WP/TS/XB/27732288/product-jpeg.jpg' }} style={styles.logo} />
                        <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")}>
                            <Text style={styles.text_login_account}>Đăng nhập tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            <View style={styles.text_info}>
                <TouchableOpacity style={styles.row}>
                    <Text style={styles.text}>Quốc gia</Text>
                    <Image source={require('../assets/vn.png')} style={styles.vn_image}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text} onPress={() => navigation.navigate('Chính sách')}>Điều Khoản Bảo Mật</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text} onPress={() => navigation.navigate('Điều khoản bảo mật')}>Điều Khoản Dịch Vụ</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text} onPress={() => navigation.navigate('Hướng dẫn')}>Hướng Dẫn Dành Cho Cộng Đồng Cookpad</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text} onPress={() => navigation.navigate('Câu hỏi thường gặp')}>Những Câu Hỏi Thường Gặp</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Liên Hệ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,

    },
    login_account: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#FFFFFF',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    logo: {
        height: 50,
        width: 50,
        marginRight: 10,
        borderRadius: 25,
    },
    text_login_account: {
        fontSize: 22,
        paddingLeft: 10,
        fontWeight: 'bold',
        marginTop: 10,
    },
    text_info: {
        paddingLeft: 20,
    },
    row:{
        flexDirection:'row'
    },
    text: {
        fontSize: 18,
        marginTop: 15,
        marginBottom: 10,
    },
    vn_image:{
        height:25,
        width:25,
        marginLeft:30,
        marginTop:15,
    },
    NoText:{
        height:0,
        margin:-50,
        
    }
})
export default Profile