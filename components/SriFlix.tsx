import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "tamagui";


export default function SriFlix() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={{
        uri: "https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/85d392b3-b53c-4682-89c2-d756c6d3ff7c/LK-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            color: "white",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Welcome to SriFlix
        </Text>
        <Button size="$6" theme={'active'} >Sign In</Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
