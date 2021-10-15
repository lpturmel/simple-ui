import { ThemeComponentOptions } from "../../theme";

// ("transition-colors duration-200 ease-in-out border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent  rounded-lg placeholder-gray-700");
const InputOptions: ThemeComponentOptions = {
	defaultProps: {
		transition: "basic",
		transitionDuration: 200,
		transitionTiming: "ease-linear",
		backgroundColor: "transparent",
		borderWidth: 1,
		_focus: {
			ringWidth: 2,
			borderColor: "transparent",
			borderWidth: 0,
		},
		borderRadius: "md",
		height: 10,
		appearance: "none",
		placeholderColor: "gray.400",
		paddingX: 4,
		fontSize: "md",
	},
	light: {
		color: "black",
		borderColor: "gray.200",
		_hover: {
			borderColor: "gray.300",
		},
	},
	dark: {
		color: "white",
		borderColor: "whitealpha.300",
		_hover: {
			borderColor: "whitealpha.500",
		},
	},
};

export default InputOptions;
