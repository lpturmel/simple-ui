import margin from "./margin";
import padding from "./padding";

type MainProps<T = void> = padding & margin & T;
export default MainProps;
