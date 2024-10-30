import React, { ReactNode } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import RenderAppIcon from "./RenderAppIcon";
import { foodCategory } from "../../constantData";
import { heightPercentageToDP } from "react-native-responsive-screen";

const FoodCategoryCard = ({
  name,
  CategoryIcon,
  isSelected,
}: {
  name: (typeof foodCategory)[number]["name"];
  CategoryIcon?: any;
  isSelected: boolean;
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <RenderAppIcon isSelected={isSelected} name={name} />
      <Text
        style={{
          marginTop: heightPercentageToDP(0.6),
          fontSize: 14,
          fontWeight: "500",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default FoodCategoryCard;

const styles = StyleSheet.create({});
