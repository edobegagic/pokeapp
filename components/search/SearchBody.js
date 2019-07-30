import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  AsyncStorage
} from "react-native";

class SearchBody extends Component {
  favoriti = [];

  render() {
    const storeData = async () => {
      this.favoriti.push({ slikaUri, ime, broj });
      // console.log("test1");
      // console.log(this.favoriti);
      await AsyncStorage.setItem("myList", JSON.stringify(this.favoriti));
      alert(`You added ${ime.toUpperCase()} to FAVOURITES`);
    };

    const pokemonData = this.props.pokemonData;
    const ime = pokemonData.forms[0].name;
    const slikaUri = pokemonData.sprites.front_default;
    const broj = pokemonData.base_experience;

    return (
      <View style={styles.container}>
        <View style={styles.naslov}>
          <Text style={styles.ime}>{ime.toUpperCase()}</Text>
          <Text style={{ paddingLeft: 10, paddingTop: 3 }}>NR.</Text>
          <Text style={{ paddingTop: 3 }}>{broj}</Text>
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
              uri: slikaUri
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
          <Button title="ADD TO FAVOURITES" onPress={storeData} />
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
