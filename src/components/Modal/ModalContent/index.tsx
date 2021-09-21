import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalContentProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalContent: Component<ModalContentProps> = (props) => {
	const defaultProps: PropsWithChildren<ModalContentProps> = {
		// add maxWidth & maxHeight: max-w-md max-h-32
		margin: "auto",
		w: "full",
		h: "full",
		display: "flex",
		flexDirection: "col",
		p: 2,
		maxWidth: "md",
		bg: "gray.100",
		borderRadius: "md",
		zIndex: 50,
	};
	const mergedProps = parseDefaultProps<ModalContentProps>(
		props,
		defaultProps
	);

	const tw = mapPropsToCss<PropsWithChildren<ModalContentProps>>(mergedProps);
	return <div class={tw}>{props.children}</div>;
};
export default ModalContent;
