import { ColorProps } from "./text/colors/colors";
import { MarginProps } from "./spacing/margin";
import { PaddingProps } from "./spacing/padding";
import { FontSizeProps } from "./text/fontSize";
import { StateProps } from "./states";
import { WidthProps } from "./sizing/width/width";
import { HeightProps } from "./sizing/height/height";
import { FontWeightProps } from "./text/fontWeight";
import { BorderRadiusProps } from "./borders/borderRadius";
import { SpacingProps } from "./spacing/spaceBetween";
import { DisplayProps } from "./layout/display";
import { PositionProps } from "./layout/position";

type MainProps<T = {}> = PaddingProps &
	MarginProps &
	ColorProps &
	StateProps &
	FontSizeProps &
	FontWeightProps &
	WidthProps &
	HeightProps &
	BorderRadiusProps &
	SpacingProps &
	DisplayProps &
	PositionProps &
	T;
export default MainProps;
