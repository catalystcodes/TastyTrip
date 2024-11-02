import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { PaymentSection } from "../constantData";
import PaymentSectionCard from "../components/molecules/paymentSectionCard";

const Payment = () => {
  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: "white",
        paddingHorizontal: wp(7.2),
      }}
    >
      <View style={{ marginTop: hp(8.8), marginBottom: hp(3.3) }}>
        <HeadLine title="Payment Settings" />
      </View>
      <View>
        {PaymentSection.map((item, itemIndex) => (
          <Pressable>
            <PaymentSectionCard {...item} />
          </Pressable>
        ))}
      </View>
      {}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Payment;
