import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { PaymentSection } from "../constantData";
import PaymentSectionCard from "../components/molecules/paymentSectionCard";
import AddNewPaymentMethod from "../components/molecules/addNewPaymentMethod";

const Payment = () => {
  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: "white",
        paddingHorizontal: wp(7.2),
      }}
    >
      <View style={{ marginTop: hp(8.8), marginBottom: hp(1.1) }}>
        <HeadLine title="Payment Settings" />
      </View>
      <View>
        {PaymentSection.map((item, itemIndex) => (
          <Pressable key={itemIndex} style={{ marginTop: hp(2.2) }}>
            <PaymentSectionCard {...item} />
          </Pressable>
        ))}
        <View style={{ marginTop: hp(2.2) }}>
          <AddNewPaymentMethod />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Payment;
