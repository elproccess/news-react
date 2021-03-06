import React, { useState, Share, useEffect, useCallback } from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const CardDescription = ({ route }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Cover source={{ uri: route.params.item.urlToImage }} />
        <Title>{route.params.item.title}</Title>
        <Paragraph>{route.params.item.description}</Paragraph>
      </Card.Content>
      <Card.Actions></Card.Actions>
    </Card>
  );
};

export default CardDescription;
