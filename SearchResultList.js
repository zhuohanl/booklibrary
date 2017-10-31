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

export default class SearchResultList extends Component {
  static navigationOptions = {
    title: "SearchResultList",
    header: null
  };
  constructor(props) {
    super(props);
    this.ref = firebase.database().ref();
    this.items = [];
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds,
      filterIn: ["l"]
    };
  }
  componentDidMount() {
    this.ref.child("books").on("value", snap => {
      snap.forEach(child => {
        let item = child.val();
        item.key = child.key;
        this.items.push(item);
        console.log("this.items", this.items);
        console.log("this.items.length", this.items.length);
        const ds = this.state.dataSource;
        this.setState({
          dataSource: ds.cloneWithRows(this.items)
        });
      });
    });

    console.log("this.items", this.items);
  }

  /**
   * Apply the filter here
   */
  isFilteredIn(item) {
    const { filterIn } = this.state;

    //Reduce filters are cool! TODO: Talk about them in class
    return filterIn.reduce((acc, curr) => {
      if (acc === true) {
        return true;
      }

      if (item.title.toLowerCase().indexOf(curr) > -1) {
        return true;
      }

      return false;
    }, false);
  }

  renderItem(item) {
    console.log("item.copies.key", item.copies.key);
    return (
      <View>
        <ListItem style={style.li}>
          <Image style={style.liIcon} source={require("./book-icon.png")} />
          <Body style={style.liItemBody}>
            <Text style={style.liTextHeading}>{item.title}</Text>
            <Text style={style.liText}>by {item.authors}</Text>
            <Text style={style.liText}>
              {item.year}, {item.edition}
            </Text>
            <Text style={style.liText}>Book: ON LOAN</Text>
          </Body>
        </ListItem>
        <View style={style.separator} />
      </View>
    );
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
                <Title>Search Result List</Title>
              </Body>
            </Header>
          </StyleProvider>

          <ScrollView>
            <View>
              <Text style={style.heading1}>
                Search Results of "security in computing":
              </Text>
              <View style={style.separator} />
              <ListView
                dataSource={this.state.dataSource}
                renderRow={rowData => {
                  //Remove items that don't fit out IN filters
                  // if (!this.isFilteredIn(rowData)) {
                  //   return null;
                  // }

                  return this.renderItem(rowData);
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
