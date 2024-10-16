import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const FacebookIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#3B5998"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
    />
    <Path
      fill="#fff"
      d="M25.028 20.783h-3.569v13.074h-5.407V20.783h-2.571v-4.595h2.571v-2.973c0-2.126 1.01-5.456 5.455-5.456l4.005.017v4.46h-2.905c-.477 0-1.147.238-1.147 1.252v2.704h4.04l-.472 4.591Z"
    />
  </Svg>
);
export default FacebookIcon;
