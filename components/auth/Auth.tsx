import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { TextInput } from "react-native-paper";

const Auth = () => {
  return (
    <View>
      <TextInput
        label="Email"
        mode={"outlined"}
        style={{
            margin: 30,

        }}
        
        
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Auth;
