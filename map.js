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

export default class Map extends Component {
  static navigationOptions = {
    title: "Map",
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -34.92866,
        longitude: 138.600993,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
        // latitudeDelta: 0.0922,
        // longitudeDelta: 0.0421
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
          <MapView style={styles.map} region={this.state.region}>
            <MapView.Marker
              coordinate={this.state.coordinate}
              title="Carnegie Mellon University Australia Library"
              description="Torrens Building, 220 Victoria Square, Adelaide, SA"
            />
          </MapView>
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

  map: {
    position: "absolute",
    top: 65,
    left: 0,
    right: 0,
    bottom: 0
  }
});
