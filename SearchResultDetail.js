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
  List,
  ListItem
} from "native-base";

import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";

import firebase from "./firebaseConfig";

export default class SearchResultDetail extends Component {
  static navigationOptions = {
    title: "SearchResultDetail",
    header: null
  };
  constructor(props) {
    super(props);
    this.ref = firebase.database().ref();
    this.bookKey = this.props.navigation.state.params.bookKey;
    this.book = "";
    this.copies = [];
    this.state = {};
  }
  componentWillMount() {
    console.log("this.bookKey", this.bookKey);
    this.ref.child("books/" + this.bookKey).on("value", snap => {
      let item = snap.val();
      item.key = snap.key;
      this.book = item;
    });

    this.ref.child("books/" + this.bookKey + "/copies").on("value", snap => {
      snap.forEach(child => {
        let copy = child.val();
        copy.key = child.key;
        this.copies.push(copy);
      });
    });

    console.log("this.book", this.book);
    console.log("this.copies", this.copies);
  }

  render() {
    console.log("this.book in render()", this.book);

    const tableData1 = [
      ["Author:", this.book.authors],
      ["Format:", this.book.format],
      ["Language:", this.book.language],
      ["Published:", this.book.publisher],
      ["Edition:", this.book.edition]
    ];

    let copies = this.copies;
    let countTotal = copies.length;
    let countAvailable = 0;
    let countOnloan = 0;
    let countReferenceOnly = 0;

    for (var i = 0; i < copies.length; i++) {
      if (copies[i] == "available") {
        countAvailable++;
      } else if (copies[i] == "onloan") {
        countOnloan++;
      } else if (copies[i] == "referenceonly") {
        countReferenceOnly++;
      }
    }

    const tableData2 = [
      ["Total:", countTotal + " copies"],
      ["Available:", countAvailable + " copies"],
      ["On loan:", countOnloan + " copies"],
      ["Reference only:", countReferenceOnly + " copies"]
    ];
    const widthArr = [120, 220];

    return (
      <View style={style.pageContainer}>
        <View style={style.contentContainer}>
          <StyleProvider style={getTheme(platform)}>
            <Header>
              <Button transparent>
                <Icon
                  style={{ color: "#808080" }}
                  name="arrow-back"
                  onPress={() =>
                    this.props.navigation.navigate("SearchResultList")}
                />
              </Button>

              <Body>
                <Title>Search Result Detail</Title>
              </Body>
            </Header>
          </StyleProvider>

          <ScrollView>
            <View>
              <Text style={style.heading1}>
                Search Results of "security in computing":
              </Text>

              <View style={style.separator} />

              <View style={style.itemView}>
                <Image
                  style={style.liIcon}
                  source={require("./book-icon.png")}
                />
              </View>

              <Text style={style.heading2}>{this.book.title}</Text>

              <Table
                style={style.table_Container}
                borderStyle={{ borderWidth: 0, borderColor: "#ffffff" }}
              >
                <TableWrapper style={{ width: 250 }}>
                  <Rows
                    data={tableData1}
                    style={style.table_Row}
                    widthArr={widthArr}
                    textStyle={style.table_Text}
                  />
                </TableWrapper>
              </Table>

              <ListItem itemDivider>
                <Text>Availability</Text>
              </ListItem>

              <Table
                style={style.table_Container}
                borderStyle={{ borderWidth: 0, borderColor: "#ffffff" }}
              >
                <TableWrapper style={{ width: 250 }}>
                  <Rows
                    data={tableData2}
                    style={style.table_Row}
                    widthArr={widthArr}
                    textStyle={style.table_Text}
                  />
                </TableWrapper>
              </Table>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
