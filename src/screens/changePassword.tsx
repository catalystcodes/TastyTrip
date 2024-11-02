import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppInputText from "../components/molecules/appInputText";
import AppButton from "../components/atoms/appButton";

const ChangePassword = () => {
  return (
    <View
      style={{
        flexGrow: 1,
        paddingHorizontal: wp(7.2),
        backgroundColor: "white",
      }}
    >
      <View style={{ marginTop: hp(8.8) }}>
        <HeadLine title="Change Password" />
      </View>
      <View>
        <Text>Enter Old Password</Text>
        <AppInputText placeholder="Password" />
      </View>
      <View>
        <Text>Enter Old Password</Text>
        <AppInputText placeholder="Enter New Password" />
        <AppInputText placeholder="Re-enter New Password" />
      </View>
      <View>
        <AppButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangePassword;
