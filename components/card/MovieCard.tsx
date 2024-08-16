import MovieType from '@/assets/types/MovieType';
import TVShowType from '@/assets/types/TVShowTypes';
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

interface MovieCardProps {
  data: MovieType | TVShowType;
}


const MovieCard = ({ data:cardData }: MovieCardProps) => (
  
  <Card style={{
    width: 150,
    height : 300,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  }}>
    
    <Text variant="displaySmall" style={{
      fontSize: 10,
      fontWeight: "bold",
      color: "black",
      padding: 10,
    }}>{(cardData as MovieType).title ? (cardData as MovieType).title : (cardData as TVShowType).name}</Text>
    <Card.Cover source={{ uri: cardData.poster_path }} />
    
   
  </Card>
);

export default MovieCard;