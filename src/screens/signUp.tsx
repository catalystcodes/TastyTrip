import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
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
import AuthFooter from "../components/molecules/AuthFooter";
import { addNewUser } from "../utils/auth.helper";

const defaultForm = {
  username: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({ navigation }: any) => {
  const [form, setForm] = useState(defaultForm);

  const disableButton =
    form.username?.trim() === "" ||
    form.password?.trim() === "" ||
    form.confirmPassword?.trim() === "";

  const handleSignUp = async () => {
    if (disableButton) return;
    if (form.password !== form.confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    const { confirmPassword, ...otherFormFields } = form;
    try {
      const data = await addNewUser(otherFormFields);
      if (data) {
        navigation.navigate("loginPage");
      }
    } catch (e) {}
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: "white" }}>
      <KeyboardAvoidView>
        <View style={{ paddingHorizontal: wp(7.2) }}>
          <View
            style={{
              marginTop: hp(3.34),
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
            value={form.username}
            onChangeText={(text) => setForm({ ...form, username: text })}
            style={{ marginBottom: hp(2.2) }}
          />
          <AppInputText
            placeholder="Enter Password"
            value={form.password}
            type="password"
            onChangeText={(text) => setForm({ ...form, password: text })}
            style={{ marginBottom: hp(3.3) }}
          />
          <AppInputText
            placeholder="Re-enter Password"
            type="password"
            value={form.confirmPassword}
            onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
            style={{ marginBottom: hp(3.3) }}
          />
          <AppButton
            text="Sign Up"
            onPress={handleSignUp}
            disabled={disableButton}
          />
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
        <AuthFooter />
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
