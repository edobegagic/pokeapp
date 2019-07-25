import * as React from "react";
import { Text, View, StyleSheet, Button, Vibration, Image } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import { BarCodeScanner } from "expo-barcode-scanner";
import HomeScreen from "../home/HomeScreen";
var pikatv = require("../../img/pikatv.png");

export default class CodeReader extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "5%"
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 7,
            backgroundColor: "white",
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#73E155",
            paddingBottom: 5,
            borderStyle: "dashed"
          }}
        >
          <Text style={styles.tanka}>to catch a</Text>
          <Text style={styles.debela}> POKéMON</Text>
          <Text style={styles.tanka}> scan</Text>
          <Text style={styles.debela}> POKéQR</Text>
          <Text style={styles.tanka}> code</Text>
        </View>
        <View style={{ borderWidth: 10, borderColor: "white" }} />
        <View
          style={{
            flex: 5,
            backgroundColor: "#171717",
            borderRadius: 10
          }}
        >
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && (
            <Button
              title={"Tap to Catch Again"}
              onPress={() => this.setState({ scanned: false })}
            />
          )}
        </View>
        <View style={{ borderWidth: 7, borderColor: "white" }} />
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`You catched a Pokemon!`);
    Vibration.vibrate(100);
    this.props.navigation.navigate("CodeResult", { qr: data });
  };
}

const styles = StyleSheet.create({
  tanka: {
    fontSize: 16,
    color: "#2e2e2e"
  },
  debela: {
    fontSize: 16,
    //   color: "#42B6DC",
    color: "#F38785",
    fontWeight: "bold"
  }
});
