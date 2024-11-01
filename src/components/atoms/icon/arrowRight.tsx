import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowRight = (props: SvgProps) => (
  <Svg width={8} height={14} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 13 6-6-6-6"
    />
  </Svg>
);
export default ArrowRight;
