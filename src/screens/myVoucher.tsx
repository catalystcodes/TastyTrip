import React from "react";
import { StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import LikeIcon from "../components/atoms/icon/likeIcon";
import VoucherCard from "../components/molecules/voucherCard";
import { Voucher } from "../constantData";

const MyVoucher = () => {
  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: "white",
        paddingHorizontal: wp(7.2),
      }}
    >
      <View style={{ marginTop: hp(8.8), marginBottom: hp(3.3) }}>
        <HeadLine title="My Voucher" />
      </View>
      {Voucher.map((item, itemIndex) => (
        <View style={{ marginBottom: hp(2.2) }} key={itemIndex}>
          <VoucherCard {...item} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyVoucher;
