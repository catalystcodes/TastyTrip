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

const Login = ({ navigation }: any) => {
  const [form, setForm] = useState({ userName: "", password: "" });
  const { setUserInfo } = useAuthContext();

  const handleLogin = async () => {
    try {
      await doLogin(form.userName);
      setUserInfo(form.userName);
      // navigation.navigate("todo screens");
    } catch (error) {}
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: "white" }}>
      <KeyboardAvoidView>
        <View style={{ paddingHorizontal: wp(7.2) }}>
          <View style={{ marginTop: hp(8.8), marginBottom: hp(21) }}>
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
            value={form.userName}
            onChangeText={(text) =>
              setForm((currentValue) => ({ ...currentValue, userName: text }))
            }
          />
          <AppInputText
            placeholder="password"
            style={{ marginBottom: hp(3.3) }}
            value={form.password}
            onChangeText={(text) =>
              setForm((currentValue) => ({ ...currentValue, password: text }))
            }
            type="password" // Specify that this is a password input
          />
          <AppButton text="Sign In" onPress={handleLogin} />

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

export default Login;
