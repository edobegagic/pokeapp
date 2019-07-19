import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

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
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "steelblue"
          }}
        >
          <Button
            color="steelblue"
            title=" pokémon "
            onPress={() => props.navigation.navigate("SearchTab")}
          />
          <Button
            color="steelblue"
            title="favourites"
            onPress={() => props.navigation.navigate("FavouritesTab")}
          />
        </View>
      );
    }
  }
);

export default SearchTabNavigator;
