import { ColorProps } from "./colors";
import { MarginProps } from "./margin";
import { PaddingProps } from "./padding";
import { FontProps } from "./font";
import { StateProps } from "./states";
import { WidthProps } from "./width";
import { HeightProps } from "./height";

type MainProps<T = {}> = PaddingProps &
	MarginProps &
	ColorProps &
	StateProps &
	FontProps &
	WidthProps &
	HeightProps &
	T;
export default MainProps;
