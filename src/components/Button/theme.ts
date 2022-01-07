import { ThemeComponentOptions } from "../../theme";

const ButtonOptions: ThemeComponentOptions = {
	default: {
		class:
			"px-4 py-2 rounded-md font-semibold text-base focus:ring-2 transition-colors duration-200",
		dark:
			"text-white bg-opacity-10 bg-gray-200 hover:bg-gray-300 hover:bg-opacity-20 active:bg-gray-400 active:bg-opacity-20",
		light: "text-black bg-gray-200 hover:bg-gray-300 active:bg-gray-400",
	},
};

export default ButtonOptions;
