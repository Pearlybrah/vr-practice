import React from "react";
import { View, Box, Cylinder, Sphere, Stylesheet } from "react-vr";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Box
          dimWidth={1}
          dimDepth={2}
          dimHeight={1}
          style={{
            color: "white",
            tranform: [{ translate: [-0.5, -0.5, -5] }]
          }}
        />
      </View>
    );
  }
}
