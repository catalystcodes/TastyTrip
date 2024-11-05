import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
import ProfileStack from "./profileStack";
import RenderLabel from "../atoms/renderLabel";
import RenderAppIcon from "./RenderAppIcon";

const Tab = createBottomTabNavigator<BottomTabParams>();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingHorizontal: wp(9),
          height: hp(11.2),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{}}>
              <RenderAppIcon name="Home" focused={focused} />
              <RenderLabel icon="home" focused={focused} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderPage}
        options={{
          tabBarIcon: ({ focused }) => <OrderIcon isSelected={focused} />,
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyListPage}
        options={{
          tabBarIcon: ({ focused }) => <MyListIcon isSelected={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon isSelected={focused} />,
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
