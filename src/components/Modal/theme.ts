import { ThemeComponentOptions } from "../../theme";

const ModalOptions: ThemeComponentOptions = {
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
};

export default ModalOptions;
