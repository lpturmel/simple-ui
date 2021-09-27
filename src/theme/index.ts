import ButtonOptions from "../components/Button/theme";
import HStackOptions from "../components/HStack/theme";
import InputOptions from "../components/Input/theme";
import ModalBodyOptions from "../components/Modal/ModalBody/theme";
import ModalContentOptions from "../components/Modal/ModalContent/theme";
import ModalFooterOptions from "../components/Modal/ModalFooter/theme";
import ModalHeaderOptions from "../components/Modal/ModalHeader/theme";
import ModalOverlayOptions from "../components/Modal/ModalOverlay/theme";
import ModalOptions from "../components/Modal/theme";
import VStackOptions from "../components/VStack/theme";
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
	/**
	 * TODO
	 */
	variants?: unknown;
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
	},
};
