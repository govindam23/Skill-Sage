import React, { useContext } from "react";

import { Image, StyleSheet, Text, View } from "react-native";

import { AuthContext } from "../Context/AuthContext";
import Colors from '../Shared/Colors';

import Colors from "../Shared/Colors";

export default function WelcomeHeader() {
  const { userData, setUserData } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color:Colors.black,fontSize:15, fontWeight: "bold" }}>Hey,</Text>
        <Text style={{ color:Colors.darkBlue,fontSize: 20, fontWeight: "bold" }}>
          {userData?.name}
        </Text>
      </View>

      <Image
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
