import MovieType from '@/assets/types/MovieType';
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

interface MovieCardProps {
  movie: MovieType;
}


const MovieCard = ({ movie }: MovieCardProps) => (
  
  <Card style={{
    width: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  }}>
    
    <Text variant="displaySmall" style={{
      fontSize: 10,
      fontWeight: "bold",
      color: "black",
      padding: 10,
    }}>{movie.title}</Text>
    <Card.Cover source={{ uri: movie.poster_path }} />
    
   
  </Card>
);

export default MovieCard;