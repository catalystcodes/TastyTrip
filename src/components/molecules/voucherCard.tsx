import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LikeIcon from "../atoms/icon/likeIcon";
import Voucher from "../atoms/icon/voucher";
import Clock from "../atoms/icon/clock";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const VoucherCard = () => {
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
          <Text>Sale off 30% for Pizza</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Clock />
            <Text>Apr 10 - Apr 30</Text>
          </View>
          <Text>11 days left</Text>
        </View>
      </View>
      <LikeIcon />
    </View>
  );
};

const styles = StyleSheet.create({});

export default VoucherCard;
