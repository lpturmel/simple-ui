import { ThemeComponentOptions } from "../../..";

const ModalContentOptions: ThemeComponentOptions = {
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
};

export default ModalContentOptions;
