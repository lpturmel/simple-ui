import { ThemeComponentOptions } from "../../theme";

const ButtonOptions: ThemeComponentOptions = {
	defaultProps: {
		paddingX: 4,
		paddingY: 2,
		borderRadius: "md",
		fontSize: "lg",
		fontWeight: "semibold",
		color: "white",
		backgroundColor: "gray.400",
		_hover: {
			backgroundColor: "gray.500",
		},
		_active: {
			backgroundColor: "gray.600",
		},
		_focus: {
			ringWidth: 3,
		},
		transitionDuration: 200,
		transition: "colors",
	},
};

export default ButtonOptions;
