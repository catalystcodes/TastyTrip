import React from "react";
import { StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import LikeIcon from "../components/atoms/icon/likeIcon";
import VoucherCard from "../components/molecules/voucherCard";

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
      <VoucherCard />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyVoucher;
