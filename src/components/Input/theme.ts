import { ThemeComponentOptions } from "../../theme";

const InputOptions: ThemeComponentOptions = {
	default: {
		class:
			"transition duration-200 ease-linear bg-transparent border rounded-md h-10 appearance-none placeholder-gray-400 px-4 text-base focus:ring-2 focus:border-transparent focus:border-0",
		light: "text-black border-gray-200 hover:border-gray-300 bg-gray-100",
		dark:
			"text-white border-gray-200 border-opacity-10 hover:border-opacity-10 hover:border-gray-300 bg-gray-700",
	},
};

export default InputOptions;
