import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { profilePageTabsParams } from "../../utils/type";
import MyProfile from "../../screens/myProfile";
import ChangePassword from "../../screens/changePassword";
import Payment from "../../screens/payment";
import Notification from "../../screens/notification";
import AboutUs from "../../screens/aboutUs";
import ContactUs from "../../screens/contactUs";
import Profile from "../../screens/profile";
import MyVoucher from "../../screens/myVoucher";

const Stack = createNativeStackNavigator<profilePageTabsParams>();

const ProfileStack = () => {
  const { Navigator, Screen } = Stack;

  return (
    <View style={{ flexGrow: 1 }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="profilePage" component={Profile} />
        <Screen name="myProfilePage" component={MyProfile} />
        <Screen name="changePasswordPage" component={ChangePassword} />
        <Screen name="paymentSettingPage" component={Payment} />
        <Screen name="myVoucherPage" component={MyVoucher} />
        <Screen name="NotificationPage" component={Notification} />
        <Screen name="aboutUsPage" component={AboutUs} />
        <Screen name="contactUsPage" component={ContactUs} />
      </Navigator>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileStack;
