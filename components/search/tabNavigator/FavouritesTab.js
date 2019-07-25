import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Button,
  FlatList,
  Image
} from "react-native";

import SearchBody from "../../search/SearchBody";
class FavouritesTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    displayData = async () => {
      value = JSON.parse(await AsyncStorage.getItem("myList"));
    };

    /*
    ukBrObj = value.length - 1;
    function imena(ukBrObj) {
      var i;
      for (i = 0; i <= ukBrObj; i++) {
        value[i].ime;
    }*/

    const nekiUri = value[0].slikaUri;
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.naslov}>FAVOURITES</Text>

        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "grey",
              borderBottomWidth: 2,
              borderTopColor: "grey",
              borderTopWidth: 2
            }}
          >
            <View>
              <Image
                style={{
                  width: 80,
                  height: 80
                  /* borderWidth: 2,
                  borderColor: "lightcoral",
                  borderRadius: 20 */
                }}
                source={{
                  uri: nekiUri
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={styles.podaci}>{value[0].ime}</Text>
              <Text style={styles.podaci}>nr. {value[0].broj}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default FavouritesTab;

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
