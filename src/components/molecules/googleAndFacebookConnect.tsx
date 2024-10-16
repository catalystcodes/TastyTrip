import React from "react";
import { Image, StyleSheet, View } from "react-native";
import GoogleIcon from "../atoms/icon/google";
import FacebookIcon from "../atoms/icon/facebook";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const GoogleAndFacebookConnect = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: wp(4.8),
      }}
    >
      <Image source={require("../../assets/facebook 1.png")} />
      <Image source={require("../../assets/google-plus 1.png")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GoogleAndFacebookConnect;
