import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  KeyboardType,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

type InputTextProps = TextInputProps & { type?: "password" | "text" };

const AppInputText = (props: InputTextProps) => {
  const { type, secureTextEntry, ...otherProps } = props;

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={[{ position: "relative", height: hp(5.6) }, otherProps.style]}>
      <TextInput
        {...otherProps}
        style={[styles.inputStyle]}
        secureTextEntry={type === "password" ? hidePassword : secureTextEntry}
      />
      {type === "password" && (
        <View
          style={{
            position: "absolute",
            right: 0,
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            zIndex: 10,
            width: wp(14),
          }}
        >
          <Pressable onPress={() => setHidePassword((prev) => !prev)}>
            {hidePassword ? (
              <AntDesign name="eye" size={18} color="#677294" />
            ) : (
              <Ionicons name="eye-off" size={24} color="black" />
            )}
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#ECF0F1",
    fontSize: 14,
    height: hp(5.6),
    borderRadius: 30,
    paddingLeft: wp(6.7),
    zIndex: 1,
  },
});

export default AppInputText;
