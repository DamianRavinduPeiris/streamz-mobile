import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/assets/types/RootStackParamList";
import Genres from "@/assets/genres/genres.json";
import { Button, Chip, Icon, MD3Colors,IconButton } from "react-native-paper";
import { WebView } from "react-native-webview";

type StreamRouteProp = RouteProp<RootStackParamList, "Stream">;

const Stream = ({ route }: { route: StreamRouteProp }) => {
  const { data } = route.params;
  const [genres, setGenres] = useState<string[]>([]);
  const [isPlayed, setPlayStatus] = useState<boolean>(false);

  useEffect(() => {
    const genreArray: string[] = [];
    if (data.genre_ids) {
      data.genre_ids.map((id: number) => {
        Genres.genres.map((genre) => {
          if (genre.id === id) {
            genreArray.push(genre.name);
          }
        });
      });
      setGenres(genreArray);
    }
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={{ uri: data.poster_path }}
        style={{ width: "100%", height: 500 }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          margin: 5,
          color: "black",
        }}
      >
        {data.title}
      </Text>
      <Text style={{ margin: 2 }}>{data.release_date}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {genres.map((genre) => (
          <Chip
            selectedColor="black"
            rippleColor={"black"}
            style={{ margin: 5 }}
          >
            {genre}
          </Chip>
        ))}
      </View>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "300",
          padding: 30,
        }}
      >
        {data.overview}
      </Text>

      <IconButton
    icon="camera"
    iconColor={MD3Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
  />

      <WebView
        source={{
          uri: `${(process.env.EXPO_PUBLIC_MOVIE_STREAMING_URL ?? "").trim()}${
            data.id
          }`,
        }}
        startInLoadingState={true}
        scalesPageToFit={true}
        style={{
          width: 400,
          height: 400,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Stream;
