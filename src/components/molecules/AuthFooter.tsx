import { View, Text, Image } from "react-native";
import React from "react";
import GoogleAndFacebookConnect from "./googleAndFacebookConnect";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ConnectWith from "../atoms/connectWith";

const AuthFooter = () => {
  return (
    <View style={{ paddingRight: wp(7.2) }}>
      <ConnectWith />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: hp(1.3),
        }}
      >
        <Image source={require("../../assets/PngItem_39514 1.png")} />
        <View style={{ marginTop: hp(0.9) }}>
          <GoogleAndFacebookConnect />
        </View>
      </View>
    </View>
  );
};

export default AuthFooter;
