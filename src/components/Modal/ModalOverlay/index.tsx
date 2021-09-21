import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalOverlayProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalOverlay: Component<ModalOverlayProps> = (props) => {
	const defaultProps: PropsWithChildren<ModalOverlayProps> = {
		top: 0,
		left: 0,
		position: "fixed",
		height: "screen",
		width: "screen",

		zIndex: 10,
	};
	const mergedProps = parseDefaultProps<ModalOverlayProps>(
		props,
		defaultProps
	);

	const tw = mapPropsToCss<PropsWithChildren<ModalOverlayProps>>(mergedProps);
	return <div class={tw} style={{ color: "rgba(0, 0, 0, 0.48)" }}></div>;
};
export default ModalOverlay;
