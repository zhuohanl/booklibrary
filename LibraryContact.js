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

export default class LibraryContact extends Component {
  static navigationOptions = {
    title: "LibraryContact",
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
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
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <Icon
                  style={{ color: "#808080" }}
                  name="arrow-back"
                  onPress={() => this.props.navigation.navigate("Home")}
                />
              </Button>

              <Body>
                <Title>Contact us</Title>
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
                <Text style={style.heading3}>Contacts</Text>
              </ListItem>
              <View style={styles.contactView}>
                <Text style={style.heading4}>Nereshnee Shunmugam</Text>
                <Text>Manager of Admissions & Student Services</Text>
                <Text>Email: nshunmugam@australia.cmu.edu</Text>
                <Text>Phone: +61(0) 8 8110 9922</Text>
              </View>
              <View style={styles.contactView}>
                <Text style={style.heading4}>Zhuohang (Selina) Li</Text>
                <Text>Library Assistant</Text>
                <Text>Email: zhuohanl@australia.cmu.edu</Text>
              </View>
              <View style={styles.contactView}>
                <Text style={style.heading4}>Mustafa M Ghazanfar</Text>
                <Text>Library Assistant</Text>
                <Text>Email: zmghazanf@australia.cmu.edu</Text>
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

  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
