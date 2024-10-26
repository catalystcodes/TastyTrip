import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParams } from "./src/utils/type";
import AppOnboarding from "./src/screens/appOnboarding";
import WelcomePage from "./src/screens/welcomePage";
import Login from "./src/screens/login";
import SignUp from "./src/screens/signUp";
import HomePage from "./src/screens/homePage";
import AppBottomTabs from "./src/components/molecules/appButtomTab";

const Stack = createNativeStackNavigator<RootStackParams>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;

  return (
    <View style={styles.container}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="appOnboarding" component={AppOnboarding} />
        <Screen name="welcomePage" component={WelcomePage} />
        <Screen name="loginPage" component={Login} />
        <Screen name="signUpPage" component={SignUp} />
        <Screen name="appBottomTab" component={AppBottomTabs} />
      </Navigator>
    </View>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
