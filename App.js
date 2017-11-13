/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import HomeScreen from "./HomeScreen";
import SearchResultList from "./SearchResultList";
import SearchResultDetail from "./SearchResultDetail";
import StudentLogin from "./StudentLogin";
import MyAccount from "./MyAccount";
import LibraryRecord from "./LibraryRecord";
import LibraryHour from "./LibraryHour";
import LibraryContact from "./LibraryContact";

export default StackNavigator(
  {
    Home: { screen: HomeScreen },
    SearchResultList: { screen: SearchResultList },
    SearchResultDetail: { screen: SearchResultDetail },
    Login: { screen: StudentLogin },
    MyAccount: { screen: MyAccount },
    LibraryRecord: { screen: LibraryRecord },
    Hour: { screen: LibraryHour },
    Contact: { screen: LibraryContact }
  },
  {
    header: {
      left: null
    }
  }
);
