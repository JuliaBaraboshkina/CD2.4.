import * as React from 'react';
import { StyleSheet, Text, StatusBar,Image,View,Pressable,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function First({ navigation }) {

  return (
    <View style={styles.container}>
    <Text style={{textAlign:'center', top:180, color:'#4682B4',fontSize:18}}>
        Первый экран</Text>
        
        <View style={{top:100}}>
   <Pressable style={styles.button_1} onPress={() => navigation.navigate('Вторая страница')}>
    <Text style={styles.text}>Перейти на второй экран</Text>
  </Pressable>
  </View>

  </View>
);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: StatusBar.currentHeight,
      
    },
    button_1: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 40,
      backgroundColor: '#4682B4',
      bottom:-100,
      width:270,
      left: 25,
      height: 45
    },
    text: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 'bold',
      color: 'white',
    },
  });
  
export default First;

