import { ThemeComponentOptions } from "../../theme";

// ("transition-colors duration-200 ease-in-out border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent  rounded-lg placeholder-gray-700");
const InputOptions: ThemeComponentOptions = {
	defaultProps: {
		transition: "colors",
		transitionDuration: 200,
		transitionTiming: "ease-in-out",
		borderWidth: 1,
		borderColor: "transparent",
		_focus: {
			ringWidth: 2,

			borderColor: "transparent",
		},
		borderRadius: "lg",
	},
};

export default InputOptions;
