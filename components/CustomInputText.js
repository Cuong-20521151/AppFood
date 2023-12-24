import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  
} from "react-native";
import Icon from 'react-native-vector-icons/Feather'

const CustomTextInput = ({name,placeholder,value,onChangeText,secureTextEntry}) => {
  

  return (
    <View >
      
        <View style={styles.inputName}>
          <Icon style={styles.icon} name = {name} color = {'#000'} size = {25}/>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputName:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10,
    borderWidth: 1,
    borderRadius:10
  },
  
  input: {
    width: "100%",
    height: 40,
    padding: 10,
    marginBottom: 5,
    marginTop:5,
    borderWidth: 0, 
    borderColor: 'transparent' 
  },
  icon:{
    padding:12,
  },
});

export default CustomTextInput;