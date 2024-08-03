import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "tamagui";

export default function About() {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>About Page</Text>
        <Button
          onPress={() => {
            navigation.navigate("Hello" as never);
          }}
        >
          Hello
        </Button>
      </View>
    </>
  );
}
