import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CourseContent from "../Components/CourseContent";
import { AuthContext } from "../Context/AuthContext";
import Colors from "../Shared/Colors";
import GlobalApi from "../Shared/GlobalApi";
export default function CourseDetails() {
  // Get the route parameters using the useRoute hook from React Navigation
  const param = useRoute().params;
  // State to hold the course data
  const [course, setCourse] = useState([]);
  // Get the navigation object using the useNavigation hook from React Navigation
  const navigation = useNavigation();
  // State to hold the user's course progress
  const [userProgress, setUserProgress] = useState([]);
  // Get the userData and setUserData from the AuthContext using the useContext hook
  const { userData, setUserData } = useContext(AuthContext);
  // useEffect hook to initialize the component and fetch the course progress
  useEffect(() => {
   // Set the course data from the route params
    setCourse(param?.courseData);
    // Check if courseData.id exists and fetch the course progress
    param.courseData.id ? getCourseProgress() : null;
  }, [param.courseContentId]);
// Function to fetch the user's course progress from the AP
  const getCourseProgress = () => {
    GlobalApi.getCourseProgress(userData.id, param?.courseData.id).then(
      (resp) => {
        if (resp.data.data) {
          const result = resp.data.data.map((item) => ({
            id: item.id,
            courseId: item.attributes.courseId,
            courseContentId: item.attributes.courseContentId,
          }));

          setUserProgress(result);
        }
      }
    );
  };

  return (
    <View style={{ padding: 20, paddingTop: 50 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{course.name}</Text>
        <Text style={{ color: Colors.gray }}>by UofWindsor</Text>
        <Image
          source={{ uri: course.image }}
          style={{ height: 150, marginTop: 10, borderRadius: 10 }}
        />
        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}>
          About Course
        </Text>
        <Text numberOfLines={4} style={{ color: Colors.gray }}>
          {course.description}
        </Text>
      </View>
      <CourseContent
        course={course}
        userProgress={userProgress}
        courseType={param.courseType}
      />
    </View>
  );
}
