import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppInputText from "../components/molecules/appInputText";
import KeyboardAvoidView from "../components/organisms/keyboardAvoidView";
import AppButton from "../components/atoms/appButton";
import ConnectWith from "../components/atoms/connectWith";
import GoogleAndFacebookConnect from "../components/molecules/googleAndFacebookConnect";

const SignUp = () => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: "white" }}>
      <KeyboardAvoidView>
        <View style={{ paddingHorizontal: wp(7.2) }}>
          <View
            style={{
              marginTop: hp(8.8),
              marginBottom: hp(17.1),
            }}
          >
            <HeadLine />
          </View>
          <Text
            style={{ fontWeight: "700", fontSize: 24, marginBottom: hp(3.3) }}
          >
            Sign Up
          </Text>
          <AppInputText
            placeholder="Enter Username"
            style={{ marginBottom: hp(2.2) }}
          />
          <AppInputText
            placeholder="Enter Password"
            style={{ marginBottom: hp(3.3) }}
          />
          <AppInputText
            placeholder="Re-enter Password"
            style={{ marginBottom: hp(3.3) }}
          />
          <AppButton text="Sign In" />
          <Text
            style={{
              textAlign: "right",
              marginTop: hp(2.2),
              marginBottom: hp(12.4),
            }}
          >
            Forgot Password?
          </Text>
        </View>
        <ConnectWith />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: wp(7.2),
          }}
        >
          <Image
            source={require("../assets/PngItem_39514 1.png")}
            style={styles.foodImage}
          />
          <View
            style={{
              marginTop: hp(2.2),
            }}
          >
            <GoogleAndFacebookConnect />
          </View>
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({
  foodImage: {
    // position: "absolute",
    // top: 70,
    marginTop: hp(2),
  },
});

export default SignUp;
