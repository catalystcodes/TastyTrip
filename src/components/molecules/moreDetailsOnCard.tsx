import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MoreDetailsOnCard = ({
  title,
  details,
}: {
  title: string;
  details: string;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 14, color: "#808080", fontWeight: "400" }}>
        {title}
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "500" }}>{details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MoreDetailsOnCard;
