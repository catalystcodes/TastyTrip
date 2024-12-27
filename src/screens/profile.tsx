import React, { useEffect, useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ProfileDetailCard from "../components/molecules/profileDetailCard";
import { ProfileDetails } from "../constantData";
import AppButton from "../components/atoms/appButton";
import { RootStackParams, profilePageTabsParams } from "../utils/type";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authReducer";
import { useAuthUser } from "../utils/common.hooks";
import axios from "axios";
import { baseUrl } from "../utils/config";

interface AppButtonProps {
  backgroundColor: string;
  text: string;
  textColor: string;
  onPress: () => void;
}

const Profile = () => {
  const navigation: any = useNavigation();
  const { clearAuthData, userInfo } = useAuthContext();
  const [userProfile, setUserProfile] = useState({});
  const dispatch = useDispatch();

  const { user, token } = useAuthUser();

  const logoutConfirmationAlert = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "destructive",
        },
        { text: "Logout", onPress: () => dispatch(logout()) },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios(`${baseUrl}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log({ data });

        setUserProfile(data);
      } catch (error) {
        console.log({ error });
      }
    };

    getUserInfo();
  }, []);

  const handleSideNav = (path: keyof profilePageTabsParams) => {
    navigation.navigate(path);
  };
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
            backgroundColor: "red",
            textTransform: "capitalize",
          }}
        >
          {user?.username}
          {}
        </Text>
        <Text style={{ textAlign: "center", marginBottom: hp(3.3) }}>
          +1 11229382748
        </Text>
      </View>
      <View style={{ paddingHorizontal: wp(7.2) }}>
        {ProfileDetails.map((item, itemIndex) => (
          <Pressable
            onPress={() => handleSideNav(item.path)}
            key={itemIndex}
            style={{ marginBottom: hp(2.2) }}
          >
            <ProfileDetailCard {...item} />
          </Pressable>
        ))}
        <View style={{ marginTop: hp(5.7) }}>
          <AppButton
            backgroundColor="#ECF0F1"
            text="Sign Out"
            textColor="#000000"
            onPress={() => {
              logoutConfirmationAlert();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
