import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Image,
  ImageBackground
} from "react-native";
import axios from "axios";

import SearchHeader from "../SearchHeader";
import SearchBody from "../SearchBody";

class SearchTab extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    searchPokemon: "",
    pokemonData: {},
    pokemonFound: false
  };

  pokemonSearch = () => {
    Keyboard.dismiss();
    const pokemonName = this.state.searchPokemon.toLowerCase();

    const query = `https://pokeapi.co/api/v2/pokemon/` + pokemonName;

    //send
    axios
      .get(query)
      .then(response => {
        var data = response.data ? response.data : false;
        console.log(data);

        if (data) {
          this.setState({
            pokemonData: data,
            pokemonFound: true
          });
        }
      })
      .catch(error => {
        this.setState({
          pokemonFound: false
        });
      });
  };

  renderContent = () => {
    if (this.state.pokemonFound) {
      return <SearchBody pokemonData={this.state.pokemonData} />;
    } else {
      console.log("Pokemon not found");
    }
  };

  render() {
    return (
      <View>
        <View>
          <SearchHeader
            value={this.state.searchPokemon}
            onChangeText={searchPokemon => this.setState({ searchPokemon })}
            pokemonSearch={this.pokemonSearch}
          />
        </View>

        <View>{this.renderContent()}</View>
      </View>
    );
  }
}
export default SearchTab;
