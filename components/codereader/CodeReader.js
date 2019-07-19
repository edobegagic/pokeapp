import * as React from "react";
import { Text, View, StyleSheet, Button, Vibration, Image } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import { BarCodeScanner } from "expo-barcode-scanner";
import HomeScreen from "../home/HomeScreen";

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
          justifyContent: "flex-end"
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 7
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#171717",
              fontWeight: "bold"
            }}
          >
            to catch a POKéMON scan POKéQR code
          </Text>
        </View>
        <View
          style={{
            flex: 5,
            borderRadius: 20,
            backgroundColor: "#171717"
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
        <View style={{ flex: 1 }}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../../img/footer.png")}
          />
        </View>
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
