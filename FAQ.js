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

// import MapView from "react-native-maps";

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

export default class FAQ extends Component {
  static navigationOptions = {
    title: "FAQ",
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {};
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
                <Title>FAQ</Title>
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
                <Text style={style.heading3}>Frequently Asked Questions</Text>
              </ListItem>
              <View style={styles.contactView}>
                <Text style={style.heading4}>
                  Q: Why I can log in but my library account page is empty?
                </Text>
                <Text style={style.normalText}>
                  A: You can log in because you are CMUA student and we use
                  central authentication system. You account page is empty
                  because you might have never borrowed any books before. We
                  will create your records when you borrow books for the first
                  time.
                </Text>
              </View>
              <View style={styles.contactView}>
                <Text style={style.heading4}>
                  Q: Can I borrow books online?
                </Text>
                <Text style={style.normalText}>
                  A: Currently we do not provide online borrowing. Please come
                  to the library for book issuing.
                </Text>
              </View>
              <View style={styles.contactView}>
                <Text style={style.heading4}>
                  Q: How many books may I borrow each time?
                </Text>
                <Text style={style.normalText}>
                  A: You may borrow up to 5 books each time.
                </Text>
              </View>
              <View style={styles.contactView}>
                <Text style={style.heading4}>
                  Q: How long may I borrow the books for?
                </Text>
                <Text style={style.normalText}>
                  A: For each borrowing, you can keep the book on loan for TWO
                  weeks.
                </Text>
              </View>
              <View style={styles.contactView}>
                <Text style={style.heading4}>
                  Q: Will I get reminder when the book becomes due?
                </Text>
                <Text style={style.normalText}>
                  A: Yes. Our library assistants will send you email reminders
                  when your book becomes due.
                </Text>
              </View>
              <View style={styles.contactView}>
                <Text style={style.heading4}>
                  Q: Can I reissue the book when it becomes due?
                </Text>
                <Text style={style.normalText}>
                  A: Yes. You may reissue each book for a consecutive of THREE
                  times. We suggest you bring the book to the library to reissue
                  it.
                </Text>
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
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    justifyContent: "center"
  },

  map: {
    flex: 1
  }
});
