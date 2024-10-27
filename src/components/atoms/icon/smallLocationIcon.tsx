import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SmallLocationIcon = (props: SvgProps) => (
  <Svg width={10} height={12} fill="none" {...props}>
    <Path
      fill="#34495E"
      d="M8.553 2.055A4.072 4.072 0 0 0 4.908 0a4.072 4.072 0 0 0-3.46 2.054 4.178 4.178 0 0 0-.055 4.128l2.976 5.446A.716.716 0 0 0 5 12a.717.717 0 0 0 .631-.37l2.976-5.446c.71-1.3.69-2.843-.054-4.128ZM5 5.438A1.69 1.69 0 0 1 3.313 3.75c0-.93.757-1.687 1.687-1.687s1.688.757 1.688 1.687A1.69 1.69 0 0 1 5 5.438Z"
    />
  </Svg>
);
export default SmallLocationIcon;
