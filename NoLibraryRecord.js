/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  ListView,
  Platform,
  StyleSheet,
  View,
  Alert,
  AppRegistry,
  Image,
  TouchableHighlight,
  ScrollView,
  AsyncStorage,
  TextInput,
  DatePickerIOS,
  TouchableOpacity
} from "react-native";

import style from "./style";
import { StackNavigator, NavigationActions } from "react-navigation";
import {
  Container,
  Body,
  Header,
  Item,
  Input,
  Icon,
  Content,
  Footer,
  FooterTab,
  Button,
  Badge,
  StyleProvider,
  Text,
  Card,
  CardItem,
  Separator,
  Left,
  Right,
  Title,
  ListItem
} from "native-base";

import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";

import firebase from "./firebaseConfig";

export default class NoLibraryRecord extends Component {
  static navigationOptions = {
    title: "NoLibraryRecord",
    header: null
  };

  render() {
    return (
      <View style={style.pageContainer}>
        <View style={style.contentContainer}>
          <StyleProvider style={getTheme(platform)}>
            <Header>
              <Button transparent>
                <Icon
                  style={{ color: "#808080" }}
                  name="arrow-back"
                  onPress={() =>
                    this.props.navigation.navigate("StudentLogin", {
                      userId: this.props.navigation.state.params.userId
                    })}
                />
              </Button>

              <Body>
                <Title>No Library Account</Title>
              </Body>
            </Header>
          </StyleProvider>

          <ScrollView>
            <View style={styles.beta}>
              <Text style={styles.input_Title}>
                Sorry but your account is not found.
              </Text>
              <Text style={styles.input_Title}>
                You might have not borrowed any books from us.
              </Text>
              <Text style={styles.input_Title}>
                Please contact us for more details.
              </Text>
            </View>
            <View style={styles.beta}>
              <Button
                style={styles.Login_Button}
                onPress={() => {
                  this.props.navigation.navigate("Contact");
                }}
              >
                <Text style={styles.buttonText}>Contact Us</Text>
              </Button>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input_Title: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 20
  },
  beta: {
    marginTop: 20,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  Login_Button: {
    marginTop: 40,
    width: 180,
    height: 50,
    backgroundColor: "#990000",
    justifyContent: "center"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
    fontSize: 16
  }
});
