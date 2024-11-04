import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const CreditCard = ({
  bankName,
  userName,
  cardNumber,
  balance,
}: {
  bankName: string;
  userName: string;
  cardNumber: string;
  balance: string;
}) => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/cardBackgroundImage.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.imageContent}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: heightPercentageToDP(7.4),
            }}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
              {userName}
            </Text>
            <Text style={{ color: "white", fontWeight: "400", fontSize: 10 }}>
              {bankName}
            </Text>
          </View>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 10 }}>
            No {bankName} Bank
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 12,
              marginTop: heightPercentageToDP(0.6),
              marginBottom: heightPercentageToDP(1.1),
            }}
          >
            {cardNumber}
          </Text>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 14 }}>
            {balance}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: widthPercentageToDP(85.5),
    height: heightPercentageToDP(22.1),
    // flexDirection: "column",
    backgroundColor: "transparent",
    // justifyContent: "flex-start",
  },
  imageContent: {
    width: widthPercentageToDP(85.5),
    height: heightPercentageToDP(22.1),
    paddingHorizontal: widthPercentageToDP(10.1),
    paddingTop: heightPercentageToDP(1.7),
  },
});
