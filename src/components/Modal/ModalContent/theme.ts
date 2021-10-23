import { ThemeComponentOptions } from "../../../theme";

const ModalContentOptions: ThemeComponentOptions = {
	default: {
		class:
			"relative rounded-md max-w-md m-auto w-full flex flex-col p-2 mt-16 mb-16 z-50",
		light: "text-black bg-white",
		dark: "text-white bg-gray-800",
	},
	// defaultProps: {
	// 	// add maxHeight: max-h-32
	// 	position: "relative",
	// 	maxWidth: "md",
	// 	margin: "auto",
	// 	width: "full",
	// 	display: "flex",
	// 	flexDirection: "col",
	// 	padding: 2,
	// 	marginTop: 16,
	// 	marginBottom: 16,
	// 	borderRadius: "md",
	// 	zIndex: 50,
	// 	animate: "fadein",
	// },
	// light: {
	// 	color: "black",
	// 	backgroundColor: "white",
	// },
	// dark: {
	// 	color: "white",
	// 	backgroundColor: "gray.800",
	// },
};

export default ModalContentOptions;
