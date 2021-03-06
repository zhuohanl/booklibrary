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

import firebase from "./firebaseConfig";

export default class StudentLogin extends Component {
  static navigationOptions = {
    title: "StudentLogin",
    header: null,
    headerLeft: null
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      load: "",
      userId: ""
    };
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
                <Title>Student Login</Title>
              </Body>
            </Header>
          </StyleProvider>

          <StyleProvider style={getTheme(platform)}>
            <Container style={{ flex: 6 }}>
              <ScrollView>
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
                  <Text style={styles.input_Instruction5}>Username:</Text>
                  <TextInput
                    ref={"username"}
                    style={styles.inputbox_Login}
                    blurOnSubmit
                    placeholder="username"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={email => this.setState({ email })}
                    onSubmitEditing={() => this.clear()}
                  />
                </View>
                <View style={styles.loginContainer}>
                  <Text style={styles.input_Instruction5}>Password:</Text>
                  <TextInput
                    ref={"password"}
                    secureTextEntry={true}
                    style={styles.inputbox_Login}
                    placeholder="password"
                    autoCorrect={false}
                    onChangeText={password => this.setState({ password })}
                    onSubmitEditing={() => this.clear()}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    style={styles.Login_Button}
                    onPress={() =>
                      //{this.props.navigation.navigate("MyAccount")}
                      {
                        this.login();
                      }}
                  >
                    <Text style={styles.buttonText}>LOGIN</Text>
                  </Button>
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    style={styles.Clear_Button}
                    onPress={() =>
                      //{this.props.navigation.navigate("MyAccount")}
                      {
                        this.clear();
                      }}
                  >
                    <Text style={styles.buttonText2}>CLEAR</Text>
                  </Button>
                </View>
              </ScrollView>
            </Container>
          </StyleProvider>
        </View>
      </View>
    );
  }

  login = () => {
    this.setState({ error: "", loading: true });

    const { email, password } = this.state;

    if (this.state.email === "") {
      alert("Authentication failed, please enter email/password!");
    } else if (this.state.password === "") {
      alert("Authentication failed, please enter email/password!");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          // if (user) {
          this.setState({ error: "", loading: false });
          console.log("user.uid", user.uid);
          this.props.navigation.navigate("MyAccount", { userId: user.uid });
          // }
        })
        .catch(() => {
          this.setState({ error: "Authentication failed.", loading: false });
          alert("Authentication failed, please try again!");
        });

      // firebase.auth().onAuthStateChanged(user => {
      //   if (user) {
      //     this.setState({ userId: user.uid });
      //     console.log("this.state.userId", this.state.userId);
      //   }
      // });
    }
  };

  clear = () => {
    this.refs["username"].setNativeProps({ text: "" });
    this.refs["password"].setNativeProps({ text: "" });
    this.setState({ username: "" });
    this.setState({ password: "" });
  };
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

  input_Instruction4: {
    fontSize: 20,
    //color: '#FDFEFE',
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 15
  },

  input_Instruction5: {
    width: 100,
    fontSize: 16,
    //color: '#FDFEFE',
    fontFamily: "Apple SD Gothic Neo"
  },

  loginContainer: {
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 15
  },

  buttonContainer: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 5
  },

  inputbox_Login: {
    fontSize: 12,
    height: 35,
    width: 240,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row"
  },

  beta: {
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center"
  },

  Login_Button: {
    marginTop: 30,
    width: 120,
    height: 40,
    backgroundColor: "#990000",
    justifyContent: "center"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
    fontSize: 12
  },

  Clear_Button: {
    marginTop: 30,
    width: 120,
    height: 40,
    backgroundColor: "#D3D3D3",
    justifyContent: "center"
  },

  buttonText2: {
    color: "#000000",
    fontWeight: "bold",
    margin: 0,
    fontSize: 12
  }
});
