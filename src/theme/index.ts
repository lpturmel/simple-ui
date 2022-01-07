import ButtonOptions from "../components/Button/theme";
import DividerOptions from "../components/Divider/theme";
import HStackOptions from "../components/HStack/theme";
import InputOptions from "../components/Input/theme";
import LinkOptions from "../components/Link/theme";
import ModalBodyOptions from "../components/Modal/ModalBody/theme";
import ModalContentOptions from "../components/Modal/ModalContent/theme";
import ModalFooterOptions from "../components/Modal/ModalFooter/theme";
import ModalHeaderOptions from "../components/Modal/ModalHeader/theme";
import ModalOverlayOptions from "../components/Modal/ModalOverlay/theme";
import ModalOptions from "../components/Modal/theme";
import TextOptions from "../components/Text/theme";
import VStackOptions from "../components/VStack/theme";

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
	Link?: ThemeComponentOptions;
}

export interface ComponentDefinition {
	/**
	 * Props applied when light mode is enabled
	 */
	light?: string;
	/**
	 * Props applied when dark mode is enabled
	 */
	dark?: string;
	/**
	 * Style to apply
	 */
	class?: string;
}
export interface ThemeComponentOptions {
	/**
	 * Props applied to the component regardless of current color mode
	 */
	default?: ComponentDefinition;
	/**
	 * Define isolated styles to apply via the variant prop
	 */
	variants?: {
		[key: string]: ComponentDefinition;
	};
}
export interface SimpleThemeConfig {
	Components?: SimpleComponentList;
	/**
	 * Style that applies to every component initially
	 */
	defaultProps?: ComponentDefinition;
	/**
	 * The color mode to set initially (defaults to dark)
	 */
	defaultColorMode?: "dark" | "light";
}

export const DefaultTheme: SimpleThemeConfig = {
	defaultColorMode: "dark",
	defaultProps: {
		// borderStyle: "solid",
		// borderWidth: 0,
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
		Link: {
			...LinkOptions,
		},
	},
};
