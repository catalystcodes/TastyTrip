import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      fillOpacity={0.5}
      d="m19.756 18.577-5.688-5.687a7.878 7.878 0 0 0 1.765-4.973C15.833 3.552 12.281 0 7.917 0 3.552 0 0 3.552 0 7.917s3.552 7.916 7.917 7.916a7.878 7.878 0 0 0 4.973-1.765l5.687 5.688a.831.831 0 0 0 1.179 0 .832.832 0 0 0 0-1.179Zm-11.84-4.41a6.256 6.256 0 0 1-6.25-6.25 6.256 6.256 0 0 1 6.25-6.25 6.256 6.256 0 0 1 6.25 6.25 6.256 6.256 0 0 1-6.25 6.25Z"
    />
  </Svg>
);
export default SearchIcon;
