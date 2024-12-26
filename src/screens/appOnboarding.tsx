import React, { useLayoutEffect, useRef, useState } from "react";
import {
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Steps from "../components/organisms/steps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { OnboardingStackParams } from "../utils/type";
import { useNavigation } from "@react-navigation/native";
import AppIntroSlider from "react-native-app-intro-slider";
import { slides } from "../constantData/onBoardingData";
import { useDispatch } from "react-redux";
import { setOnboarding } from "../store/appReducer";

//renderItems
const renderItem = (
  {
    item,
  }:
    | ListRenderItemInfo<{
        key: number;
        title: string;
        text: string;
        image: any;
      }>
    | (ListRenderItemInfo<{
        key: number;
        title: string;
        text: string;
        image: any;
      }> & { dimensions: { width: number; height: number } }),
  activeSlide: number
) => {
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image1} source={item.image} />
        </View>

        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
            width: wp(55.5),
            marginTop: hp(2.2),
            marginBottom: hp(1.5),
            color: "white",
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: "center",
            width: wp(65.5),
            lineHeight: 23.87,
            color: "white",
            marginBottom: hp(26.5),
          }}
        >
          {item.text}
        </Text>
        <View style={styles.stepContainer}>
          <Steps activeStep={activeSlide} steps={slides.length} />
        </View>
      </View>
    </>
  );
};

const AppOnboarding = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const navigation = useNavigation<OnboardingStackParams>();
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({});
  }, []);

  return (
    <View style={{ flexGrow: 1, backgroundColor: "#D35400" }}>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={(item) => renderItem(item, activeSlide)}
        onSlideChange={(index) => {
          intervalId.current && clearTimeout(intervalId.current);
          setActiveSlide(index);
        }}
        onTouchEndCapture={() => {
          if (activeSlide === slides.length - 1) {
            intervalId.current = setTimeout(() => {
              navigation.navigate("welcomePage");
              dispatch(setOnboarding(true));
            }, 450);
          }
        }}
        renderPagination={() => null}
      />
    </View>
  );
};

export default AppOnboarding;

const styles = StyleSheet.create({
  imageWrapper: {
    marginTop: hp(27.1),
    height: hp(22.3),
    width: wp(48.3),
  },
  image1: {
    height: "100%",
    objectFit: "contain",
  },

  getStartedButton: {
    width: wp(56.5),
    height: hp(6.9),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#7D57F1",
  },
  getStartedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },

  stepContainer: {
    // marginTop: hp(26.5),
  },
});
