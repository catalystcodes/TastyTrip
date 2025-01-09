import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { baseUrl } from "../utils/config";
import axios from "axios";
import { useAuthUser } from "../utils/common.hooks";

const MyProfile = () => {
  const [userDetails, setUserDetails] = useState({});
  const { token } = useAuthUser();

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const { data } = await axios(`${baseUrl}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log({ data });
        setUserDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProfileData();
  }, []);

  return (
    <View>
      <Text>My Profile </Text>
      <Text>{userDetails.firstName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyProfile;
