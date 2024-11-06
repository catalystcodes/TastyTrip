import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LikeIcon from "../atoms/icon/likeIcon";
import Voucher from "../atoms/icon/voucher";
import Clock from "../atoms/icon/clock";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const VoucherCard = ({
  percentageOfSales,
  dateElapsed,
}: {
  percentageOfSales: number;
  dateElapsed: number;
}) => {
  const [isSelected, setIsSelected]: any = useState(null);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", columnGap: wp(4.8) }}>
        <View style={{ backgroundColor: "#ECF0F1", borderRadius: 20 }}>
          <Voucher />
        </View>
        <View>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>
            Sale off {percentageOfSales}% for Pizza
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: hp(1.1),
              columnGap: hp(1.2),
            }}
          >
            <Clock />
            <Text style={{ fontWeight: "400", fontSize: 12, color: "#34495E" }}>
              Apr 10 - Apr 30
            </Text>
          </View>
          <Text style={{ fontWeight: "500", fontSize: 14, color: "red" }}>
            {dateElapsed} days left
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          isSelected(setIsSelected);
        }}
      >
        <LikeIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default VoucherCard;
