import React from "react";
import { StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const OrderPage = () => {
  return (
    <View style={{ paddingHorizontal: wp(7.2) }}>
      <View style={{ marginTop: hp(8.8), marginBottom: hp(21) }}>
        <HeadLine title="Review Food" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderPage;
