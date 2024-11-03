import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ArrowRight from "../atoms/icon/arrowRight";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PaymentSectionCard = ({
  image,
  paymentTitle,
  regMode,
}: {
  image: ImageSourcePropType;
  regMode: string;
  paymentTitle: string;
}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: wp(2.5),
        }}
      >
        <Image source={image} />
        <Text style={{ fontSize: 14, color: "#34495E", fontWeight: "400" }}>
          {paymentTitle}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: wp(2.2),
        }}
      >
        <Text style={{ fontSize: 14, color: "#34495E", fontWeight: "400" }}>
          {regMode}
        </Text>
        <ArrowRight />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PaymentSectionCard;
