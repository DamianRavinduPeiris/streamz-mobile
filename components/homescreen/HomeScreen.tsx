import UserType from "@/assets/types/UserType";
import { fetchPopular } from "@/tmdb/FetchMovies";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MovieType from "@/assets/types/MovieType";
import MovieCard from "@/components/card/MovieCard";
import { Text } from 'react-native-paper';

const HomeScreen = () => {
  const [user, setUserData] = useState<UserType>(null as never);
  const [movieData, setMovieData] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        if (user) {
          setUserData(JSON.parse(user));
        }
      } catch (error) {
        console.log("Something went wrong : ", error);
      }
    };
    const fetchMovies = async () => {
      let movieArray: MovieType[] = [];
      let movieData = await fetchPopular();
      movieData.results.forEach((movie: MovieType) => {
        let movieInfo: MovieType = {
          id: movie.id,
          title: movie.title,
          poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          overview: movie.overview,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          genre_ids: movie.genre_ids,
        };

        movieArray.push(movieInfo);
      });
      setMovieData(movieArray);
    };
    fetchUser();
    fetchMovies();
  }, []);

  return (
    <View>
      
      <Text variant="displayLarge" style={{
        margin: 10,
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
      }}>Popular</Text>
      
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        
      }}
      horizontal={true}
      
      showsHorizontalScrollIndicator={false}
    >
      
      {movieData.map((movie: MovieType) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
