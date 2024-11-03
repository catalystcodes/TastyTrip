import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const AddIcon = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Rect width={30} height={30} fill="#ECF0F1" rx={5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 9.167v11.666M9.167 15h11.666"
    />
  </Svg>
);
export default AddIcon;
