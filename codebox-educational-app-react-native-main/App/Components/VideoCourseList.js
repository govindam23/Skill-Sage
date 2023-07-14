import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import GlobalApi from '../Shared/GlobalApi';

export default function VideoCourseList() {

    const [videoList,setVideoList]=useState([]);
    const navigation=useNavigation();

    useEffect(()=>{
        getVideoCourse();
    },[])
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