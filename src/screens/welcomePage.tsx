import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/atoms/appButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ConnectWith from "../components/atoms/connectWith";
import GoogleAndFacebookConnect from "../components/molecules/googleAndFacebookConnect";

const WelcomePage = () => {
  return (
    <View style={{ backgroundColor: "#FFFFFF", flexGrow: 1 }}>
      <View style={{ alignItems: "center" }}>
        <View style={{ marginVertical: hp(6.7) }}>
          <Image source={require("../assets/hamburger 1.png")} />
        </View>
        <View style={{ width: wp(85.5), marginBottom: hp(2.2) }}>
          <AppButton text="Sign In" />
        </View>
        <View style={{ width: wp(85.5) }}>
          <AppButton
            backgroundColor="#ECF0F1"
            textColor="black"
            text="Sign Up"
          />
        </View>
      </View>
      <View
        style={{
          marginTop: hp(17.4),
          paddingRight: wp(7.2),
        }}
      >
        <ConnectWith />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../assets/PngItem_39514 1.png")}
            style={styles.foodImage}
          />
          <View style={{ marginTop: hp(2.2) }}>
            <GoogleAndFacebookConnect />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  foodImage: {
    // position: "absolute",
    // top: 70,
    marginTop: hp(5),
  },
});

export default WelcomePage;
