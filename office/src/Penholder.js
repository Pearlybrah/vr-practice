import React from "react";
import { asset, View, Model, Stylesheet } from "react-vr";

export default class Penholder extends React.Component {
  render() {
    return (
      <View>
        <Model
          source={{
            obj: asset("/penholder/Table_Set_obj.obj"),
            mtl: asset("/penholder/Table_Set_obj.mtl")
          }}
          style={{
            // position: "absolute",
            transform: [
              { translate: [-5.5, -2, -4.8] },
              { scale: 0.005 },
              { rotateX: -90 }
            ]
          }}
        />
        <Model
          source={{
            obj: asset("/penholder/Table_Set_obj.obj"),
            mtl: asset("/penholder/Table_Set_obj.mtl")
          }}
          style={{
            // position: "absolute",
            transform: [
              { translate: [7.6, -4, -8.8] },
              { scale: 0.004 },
              { rotateX: -90 }
            ]
          }}
        />
      </View>
    );
  }
}
