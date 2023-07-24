import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Colors from '../Shared/Colors';
export default function SearchBar() {
  return (
    // View containing the search bar component
    <View style={styles.container}>
        <Ionicons name="search" size={24} 
        color={Colors.gray} style={{marginRight:10}} /> 
        <TextInput placeholder='Search' />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:10,
    borderRadius:10,
    elevation:2,
    marginTop:10,
    alignItems:'center'
    }
})