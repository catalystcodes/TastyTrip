import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconWithCustomProps } from "../../../utils/type";
interface HomeIconProps extends IconWithCustomProps {
  fill?: string; // Optional fill prop
}

const OrderIcon = ({ fill = "#00000080", ...props }: HomeIconProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill={fill}
      // fillOpacity={0.5}
      d="M13.125 1.25h-1.357A1.877 1.877 0 0 0 10 0a1.88 1.88 0 0 0-1.769 1.25H6.875a.625.625 0 0 0-.625.625v2.5c0 .345.28.625.625.625h6.25c.345 0 .625-.28.625-.625v-2.5a.625.625 0 0 0-.625-.625Z"
    />
    <Path
      fill={fill}
      // fillOpacity={0.5}
      d="M16.25 2.5H15v1.875a1.877 1.877 0 0 1-1.875 1.875h-6.25A1.877 1.877 0 0 1 5 4.375V2.5H3.75c-.689 0-1.25.561-1.25 1.25v15c0 .701.549 1.25 1.25 1.25h12.5c.701 0 1.25-.549 1.25-1.25v-15c0-.701-.549-1.25-1.25-1.25ZM9.818 13.568l-2.5 2.5a.628.628 0 0 1-.885 0l-1.25-1.25a.625.625 0 0 1 .883-.884l.809.807 2.057-2.057a.625.625 0 0 1 .886.884Zm0-5-2.5 2.5a.628.628 0 0 1-.885 0l-1.25-1.25a.625.625 0 0 1 .883-.884l.809.807 2.057-2.057a.625.625 0 0 1 .886.884ZM14.375 15h-2.5a.625.625 0 0 1 0-1.25h2.5a.625.625 0 0 1 0 1.25Zm0-5h-2.5a.625.625 0 0 1 0-1.25h2.5a.625.625 0 0 1 0 1.25Z"
    />
  </Svg>
);
export default OrderIcon;
