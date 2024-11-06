import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IRenderLabel {
  focused?: boolean;
  // route?: any;
  icon?: string;
}

const RenderLabel = ({ focused, icon }: IRenderLabel) => {
  return (
    <View>
      <Text style={[{ color: "#808080", fontSize: 12, fontWeight: "400" }]}>
        {icon}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RenderLabel;
