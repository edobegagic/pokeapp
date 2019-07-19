import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

class SearchBody extends Component {
  render() {
    const pokemonData = this.props.pokemonData;
    const ime = pokemonData.forms[0].name;
    return (
      <View style={styles.container}>
        <View style={styles.naslov}>
          <Text style={styles.ime}>{ime.toUpperCase()}</Text>
          <Text style={{ paddingLeft: 10, paddingTop: 3 }}>NR.</Text>
          <Text style={{ paddingTop: 3 }}>{pokemonData.base_experience}</Text>
        </View>
        <View>
          <Image
            style={{
              width: 230,
              height: 230,
              borderWidth: 2,
              borderColor: "lightcoral",
              borderRadius: 20
            }}
            source={{
              uri: pokemonData.sprites.front_default
            }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 5
            }}
          >
            <Text style={{ fontWeight: "bold", paddingBottom: 4 }}>STATS:</Text>
            <Text>
              type:
              {pokemonData.types[0].type.name}
            </Text>
            <Text>
              weight:
              {pokemonData.weight}
            </Text>
            <Text>
              special move:
              {pokemonData.moves[0].move.name}
            </Text>
          </View>
        </View>
        <View>
          <Text />

          <Button
            title="add to favourites"
            onPress={() => alert("sori, nisam stigoo :D ")}
          />
        </View>
      </View>
    );
  }
}
export default SearchBody;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  naslov: {
    flexDirection: "row",
    padding: 5,
    paddingTop: 15,
    paddingBottom: 15
  },
  ime: {
    fontSize: 25
  }
});
