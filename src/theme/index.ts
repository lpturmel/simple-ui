import ButtonOptions from "../components/Button/theme";
import DividerOptions from "../components/Divider/theme";
import HStackOptions from "../components/HStack/theme";
import InputOptions from "../components/Input/theme";
import ModalBodyOptions from "../components/Modal/ModalBody/theme";
import ModalContentOptions from "../components/Modal/ModalContent/theme";
import ModalFooterOptions from "../components/Modal/ModalFooter/theme";
import ModalHeaderOptions from "../components/Modal/ModalHeader/theme";
import ModalOverlayOptions from "../components/Modal/ModalOverlay/theme";
import ModalOptions from "../components/Modal/theme";
import TextOptions from "../components/Text/theme";
import VStackOptions from "../components/VStack/theme";
import MainProps from "../props";

export interface SimpleComponentList {
	Button?: ThemeComponentOptions;
	Input?: ThemeComponentOptions;
	HStack?: ThemeComponentOptions;
	VStack?: ThemeComponentOptions;
	Divider?: ThemeComponentOptions;
	Select?: ThemeComponentOptions;
	Modal?: ThemeComponentOptions;
	ModalContent?: ThemeComponentOptions;
	ModalBody?: ThemeComponentOptions;
	ModalFooter?: ThemeComponentOptions;
	ModalHeader?: ThemeComponentOptions;
	ModalOverlay?: ThemeComponentOptions;
	Text?: ThemeComponentOptions;
}

export interface ThemeComponentOptions {
	defaultProps?: MainProps;
	/**
	 * TODO
	 */
	variants?: unknown;
}
export interface SimpleThemeConfig {
	Components?: SimpleComponentList;
	/**
	 * Style that applies to every element initially
	 */
	defaultProps?: MainProps;
}

export const DefaultTheme: SimpleThemeConfig = {
	defaultProps: {
		borderStyle: "solid",
		borderWidth: 0,
	},
	Components: {
		Button: {
			...ButtonOptions,
		},
		HStack: {
			...HStackOptions,
		},
		Divider: {
			...DividerOptions,
		},
		VStack: {
			...VStackOptions,
		},
		Input: {
			...InputOptions,
		},
		Modal: {
			...ModalOptions,
		},
		ModalOverlay: {
			...ModalOverlayOptions,
		},
		ModalHeader: {
			...ModalHeaderOptions,
		},
		ModalFooter: {
			...ModalFooterOptions,
		},
		ModalContent: {
			...ModalContentOptions,
		},
		ModalBody: {
			...ModalBodyOptions,
		},
		Text: {
			...TextOptions,
		},
	},
};
