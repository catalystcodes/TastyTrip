import * as React from "react";
import Svg, {
  SvgProps,
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg";
const LikeIcon = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Circle cx={15} cy={15} r={15} fill="#D35400" />
    <G clipPath="url(#a)">
      <Path
        fill="#ECF0F1"
        d="M24.707 7.949a1 1 0 0 0-1.414 0l-11.98 11.98-4.606-4.604a1 1 0 0 0-1.414 1.414l5.312 5.312a1 1 0 0 0 1.414 0L24.707 9.363a1 1 0 0 0 0-1.414Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M5 5h20v20H5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LikeIcon;
