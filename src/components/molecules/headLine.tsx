import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ArrowLeft from "../atoms/icon/arrowLeft";
import { heightPercentageToDP } from "react-native-responsive-screen";

const HeadLine = ({ title }: { title?: string }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <ArrowLeft />
      <Text style={{ fontWeight: "700", fontSize: 18 }}>{title}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HeadLine;
