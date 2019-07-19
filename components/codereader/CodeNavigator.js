import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { createBottomTabNavigator } from "react-navigation";
import CodeReader from "./CodeReader";
import CodeResult from "./CodeResult";

const CodeNavigator = createBottomTabNavigator(
  {
    CodeReader: { screen: CodeReader },
    CodeResult: { screen: CodeResult }
  },

  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "steelblue"
          }}
        >
          <Button
            color="steelblue"
            title=" Catch Mode "
            onPress={() => props.navigation.navigate("CodeReader")}
          />
          <Button
            color="steelblue"
            title="Check Pokemon"
            onPress={() => props.navigation.navigate("CodeResult")}
          />
        </View>
      );
    }
  }
);

export default CodeNavigator;
