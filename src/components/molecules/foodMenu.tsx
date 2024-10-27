import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const FoodMenuCard = ({ source }: any) => {
  return (
    <View>
      <Image source={source} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FoodMenuCard;
