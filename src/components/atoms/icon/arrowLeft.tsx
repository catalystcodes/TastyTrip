import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowLeft = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6.5 16-5-5 5-5"
    />
  </Svg>
);
export default ArrowLeft;
