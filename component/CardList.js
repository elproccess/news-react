import React, { useState, useEffect, useCallback } from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const CardList = ({ navigation, item }) => {
  //onst [news, setNews] = UseState(item);

  return (
    <Card>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.source.name}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: item.urlToImage }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button onPress={() => navigation(item)}>description</Button>
      </Card.Actions>
    </Card>
  );
};

export default CardList;
