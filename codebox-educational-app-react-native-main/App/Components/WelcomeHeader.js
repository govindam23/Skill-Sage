import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../Context/AuthContext";//importing AuthContext for user dat sauthenticated
import Colors from '../Shared/Colors';
import Colors from "../Shared/Colors";

export default function WelcomeHeader() {
  //Get userData and setUserData from AuthContext
  const { userData, setUserData } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View>
        // View to hold welcome text
        <Text style={{ color:Colors.black,fontSize:15, fontWeight: "bold" }}>Hey,</Text>
        <Text style={{ color:Colors.darkBlue,fontSize: 20, fontWeight: "bold" }}>
          //data from registered id
          //displaying user name from google cloud
          {userData?.name}
        </Text>
      </View>

      <Image
      //displaying user photo from google cloud
        source={{ uri: userData?.picture }}
        style={{ width: 40, height: 40, borderRadius: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },
});
