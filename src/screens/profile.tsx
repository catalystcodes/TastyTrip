import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ProfileDetailCard from "../components/molecules/profileDetailCard";

const Profile = () => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: "white" }}>
      <View>
        <View style={{ marginTop: hp(11), margin: "auto" }}>
          <Image source={require("../assets/profilePics.png")} />
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: hp(2.2),
            marginBottom: hp(0.5),
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Itoh
        </Text>
        <Text style={{ textAlign: "center" }}>+1 11229382748</Text>
      </View>
      <View>
        <ProfileDetailCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
