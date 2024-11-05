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
      <Text>{icon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RenderLabel;
