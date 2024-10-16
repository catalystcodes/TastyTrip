import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const GoogleIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#F44336"
        d="M20 40c11.04 0 20-8.96 20-20S31.04 0 20 0 0 8.96 0 20s8.96 20 20 20Zm7.138-21.428h2.864V15.71h2.863v2.863h2.838v2.864h-2.838V24.3h-2.863v-2.863h-2.864v-2.865Zm-6.145-5.969-2.71 2.63c-3.466-3.388-10.211-.92-10.211 4.759 0 7.701 10.931 8.228 11.88 2h-5.654v-3.435h9.429C24.797 24.15 21.185 30 14.298 30v.002A9.985 9.985 0 0 1 4.297 20c.001-8.897 10.555-13.102 16.696-7.397Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GoogleIcon;
