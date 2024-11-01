import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ArrowLeft from "../atoms/icon/arrowLeft";
import ArrowRight from "../atoms/icon/arrowRight";

const ProfileDetailCard = ({ profileTitle }: any) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text>{profileTitle}</Text>
      <ArrowRight />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileDetailCard;
