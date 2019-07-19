import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import HomeScreen from "./components/home/HomeScreen";
import SearchTabNavigator from "./components/search/SearchTabNavigator";
import CodeNavigator from "./components/codereader/CodeNavigator";

const App = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    SearchTabNavigator: { screen: SearchTabNavigator },
    CodeNavigator: { screen: CodeNavigator }
  },
  { initialRouteName: "HomeScreen" }
);

export default createAppContainer(App);
