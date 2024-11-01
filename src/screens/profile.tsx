import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Profile = () => {
  return (
    <View>
      <View style={{ marginTop: hp(11), margin: "auto" }}>
        <Image source={require("../assets/profilePics.png")} />
      </View>
      <Text>Itoh</Text>
      <Text>+1 11229382748</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
