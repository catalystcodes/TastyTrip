import * as React from "react";
import Svg, {
  SvgProps,
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg";
import { IconWithCustomProps } from "../../../utils/type";
const ThumbsDownWithBg = (props: IconWithCustomProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Circle
      cx={9}
      cy={9}
      r={9}
      fill={props.isSelected ? "#D35400" : "#ECF0F1"}
      // fill="#ECF0F1"
      transform="matrix(1 0 0 -1 0 18)"
    />
    <G clipPath="url(#a)">
      <Path
        fill={props.isSelected ? "#fff" : "#000"}
        d="M3.875 3h1.25c.482 0 .875.393.875.875v.183C6.756 3.673 8.473 3 11.265 3h.8c1.16 0 2.144.829 2.34 1.971l.56 3.25A2.375 2.375 0 0 1 12.625 11h-2.268c.142.38.284.934.284 1.625C10.64 14.504 9.577 15 9.014 15c-1.038 0-1.125-.968-1.125-1.875 0-1.107-1.241-2.027-1.896-2.436a.874.874 0 0 1-.869.811h-1.25A.876.876 0 0 1 3 10.625v-6.75C3 3.393 3.393 3 3.875 3ZM8.64 13.125c0 1.125.191 1.125.375 1.125.352 0 .875-.433.875-1.625 0-1.108-.434-1.787-.437-1.792a.375.375 0 0 1 .313-.583h2.86a1.624 1.624 0 0 0 1.6-1.901l-.56-3.25a1.62 1.62 0 0 0-1.6-1.349h-.8C7.863 3.75 6.16 4.815 6 4.92v4.905c.417.22 2.64 1.486 2.64 3.3Zm-4.89-2.5c0 .069.056.125.125.125h1.25a.125.125 0 0 0 .125-.125v-6.75a.126.126 0 0 0-.125-.125h-1.25a.125.125 0 0 0-.125.125v6.75Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M3 15h12V3H3z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ThumbsDownWithBg;
