import { ThemeComponentOptions } from "../../theme";

const DividerOptions: ThemeComponentOptions = {
	defaultProps: {
		width: "full",
		opacity: 60,
		borderWidthBottom: 1,
		zIndex: 10,
	},
	light: {
		borderColor: "gray.200",
	},
	dark: {
		borderColor: "whitealpha.300",
	},
};

export default DividerOptions;
