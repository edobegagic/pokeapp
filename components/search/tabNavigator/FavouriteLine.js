import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

export default class FavouriteLine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        key={this.props.broj} //props
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          paddingBottom: 10
        }}
      >
        <Image
          style={{
            height: 100,
            width: 100
          }}
          source={{ uri: this.props.slikaUri }} //props
        />

        <Text>{this.props.ime.toUpperCase()}</Text>
        <Text>{this.props.broj}</Text>
        <Button title="X" onPress={() => this.props.removePokemon()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
    paddingTop: 40
  },
  naslov: {
    padding: 5,
    paddingTop: 25,
    paddingBottom: 5,
    fontSize: 25,
    fontWeight: "bold"
  },
  podaci: {
    fontSize: 20,
    paddingLeft: "5%"
  }
});
