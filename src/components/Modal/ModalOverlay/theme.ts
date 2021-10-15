import { ThemeComponentOptions } from "../../../theme";

const ModalOverlayOptions: ThemeComponentOptions = {
	defaultProps: {
		top: 0,
		left: 0,
		position: "fixed",
		height: "screen",
		width: "screen",
		zIndex: 10,
		animate: "fadein",
	},
};

export default ModalOverlayOptions;
