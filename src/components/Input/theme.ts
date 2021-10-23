import { ThemeComponentOptions } from "../../theme";

// ("transition-colors duration-200 ease-in-out border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent  rounded-lg placeholder-gray-700");
const InputOptions: ThemeComponentOptions = {
	default: {
		class:
			"transition duration-200 ease-linear bg-transparent border rounded-md h-10 appearance-none placeholder-gray-400 px-4 text-base focus:ring-2 focus:border-transparent focus:border-0",
		light: "text-black border-gray-200 hover:border-gray-300",
		dark:
			"text-white border-gray-200 border-opacity-10 hover:border-opacity-10 hover:border-gray-300",
	},
	// defaultProps: {
	// 	transition: "basic",
	// 	transitionDuration: 200,
	// 	transitionTiming: "ease-linear",
	// 	backgroundColor: "transparent",
	// 	borderWidth: 1,
	// 	_focus: {
	// 		ringWidth: 2,
	// 		borderColor: "transparent",
	// 		borderWidth: 0,
	// 	},
	// 	borderRadius: "md",
	// 	height: 10,
	// 	appearance: "none",
	// 	placeholderColor: "gray.400",
	// 	paddingX: 4,
	// 	fontSize: "md",
	// },
	// light: {
	// 	color: "black",
	// 	borderColor: "gray.200",
	// 	_hover: {
	// 		borderColor: "gray.300",
	// 	},
	// },
	// dark: {
	// 	color: "white",
	// 	borderColor: "whitealpha.300",
	// 	_hover: {
	// 		borderColor: "whitealpha.500",
	// 	},
	// },
};

export default InputOptions;
