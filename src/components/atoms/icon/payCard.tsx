import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PayCard = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#000"
      d="M17.813 3.125H2.188A2.19 2.19 0 0 0 0 5.313v9.375a2.19 2.19 0 0 0 2.188 2.187h15.624A2.19 2.19 0 0 0 20 14.687V5.313a2.19 2.19 0 0 0-2.188-2.188ZM2.188 4.375h15.624c.517 0 .938.42.938.938v1.25H1.25v-1.25c0-.517.42-.938.938-.938Zm15.624 11.25H2.188a.939.939 0 0 1-.937-.938V7.814h17.5v6.875c0 .516-.42.937-.938.937Z"
    />
    <Path
      fill="#000"
      d="M4.375 13.75H3.75a.625.625 0 0 1-.625-.625V12.5c0-.345.28-.625.625-.625h.625c.345 0 .625.28.625.625v.625c0 .345-.28.625-.625.625Z"
    />
  </Svg>
);
export default PayCard;
