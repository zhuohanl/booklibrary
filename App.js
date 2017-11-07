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

export default StackNavigator(
  {
    // Home: { screen: HomeScreen },
    SearchResultList: { screen: SearchResultList },
    SearchResultDetail: { screen: SearchResultDetail }
  },
  {
    header: {
      left: null
    }
  }
);
