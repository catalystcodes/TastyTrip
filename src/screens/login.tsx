import React, { useState } from "react";
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
import { doLogin } from "../utils/auth.helper";
import { useAuthContext } from "../context";
import AuthFooter from "../components/molecules/AuthFooter";
import { useDispatch } from "react-redux";
import { login } from "../store/authReducer";
import { doAPILogin } from "../services";

const Login = ({ navigation }: any) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { setUserInfo } = useAuthContext();
  const dispatch = useDispatch();

  const disableButton =
    form.username.trim() === "" || form.password.trim() === "" || isLoading;

  const handleLogin = async () => {
    if (disableButton) return;
    setIsLoading(true);
    try {
      // const data = await doLogin(form);
      const data = await doAPILogin(form);
      // if (data) {
      //   setUserInfo(form.username);
      // }
      console.log({ data });
      if (data) {
        dispatch(login(data));
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: "white" }}>
      <KeyboardAvoidView>
        <View style={{ paddingHorizontal: wp(7.2) }}>
          <View style={{ marginTop: hp(3.34), marginBottom: hp(21) }}>
            <HeadLine />
          </View>
          <Text
            style={{ fontWeight: "700", fontSize: 24, marginBottom: hp(3.3) }}
          >
            Sign In
          </Text>

          <AppInputText
            placeholder="username"
            style={{ marginBottom: hp(2.2) }}
            value={form.username}
            onChangeText={(text) =>
              setForm((currentValue) => ({ ...currentValue, username: text }))
            }
          />
          <AppInputText
            placeholder="password"
            style={{ marginBottom: hp(3.3) }}
            value={form.password}
            onChangeText={(text) =>
              setForm((currentValue) => ({ ...currentValue, password: text }))
            }
            type="password"
          />
          <AppButton
            text="Sign In"
            onPress={handleLogin}
            disabled={disableButton}
            isLoading={isLoading}
          />

          <Text
            style={{
              textAlign: "right",
              marginTop: hp(2.2),
              marginBottom: hp(16.2),
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
    marginTop: hp(2),
  },
});

export default Login;
