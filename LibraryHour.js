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

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";

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

export default class LibraryHour extends Component {
  static navigationOptions = {
    title: "LibraryHour",
    header: null
  };

  render() {
    const tableData = [
      ["Monday - Friday:", "12pm - 1pm"],
      ["", "5pm - 6pm"],
      ["", ""],
      ["", ""],
      ["Saturday - Sunday:", "closed"],
      ["", ""],
      ["", ""],
      ["Public Holidays:", "closed"]
    ];

    const widthArr = [180, 150];

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
                <Title>Library Hour</Title>
              </Body>
            </Header>
          </StyleProvider>

          <View style={style.form_Container}>
            <Text style={styles.input_Instruction2}>
              Carnegie Mellon University
            </Text>
            <Text style={styles.input_Instruction2}>Australia</Text>
            <Text style={styles.input_Instruction3}>Library</Text>
            <ListItem itemDivider>
              <Text style={style.heading3}>Opening Hours</Text>
            </ListItem>
            <Table
              style={style.table_Container}
              borderStyle={{ borderWidth: 0, borderColor: "#ffffff" }}
            >
              <TableWrapper style={{ width: 250 }}>
                <Rows
                  data={tableData}
                  style={style.table_Row}
                  widthArr={widthArr}
                  textStyle={style.table_Text}
                />
              </TableWrapper>
            </Table>
          </View>
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
  }
});
