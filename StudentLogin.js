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

export default class StudentLogin extends Component {
  static navigationOptions = {
    title: "StudentLogin",
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
              <Button transparent>
                <Icon
                  style={{ color: "#808080" }}
                  name="arrow-back"
                  onPress={() => this.props.navigation.navigate("Home")}
                />
              </Button>

              <Body>
                <Title>Student Login</Title>
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
              <View style={styles.loginContainer}>
                <Text style={styles.input_Instruction4}>Student Login</Text>
              </View>
              <View style={styles.loginContainer}>
                <Text style={styles.input_Instruction5}>Username: </Text>
                <TextInput
                  style={styles.inputbox_Login}
                  multiline
                  blurOnSubmit
                  placeholder="username"
                  onChangeText={email => this.setState({})}
                />
              </View>
              <View style={styles.loginContainer}>
                <Text style={styles.input_Instruction5}>Password: </Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.inputbox_Login}
                  placeholder="password"
                  autoCorrect={false}
                  onChangeText={password => this.setState({})}
                />
              </View>
              <View style={styles.loginContainer}>
                <Button
                  style={styles.Login_Button}
                  onPress={() => {
                    this.props.navigation.navigate("MyAccount");
                  }}
                  //{this.login} //TODO: need to enable
                >
                  <Text style={styles.buttonText}>LOGIN</Text>
                </Button>
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

  input_Instruction4: {
    fontSize: 20,
    //color: '#FDFEFE',
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 15
  },

  input_Instruction5: {
    width: 120,
    fontSize: 20,
    //color: '#FDFEFE',
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 15
  },

  Login_Button: {
    width: 120,
    height: 30,
    backgroundColor: "#990000",
    justifyContent: "center"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
    fontSize: 12
  },

  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 15
  },

  inputbox_Login: {
    fontSize: 15,
    height: 35,
    width: 200,
    padding: 7,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 15
  },

  beta: {
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center"
  },

  Login_Button: {
    marginTop: 30,
    width: 120,
    height: 30,
    backgroundColor: "#990000",
    justifyContent: "center"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
    fontSize: 12
  }
});
