import { ThemeComponentOptions } from "../../../theme";

const ModalContentOptions: ThemeComponentOptions = {
	defaultProps: {
		// add maxHeight: max-h-32
		position: "relative",
		maxWidth: "md",
		margin: "auto",
		width: "full",
		display: "flex",
		flexDirection: "col",
		padding: 2,
		marginTop: 16,
		marginBottom: 16,
		backgroundColor: "gray.100",
		borderRadius: "md",
		zIndex: 50,
	},
};

export default ModalContentOptions;
