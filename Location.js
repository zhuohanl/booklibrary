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

import MapView from "react-native-maps";

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

export default class Location extends Component {
  static navigationOptions = {
    title: "Location",
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -34.92866,
        longitude: 138.600993,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      coordinate: {
        latitude: -34.92866,
        longitude: 138.600993
      }
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={style.pageContainer}>
        <View style={style.contentContainer}>
          <StyleProvider style={getTheme(platform)}>
            <Header>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon
                  style={{ color: "#808080" }}
                  name="arrow-back"
                  onPress={() => this.props.navigation.goBack()}
                />
              </Button>

              <Body>
                <Title>Location</Title>
              </Body>
            </Header>
          </StyleProvider>

          <ScrollView>
            <View style={style.form_Container}>
              <Text style={styles.input_Instruction2}>
                Carnegie Mellon University
              </Text>
              <Text style={styles.input_Instruction2}>Australia</Text>
              <Text style={styles.input_Instruction3}>Library</Text>
              <ListItem itemDivider>
                <Text style={style.heading3}>Location</Text>
              </ListItem>
              <View style={styles.contactView}>
                <Text>Torrens Building</Text>
                <Text>220 Victoria Square</Text>
                <Text>Adelaide, South Australia</Text>
                <Text>5000, Australia</Text>
              </View>

              <View style={styles.beta}>
                <Button
                  style={styles.Login_Button}
                  onPress={() => {
                    this.props.navigation.navigate("map");
                  }}
                >
                  <Text style={styles.buttonText}>View Map</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input_Instruction: {
    fontSize: 20,
    textAlign: "left",
    //color: '#FDFEFE',
    // fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 4
  },

  input_Instruction2: {
    fontSize: 24,
    textAlign: "left",
    color: "#990000",
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 4
  },

  input_Instruction3: {
    fontSize: 24,
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 4
  },

  contactView: {
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10
  },

  beta: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
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
