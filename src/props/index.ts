import { ColorProps } from "./colors";
import { MarginProps } from "./margin";
import { PaddingProps } from "./padding";
import { FontProps } from "./font";
import { StateProps } from "./states";

type MainProps<T = {}> = PaddingProps &
	MarginProps &
	ColorProps &
	StateProps &
	FontProps &
	T;
export default MainProps;
