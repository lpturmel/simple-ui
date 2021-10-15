import { ThemeComponentOptions } from "../../theme";

const LinkOptions: ThemeComponentOptions = {
	defaultProps: {
		cursor: "pointer",
		_hover: { textDecoration: "underline" },
	},
	light: {
		color: "blue.400",
	},
	dark: {
		color: "blue.200",
	},
};

export default LinkOptions;
