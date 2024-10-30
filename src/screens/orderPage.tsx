import React from "react";
import { StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { map } from "lodash";
import { ReviewFood } from "../constantData";
import ReviewFoodCard from "../components/molecules/reviewFoodCard";

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
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderPage;
