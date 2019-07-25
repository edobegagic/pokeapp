import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";

var backgroundImage = require("../../img/pokedex2.png");
var pokePozadina = require("../../img/pokepozadina.png");

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
            top: 0,
            left: 0,
            // paddingTop: 110,
            height: "80%",
            width: "100%"
          }}
        >
          <View style={{ height: 24, backgroundColor: "#E6360E" }} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 25,
              paddingBottom: 10,
              backgroundColor: "#E44623"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                P O K é
              </Text>
              <Text style={{ fontSize: 20, color: "#2e2e2e" }}> A P P</Text>
            </View>
          </View>

          <View>
            <Image
              source={pokePozadina}
              style={{ height: 40, width: "100%" }}
            />
          </View>

          <ImageBackground
            source={backgroundImage}
            style={{ paddingTop: 50, flex: 1, height: null, width: null }}
          />
        </View>

        <View
          style={{
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={styles.dugmeLeft}
            onPress={() => this.props.navigation.navigate("SearchTabNavigator")}
          >
            <Text style={styles.dugmeText}>POKéDEX</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dugmeRight}
            onPress={() => this.props.navigation.navigate("CodeNavigator")}
          >
            <Text style={styles.dugmeText}>CATCH 'EM</Text>
          </TouchableOpacity>
          {/*
          <Button
            title="pokédex"
            color="steelblue"
            onPress={() => this.props.navigation.navigate("SearchTabNavigator")}
          />
        
          <Button
            title="catch 'em"
            color="steelblue"
            onPress={() => this.props.navigation.navigate("CodeNavigator")}
          />*/}
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
  },
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

export default HomeScreen;
