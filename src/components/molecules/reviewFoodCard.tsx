import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ThumbsUp from "../atoms/icon/thumbsUp";
import ThumbsDown from "../atoms/icon/thumbsDown";
import ThumbsUpWithBg from "../atoms/icon/thumbsUpWithBg";
import ThumbsDownWithBg from "../atoms/icon/thumbsDownWithBg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import RenderAppIcon from "./RenderAppIcon";
import { ReviewFood } from "../../constantData";

interface ReviewFoodCardProps {
  image: any;
  brandName: string;
  thumbsUp: string;
  price: number;
  isSelected: boolean;
  thumbsDown: string;
  name: (typeof ReviewFood)[number]["brandName"];
}

const ReviewFoodCard = ({
  image,
  brandName,
  thumbsUp,
  thumbsDown,
  price,
  isSelected,
}: ReviewFoodCardProps) => {
  return (
    <View
      style={{ flexDirection: "row", columnGap: wp(4.8), alignItems: "center" }}
    >
      <Image source={image} />
      <View>
        <Text style={{ fontWeight: "700", fontSize: 14 }}>{brandName}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: hp(1.2),
          }}
        >
          <ThumbsUp style={{ marginRight: wp(2) }} />
          <Text>{thumbsUp}</Text>
          <ThumbsDown style={{ marginRight: wp(2) }} />
          <Text>{thumbsDown}</Text>
        </View>
        <Text style={{ color: "#2ECC71", fontSize: 14, fontWeight: "500" }}>
          {price}
        </Text>
      </View>
      <Pressable style={{ flexDirection: "row", marginLeft: wp(7.5) }}>
        {/* <ThumbsDownWithBg style={{ marginRight: wp(3.1) }} />
        <ThumbsUpWithBg /> */}
        <RenderAppIcon isSelected={isSelected} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewFoodCard;
