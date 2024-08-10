import UserType from "@/assets/types/UserType";

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const HomeScreen =  () => {
  const [user, setUserData] = useState<UserType>(null as never);

  useEffect(() => {
    console.log('useEffect')
    const fetchUser = async () => {
        console.log('fetching user')
        console.log(await AsyncStorage.getItem("isExistingUser"))
      try {
        const user  = await AsyncStorage.getItem("user" );
        console.log(user)
        if (user) {
            
          setUserData(JSON.parse(user));
        }
      } catch (error) {
        console.log("Something went wrong : ", error);
      }
    };
    fetchUser();
  },[]);

  return (
    <View>
      <Text style={{
        color: "black",
        fontSize: 20
      }}>Hello {user?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
