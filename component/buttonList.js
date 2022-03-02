import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  SafeArea,
  SafeAreaSafeAreaView,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import CustomButton from "./customButton";

const countries = [
  { name: "America", tag: "us" },
  { name: "United Kingdom", tag: "gb" },
  { name: "Canada", tag: "ca" },
  { name: "France", tag: "fr" },
];

const ButtonList = ({ parentCallback }) => {
  const [country, setCountry] = useState("us");

  useEffect(() => {
    console.log(country);
    parentCallback(country);
  });

  return (
    <FlatList
      styles={{ height: 42 }}
      horizontal={true}
      scrollEnabled
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      legacyImplementation={false}
      data={countries}
      keyExtractor={({ id }, index) => index}
      renderItem={({ item }) => (
        <Button
          style={styles.button}
          onPress={() => {
            setCountry(item.tag);
            //console.log(country);
          }}
        >
          <Text style={styles.text}>{item.name}</Text>
        </Button>

        // <Button style={styles.button} onPress={() => props.onPress(item.tag)}>
        //  <Text style={styles.text}>{item.name}</Text>
        // </Button>
      )}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#3058db",
    borderRadius: 50,
  },

  text: {
    color: "#fff",
  },
});

export default ButtonList;
