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
  Switch
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

// import firebase from "./firebaseConfig";

export default class WelcomePage extends Component {
  static navigationOptions = {
    title: "WelcomePage",
    header: null,
    headerLeft: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.pageContainer}>
        <View style={style.contentContainer}>
          <StyleProvider style={getTheme(platform)}>
            <Header>
              {/*<Left>
                                    <Button transparent>
                                        <Icon name='arrow-back' />
                                    </Button>
                                </Left>*/}
              <Body>
                <Title>Welcome</Title>
              </Body>
            </Header>
          </StyleProvider>

          <StyleProvider style={getTheme(platform)}>
            <Container style={{ flex: 6 }}>
              <View style={style.form_Container}>
                <Text style={styles.input_Instruction2}>
                  Carnegie Mellon University
                </Text>
                <Text style={styles.input_Instruction2}>Australia</Text>
                <Text style={styles.input_Instruction3}>Library</Text>
              </View>
              <View style={styles.beta}>
                <Text style={styles.input_Instruction3}>Welcome!</Text>
              </View>
              <View style={styles.beta}>
                <Button
                  style={styles.Login_Button}
                  onPress={() => {
                    this.props.navigation.navigate("HomePublic");
                  }}
                >
                  <Text style={styles.buttonText}>Public Entrance</Text>
                </Button>
              </View>
              <View style={styles.beta}>
                <Button
                  style={styles.Login_Button}
                  onPress={() => {
                    this.props.navigation.navigate("Login");
                  }}
                >
                  <Text style={styles.buttonText}>Student Login</Text>
                </Button>
              </View>
            </Container>
          </StyleProvider>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SearchBox: {
    flex: 1
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
    margin: 16,
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
