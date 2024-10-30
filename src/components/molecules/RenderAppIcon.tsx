import { View, Text } from "react-native";
import React from "react";
import { ReviewFood, foodCategory } from "../../constantData";
import CakeIcon from "../atoms/icon/cakeIcon";
import DrinkIcon from "../atoms/icon/DrinkIcon";
import FoodIcon from "../atoms/icon/foodIcon";
import ThumbsDownWithBg from "../atoms/icon/thumbsDownWithBg";
import ThumbsUpWithBg from "../atoms/icon/thumbsUpWithBg";

interface RenderAppIconProps {
  name:
    | (typeof foodCategory)[number]["name"]
    | (typeof ReviewFood)[number]["icon1"]
    | (typeof ReviewFood)[number]["icon2"];
  isSelected: boolean;
}

const RenderAppIcon = ({ name, isSelected }: RenderAppIconProps) => {
  switch (name) {
    case "Drink":
      return <DrinkIcon isSelected={isSelected} />;
    case "Cake":
      return <CakeIcon isSelected={isSelected} />;
    case "Food":
      return <FoodIcon isSelected={isSelected} />;
    case "Snacks":
      return <CakeIcon isSelected={isSelected} />;
    case "thumbsUp":
      return <ThumbsDownWithBg isSelected={isSelected} />;
    case "thumbsDown":
      return <ThumbsUpWithBg isSelected={isSelected} />;
    default:
      return <View />;
  }
};

export default RenderAppIcon;
