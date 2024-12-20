import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconWithCustomProps } from "../../../utils/type";

interface HomeIconProps extends IconWithCustomProps {
  fill?: string; // Optional fill prop
}

const HomeIcon = ({ fill = "#00000080", ...props }: HomeIconProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill={fill} // Use the fill prop
      d="M19.981 6.724 18.85 2.196a1.249 1.249 0 0 0-1.213-.946H2.364c-.574 0-1.074.39-1.214.946L.019 6.724A.611.611 0 0 0 0 6.875C0 8.598 1.331 10 2.969 10c.951 0 1.8-.474 2.344-1.209C5.856 9.526 6.704 10 7.655 10c.952 0 1.8-.474 2.344-1.209.544.735 1.391 1.209 2.344 1.209.952 0 1.8-.474 2.344-1.209.543.735 1.39 1.209 2.343 1.209C18.67 10 20 8.598 20 6.875a.611.611 0 0 0-.019-.151ZM17.031 11.25a4.09 4.09 0 0 1-2.343-.735c-1.368.951-3.32.951-4.688 0-1.367.951-3.32.951-4.688 0a4.055 4.055 0 0 1-4.063.346V17.5c.001.69.561 1.25 1.251 1.25h5v-5h5v5h5c.69 0 1.25-.56 1.25-1.25v-6.639a4.056 4.056 0 0 1-1.719.389Z"
    />
  </Svg>
);

export default HomeIcon;
