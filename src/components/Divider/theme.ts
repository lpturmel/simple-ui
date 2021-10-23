import { ThemeComponentOptions } from "../../theme";

const DividerOptions: ThemeComponentOptions = {
	default: {
		class: "w-full opacity-60 z-10 border-b",
		light: "border-gray-200",
		dark: "border-gray-200 border-opacity-20",
	},
	// defaultProps: {
	// 	width: "full",
	// 	opacity: 60,
	// 	borderWidthBottom: 1,
	// 	zIndex: 10,
	// },
	// light: {
	// 	borderColor: "gray.200",
	// },
	// dark: {
	// 	borderColor: "whitealpha.300",
	// },
};

export default DividerOptions;
