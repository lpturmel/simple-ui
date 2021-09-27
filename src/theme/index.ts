import ButtonOptions from "../components/Button/theme";
import HStackOptions from "../components/HStack/theme";
import MainProps from "../props";

export interface SimpleComponentList {
	Button?: ThemeComponentOptions;
	Input?: ThemeComponentOptions;
	HStack?: ThemeComponentOptions;
	VStack?: ThemeComponentOptions;
	Select?: ThemeComponentOptions;
	Modal?: ThemeComponentOptions;
	ModalContent?: ThemeComponentOptions;
	ModalBody?: ThemeComponentOptions;
	ModalFooter?: ThemeComponentOptions;
	ModalHeader?: ThemeComponentOptions;
	ModalOverlay?: ThemeComponentOptions;
}

export interface ThemeComponentOptions {
	defaultProps?: MainProps;
	variants?: any; // TODO
}
export interface SimpleThemeConfig {
	Components?: SimpleComponentList;
}

export const DefaultTheme: SimpleThemeConfig = {
	Components: {
		Button: {
			...ButtonOptions,
		},
		HStack: {
			...HStackOptions,
		},
		VStack: {
			defaultProps: {
				display: "flex",
				flexDirection: "col",
			},
		},
		Input: {
			defaultProps: {},
		},
		Modal: {
			defaultProps: {
				display: "flex",
				flexDirection: "col",
				overflow: "auto",
				justifyContent: "start",
				alignItems: "center",
				position: "fixed",
				height: "screen",
				width: "screen",
				top: 0,
				left: 0,
				zIndex: 50,
			},
		},
		ModalOverlay: {
			defaultProps: {
				top: 0,
				left: 0,
				position: "fixed",
				height: "screen",
				width: "screen",

				zIndex: 10,
			},
		},
		ModalHeader: {
			defaultProps: {
				display: "flex",
				flexDirection: "row",
				justifyContent: "between",
				paddingX: 4,
				paddingY: 4,
				fontSize: "xl",
				fontWeight: "semibold",
			},
		},
		ModalFooter: {
			defaultProps: {
				paddingX: 4,
				paddingY: 4,
			},
		},
		ModalContent: {
			defaultProps: {
				// add maxHeight: max-h-32
				position: "relative",
				maxW: "md",
				margin: "auto",
				w: "full",
				display: "flex",
				flexDirection: "col",
				p: 2,
				maxWidth: "md",
				marginT: 16,
				marginB: 16,
				bg: "gray.100",
				borderRadius: "md",
				zIndex: 50,
			},
		},
		ModalBody: {
			defaultProps: {
				zIndex: 50,
				paddingX: 4,
				paddingY: 4,
			},
		},
	},
};
