import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  AsyncStorage,
  TouchableOpacity
} from "react-native";

class SearchBody extends Component {
  favoriti = [];
 /* state = {
    text: "",
    item: [{ id: 1, data: "loading" }] */
  };

  render() {
    const pokemonData = this.props.pokemonData;
    const ime = pokemonData.forms[0].name;
    const slikaUri = pokemonData.sprites.front_default;
    //const type = pokemonData.types[0].type.name; za type ubacit array this.favoriti.push([ime,type])
    const broj = pokemonData.base_experience;

    storeData = async () => {
      this.favoriti.push({ slikaUri, ime, broj }); //ime mijenjat this.state.text??

      await AsyncStorage.setItem("myList", JSON.stringify(this.favoriti));
      value = JSON.parse(await AsyncStorage.getItem("myList"));

      console.log(value);
      console.log(typeof value);
    };

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

          <Button title="ADD TO FAVOURITES" onPress={storeData} />
        </View>
      </View>
    );
  }

  /*addToFavourites(ime) {
    favoriti.push(ime);
    var myJSON = JSON.stringify(favoriti);
    AsyncStorage.setItem("user", myJSON);
  }
*/
  /*addToFavourites(ime){
    try{
      await AsyncStorage.setItem('mykey', ime);
    } catch (error) {
      //error
    }
  }

  addToFavourites(ime) {
    let user = ime;
    AsyncStorage.setItem("user", user);
  }*/
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
