import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ConnectWith = () => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", columnGap: wp(2.9) }}
    >
      <View
        style={{
          backgroundColor: "#34495E4D",
          width: wp(67.1),
          paddingVertical: hp(0.08),
        }}
      ></View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#34495E",
        }}
      >
        Or connect with
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConnectWith;
