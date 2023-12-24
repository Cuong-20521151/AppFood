import React from 'react'
import { View, StyleSheet,  TextInput } from 'react-native';
import TopTabs from '../URL/TopTabs';

const KhoCamHung=()=>{
return (
<View style={styles.container}>
    <View style={styles.search}>
        <TextInput style={styles.searchInput}
        placeholder='Gõ vào nguyên liệu hoặc món cần tìm'
        />
    </View>
    
</View>
)
}
const styles = StyleSheet.create({
    container:{
        marginTop:50,
        backgroundColor:'#DDDDDD',
    },
    search:{
        backgroundColor:'#FFFFFF',
        height:80,
    },
    searchInput:{
        marginTop:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#DDDDDD',
        borderRadius:15,
        paddingLeft:15,
        paddingRight:20,
        height:50,
    },
    
})

export default KhoCamHung