import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, ActivityIndicator, MD2Colors } from "react-native-paper";

const Login = () => {
  const [userData, setUserData] = useState<{email: string;password: string;}>();
  const [status, setStatus] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 20,
      }}
    >
      <ActivityIndicator
        animating={status}
        color={MD2Colors.teal600}
        size={"large"}
      />
      <TextInput
        label="Email"
        mode={"outlined"}
        style={{
          margin: 20,
        }}
        onChange={(e)=>{
          setUserData({ ...userData, email: e.target.value });
        }}
      />
      <TextInput
        label="Password"
        mode={"outlined"}
        style={{
          margin: 20,
        }}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={toggleShowPassword}
          />
        }
        onChangeText={(text) => setUserData({ ...userData, password: text })}
      />
      <Button
        mode="contained"
        style={{
          margin: 20,
          backgroundColor: "black",
        }}
        onPress={() => console.log(userData)}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
