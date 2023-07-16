import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Button, ScrollView, View } from 'react-native';
import CourseList from '../Components/CourseList';

import SearchBar from '../Components/SearchBar';
import Slider from '../Components/Slider';
import VideoCourseList from '../Components/VideoCourseList';
import WelcomeHeader from '../Components/WelcomeHeader';
import { AuthContext } from '../Context/AuthContext';

 


export default function Home() {
    const {userData,setUserData}=useContext(AuthContext)
    
const Logout=()=>{
  AsyncStorage.clear()
  setUserData(null);
}
  
  return (
    <ScrollView style={{padding:20}}>
      <View style ={{fontFamily:''}}>
        <WelcomeHeader/>
        <SearchBar/>
        <Slider/>
        <VideoCourseList/>
        <CourseList type={'basic'} />
        <CourseList type={'advance'} />
        
      
        <View style={{height:110}}> 
        <Button title="Logout" onPress={Logout} />
        </View>
        
        </View>
        
    </ScrollView> 
    
  )
}