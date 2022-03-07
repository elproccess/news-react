import React, { useState, useEffect, useCallback } from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  SafeArea,
  SafeAreaSafeAreaView,
  SafeAreaView,
  Text,
  Alert,
  Modal,
  Pressable,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carousel from "react-native-snap-carousel";

import AppContext from "./component/AppContext";
import ButtonList from "./component/buttonList";
import CardList from "./component/CardList";
import CardDescription from "./component/CardDescription";

import HmScreen from "./screens/homeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [appTitle, setTitle] = useState("");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HmScreen} />
        <Stack.Screen name="NewsDescription" component={NewsDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const NewsDescription = ({ navigation, route }) => {
  return <CardDescription route={route} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    height: "100%",
  },

  safeArea: {
    paddingTop: 60,
    height: 43,
  },

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

export default App;
