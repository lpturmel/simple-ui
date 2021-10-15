import { ThemeComponentOptions } from "../../theme";

const HStackOptions: ThemeComponentOptions = {
	defaultProps: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	light: {
		backgroundColor: "white",
	},
	dark: {
		backgroundColor: "gray.800",
	},
};

export default HStackOptions;
