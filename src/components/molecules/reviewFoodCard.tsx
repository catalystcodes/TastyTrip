import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ThumbsUp from "../atoms/icon/thumbsUp";
import ThumbsDown from "../atoms/icon/thumbsDown";
import ThumbsUpWithBg from "../atoms/icon/thumbsUpWithBg";
import ThumbsDownWithBg from "../atoms/icon/thumbsDownWithBg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface ReviewFoodCardProps {
  image: any;
  name: string;
  thumbsUp: string;
  price: number;
  thumbsDown: string;
}

const ReviewFoodCard = ({
  image,
  name,
  thumbsUp,
  thumbsDown,
  price,
}: ReviewFoodCardProps) => {
  return (
    <View
      style={{ flexDirection: "row", columnGap: wp(4.8), alignItems: "center" }}
    >
      <Image source={image} />
      <View>
        <Text style={{ fontWeight: "700", fontSize: 14 }}>{name}</Text>
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
      <View style={{ flexDirection: "row", marginLeft: wp(7.5) }}>
        <ThumbsDownWithBg />
        <ThumbsUpWithBg />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewFoodCard;
