import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  ScrollView,
  AsyncStorage,
  TextInput,
  DatePickerIOS,
  TouchableOpacity,
  Switch,
  AlertIOS
} from "react-native";
import { StackNavigator } from "react-navigation";
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
  List,
  ListItem,
  Separator,
  Left,
  Right,
  Title,
  Segment,
  CheckBox
} from "native-base";

import style from "./style";
import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";

import Search from "react-native-search-box";
//import SearchBar from "react-native-search-bar";

import firebase from "./firebaseConfig";

export default class MyAccount extends Component {
  static navigationOptions = {
    title: "MyAccount",
    header: null,
    headerLeft: null
  };

  constructor(props) {
    super(props);

    this.ref = firebase.database().ref();

    const userId = this.props.navigation.state.params.userId;
    console.log("MyAccount: userId", userId);

    this.loans = [];

    this.state = {
      // userId: "",
      userId: userId,
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  componentWillMount() {
    let firstName = "";
    let lastName = "";
    let email = "";
    let loans = "";

    //https://books-98796.firebaseio.com/borrowers/GeMC2xfSaIWfmueTWrYwYeL7jrp2/firstName
    this.ref.child("borrowers/" + this.state.userId).on("value", snap => {
      console.log(snap.val());

      if (snap.exists()) {
        let user = snap.val();
        firstName = user.firstName;
        lastName = user.lastName;
        email = user.email;

        this.setState({ firstName });
        this.setState({ lastName });
        this.setState({ email });
        // loans = user.loans;
        // console.log("user.loans", user.loans);
      }
    });
  }

  alertLogout = () => {
    AlertIOS.alert("You are going to log out", "Do you wish to continue?", [
      {
        text: "Yes",
        onPress: () => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              // Sign-out successful.
              console.log("Sign out successfully");
              this.props.navigation.navigate("Home");
            })
            .catch(error => {
              // An error happened.
              console.log(error);
            });
        }
      },
      {
        text: "Cancel",
        onPress: () => console.log("User pressed cancel")
      }
    ]);
  };

  alertLogout2 = () => {
    AlertIOS.alert(
      "You are going to log out and go to Frequently Asked Questions page",
      "Do you wish to continue?",
      [
        {
          text: "Yes",
          onPress: () => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                // Sign-out successful.
                console.log("Sign out successfully");
                this.props.navigation.navigate("FAQ");
              })
              .catch(error => {
                // An error happened.
                console.log(error);
              });
          }
        },
        {
          text: "Cancel",
          onPress: () => console.log("User pressed cancel")
        }
      ]
    );
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
                  onPress={() => this.alertLogout()}
                />
              </Button>

              <Body>
                <Title>My Library Account</Title>
              </Body>

              <Button
                style={styles.Login_Button}
                onPress={() => this.alertLogout()}
              >
                <Text style={styles.buttonText}>Logout</Text>
              </Button>
            </Header>
          </StyleProvider>

          <StyleProvider style={getTheme(platform)}>
            <Container style={{ flex: 6 }}>
              <View style={style.form_Container}>
                <List>
                  <ListItem>
                    <Image
                      style={styles.profileIcon}
                      source={require("./icon/profile-icon.png")}
                    />
                    <Body style={styles.profileBody}>
                      <Text style={styles.input_Title}>
                        {this.state.firstName} {this.state.lastName}
                      </Text>
                    </Body>
                  </ListItem>
                  <ListItem>
                    <Text style={styles.input_Instruction}>
                      Email: {this.state.email}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <TouchableOpacity
                      style={styles.touchable_highlight}
                      onPress={() => {
                        this.props.navigation.navigate("LibraryRecord", {
                          userId: this.props.navigation.state.params.userId
                        });
                      }}
                    >
                      <Text style={styles.input_Instruction1}>
                        On Loan Records
                      </Text>
                    </TouchableOpacity>
                  </ListItem>
                </List>
                <TouchableOpacity onPress={() => this.alertLogout2()}>
                  <Text style={styles.noteText}>Why is my page empty?</Text>
                </TouchableOpacity>
              </View>
            </Container>
          </StyleProvider>
        </View>
      </View>
    );
  }
}

add = () => {};

const styles = StyleSheet.create({
  input_Title: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 20
  },

  input_Instruction: {
    fontSize: 20,
    textAlign: "left",
    //color: '#FDFEFE',
    // fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 4
  },

  input_Instruction1: {
    fontSize: 20,
    textAlign: "left",
    //color: '#FDFEFE',
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 4
  },

  profileIcon: {
    width: 100,
    height: 100
  },

  profileBody: {
    marginLeft: 20,
    width: 280
  },

  noteText: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 12,
    color: "#0000ff",
    fontFamily: "AvenirNext-Italic",
    textDecorationLine: "underline"
  },

  Login_Button: {
    width: 60,
    height: 30,
    backgroundColor: "#990000"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
    fontSize: 12,
    textAlign: "center"
  }
});
