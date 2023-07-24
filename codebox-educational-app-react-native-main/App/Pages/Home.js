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
// Function to handle user logout
  const Logout = () => {
    // Clear the user data from AsyncStorage and setUserData to null
    AsyncStorage.clear();
    setUserData(null);
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={styles.Slider}>
        <WelcomeHeader />
      </View>
      <View style={styles.WelcomeHeader}>
        <SearchBar />
      </View>
      <Slider />

      <VideoCourseList />
      <View style={styles.container}>
        <CourseList type={"basic"} />
      </View>
      <CourseList type={"advance"} />

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
  Slider: {
    paddingTop: 40,
  },
  WelcomeHeader: {
    paddingBottom: 15,
  },
});
