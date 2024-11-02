import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ArrowRight from "../atoms/icon/arrowRight";

const PaymentSectionCard = ({
  image,
  paymentTitle,
  email,
}: {
  image: ImageSourcePropType;
  email: string;
  paymentTitle: string;
}) => {
  return (
    <View style={{}}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={image} />
          <Text>{paymentTitle}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{email}</Text>
          <ArrowRight />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PaymentSectionCard;
