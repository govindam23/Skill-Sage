import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../Shared/Colors';
import GlobalApi from '../Shared/GlobalApi';

export default function CourseList({type}) { 
    const [courseList,setCourseList]=useState([])
    const navigation=useNavigation();
    useEffect(()=>{
         
        getCourseList();
    },[])

    const getCourseList=async()=>{
        const resp=(await GlobalApi.getCourseList(type)).data;
        const result=resp.data.map((item)=>({
            id:item.id,
            name:item.attributes.name,
            description:item.attributes.description,
            image:item.attributes.image.data.attributes.url,
            Topic:item.attributes.Topic

        }))
       
        setCourseList(result); 
    }

    const onPressCourse=(course)=>{
        
        navigation.navigate('course-detail',{courseData:course,
          courseType:'text'})
    }
  return (
    <View style={{marginTop:10}}>
    <Text style={{fontSize:20,fontWeight:'bold' ,
    textTransform:'capitalize',
    marginBottom:3}}>
        {type} Course</Text>

      <FlatList
      data={courseList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <TouchableOpacity style={{backgroundColor:Colors.black,marginRight:10,
        borderRadius:10}} onPress={()=>onPressCourse(item)}>
            <Image source={{uri:item.image}}  
            style={{width:200,height:105,  
            borderTopLeftRadius:10,borderTopRightRadius:10,
            resizeMode:'cover'}} />
            <View style={{padding:10}}>
            <Text style={{color:Colors.white,fontWeight:'bold',fontSize:15}}>{item.name}</Text>
            <Text style={{color:Colors.white,fontWeight:'300'}}>{item.Topic?.length} Lessons</Text>
             
            </View>
           
        </TouchableOpacity> 
      )}
      />
    </View>
  )
}