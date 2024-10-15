import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/atoms/appButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WelcomePage = () => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/hamburger 1.png")} />
        <View style={{ width: wp(85.5) }}>
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default WelcomePage;
