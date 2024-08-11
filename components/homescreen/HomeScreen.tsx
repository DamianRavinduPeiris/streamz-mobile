import UserType from "@/assets/types/UserType";
import { fetchPopular } from "@/tmdb/FetchMovies";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";
import MovieType from "@/assets/types/MovieType";
import { Card2 } from "../card/Card";


const HomeScreen = () => {
  const [user, setUserData] = useState<UserType>(null as never);
  const [movieData,setMovieData]=useState<MovieType[]>([]);

  useEffect(() => {
    console.log("useEffect");
    const fetchUser = async () => {
      console.log("fetching user");
      console.log(await AsyncStorage.getItem("isExistingUser"));
      try {
        const user = await AsyncStorage.getItem("user");
        console.log(user);
        let movieData = await fetchPopular();
        movieData.results.forEach((movie:MovieType)=>{
          let movieInfo :MovieType = {
            id: movie.id,
            title: movie.title,
            poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            overview: movie.overview,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            genre_ids: movie.genre_ids,
          }
          setMovieData([...movieData,movieInfo]);

        })
        
        if (user) {
          setUserData(JSON.parse(user));
        }
      } catch (error) {
        console.log("Something went wrong : ", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Card2></Card2>
      
</View>
    
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
