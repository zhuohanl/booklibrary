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

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "HomeScreen",
    header: null,
    headerLeft: null
  };

  constructor(props) {
    super(props);

    this.state = {
      keyword: [""]
    };
  }

  render() {
    let keyword = [];
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
                <Title>Home</Title>
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
                <Text style={styles.input_Instruction1}>Search & Find</Text>
                <Search
                  ref="search_box"
                  placeholder="e.g. security in computing"
                  onChangeText={text => {
                    keyword.push(text.toLowerCase());
                    this.setState({ keyword });
                  }}
                  searchIconCollapsedMargin={160}
                  placeholderCollapsedMargin={140}
                  onSearch={() => {
                    this.props.navigation.navigate("SearchResultList", {
                      keyword: this.state.keyword
                    });
                  }}
                />
                <List>
                  <ListItem>
                    <TouchableOpacity
                      style={styles.touchable_highlight}
                      onPress={() => {
                        this.props.navigation.navigate("Login");
                      }}
                    >
                      <Text style={styles.input_Instruction}>
                        View My Library Records
                      </Text>
                    </TouchableOpacity>
                  </ListItem>
                  <ListItem>
                    <TouchableOpacity
                      style={styles.touchable_highlight}
                      onPress={() => {
                        this.props.navigation.navigate("Hour");
                      }}
                    >
                      <Text style={styles.input_Instruction}>Library Hour</Text>
                    </TouchableOpacity>
                  </ListItem>
                  <ListItem>
                    <TouchableOpacity
                      style={styles.touchable_highlight}
                      onPress={() => {
                        this.props.navigation.navigate("Contact");
                      }}
                    >
                      <Text style={styles.input_Instruction}>Contact Us</Text>
                    </TouchableOpacity>
                  </ListItem>
                  <ListItem>
                    <TouchableOpacity
                      style={styles.touchable_highlight}
                      onPress={() => {
                        this.props.navigation.navigate("FAQ");
                      }}
                    >
                      <Text style={styles.input_Instruction}>
                        Frequently Asked Questions
                      </Text>
                    </TouchableOpacity>
                  </ListItem>
                </List>
              </View>
            </Container>
          </StyleProvider>
          <Container style={styles.beta}>
            <Button
              style={styles.Login_Button}
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
              //{this.login} //TODO: need to enable
            >
              <Text style={styles.buttonText}>Student Login</Text>
            </Button>
          </Container>
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

  inputNormal: {
    height: 24,
    width: 280,
    borderRadius: 5,
    borderWidth: 1,
    textAlign: "left",
    margin: 3,
    marginBottom: 10,
    alignSelf: "center",
    borderColor: "#cccccc",
    fontSize: 12,
    paddingHorizontal: 6
  },

  beta: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20
  },

  Login_Button: {
    width: 120,
    height: 30,
    backgroundColor: "#990000",
    justifyContent: "center"
  },

  touchable_highlight: {
    height: 40,
    flexDirection: "row",
    borderRadius: 20
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
    fontSize: 12
  }
});
