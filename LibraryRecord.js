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
  TouchableOpacity,
  AlertIOS
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

export default class LibraryRecord extends Component {
  static navigationOptions = {
    title: "LibraryRecord",
    header: null
  };

  constructor(props) {
    super(props);
    this.ref = firebase.database().ref();

    const userId = this.props.navigation.state.params.userId;
    this.loans = [];
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds,
      userId: userId
    };
  }

  componentWillMount() {
    //https://books-98796.firebaseio.com/borrowers/GeMC2xfSaIWfmueTWrYwYeL7jrp2/loans/loan1
    this.ref
      .child("borrowers/" + this.state.userId + "/loans")
      .on("value", snap => {
        snap.forEach(child => {
          let loan = {};
          let item = child.val();
          loan["key"] = child.key;
          loan["beginDate"] = item.beginDate;
          // loan["beginYear"] = item.beginYear;
          // loan["beginMonth"] = item.beginMonth;
          // loan["beginDay"] = item.beginDay;
          loan["bookId"] = item.bookId;

          this.ref.child("books/" + item.bookId).on("value", snap => {
            let item2 = snap.val();
            loan["bookTitle"] = item2.title;
            loan["bookAuthors"] = item2.authors;
            loan["bookYear"] = item2.year;
            loan["bookEdition"] = item2.edition;

            this.loans.push(loan);

            const ds = this.state.dataSource;
            this.setState({
              dataSource: ds.cloneWithRows(this.loans)
            });
          });
        });
      });
    console.log("this.loans", this.loans);
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
    // let beginDate = new Date(item.beginYear, item.beginMonth, item.beginDay);
    // let beginDateString = `${item.beginYear}/${item.beginMonth}/${item.beginDay}`;

    let beginDateString = item.beginDate;
    let beginDate = new Date(beginDateString);

    let tempDate = beginDate;
    let dueDate = new Date(
      tempDate.setTime(tempDate.getTime() + 14 * 86400000)
    );
    let dueDateString = `${dueDate.getFullYear()}/${dueDate.getMonth() +
      1}/${dueDate.getDate()}`;

    let today = new Date();
    let timeDiff = Math.abs(dueDate.getTime() - today.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    let status = "";
    if (diffDays === 0) {
      status = "due today";
    } else if (diffDays > 0) {
      status = `overdue for ${diffDays} days`;
    } else {
      status = `due in ${diffDays} days`;
    }

    console.log("item", item);
    return (
      <View>
        <ListItem style={style.li}>
          <Image
            style={style.liIcon}
            source={require("./icon/book-icon.png")}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate();
            }}
          >
            <Body style={style.liItemBody}>
              <Text style={style.liTextHeading}>{item.bookTitle}</Text>
              <Text style={style.liText}>by {item.bookAuthors}</Text>
              <Text style={style.liText}>
                {item.bookYear}, {item.bookEdition}
              </Text>
              <Text style={style.liText}>Borrow date: {beginDateString}</Text>
              <Text style={style.liText}>Due date: {dueDateString}</Text>
              <Text style={style.liText}>Status: {status}</Text>
            </Body>
          </TouchableOpacity>
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
                  onPress={() =>
                    this.props.navigation.navigate("MyAccount", {
                      userId: this.props.navigation.state.params.userId
                    })}
                />
              </Button>

              <Body>
                <Title>My On Loan Records</Title>
              </Body>

              <Button
                style={styles.Login_Button}
                onPress={() => this.alertLogout()}
              >
                <Text style={styles.buttonText}>Logout</Text>
              </Button>
            </Header>
          </StyleProvider>

          <ScrollView>
            <View>
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
}

const styles = StyleSheet.create({
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
