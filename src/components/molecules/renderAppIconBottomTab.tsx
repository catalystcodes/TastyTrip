import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomTabIcon } from "../../constantData";
import HomeIcon from "../atoms/icon/homeIcon";
import OrderIcon from "../atoms/icon/orderIcon";
import ProfileIcon from "../atoms/icon/prrofileIcon";
import MyListIcon from "../atoms/icon/myListIcon";

interface RenderAppIconProps {
  name: (typeof BottomTabIcon)[number]["name"];
  isSelected?: boolean;
  focused?: boolean;
}

const RenderAppIconBottomTab = ({
  name,
  isSelected,
  focused,
}: RenderAppIconProps) => {
  let result = focused ? <HomeIcon fill="#D35400" /> : <HomeIcon />;

  switch (name) {
    case "Home":
      break;
    case "Order":
      result = focused ? <OrderIcon fill="#D35400" /> : <OrderIcon />;
      break;
    case "MyList":
      result = focused ? <MyListIcon fill="#D35400" /> : <MyListIcon />;
      break;

    case "Profile":
      result = focused ? <ProfileIcon fill="#D35400" /> : <ProfileIcon />;
      break;

    default:
      break;
  }
  return result;
};

const styles = StyleSheet.create({});

export default RenderAppIconBottomTab;
