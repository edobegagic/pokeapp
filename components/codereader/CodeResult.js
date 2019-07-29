import React from "react";
import { WebView } from "react-native";

class CodeResult extends React.Component {
  render() {
    const { navigation } = this.props;
    const qr = navigation.getParam("qr", "NO-QR");
    return <WebView source={{ uri: qr }} />;
  }
}

export default CodeResult;
