import { SvgProps } from "react-native-svg";

export type RootStackParams = {
  appOnboarding: undefined;
  welcomePage: undefined;
  loginPage: undefined;
  signUpPage: undefined;
  homePage: undefined;
};

export type OnboardingStackParams = {
  navigate: any;
};

// export type welcomePageParams = {
//   navigate: any;
//   loginPage: undefined;
//   signUpPage: undefined;
// };

export interface IconWithCustomProps extends SvgProps {
  isSelected?: boolean;
}
