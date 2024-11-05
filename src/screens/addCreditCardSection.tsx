import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import AppButton from "../components/atoms/appButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CreditCard from "../components/molecules/creditCard";
import { CreditCardDetails, MoreDetailsOnCardDetails } from "../constantData";
import MoreDetailsOnCard from "../components/molecules/moreDetailsOnCard";

const AddCreditCardSection = () => {
  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: "white",
        paddingHorizontal: wp(7.2),
      }}
    >
      <View style={{ marginTop: hp(8.8), marginBottom: hp(3.3) }}>
        <HeadLine title="Add Credit Card" />
      </View>
      <View>
        {CreditCardDetails.map((item, itemIndex) => (
          <View key={itemIndex}>
            <CreditCard {...item} />
          </View>
        ))}
      </View>

      <View style={{ marginTop: hp(25.2) }}>
        {MoreDetailsOnCardDetails.map((item, itemIndex) => (
          <View key={itemIndex} style={{ marginBottom: hp(2.2) }}>
            <MoreDetailsOnCard {...item} />
          </View>
        ))}
      </View>
      <View style={{ marginTop: hp(15) }}>
        <AppButton text="Add" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddCreditCardSection;
