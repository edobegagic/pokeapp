import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

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
            backgroundColor: "white"
          }}
        >
          <TouchableOpacity
            style={styles.dugmeLeft}
            onPress={() => props.navigation.navigate("CodeReader")}
          >
            <Text style={styles.dugmeText}>CATCH MODE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dugmeRight}
            onPress={() => props.navigation.navigate("CodeResult")}
          >
            <Text style={styles.dugmeText}>CHECK POKéMON</Text>
          </TouchableOpacity>

          {/*
          <Button
            color="steelblue"
            title=" Catch Mode "
            onPress={() => props.navigation.navigate("CodeReader")}
          />
          <Button
            color="steelblue"
            title="Check Pokemon"
            onPress={() => props.navigation.navigate("CodeResult")}
          /> */}
        </View>
      );
    }
  }
);

const styles = StyleSheet.create({
  dugmeLeft: {
    height: 40,
    width: "50%",
    backgroundColor: "steelblue",
    borderTopRightRadius: 15,
    borderWidth: 1,
    borderColor: "#325e82",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 5
  },
  dugmeRight: {
    height: 40,
    width: "50%",
    backgroundColor: "steelblue",
    borderTopLeftRadius: 15,
    borderWidth: 1,
    borderColor: "#325e82",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5
  },
  dugmeText: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold"
  }
});

export default CodeNavigator;
