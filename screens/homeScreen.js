import React, { useState, useEffect, useCallback } from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppContext from "../component/AppContext";
import ButtonList from "../component/buttonList";
import CardList from "../component/CardList";
import CardDescription from "../component/CardDescription";

const HmScreen = ({ navigation }) => {
  const countries = [
    { name: "America", tag: "us" },
    { name: "United Kingdom", tag: "gb" },
    { name: "Canada", tag: "ca" },
    { name: "France", tag: "fr" },
  ];

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [buttonstring, dataChanged] = useState("us");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=" +
        buttonstring +
        "&apiKey=3df90a82890b490ba7fe3739c01f6c17"
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, [buttonstring]);

  callback = (props) => {
    dataChanged(props);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SafeAreaView id="d">
          <SafeAreaView style={styles.safeArea}>
            <ButtonList parentCallback={this.callback} />
          </SafeAreaView>
          <React.Fragment>
            <FlatList
              styles={{ height: 250 }}
              //horizontal={true}
              scrollEnabled
              // pagingEnabled={true}
              // showsHorizontalScrollIndicator={false}
              // legacyImplementation={false}
              data={data}
              keyExtractor={({ id }, index) => index}
              renderItem={({ item }) => (
                <CardList item={item} navigation={handleNavigation} />
              )}
            />
          </React.Fragment>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
  function handleNavigation(item) {
    navigation.navigate("NewsDescription", {
      item: item,
    });
  }
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

export default HmScreen;
