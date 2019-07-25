import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "react-navigation";
import SearchTab from "./tabNavigator/SearchTab";
import FavouritesTab from "./tabNavigator/FavouritesTab";

const SearchTabNavigator = createBottomTabNavigator(
  {
    SearchTab: { screen: SearchTab },
    FavouritesTab: { screen: FavouritesTab }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={styles.dugmeLeft}
            onPress={() => props.navigation.navigate("SearchTab")}
          >
            <Text style={styles.dugmeText}>POKéMON</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dugmeRight}
            onPress={() => props.navigation.navigate("FavouritesTab")}
          >
            <Text style={styles.dugmeText}>FAVOURITES</Text>
          </TouchableOpacity>
          {/*} <Button
            color="steelblue"
            title=" pokémon "
            onPress={() => props.navigation.navigate("SearchTab")}
          />
          <Button
            color="steelblue"
            title="favourites"
            onPress={() => props.navigation.navigate("FavouritesTab")}
        />*/}
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

export default SearchTabNavigator;
