import { ThemeComponentOptions } from "../../theme";

const LinkOptions: ThemeComponentOptions = {
	default: {
		class: "cursor-pointer hover:underline",
		light: "text-blue-400",
		dark: "text-blue-200",
	},
	// defaultProps: {
	// 	cursor: "pointer",
	// 	_hover: { textDecoration: "underline" },
	// },
	// light: {
	// 	color: "blue.400",
	// },
	// dark: {
	// 	color: "blue.200",
	// 	className: "",
	// },
};

export default LinkOptions;
