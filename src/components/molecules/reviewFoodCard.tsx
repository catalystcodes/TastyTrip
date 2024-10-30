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
  thumbsDown: string;
  icon1: (typeof ReviewFood)[number]["icon1"];
  icon2: (typeof ReviewFood)[number]["icon2"];
}

const ReviewFoodCard = ({
  image,
  brandName,
  thumbsUp,
  thumbsDown,
  price,
  icon1,
  icon2,
}: ReviewFoodCardProps) => {
  const [selectedAction, setSelectedAction] = useState<
    null | "thumbUp" | "thumbsDown"
  >(null);
  return (
    <View
      style={{ flexDirection: "row", columnGap: wp(4.8), alignItems: "center" }}
    >
      <Image source={image} />
      <View style={{ flexGrow: 1 }}>
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
      <View
        style={{
          flexDirection: "row",
          columnGap: wp(3.1),
        }}
      >
        <Pressable
          onPress={() => {
            setSelectedAction("thumbsDown");
          }}
        >
          <ThumbsDownWithBg isSelected={selectedAction === "thumbsDown"} />
        </Pressable>

        <Pressable
          onPress={() => {
            setSelectedAction("thumbUp");
          }}
        >
          <ThumbsUpWithBg isSelected={selectedAction === "thumbUp"} />
        </Pressable>
      </View>

      {/* <RenderAppIcon name={icon1} isSelected={selectedAction === "thumbsUp"} />

      <RenderAppIcon
        name={icon2}
        isSelected={selectedAction === "thumbsDown"}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewFoodCard;
