import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowLeft from "../atoms/icon/arrowLeft";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const HeadLine = ({ title }: { title?: string }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Pressable onPress={() => navigation.goBack()} style={{ padding: 2 }}>
        <ArrowLeft style={{}} />
      </Pressable>
      <Text style={{ fontWeight: "700", fontSize: 18 }}>{title}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HeadLine;
