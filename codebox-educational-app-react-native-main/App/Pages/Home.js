import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useContext } from "react";

import { Button, ScrollView, StyleSheet, View } from "react-native";

import CourseList from "../Components/CourseList";

import SearchBar from "../Components/SearchBar";

import Slider from "../Components/Slider";

import VideoCourseList from "../Components/VideoCourseList";

import WelcomeHeader from "../Components/WelcomeHeader";

import { AuthContext } from "../Context/AuthContext";

export default function Home() {
  const { userData, setUserData } = useContext(AuthContext);

  const Logout = () => {
    AsyncStorage.clear();

    setUserData(null);
  }

  return (
    
      <ScrollView style={{ padding: 10 }}>
        <View style={styles.slider}>
          <WelcomeHeader />
        </View>
    
        <View style={styles.welcomeHeader}>
          <SearchBar />
        </View>
    
        <Slider />
    
        <VideoCourseList />
    
        <View style={styles.container}>
          <CourseList type={'basic'} />
        </View>
    
        <CourseList type={'advance'} />
    
        <View style={{ height: 110 }}>
          <Button title="Logout" onPress={Logout} />
        </View>
      </ScrollView>
    );
    
  
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,

    height: 220,

    alignItems: "center",
  },

  slider: {
    paddingTop: 40,
  },

  welcomeHeader: {
    paddingBottom: 15,
  }
});
