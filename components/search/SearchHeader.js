import React, { Component } from "react";
import { View, TextInput } from "react-native";

class SearchHeader extends Component {
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
          value={this.props.value}
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
