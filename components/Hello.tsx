import React from "react";
import { View, Text } from "react-native";
import { Button } from "tamagui";
import { useNavigation } from "@react-navigation/native";

export default function Hello() {
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
        <Text>Hello Page</Text>
        <Button
          onPress={() => {
            navigation.navigate("About" as never);
          }}
        >
          About
        </Button>
      </View>
    </>
  );
}
