import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ReviewFood } from "../constantData";
import ReviewFoodCard from "../components/molecules/reviewFoodCard";
import AppBottomTabs from "../components/molecules/appButtomTab";
import AppButton from "../components/atoms/appButton";

const OrderPage = () => {
  return (
    <View
      style={{
        paddingHorizontal: wp(7.2),
        flexGrow: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ marginTop: hp(8.8), marginBottom: hp(1.1) }}>
        <HeadLine title="Review Food" />
      </View>
      <View>
        {ReviewFood.map((item, itemIndex) => (
          <View style={{ marginTop: hp(2.2) }}>
            <ReviewFoodCard {...item} />
          </View>
        ))}
      </View>
      <View style={{ marginTop: hp(32) }}></View>
      <AppButton text="Send" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderPage;
