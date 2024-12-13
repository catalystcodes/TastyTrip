import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { RootStackParams } from "./src/utils/type";
import AppOnboarding from "./src/screens/appOnboarding";
import WelcomePage from "./src/screens/welcomePage";
import Login from "./src/screens/login";
import SignUp from "./src/screens/signUp";
import AppBottomTabs from "./src/components/molecules/appButtomTab";
import { useSelector } from "react-redux";
import { useAuthContext } from "./src/context";
import * as SplashScreen from "expo-splash-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Stack = createNativeStackNavigator<RootStackParams>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  const appReducer: any = useSelector<any>((state) => state.appReducer);

  const { isLoggedIn, isLoadingAuthData } = useAuthContext();

  const onLayoutRootView = useCallback(async () => {
    if (!isLoadingAuthData) {
      await SplashScreen.hideAsync();
    }
  }, [isLoadingAuthData]);

  if (isLoadingAuthData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Screen name="appBottomTab" component={AppBottomTabs} />
          </>
        ) : (
          <>
            {!appReducer.onBoarding && (
              <Screen name="appOnboarding" component={AppOnboarding} />
            )}
            <Screen name="welcomePage" component={WelcomePage} />
            <Screen name="loginPage" component={Login} />
            <Screen name="signUpPage" component={SignUp} />
          </>
        )}
      </Navigator>
    </View>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: hp(5.5),
  },
});
