import React, { useRef, useState } from "react";
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
import AppButton from "../components/atoms/appButton";
import { slides } from "../constantData/onBoardingData";

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
        <View style={styles.stepContainer}>
          <Steps activeStep={activeSlide} steps={slides.length} />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
            width: wp(55.5),
            marginTop: hp(10.5),
            marginBottom: hp(1.5),
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: "center",
            width: wp(82),
            lineHeight: 23.87,
          }}
        >
          {item.text}
        </Text>
      </View>
    </>
  );
};

const AppOnboarding = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const navigation = useNavigation<OnboardingStackParams>();
  const handleSkip = () => {
    // navigation.replace("login");
  };

  const handleGetStarted = () => {
    if (activeSlide === 0) {
      setActiveSlide((currentSlide) => {
        const newIndex = currentSlide + 1;
        sliderRef.current.goToSlide(newIndex);
        return newIndex;
      });
    } else {
      // navigation.navigate("login");
    }
  };
  //   console.log(slides[1]);
  console.log({ activeSlide });
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ marginTop: hp(11.2) }}></View>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={(item) => renderItem(item, activeSlide)}
        onSlideChange={(index) => {
          setActiveSlide(index);
        }}
        renderPagination={() => null}
      />
      <View
        style={{
          marginBottom: hp(6.4),
        }}
      >
        <View
          style={{
            width: wp(77),
            marginHorizontal: "auto",
          }}
        >
          <AppButton text="Get Started" onPress={handleGetStarted} />
        </View>
        <Pressable
          onPress={() => {
            handleSkip();
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: hp(1.7),
            }}
          >
            SKIP
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AppOnboarding;

const styles = StyleSheet.create({
  imageWrapper: {
    width: wp(91.5),
    height: hp(42.24),
  },
  image1: {
    height: "100%",
    objectFit: "cover",
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

  stepContainer: {},
});
