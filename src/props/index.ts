import { ColorProps } from "./text/colors/colors";
import { MarginProps } from "./spacing/margin/margin";
import { PaddingProps } from "./spacing/padding/padding";
import { FontProps } from "./text/font/font";
import { StateProps } from "./states";
import { WidthProps } from "./sizing/width/width";
import { HeightProps } from "./sizing/height/height";

type MainProps<T = {}> = PaddingProps &
	MarginProps &
	ColorProps &
	StateProps &
	FontProps &
	WidthProps &
	HeightProps &
	T;
export default MainProps;
