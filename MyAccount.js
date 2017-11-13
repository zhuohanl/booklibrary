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

export default class MyAccount extends Component {
  static navigationOptions = {
    title: "MyAccount",
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
                <Title>My Library Account</Title>
              </Body>
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
                      <Text style={styles.input_Title}>Selina Li</Text>
                    </Body>
                  </ListItem>
                  <ListItem>
                    <Text style={styles.input_Instruction}>Email: </Text>
                    <Text style={styles.input_Instruction}>
                      zhuohanl@andrew.cmu.edu
                    </Text>
                  </ListItem>
                  <ListItem>
                    <TouchableOpacity
                      style={styles.touchable_highlight}
                      onPress={() => {
                        this.props.navigation.navigate("LibraryRecord");
                      }}
                    >
                      <Text style={styles.input_Instruction1}>
                        On Loan Records
                      </Text>
                    </TouchableOpacity>
                  </ListItem>
                </List>
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
  }
});
