import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LocationIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      d="M12.921 3.425C11.707 1.33 9.551.05 7.154.002a7.483 7.483 0 0 0-.308 0C4.45.05 2.293 1.33 1.08 3.425a6.963 6.963 0 0 0-.09 6.88l4.959 9.077.006.012c.219.38.61.606 1.046.606.437 0 .828-.227 1.046-.606l.007-.012 4.959-9.077a6.963 6.963 0 0 0-.09-6.88Zm-5.92 5.637A2.816 2.816 0 0 1 4.187 6.25 2.816 2.816 0 0 1 7 3.437 2.816 2.816 0 0 1 9.813 6.25 2.816 2.816 0 0 1 7 9.062Z"
    />
  </Svg>
);
export default LocationIcon;
