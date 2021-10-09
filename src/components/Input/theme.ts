import { ThemeComponentOptions } from "../../theme";

// ("transition-colors duration-200 ease-in-out border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent  rounded-lg placeholder-gray-700");
const InputOptions: ThemeComponentOptions = {
	defaultProps: {
		transition: "basic",
		transitionDuration: 200,
		transitionTiming: "ease-linear",
		borderWidth: 1,
		_focus: {
			ringWidth: 2,
			borderColor: "transparent",
			borderWidth: 0,
		},
		borderRadius: "lg",
		height: 10,
		appearance: "none",
		placeholderColor: "gray.400",
		paddingX: 4,
		fontSize: "md",
		borderColor: "gray.200",
		_hover: {
			borderColor: "gray.300",
		},
	},
};

export default InputOptions;
