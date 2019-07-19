import React from "react";
import { Dimensions, Clipboard, WebView } from "react-native";

class CodeResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      copied: false
    };
  }

  copyToClipboard = content => {
    Clipboard.setString(content);
    this.setState({ copied: true });
  };

  render() {
    const { navigation } = this.props;
    const qr = navigation.getParam("qr", "NO-QR");
    let { height: screenHeight } = Dimensions.get("window");
    screenHeight = screenHeight - 400;

    return <WebView source={{ uri: qr }} />;
  }
}

export default CodeResult;
