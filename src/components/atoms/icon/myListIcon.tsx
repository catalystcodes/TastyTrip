import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconWithCustomProps } from "../../../utils/type";
interface HomeIconProps extends IconWithCustomProps {
  fill?: string; // Optional fill prop
}

const MyListIcon = ({ fill = "#00000080", ...props }: HomeIconProps) => (
  <Svg width={14} height={19} fill="none" {...props}>
    <Path
      fill={fill}
      d="M0 1a1 1 0 0 1 1-1h11.936a1 1 0 0 1 1 1v16.571c0 .893-1.082 1.338-1.71.704l-4.417-4.454a1 1 0 0 0-1.405-.015L1.695 18.36c-.634.614-1.695.165-1.695-.718V1Z"
    />
  </Svg>
);
export default MyListIcon;
