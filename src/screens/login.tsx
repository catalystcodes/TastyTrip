import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Login = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ paddingHorizontal: wp(7.2) }}>
        <View style={{ marginTop: hp(8.8), marginBottom: hp(21) }}>
          <HeadLine />
        </View>
        <Text style={{ fontWeight: "700", fontSize: 24 }}>Sign In</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
