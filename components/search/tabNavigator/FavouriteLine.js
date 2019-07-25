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

class FavouriteLine extends Component {
  render() {
    return (
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
              uri: value[0].slikaUri
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
    );
  }
}
export default FavouriteLine;

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
