import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppInputText from "../components/molecules/appInputText";
import KeyboardAvoidView from "../components/organisms/keyboardAvoidView";

const Login = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <KeyboardAvoidView>
        <View style={{ paddingHorizontal: wp(7.2) }}>
          <View style={{ marginTop: hp(8.8), marginBottom: hp(21) }}>
            <HeadLine />
          </View>
          <Text style={{ fontWeight: "700", fontSize: 24 }}>Sign In</Text>
          <AppInputText />
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
