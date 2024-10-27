import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SmallLocationIcon from "../atoms/icon/smallLocationIcon";
import Clock from "../atoms/icon/clock";

const NearByRestaurantsCard = ({
  image,
  name,
  address,
  duration,
  rate,
}: {
  image: ImageSourcePropType;
  name: string;
  address: string;
  duration: string;
  rate: ImageSourcePropType;
}) => {
  return (
    <View style={styles.whole}>
      <Image source={image} />
      <View>
        <Text style={{ fontSize: 14, fontWeight: "700" }}>{name}</Text>
        <View>
          <SmallLocationIcon />
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#34495E" }}>
            {address}
          </Text>
        </View>
        <View>
          <Clock />
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#34495E" }}>
            {duration}
          </Text>
        </View>
        <Image source={rate} />
      </View>
    </View>
  );
};

export default NearByRestaurantsCard;

const styles = StyleSheet.create({
  whole: {
    height: hp(14.5),
    width: wp(76.8),
    flexDirection: "row",
  },
});
