import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const ProfileIcon = (props: SvgProps) => (
  <Svg width={21} height={20} fill="none" {...props}>
    <G fill="#000" fillOpacity={0.5} clipPath="url(#a)">
      <Path d="M10.793 9.634c1.324 0 2.47-.475 3.406-1.411.937-.937 1.411-2.082 1.411-3.406 0-1.323-.474-2.47-1.41-3.406C13.262.475 12.116 0 10.792 0 9.47 0 8.323.475 7.387 1.411c-.936.937-1.41 2.082-1.41 3.406 0 1.324.474 2.47 1.41 3.406.937.936 2.083 1.411 3.406 1.411ZM19.222 15.379c-.027-.39-.082-.815-.162-1.264a9.945 9.945 0 0 0-.31-1.27 6.271 6.271 0 0 0-.523-1.185 4.471 4.471 0 0 0-.788-1.027 3.472 3.472 0 0 0-1.131-.71 3.91 3.91 0 0 0-1.445-.262c-.204 0-.401.084-.783.332-.234.153-.509.33-.815.526-.262.167-.617.323-1.055.465a4.19 4.19 0 0 1-1.291.208c-.429 0-.863-.07-1.29-.208-.439-.142-.794-.298-1.055-.465-.304-.194-.579-.371-.817-.526-.38-.248-.578-.332-.782-.332-.52 0-1.006.088-1.445.261a3.47 3.47 0 0 0-1.131.711 4.47 4.47 0 0 0-.788 1.027c-.217.382-.393.78-.522 1.185-.125.39-.23.818-.31 1.27-.081.448-.136.874-.163 1.264-.026.383-.04.78-.04 1.182 0 1.044.332 1.889.987 2.512.646.615 1.501.927 2.541.927h9.63c1.04 0 1.896-.312 2.542-.927.655-.623.986-1.468.986-2.513 0-.403-.013-.8-.04-1.181Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.936 0h20v20h-20z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ProfileIcon;