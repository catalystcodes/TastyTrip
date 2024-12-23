import * as React from "react";
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconWithCustomProps } from "../../../utils/type";
const DrinkIcon = (props: IconWithCustomProps) => (
  <Svg width={70} height={70} fill="none" {...props}>
    <Rect
      width={70}
      height={70}
      fill={props.isSelected ? "#D35400" : "#ECF0F1"}
      rx={20}
    />
    <G fill={props.isSelected ? "#fff" : "#000"} clipPath="url(#a)">
      <Path d="M43.125 31.875h-17.5a1.877 1.877 0 0 0-1.876 1.875V35c0 4.46 2.464 8.505 6.43 10.556a.626.626 0 0 0 .573-1.111A10.599 10.599 0 0 1 24.999 35v-1.25c0-.345.28-.626.625-.626h17.5c.346 0 .626.28.626.626V35c0 3.99-2.205 7.61-5.754 9.444a.626.626 0 0 0 .574 1.11A11.84 11.84 0 0 0 45 35v-1.25a1.877 1.877 0 0 0-1.875-1.874Z" />
      <Path d="M48.704 44.76a.626.626 0 0 0-.578-.386h-27.5a.626.626 0 0 0-.443 1.067l1.401 1.403a4.349 4.349 0 0 0 3.094 1.281h19.393a4.357 4.357 0 0 0 3.096-1.281l1.402-1.403a.624.624 0 0 0 .135-.681Zm-2.422 1.2c-.59.59-1.376.915-2.21.915H24.678c-.834 0-1.62-.325-2.21-.915l-.335-.335h24.484l-.335.335ZM48.791 34.826c-1.684-1.083-4.374.092-4.675.229a.626.626 0 0 0 .519 1.138c.602-.273 2.535-.922 3.48-.313.426.273.635.805.635 1.62 0 2.502-5.048 4.015-6.997 4.387l-.442.088a.625.625 0 1 0 .241 1.225l.439-.087C42.318 43.052 50 41.546 50 37.5c0-1.258-.407-2.157-1.209-2.674ZM39.241 26.64c1.016-1.27 1.016-3.26 0-4.53a.624.624 0 1 0-.976.781c.643.804.643 2.163-.002 2.97-1.017 1.27-1.017 3.258 0 4.529a.623.623 0 0 0 .88.097.625.625 0 0 0 .097-.879c-.645-.804-.645-2.162.001-2.969ZM35.486 26.64c1.017-1.27 1.017-3.26 0-4.53a.624.624 0 1 0-.976.782c.645.803.645 2.162-.002 2.969-1.016 1.27-1.016 3.258 0 4.529a.623.623 0 0 0 .88.097.624.624 0 0 0 .097-.879c-.644-.803-.644-2.162 0-2.969ZM31.74 26.64c1.017-1.27 1.017-3.258 0-4.528a.625.625 0 0 0-.976.78c.644.803.644 2.162 0 2.969-1.018 1.27-1.018 3.258 0 4.529a.622.622 0 0 0 .878.098.625.625 0 0 0 .098-.878c-.645-.806-.645-2.163 0-2.97Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M20 20h30v30H20z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DrinkIcon;
