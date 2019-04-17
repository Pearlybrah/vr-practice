import React from "react";
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  Sound,
  VrButton
} from "react-vr";
import Penholder from "./Penholder";

export default class App extends React.Component {
  state = {
    background: "fancy.webp",
    sound: "officerain.wav",
    visible: true
  };

  renderItems = () => {
    if (this.state.visible) {
      return <Penholder />;
    }
  };

  changeScene = () => {
    this.setState({
      background: "outside.jpeg",
      sound: "birds.wav",
      visible: false
    });
  };
  render() {
    return (
      <View>
        <AmbientLight intensity={2.5} />
        <Pano source={asset(this.state.background)} />
        <Sound
          loop={true}
          volume={0.7}
          autoplay={true}
          source={{
            wav: asset(this.state.sound)
          }}
        />
        <VrButton onClick={this.changeScene}>
          <Text
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              color: "#000",
              fontSize: 0.8,
              fontWeight: "400",
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center",
              transform: [{ translate: [0, 2, -6] }]
            }}
          >
            Click here to go outside...
          </Text>
        </VrButton>
        {this.renderItems}
      </View>
    );
  }
}

//ipconfig getifaddr (INSERT IP ADDRESS FOR HOST ADDRESS)
