import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  margin: 16px 0 8px;
  font-size: 1.5em;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 1em;
  text-align: center;
  margin-bottom: 16px;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CardButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export function Card2() {
  return (
    <Card>
      <CardImage
        src="https://via.placeholder.com/300x200"
        alt="Card"
      />
      <CardTitle>Card Title</CardTitle>
      <CardDescription>
        This is a description of the card. It provides some details about the content of the card.
      </CardDescription>
      <CardActions>
        <CardButton>Learn More</CardButton>
      </CardActions>
    </Card>
  );
}