import { ThemeComponentOptions } from "../../../theme";

const ModalContentOptions: ThemeComponentOptions = {
	default: {
		class:
			"relative rounded-md max-w-md m-auto w-full flex flex-col p-2 mt-16 mb-16 z-50",
		light: "text-black bg-white",
		dark: "text-white bg-gray-800",
	},
};

export default ModalContentOptions;
