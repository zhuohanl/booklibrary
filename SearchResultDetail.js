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
    this.state = {
      keyword: this.props.navigation.state.params.keyword,
      bookKey: this.props.navigation.state.params.bookKey,
      book: null,
      copies: []
    };
  }
  componentWillMount() {
    console.log("this.state.bookKey", this.state.bookKey);
    let book = null;
    let copies = [];

    let icon_address = "./icon/book-icon.png";
    this.ref.child("books/" + this.state.bookKey).on("value", snap => {
      let item = snap.val();
      item.key = snap.key;
      book = item;

      if (typeof item.icon !== "undefined") {
        icon_address = item.icon;
      }
      book["icon_address"] = icon_address;
    });

    this.ref
      .child("books/" + this.state.bookKey + "/copies")
      .on("value", snap => {
        snap.forEach(child => {
          let copy = child.val();
          copy.key = child.key;
          copies.push(copy);
        });
      });

    this.setState({
      book,
      copies
    });
  }

  render() {
    console.log("this.state.book", this.state.book);
    console.log("this.state.copies", this.state.copies);

    console.log("this.state.copies[0].key", this.state.copies[0].key);

    let book = this.state.book;

    const tableData1 = [
      ["Author:", book.authors],
      ["Format:", book.format],
      ["Language:", book.language],
      ["Published:", book.publisher],
      ["Edition:", book.edition]
    ];

    let copies = this.state.copies;
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

    let src = require("./icon/book-icon.png");
    if (book.icon_address !== "./icon/book-icon.png") {
      src = { uri: book.icon_address };
    }

    return (
      <View style={style.pageContainer}>
        <View style={style.contentContainer}>
          <StyleProvider style={getTheme(platform)}>
            <Header>
              <Button
                transparent
                onPress={() =>
                  this.props.navigation.navigate("SearchResultList", {
                    keyword: this.props.navigation.state.params.keyword
                  })}
              >
                <Icon
                  style={{ color: "#808080" }}
                  name="arrow-back"
                  onPress={() =>
                    this.props.navigation.navigate("SearchResultList", {
                      keyword: this.props.navigation.state.params.keyword
                    })}
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
                Search Results of {this.state.keyword}:
              </Text>

              <View style={style.separator} />

              <View style={style.itemView}>
                <Image style={style.liIcon2} source={src} />
              </View>

              <Text style={style.heading2}>{book.title}</Text>

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
