import React from 'react';
import { StyleSheet, ScrollView, ImageBackground, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/assets/types/RootStackParamList';

type StreamRouteProp = RouteProp<RootStackParamList, "Stream">;

const Stream = ({ route }: { route: StreamRouteProp }) => {
  const { data } = route.params;

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground source={{ uri: data.poster_path }} style={{ width: '100%', height: 500 }} />
        <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            padding: 20,
            color: "black",
        }}>{data.title}</Text>
      <Text style={{
        fontSize: 15,
        fontWeight: "300",
        padding: 30,
      }}>{data.overview}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({})

export default Stream;