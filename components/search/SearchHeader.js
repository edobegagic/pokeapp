import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppRegistry, TextInput } from "react-native";

class SearchHeader extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            paddingLeft: 15
          }}
          placeholder="enter pokemon name"
          onChangeText={this.props.onChangeText}
          returnKeyType="search"
          onSubmitEditing={this.props.pokemonSearch}
        />
      </View>
    );
  }
}
export default SearchHeader;
