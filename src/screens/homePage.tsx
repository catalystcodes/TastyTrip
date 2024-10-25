import React, { Fragment, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AppInputText from "../components/molecules/appInputText";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SearchIcon from "../components/atoms/icon/searchIcon";
import LocationIcon from "../components/atoms/icon/location";
import { foodCategory } from "../constantData";
import FoodCategoryCard from "../components/molecules/foodCategoryCard";
import { ScrollView } from "react-native-gesture-handler";

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{ flexGrow: 1, backgroundColor: "white" }}>
      <View style={styles.subDivOne}>
        <View style={styles.searchArea}>
          <SearchIcon />
          <TextInput placeholder="Search" />
        </View>
        <View style={styles.locationArea}>
          <LocationIcon />
          <Text style={{ fontSize: 12, fontWeight: "400" }}>
            9 West 46 Th Street, New York City
          </Text>
        </View>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.subDivTwo}>
            {foodCategory.map((item, itemIndex) => (
              <Pressable
                onPress={() => {
                  setSelectedTab(itemIndex);
                }}
                key={itemIndex}
              >
                <FoodCategoryCard
                  {...item}
                  isSelected={selectedTab === itemIndex}
                />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
      <View>
        <Text>Food Menu</Text>
        <Text>View all</Text>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  subDivOne: {
    marginTop: hp(8.8),
    marginHorizontal: wp(7.2),
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(0.5),
    backgroundColor: "#ECF0F1",
    borderRadius: 30,
    height: hp(5.5),
    paddingHorizontal: wp(4.8),
  },
  locationArea: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(0.7),
    marginTop: hp(1.1),
  },
  subDivTwo: {
    marginVertical: hp(3.3),
    flexDirection: "row",
    columnGap: wp(9.7),
    paddingLeft: wp(7.2),
  },
});
