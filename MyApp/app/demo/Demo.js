import { StyleSheet, Text, View } from "react-native";
import React from "react";

function Demo() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOpacity: 1,
          shadowOffset: { width: 10, height: 10 },
          //   borderWidth: 10,
          //   borderColor: "royalblue",
          //   borderRadius: 50,
        }}
      >
        <View style={{ backgroundColor: "gold", width: 50, height: 50 }}>
          {" "}
        </View>
      </View>
    </View>
  );
}

export default Demo;

const styles = StyleSheet.create({});
