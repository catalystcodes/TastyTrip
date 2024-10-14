import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WelcomePage = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ height: 30, width: 40, backgroundColor: "red" }}>
        <Image source={require("../assets/hamburger 1.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WelcomePage;
