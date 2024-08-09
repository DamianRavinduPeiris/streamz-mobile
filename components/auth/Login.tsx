import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  TextInput,
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";
import axios from "axios";
import Alert from "../toast/Alert";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FireBaseConfig";

const Login = () => {
  const navigator = useNavigation();
  const [userData, setUserData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  const [isInvalidCredentials, setInvalidCredentialStatus] = useState<boolean>(false);
  const [isLoading,setLoadingStatus ] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isAlertVisible, setAlertVisibility] = useState<boolean>(true);

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
        animating={isLoading}
        color={MD2Colors.teal600}
        size={"large"}
      />
      <TextInput
        label="Email"
        mode={"outlined"}
        style={{
          margin: 20,
        }}
        onChange={(e) => {
          setUserData({ ...userData, email: e.nativeEvent.text });
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
      {isInvalidCredentials ? (
        <Alert
          msg={"Invalid Credentials!"}
          icon={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-PHtrPswUuUhUtaFnWnklu7c2LqzPW6kJg&s"
          }
          visible={isAlertVisible}
          fun1={() => {
            setAlertVisibility(false);
          }}
          fun2={() => {}}
        />
      ) : null}

      <Button
        mode="contained"
        style={{
          margin: 20,
          backgroundColor: "black",
        }}
        onPress={async () => {
          setLoadingStatus(true);
          signInWithEmailAndPassword(
            FIREBASE_AUTH,
            userData.email,
            userData.password
          )
            .then(async (res) => {
              await AsyncStorage.setItem("email", res?.user.email as string);
              const storedEmail = await AsyncStorage.getItem("email");
              console.log(storedEmail);
              setLoadingStatus(false);
            })
            .catch((err) => {
              setInvalidCredentialStatus(true);
              setLoadingStatus(false);
              setAlertVisibility(true);
              console.log(err);
            });
        }}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
