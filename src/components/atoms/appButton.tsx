import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const AppButton = ({
  text,
  onPress,
  backgroundColor = "#D35400",
  textColor = "white",
  disabled,
}: {
  text: string;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}) => {
  return (
    <Pressable
      style={[
        styles.socialButton,
        { backgroundColor },
        disabled && { opacity: 0.5 },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 30,
    paddingVertical: hp("2.2%"),
    width: "100%",
  },

  text: {
    fontWeight: "700",
  },
});

export default AppButton;
