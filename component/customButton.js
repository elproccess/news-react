import React, {useState, useEffect} from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {
  SafeArea,
  SafeAreaSafeAreaView,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const CustomButton = ({props}) => (
  <Button style={styles.item} onPress={this.props.onPress}>
    <Text style={styles.title}>{this.props.title}</Text>
  </Button>
);

const styles = StyleSheet.create({
  button: {},
});
