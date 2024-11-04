import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PayCard from "../atoms/icon/payCard";
import AddIcon from "../atoms/icon/addIcon";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const AddNewPaymentMethod = () => {
  const navigation: any = useNavigation();
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
      <Pressable
        onPress={() => {
          navigation.navigate("addCreditCardSectionPage");
        }}
      >
        <AddIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddNewPaymentMethod;
