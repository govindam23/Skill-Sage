import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
export default function PlayVideo() {
    const navigation=useNavigation();
    //route parameters is taken using useRoute hook
    const param=useRoute().params;
     // State to hold the video chapter data
    const [videoChapter,setVideoChapter]=useState([])
    // State to manage the video player's play state
    const [playing, setPlaying] = useState(false);
    // useEffect hook to initialize the component and set the video chapter data
    useEffect(()=>{
        setVideoChapter(param.courseContent)
    },[])
   
    // Function to handle the video player state change
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
     
    }
  }, []);
  return (
    <View style={{padding:20,marginTop:25}}>
           <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginBottom:10}}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        {videoChapter?
        <View>
             <Text style={{marginBottom:10,fontSize:20,fontWeight:'bold'}}>{videoChapter.name}</Text>
             <YoutubePlayer
        height={220}
        play={playing}
        videoId={videoChapter.videoUrl}
        onChangeState={onStateChange}
      />
            <Text style={{fontWeight:'bold',marginBottom:10}}>Description</Text>
             <Text style={{lineHeight:20}}>{videoChapter?.description}</Text>
        </View>
            
        :null}
     
    </View>
  )
}