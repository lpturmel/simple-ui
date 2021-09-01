import { ColorProps } from "./colors";
import margin from "./margin";
import padding from "./padding";
import { StateProps } from "./states";

type MainProps<T = {}> = padding & margin & ColorProps & StateProps & T;
export default MainProps;
