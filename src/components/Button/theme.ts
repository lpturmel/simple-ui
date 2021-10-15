import { ThemeComponentOptions } from "../../theme";

const ButtonOptions: ThemeComponentOptions = {
	defaultProps: {
		paddingX: 4,
		paddingY: 2,
		borderRadius: "md",
		fontSize: "md",
		fontWeight: "semibold",
		_focus: {
			ringWidth: 3,
		},
		transitionDuration: 200,
		transition: "colors",
	},
	variants: {
		outlined: {
			color: "blue.400",
			backgroundColor: "transparent",
			borderWidth: 1,
			borderColor: "blue.400",
			_hover: {
				backgroundColor: "whitealpha.100",
			},
			_active: {
				backgroundColor: "whitealpha.200",
			},
		},
		ghost: {
			backgroundColor: "transparent",
		},
	},
	dark: {
		color: "white",
		backgroundColor: "whitealpha.200",
		_hover: {
			backgroundColor: "whitealpha.300",
		},
		_active: {
			backgroundColor: "whitealpha.400",
		},
	},
	light: {
		color: "black",
		backgroundColor: "gray.200",
		_hover: {
			backgroundColor: "gray.300",
		},
		_active: {
			backgroundColor: "gray.400",
		},
	},
};

export default ButtonOptions;
