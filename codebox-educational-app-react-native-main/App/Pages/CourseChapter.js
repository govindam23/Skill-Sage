import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import ProgressBar from '../Components/ProgressBar';
import { AuthContext } from '../Context/AuthContext';
import Colors from '../Shared/Colors';
import GlobalApi from '../Shared/GlobalApi';


export default function CourseChapter() {
    const navigation=useNavigation();
    // Get the route parameters using the useRoute hook from React Navigation
    const param=useRoute().params;
    // State to hold the chapter data
    const [chapter,setChapter]=useState([])
    // State to control the 'Run' button and show/hide the output
    const [run,setRun]=useState(false);
    // State to track the progress of the course
    const [progress,setProgress]=useState(0);
    const {userData,setUserData}=useContext(AuthContext);
    // Reference to the FlatList to enable scrolling to specific chapters
    let chapterRef;
    // useEffect hook to initialize the component and fetch the chapter data
    useEffect(()=>{
      // Reset the progress and set the chapter data from the route params
        setProgress(0);
        setChapter(param.courseContent.Content)
      
    },[])
    const onClickNext=(index)=>{
        // Reset 'run' state and update progress
        setRun(false);
        setProgress(index+1/chapter.length)
        try{
            chapterRef.scrollToIndex({animated:true,index:index+1})  
        }
        catch(e)
        {   
            let coursePro;
            const data={
                data:{
                    uid:userData.id,
                    courseId:param.courseId,
                    courseContentId:param.courseContent.id
                }
            }
// Calling the API to update the course progress
            GlobalApi.setCourseProgress(data).then(resp=>{
               // Navigates back to the 'course-detail' screen with the current course content ID
                navigation.navigate({
                  name:'course-detail' ,
                  params:{courseContentId:param.courseContent.id},
                  merge:true 
                })
            })
           
       
        }
    }
  return (
    <View style={{padding:20,paddingTop:50,flex:1}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <ProgressBar progress={progress} />
        <FlatList
        data={chapter}
        horizontal={true}
        pagingEnabled
        ref={(ref)=>{
            chapterRef=ref
        }}
        renderItem={({item,index})=>(
            <View  style={{width:Dimensions.get('screen').width*0.87
            ,
            marginRight:15,padding:10}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{item.name}</Text>
                <Text>{item.description}</Text>
               {item.input!=''?
               <View>
               <View  style={{backgroundColor:Colors.black,
                padding:20,borderRadius:10}}>
                    <Text style={{color:Colors.white}}>{item.input}</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:Colors.primary,width:60,
                padding:5,borderRadius:5,
                marginTop:10,display:'flex',flexDirection:'row'
                }} onPress={()=>setRun(true)}>
                     <Ionicons name="play-circle" size={20}
             color={Colors.white} />
                    <Text style={{textAlign:'center',marginLeft:5, color:Colors.white}}>Run</Text>
                </TouchableOpacity>
                </View>:null}
               {run? <View style={{marginTop:15}}>
                    <Text style={{fontWeight:'bold',}} >Output</Text>
                    <View style={{backgroundColor:Colors.black,
                padding:20,borderRadius:10,marginTop:10}}>
                    <Text style={{color:Colors.white}}>
                        {item.output}</Text>
                </View>
                </View>:null}
               {index+1!=chapter.length? <TouchableOpacity 
                onPress={()=>onClickNext(index)} 
                    style={{backgroundColor:Colors.primary,
                padding:10,borderRadius:7,position:'absolute',bottom:0,
                width:'110%'}}>
                        <Text style={{textAlign:'center',color:Colors.white}}>Next</Text>
                </TouchableOpacity>:
                <TouchableOpacity 
                onPress={()=>onClickNext(index)} 
                    style={{backgroundColor:Colors.green,
                padding:10,borderRadius:7,position:'absolute',bottom:0,
                width:'110%'}}>
                        <Text style={{textAlign:'center',color:Colors.white}}>Finish</Text>
                </TouchableOpacity>}
                
            </View>
        )}
        />
       
       
    </View>
  )
}