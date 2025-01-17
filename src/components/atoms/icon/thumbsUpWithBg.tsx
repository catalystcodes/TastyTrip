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
const ThumbsUpWithBg = (props: IconWithCustomProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Circle
      cx={9}
      cy={9}
      r={9}
      fill={props.isSelected ? "#D35400" : "#ECF0F1"}
    />
    <G clipPath="url(#a)">
      <Path
        fill={props.isSelected ? "#fff" : "#000"}
        d="M3.875 15h1.25A.876.876 0 0 0 6 14.125v-.183C6.756 14.327 8.473 15 11.265 15h.8a2.369 2.369 0 0 0 2.34-1.971l.56-3.25A2.375 2.375 0 0 0 12.625 7h-2.268c.142-.38.284-.934.284-1.625C10.64 3.497 9.577 3 9.014 3 7.977 3 7.89 3.968 7.89 4.875c0 1.107-1.241 2.027-1.896 2.436a.874.874 0 0 0-.869-.811h-1.25A.876.876 0 0 0 3 7.375v6.75c0 .482.393.875.875.875ZM8.64 4.875c0-1.125.191-1.125.375-1.125.352 0 .875.433.875 1.625 0 1.108-.434 1.787-.437 1.792a.375.375 0 0 0 .313.583h2.86a1.624 1.624 0 0 1 1.6 1.901l-.56 3.25a1.62 1.62 0 0 1-1.6 1.348h-.8C7.863 14.25 6.16 13.186 6 13.082V8.175c.417-.221 2.64-1.487 2.64-3.301Zm-4.89 2.5c0-.069.056-.125.125-.125h1.25c.069 0 .125.056.125.125v6.75a.126.126 0 0 1-.125.125h-1.25a.125.125 0 0 1-.125-.125v-6.75Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M3 3h12v12H3z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ThumbsUpWithBg;
