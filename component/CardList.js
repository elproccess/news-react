import React, { useState, useEffect, useCallback } from "react";
import {
  Avatar,
  Button,
  Card,
  Colors,
  Title,
  Paragraph,
  IconButton,
} from "react-native-paper";
import { Text, StyleSheet, SafeAreaView, Modal, Pressable } from "react-native";

import CardDescription from "../component/CardDescription";

const CardList = ({ navigation, item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView style={styles.centeredView}>
          <SafeAreaView style={styles.modalView}>
            <SafeAreaView style={styles.rowC}>
              <IconButton
                styles={styles.icon_button}
                icon="camera"
                color={Colors.red500}
                size={30}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <Text style={styles.modalText} numberOfLines={1}>
                {item.title}
              </Text>
            </SafeAreaView>
            <Card>
              <Card.Content>
                <Card.Cover source={{ uri: item.urlToImage }} />
                <Title>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
              <Card.Actions></Card.Actions>
            </Card>
          </SafeAreaView>
        </SafeAreaView>
      </Modal>
      <Card style={styles.container}>
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.source.name}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.urlToImage }} />
        <Card.Actions>
          <Button
            onPress={() => navigation(item)}
            style={styles.button_description}
          >
            <Text style={styles.text}>description</Text>
          </Button>
          <Button onPress={() => setModalVisible(!modalVisible)}>
            PopupScreen
          </Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "white",
  },
  button_description: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 1,
    paddingHorizontal: 15,
    borderRadius: 50,
    elevation: 5,
    backgroundColor: "white",
    opacity: 0.7,
  },

  text: {
    color: "#3058db",
  },

  modalText: {
    flex: 1,
    fontSize: 25,
    paddingVertical: 13,
  },

  icon_button: {
    flex: 1,
    color: "#3058db",
  },

  rowC: {
    flexDirection: "row",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CardList;
