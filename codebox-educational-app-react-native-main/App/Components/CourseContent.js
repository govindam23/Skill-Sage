import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../Shared/Colors';
 
export default function CourseContent({course,userProgress,courseType}) {
    // useNavigation hook is used to get the navigation object
  const navigation=useNavigation();
// useEffect hook is used to log the userProgress whenever it changes
    useEffect(()=>{
      console.log("userProgress",userProgress)
    })
   // Function to check if user made progress on a specific course content
    const checkUserProgress=(contentId)=>{
      return userProgress.find(item=>item.courseContentId==contentId)
    }
    // This function handles the pressing on chapter in hte course content
    const onChapterPress=(courseContent)=>{
      if(courseType=='text')
      {
      navigation.navigate('course-chapter',
      {courseContent:courseContent,
        courseId:course.id, 
      })
    }
    else{
      navigation.navigate('play-video',
      {
        courseContent:courseContent,
        courseId:course.id, 
      })
    }
    }
  
  return (
    <View style={{marginTop:10}}>
      <Text style={{fontWeight:'bold',
    fontSize:16}}>Course Content</Text>
    <FlatList
    style={{marginTop:10}}
    data={course?.Topic}
    renderItem={({item,index})=>(
        <TouchableOpacity onPress={()=>onChapterPress(item)} style={{display:'flex',
        flexDirection:'row',backgroundColor:Colors.white,marginBottom:5
        ,padding:13,alignItems:'center',borderRadius:5}}>
          
        { checkUserProgress(item.id)?
        // If the user has made progress on this content, display a checkmark icon
        <Ionicons name="checkmark-circle" size={24} color={Colors.green }
         style={{marginRight:20}} />:
         // If the user hasn't made progress on this content, display the index number
         <Text style={{fontWeight:'bold',fontSize:20,
         color:Colors.gray,marginRight:20}}>{index+1}</Text>}
            <Text style={{fontSize:15,fontWeight:'bold'}}>
                {item.Topic?item.Topic:item.name}</Text>
            <Ionicons name="play-circle" size={24}
            style={{position:'absolute',right:10,}}
             color={Colors.primary} />
        </TouchableOpacity>
    )}
    />
    </View>
  )
}