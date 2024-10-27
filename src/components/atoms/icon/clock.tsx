import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const Clock = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <G fill="#34495E" clipPath="url(#a)">
      <Path d="M8.138 7.06 6.465 5.805V3.249a.464.464 0 1 0-.93 0v2.788c0 .147.07.285.186.372l1.86 1.394a.462.462 0 0 0 .65-.093.464.464 0 0 0-.093-.65Z" />
      <Path d="M6 0C2.691 0 0 2.691 0 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6Zm0 11.07A5.077 5.077 0 0 1 .93 6 5.077 5.077 0 0 1 6 .93 5.076 5.076 0 0 1 11.07 6 5.077 5.077 0 0 1 6 11.07Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Clock;
