import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity
} from "react-native";

var backgroundImage = require("../../img/pokedex2.png");

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.homeScreenView}>
        <View
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            // paddingTop: 110,
            height: "80%",
            width: "100%"
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#E44623",
                fontWeight: "bold",
                fontFamily: "monospace"
              }}
            >
              POKéAPP
            </Text>
          </View>
          <ImageBackground
            source={backgroundImage}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "steelblue"
          }}
        >
          <Button
            title="pokédex"
            color="steelblue"
            onPress={() => this.props.navigation.navigate("SearchTabNavigator")}
          />

          <Button
            title="catch 'em"
            color="steelblue"
            onPress={() => this.props.navigation.navigate("CodeNavigator")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScreenView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#FBFCFE"
  }
});

export default HomeScreen;
