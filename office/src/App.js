import React from "react";
import { asset, Pano, Text, View, AmbientLight, Sound } from "react-vr";
import Penholder from "./Penholder";
export default class App extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={2.5} />
        <Pano source={asset("fancy.webp")} />
        <Sound
          loop={true}
          volume={0.7}
          autoplay={true}
          source={{
            wav: asset("officerain.wav")
          }}
        />
        <Text
          style={{
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
          Take a look around...
        </Text>
        <Penholder />
      </View>
    );
  }
}
