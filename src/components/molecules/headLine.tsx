import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ArrowLeft from "../atoms/icon/arrowLeft";

const HeadLine = ({ title }: { title?: string }) => {
  return (
    <View>
      <ArrowLeft />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HeadLine;
