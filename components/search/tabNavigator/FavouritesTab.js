import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Button,
  FlatList,
  ScrollView,
  Image
} from "react-native";

export default class FavouritesTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }

  displayData = async () => {
    value = JSON.parse(await AsyncStorage.getItem("myList"));
    console.log("test1");
    console.log(value);
    console.log(this.state.array.length);
    console.log("test1");
    var joined = this.state.array.concat(value);
    this.setState({ array: joined });
    console.log(this.state.array.length);
  };

  async componentDidMount() {
    await this.displayData();
  }

  list = async () => {
    try {
      if (this.state.array.length > 0) {
        changerList = [
          ...new Map(this.state.array.map(o => [o.broj, o])).values() //spriječava da se prikazuju duplikati
        ];

        renderList = changerList.map(element => {
          return (
            <View
              key={element.broj}
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
                source={{ uri: element.slikaUri }}
              />

              <Text>{element.ime.toUpperCase()}</Text>
              <Text>{element.broj}</Text>
              <Button title="X" />
            </View>
          );
        });
      } else {
        var pokecekanje = require("../../../img/nopokemon.png");
        renderList = (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 70
            }}
          >
            <View
              style={{
                paddingTop: 25,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "grey",
                borderWidth: 1,
                borderStyle: "dashed",
                borderRadius: 15,
                width: 200,
                height: 200
              }}
            >
              <Image style={{ height: 90, width: 110 }} source={pokecekanje} />
              <View style={{ height: 30 }} />
              <Text>You didn't add any POKéMON.</Text>
            </View>
          </View>
        );
      }
    } catch (err) {
      var pokecekanje = require("../../../img/nopokemon.png");
      renderList = (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 70
          }}
        >
          <View
            style={{
              paddingTop: 25,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "grey",
              borderWidth: 1,
              borderStyle: "dashed",
              borderRadius: 15,
              width: 200,
              height: 200
            }}
          >
            <Image style={{ height: 90, width: 110 }} source={pokecekanje} />
            <View style={{ height: 30 }} />
            <Text>You didn't add any POKéMON.</Text>
          </View>
        </View>
      );
    }
  };

  clearAsyncStorage = async () => {
    await AsyncStorage.clear();
  };

  render() {
    this.list();

    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.naslov}>FAVOURITES</Text>
        <View
          style={{
            borderColor: "lightcoral",
            borderBottomWidth: 2,
            width: "100%"
          }}
        />
        <Button title="clear asyncstorage" onPress={this.clearAsyncStorage} />
        <ScrollView
          style={{ height: "90%", width: "100%", marginBottom: "10%" }}
        >
          <View style={{ paddingTop: 20 }}>{renderList}</View>
        </ScrollView>
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
    paddingBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "coral"
  }
});
