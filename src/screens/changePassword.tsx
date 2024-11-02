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
      <View style={{ marginTop: hp(8.8), marginBottom: hp(5.7) }}>
        <HeadLine title="Change Password" />
      </View>
      <View>
        <Text style={{ marginBottom: hp(2.2) }}>Enter Old Password</Text>
        <AppInputText placeholder="Password" />
      </View>
      <View>
        <Text style={{ marginTop: hp(3.3) }}>Create New Password</Text>
        <View style={{ marginVertical: hp(2.2) }}>
          <AppInputText placeholder="Enter New Password" />
        </View>
        <AppInputText placeholder="Re-enter New Password" />
      </View>
      <View style={{ marginTop: hp(30.7) }}>
        <AppButton text="Save" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangePassword;
