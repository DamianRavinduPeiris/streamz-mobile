import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import GoogleButton from "./GoogleButton";

export default function SriFlix() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={{
        uri: "https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/7c18a0e7-64b1-4e1b-b27f-0ec86b272429/LK-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_9e3c22af-9b48-4a90-b4d7-26986f42c707_small.jpg",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        
        <GoogleButton />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensure the ImageBackground takes up the full screen
    resizeMode: "cover", // Use "cover" to ensure the image covers the entire background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});