import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, View } from 'react-native';
import GlobalApi from '../Shared/GlobalApi';

export default function Slider() {
  // State to hold the slider data
    const [slider,setSlider]=useState([])
    // useEffect hook to fetch the slider data when the component mounts
    useEffect(()=>{
        getSlider();
      },[])
      // Function to fetch the slider data from the API and update the state
      const getSlider=async()=>{
        const result=(await GlobalApi.getSlider()).data;
        
        
       // necessary data is extracted from the API response
        const resp=result.data.map((item)=>({
            id:item.id,
            name:item.attributes.name,
            image:item.attributes.image.data.attributes.url
        }))
       
        setSlider(resp)
      }
  return (
    <View style={{marginTop:10}}>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        key={slider.id}
        renderItem={({item})=>(
            <View>
                <Image source={{uri:item.image}} 
                style={{width:Dimensions.get('screen').width*0.87
                    ,height:150,borderRadius:10,marginRight:15}}
                />
            </View>
        )}
      />
    </View>
  )
}