import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import GlobalApi from '../Shared/GlobalApi';

export default function VideoCourseList() {
// State to hold the list of video courses
    const [videoList,setVideoList]=useState([]);
   // Get the navigation object using the useNavigation hook from React Navigation
    const navigation=useNavigation();
    // useEffect hook to fetch the video course list when the component mounts
    useEffect(()=>{
        getVideoCourse();
    },[])
    // Function to fetch the video course list from the API and update the state
    const getVideoCourse=async()=>{
        const resp=(await GlobalApi.getVideoCourse()).data;
        const result=resp.data.map((item)=>({
            id:item.id,
            name:item.attributes.title,
            description:item.attributes.description,
            image:item.attributes.image.data.attributes.url,
            Topic:item.attributes.VideoTopic
        }))
        setVideoList(result);
        console.log(result) 
    }
    // Function to handle pressing on a video course item
    const onPressCourse=(course)=>{
        
        navigation.navigate('course-detail',{courseData:course,
        courseType:'video'})
    }
  return (
    <View style={{marginTop:15}}>
        <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>Video Course</Text>
     <FlatList
     data={videoList}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     renderItem={({item})=>(
        <TouchableOpacity onPress={()=>onPressCourse(item)}>
            <Image source={{uri:item.image}} 
            style={{width:210,height:120,
            marginRight:10,borderRadius:7}} /> 
        </TouchableOpacity>
     )}
     />
    </View>
  )
}