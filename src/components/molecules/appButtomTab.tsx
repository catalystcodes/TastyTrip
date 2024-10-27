import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "../../screens/homePage";
import HomeIcon from "../atoms/icon/homeIcon";
import OrderPage from "../../screens/orderPage";
import MyListPage from "../../screens/myListPage";
import Profile from "../../screens/profile";
import OrderIcon from "../atoms/icon/orderIcon";
import MyListIcon from "../atoms/icon/myListIcon";
import ProfileIcon from "../atoms/icon/prrofileIcon";
import { BottomTabParams, RootStackParams } from "../../utils/type";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Tab = createBottomTabNavigator<BottomTabParams>();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: "#0EBE7E",
        tabBarActiveTintColor: "#D35400",
        // tabBarActiveBackgroundColor: "#0EBE7E",
        // tabBarInactiveTintColor: "#BDBDBD",
        tabBarShowLabel: true,
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingHorizontal: wp(19.1),
          // paddingVertical: hp(0),
          height: hp(11.2),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderPage}
        options={{
          tabBarIcon: () => <OrderIcon />,
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyListPage}
        options={{
          tabBarIcon: () => <MyListIcon />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    color: "red",
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: "bold",
  },
});

export default AppBottomTabs;
