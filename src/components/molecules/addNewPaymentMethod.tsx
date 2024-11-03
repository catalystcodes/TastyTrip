import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PayCard from "../atoms/icon/payCard";
import AddIcon from "../atoms/icon/addIcon";
import { widthPercentageToDP } from "react-native-responsive-screen";

const AddNewPaymentMethod = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: widthPercentageToDP(3.6),
        }}
      >
        <PayCard />
        <Text style={{ color: "#34495E", fontSize: 14, fontWeight: "400" }}>
          Add new payment method
        </Text>
      </View>
      <AddIcon />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddNewPaymentMethod;
