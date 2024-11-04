import { SvgProps } from "react-native-svg";

export type RootStackParams = {
  appOnboarding: undefined;
  welcomePage: undefined;
  loginPage: undefined;
  signUpPage: undefined;
  homePage: undefined;
  appBottomTab: undefined;
};

export type OnboardingStackParams = {
  navigate: any;
};

export type BottomTabParams = {
  Home: undefined;
  Order: undefined;
  MyList: undefined;
  Profile: undefined;
};

// export type welcomePageParams = {
//   navigate: any;
//   loginPage: undefined;
//   signUpPage: undefined;
// };

export type profilePageTabsParams = {
  myProfilePage: undefined;
  changePasswordPage: undefined;
  paymentSettingPage: undefined;
  myVoucherPage: undefined;
  NotificationPage: undefined;
  aboutUsPage: undefined;
  contactUsPage: undefined;
  profilePage: undefined;
  addCreditCardSectionPage: undefined;
};

export interface IconWithCustomProps extends SvgProps {
  isSelected?: boolean;
}
