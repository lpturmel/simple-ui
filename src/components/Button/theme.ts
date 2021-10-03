import { ThemeComponentOptions } from "../../theme";

const ButtonOptions: ThemeComponentOptions = {
	defaultProps: {
		px: 4,
		py: 2,
		borderRadius: "md",
		fontSize: "lg",
		fontWeight: "semibold",
		color: "white",
		bg: "gray.400",
		_hover: {
			bg: "gray.500",
		},
		_active: {
			bg: "gray.600",
		},
		_focus: {
			ringWidth: 3,
		},
		transitionDuration: 200,
		transition: "colors",
	},
};

export default ButtonOptions;
