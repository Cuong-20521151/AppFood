import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button
  
} from "react-native";
const CacBanBep = ({navigation}) => {
  const handleHome = () => {
    navigation.navigate('Kho Cảm Hứng')
  }
  return (
    <View style={styles.main}>
      <Button onPress={handleHome} title="Trở lại Kho Cảm Hứng"></Button>
    </View>
  )
}
const styles = StyleSheet.create ({
    main:{
        marginTop:20,
        marginLeft:10,
        marginRight:10,
    }
})
export default CacBanBep