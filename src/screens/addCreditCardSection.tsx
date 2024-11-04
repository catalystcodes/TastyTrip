import React from "react";
import { StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import AppButton from "../components/atoms/appButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CreditCard from "../components/molecules/creditCard";
import { CreditCardDetails } from "../constantData";

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
      {CreditCardDetails.map((item, itemIndex) => (
        <View key={itemIndex}>
          <CreditCard {...item} />
        </View>
      ))}

      {/* <View>
        <AppButton text="Add" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddCreditCardSection;
