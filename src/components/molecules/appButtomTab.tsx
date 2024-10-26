import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import HomePage from "../../screens/homePage";
import HomeIcon from "../atoms/icon/homeIcon";
import OrderPage from "../../screens/orderPage";
import MyListPage from "../../screens/myListPage";
import Profile from "../../screens/profile";
import OrderIcon from "../atoms/icon/orderIcon";
import MyListIcon from "../atoms/icon/myListIcon";
import ProfileIcon from "../atoms/icon/prrofileIcon";
import { BottomTabParams, RootStackParams } from "../../utils/type";

const Tab = createBottomTabNavigator<BottomTabParams>();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: "#0EBE7E",
        tabBarActiveTintColor: "#0EBE7E",
        // tabBarActiveBackgroundColor: "#0EBE7E",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          // backgroundColor: "red",

          //   height: hp(9.1),
        },
      }}
    >
      <Tab.Screen
        name="homePage"
        component={HomePage}
        options={{
          tabBarIcon: () => <HomeIcon />,
        }}
      />{" "}
      <Tab.Screen
        name="orderPage"
        component={OrderPage}
        options={{
          tabBarIcon: () => <OrderIcon />,
        }}
      />{" "}
      <Tab.Screen
        name="myListPage"
        component={MyListPage}
        options={{
          tabBarIcon: () => <MyListIcon />,
        }}
      />{" "}
      <Tab.Screen
        name="profilePage"
        component={Profile}
        options={{
          tabBarIcon: () => <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AppBottomTabs;
